"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Home, Store, Gift, Tag, Users, HelpCircle, Phone, User, Shield } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/stores", label: "All Stores", icon: Store },
    { href: "/gift-cards", label: "Gift Cards", icon: Gift },
    { href: "/categories", label: "Categories", icon: Tag },
    { href: "/about", label: "About Us", icon: Users },
    { href: "/help", label: "Help & Support", icon: HelpCircle },
    { href: "/contact", label: "Contact", icon: Phone },
  ]

  return (
    <div className="md:hidden bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Hamburger Menu - Top Left */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="p-2">
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Image src="/logo.png" alt="Fayeda Club" width={40} height={40} className="rounded-lg" />
                    <div>
                      <h2 className="font-bold text-lg">Fayeda Club</h2>
                      <p className="text-orange-100 text-sm">Save More, Spend Less</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 p-1"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-bold text-lg">150+</div>
                    <div className="text-xs text-orange-100">Active Deals</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-bold text-lg">₹50K+</div>
                    <div className="text-xs text-orange-100">Savings Today</div>
                  </div>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="flex-1 py-4">
                <nav className="space-y-1 px-4">
                  {menuItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )
                  })}
                </nav>

                {/* Auth Buttons */}
                <div className="px-4 mt-6 space-y-3">
                  <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                      <User className="h-4 w-4 mr-2" />
                      Member Login
                    </Button>
                  </Link>
                  <Link href="/admin" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                    >
                      <Shield className="h-4 w-4 mr-2" />
                      Admin Panel
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t p-4 text-center text-sm text-gray-500">
                <p>© 2024 Fayeda Club</p>
                <p>Your trusted savings partner</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo - Center */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Fayeda Club" width={32} height={32} className="rounded-lg" />
          <span className="font-bold text-lg bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Fayeda Club
          </span>
        </Link>

        {/* Search/Profile - Right */}
        <div className="flex items-center space-x-2">
          <Link href="/auth/login">
            <Button variant="ghost" size="sm" className="p-2">
              <User className="h-5 w-5 text-gray-700" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
