"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Search,
  Menu,
  User,
  Gift,
  Bell,
  Heart,
  Home,
  Store,
  Grid3X3,
  Percent,
  Settings,
  LogOut,
  Target,
  Users,
  Award,
  HelpCircle,
  Phone,
} from "lucide-react"

export function MobileHeader() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsOpen(false)
    }
  }

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Store, label: "All Stores", href: "/stores" },
    { icon: Grid3X3, label: "Categories", href: "/categories" },
    { icon: Percent, label: "Top Deals", href: "/deals" },
    { icon: Gift, label: "Gift Cards", href: "/gift-cards" },
    { icon: Heart, label: "Wishlist", href: "/wishlist" },
    { icon: HelpCircle, label: "Help & Support", href: "/help" },
    { icon: Phone, label: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b lg:hidden">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-xs">
            <span>🎉 Save up to ₹50,000 today! Limited time offers</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Fayeda Club" width={32} height={32} className="rounded-lg" />
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fayeda Club
            </h1>
          </div>
        </Link>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          {/* Search */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Search className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-auto">
              <div className="py-4">
                <form onSubmit={handleSearch} className="search-container">
                  <Search className="search-icon w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search for stores, deals..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                    autoFocus
                  />
                  <Button type="submit" className="search-button">
                    Search
                  </Button>
                </form>
              </div>
            </SheetContent>
          </Sheet>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
              3
            </Badge>
          </Button>

          {/* Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="py-4">
                {/* User Profile */}
                <div className="flex items-center space-x-3 mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Guest User</p>
                    <p className="text-sm text-gray-500">guest@fayeda.com</p>
                  </div>
                </div>

                {/* User Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">₹2,450</div>
                    <div className="text-xs text-gray-600">Total Cashback</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">47</div>
                    <div className="text-xs text-gray-600">Orders</div>
                  </div>
                </div>

                {/* Navigation Menu */}
                <nav className="space-y-2 mb-6">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* Quick Stats */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Live Stats</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>50K+ Users</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Store className="w-4 h-4 text-purple-600" />
                      <span>500+ Stores</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-green-600" />
                      <span>₹2.5Cr+ Saved</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-orange-600" />
                      <span>98% Happy</span>
                    </div>
                  </div>
                </div>

                {/* Account Actions */}
                <div className="space-y-2">
                  <Link
                    href="/settings"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Settings className="w-5 h-5 text-gray-600" />
                    <span>Settings</span>
                  </Link>
                  <Link
                    href="/auth/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <User className="w-5 h-5 text-gray-600" />
                    <span>Login</span>
                  </Link>
                  <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-red-600 w-full text-left">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader
