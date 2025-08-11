"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Star, Clock, Copy, ExternalLink, TrendingUp, Zap } from "lucide-react"
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
import { storesData, getAllCoupons, categoriesData } from "@/lib/data"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedCode, setCopiedCode] = useState("")

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  // Get top stores from data
  const topStores = Object.values(storesData).slice(0, 8)

  // Get trending coupons (featured ones)
  const allCoupons = getAllCoupons()
  const trendingCoupons = allCoupons.filter((coupon) => coupon.featured).slice(0, 4)

  // Get categories for display
  const categories = Object.entries(categoriesData)
    .slice(0, 6)
    .map(([key, category]) => ({
      name: category.name,
      icon: category.icon,
      count: category.items.reduce((sum, item) => sum + item.deals, 0),
      slug: key,
    }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Fayeda Club" width={40} height={40} className="rounded-lg" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
                Fayeda Club
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">
                Home
              </Link>
              <Link href="/stores" className="text-gray-700 hover:text-orange-600 font-medium">
                Stores
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-orange-600 font-medium">
                Categories
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">
                About
              </Link>
            </nav>
            <Link href="/admin">
              <Button variant="outline" size="sm">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 mr-2" />
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Deal of the Day
              </Badge>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Save Big with
              <span className="block text-yellow-200">Verified Coupons</span>
            </h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Discover the best deals and discount coupons for your favorite online brands. Clean, fast, and always
              up-to-date.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for stores, brands, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-12 pr-4 py-4 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-full shadow-lg"
                />
                <Button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="flex items-center justify-center space-x-8 text-orange-100">
              <div className="text-center">
                <div className="text-2xl font-bold">{allCoupons.length * 10}</div>
                <div className="text-sm">Coupons Used Today</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">₹2.5L+</div>
                <div className="text-sm">Money Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{Object.keys(storesData).length}+</div>
                <div className="text-sm">Partner Stores</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Stores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Top Stores</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Shop from your favorite brands and save money with our exclusive coupon codes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {topStores.map((store) => (
              <Link key={store.id} href={`/store/${store.name.toLowerCase()}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <Image
                        src={store.logo || "/placeholder.svg"}
                        alt={store.name}
                        width={60}
                        height={60}
                        className="mx-auto rounded-lg group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{store.name}</h4>
                    <p className="text-sm text-gray-500">{store.totalCoupons} coupons</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Coupons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-orange-500 mr-2" />
              <h3 className="text-3xl font-bold text-gray-900">Trending Coupons</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">Most popular deals that our users are loving right now</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCoupons.map((coupon) => (
              <Card key={coupon.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      {coupon.store}
                    </Badge>
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
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                          Show Coupon
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>{coupon.title}</DialogTitle>
                          <DialogDescription>Copy this coupon code and use it at checkout</DialogDescription>
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
                          <Button variant="outline" className="flex-1 bg-transparent">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Store
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
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Find deals organized by your favorite shopping categories</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1">{category.name}</h4>
                    <p className="text-sm text-gray-500">{category.count} deals</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="Fayeda Club" width={32} height={32} className="rounded" />
                <h4 className="text-xl font-bold">Fayeda Club</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted destination for the best deals and discount coupons online.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/stores" className="hover:text-white">
                    All Stores
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-white">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Stay Updated</h5>
              <p className="text-gray-400 mb-4">Get the latest deals delivered to your inbox</p>
              <div className="flex">
                <Input placeholder="Your email" className="rounded-r-none" />
                <Button className="rounded-l-none bg-orange-600 hover:bg-orange-700">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Fayeda Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
