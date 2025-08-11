"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BarChart3,
  Package,
  Tag,
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  LogOut,
  Home,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data
const dashboardStats = {
  totalBrands: 48,
  totalCoupons: 156,
  activeCoupons: 142,
  expiringSoon: 8,
}

const recentBrands = [
  { id: 1, name: "Amazon", logo: "/amazon-logo.png", coupons: 25, status: "active" },
  { id: 2, name: "Myntra", logo: "/myntra-logo.png", coupons: 18, status: "active" },
  { id: 3, name: "Zomato", logo: "/generic-food-delivery-logo.png", coupons: 12, status: "active" },
  { id: 4, name: "Flipkart", logo: "/flipkart-logo.png", coupons: 22, status: "active" },
  { id: 5, name: "Swiggy", logo: "/generic-food-delivery-logo.png", coupons: 15, status: "active" },
]

const recentCoupons = [
  {
    id: 1,
    title: "Flat 50% Off on Electronics",
    brand: "Amazon",
    code: "SAVE50",
    expiryDate: "2025-08-15",
    status: "active",
  },
  { id: 2, title: "Buy 2 Get 1 Free", brand: "Myntra", code: "FASHION3", expiryDate: "2025-08-20", status: "active" },
  { id: 3, title: "Free Delivery", brand: "Zomato", code: "", expiryDate: "2025-08-18", status: "active" },
  { id: 4, title: "Extra 20% Off", brand: "Flipkart", code: "HOME20", expiryDate: "2025-08-14", status: "expiring" },
  { id: 5, title: "Weekend Special", brand: "Swiggy", code: "WEEKEND60", expiryDate: "2025-08-13", status: "expiring" },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddBrandOpen, setIsAddBrandOpen] = useState(false)
  const [isAddCouponOpen, setIsAddCouponOpen] = useState(false)

  const [newBrand, setNewBrand] = useState({ name: "", logo: "" })
  const [newCoupon, setNewCoupon] = useState({
    title: "",
    brand: "",
    code: "",
    description: "",
    expiryDate: "",
    type: "code",
  })

  const [brands, setBrands] = useState(recentBrands)
  const [coupons, setCoupons] = useState(recentCoupons)
  const [editingBrand, setEditingBrand] = useState(null)
  const [editingCoupon, setEditingCoupon] = useState(null)

  const handleAddBrand = (e: React.FormEvent) => {
    e.preventDefault()
    const newBrandData = {
      id: brands.length + 1,
      name: newBrand.name,
      logo: newBrand.logo || "/placeholder.svg",
      coupons: 0,
      status: "active",
    }
    setBrands([...brands, newBrandData])
    setIsAddBrandOpen(false)
    setNewBrand({ name: "", logo: "" })
  }

  const handleAddCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    const newCouponData = {
      id: coupons.length + 1,
      title: newCoupon.title,
      brand: newCoupon.brand,
      code: newCoupon.code,
      expiryDate: newCoupon.expiryDate,
      status: "active",
    }
    setCoupons([...coupons, newCouponData])
    setIsAddCouponOpen(false)
    setNewCoupon({ title: "", brand: "", code: "", description: "", expiryDate: "", type: "code" })
  }

  const handleDeleteBrand = (brandId: number) => {
    setBrands(brands.filter((brand) => brand.id !== brandId))
    setCoupons(coupons.filter((coupon) => coupon.brand !== brands.find((b) => b.id === brandId)?.name))
  }

  const handleDeleteCoupon = (couponId: number) => {
    setCoupons(coupons.filter((coupon) => coupon.id !== couponId))
  }

  const handleEditBrand = (brand: any) => {
    setEditingBrand(brand)
    setNewBrand({ name: brand.name, logo: brand.logo })
    setIsAddBrandOpen(true)
  }

  const handleEditCoupon = (coupon: any) => {
    setEditingCoupon(coupon)
    setNewCoupon({
      title: coupon.title,
      brand: coupon.brand,
      code: coupon.code,
      description: "",
      expiryDate: coupon.expiryDate,
      type: coupon.code ? "code" : "deal",
    })
    setIsAddCouponOpen(true)
  }

  const resetBrandForm = () => {
    setEditingBrand(null)
    setNewBrand({ name: "", logo: "" })
    setIsAddBrandOpen(false)
  }

  const resetCouponForm = () => {
    setEditingCoupon(null)
    setNewCoupon({ title: "", brand: "", code: "", description: "", expiryDate: "", type: "code" })
    setIsAddCouponOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-16 border-b">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Fayeda Club" width={32} height={32} className="rounded" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
              Fayeda Club
            </h1>
          </div>
        </div>
        <nav className="mt-8">
          <div className="px-4 space-y-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === "overview" ? "bg-orange-100 text-orange-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <BarChart3 className="h-5 w-5 mr-3" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab("brands")}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === "brands" ? "bg-orange-100 text-orange-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Package className="h-5 w-5 mr-3" />
              Brands
            </button>
            <button
              onClick={() => setActiveTab("coupons")}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === "coupons" ? "bg-orange-100 text-orange-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Tag className="h-5 w-5 mr-3" />
              Coupons
            </button>
            <Link
              href="/"
              className="w-full flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Home className="h-5 w-5 mr-3" />
              View Website
            </Link>
          </div>
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="outline" className="w-full bg-transparent">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
          <h2 className="text-2xl font-bold text-gray-900 capitalize">{activeTab}</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Brands</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardStats.totalBrands}</div>
                    <p className="text-xs text-muted-foreground">+2 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Coupons</CardTitle>
                    <Tag className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{dashboardStats.totalCoupons}</div>
                    <p className="text-xs text-muted-foreground">+12 from last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Coupons</CardTitle>
                    <Tag className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">{dashboardStats.activeCoupons}</div>
                    <p className="text-xs text-muted-foreground">91% of total coupons</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
                    <Tag className="h-4 w-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">{dashboardStats.expiringSoon}</div>
                    <p className="text-xs text-muted-foreground">Next 7 days</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Brands</CardTitle>
                    <CardDescription>Latest brands added to the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBrands.slice(0, 5).map((brand) => (
                        <div key={brand.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Image
                              src={brand.logo || "/placeholder.svg"}
                              alt={brand.name}
                              width={32}
                              height={32}
                              className="rounded"
                            />
                            <div>
                              <p className="font-medium">{brand.name}</p>
                              <p className="text-sm text-gray-500">{brand.coupons} coupons</p>
                            </div>
                          </div>
                          <Badge variant="secondary">Active</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Coupons</CardTitle>
                    <CardDescription>Latest coupons added to the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentCoupons.slice(0, 5).map((coupon) => (
                        <div key={coupon.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{coupon.title}</p>
                            <p className="text-sm text-gray-500">{coupon.brand}</p>
                          </div>
                          <Badge variant={coupon.status === "expiring" ? "destructive" : "secondary"}>
                            {coupon.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "brands" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Manage Brands</h3>
                <Dialog open={isAddBrandOpen} onOpenChange={setIsAddBrandOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Brand
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{editingBrand ? "Edit Brand" : "Add New Brand"}</DialogTitle>
                      <DialogDescription>Add a new brand to the Fayeda Club platform</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAddBrand} className="space-y-4">
                      <div>
                        <Label htmlFor="brandName">Brand Name</Label>
                        <Input
                          id="brandName"
                          value={newBrand.name}
                          onChange={(e) => setNewBrand({ ...newBrand, name: e.target.value })}
                          placeholder="Enter brand name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="brandLogo">Logo URL</Label>
                        <Input
                          id="brandLogo"
                          value={newBrand.logo}
                          onChange={(e) => setNewBrand({ ...newBrand, logo: e.target.value })}
                          placeholder="Enter logo URL"
                          required
                        />
                      </div>
                      <div className="flex space-x-2">
                        <Button type="submit" className="flex-1">
                          {editingBrand ? "Update Brand" : "Add Brand"}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setIsAddBrandOpen(false)
                            resetBrandForm()
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Brand</TableHead>
                        <TableHead>Coupons</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {brands.map((brand) => (
                        <TableRow key={brand.id}>
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <Image
                                src={brand.logo || "/placeholder.svg"}
                                alt={brand.name}
                                width={40}
                                height={40}
                                className="rounded"
                              />
                              <span className="font-medium">{brand.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>{brand.coupons}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">Active</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleEditBrand(brand)}>
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteBrand(brand.id)}>
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "coupons" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Manage Coupons</h3>
                <Dialog open={isAddCouponOpen} onOpenChange={setIsAddCouponOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Coupon
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>{editingCoupon ? "Edit Coupon" : "Add New Coupon"}</DialogTitle>
                      <DialogDescription>Add a new coupon to the selected brand</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAddCoupon} className="space-y-4">
                      <div>
                        <Label htmlFor="couponTitle">Coupon Title</Label>
                        <Input
                          id="couponTitle"
                          value={newCoupon.title}
                          onChange={(e) => setNewCoupon({ ...newCoupon, title: e.target.value })}
                          placeholder="Enter coupon title"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="couponBrand">Brand</Label>
                        <Select
                          value={newCoupon.brand}
                          onValueChange={(value) => setNewCoupon({ ...newCoupon, brand: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select brand" />
                          </SelectTrigger>
                          <SelectContent>
                            {brands.map((brand) => (
                              <SelectItem key={brand.id} value={brand.name}>
                                {brand.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="couponCode">Coupon Code</Label>
                        <Input
                          id="couponCode"
                          value={newCoupon.code}
                          onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
                          placeholder="Enter coupon code (leave empty for deals)"
                        />
                      </div>
                      <div>
                        <Label htmlFor="couponDescription">Description</Label>
                        <Textarea
                          id="couponDescription"
                          value={newCoupon.description}
                          onChange={(e) => setNewCoupon({ ...newCoupon, description: e.target.value })}
                          placeholder="Enter coupon description"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="couponExpiry">Expiry Date</Label>
                        <Input
                          id="couponExpiry"
                          type="date"
                          value={newCoupon.expiryDate}
                          onChange={(e) => setNewCoupon({ ...newCoupon, expiryDate: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="couponType">Type</Label>
                        <Select
                          value={newCoupon.type}
                          onValueChange={(value) => setNewCoupon({ ...newCoupon, type: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="code">Code</SelectItem>
                            <SelectItem value="deal">Deal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex space-x-2">
                        <Button type="submit" className="flex-1">
                          {editingCoupon ? "Update Coupon" : "Add Coupon"}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setIsAddCouponOpen(false)
                            resetCouponForm()
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Brand</TableHead>
                        <TableHead>Code</TableHead>
                        <TableHead>Expiry</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {coupons.map((coupon) => (
                        <TableRow key={coupon.id}>
                          <TableCell className="font-medium">{coupon.title}</TableCell>
                          <TableCell>{coupon.brand}</TableCell>
                          <TableCell>
                            {coupon.code ? (
                              <code className="bg-gray-100 px-2 py-1 rounded text-sm">{coupon.code}</code>
                            ) : (
                              <span className="text-gray-500">No code</span>
                            )}
                          </TableCell>
                          <TableCell>{coupon.expiryDate}</TableCell>
                          <TableCell>
                            <Badge variant={coupon.status === "expiring" ? "destructive" : "secondary"}>
                              {coupon.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleEditCoupon(coupon)}>
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-red-600"
                                  onClick={() => handleDeleteCoupon(coupon.id)}
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
