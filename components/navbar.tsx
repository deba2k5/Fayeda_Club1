"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Search,
  User,
  ShoppingBag,
  Gift,
  Bell,
  ChevronDown,
  Star,
  Percent,
  Heart,
  Settings,
  LogOut,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react"

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    {
      name: "Electronics",
      icon: "📱",
      subcategories: ["Smartphones", "Laptops", "Headphones", "Gaming", "Smartwatches", "Tablets"],
    },
    {
      name: "Fashion",
      icon: "👗",
      subcategories: ["Men's Clothing", "Women's Clothing", "Footwear", "Accessories", "Ethnic Wear", "Kids Fashion"],
    },
    {
      name: "Beauty",
      icon: "💄",
      subcategories: ["Skincare", "Makeup", "Haircare", "Fragrances", "Personal Care", "Supplements"],
    },
    {
      name: "Home & Garden",
      icon: "🏠",
      subcategories: ["Furniture", "Home Decor", "Kitchen & Dining", "Bedding & Bath", "Garden & Outdoor", "Storage"],
    },
    {
      name: "Food & Dining",
      icon: "🍕",
      subcategories: [
        "Pizza & Fast Food",
        "Indian Cuisine",
        "Chinese & Asian",
        "Healthy Food",
        "Desserts & Sweets",
        "Beverages",
      ],
    },
    {
      name: "Travel",
      icon: "✈️",
      subcategories: ["Flights", "Hotels", "Holiday Packages", "Car Rentals", "Bus Bookings", "Train Bookings"],
    },
  ]

  const topStores = [
    { name: "Amazon", logo: "/amazon-logo.png", cashback: "2%" },
    { name: "Flipkart", logo: "/flipkart-logo.png", cashback: "1.5%" },
    { name: "Myntra", logo: "/myntra-logo.png", cashback: "3%" },
    { name: "Nykaa", logo: "/nykaa-logo.png", cashback: "2.5%" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Welcome to Fayeda Club - India's #1 Cashback Platform</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Live: 2,450+ deals active</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Save up to ₹50,000 today!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Image src="/logo.png" alt="Fayeda Club" width={48} height={48} className="rounded-lg" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fayeda Club
              </h1>
              <p className="text-xs text-gray-500">Save More ✨</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for stores, deals, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-6 py-3 w-full rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-lg"
              />
              <Button
                size="lg"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5" />
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex items-center justify-between">
                  <span>Notifications</span>
                  <Badge variant="secondary">3 new</Badge>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">New deal available!</p>
                      <p className="text-sm text-gray-500">Amazon is offering 50% off on electronics</p>
                      <p className="text-xs text-gray-400">2 minutes ago</p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Cashback credited!</p>
                      <p className="text-sm text-gray-500">₹250 cashback added to your account</p>
                      <p className="text-xs text-gray-400">1 hour ago</p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Limited time offer!</p>
                      <p className="text-sm text-gray-500">Extra 20% cashback on Myntra purchases</p>
                      <p className="text-xs text-gray-400">3 hours ago</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-pink-500 text-white text-xs">
                7
              </Badge>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 px-4 py-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">Welcome!</p>
                    <p className="text-xs text-gray-500">Guest User</p>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Guest User</p>
                      <p className="text-sm text-gray-500">guest@fayeda.com</p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* User Stats */}
                <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 m-2 rounded-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-blue-600">₹2,450</p>
                      <p className="text-xs text-gray-600">Total Cashback</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-green-600">47</p>
                      <p className="text-xs text-gray-600">Orders</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-purple-600">Gold</p>
                      <p className="text-xs text-gray-600">Tier</p>
                    </div>
                  </div>
                </div>

                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>My Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders" className="flex items-center space-x-2">
                    <ShoppingBag className="w-4 h-4" />
                    <span>My Orders</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist" className="flex items-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>Wishlist</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/auth/login" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Login</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="border-t bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Main Navigation Links */}
            <div className="flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 font-medium">
                    <span>Categories</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen max-w-4xl p-6">
                  <div className="grid grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900">
                          <span className="text-lg">{category.icon}</span>
                          <span>{category.name}</span>
                        </div>
                        <div className="space-y-2">
                          {category.subcategories.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={`/category/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                              className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Featured Stores in Dropdown */}
                  <div className="border-t mt-6 pt-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Featured Stores</h3>
                    <div className="grid grid-cols-4 gap-4">
                      {topStores.map((store, index) => (
                        <Link
                          key={index}
                          href={`/store/${store.name.toLowerCase()}`}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <Image
                            src={store.logo || "/placeholder.svg"}
                            alt={store.name}
                            width={32}
                            height={32}
                            className="rounded"
                          />
                          <div>
                            <p className="font-medium text-sm group-hover:text-blue-600">{store.name}</p>
                            <p className="text-xs text-green-600">{store.cashback} cashback</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/stores" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                All Stores
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 font-medium text-orange-600">
                    <Percent className="w-4 h-4" />
                    <span>Top Deals</span>
                    <Badge className="bg-red-500 text-white text-xs">Hot</Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 p-4">
                  <DropdownMenuLabel className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-orange-500" />
                    <span>Trending Deals</span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                      <Image src="/amazon-logo.png" alt="Amazon" width={24} height={24} className="rounded" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Amazon Electronics Sale</p>
                        <p className="text-xs text-green-600">Up to 50% off</p>
                      </div>
                      <Badge className="bg-red-100 text-red-800 text-xs">2 days left</Badge>
                    </div>
                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                      <Image src="/myntra-logo.png" alt="Myntra" width={24} height={24} className="rounded" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Myntra Fashion Week</p>
                        <p className="text-xs text-green-600">Up to 60% off</p>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800 text-xs">5 hours left</Badge>
                    </div>
                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                      <Image src="/nykaa-logo.png" alt="Nykaa" width={24} height={24} className="rounded" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Nykaa Beauty Sale</p>
                        <p className="text-xs text-green-600">Up to 40% off</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 text-xs">3 days left</Badge>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <Link href="/deals">
                    <Button className="w-full mt-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      View All Deals
                    </Button>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/gift-cards"
                className="flex items-center space-x-2 font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Gift className="w-4 h-4" />
                <span>Gift Cards</span>
                <Badge className="bg-green-100 text-green-800 text-xs">New</Badge>
              </Link>
            </div>

            {/* Live Stats */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">2,450+ active deals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-600">Save up to ₹50,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
