"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Search, User, Gift, Home, Store, Grid3X3, Phone, Info, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function MobileHeader() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Store, label: "Stores", href: "/stores" },
    { icon: Grid3X3, label: "Categories", href: "/categories" },
    { icon: Gift, label: "Gift Cards", href: "/gift-cards" },
    { icon: Info, label: "About", href: "/about" },
    { icon: Phone, label: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Hamburger + Logo */}
          <div className="flex items-center space-x-3">
            {/* Mobile Menu Button - Top Left */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden p-2 hover:bg-orange-50">
                  <Menu className="h-6 w-6 text-gray-700" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0 bg-white">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="relative p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-4 right-4 text-white hover:bg-white/20 p-1"
                      >
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                    <div className="flex items-center space-x-3">
                      <Image src="/logo.png" alt="Fayeda Club" width={40} height={40} className="rounded-lg" />
                      <div>
                        <h2 className="text-xl font-bold">Fayeda Club</h2>
                        <p className="text-orange-100 text-sm">Save Big, Shop Smart</p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-2">
                      {menuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors group"
                        >
                          <item.icon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />
                          <span className="font-medium text-gray-700 group-hover:text-orange-600">{item.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="my-6 border-t border-gray-200"></div>

                    {/* Auth Buttons */}
                    <div className="space-y-3">
                      <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                          <User className="h-4 w-4 mr-2" />
                          Login / Sign Up
                        </Button>
                      </Link>
                      <Link href="/admin" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full bg-transparent border-gray-300 hover:bg-gray-50">
                          Admin Panel
                        </Button>
                      </Link>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Today's Stats</h4>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-orange-600">250+</div>
                          <div className="text-xs text-gray-600">Active Deals</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-600">₹2.5L</div>
                          <div className="text-xs text-gray-600">Saved Today</div>
                        </div>
                      </div>
                    </div>
                  </nav>

                  {/* Footer */}
                  <div className="p-4 border-t bg-gray-50">
                    <p className="text-xs text-gray-500 text-center">© 2025 Fayeda Club. All rights reserved.</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Fayeda Club" width={40} height={40} className="rounded-lg" />
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
                Fayeda Club
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/stores" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Stores
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Categories
            </Link>
            <Link href="/gift-cards" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Gift Cards
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search stores, deals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="pl-10 w-64 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search */}
            <Button variant="ghost" size="sm" className="lg:hidden hover:bg-orange-50">
              <Search className="h-5 w-5 text-gray-700" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Auth Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link href="/auth/login">
                <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 bg-transparent">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link href="/admin">
                <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 bg-transparent">
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search stores, deals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="pl-10 w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
