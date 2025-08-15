"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import MobileHeader from "@/components/mobile-header"
import { Search, Star, Clock, Eye, Heart, Filter, TrendingUp, Zap, Gift, Users } from "lucide-react"

export default function DealsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const allDeals = [
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
      trending: true,
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
      trending: false,
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
      trending: true,
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
      trending: false,
    },
    {
      id: 5,
      store: "Swiggy",
      logo: "/generic-food-delivery-logo.png",
      title: "Food Fest - 50% Off",
      description: "Delicious meals at incredible prices",
      discount: "Up to ₹300",
      code: "FOODFEST50",
      category: "Food",
      rating: 4.3,
      users: "1.2K",
      timeLeft: "6 hours",
      featured: false,
      trending: true,
    },
    {
      id: 6,
      store: "BookMyShow",
      logo: "/generic-entertainment-logo.png",
      title: "Movie Tickets - ₹150 Off",
      description: "Book movie tickets at discounted prices",
      discount: "Up to ₹150",
      code: "MOVIE150",
      category: "Entertainment",
      rating: 4.2,
      users: "650",
      timeLeft: "1 week",
      featured: false,
      trending: false,
    },
  ]

  const categories = [
    { value: "all", label: "All Categories", count: allDeals.length },
    { value: "electronics", label: "Electronics", count: 2 },
    { value: "fashion", label: "Fashion", count: 1 },
    { value: "beauty", label: "Beauty", count: 1 },
    { value: "food", label: "Food & Dining", count: 1 },
    { value: "entertainment", label: "Entertainment", count: 1 },
  ]

  const filteredDeals = allDeals
    .filter((deal) => {
      const matchesSearch =
        deal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.store.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || deal.category.toLowerCase() === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "featured":
          return b.featured ? 1 : -1
        case "trending":
          return b.trending ? 1 : -1
        case "rating":
          return b.rating - a.rating
        case "users":
          return Number.parseInt(b.users.replace(/[^\d]/g, "")) - Number.parseInt(a.users.replace(/[\d]/g, ""))
        case "expiry":
          // Simple expiry sorting (you'd implement proper date comparison)
          return a.timeLeft.localeCompare(b.timeLeft)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Zap className="w-4 h-4 mr-2" />
                {filteredDeals.length} Hot Deals Available
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Top Deals &
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Exclusive Offers
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Discover the best deals from your favorite stores and save big on every purchase
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search deals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label} ({category.count})
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
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="users">Most Popular</SelectItem>
                  <SelectItem value="expiry">Expiring Soon</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{filteredDeals.length} Deals Found</h2>
          <p className="text-gray-600">Save money with these exclusive offers and cashback deals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeals.map((deal) => (
            <Card
              key={deal.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
            >
              {(deal.featured || deal.trending) && (
                <div className="absolute top-4 left-4 z-10 flex space-x-2">
                  {deal.featured && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  {deal.trending && (
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold animate-pulse">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
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
                      <div className="text-sm text-gray-500 flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {deal.users} used
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Expires in</span>
                      <div className="flex items-center space-x-1 text-orange-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{deal.timeLeft}</span>
                      </div>
                    </div>
                    <Link href={`/coupon-reveal/${deal.id}`}>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                        <Eye className="w-4 h-4 mr-2" />
                        Reveal Coupon
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDeals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No deals found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl text-white p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want More Exclusive Deals?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join our newsletter and never miss out on the hottest deals and cashback offers
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 text-white placeholder-white/70"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                <Gift className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
