import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

// Define user roles
export type UserRole = "admin" | "manager" | "sales";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Create our auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hardcoded demo users for different roles
const DEMO_USERS: Record<string, User> = {
  "admin@sjjewelry.com": {
    id: "1",
    name: "Admin User",
    email: "admin@sjjewelry.com",
    role: "admin"
  },
  "manager@sjjewelry.com": {
    id: "2",
    name: "Store Manager",
    email: "manager@sjjewelry.com",
    role: "manager"
  },
  "sales@sjjewelry.com": {
    id: "3",
    name: "Sales Staff",
    email: "sales@sjjewelry.com",
    role: "sales"
  }
};

// Demo password for all users
const DEMO_PASSWORD = "password123";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if we have a user in localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("sjjewelry-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const lowercaseEmail = email.toLowerCase();
      
      if (DEMO_USERS[lowercaseEmail] && password === DEMO_PASSWORD) {
        const loggedInUser = DEMO_USERS[lowercaseEmail];
        setUser(loggedInUser);
        localStorage.setItem("sjjewelry-user", JSON.stringify(loggedInUser));
        toast({
          title: "Login Successful",
          description: `Welcome back, ${loggedInUser.name}!`,
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("sjjewelry-user");
    navigate("/");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Higher order component for protected routes
export function withAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    const { isAuthenticated, isLoading } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        navigate("/");
      }
    }, [isAuthenticated, isLoading, navigate]);
    
    if (isLoading) {
      return <div className="flex h-screen items-center justify-center">Loading...</div>;
    }
    
    return isAuthenticated ? <Component {...props} /> : null;
  };
}
