"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Star,
  Clock,
  Copy,
  ExternalLink,
  Gift,
  ShoppingBag,
  ArrowRight,
  Percent,
  Crown,
  FlameIcon as Fire,
  Tag,
} from "lucide-react"
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
import { MobileHeader } from "@/components/mobile-header"
import { storesData, getAllCoupons, categoriesData, getTopDeals } from "@/lib/data"

export default function HomePage() {
  const [copiedCode, setCopiedCode] = useState("")

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  // Get data
  const topStores = Object.values(storesData).slice(0, 8)
  const allCoupons = getAllCoupons()
  const topDeals = getTopDeals()

  const categories = Object.entries(categoriesData)
    .slice(0, 6)
    .map(([key, category]) => ({
      name: category.name,
      icon: category.icon,
      count: category.items.reduce((sum, item) => sum + item.deals, 0),
      slug: key,
      color: category.color,
    }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <MobileHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Crown className="h-8 w-8 mr-2" />
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                  #1 Deals Platform
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Save Big with
                <span className="block text-yellow-200">Verified Coupons</span>
                <span className="block text-2xl md:text-3xl font-normal mt-2 text-orange-100">& Gift Cards</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100 max-w-xl">
                Discover the best deals, discount coupons, and gift cards for your favorite online brands. Clean, fast,
                and always up-to-date.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/stores">
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Browse Stores
                  </Button>
                </Link>
                <Link href="/gift-cards">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <Gift className="h-5 w-5 mr-2" />
                    Buy Gift Cards
                  </Button>
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-6 text-orange-100">
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

            {/* Hero Image/Illustration */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-96 h-96 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    {topStores.slice(0, 4).map((store, index) => (
                      <div
                        key={store.id}
                        className="w-20 h-20 bg-white rounded-lg p-3 shadow-lg animate-pulse"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <Image
                          src={store.logo || "/placeholder.svg"}
                          alt={store.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Deals of the Day - Dynamic Coupons & Gift Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Fire className="h-8 w-8 text-red-500 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Top Deals of the Day</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked coupons and gift cards with the best savings for today
            </p>
          </div>

          {/* Featured Coupons Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Tag className="h-6 w-6 text-orange-500 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">Featured Coupons</h3>
              </div>
              <Link href="/stores" className="text-orange-600 hover:text-orange-700 font-medium">
                View All Coupons <ArrowRight className="h-4 w-4 inline ml-1" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topDeals.coupons.map((coupon) => (
                <Card key={coupon.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
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
                        <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                          {coupon.store}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {coupon.expiryDays}d left
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-orange-600 transition-colors">
                      {coupon.title}
                    </CardTitle>
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
                            <Tag className="h-4 w-4 mr-2" />
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

          {/* Featured Gift Cards Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Gift className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">Featured Gift Cards</h3>
              </div>
              <Link href="/gift-cards" className="text-purple-600 hover:text-purple-700 font-medium">
                View All Gift Cards <ArrowRight className="h-4 w-4 inline ml-1" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topDeals.giftCards.map((card) => (
                <Link key={card.id} href={`/gift-cards/${card.name.toLowerCase()}`}>
                  <Card
                    className={`hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-lg bg-gradient-to-br ${card.color}`}
                  >
                    <CardHeader className="text-white pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Image
                          src={card.logo || "/placeholder.svg"}
                          alt={card.name}
                          width={40}
                          height={40}
                          className="rounded-lg bg-white p-2"
                        />
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          <Percent className="h-3 w-3 mr-1" />
                          {card.cashback}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-white">{card.name}</CardTitle>
                      <CardDescription className="text-white/80 text-sm">{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-white/90 text-sm font-medium">{card.discount}</div>
                        <div className="flex items-center text-white/90">
                          <Star className="h-3 w-3 fill-current mr-1" />
                          <span className="text-sm">4.8</span>
                        </div>
                      </div>
                      <div className="text-white/80 text-xs mb-3">
                        ₹{card.customAmount.min} - ₹{card.customAmount.max.toLocaleString()}
                      </div>
                      <Button size="sm" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                        <Gift className="h-4 w-4 mr-2" />
                        Buy Now
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories Bar */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Shop by Category</h2>
            <Link href="/categories" className="text-orange-600 hover:text-orange-700 font-medium">
              View All <ArrowRight className="h-4 w-4 inline ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${category.color} text-white hover:scale-105 transition-transform cursor-pointer shadow-lg`}
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="text-sm font-medium">{category.name}</div>
                  <div className="text-xs opacity-80">{category.count} deals</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Stores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Partner Stores</h2>
              <p className="text-gray-600">Shop from your favorite brands and save money with exclusive coupons</p>
            </div>
            <Link href="/stores">
              <Button variant="outline" className="border-gray-300 hover:bg-gray-50 bg-transparent">
                View All Stores <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
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
                    <Badge variant="outline" className="mt-2 text-xs">
                      Up to {Math.floor(Math.random() * 50 + 10)}% Off
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Deal</h2>
          <p className="text-xl mb-8 text-orange-100">
            Subscribe to our newsletter and get the latest coupons and offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">Subscribe Now</Button>
          </div>
          <p className="text-sm text-orange-100 mt-4">Join 50,000+ users who save money with our deals</p>
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
                Your trusted destination for the best deals, discount coupons, and gift cards online.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline" className="text-gray-400 border-gray-600">
                  4.8★ Rated
                </Badge>
                <Badge variant="outline" className="text-gray-400 border-gray-600">
                  50K+ Users
                </Badge>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/stores" className="hover:text-white transition-colors">
                    All Stores
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-white transition-colors">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/gift-cards" className="hover:text-white transition-colors">
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Download App</h5>
              <p className="text-gray-400 mb-4">Get exclusive mobile-only deals</p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  📱 Download for iOS
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  🤖 Download for Android
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Fayeda Club. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
