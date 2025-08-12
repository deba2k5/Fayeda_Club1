"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Clock, Gift, Tag, Copy, ExternalLink, TrendingUp, Zap, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileHeader } from "@/components/mobile-header"
import { stores, categories, getTopDeals, getFeaturedStores } from "@/lib/data"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  const topDeals = getTopDeals()
  const featuredStores = getFeaturedStores()

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <MobileHeader />

      {/* Desktop Header */}
      <header className="hidden md:block bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Fayeda Club" width={40} height={40} className="rounded-lg" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Fayeda Club
                </h1>
                <p className="text-xs text-gray-500">Save More, Spend Less</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/stores" className="text-gray-700 hover:text-orange-600 font-medium">
                All Stores
              </Link>
              <Link href="/gift-cards" className="text-gray-700 hover:text-orange-600 font-medium">
                Gift Cards
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-orange-600 font-medium">
                Categories
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">
                About
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button
                  variant="outline"
                  className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Login
                </Button>
              </Link>
              <Link href="/admin">
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">India's #1 Cashback & Coupons Platform</h1>
            <p className="text-lg md:text-xl mb-8 text-orange-100">
              Save up to 70% on your favorite brands with exclusive deals and cashback offers
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for stores, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-full border-0 shadow-lg"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-orange-100">Partner Stores</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">₹10L+</div>
                <div className="text-sm text-orange-100">Savings Generated</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-orange-100">Happy Users</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-orange-100">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Deals of the Day - Dynamic Coupons & Gift Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-orange-500" />
              <h2 className="text-3xl font-bold text-gray-900">Top Deals of the Day</h2>
              <Zap className="h-6 w-6 text-orange-500" />
            </div>
            <p className="text-gray-600">Limited time offers on coupons and gift cards</p>
            <div className="text-sm text-orange-600 font-medium">⏰ Updated: {currentTime.toLocaleTimeString()}</div>
          </div>

          {/* Featured Coupons */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Tag className="h-5 w-5 text-orange-500 mr-2" />🔥 Hot Coupons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topDeals.coupons.map((coupon, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Image
                        src={coupon.logo || "/placeholder.svg"}
                        alt={coupon.store}
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <Badge className="bg-red-100 text-red-700 hover:bg-red-200">{coupon.discount}</Badge>
                    </div>
                    <CardTitle className="text-lg">{coupon.store}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{coupon.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          onClick={() => copyToClipboard(coupon.code)}
                          className="bg-orange-500 hover:bg-orange-600"
                        >
                          <Copy className="h-4 w-4 mr-1" />
                          {copiedCode === coupon.code ? "Copied!" : coupon.code}
                        </Button>
                      </div>
                      <Link href={coupon.link} target="_blank">
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Shop Now
                        </Button>
                      </Link>
                    </div>
                    <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {coupon.validTill}
                      </span>
                      <span>{coupon.used} used today</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Featured Gift Cards */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Gift className="h-5 w-5 text-orange-500 mr-2" />💳 Featured Gift Cards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topDeals.giftCards.map((card, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Image
                        src={card.logo || "/placeholder.svg"}
                        alt={card.brand}
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                        {card.cashback}% Cashback
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{card.brand}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Denominations:</span>
                        <span className="font-medium">{card.denominations}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Validity:</span>
                        <span className="font-medium">{card.validity}</span>
                      </div>
                    </div>
                    <Link href={`/gift-cards/${card.brand.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                        Buy Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Stores</h2>
            <p className="text-gray-600">Shop from India's most trusted brands</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {featuredStores.map((store) => (
              <Link key={store.id} href={`/store/${store.name.toLowerCase().replace(/\s+/g, "-")}`} className="group">
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <Image
                      src={store.logo || "/placeholder.svg"}
                      alt={store.name}
                      width={60}
                      height={60}
                      className="mx-auto mb-3 rounded-lg"
                    />
                    <h3 className="font-semibold text-sm mb-1">{store.name}</h3>
                    <p className="text-xs text-gray-500 mb-2">{store.category}</p>
                    <Badge variant="secondary" className="text-xs">
                      Up to {store.maxCashback}% off
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/stores">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
              >
                View All Stores
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600">Find the best deals in your favorite categories</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group"
              >
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={60}
                      height={60}
                      className="mx-auto mb-3 rounded-lg"
                    />
                    <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                    <p className="text-xs text-gray-500">{category.itemCount} deals</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Fayeda Club?</h2>
            <p className="text-gray-600">Your trusted partner for online savings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maximum Savings</h3>
              <p className="text-gray-600">Get the best deals and highest cashback rates from top brands</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
              <p className="text-gray-600">Your transactions and personal data are completely safe with us</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our dedicated team is always here to help you save more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="Fayeda Club" width={40} height={40} className="rounded-lg" />
                <div>
                  <h3 className="text-xl font-bold">Fayeda Club</h3>
                  <p className="text-gray-400 text-sm">Save More, Spend Less</p>
                </div>
              </div>
              <p className="text-gray-400">
                India's leading cashback and coupons platform helping you save money on every purchase.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/stores" className="hover:text-white">
                    All Stores
                  </Link>
                </li>
                <li>
                  <Link href="/gift-cards" className="hover:text-white">
                    Gift Cards
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
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
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
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 mb-4">Stay updated with the latest deals and offers</p>
              <div className="flex space-x-4">
                <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fayeda Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
