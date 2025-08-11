"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ArrowLeft, Star, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const allStores = [
  {
    id: 1,
    name: "Amazon",
    logo: "/amazon-logo.png",
    coupons: 25,
    category: "Electronics",
    rating: 4.8,
    description: "World's largest online marketplace",
  },
  {
    id: 2,
    name: "Myntra",
    logo: "/myntra-logo.png",
    coupons: 18,
    category: "Fashion",
    rating: 4.6,
    description: "India's leading fashion destination",
  },
  {
    id: 3,
    name: "Zomato",
    logo: "/generic-food-delivery-logo.png",
    coupons: 12,
    category: "Food",
    rating: 4.3,
    description: "Food delivery and restaurant discovery",
  },
  {
    id: 4,
    name: "Flipkart",
    logo: "/flipkart-logo.png",
    coupons: 22,
    category: "Electronics",
    rating: 4.5,
    description: "India's leading e-commerce platform",
  },
  {
    id: 5,
    name: "Swiggy",
    logo: "/generic-food-delivery-logo.png",
    coupons: 15,
    category: "Food",
    rating: 4.4,
    description: "Food delivery at your doorstep",
  },
  {
    id: 6,
    name: "Nykaa",
    logo: "/nykaa-logo.png",
    coupons: 10,
    category: "Beauty",
    rating: 4.7,
    description: "Beauty and wellness products",
  },
  {
    id: 7,
    name: "BookMyShow",
    logo: "/generic-entertainment-logo.png",
    coupons: 8,
    category: "Entertainment",
    rating: 4.2,
    description: "Movie tickets and events",
  },
  {
    id: 8,
    name: "Uber",
    logo: "/provider-logos/uber.png",
    coupons: 6,
    category: "Travel",
    rating: 4.1,
    description: "Ride sharing and food delivery",
  },
  {
    id: 9,
    name: "Ajio",
    logo: "/generic-fashion-logo.png",
    coupons: 14,
    category: "Fashion",
    rating: 4.3,
    description: "Fashion and lifestyle brand",
  },
  {
    id: 10,
    name: "BigBasket",
    logo: "/generic-grocery-logo.png",
    coupons: 11,
    category: "Grocery",
    rating: 4.2,
    description: "Online grocery shopping",
  },
  {
    id: 11,
    name: "Paytm",
    logo: "/paytm-payment-logo.png",
    coupons: 9,
    category: "Finance",
    rating: 4.0,
    description: "Digital payments and financial services",
  },
  {
    id: 12,
    name: "MakeMyTrip",
    logo: "/generic-travel-logo.png",
    coupons: 13,
    category: "Travel",
    rating: 4.4,
    description: "Travel booking platform",
  },
]

const categories = ["All", "Electronics", "Fashion", "Food", "Beauty", "Entertainment", "Travel", "Grocery", "Finance"]

export default function AllStoresPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("popular")

  const filteredStores = allStores
    .filter(
      (store) =>
        (selectedCategory === "All" || store.category === selectedCategory) &&
        (store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.description.toLowerCase().includes(searchQuery.toLowerCase())),
    )
    .sort((a, b) => {
      if (sortBy === "popular") return b.coupons - a.coupons
      if (sortBy === "rating") return b.rating - a.rating
      if (sortBy === "name") return a.name.localeCompare(b.name)
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
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">All Stores</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Browse through all our partner stores and find the best deals for your favorite brands
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search stores..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
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
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Stores Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900">{filteredStores.length} Stores Found</h3>
            <p className="text-gray-600">Discover amazing deals from your favorite brands</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStores.map((store) => (
              <Link key={store.id} href={`/store/${store.name.toLowerCase()}`}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                  <CardHeader className="text-center pb-3">
                    <div className="relative mb-4">
                      <Image
                        src={store.logo || "/placeholder.svg"}
                        alt={store.name}
                        width={80}
                        height={80}
                        className="mx-auto rounded-lg"
                      />
                    </div>
                    <CardTitle className="text-xl">{store.name}</CardTitle>
                    <CardDescription className="text-sm">{store.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="font-semibold">{store.rating}</span>
                        </div>
                        <Badge variant="secondary">{store.category}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-orange-600">
                          <Tag className="h-4 w-4 mr-1" />
                          <span className="font-semibold">{store.coupons} coupons</span>
                        </div>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                        >
                          View Deals
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredStores.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No stores found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
