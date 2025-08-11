"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ArrowLeft, Tag, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    id: 1,
    name: "Fashion",
    icon: "👗",
    count: 45,
    description: "Clothing, footwear, and accessories for men and women",
    color: "from-pink-500 to-purple-500",
    stores: ["Myntra", "Ajio", "Nykaa Fashion"],
    trending: true,
  },
  {
    id: 2,
    name: "Electronics",
    icon: "📱",
    count: 32,
    description: "Smartphones, laptops, gadgets, and tech accessories",
    color: "from-blue-500 to-cyan-500",
    stores: ["Amazon", "Flipkart", "Croma"],
    trending: true,
  },
  {
    id: 3,
    name: "Food & Dining",
    icon: "🍕",
    count: 28,
    description: "Food delivery, restaurants, and dining experiences",
    color: "from-orange-500 to-red-500",
    stores: ["Zomato", "Swiggy", "Dominos"],
    trending: false,
  },
  {
    id: 4,
    name: "Travel",
    icon: "✈️",
    count: 19,
    description: "Flight bookings, hotels, and travel packages",
    color: "from-green-500 to-teal-500",
    stores: ["MakeMyTrip", "Goibibo", "Uber"],
    trending: false,
  },
  {
    id: 5,
    name: "Health & Beauty",
    icon: "💄",
    count: 24,
    description: "Skincare, makeup, wellness, and personal care",
    color: "from-rose-500 to-pink-500",
    stores: ["Nykaa", "Purplle", "1mg"],
    trending: true,
  },
  {
    id: 6,
    name: "Home & Garden",
    icon: "🏠",
    count: 16,
    description: "Home decor, furniture, and garden essentials",
    color: "from-amber-500 to-orange-500",
    stores: ["Pepperfry", "Urban Ladder", "IKEA"],
    trending: false,
  },
  {
    id: 7,
    name: "Grocery",
    icon: "🛒",
    count: 21,
    description: "Fresh produce, daily essentials, and household items",
    color: "from-emerald-500 to-green-500",
    stores: ["BigBasket", "Grofers", "Amazon Fresh"],
    trending: false,
  },
  {
    id: 8,
    name: "Entertainment",
    icon: "🎬",
    count: 13,
    description: "Movies, events, gaming, and entertainment",
    color: "from-purple-500 to-indigo-500",
    stores: ["BookMyShow", "PayTM Insider", "Hotstar"],
    trending: false,
  },
  {
    id: 9,
    name: "Finance",
    icon: "💳",
    count: 11,
    description: "Banking, payments, insurance, and financial services",
    color: "from-slate-500 to-gray-500",
    stores: ["Paytm", "PhonePe", "HDFC Bank"],
    trending: false,
  },
]

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Find deals organized by your favorite shopping categories and discover new brands
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900">{filteredCategories.length} Categories Available</h3>
            <p className="text-gray-600">Explore deals across different shopping categories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <Link key={category.id} href={`/category/${category.name.toLowerCase().replace(" & ", "-")}`}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-full overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                  <CardHeader className="text-center pb-3">
                    <div className="relative mb-4">
                      <div className="text-6xl mb-2">{category.icon}</div>
                      {category.trending && (
                        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <CardDescription className="text-sm">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-orange-600">
                          <Tag className="h-4 w-4 mr-1" />
                          <span className="font-semibold">{category.count} deals</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-2">Popular stores:</p>
                        <div className="flex flex-wrap gap-1">
                          {category.stores.map((store, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {store}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button size="sm" className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90`}>
                        Explore Deals
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No categories found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
