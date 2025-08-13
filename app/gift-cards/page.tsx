"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import MobileHeader from "@/components/mobile-header"
import {
  Search,
  Star,
  Gift,
  Sparkles,
  TrendingUp,
  Heart,
  ShoppingBag,
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Target,
  Percent,
} from "lucide-react"

export default function GiftCardsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  const categories = [
    { id: "all", name: "All Categories", count: 156, icon: "🎁" },
    { id: "ecommerce", name: "E-commerce", count: 45, icon: "🛒" },
    { id: "fashion", name: "Fashion", count: 32, icon: "👗" },
    { id: "food", name: "Food & Dining", count: 28, icon: "🍕" },
    { id: "beauty", name: "Beauty", count: 24, icon: "💄" },
    { id: "travel", name: "Travel", count: 18, icon: "✈️" },
    { id: "entertainment", name: "Entertainment", count: 9, icon: "🎬" },
  ]

  const featuredCards = [
    {
      id: 1,
      name: "Amazon Gift Card",
      brand: "Amazon",
      logo: "/amazon-logo.png",
      category: "E-commerce",
      minAmount: 100,
      maxAmount: 10000,
      discount: 5,
      cashback: 2,
      rating: 4.8,
      reviews: 2450,
      popular: true,
      trending: true,
      description: "Shop for everything you need on Amazon with instant delivery",
      features: ["Instant Delivery", "No Expiry", "Pan India Accepted"],
      colors: "from-orange-500 to-yellow-500",
    },
    {
      id: 2,
      name: "Flipkart Gift Card",
      brand: "Flipkart",
      logo: "/flipkart-logo.png",
      category: "E-commerce",
      minAmount: 50,
      maxAmount: 5000,
      discount: 3,
      cashback: 1.5,
      rating: 4.6,
      reviews: 1890,
      popular: true,
      trending: false,
      description: "India's leading e-commerce platform for all your shopping needs",
      features: ["Quick Delivery", "Easy Returns", "Wide Selection"],
      colors: "from-blue-500 to-indigo-500",
    },
    {
      id: 3,
      name: "Myntra Gift Card",
      brand: "Myntra",
      logo: "/myntra-logo.png",
      category: "Fashion",
      minAmount: 100,
      maxAmount: 3000,
      discount: 7,
      cashback: 3,
      rating: 4.5,
      reviews: 1250,
      popular: false,
      trending: true,
      description: "Fashion and lifestyle products from top brands",
      features: ["Latest Fashion", "Brand Guarantee", "Easy Exchange"],
      colors: "from-pink-500 to-purple-500",
    },
  ]

  const giftCards = [
    {
      id: 4,
      name: "Nykaa Gift Card",
      brand: "Nykaa",
      logo: "/nykaa-logo.png",
      category: "Beauty",
      minAmount: 100,
      maxAmount: 2000,
      discount: 10,
      cashback: 2.5,
      rating: 4.4,
      reviews: 890,
      popular: false,
      trending: false,
      description: "Beauty and wellness products from premium brands",
      features: ["Authentic Products", "Expert Advice", "Free Samples"],
      colors: "from-pink-500 to-rose-500",
    },
    {
      id: 5,
      name: "Swiggy Gift Card",
      brand: "Swiggy",
      logo: "/generic-food-delivery-logo.png",
      category: "Food & Dining",
      minAmount: 50,
      maxAmount: 1000,
      discount: 8,
      cashback: 4,
      rating: 4.3,
      reviews: 1560,
      popular: true,
      trending: false,
      description: "Order your favorite food from thousands of restaurants",
      features: ["Fast Delivery", "Live Tracking", "Multiple Cuisines"],
      colors: "from-orange-500 to-red-500",
    },
    {
      id: 6,
      name: "BookMyShow Gift Card",
      brand: "BookMyShow",
      logo: "/generic-entertainment-logo.png",
      category: "Entertainment",
      minAmount: 100,
      maxAmount: 2000,
      discount: 5,
      cashback: 2,
      rating: 4.2,
      reviews: 650,
      popular: false,
      trending: false,
      description: "Book movie tickets and events across India",
      features: ["Easy Booking", "Multiple Venues", "Event Updates"],
      colors: "from-purple-500 to-indigo-500",
    },
    {
      id: 7,
      name: "Uber Gift Card",
      brand: "Uber",
      logo: "/provider-logos/uber.png",
      category: "Travel",
      minAmount: 100,
      maxAmount: 1500,
      discount: 6,
      cashback: 3,
      rating: 4.1,
      reviews: 780,
      popular: false,
      trending: true,
      description: "Convenient rides and food delivery at your fingertips",
      features: ["24/7 Available", "Safe Rides", "Multiple Options"],
      colors: "from-gray-700 to-black",
    },
    {
      id: 8,
      name: "Ajio Gift Card",
      brand: "Ajio",
      logo: "/ajio-logo.png",
      category: "Fashion",
      minAmount: 100,
      maxAmount: 4000,
      discount: 9,
      cashback: 3.5,
      rating: 4.0,
      reviews: 420,
      popular: false,
      trending: false,
      description: "Trendy fashion and lifestyle products",
      features: ["Trendy Styles", "Quality Brands", "Regular Sales"],
      colors: "from-teal-500 to-cyan-500",
    },
  ]

  const stats = [
    { label: "Gift Cards Available", value: "150+", icon: Gift, color: "from-blue-500 to-cyan-500" },
    { label: "Happy Customers", value: "25K+", icon: Users, color: "from-green-500 to-emerald-500" },
    { label: "Total Savings", value: "₹50L+", icon: Target, color: "from-purple-500 to-pink-500" },
    { label: "Average Rating", value: "4.6★", icon: Award, color: "from-orange-500 to-red-500" },
  ]

  const filteredCards = giftCards.filter((card) => {
    const matchesSearch =
      card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.brand.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || card.category.toLowerCase() === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedCards = [...filteredCards].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.reviews - a.reviews
      case "rating":
        return b.rating - a.rating
      case "discount":
        return b.discount - a.discount
      case "cashback":
        return b.cashback - a.cashback
      default:
        return 0
    }
  })

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
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
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
                <Gift className="w-4 h-4 mr-2" />
                150+ Gift Cards Available
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Perfect Gifts for
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Every Occasion
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Choose from 150+ gift cards with instant delivery, amazing discounts, and cashback rewards
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search gift cards by brand or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 pr-6 py-4 text-lg rounded-full border-0 bg-white/95 backdrop-blur-sm shadow-xl focus:ring-4 focus:ring-white/30"
                />
                <Button
                  size="lg"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Gift Cards */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Gift Cards</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked gift cards with the best discounts and cashback offers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCards.map((card) => (
              <Card
                key={card.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <div className={`bg-gradient-to-r ${card.colors} h-32 flex items-center justify-center relative`}>
                    <Image
                      src={card.logo || "/placeholder.svg"}
                      alt={card.brand}
                      width={80}
                      height={80}
                      className="rounded-lg shadow-lg bg-white p-2"
                    />
                    {card.popular && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500 text-white font-semibold">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}
                    {card.trending && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-red-500 text-white font-semibold animate-pulse">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4">
                      <Button variant="ghost" size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {card.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{card.rating}</span>
                      <span className="text-xs text-gray-500">({card.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">{card.name}</CardTitle>
                  <CardDescription className="text-sm">{card.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-600">Amount Range</span>
                        <div className="font-semibold">
                          ₹{card.minAmount} - ₹{card.maxAmount}
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800 mb-1">
                          <Percent className="w-3 h-3 mr-1" />
                          {card.discount}% OFF
                        </Badge>
                        <div className="text-xs text-gray-500">+ {card.cashback}% Cashback</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700">Key Features:</div>
                      <div className="flex flex-wrap gap-1">
                        {card.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link href={`/gift-cards/${card.brand.toLowerCase().replace(" ", "-")}`}>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 group-hover:scale-105 transition-transform">
                        Buy Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Gift Cards */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">All Gift Cards</h2>
              <p className="text-gray-600">Browse through our complete collection</p>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="discount">Best Discount</SelectItem>
                  <SelectItem value="cashback">Best Cashback</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 bg-gray-100 p-1 rounded-lg">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center space-x-2 data-[state=active]:bg-white data-[state=active]:text-purple-600"
                >
                  <span className="text-lg">{category.icon}</span>
                  <div className="hidden sm:block">
                    <div className="font-medium">{category.name}</div>
                    <div className="text-xs text-gray-500">{category.count}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedCards.map((card) => (
                  <Card
                    key={card.id}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-lg"
                  >
                    <div className="relative">
                      <div className={`bg-gradient-to-r ${card.colors} h-24 flex items-center justify-center`}>
                        <Image
                          src={card.logo || "/placeholder.svg"}
                          alt={card.brand}
                          width={60}
                          height={60}
                          className="rounded-lg shadow-lg bg-white p-1"
                        />
                      </div>
                      <div className="absolute top-2 right-2">
                        <Button variant="ghost" size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                          <Heart className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {card.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-xs font-medium">{card.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                        {card.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Range</span>
                          <span className="font-medium text-sm">
                            ₹{card.minAmount} - ₹{card.maxAmount}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge className="bg-green-100 text-green-800 text-xs">{card.discount}% OFF</Badge>
                          <Badge className="bg-blue-100 text-blue-800 text-xs">{card.cashback}% Cashback</Badge>
                        </div>

                        <Link href={`/gift-cards/${card.brand.toLowerCase().replace(" ", "-")}`}>
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-sm">
                            Buy Now
                            <ArrowRight className="w-3 h-3 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {sortedCards.length === 0 && (
                <div className="text-center py-12">
                  <Gift className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No gift cards found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>

        {/* CTA Section */}
        <section className="mt-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl text-white p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Gift Cards?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Experience the best in digital gifting with instant delivery and amazing rewards
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Instant Delivery</h3>
                <p className="text-white/80">Get your gift cards delivered instantly via email</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
                <p className="text-white/80">Enjoy exclusive discounts and cashback offers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">100% Secure</h3>
                <p className="text-white/80">Safe and secure transactions with money-back guarantee</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Start Shopping
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
