"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Shield, Eye, Copy, ExternalLink, Star, Clock, Users, CheckCircle, Gift } from "lucide-react"

const dealData = {
  1: {
    id: 1,
    store: "Amazon",
    logo: "/amazon-logo.png",
    title: "Flat 50% Off on Electronics",
    description: "Get amazing discounts on smartphones, laptops, and more",
    discount: "Up to ₹15,000",
    code: "ELECTRONICS50",
    category: "Electronics",
    rating: 4.8,
    users: "2.5K",
    timeLeft: "2 days",
    storeUrl: "https://amazon.in",
    terms: [
      "Valid on electronics category only",
      "Minimum order value ₹5,000",
      "Valid till 31st December 2024",
      "Cannot be combined with other offers",
      "One time use per user",
    ],
  },
  2: {
    id: 2,
    store: "Myntra",
    logo: "/myntra-logo.png",
    title: "Fashion Sale - Up to 60% Off",
    description: "Trendy clothes, shoes, and accessories at unbeatable prices",
    discount: "Up to ₹3,000",
    code: "FASHION60",
    category: "Fashion",
    rating: 4.6,
    users: "1.8K",
    timeLeft: "5 hours",
    storeUrl: "https://myntra.com",
    terms: [
      "Valid on fashion items only",
      "Minimum order value ₹2,000",
      "Valid for 7 days from activation",
      "Applicable on selected brands only",
      "Free shipping included",
    ],
  },
  3: {
    id: 3,
    store: "Flipkart",
    logo: "/flipkart-logo.png",
    title: "Big Billion Days Sale",
    description: "Mega sale on all categories with extra cashback",
    discount: "Up to ₹20,000",
    code: "BIGBILLION70",
    category: "Electronics",
    rating: 4.7,
    users: "3.2K",
    timeLeft: "1 day",
    storeUrl: "https://flipkart.com",
    terms: [
      "Valid on all categories",
      "Minimum order value ₹3,000",
      "Valid for 24 hours only",
      "Extra cashback on select items",
      "Free delivery included",
    ],
  },
  4: {
    id: 4,
    store: "Nykaa",
    logo: "/nykaa-logo.png",
    title: "Beauty Bonanza - 40% Off",
    description: "Premium beauty products at amazing prices",
    discount: "Up to ₹2,500",
    code: "BEAUTY40",
    category: "Beauty",
    rating: 4.5,
    users: "950",
    timeLeft: "3 days",
    storeUrl: "https://nykaa.com",
    terms: [
      "Valid on beauty products only",
      "Minimum order value ₹1,500",
      "Valid for 3 days from activation",
      "Applicable on premium brands",
      "Free samples included",
    ],
  },
}

export default function CouponRevealPage({ params }: { params: { dealId: string } }) {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isRevealing, setIsRevealing] = useState(false)
  const [isRevealed, setIsRevealed] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)
  const router = useRouter()

  const deal = dealData[params.dealId as keyof typeof dealData]

  useEffect(() => {
    if (!deal) {
      router.push("/")
    }
  }, [deal, router])

  if (!deal) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Deal Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleRevealCoupon = async () => {
    if (!email || !phone || !agreedToTerms) {
      alert("Please fill all fields and agree to terms")
      return
    }

    setIsRevealing(true)

    // Simulate API call for verification
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsRevealing(false)
    setIsRevealed(true)
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(deal.code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const handleShopNow = () => {
    // Track the click
    console.log(`User clicked shop now for ${deal.store} - Deal ID: ${deal.id}`)

    // Open store URL in new tab
    window.open(deal.storeUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Deal Information */}
          <div>
            <Card className="shadow-xl border-0 mb-6">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32 flex items-center justify-center">
                  <Image
                    src={deal.logo || "/placeholder.svg"}
                    alt={deal.store}
                    width={80}
                    height={80}
                    className="rounded-lg shadow-lg bg-white p-2"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-500 text-white animate-pulse">
                    <Clock className="w-3 h-3 mr-1" />
                    {deal.timeLeft} left
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{deal.category}</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{deal.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl">{deal.title}</CardTitle>
                <CardDescription className="text-lg">{deal.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-green-600">{deal.discount}</div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Used by</div>
                      <div className="font-semibold flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {deal.users} users
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Terms & Conditions:</h4>
                    <ul className="space-y-1 text-sm text-blue-800">
                      {deal.terms.map((term, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                          {term}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  Why We Need Your Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Prevent Fraud</p>
                      <p className="text-gray-600">Verify genuine users and prevent coupon abuse</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Track Usage</p>
                      <p className="text-gray-600">Monitor coupon usage for better deals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Exclusive Offers</p>
                      <p className="text-gray-600">Send you personalized deals and cashback updates</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reveal Form */}
          <div>
            <Card className="shadow-xl border-0 sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Reveal Coupon Code
                </CardTitle>
                <CardDescription>Enter your details to unlock this exclusive coupon code</CardDescription>
              </CardHeader>

              <CardContent>
                {!isRevealed ? (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      />
                      <Label htmlFor="terms" className="text-sm leading-5">
                        I agree to receive promotional emails and SMS about deals and offers from Fayeda Club
                      </Label>
                    </div>

                    <Button
                      onClick={handleRevealCoupon}
                      disabled={!email || !phone || !agreedToTerms || isRevealing}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 py-6 text-lg"
                    >
                      {isRevealing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Revealing Coupon...
                        </>
                      ) : (
                        <>
                          <Eye className="w-5 h-5 mr-2" />
                          Reveal Coupon Code
                        </>
                      )}
                    </Button>

                    <div className="text-center text-sm text-gray-500">
                      <Shield className="w-4 h-4 inline mr-1" />
                      Your data is secure and encrypted
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">Coupon Revealed!</h3>
                      <p className="text-gray-600">Your exclusive coupon code is ready to use</p>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 text-center">
                      <p className="text-sm text-gray-600 mb-2">Your Coupon Code</p>
                      <div className="bg-white rounded-lg p-4 border-2 border-dashed border-green-300 mb-4">
                        <code className="text-2xl font-bold text-green-600">{deal.code}</code>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          onClick={handleCopyCode}
                          variant={copiedCode ? "secondary" : "default"}
                          className="flex-1"
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          {copiedCode ? "Copied!" : "Copy Code"}
                        </Button>
                        <Button
                          onClick={handleShopNow}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Shop Now
                        </Button>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                        <Gift className="w-4 h-4 mr-2" />
                        How to Use:
                      </h4>
                      <ol className="space-y-1 text-sm text-blue-800">
                        <li>1. Copy the coupon code above</li>
                        <li>2. Click "Shop Now" to visit {deal.store}</li>
                        <li>3. Add items to cart (min. order value applies)</li>
                        <li>4. Paste the code at checkout</li>
                        <li>5. Enjoy your discount!</li>
                      </ol>
                    </div>

                    <div className="text-center">
                      <Link href="/">
                        <Button variant="outline" className="w-full bg-transparent">
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back to More Deals
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
