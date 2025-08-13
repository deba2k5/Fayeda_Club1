"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Gift, Percent, Filter, Search, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MobileHeader } from "@/components/mobile-header"

// Mock gift cards data
const mockGiftCards = [
  {
    id: "1",
    name: "Amazon",
    logo: "/amazon-logo.png",
    description: "Shop for everything on Amazon with gift cards",
    category: "Shopping",
    denominations: [100, 250, 500, 1000, 2000, 5000],
    cashback: "2%",
    featured: true,
    color: "from-orange-400 to-orange-600",
  },
  {
    id: "2",
    name: "Myntra",
    logo: "/myntra-logo.png",
    description: "Fashion and lifestyle gift cards",
    category: "Fashion",
    denominations: [250, 500, 1000, 2000, 3000],
    cashback: "3%",
    featured: true,
    color: "from-pink-400 to-pink-600",
  },
  {
    id: "3",
    name: "Flipkart",
    logo: "/flipkart-logo.png",
    description: "India's leading e-commerce platform gift cards",
    category: "Shopping",
    denominations: [100, 250, 500, 1000, 2000, 5000],
    cashback: "1.5%",
    featured: true,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "4",
    name: "Zomato",
    logo: "/generic-food-delivery-logo.png",
    description: "Food delivery and dining gift cards",
    category: "Food & Dining",
    denominations: [100, 200, 500, 1000, 2000],
    cashback: "4%",
    featured: true,
    color: "from-red-400 to-red-600",
  },
  {
    id: "5",
    name: "Nykaa",
    logo: "/nykaa-logo.png",
    description: "Beauty and wellness gift cards",
    category: "Beauty",
    denominations: [250, 500, 1000, 2000],
    cashback: "2.5%",
    featured: false,
    color: "from-purple-400 to-pink-500",
  },
  {
    id: "6",
    name: "BookMyShow",
    logo: "/generic-entertainment-logo.png",
    description: "Movie tickets and entertainment gift cards",
    category: "Entertainment",
    denominations: [200, 500, 1000, 1500],
    cashback: "1%",
    featured: false,
    color: "from-indigo-400 to-purple-600",
  },
]

export default function GiftCardsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  // Filter and sort gift cards
  const filteredCards = mockGiftCards
    .filter((card) => {
      const matchesSearch =
        card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory =
        selectedCategory === "all" || card.category.toLowerCase() === selectedCategory.toLowerCase()
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "featured":
          return b.featured ? 1 : -1
        case "cashback":
          return Number.parseFloat(b.cashback) - Number.parseFloat(a.cashback)
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const categories = ["all", "Shopping", "Fashion", "Food & Dining", "Beauty", "Entertainment", "Travel"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <MobileHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Gift className="h-12 w-12 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold">Gift Cards</h1>
            </div>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Perfect gifts for every occasion. Instant delivery, cashback rewards, and flexible denominations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">{mockGiftCards.length}+</div>
                <div className="text-sm text-purple-100">Gift Cards</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Up to 4%</div>
                <div className="text-sm text-purple-100">Cashback</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Instant</div>
                <div className="text-sm text-purple-100">Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search gift cards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="cashback">Highest Cashback</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Cards Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{filteredCards.length} Gift Cards Available</h2>
            {selectedCategory !== "all" && (
              <Button
                variant="outline"
                onClick={() => setSelectedCategory("all")}
                className="text-purple-600 border-purple-600 hover:bg-purple-50"
              >
                Clear Filters
              </Button>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCards.map((card) => (
              <Link key={card.id} href={`/gift-cards/${card.name.toLowerCase()}`}>
                <Card
                  className={`hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-lg bg-gradient-to-br ${card.color} relative overflow-hidden`}
                >
                  {card.featured && (
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-yellow-400 text-yellow-900 border-0">
                        <Zap className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-white pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center">
                        <Image
                          src={card.logo || "/placeholder.svg"}
                          alt={card.name}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        <Percent className="h-3 w-3 mr-1" />
                        {card.cashback} Cashback
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white">{card.name}</CardTitle>
                    <CardDescription className="text-white/80 text-sm">{card.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-white/90 text-sm">
                        <span>Denominations</span>
                        <span className="font-medium">
                          ₹{Math.min(...card.denominations)} - ₹{Math.max(...card.denominations)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-white/90 text-sm">
                        <span>Category</span>
                        <span className="font-medium">{card.category}</span>
                      </div>

                      <div className="flex items-center justify-between text-white/90 text-sm">
                        <span>Validity</span>
                        <span className="font-medium">1 Year</span>
                      </div>

                      <Button
                        size="sm"
                        className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 mt-4"
                      >
                        Buy Gift Card
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredCards.length === 0 && (
            <div className="text-center py-16">
              <Gift className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No gift cards found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Gift Cards?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the convenience and benefits of digital gift cards with instant delivery and rewards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Delivery</h3>
              <p className="text-gray-600">Get your gift cards delivered instantly via email. No waiting, no delays.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cashback Rewards</h3>
              <p className="text-gray-600">Earn up to 4% cashback on every gift card purchase. More savings for you!</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Perfect Gifts</h3>
              <p className="text-gray-600">
                Ideal for birthdays, festivals, or any special occasion. Let them choose what they love.
              </p>
            </div>
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
                Your trusted destination for the best deals, discount coupons, and gift cards online.
              </p>
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
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Email: support@fayedaclub.com</li>
                <li>Phone: +91 9876543210</li>
                <li>Hours: 9 AM - 6 PM IST</li>
              </ul>
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
