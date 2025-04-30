import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Package, DollarSign, Users, ShoppingBag, ArrowRight } from "lucide-react";

// Demo data
const monthlySales = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 2000 },
  { name: "Apr", sales: 2780 },
  { name: "May", sales: 1890 },
  { name: "Jun", sales: 2390 },
];

const topProducts = [
  { id: 1, name: "Diamond Ring 1.2ct", sku: "DR-1234", stock: 5, price: "$1,299" },
  { id: 2, name: "Gold Chain 18K", sku: "GC-5678", stock: 12, price: "$899" },
  { id: 3, name: "Silver Bracelet", sku: "SB-9012", stock: 20, price: "$149" },
  { id: 4, name: "Pearl Necklace", sku: "PN-3456", stock: 8, price: "$499" },
];

const lowStockItems = [
  { id: 1, name: "Diamond Ring 1.2ct", sku: "DR-1234", stock: 5, reorder: 10 },
  { id: 2, name: "Ruby Earrings", sku: "RE-7890", stock: 3, reorder: 8 },
  { id: 3, name: "Platinum Band", sku: "PB-1357", stock: 2, reorder: 5 },
];

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif font-bold">Welcome, {user?.name}</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your jewelry inventory today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-jewelry-gold">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Inventory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">842</div>
              <Package className="h-8 w-8 text-jewelry-gold" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              +2.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Monthly Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">$24,308</div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              +18.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">129</div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              +5.4% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">18</div>
              <ShoppingBag className="h-8 w-8 text-purple-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              3 require attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Tables Row */}
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        {/* Sales Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Sales</CardTitle>
            <CardDescription>
              Sales performance over the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlySales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#D4AF37" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Low Stock Alert</CardTitle>
            <CardDescription>
              Items that need to be reordered soon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      SKU: {item.sku}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Current</p>
                      <p className={`font-medium ${item.stock <= 3 ? "text-red-500" : "text-amber-500"}`}>
                        {item.stock}
                      </p>
                    </div>
                    <div className="text-center ml-4">
                      <p className="text-sm text-muted-foreground">Reorder at</p>
                      <p className="font-medium">{item.reorder}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2">
                View All Low Stock
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Popular Products */}
      <Card>
        <CardHeader>
          <CardTitle>Top Products</CardTitle>
          <CardDescription>
            Your best performing jewelry items
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 text-left font-medium">Product Name</th>
                  <th className="pb-2 text-left font-medium">SKU</th>
                  <th className="pb-2 text-left font-medium">Stock</th>
                  <th className="pb-2 text-right font-medium">Price</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="py-3">{product.name}</td>
                    <td className="py-3 text-muted-foreground">{product.sku}</td>
                    <td className="py-3">{product.stock}</td>
                    <td className="py-3 text-right">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button variant="outline" className="w-full mt-4">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
