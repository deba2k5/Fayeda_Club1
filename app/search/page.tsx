"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Search, ArrowLeft, Filter, Star, Clock, Copy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Mock search results data
const searchResults = [
  {
    id: 1,
    type: "coupon",
    title: "Flat 50% Off on Electronics",
    store: "Amazon",
    storeLogo: "/amazon-logo.png",
    description: "Get amazing discounts on laptops, smartphones, and more",
    code: "SAVE50",
    expiryDays: 3,
    savings: "Up to ₹5,000",
    category: "Electronics",
  },
  {
    id: 2,
    type: "store",
    name: "Myntra",
    logo: "/myntra-logo.png",
    description: "India's leading fashion destination",
    coupons: 18,
    rating: 4.6,
    category: "Fashion",
  },
  {
    id: 3,
    type: "coupon",
    title: "Buy 2 Get 1 Free on Fashion",
    store: "Myntra",
    storeLogo: "/myntra-logo.png",
    description: "Mix and match your favorite styles",
    code: "FASHION3",
    expiryDays: 7,
    savings: "Up to ₹2,000",
    category: "Fashion",
  },
  {
    id: 4,
    type: "store",
    name: "Zomato",
    logo: "/generic-food-delivery-logo.png",
    description: "Food delivery and restaurant discovery",
    coupons: 12,
    rating: 4.3,
    category: "Food",
  },
  {
    id: 5,
    type: "coupon",
    title: "Free Delivery on Orders Above ₹199",
    store: "Zomato",
    storeLogo: "/generic-food-delivery-logo.png",
    description: "No delivery charges on your favorite meals",
    code: "",
    expiryDays: 5,
    savings: "₹50",
    category: "Food",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")
  const [copiedCode, setCopiedCode] = useState("")

  useEffect(() => {
    const query = searchParams.get("q")
    if (query) {
      setSearchQuery(query)
    }
  }, [searchParams])

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  const filteredResults = searchResults
    .filter((result) => {
      if (filterType === "all") return true
      return result.type === filterType
    })
    .filter((result) => {
      const query = searchQuery.toLowerCase()
      if (result.type === "store") {
        return result.name.toLowerCase().includes(query) || result.description.toLowerCase().includes(query)
      } else {
        return (
          result.title.toLowerCase().includes(query) ||
          result.store.toLowerCase().includes(query) ||
          result.description.toLowerCase().includes(query)
        )
      }
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

      {/* Search Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for stores, coupons, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 text-lg py-3"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-32">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="store">Stores</SelectItem>
                  <SelectItem value="coupon">Coupons</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredResults.length} Results for "{searchQuery}"
            </h2>
            <p className="text-gray-600">Find the best deals and stores matching your search</p>
          </div>

          <div className="space-y-6">
            {filteredResults.map((result) => (
              <Card key={result.id} className="hover:shadow-lg transition-shadow">
                {result.type === "store" ? (
                  <Link href={`/store/${result.name.toLowerCase()}`}>
                    <CardContent className="p-6 cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={result.logo || "/placeholder.svg"}
                          alt={result.name}
                          width={60}
                          height={60}
                          className="rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold">{result.name}</h3>
                            <Badge variant="outline">Store</Badge>
                            <Badge variant="secondary">{result.category}</Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{result.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                              <span>{result.rating}</span>
                            </div>
                            <span>{result.coupons} coupons available</span>
                          </div>
                        </div>
                        <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                          View Store
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                ) : (
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Image
                            src={result.storeLogo || "/placeholder.svg"}
                            alt={result.store}
                            width={32}
                            height={32}
                            className="rounded"
                          />
                          <Badge variant="outline">Coupon</Badge>
                          <Badge variant="secondary">{result.category}</Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {result.expiryDays}d left
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                        <p className="text-gray-600 mb-2">{result.description}</p>
                        <div className="text-green-600 font-semibold">Save {result.savings}</div>
                      </div>
                      <div className="ml-4">
                        {result.code ? (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                                Show Coupon
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                                <DialogTitle>{result.title}</DialogTitle>
                                <DialogDescription>
                                  Copy this coupon code and use it at {result.store} checkout
                                </DialogDescription>
                              </DialogHeader>
                              <div className="flex items-center space-x-2">
                                <div className="grid flex-1 gap-2">
                                  <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
                                    <code className="text-2xl font-bold text-orange-600">{result.code}</code>
                                  </div>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <Button
                                  onClick={() => handleCopyCode(result.code)}
                                  className="flex-1"
                                  variant={copiedCode === result.code ? "secondary" : "default"}
                                >
                                  <Copy className="h-4 w-4 mr-2" />
                                  {copiedCode === result.code ? "Copied!" : "Copy Code"}
                                </Button>
                                <Button variant="outline" className="flex-1 bg-transparent">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Visit {result.store}
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        ) : (
                          <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Get Deal
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {filteredResults.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
