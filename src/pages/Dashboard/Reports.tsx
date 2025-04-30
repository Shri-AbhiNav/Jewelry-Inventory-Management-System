import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BarChart4, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Demo data
const monthlySales = [
  { name: "Jan", sales: 320000 },
  { name: "Feb", sales: 280000 },
  { name: "Mar", sales: 350000 },
  { name: "Apr", sales: 420000 },
  { name: "May", sales: 380000 },
  { name: "Jun", sales: 490000 },
];

const categorySales = [
  { name: "Rings", value: 35 },
  { name: "Necklaces", value: 25 },
  { name: "Earrings", value: 20 },
  { name: "Bracelets", value: 15 },
  { name: "Others", value: 5 },
];

const inventoryValue = [
  { name: "Gold", value: 4500000 },
  { name: "Diamond", value: 6800000 },
  { name: "Silver", value: 1200000 },
  { name: "Platinum", value: 2300000 },
  { name: "Gemstones", value: 1700000 },
];

const salesTrend = [
  { name: "Week 1", current: 125000, previous: 115000 },
  { name: "Week 2", current: 145000, previous: 130000 },
  { name: "Week 3", current: 165000, previous: 155000 },
  { name: "Week 4", current: 180000, previous: 160000 },
];

const COLORS = ["#D4AF37", "#0F172A", "#C0C0C0", "#800020", "#FAF9F6"];

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif font-bold flex items-center">
          <BarChart4 className="mr-2 h-6 w-6 text-jewelry-gold" />
          Reports & Analytics
        </h1>
        <p className="text-muted-foreground">
          Analyze your business performance with detailed reports and insights.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-2">
        <div className="flex items-center gap-4">
          <Select defaultValue="april">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="january">January 2025</SelectItem>
              <SelectItem value="february">February 2025</SelectItem>
              <SelectItem value="march">March 2025</SelectItem>
              <SelectItem value="april">April 2025</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Reports
        </Button>
      </div>

      <Tabs defaultValue="sales">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₹18,23,308</div>
                <p className="text-xs text-muted-foreground mt-1">+18.2% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">87</div>
                <p className="text-xs text-muted-foreground mt-1">+7.4% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Average Order Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₹20,958</div>
                <p className="text-xs text-muted-foreground mt-1">+10.1% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Sales Trend</CardTitle>
                <CardDescription>Sales performance in ₹ over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlySales}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `₹${(value/1000)}K`} />
                    <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                    <Bar dataKey="sales" fill="#D4AF37" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                <CardDescription>Product category distribution by percentage</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categorySales}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {categorySales.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Sales Comparison</CardTitle>
              <CardDescription>Current month vs previous month performance</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `₹${(value/1000)}K`} />
                  <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                  <Legend />
                  <Line type="monotone" dataKey="current" stroke="#D4AF37" strokeWidth={2} />
                  <Line type="monotone" dataKey="previous" stroke="#0F172A" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">842</div>
                <p className="text-xs text-muted-foreground mt-1">Across 5 categories</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Low Stock Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">14</div>
                <p className="text-xs text-muted-foreground mt-1 text-red-500">Requires attention</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Inventory Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₹1,65,00,000</div>
                <p className="text-xs text-muted-foreground mt-1">At current market rates</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Inventory Value by Type</CardTitle>
              <CardDescription>Distribution of inventory value by material type</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={inventoryValue} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `₹${(value/100000).toFixed(1)}L`} />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                  <Bar dataKey="value" fill="#D4AF37" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <CardTitle>Customer Analytics</CardTitle>
              <CardDescription>These reports are being generated. Check back later.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center py-20">
              <p className="text-muted-foreground">Customer reports will be available in the next update</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finance">
          <Card>
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>These reports are being generated. Check back later.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center py-20">
              <p className="text-muted-foreground">Financial reports will be available in the next update</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
