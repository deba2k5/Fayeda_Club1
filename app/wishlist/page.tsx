"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import MobileHeader from "@/components/mobile-header"
import { Heart, Star, Clock, Eye, Trash2, ShoppingBag, ArrowRight, Gift } from "lucide-react"

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      store: "Amazon",
      logo: "/amazon-logo.png",
      title: "Flat 50% Off on Electronics",
      description: "Get amazing discounts on smartphones, laptops, and more",
      discount: "Up to ₹15,000",
      category: "Electronics",
      rating: 4.8,
      timeLeft: "2 days",
      addedDate: "2 days ago",
    },
    {
      id: 2,
      store: "Myntra",
      logo: "/myntra-logo.png",
      title: "Fashion Sale - Up to 60% Off",
      description: "Trendy clothes, shoes, and accessories at unbeatable prices",
      discount: "Up to ₹3,000",
      category: "Fashion",
      rating: 4.6,
      timeLeft: "5 hours",
      addedDate: "1 day ago",
    },
    {
      id: 3,
      store: "Nykaa",
      logo: "/nykaa-logo.png",
      title: "Beauty Bonanza - 40% Off",
      description: "Premium beauty products at amazing prices",
      discount: "Up to ₹2,500",
      category: "Beauty",
      rating: 4.5,
      timeLeft: "3 days",
      addedDate: "3 days ago",
    },
  ])

  const removeFromWishlist = (id: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Navigation */}
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Heart className="w-4 h-4 mr-2" />
                {wishlistItems.length} Items Saved
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Your Wishlist</h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Keep track of your favorite deals and never miss out on great savings
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {wishlistItems.length > 0 ? (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Saved Deals</h2>
              <p className="text-gray-600">You have {wishlistItems.length} deals in your wishlist</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <Card
                  key={item.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-lg overflow-hidden"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-32 flex items-center justify-center">
                      <Image
                        src={item.logo || "/placeholder.svg"}
                        alt={item.store}
                        width={80}
                        height={80}
                        className="rounded-lg shadow-lg bg-white p-2"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromWishlist(item.id)}
                        className="bg-white/20 hover:bg-red-500 text-white hover:text-white"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white/90 text-gray-800 text-xs">Added {item.addedDate}</Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{item.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-green-600">{item.discount}</div>
                        <div className="flex items-center space-x-1 text-orange-600">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{item.timeLeft} left</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Link href={`/coupon-reveal/${item.id}`} className="flex-1">
                          <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                            <Eye className="w-4 h-4 mr-2" />
                            Get Deal
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="text-center mt-12">
              <Link href="/deals">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Discover More Deals
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Start adding deals to your wishlist to keep track of your favorite offers and never miss out on great
              savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/deals">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Browse Deals
                </Button>
              </Link>
              <Link href="/stores">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Explore Stores
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
