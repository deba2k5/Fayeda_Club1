"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Search, Clock, Copy, ExternalLink, Star, Filter, Globe } from "lucide-react"
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
import { getStoreByName } from "@/lib/data"

export default function StorePage({ params }: { params: { storeName: string } }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [copiedCode, setCopiedCode] = useState("")

  const storeData = getStoreByName(params.storeName)

  if (!storeData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Store Not Found</h1>
          <p className="text-gray-600 mb-6">The store you're looking for doesn't exist.</p>
          <Link href="/stores">
            <Button>Browse All Stores</Button>
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

  const filteredCoupons = storeData.coupons
    .filter((coupon) => selectedCategory === "all" || coupon.category.toLowerCase() === selectedCategory)
    .filter(
      (coupon) =>
        coupon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
            <Link href="/stores">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Stores
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Store Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-6">
            <Image
              src={storeData.logo || "/placeholder.svg"}
              alt={storeData.name}
              width={120}
              height={120}
              className="rounded-2xl shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{storeData.name}</h1>
              <p className="text-gray-600 mb-4 max-w-2xl text-lg">{storeData.description}</p>
              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold text-lg">{storeData.rating}</span>
                  <span className="text-gray-500 ml-1">rating</span>
                </div>
                <div>
                  <span className="font-semibold text-orange-600 text-lg">{storeData.totalCoupons}</span>
                  <span className="text-gray-500 ml-1">active coupons</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="h-4 w-4 mr-1" />
                  <a
                    href={storeData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-600"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div className="flex space-x-2">
                {storeData.categories.map((category) => (
                  <Badge key={category} variant="secondary" className="text-sm">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
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
                  placeholder="Search coupons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {storeData.categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
          </div>
        </div>
      </section>

      {/* Coupons Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{filteredCoupons.length} Coupons Available</h2>
            <p className="text-gray-600">Save money on your {storeData.name} purchases</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCoupons.map((coupon) => (
              <Card
                key={coupon.id}
                className={`hover:shadow-xl transition-all duration-300 ${coupon.featured ? "ring-2 ring-orange-200 bg-orange-50" : "bg-white"}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={coupon.featured ? "default" : "secondary"}
                        className={coupon.featured ? "bg-orange-500" : ""}
                      >
                        {coupon.category}
                      </Badge>
                      {coupon.featured && (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
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
                      <span className="text-sm text-gray-500 ml-1">{storeData.rating}</span>
                    </div>
                  </div>

                  {coupon.type === "code" ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                          Show Coupon
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>{coupon.title}</DialogTitle>
                          <DialogDescription>
                            Copy this coupon code and use it at {storeData.name} checkout
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                          <div className="grid flex-1 gap-2">
                            <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
                              <code className="text-2xl font-bold text-orange-600">{coupon.code}</code>
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
                          <Button
                            variant="outline"
                            className="flex-1 bg-transparent"
                            onClick={() => window.open(storeData.website, "_blank")}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit {storeData.name}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button
                      className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
                      onClick={() => window.open(storeData.website, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Get Deal
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCoupons.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No coupons found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
