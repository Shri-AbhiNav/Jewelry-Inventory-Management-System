import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-jewelry-cream to-white p-4">
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-jewelry-navy mb-2">
          <span className="text-jewelry-gold">SJ</span> Jewelry
        </h1>
        <p className="text-muted-foreground">Inventory Management System</p>
      </div>

      <div className="w-full max-w-md">
        <Card className="border-2 border-jewelry-gold/20 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-serif text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@sjjewelry.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="text-sm text-muted-foreground mt-2">
                <p>Demo Accounts:</p>
                <p>admin@sjjewelry.com / password123</p>
                <p>manager@sjjewelry.com / password123</p>
                <p>sales@sjjewelry.com / password123</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full bg-jewelry-gold hover:bg-jewelry-gold/90 text-black" 
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
