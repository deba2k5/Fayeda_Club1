"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Search,
  Bell,
  User,
  Heart,
  ShoppingBag,
  TrendingUp,
  Gift,
  Zap,
  Clock,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Copy,
  ExternalLink,
  Tag,
  Percent,
  Users,
  Award,
  Target,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { topDealsData, getAllCoupons } from "@/lib/data"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [wishlist, setWishlist] = useState<number[]>([])
  const [copiedCode, setCopiedCode] = useState("")
  const [currentDealIndex, setCurrentDealIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const router = useRouter()

  const allCoupons = getAllCoupons()
  const featuredCoupons = allCoupons.filter((coupon) => coupon.featured).slice(0, 6)

  // Auto-rotate deals carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDealIndex((prev) => (prev + 1) % topDealsData.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  const handleShopNow = (url: string, storeName: string) => {
    // Track click analytics
    console.log(`User clicked shop now for ${storeName}`)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const categories = [
    {
      name: "Electronics",
      icon: "📱",
      image: "/electronics/smartphones.png",
      deals: 32,
      color: "from-blue-500 to-cyan-500",
      link: "/category/electronics",
    },
    {
      name: "Fashion",
      icon: "👗",
      image: "/fashion/womens-clothing.png",
      deals: 45,
      color: "from-pink-500 to-purple-500",
      link: "/category/fashion",
    },
    {
      name: "Food & Dining",
      icon: "🍕",
      image: "/food/pizza-fastfood.png",
      deals: 28,
      color: "from-orange-500 to-red-500",
      link: "/category/food-dining",
    },
    {
      name: "Travel",
      icon: "✈️",
      image: "/travel/flights.png",
      deals: 19,
      color: "from-green-500 to-teal-500",
      link: "/category/travel",
    },
    {
      name: "Health & Beauty",
      icon: "💄",
      image: "/beauty/makeup.png",
      deals: 24,
      color: "from-rose-500 to-pink-500",
      link: "/category/health-beauty",
    },
    {
      name: "Home & Garden",
      icon: "🏠",
      image: "/home/home-decor.png",
      deals: 16,
      color: "from-amber-500 to-orange-500",
      link: "/category/home-garden",
    },
  ]

  const featuredStores = [
    { name: "Amazon", logo: "/amazon-logo.png", cashback: "Up to 50%", url: "https://amazon.in" },
    { name: "Myntra", logo: "/myntra-logo.png", cashback: "Up to 60%", url: "https://myntra.com" },
    { name: "Flipkart", logo: "/flipkart-logo.png", cashback: "Up to 70%", url: "https://flipkart.com" },
    { name: "Zomato", logo: "/generic-food-delivery-logo.png", cashback: "Up to 50%", url: "https://zomato.com" },
    { name: "Nykaa", logo: "/nykaa-logo.png", cashback: "Up to 40%", url: "https://nykaa.com" },
    { name: "Swiggy", logo: "/generic-food-delivery-logo.png", cashback: "Up to 60%", url: "https://swiggy.com" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Enhanced Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Fayeda Club"
                  width={40}
                  height={40}
                  className="rounded-xl group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Fayeda Club
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Save More, Spend Less</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/categories" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Categories
              </Link>
              <Link href="/stores" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Stores
              </Link>
              <Link href="/gift-cards" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Gift Cards
              </Link>
              <Link href="/deals" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Hot Deals
              </Link>
            </div>

            {/* Enhanced Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative w-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative flex">
                  <Input
                    type="text"
                    placeholder="Search deals, stores, categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 pl-4 pr-12 py-2 bg-white/90 backdrop-blur-sm border-gray-200 rounded-l-full focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <Button
                    type="submit"
                    className="px-6 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-r-full border-0"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs animate-bounce">
                      {notifications}
                    </Badge>
                  )}
                </Button>
              </div>

              {/* Wishlist */}
              <Link href="/wishlist">
                <Button variant="ghost" size="sm" className="relative">
                  <Heart className="h-5 w-5" />
                  {wishlist.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-pink-500 text-white text-xs">
                      {wishlist.length}
                    </Badge>
                  )}
                </Button>
              </Link>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-3 py-2 border-b">
                    <p className="font-medium">Welcome back!</p>
                    <p className="text-sm text-gray-500">user@example.com</p>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/auth/login">Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/auth/signup">Sign Up</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/admin">Admin Dashboard</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-white/95 backdrop-blur-md">
              <div className="px-4 py-4 space-y-4">
                <form onSubmit={handleSearch} className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="sm">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
                <div className="space-y-2">
                  <Link href="/categories" className="block py-2 text-gray-700 hover:text-orange-600">
                    Categories
                  </Link>
                  <Link href="/stores" className="block py-2 text-gray-700 hover:text-orange-600">
                    Stores
                  </Link>
                  <Link href="/gift-cards" className="block py-2 text-gray-700 hover:text-orange-600">
                    Gift Cards
                  </Link>
                  <Link href="/deals" className="block py-2 text-gray-700 hover:text-orange-600">
                    Hot Deals
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Animated Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-transparent"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">India's #1 Cashback Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Save More,
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Spend Less
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
              Get the best deals, coupons, and cashback offers from top brands. Join millions of smart shoppers saving
              money every day!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">₹50L+</div>
                <div className="text-sm text-purple-200">Money Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">10L+</div>
                <div className="text-sm text-purple-200">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-purple-200">Brand Partners</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/categories">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Start Shopping
                </Button>
              </Link>
              <Link href="/gift-cards">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
                >
                  <Gift className="h-5 w-5 mr-2" />
                  Gift Cards
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Bar */}
      <section className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 text-sm font-medium">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse mr-2"></div>
              <span>🔥 2,847 deals active now</span>
            </div>
            <div className="hidden md:flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>12,456 users saved money today</span>
            </div>
            <div className="hidden lg:flex items-center">
              <Target className="h-4 w-4 mr-1" />
              <span>Average savings: ₹1,247 per user</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Deals Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔥 Today's Top Deals</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked deals that save you the most money. Limited time offers!
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentDealIndex * 100}%)` }}
              >
                {topDealsData.map((deal, index) => (
                  <div key={deal.id} className="w-full flex-shrink-0">
                    <div className={`relative h-96 bg-gradient-to-r ${deal.bgColor} text-white overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative h-full flex items-center">
                        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-8 items-center">
                          <div>
                            <Badge className="mb-4 bg-white/20 text-white border-white/30">
                              <Clock className="h-3 w-3 mr-1" />
                              Limited Time
                            </Badge>
                            <h3 className="text-4xl font-bold mb-2">{deal.title}</h3>
                            <p className="text-2xl font-semibold text-yellow-300 mb-2">{deal.subtitle}</p>
                            <p className="text-lg text-white/90 mb-6">{deal.description}</p>
                            <Link href={deal.link}>
                              <Button
                                size="lg"
                                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                              >
                                {deal.cta}
                                <ArrowRight className="h-5 w-5 ml-2" />
                              </Button>
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {deal.products.map((product, idx) => (
                              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                <Image
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  width={60}
                                  height={60}
                                  className="mx-auto mb-2 rounded-lg"
                                />
                                <p className="font-medium text-sm">{product.name}</p>
                                <p className="text-yellow-300 text-xs font-semibold">{product.discount}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {topDealsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDealIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentDealIndex ? "bg-orange-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing deals across all your favorite shopping categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={category.link}>
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                  <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                  <CardHeader className="text-center pb-4">
                    <div className="relative mb-4">
                      <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <Badge className="absolute -top-2 -right-2 bg-red-500 text-white animate-pulse">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Hot
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-orange-600 transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">{category.deals} active deals</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-2 left-2 text-white font-semibold">Up to 70% OFF</div>
                    </div>
                    <Button
                      className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90 text-white font-semibold py-3 rounded-full`}
                    >
                      Explore Deals
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏪 Featured Stores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Shop from India's most trusted brands and get exclusive cashback
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStores.map((store, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Image
                      src={store.logo || "/placeholder.svg"}
                      alt={store.name}
                      width={80}
                      height={80}
                      className="mx-auto rounded-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute -top-2 -right-2 bg-green-500 text-white">
                      <Percent className="h-3 w-3 mr-1" />
                      Cashback
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{store.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{store.cashback} Cashback</p>
                  <Button
                    onClick={() => handleShopNow(store.url, store.name)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 rounded-full"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/stores">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white bg-transparent"
              >
                View All Stores
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hot Coupons */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔥 Hot Coupons</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trending coupon codes that are saving users the most money right now
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCoupons.map((coupon) => (
              <Card
                key={coupon.id}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0"
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
                      <Badge className="bg-red-500 text-white animate-pulse">
                        <Zap className="h-3 w-3 mr-1" />
                        Hot
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => toggleWishlist(coupon.id)} className="p-1">
                      <Heart
                        className={`h-4 w-4 ${wishlist.includes(coupon.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                      />
                    </Button>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-orange-600 transition-colors">
                    {coupon.title}
                  </CardTitle>
                  <CardDescription className="text-sm">{coupon.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-green-600 font-bold text-lg">Save {coupon.savings}</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {coupon.expiryDays}d left
                    </div>
                  </div>

                  {coupon.type === "code" ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-full">
                          <Tag className="h-4 w-4 mr-2" />
                          Reveal Coupon
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center">
                            <Image
                              src={coupon.storeLogo || "/placeholder.svg"}
                              alt={coupon.store}
                              width={24}
                              height={24}
                              className="rounded mr-2"
                            />
                            {coupon.title}
                          </DialogTitle>
                          <DialogDescription>
                            Copy this coupon code and use it at {coupon.store} checkout to save {coupon.savings}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                          <div className="grid flex-1 gap-2">
                            <div className="flex items-center justify-center p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg border-2 border-dashed border-orange-300">
                              <code className="text-3xl font-bold text-orange-600">{coupon.code}</code>
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
                            onClick={() => handleShopNow(`https://${coupon.store.toLowerCase()}.com`, coupon.store)}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit {coupon.store}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button
                      onClick={() => handleShopNow(`https://${coupon.store.toLowerCase()}.com`, coupon.store)}
                      className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 rounded-full"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Get Deal
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/deals">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                View All Deals
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">Never Miss a Deal!</h2>
            <p className="text-xl text-purple-100">
              Get the latest coupons, deals, and cashback offers delivered to your inbox
            </p>
          </div>

          <form className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8">Subscribe</Button>
          </form>

          <p className="text-sm text-purple-200 mt-4">Join 100,000+ smart shoppers. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/logo.png" alt="Fayeda Club" width={40} height={40} className="rounded-lg" />
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Fayeda Club
                  </h3>
                  <p className="text-sm text-gray-400">Save More, Spend Less</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                India's leading cashback and coupon platform helping millions save money on their favorite brands.
              </p>
              <div className="flex space-x-4">
                <Badge className="bg-green-500">
                  <Award className="h-3 w-3 mr-1" />
                  Trusted
                </Badge>
                <Badge className="bg-blue-500">
                  <Users className="h-3 w-3 mr-1" />
                  10L+ Users
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/categories" className="block text-gray-400 hover:text-white transition-colors">
                  Categories
                </Link>
                <Link href="/stores" className="block text-gray-400 hover:text-white transition-colors">
                  Stores
                </Link>
                <Link href="/gift-cards" className="block text-gray-400 hover:text-white transition-colors">
                  Gift Cards
                </Link>
                <Link href="/deals" className="block text-gray-400 hover:text-white transition-colors">
                  Hot Deals
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
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
                  Terms of Service
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
                <a
                  href="mailto:support@fayedaclub.com"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  support@fayedaclub.com
                </a>
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
