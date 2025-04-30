import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Package, 
  ShoppingBag, 
  Users, 
  UserCog, 
  BarChart4, 
  Settings,
  DollarSign
} from "lucide-react";

interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  role?: string[];
}

interface SidebarProps {
  open: boolean;
}

const SidebarLink = ({ to, icon: Icon, label, isActive, role = [] }: SidebarLinkProps) => {
  const { user } = useAuth();
  
  // Hide if user role doesn't have access to this menu item
  if (role.length > 0 && user && !role.includes(user.role)) {
    return null;
  }
  
  return (
    <Link to={to}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start mb-1",
          isActive 
            ? "bg-sidebar-accent text-white font-medium border-l-4 border-jewelry-gold" 
            : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-white"
        )}
      >
        <Icon className={cn("mr-3 h-5 w-5", isActive ? "text-jewelry-gold" : "")} />
        {label}
      </Button>
    </Link>
  );
};

const DashboardSidebar = ({ open }: SidebarProps) => {
  const location = useLocation();
  const { user } = useAuth();
  
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home, role: ["admin", "manager", "sales"] },
    { path: "/dashboard/inventory", label: "Inventory", icon: Package, role: ["admin", "manager", "sales"] },
    { path: "/dashboard/sales", label: "Sales Orders", icon: ShoppingBag, role: ["admin", "manager", "sales"] },
    { path: "/dashboard/customers", label: "Customers", icon: Users, role: ["admin", "manager", "sales"] },
    { path: "/dashboard/suppliers", label: "Suppliers", icon: UserCog, role: ["admin", "manager"] },
    { path: "/dashboard/reports", label: "Reports", icon: BarChart4, role: ["admin", "manager"] },
    { path: "/dashboard/finance", label: "Finance", icon: DollarSign, role: ["admin"] },
    { path: "/dashboard/settings", label: "Settings", icon: Settings, role: ["admin"] },
  ];
  
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-sidebar transition-all duration-300",
        open ? "w-64" : "w-0 md:w-20"
      )}
    >
      <div className="flex h-16 items-center justify-center border-b border-sidebar-border">
        <div className={cn("flex items-center", open ? "px-4" : "px-0")}>
          <span className={cn("text-2xl font-serif font-bold", open ? "block" : "hidden md:block")}>
            <span className="text-jewelry-gold">SJ</span> 
            <span className={cn("transition-opacity duration-300", open ? "opacity-100" : "opacity-0 hidden md:block")}>Jewelry</span>
          </span>
        </div>
      </div>
      
      <div className={cn("py-4 overflow-y-auto", open ? "px-3" : "px-2")}>
        <div className={cn("space-y-1", !open && "items-center")}>
          {navItems.map((item) => (
            <SidebarLink
              key={item.path}
              to={item.path}
              icon={item.icon}
              label={open ? item.label : ""}
              isActive={location.pathname === item.path}
              role={item.role}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 px-3">
        <div className={cn(
          "rounded-lg bg-jewelry-gold/10 p-3 text-xs",
          !open && "hidden md:block md:text-center"
        )}>
          <div className="font-medium text-jewelry-gold">{user?.role?.toUpperCase()}</div>
          <div className={cn("text-white/70 mt-1", !open && "hidden")}>Access Level</div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
