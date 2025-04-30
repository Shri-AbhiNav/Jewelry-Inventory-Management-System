import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth, withAuth } from "@/contexts/AuthContext";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user } = useAuth();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar open={sidebarOpen} />
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "ml-0"}`}>
        <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50/30">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default withAuth(DashboardLayout);
