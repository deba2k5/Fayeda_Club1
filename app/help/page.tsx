"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Search, ChevronDown, ChevronRight, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How do I use coupons from Fayeda Club?",
        answer:
          "Simply click on 'Show Coupon' button, copy the coupon code, and paste it during checkout at the store's website. For deals without codes, click 'Get Deal' to be redirected to the store.",
      },
      {
        question: "Are all coupons verified?",
        answer:
          "Yes! We manually verify every coupon before adding it to our platform. Our team regularly checks and updates coupon codes to ensure they work.",
      },
      {
        question: "Is Fayeda Club free to use?",
        answer:
          "Fayeda Club is completely free for users. We earn commission from partner stores when you make purchases, but this doesn't affect your savings.",
      },
    ],
  },
  {
    title: "Coupons & Deals",
    faqs: [
      {
        question: "Why isn't my coupon code working?",
        answer:
          "Check if the coupon has expired, meets minimum order requirements, or is applicable to your selected items. Some coupons are valid only for new users or specific categories.",
      },
      {
        question: "Can I use multiple coupons together?",
        answer:
          "This depends on the store's policy. Most stores allow only one coupon per order, but some may allow stacking of certain offers.",
      },
      {
        question: "How often are new coupons added?",
        answer:
          "We add new coupons daily! Our team works with partner stores to bring you the latest deals and exclusive offers.",
      },
    ],
  },
  {
    title: "Account & Technical",
    faqs: [
      {
        question: "Do I need to create an account?",
        answer:
          "No account is required to use coupons. However, creating an account allows you to save favorite stores and get personalized deal recommendations.",
      },
      {
        question: "Why is the website loading slowly?",
        answer:
          "Clear your browser cache and cookies. If the issue persists, try using a different browser or check your internet connection.",
      },
      {
        question: "How do I report a non-working coupon?",
        answer:
          "Use our contact form and select 'Bug Report' category. Include the coupon code and store name so we can investigate quickly.",
      },
    ],
  },
]

const quickHelp = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    action: "Start Chat",
    available: "Mon-Fri 9AM-6PM",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "+91 98765 43210",
    action: "Call Now",
    available: "Mon-Fri 9AM-6PM",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "support@fayedaclub.com",
    action: "Send Email",
    available: "24/7 Response",
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (item: string) => {
    setOpenItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">How can we help you?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Find answers to common questions or get in touch with our support team
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-full shadow-lg text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
            <p className="text-gray-600">Choose the best way to reach our support team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickHelp.map((help, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <help.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{help.title}</CardTitle>
                  <CardDescription>{help.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    {help.action}
                  </Button>
                  <p className="text-sm text-gray-500">{help.available}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600">Find quick answers to the most common questions</p>
          </div>

          <div className="space-y-6">
            {filteredFAQs.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemKey = `${categoryIndex}-${faqIndex}`
                    const isOpen = openItems.includes(itemKey)

                    return (
                      <Collapsible key={faqIndex}>
                        <CollapsibleTrigger
                          className="flex items-center justify-between w-full p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          onClick={() => toggleItem(itemKey)}
                        >
                          <span className="font-medium">{faq.question}</span>
                          {isOpen ? (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-500" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3 text-gray-600">{faq.answer}</CollapsibleContent>
                      </Collapsible>
                    )
                  })}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFAQs.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-4">Try different keywords or contact our support team</p>
              <Link href="/contact">
                <Button>Contact Support</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
