"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
  Users,
  ShoppingBag,
  Gift,
  TrendingUp,
  DollarSign,
  Eye,
  Star,
  Activity,
  Bell,
  Settings,
  Search,
  Download,
  Upload,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Award,
  Zap,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
} from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const stats = [
    {
      title: "Total Users",
      value: "12,543",
      change: "+12.5%",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Active Stores",
      value: "487",
      change: "+8.2%",
      icon: ShoppingBag,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Gift Cards Sold",
      value: "2,847",
      change: "+23.1%",
      icon: Gift,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Revenue",
      value: "₹4.2L",
      change: "+15.3%",
      icon: DollarSign,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ]

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "Rahul Sharma",
      email: "rahul@example.com",
      product: "Amazon Gift Card",
      amount: "₹1,000",
      status: "completed",
      date: "2024-01-15",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: "ORD-002",
      customer: "Priya Patel",
      email: "priya@example.com",
      product: "Flipkart Gift Card",
      amount: "₹500",
      status: "pending",
      date: "2024-01-15",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: "ORD-003",
      customer: "Amit Kumar",
      email: "amit@example.com",
      product: "Myntra Gift Card",
      amount: "₹750",
      status: "completed",
      date: "2024-01-14",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: "ORD-004",
      customer: "Sneha Singh",
      email: "sneha@example.com",
      product: "Nykaa Gift Card",
      amount: "₹300",
      status: "failed",
      date: "2024-01-14",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: "ORD-005",
      customer: "Vikash Gupta",
      email: "vikash@example.com",
      product: "Swiggy Gift Card",
      amount: "₹200",
      status: "completed",
      date: "2024-01-13",
      avatar: "/placeholder-user.jpg",
    },
  ]

  const giftCards = [
    {
      id: 1,
      name: "Amazon Gift Card",
      category: "E-commerce",
      price: "₹100 - ₹10,000",
      discount: "5%",
      status: "active",
      sales: 1250,
      rating: 4.8,
      image: "/amazon-logo.png",
    },
    {
      id: 2,
      name: "Flipkart Gift Card",
      category: "E-commerce",
      price: "₹50 - ₹5,000",
      discount: "3%",
      status: "active",
      sales: 980,
      rating: 4.6,
      image: "/flipkart-logo.png",
    },
    {
      id: 3,
      name: "Myntra Gift Card",
      category: "Fashion",
      price: "₹100 - ₹3,000",
      discount: "7%",
      status: "active",
      sales: 750,
      rating: 4.5,
      image: "/myntra-logo.png",
    },
    {
      id: 4,
      name: "Nykaa Gift Card",
      category: "Beauty",
      price: "₹100 - ₹2,000",
      discount: "10%",
      status: "inactive",
      sales: 420,
      rating: 4.3,
      image: "/nykaa-logo.png",
    },
  ]

  const stores = [
    {
      id: 1,
      name: "Amazon",
      category: "E-commerce",
      commission: "2.5%",
      status: "active",
      orders: 2450,
      revenue: "₹12.5L",
      logo: "/amazon-logo.png",
    },
    {
      id: 2,
      name: "Flipkart",
      category: "E-commerce",
      commission: "2.0%",
      status: "active",
      orders: 1890,
      revenue: "₹8.9L",
      logo: "/flipkart-logo.png",
    },
    {
      id: 3,
      name: "Myntra",
      category: "Fashion",
      commission: "3.5%",
      status: "active",
      orders: 1250,
      revenue: "₹6.2L",
      logo: "/myntra-logo.png",
    },
    {
      id: 4,
      name: "Nykaa",
      category: "Beauty",
      commission: "4.0%",
      status: "pending",
      orders: 890,
      revenue: "₹4.1L",
      logo: "/nykaa-logo.png",
    },
  ]

  const activities = [
    {
      id: 1,
      type: "order",
      message: "New order placed by Rahul Sharma",
      time: "2 minutes ago",
      icon: ShoppingBag,
      color: "text-blue-600",
    },
    {
      id: 2,
      type: "user",
      message: "New user registration: Priya Patel",
      time: "5 minutes ago",
      icon: Users,
      color: "text-green-600",
    },
    {
      id: 3,
      type: "gift-card",
      message: "Gift card activated: Amazon ₹1000",
      time: "10 minutes ago",
      icon: Gift,
      color: "text-purple-600",
    },
    {
      id: 4,
      type: "store",
      message: "Store partnership approved: Zomato",
      time: "15 minutes ago",
      icon: Award,
      color: "text-orange-600",
    },
    {
      id: 5,
      type: "system",
      message: "System maintenance completed",
      time: "1 hour ago",
      icon: Settings,
      color: "text-gray-600",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        )
      case "failed":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <XCircle className="w-3 h-3 mr-1" />
            Failed
          </Badge>
        )
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Active
          </Badge>
        )
      case "inactive":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            <XCircle className="w-3 h-3 mr-1" />
            Inactive
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Manage your platform efficiently</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Add New
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium mt-1">{stat.change} from last month</p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "orders", label: "Orders", icon: ShoppingBag },
              { id: "gift-cards", label: "Gift Cards", icon: Gift },
              { id: "stores", label: "Stores", icon: ShoppingBag },
              { id: "users", label: "Users", icon: Users },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {activeTab === "overview" && (
              <>
                {/* Charts Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <LineChart className="w-5 h-5 text-blue-600" />
                        <span>Revenue Trend</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                          <p className="text-gray-600">Revenue Chart</p>
                          <p className="text-sm text-gray-500">Interactive chart would go here</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <PieChart className="w-5 h-5 text-green-600" />
                        <span>Category Distribution</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                          <p className="text-gray-600">Category Chart</p>
                          <p className="text-sm text-gray-500">Pie chart would go here</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Orders */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2">
                        <ShoppingBag className="w-5 h-5 text-purple-600" />
                        <span>Recent Orders</span>
                      </CardTitle>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Product</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {recentOrders.map((order) => (
                            <TableRow key={order.id} className="hover:bg-gray-50">
                              <TableCell>
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">{order.customer.charAt(0)}</span>
                                  </div>
                                  <div>
                                    <p className="font-medium text-gray-900">{order.customer}</p>
                                    <p className="text-sm text-gray-500">{order.email}</p>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="font-medium">{order.product}</TableCell>
                              <TableCell className="font-semibold text-green-600">{order.amount}</TableCell>
                              <TableCell>{getStatusBadge(order.status)}</TableCell>
                              <TableCell className="text-gray-500">{order.date}</TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      <MoreHorizontal className="w-4 h-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                      <Eye className="w-4 h-4 mr-2" />
                                      View Details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Edit className="w-4 h-4 mr-2" />
                                      Edit Order
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600">
                                      <Trash2 className="w-4 h-4 mr-2" />
                                      Delete
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {activeTab === "gift-cards" && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Gift className="w-5 h-5 text-purple-600" />
                      <span>Gift Cards Management</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input placeholder="Search gift cards..." className="pl-10 w-64" />
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Gift Card
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Add New Gift Card</DialogTitle>
                            <DialogDescription>Create a new gift card for your platform</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="name">Gift Card Name</Label>
                              <Input id="name" placeholder="e.g., Amazon Gift Card" />
                            </div>
                            <div>
                              <Label htmlFor="category">Category</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                                  <SelectItem value="fashion">Fashion</SelectItem>
                                  <SelectItem value="beauty">Beauty</SelectItem>
                                  <SelectItem value="food">Food & Dining</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="min-price">Min Price</Label>
                                <Input id="min-price" placeholder="₹100" />
                              </div>
                              <div>
                                <Label htmlFor="max-price">Max Price</Label>
                                <Input id="max-price" placeholder="₹10,000" />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="discount">Discount %</Label>
                              <Input id="discount" placeholder="5" />
                            </div>
                            <div>
                              <Label htmlFor="description">Description</Label>
                              <Textarea id="description" placeholder="Gift card description..." />
                            </div>
                            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                              Create Gift Card
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {giftCards.map((card) => (
                      <Card
                        key={card.id}
                        className="border border-gray-200 hover:shadow-lg transition-all duration-300"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Gift className="w-6 h-6 text-purple-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">{card.name}</h3>
                                <p className="text-sm text-gray-500">{card.category}</p>
                              </div>
                            </div>
                            {getStatusBadge(card.status)}
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Price Range</span>
                              <span className="font-medium">{card.price}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Discount</span>
                              <Badge className="bg-green-100 text-green-800">{card.discount}</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Sales</span>
                              <span className="font-medium">{card.sales}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Rating</span>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="font-medium">{card.rating}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 mt-4 pt-4 border-t">
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-600 hover:text-red-700 bg-transparent"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "stores" && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <ShoppingBag className="w-5 h-5 text-blue-600" />
                      <span>Partner Stores</span>
                    </CardTitle>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Store
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Store</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Commission</TableHead>
                          <TableHead>Orders</TableHead>
                          <TableHead>Revenue</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {stores.map((store) => (
                          <TableRow key={store.id} className="hover:bg-gray-50">
                            <TableCell>
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                  <ShoppingBag className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">{store.name}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{store.category}</Badge>
                            </TableCell>
                            <TableCell className="font-medium text-green-600">{store.commission}</TableCell>
                            <TableCell className="font-medium">{store.orders}</TableCell>
                            <TableCell className="font-semibold text-blue-600">{store.revenue}</TableCell>
                            <TableCell>{getStatusBadge(store.status)}</TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="w-4 h-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Eye className="w-4 h-4 mr-2" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="w-4 h-4 mr-2" />
                                    Edit Store
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Remove
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Store
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Gift className="w-4 h-4 mr-2" />
                  Create Gift Card
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Data
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-green-600" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0`}
                      >
                        <activity.icon className={`w-4 h-4 ${activity.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 font-medium">{activity.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  <Eye className="w-4 h-4 mr-2" />
                  View All Activity
                </Button>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  <span>Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Conversion Rate</span>
                    <span className="font-semibold text-green-600">12.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Customer Satisfaction</span>
                    <span className="font-semibold text-blue-600">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{ width: "94%" }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Revenue Growth</span>
                    <span className="font-semibold text-purple-600">+23%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bell className="w-5 h-5 text-red-600" />
                    <span>Notifications</span>
                  </div>
                  <Badge className="bg-red-100 text-red-800">3</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium text-red-800">System Alert</span>
                  </div>
                  <p className="text-sm text-red-700 mt-1">Server maintenance scheduled for tonight</p>
                </div>

                <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-800">Pending Review</span>
                  </div>
                  <p className="text-sm text-yellow-700 mt-1">5 new store applications awaiting approval</p>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Update Available</span>
                  </div>
                  <p className="text-sm text-blue-700 mt-1">New platform features ready to deploy</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
