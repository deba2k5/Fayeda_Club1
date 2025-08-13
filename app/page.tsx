"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import MobileHeader from "@/components/mobile-header"
import {
  Search,
  Gift,
  Star,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
  Heart,
  ShoppingBag,
  Users,
  Award,
  Target,
  CheckCircle,
} from "lucide-react"

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const topDeals = [
    {
      id: 1,
      store: "Amazon",
      logo: "/amazon-logo.png",
      title: "Flat 50% Off on Electronics",
      description: "Get amazing discounts on smartphones, laptops, and more",
      discount: "Up to ₹15,000",
      code: "ELECTRONICS50",
      category: "Electronics",
      rating: 4.8,
      users: "2.5K",
      timeLeft: "2 days",
      featured: true,
    },
    {
      id: 2,
      store: "Myntra",
      logo: "/myntra-logo.png",
      title: "Fashion Sale - Up to 60% Off",
      description: "Trendy clothes, shoes, and accessories at unbeatable prices",
      discount: "Up to ₹3,000",
      code: "FASHION60",
      category: "Fashion",
      rating: 4.6,
      users: "1.8K",
      timeLeft: "5 hours",
      featured: true,
    },
    {
      id: 3,
      store: "Flipkart",
      logo: "/flipkart-logo.png",
      title: "Big Billion Days Sale",
      description: "Mega sale on all categories with extra cashback",
      discount: "Up to ₹20,000",
      code: "BIGBILLION70",
      category: "Electronics",
      rating: 4.7,
      users: "3.2K",
      timeLeft: "1 day",
      featured: true,
    },
    {
      id: 4,
      store: "Nykaa",
      logo: "/nykaa-logo.png",
      title: "Beauty Bonanza - 40% Off",
      description: "Premium beauty products at amazing prices",
      discount: "Up to ₹2,500",
      code: "BEAUTY40",
      category: "Beauty",
      rating: 4.5,
      users: "950",
      timeLeft: "3 days",
      featured: false,
    },
  ]

  const featuredStores = [
    {
      name: "Amazon",
      logo: "/amazon-logo.png",
      description: "World's largest online marketplace",
      category: "E-commerce",
      rating: 4.8,
      totalCoupons: 25,
      cashback: "2%",
    },
    {
      name: "Myntra",
      logo: "/myntra-logo.png",
      description: "India's leading fashion destination",
      category: "Fashion",
      rating: 4.6,
      totalCoupons: 18,
      cashback: "3%",
    },
    {
      name: "Flipkart",
      logo: "/flipkart-logo.png",
      description: "India's leading e-commerce platform",
      category: "E-commerce",
      rating: 4.5,
      totalCoupons: 22,
      cashback: "1.5%",
    },
    {
      name: "Nykaa",
      logo: "/nykaa-logo.png",
      description: "Beauty and wellness products",
      category: "Beauty",
      rating: 4.4,
      totalCoupons: 15,
      cashback: "2.5%",
    },
  ]

  const categories = [
    { name: "Electronics", icon: "📱", deals: 45, image: "/electronics/smartphones.png" },
    { name: "Fashion", icon: "👗", deals: 38, image: "/fashion/womens-clothing.png" },
    { name: "Food & Dining", icon: "🍕", deals: 52, image: "/food/pizza-fastfood.png" },
    { name: "Travel", icon: "✈️", deals: 28, image: "/travel/flights.png" },
    { name: "Beauty", icon: "💄", deals: 33, image: "/beauty/makeup.png" },
    { name: "Home & Garden", icon: "🏠", deals: 41, image: "/home/home-decor.png" },
  ]

  const stats = [
    { label: "Active Users", value: "50K+", icon: Users, color: "from-blue-500 to-cyan-500" },
    { label: "Total Savings", value: "₹2.5Cr+", icon: Target, color: "from-green-500 to-emerald-500" },
    { label: "Partner Stores", value: "500+", icon: ShoppingBag, color: "from-purple-500 to-pink-500" },
    { label: "Happy Customers", value: "98%", icon: Award, color: "from-orange-500 to-red-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div
            className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                India's #1 Cashback Platform
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Save More with
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Fayeda Club
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Discover exclusive deals, earn cashback, and save thousands on your favorite brands
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search for stores, deals, or categories..."
                  className="pl-14 pr-6 py-4 text-lg rounded-full border-0 bg-white/95 backdrop-blur-sm shadow-xl focus:ring-4 focus:ring-white/30"
                />
                <Button
                  size="lg"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/stores">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Explore Stores
                </Button>
              </Link>
              <Link href="/gift-cards">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Gift Cards
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Deals Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Top Deals of the Day</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Limited time offers that you can't miss. Grab them before they're gone!
            </p>

            {/* Countdown Timer */}
            <div className="flex items-center justify-center mt-6 space-x-4">
              <div className="bg-white rounded-lg p-3 shadow-lg">
                <div className="text-2xl font-bold text-orange-600">{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className="text-xs text-gray-500">Hours</div>
              </div>
              <div className="text-2xl font-bold text-orange-600">:</div>
              <div className="bg-white rounded-lg p-3 shadow-lg">
                <div className="text-2xl font-bold text-orange-600">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                <div className="text-xs text-gray-500">Minutes</div>
              </div>
              <div className="text-2xl font-bold text-orange-600">:</div>
              <div className="bg-white rounded-lg p-3 shadow-lg">
                <div className="text-2xl font-bold text-orange-600">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <div className="text-xs text-gray-500">Seconds</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topDeals.map((deal) => (
              <Card
                key={deal.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
              >
                {deal.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                <div className="relative">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32 flex items-center justify-center">
                    <Image
                      src={deal.logo || "/placeholder.svg"}
                      alt={deal.store}
                      width={80}
                      height={80}
                      className="rounded-lg shadow-lg bg-white p-2"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button variant="ghost" size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {deal.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{deal.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{deal.title}</CardTitle>
                  <CardDescription className="text-sm">{deal.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-green-600">{deal.discount}</div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Used by</div>
                        <div className="font-semibold">{deal.users} users</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Coupon Code</span>
                        <div className="flex items-center space-x-1 text-orange-600">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{deal.timeLeft} left</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <code className="flex-1 bg-white border-2 border-dashed border-blue-300 rounded px-3 py-2 font-mono text-sm font-bold text-blue-600">
                          {deal.code}
                        </code>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Copy
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:scale-105 transition-transform">
                      Shop Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/deals">
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
              >
                View All Deals
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Stores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Shop from your favorite brands and earn amazing cashback rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStores.map((store, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-lg"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={store.logo || "/placeholder.svg"}
                      alt={store.name}
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{store.name}</CardTitle>
                  <CardDescription className="text-sm">{store.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {store.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{store.rating}</span>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Cashback</span>
                        <span className="text-lg font-bold text-green-600">{store.cashback}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Active Coupons</span>
                      <span className="font-semibold">{store.totalCoupons}</span>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:scale-105 transition-transform">
                      Visit Store
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/stores">
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
              >
                View All Stores
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the best deals across all your favorite categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.name.toLowerCase().replace(" & ", "-")}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">{category.deals} deals</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Saving?</h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Join thousands of smart shoppers who save money every day with Fayeda Club
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Started Free
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="text-lg">100% Free to Join</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="text-lg">Instant Cashback</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="text-lg">500+ Partner Stores</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/logo.png" alt="Fayeda Club" width={40} height={40} className="rounded-lg" />
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Fayeda Club
                  </h3>
                  <p className="text-sm text-gray-400">Save More ✨</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                India's leading cashback and deals platform. Save money on every purchase with exclusive offers and
                rewards.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Facebook
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Instagram
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                <Link href="/stores" className="block text-gray-400 hover:text-white transition-colors">
                  All Stores
                </Link>
                <Link href="/categories" className="block text-gray-400 hover:text-white transition-colors">
                  Categories
                </Link>
                <Link href="/deals" className="block text-gray-400 hover:text-white transition-colors">
                  Top Deals
                </Link>
                <Link href="/gift-cards" className="block text-gray-400 hover:text-white transition-colors">
                  Gift Cards
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <div className="space-y-3">
                <Link href="/help" className="block text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get the latest deals and offers directly in your inbox.</p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Fayeda Club. All rights reserved. Made with ❤️ in India.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
