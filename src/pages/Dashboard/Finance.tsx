import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, IndianRupee, ArrowDown, ArrowUp, Download, CreditCard, Calendar } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Demo data
const monthlyFinanceData = [
  { name: "Jan", revenue: 452000, expenses: 278000, profit: 174000 },
  { name: "Feb", revenue: 438000, expenses: 254000, profit: 184000 },
  { name: "Mar", revenue: 492000, expenses: 285000, profit: 207000 },
  { name: "Apr", revenue: 520000, expenses: 304000, profit: 216000 },
  { name: "May", revenue: 503000, expenses: 298000, profit: 205000 },
  { name: "Jun", revenue: 548000, expenses: 318000, profit: 230000 },
];

const recentTransactions = [
  { id: "TRX-3421", date: "29 Apr 2025", description: "Sales Order #ORD-1234", type: "income", amount: 127500 },
  { id: "TRX-3420", date: "28 Apr 2025", description: "Vendor Payment - Gold Fusion", type: "expense", amount: 352800 },
  { id: "TRX-3419", date: "27 Apr 2025", description: "Sales Order #ORD-1235", type: "income", amount: 65999 },
  { id: "TRX-3418", date: "25 Apr 2025", description: "Staff Salary - April", type: "expense", amount: 185000 },
  { id: "TRX-3417", date: "24 Apr 2025", description: "Sales Order #ORD-1236", type: "income", amount: 99999 },
];

const upcomingPayments = [
  { id: 1, date: "05 May 2025", description: "Rent Payment", amount: 75000 },
  { id: 2, date: "10 May 2025", description: "Vendor Payment - Diamond Universe", amount: 450000 },
  { id: 3, date: "15 May 2025", description: "Utility Bills", amount: 12500 },
];

const taxDetails = [
  { name: "Q1", gst: 135000, income: 98000, total: 233000 },
  { name: "Q2", gst: 155000, income: 115000, total: 270000 },
  { name: "Q3", gst: 0, income: 0, total: 0 },
  { name: "Q4", gst: 0, income: 0, total: 0 },
];

const FinancePage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif font-bold flex items-center">
          <IndianRupee className="mr-2 h-6 w-6 text-jewelry-gold" />
          Financial Management
        </h1>
        <p className="text-muted-foreground">
          Track revenue, expenses, and manage financial reports.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">₹52,33,000</div>
              <IndianRupee className="h-8 w-8 text-jewelry-gold" />
            </div>
            <div className="flex items-center mt-1 text-green-600 text-sm">
              <ArrowUp className="h-3 w-3 mr-1" />
              <span>12.5% from last year</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">₹31,37,000</div>
              <CreditCard className="h-8 w-8 text-red-500" />
            </div>
            <div className="flex items-center mt-1 text-red-600 text-sm">
              <ArrowUp className="h-3 w-3 mr-1" />
              <span>8.3% from last year</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Net Profit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">₹20,96,000</div>
              <ArrowUp className="h-8 w-8 text-green-500" />
            </div>
            <div className="flex items-center mt-1 text-green-600 text-sm">
              <ArrowUp className="h-3 w-3 mr-1" />
              <span>18.7% from last year</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">₹5,37,500</div>
              <Calendar className="h-8 w-8 text-amber-500" />
            </div>
            <div className="flex items-center mt-1 text-amber-600 text-sm">
              <ArrowDown className="h-3 w-3 mr-1" />
              <span>Due within 30 days</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="taxes">Taxes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Financial Performance</CardTitle>
              <CardDescription>Revenue, expenses, and profit over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyFinanceData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `₹${(value/1000)}K`} />
                  <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="revenue" stackId="a" fill="#D4AF37" name="Revenue" />
                  <Bar dataKey="expenses" stackId="a" fill="#0F172A" name="Expenses" />
                  <Line type="monotone" dataKey="profit" stroke="#22c55e" name="Profit" strokeWidth={2} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your last 5 financial transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between border-b pb-3">
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{transaction.date}</span>
                        </div>
                      </div>
                      <div className={`font-medium ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.type === 'income' ? '+' : '-'} ₹{transaction.amount.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Transactions
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Payments</CardTitle>
                <CardDescription>Scheduled outgoing payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingPayments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between border-b pb-3">
                      <div>
                        <p className="font-medium">{payment.description}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{payment.date}</span>
                        </div>
                      </div>
                      <div className="font-medium text-red-600">
                        - ₹{payment.amount.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Schedule Payment
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Complete record of your financial transactions</CardDescription>
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.concat([
                      { id: "TRX-3416", date: "22 Apr 2025", description: "GST Payment - Q1", type: "expense", amount: 135000 },
                      { id: "TRX-3415", date: "21 Apr 2025", description: "Sales Order #ORD-1237", type: "income", amount: 47899 },
                      { id: "TRX-3414", date: "20 Apr 2025", description: "Vendor Payment - Silver Crafts", type: "expense", amount: 125000 },
                      { id: "TRX-3413", date: "19 Apr 2025", description: "Sales Order #ORD-1238", type: "income", amount: 85450 },
                      { id: "TRX-3412", date: "18 Apr 2025", description: "Store Maintenance", type: "expense", amount: 15000 },
                    ]).map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            transaction.type === 'income' 
                              ? "bg-green-100 text-green-800" 
                              : "bg-red-100 text-red-800"
                          }`}>
                            {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className={`text-right ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                          {transaction.type === 'income' ? '+' : '-'} ₹{transaction.amount.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="taxes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tax Summary (2025)</CardTitle>
              <CardDescription>Quarterly tax payments and projections</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={taxDetails}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `₹${(value/1000)}K`} />
                  <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="gst" stackId="a" fill="#D4AF37" name="GST" />
                  <Bar dataKey="income" stackId="a" fill="#0F172A" name="Income Tax" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tax Filing Status</CardTitle>
              <CardDescription>Status of your tax filings for the current financial year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Q1 2025</TableCell>
                      <TableCell>GST</TableCell>
                      <TableCell>20 Apr 2025</TableCell>
                      <TableCell>₹135,000</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Filed</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Q1 2025</TableCell>
                      <TableCell>Income Tax</TableCell>
                      <TableCell>15 Apr 2025</TableCell>
                      <TableCell>₹98,000</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Filed</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Q2 2025</TableCell>
                      <TableCell>GST</TableCell>
                      <TableCell>20 Jul 2025</TableCell>
                      <TableCell>₹155,000</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800">Upcoming</span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Q2 2025</TableCell>
                      <TableCell>Income Tax</TableCell>
                      <TableCell>15 Jul 2025</TableCell>
                      <TableCell>₹115,000</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800">Upcoming</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FinancePage;
