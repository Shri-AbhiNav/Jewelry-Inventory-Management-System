import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Search, Plus, Phone, Mail } from "lucide-react";

// Demo customer data
const customers = [
  {
    id: 1,
    name: "Raj Patel",
    email: "raj.patel@example.com",
    phone: "+91 98765 43210",
    totalOrders: 8,
    totalSpent: "₹3,45,750"
  },
  {
    id: 2,
    name: "Ananya Sharma",
    email: "ananya.s@example.com",
    phone: "+91 87654 32109",
    totalOrders: 5,
    totalSpent: "₹1,87,500"
  },
  {
    id: 3,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    phone: "+91 76543 21098",
    totalOrders: 3,
    totalSpent: "₹2,58,999"
  },
  {
    id: 4,
    name: "Priya Mehta",
    email: "priya.m@example.com",
    phone: "+91 65432 10987",
    totalOrders: 12,
    totalSpent: "₹5,67,800"
  },
  {
    id: 5,
    name: "Arjun Kumar",
    email: "arjun.kumar@example.com",
    phone: "+91 54321 09876",
    totalOrders: 2,
    totalSpent: "₹95,450"
  },
  {
    id: 6,
    name: "Neha Desai",
    email: "neha.desai@example.com",
    phone: "+91 43210 98765",
    totalOrders: 7,
    totalSpent: "₹2,78,350"
  }
];

const Customers = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif font-bold flex items-center">
          <Users className="mr-2 h-6 w-6 text-jewelry-gold" />
          Customers
        </h1>
        <p className="text-muted-foreground">
          Manage customer information, track purchase history, and build relationships.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Total Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">129</div>
            <p className="text-xs text-muted-foreground mt-1">+5 new this month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Repeat Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">78</div>
            <p className="text-xs text-muted-foreground mt-1">60.5% of total</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Average Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₹42,500</div>
            <p className="text-xs text-muted-foreground mt-1">+8.7% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Directory</CardTitle>
          <CardDescription>
            View and manage your customer database
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search customers..."
                className="pl-10"
              />
            </div>
            <div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
            </div>
          </div>
          
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead className="text-center">Orders</TableHead>
                  <TableHead className="text-right">Total Spent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <div className="flex items-center text-sm">
                          <Mail className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                          {customer.email}
                        </div>
                        <div className="flex items-center text-sm mt-1">
                          <Phone className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                          {customer.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{customer.totalOrders}</TableCell>
                    <TableCell className="text-right">{customer.totalSpent}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Customers;
