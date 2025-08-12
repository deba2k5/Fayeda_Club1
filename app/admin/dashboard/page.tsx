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
  Gift,
  X,
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
import { storesData, getAllCoupons, getAllGiftCards, cropImageTo64x64 } from "@/lib/data"

// Mock data for dashboard stats
const dashboardStats = {
  totalBrands: Object.keys(storesData).length,
  totalCoupons: getAllCoupons().length,
  totalGiftCards: getAllGiftCards().length,
  activeCoupons: getAllCoupons().filter((c) => c.expiryDays > 0).length,
  expiringSoon: getAllCoupons().filter((c) => c.expiryDays <= 3).length,
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddBrandOpen, setIsAddBrandOpen] = useState(false)
  const [isAddCouponOpen, setIsAddCouponOpen] = useState(false)
  const [isAddGiftCardOpen, setIsAddGiftCardOpen] = useState(false)

  // State for forms
  const [newBrand, setNewBrand] = useState({ name: "", logo: "", description: "", website: "" })
  const [newCoupon, setNewCoupon] = useState({
    title: "",
    brand: "",
    code: "",
    description: "",
    expiryDays: "",
    type: "code",
    savings: "",
    category: "",
    featured: false,
  })
  const [newGiftCard, setNewGiftCard] = useState({
    name: "",
    logo: "",
    description: "",
    category: "",
    denominations: "",
    minAmount: "",
    maxAmount: "",
    cashback: "",
    featured: false,
  })

  // State for data (in real app, this would come from API/database)
  const [brands, setBrands] = useState(Object.values(storesData))
  const [coupons, setCoupons] = useState(getAllCoupons())
  const [giftCards, setGiftCards] = useState(getAllGiftCards())
  const [editingItem, setEditingItem] = useState<any>(null)

  // Image upload handling
  const [uploadingImage, setUploadingImage] = useState(false)

  const handleImageUpload = async (file: File, type: "brand" | "giftcard") => {
    setUploadingImage(true)
    try {
      const croppedImage = await cropImageTo64x64(file)
      if (type === "brand") {
        setNewBrand({ ...newBrand, logo: croppedImage })
      } else {
        setNewGiftCard({ ...newGiftCard, logo: croppedImage })
      }
    } catch (error) {
      console.error("Error cropping image:", error)
      alert("Error processing image. Please try again.")
    } finally {
      setUploadingImage(false)
    }
  }

  const handleAddBrand = (e: React.FormEvent) => {
    e.preventDefault()
    const newBrandData = {
      id: brands.length + 1,
      name: newBrand.name,
      logo: newBrand.logo || "/placeholder.svg",
      description: newBrand.description,
      website: newBrand.website,
      rating: 4.5,
      totalCoupons: 0,
      categories: ["General"],
      coupons: [],
    }

    if (editingItem) {
      setBrands(brands.map((brand) => (brand.id === editingItem.id ? { ...newBrandData, id: editingItem.id } : brand)))
      setEditingItem(null)
    } else {
      setBrands([...brands, newBrandData])
    }

    resetBrandForm()
  }

  const handleAddCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    const newCouponData = {
      id: coupons.length + 1,
      title: newCoupon.title,
      description: newCoupon.description,
      code: newCoupon.code,
      expiryDays: Number.parseInt(newCoupon.expiryDays),
      type: newCoupon.type as "code" | "deal",
      savings: newCoupon.savings,
      category: newCoupon.category,
      featured: newCoupon.featured,
      store: newCoupon.brand,
      storeLogo: brands.find((b) => b.name === newCoupon.brand)?.logo || "/placeholder.svg",
      storeRating: 4.5,
    }

    if (editingItem) {
      setCoupons(
        coupons.map((coupon) => (coupon.id === editingItem.id ? { ...newCouponData, id: editingItem.id } : coupon)),
      )
      setEditingItem(null)
    } else {
      setCoupons([...coupons, newCouponData])
    }

    resetCouponForm()
  }

  const handleAddGiftCard = (e: React.FormEvent) => {
    e.preventDefault()
    const denominations = newGiftCard.denominations
      .split(",")
      .map((d) => Number.parseInt(d.trim()))
      .filter((d) => !isNaN(d))

    const newGiftCardData = {
      id: giftCards.length + 1,
      name: newGiftCard.name,
      logo: newGiftCard.logo || "/placeholder.svg",
      description: newGiftCard.description,
      category: newGiftCard.category,
      denominations,
      customAmount: {
        min: Number.parseInt(newGiftCard.minAmount),
        max: Number.parseInt(newGiftCard.maxAmount),
      },
      cashback: newGiftCard.cashback,
      featured: newGiftCard.featured,
      color: "from-blue-400 to-blue-600",
    }

    if (editingItem) {
      setGiftCards(
        giftCards.map((card) => (card.id === editingItem.id ? { ...newGiftCardData, id: editingItem.id } : card)),
      )
      setEditingItem(null)
    } else {
      setGiftCards([...giftCards, newGiftCardData])
    }

    resetGiftCardForm()
  }

  const handleDeleteBrand = (brandId: number) => {
    if (confirm("Are you sure you want to delete this brand? This will also remove all associated coupons.")) {
      setBrands(brands.filter((brand) => brand.id !== brandId))
      setCoupons(coupons.filter((coupon) => coupon.store !== brands.find((b) => b.id === brandId)?.name))
    }
  }

  const handleDeleteCoupon = (couponId: number) => {
    if (confirm("Are you sure you want to delete this coupon?")) {
      setCoupons(coupons.filter((coupon) => coupon.id !== couponId))
    }
  }

  const handleDeleteGiftCard = (cardId: number) => {
    if (confirm("Are you sure you want to delete this gift card?")) {
      setGiftCards(giftCards.filter((card) => card.id !== cardId))
    }
  }

  const handleEditBrand = (brand: any) => {
    setEditingItem(brand)
    setNewBrand({
      name: brand.name,
      logo: brand.logo,
      description: brand.description,
      website: brand.website,
    })
    setIsAddBrandOpen(true)
  }

  const handleEditCoupon = (coupon: any) => {
    setEditingItem(coupon)
    setNewCoupon({
      title: coupon.title,
      brand: coupon.store,
      code: coupon.code,
      description: coupon.description,
      expiryDays: coupon.expiryDays.toString(),
      type: coupon.type,
      savings: coupon.savings,
      category: coupon.category,
      featured: coupon.featured,
    })
    setIsAddCouponOpen(true)
  }

  const handleEditGiftCard = (card: any) => {
    setEditingItem(card)
    setNewGiftCard({
      name: card.name,
      logo: card.logo,
      description: card.description,
      category: card.category,
      denominations: card.denominations.join(", "),
      minAmount: card.customAmount.min.toString(),
      maxAmount: card.customAmount.max.toString(),
      cashback: card.cashback,
      featured: card.featured,
    })
    setIsAddGiftCardOpen(true)
  }

  const resetBrandForm = () => {
    setEditingItem(null)
    setNewBrand({ name: "", logo: "", description: "", website: "" })
    setIsAddBrandOpen(false)
  }

  const resetCouponForm = () => {
    setEditingItem(null)
    setNewCoupon({
      title: "",
      brand: "",
      code: "",
      description: "",
      expiryDays: "",
      type: "code",
      savings: "",
      category: "",
      featured: false,
    })
    setIsAddCouponOpen(false)
  }

  const resetGiftCardForm = () => {
    setEditingItem(null)
    setNewGiftCard({
      name: "",
      logo: "",
      description: "",
      category: "",
      denominations: "",
      minAmount: "",
      maxAmount: "",
      cashback: "",
      featured: false,
    })
    setIsAddGiftCardOpen(false)
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
            <button
              onClick={() => setActiveTab("giftcards")}
              className={`w-full flex items-center px-4 py-2 text-left rounded-lg transition-colors ${
                activeTab === "giftcards" ? "bg-orange-100 text-orange-700" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Gift className="h-5 w-5 mr-3" />
              Gift Cards
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Brands</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{brands.length}</div>
                    <p className="text-xs text-muted-foreground">Active partners</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Coupons</CardTitle>
                    <Tag className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{coupons.length}</div>
                    <p className="text-xs text-muted-foreground">All coupons</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Gift Cards</CardTitle>
                    <Gift className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{giftCards.length}</div>
                    <p className="text-xs text-muted-foreground">Available cards</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Coupons</CardTitle>
                    <Tag className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">{dashboardStats.activeCoupons}</div>
                    <p className="text-xs text-muted-foreground">Currently valid</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
                    <Tag className="h-4 w-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">{dashboardStats.expiringSoon}</div>
                    <p className="text-xs text-muted-foreground">Next 3 days</p>
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
                      {brands.slice(0, 5).map((brand) => (
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
                              <p className="text-sm text-gray-500">{brand.totalCoupons} coupons</p>
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
                      {coupons.slice(0, 5).map((coupon) => (
                        <div key={coupon.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{coupon.title}</p>
                            <p className="text-sm text-gray-500">{coupon.store}</p>
                          </div>
                          <Badge variant={coupon.expiryDays <= 3 ? "destructive" : "secondary"}>
                            {coupon.expiryDays <= 3 ? "Expiring" : "Active"}
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
                <h3 className="text-lg font-semibold">Manage Brands ({brands.length})</h3>
                <Dialog open={isAddBrandOpen} onOpenChange={setIsAddBrandOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Brand
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>{editingItem ? "Edit Brand" : "Add New Brand"}</DialogTitle>
                      <DialogDescription>
                        {editingItem ? "Update brand information" : "Add a new brand to the Fayeda Club platform"}
                      </DialogDescription>
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
                        <Label htmlFor="brandDescription">Description</Label>
                        <Textarea
                          id="brandDescription"
                          value={newBrand.description}
                          onChange={(e) => setNewBrand({ ...newBrand, description: e.target.value })}
                          placeholder="Enter brand description"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="brandWebsite">Website URL</Label>
                        <Input
                          id="brandWebsite"
                          value={newBrand.website}
                          onChange={(e) => setNewBrand({ ...newBrand, website: e.target.value })}
                          placeholder="https://example.com"
                          type="url"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="brandLogo">Logo (64x64px)</Label>
                        <div className="flex items-center space-x-4">
                          {newBrand.logo && (
                            <div className="relative">
                              <Image
                                src={newBrand.logo || "/placeholder.svg"}
                                alt="Logo preview"
                                width={64}
                                height={64}
                                className="rounded border"
                              />
                              <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                className="absolute -top-2 -right-2 h-6 w-6 p-0"
                                onClick={() => setNewBrand({ ...newBrand, logo: "" })}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          )}
                          <div>
                            <Input
                              id="brandLogo"
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) handleImageUpload(file, "brand")
                              }}
                              disabled={uploadingImage}
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Image will be automatically cropped to 64x64px (1:1 ratio)
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button type="submit" className="flex-1" disabled={uploadingImage}>
                          {uploadingImage ? "Processing..." : editingItem ? "Update Brand" : "Add Brand"}
                        </Button>
                        <Button type="button" variant="outline" onClick={resetBrandForm}>
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
                        <TableHead>Description</TableHead>
                        <TableHead>Website</TableHead>
                        <TableHead>Coupons</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {brands
                        .filter(
                          (brand) =>
                            brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            brand.description.toLowerCase().includes(searchQuery.toLowerCase()),
                        )
                        .map((brand) => (
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
                            <TableCell className="max-w-xs truncate">{brand.description}</TableCell>
                            <TableCell>
                              <a
                                href={brand.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                {brand.website}
                              </a>
                            </TableCell>
                            <TableCell>{brand.totalCoupons}</TableCell>
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
                                  <DropdownMenuItem
                                    className="text-red-600"
                                    onClick={() => handleDeleteBrand(brand.id)}
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

          {activeTab === "coupons" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Manage Coupons ({coupons.length})</h3>
                <Dialog open={isAddCouponOpen} onOpenChange={setIsAddCouponOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Coupon
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{editingItem ? "Edit Coupon" : "Add New Coupon"}</DialogTitle>
                      <DialogDescription>
                        {editingItem ? "Update coupon information" : "Add a new coupon to the selected brand"}
                      </DialogDescription>
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
                        <Label htmlFor="couponSavings">Savings</Label>
                        <Input
                          id="couponSavings"
                          value={newCoupon.savings}
                          onChange={(e) => setNewCoupon({ ...newCoupon, savings: e.target.value })}
                          placeholder="e.g., Up to ₹1,000"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="couponCategory">Category</Label>
                        <Select
                          value={newCoupon.category}
                          onValueChange={(value) => setNewCoupon({ ...newCoupon, category: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Electronics">Electronics</SelectItem>
                            <SelectItem value="Fashion">Fashion</SelectItem>
                            <SelectItem value="Food & Dining">Food & Dining</SelectItem>
                            <SelectItem value="Travel">Travel</SelectItem>
                            <SelectItem value="Health & Beauty">Health & Beauty</SelectItem>
                            <SelectItem value="Home & Garden">Home & Garden</SelectItem>
                            <SelectItem value="Entertainment">Entertainment</SelectItem>
                            <SelectItem value="All">All Categories</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="couponExpiry">Expiry (Days from now)</Label>
                        <Input
                          id="couponExpiry"
                          type="number"
                          value={newCoupon.expiryDays}
                          onChange={(e) => setNewCoupon({ ...newCoupon, expiryDays: e.target.value })}
                          placeholder="30"
                          min="1"
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

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="couponFeatured"
                          checked={newCoupon.featured}
                          onChange={(e) => setNewCoupon({ ...newCoupon, featured: e.target.checked })}
                          className="rounded"
                        />
                        <Label htmlFor="couponFeatured">Featured Coupon</Label>
                      </div>

                      <div className="flex space-x-2">
                        <Button type="submit" className="flex-1">
                          {editingItem ? "Update Coupon" : "Add Coupon"}
                        </Button>
                        <Button type="button" variant="outline" onClick={resetCouponForm}>
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
                        <TableHead>Savings</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Expiry</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {coupons
                        .filter(
                          (coupon) =>
                            coupon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            coupon.store.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            coupon.category.toLowerCase().includes(searchQuery.toLowerCase()),
                        )
                        .map((coupon) => (
                          <TableRow key={coupon.id}>
                            <TableCell className="font-medium max-w-xs">
                              <div>
                                <div className="truncate">{coupon.title}</div>
                                {coupon.featured && (
                                  <Badge variant="secondary" className="mt-1 text-xs">
                                    Featured
                                  </Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>{coupon.store}</TableCell>
                            <TableCell>
                              {coupon.code ? (
                                <code className="bg-gray-100 px-2 py-1 rounded text-sm">{coupon.code}</code>
                              ) : (
                                <span className="text-gray-500">No code</span>
                              )}
                            </TableCell>
                            <TableCell className="text-green-600 font-medium">{coupon.savings}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{coupon.category}</Badge>
                            </TableCell>
                            <TableCell>{coupon.expiryDays}d</TableCell>
                            <TableCell>
                              <Badge variant={coupon.expiryDays <= 3 ? "destructive" : "secondary"}>
                                {coupon.expiryDays <= 3 ? "Expiring" : "Active"}
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

          {activeTab === "giftcards" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Manage Gift Cards ({giftCards.length})</h3>
                <Dialog open={isAddGiftCardOpen} onOpenChange={setIsAddGiftCardOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Gift Card
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{editingItem ? "Edit Gift Card" : "Add New Gift Card"}</DialogTitle>
                      <DialogDescription>
                        {editingItem ? "Update gift card information" : "Add a new gift card to the platform"}
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAddGiftCard} className="space-y-4">
                      <div>
                        <Label htmlFor="giftCardName">Gift Card Name</Label>
                        <Input
                          id="giftCardName"
                          value={newGiftCard.name}
                          onChange={(e) => setNewGiftCard({ ...newGiftCard, name: e.target.value })}
                          placeholder="Enter gift card name"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="giftCardDescription">Description</Label>
                        <Textarea
                          id="giftCardDescription"
                          value={newGiftCard.description}
                          onChange={(e) => setNewGiftCard({ ...newGiftCard, description: e.target.value })}
                          placeholder="Enter gift card description"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="giftCardCategory">Category</Label>
                        <Select
                          value={newGiftCard.category}
                          onValueChange={(value) => setNewGiftCard({ ...newGiftCard, category: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Shopping">Shopping</SelectItem>
                            <SelectItem value="Fashion">Fashion</SelectItem>
                            <SelectItem value="Food & Dining">Food & Dining</SelectItem>
                            <SelectItem value="Travel">Travel</SelectItem>
                            <SelectItem value="Beauty">Beauty</SelectItem>
                            <SelectItem value="Entertainment">Entertainment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="giftCardDenominations">Denominations (comma-separated)</Label>
                        <Input
                          id="giftCardDenominations"
                          value={newGiftCard.denominations}
                          onChange={(e) => setNewGiftCard({ ...newGiftCard, denominations: e.target.value })}
                          placeholder="100, 250, 500, 1000, 2000"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="giftCardMinAmount">Min Amount</Label>
                          <Input
                            id="giftCardMinAmount"
                            type="number"
                            value={newGiftCard.minAmount}
                            onChange={(e) => setNewGiftCard({ ...newGiftCard, minAmount: e.target.value })}
                            placeholder="50"
                            min="1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="giftCardMaxAmount">Max Amount</Label>
                          <Input
                            id="giftCardMaxAmount"
                            type="number"
                            value={newGiftCard.maxAmount}
                            onChange={(e) => setNewGiftCard({ ...newGiftCard, maxAmount: e.target.value })}
                            placeholder="10000"
                            min="1"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="giftCardCashback">Cashback (%)</Label>
                        <Input
                          id="giftCardCashback"
                          value={newGiftCard.cashback}
                          onChange={(e) => setNewGiftCard({ ...newGiftCard, cashback: e.target.value })}
                          placeholder="2%"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="giftCardLogo">Logo (64x64px)</Label>
                        <div className="flex items-center space-x-4">
                          {newGiftCard.logo && (
                            <div className="relative">
                              <Image
                                src={newGiftCard.logo || "/placeholder.svg"}
                                alt="Logo preview"
                                width={64}
                                height={64}
                                className="rounded border"
                              />
                              <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                className="absolute -top-2 -right-2 h-6 w-6 p-0"
                                onClick={() => setNewGiftCard({ ...newGiftCard, logo: "" })}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          )}
                          <div>
                            <Input
                              id="giftCardLogo"
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) handleImageUpload(file, "giftcard")
                              }}
                              disabled={uploadingImage}
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Image will be automatically cropped to 64x64px (1:1 ratio)
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="giftCardFeatured"
                          checked={newGiftCard.featured}
                          onChange={(e) => setNewGiftCard({ ...newGiftCard, featured: e.target.checked })}
                          className="rounded"
                        />
                        <Label htmlFor="giftCardFeatured">Featured Gift Card</Label>
                      </div>

                      <div className="flex space-x-2">
                        <Button type="submit" className="flex-1" disabled={uploadingImage}>
                          {uploadingImage ? "Processing..." : editingItem ? "Update Gift Card" : "Add Gift Card"}
                        </Button>
                        <Button type="button" variant="outline" onClick={resetGiftCardForm}>
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
                        <TableHead>Gift Card</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Amount Range</TableHead>
                        <TableHead>Cashback</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {giftCards
                        .filter(
                          (card) =>
                            card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            card.category.toLowerCase().includes(searchQuery.toLowerCase()),
                        )
                        .map((card) => (
                          <TableRow key={card.id}>
                            <TableCell>
                              <div className="flex items-center space-x-3">
                                <Image
                                  src={card.logo || "/placeholder.svg"}
                                  alt={card.name}
                                  width={40}
                                  height={40}
                                  className="rounded"
                                />
                                <div>
                                  <div className="font-medium">{card.name}</div>
                                  {card.featured && (
                                    <Badge variant="secondary" className="mt-1 text-xs">
                                      Featured
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{card.category}</Badge>
                            </TableCell>
                            <TableCell>
                              ₹{card.customAmount.min} - ₹{card.customAmount.max.toLocaleString()}
                            </TableCell>
                            <TableCell className="text-green-600 font-medium">{card.cashback}</TableCell>
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
                                  <DropdownMenuItem onClick={() => handleEditGiftCard(card)}>
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    className="text-red-600"
                                    onClick={() => handleDeleteGiftCard(card.id)}
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
