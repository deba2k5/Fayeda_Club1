"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  Search,
  User,
  ShoppingBag,
  Gift,
  Home,
  Store,
  Grid3X3,
  HelpCircle,
  Phone,
  Settings,
  LogOut,
  Bell,
  Heart,
  Percent,
  Sparkles,
} from "lucide-react"

export function MobileHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const menuItems = [
    { icon: Home, label: "Home", href: "/", badge: null },
    { icon: Store, label: "Stores", href: "/stores", badge: "500+" },
    { icon: Grid3X3, label: "Categories", href: "/categories", badge: null },
    { icon: Gift, label: "Gift Cards", href: "/gift-cards", badge: "New" },
    { icon: Percent, label: "Top Deals", href: "/deals", badge: "Hot" },
    { icon: Heart, label: "Wishlist", href: "/wishlist", badge: null },
    { icon: HelpCircle, label: "Help & Support", href: "/help", badge: null },
    { icon: Phone, label: "Contact Us", href: "/contact", badge: null },
  ]

  const accountItems = [
    { icon: User, label: "My Profile", href: "/profile" },
    { icon: ShoppingBag, label: "My Orders", href: "/orders" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative">
            <Image src="/logo.png" alt="Fayeda Club" width={40} height={40} className="rounded-lg" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          <span className="font-bold text-xl gradient-text">Fayeda</span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search stores, deals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          {/* Search Button - Mobile */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="w-5 h-5" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
              3
            </Badge>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <SheetHeader className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <SheetTitle className="text-white text-left">Welcome Back!</SheetTitle>
                      <p className="text-white/80 text-sm">guest@fayeda.com</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-lg font-bold">₹2,450</div>
                      <div className="text-xs text-white/80">Total Cashback</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">47</div>
                      <div className="text-xs text-white/80">Orders</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">Gold</div>
                      <div className="text-xs text-white/80">Tier</div>
                    </div>
                  </div>
                </SheetHeader>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4">
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Explore</h3>
                      <div className="space-y-1">
                        {menuItems.map((item, index) => (
                          <Link key={index} href={item.href}>
                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                              <div className="flex items-center space-x-3">
                                <item.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {item.label}
                                </span>
                              </div>
                              {item.badge && (
                                <Badge
                                  className={`text-xs ${
                                    item.badge === "New"
                                      ? "bg-green-100 text-green-800"
                                      : item.badge === "Hot"
                                        ? "bg-red-100 text-red-800"
                                        : "bg-blue-100 text-blue-800"
                                  }`}
                                >
                                  {item.badge}
                                </Badge>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Account</h3>
                      <div className="space-y-1">
                        {accountItems.map((item, index) => (
                          <Link key={index} href={item.href}>
                            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                              <item.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                              <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.label}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Special Offers */}
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 mb-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        <span className="font-semibold text-purple-900">Special Offer</span>
                      </div>
                      <p className="text-sm text-purple-800 mb-3">Get 20% extra cashback on your next purchase!</p>
                      <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                        Claim Now
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex items-center justify-between">
                    <Link href="/auth/login">
                      <Button variant="outline" size="sm" className="flex-1 mr-2 bg-transparent">
                        <User className="w-4 h-4 mr-2" />
                        Login
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden border-t bg-white p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search stores, deals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  )
}

// Export as both named and default export to satisfy all import patterns
export default MobileHeader
