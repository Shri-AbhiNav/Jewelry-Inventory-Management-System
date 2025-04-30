import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Package, Search, Filter, Plus } from "lucide-react";

// Demo inventory data
const inventoryItems = [
  {
    id: 1,
    name: "Diamond Ring 1.2ct",
    sku: "DR-1234",
    category: "Rings",
    type: "Diamond",
    quantity: 5,
    price: "$1,299"
  },
  {
    id: 2,
    name: "Gold Chain 18K",
    sku: "GC-5678",
    category: "Necklaces",
    type: "Gold",
    quantity: 12,
    price: "$899"
  },
  {
    id: 3,
    name: "Silver Bracelet",
    sku: "SB-9012",
    category: "Bracelets",
    type: "Silver",
    quantity: 20,
    price: "$149"
  },
  {
    id: 4,
    name: "Pearl Necklace",
    sku: "PN-3456",
    category: "Necklaces",
    type: "Pearl",
    quantity: 8,
    price: "$499"
  },
  {
    id: 5,
    name: "Ruby Earrings",
    sku: "RE-7890",
    category: "Earrings",
    type: "Ruby",
    quantity: 3,
    price: "$799"
  },
  {
    id: 6,
    name: "Platinum Band",
    sku: "PB-1357",
    category: "Rings",
    type: "Platinum",
    quantity: 2,
    price: "$1,099"
  }
];

const Inventory = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif font-bold flex items-center">
          <Package className="mr-2 h-6 w-6 text-jewelry-gold" />
          Inventory Management
        </h1>
        <p className="text-muted-foreground">
          Manage your jewelry inventory items, track stock levels, and more.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inventory Items</CardTitle>
          <CardDescription>
            View and manage all your jewelry inventory
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search inventory..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Item
              </Button>
            </div>
          </div>
          
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventoryItems.map((item) => (
                  <TableRow key={item.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.sku}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell className="text-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.quantity <= 3 
                          ? "bg-red-100 text-red-800" 
                          : item.quantity <= 10 
                            ? "bg-amber-100 text-amber-800" 
                            : "bg-green-100 text-green-800"
                      }`}>
                        {item.quantity}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">{item.price}</TableCell>
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

export default Inventory;
