import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/Dashboard/Home";
import Inventory from "./pages/Dashboard/Inventory";
import DashboardNotFound from "./pages/Dashboard/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="sales" element={<DashboardNotFound />} />
              <Route path="customers" element={<DashboardNotFound />} />
              <Route path="suppliers" element={<DashboardNotFound />} />
              <Route path="reports" element={<DashboardNotFound />} />
              <Route path="finance" element={<DashboardNotFound />} />
              <Route path="settings" element={<DashboardNotFound />} />
              <Route path="*" element={<DashboardNotFound />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
