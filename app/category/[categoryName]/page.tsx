"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Search, Clock, Copy, ExternalLink, Star, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getCategoryByName, getCouponsByCategory } from "@/lib/data"

export default function CategoryPage({ params }: { params: { categoryName: string } }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [copiedCode, setCopiedCode] = useState("")
  const [activeTab, setActiveTab] = useState("coupons")

  const categoryData = getCategoryByName(params.categoryName)
  const categoryCoupons = getCouponsByCategory(params.categoryName)

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-6">The category you're looking for doesn't exist.</p>
          <Link href="/categories">
            <Button>Browse All Categories</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  const filteredCoupons = categoryCoupons
    .filter(
      (coupon) =>
        coupon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coupon.store.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coupon.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === "featured") return b.featured ? 1 : -1
      if (sortBy === "expiry") return a.expiryDays - b.expiryDays
      if (sortBy === "savings")
        return Number.parseInt(b.savings.replace(/[^\d]/g, "")) - Number.parseInt(a.savings.replace(/[^\d]/g, ""))
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Image src="/logo.png" alt="Fayeda Club" width={40} height={40} className="rounded-lg" />
              </Link>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
                Fayeda Club
              </h1>
            </div>
            <Link href="/categories">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Categories
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Category Header */}
      <section className={`bg-gradient-to-r ${categoryData.color} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">{categoryData.icon}</div>
            <h2 className="text-4xl font-bold mb-4">{categoryData.name}</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">{categoryData.description}</p>
            <div className="text-lg">
              <span className="font-semibold">{categoryCoupons.length}</span> deals available
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("coupons")}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === "coupons"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Coupons & Deals ({categoryCoupons.length})
            </button>
            <button
              onClick={() => setActiveTab("items")}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === "items"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Browse Items ({categoryData.items.length})
            </button>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder={activeTab === "coupons" ? "Search deals..." : "Search items..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            {activeTab === "coupons" && (
              <div className="flex space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="expiry">Expiry Date</SelectItem>
                    <SelectItem value="savings">Savings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "coupons" ? (
            <>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{filteredCoupons.length} Deals Found</h3>
                <p className="text-gray-600">Save money on your {categoryData.name.toLowerCase()} purchases</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCoupons.map((coupon) => (
                  <Card
                    key={coupon.id}
                    className={`hover:shadow-xl transition-all duration-300 ${coupon.featured ? "ring-2 ring-purple-200 bg-purple-50" : "bg-white"}`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={coupon.storeLogo || "/placeholder.svg"}
                            alt={coupon.store}
                            width={24}
                            height={24}
                            className="rounded"
                          />
                          <Badge variant="secondary">{coupon.store}</Badge>
                          {coupon.featured && (
                            <Badge variant="default" className="bg-purple-500">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {coupon.expiryDays}d left
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight">{coupon.title}</CardTitle>
                      <CardDescription className="text-sm">{coupon.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-green-600 font-semibold text-sm">Save {coupon.savings}</div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-500 ml-1">{coupon.storeRating}</span>
                        </div>
                      </div>

                      {coupon.type === "code" ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className={`w-full bg-gradient-to-r ${categoryData.color} hover:opacity-90`}>
                              Show Coupon
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>{coupon.title}</DialogTitle>
                              <DialogDescription>
                                Copy this coupon code and use it at {coupon.store} checkout
                              </DialogDescription>
                            </DialogHeader>
                            <div className="flex items-center space-x-2">
                              <div className="grid flex-1 gap-2">
                                <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
                                  <code className="text-2xl font-bold text-purple-600">{coupon.code}</code>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button
                                onClick={() => handleCopyCode(coupon.code)}
                                className="flex-1"
                                variant={copiedCode === coupon.code ? "secondary" : "default"}
                              >
                                <Copy className="h-4 w-4 mr-2" />
                                {copiedCode === coupon.code ? "Copied!" : "Copy Code"}
                              </Button>
                              <Button variant="outline" className="flex-1 bg-transparent">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Visit {coupon.store}
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Get Deal
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Browse {categoryData.name} Items</h3>
                <p className="text-gray-600">Discover different types of {categoryData.name.toLowerCase()} products</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryData.items
                  .filter(
                    (item) =>
                      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      item.description.toLowerCase().includes(searchQuery.toLowerCase()),
                  )
                  .map((item) => (
                    <Card key={item.id} className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <CardHeader className="text-center pb-3">
                        <div className="relative mb-4">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={200}
                            height={150}
                            className="mx-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        <CardDescription className="text-sm">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center text-orange-600">
                            <ShoppingBag className="h-4 w-4 mr-1" />
                            <span className="font-semibold">{item.deals} deals</span>
                          </div>
                          <Badge variant="secondary" className={`bg-gradient-to-r ${categoryData.color} text-white`}>
                            Popular
                          </Badge>
                        </div>
                        <Button className={`w-full bg-gradient-to-r ${categoryData.color} hover:opacity-90`}>
                          View Deals
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </>
          )}

          {((activeTab === "coupons" && filteredCoupons.length === 0) ||
            (activeTab === "items" && categoryData.items.length === 0)) && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No {activeTab === "coupons" ? "deals" : "items"} found
              </h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
