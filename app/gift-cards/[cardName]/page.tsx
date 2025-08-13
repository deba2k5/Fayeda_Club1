"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Percent, Gift, CreditCard, Zap, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileHeader } from "@/components/mobile-header"

// Mock gift cards data
const mockGiftCards = [
  {
    id: "1",
    name: "Amazon",
    logo: "/amazon-logo.png",
    description: "Shop for everything on Amazon with gift cards",
    category: "Shopping",
    denominations: [100, 250, 500, 1000, 2000, 5000],
    customAmount: { min: 50, max: 10000 },
    cashback: "2%",
    featured: true,
    color: "from-orange-400 to-orange-600",
  },
  {
    id: "2",
    name: "Myntra",
    logo: "/myntra-logo.png",
    description: "Fashion and lifestyle gift cards",
    category: "Fashion",
    denominations: [250, 500, 1000, 2000, 3000],
    customAmount: { min: 100, max: 5000 },
    cashback: "3%",
    featured: true,
    color: "from-pink-400 to-pink-600",
  },
  {
    id: "3",
    name: "Flipkart",
    logo: "/flipkart-logo.png",
    description: "India's leading e-commerce platform gift cards",
    category: "Shopping",
    denominations: [100, 250, 500, 1000, 2000, 5000],
    customAmount: { min: 50, max: 10000 },
    cashback: "1.5%",
    featured: true,
    color: "from-blue-400 to-blue-600",
  },
]

export default function GiftCardPage({ params }: { params: { cardName: string } }) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [recipientEmail, setRecipientEmail] = useState("")
  const [personalMessage, setPersonalMessage] = useState("")

  const giftCard = mockGiftCards.find((card) => card.name.toLowerCase() === params.cardName.toLowerCase())

  if (!giftCard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Gift Card Not Found</h1>
          <Link href="/gift-cards">
            <Button>Back to Gift Cards</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const getCurrentAmount = () => {
    if (selectedAmount) return selectedAmount
    if (customAmount) return Number.parseInt(customAmount)
    return 0
  }

  const getTotalAmount = () => {
    return getCurrentAmount() * quantity
  }

  const getCashbackAmount = () => {
    const cashbackPercent = Number.parseFloat(giftCard.cashback) / 100
    return Math.round(getTotalAmount() * cashbackPercent)
  }

  const handlePurchase = () => {
    const amount = getCurrentAmount()
    if (!amount || amount < giftCard.customAmount.min || amount > giftCard.customAmount.max) {
      alert(`Please select an amount between ₹${giftCard.customAmount.min} and ₹${giftCard.customAmount.max}`)
      return
    }

    console.log("Purchase:", {
      giftCard: giftCard.name,
      amount,
      quantity,
      total: getTotalAmount(),
      cashback: getCashbackAmount(),
      recipientEmail,
      personalMessage,
    })

    // Simulate purchase success
    alert("Gift card purchased successfully! Check your email for delivery.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <MobileHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/gift-cards" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Gift Cards
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Gift Card Details */}
          <div>
            <Card className={`shadow-xl border-0 bg-gradient-to-br ${giftCard.color} text-white mb-8`}>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-white rounded-xl p-3 flex items-center justify-center">
                    <Image
                      src={giftCard.logo || "/placeholder.svg"}
                      alt={giftCard.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                    <Percent className="h-4 w-4 mr-2" />
                    {giftCard.cashback} Cashback
                  </Badge>
                </div>

                <h1 className="text-3xl font-bold mb-4">{giftCard.name} Gift Card</h1>
                <p className="text-white/90 text-lg mb-6">{giftCard.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">4.8</div>
                    <div className="text-sm text-white/80 flex items-center justify-center">
                      <Star className="h-4 w-4 fill-current mr-1" />
                      Rating
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">Instant</div>
                    <div className="text-sm text-white/80">Delivery</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow">
                <Zap className="h-8 w-8 text-yellow-500" />
                <div>
                  <div className="font-semibold">Instant Delivery</div>
                  <div className="text-sm text-gray-600">Email delivery in seconds</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow">
                <Shield className="h-8 w-8 text-green-500" />
                <div>
                  <div className="font-semibold">Secure Payment</div>
                  <div className="text-sm text-gray-600">256-bit SSL encryption</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow">
                <Clock className="h-8 w-8 text-blue-500" />
                <div>
                  <div className="font-semibold">No Expiry</div>
                  <div className="text-sm text-gray-600">Valid for lifetime</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow">
                <Percent className="h-8 w-8 text-purple-500" />
                <div>
                  <div className="font-semibold">Cashback</div>
                  <div className="text-sm text-gray-600">Earn {giftCard.cashback} back</div>
                </div>
              </div>
            </div>

            {/* How it Works */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>How it Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <div className="font-medium">Choose Amount</div>
                      <div className="text-sm text-gray-600">Select from preset amounts or enter custom amount</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <div className="font-medium">Add Details</div>
                      <div className="text-sm text-gray-600">Enter recipient email and personal message</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <div className="font-medium">Complete Payment</div>
                      <div className="text-sm text-gray-600">Secure checkout with instant delivery</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Purchase Form */}
          <div>
            <Card className="shadow-xl border-0 sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="h-5 w-5 mr-2" />
                  Purchase Gift Card
                </CardTitle>
                <CardDescription>Choose amount and quantity for your {giftCard.name} gift card</CardDescription>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="amount" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="amount">Amount & Quantity</TabsTrigger>
                    <TabsTrigger value="details">Recipient Details</TabsTrigger>
                  </TabsList>

                  <TabsContent value="amount" className="space-y-6">
                    {/* Preset Amounts */}
                    <div>
                      <Label className="text-base font-medium mb-3 block">Select Amount</Label>
                      <div className="grid grid-cols-3 gap-3">
                        {giftCard.denominations.map((amount) => (
                          <Button
                            key={amount}
                            variant={selectedAmount === amount ? "default" : "outline"}
                            onClick={() => handleAmountSelect(amount)}
                            className={selectedAmount === amount ? "bg-gradient-to-r from-orange-500 to-red-500" : ""}
                          >
                            ₹{amount}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Custom Amount */}
                    <div>
                      <Label htmlFor="customAmount" className="text-base font-medium mb-3 block">
                        Or Enter Custom Amount
                      </Label>
                      <Input
                        id="customAmount"
                        type="number"
                        placeholder={`₹${giftCard.customAmount.min} - ₹${giftCard.customAmount.max}`}
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        min={giftCard.customAmount.min}
                        max={giftCard.customAmount.max}
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Min: ₹{giftCard.customAmount.min}, Max: ₹{giftCard.customAmount.max.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div>
                      <Label htmlFor="quantity" className="text-base font-medium mb-3 block">
                        Quantity
                      </Label>
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          disabled={quantity <= 1}
                        >
                          -
                        </Button>
                        <Input
                          id="quantity"
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                          className="w-20 text-center"
                          min="1"
                          max="10"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setQuantity(Math.min(10, quantity + 1))}
                          disabled={quantity >= 10}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-6">
                    {/* Recipient Email */}
                    <div>
                      <Label htmlFor="recipientEmail" className="text-base font-medium mb-3 block">
                        Recipient Email
                      </Label>
                      <Input
                        id="recipientEmail"
                        type="email"
                        placeholder="recipient@example.com"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                      />
                      <p className="text-sm text-gray-500 mt-1">Gift card will be delivered to this email address</p>
                    </div>

                    {/* Personal Message */}
                    <div>
                      <Label htmlFor="personalMessage" className="text-base font-medium mb-3 block">
                        Personal Message (Optional)
                      </Label>
                      <textarea
                        id="personalMessage"
                        placeholder="Add a personal message for the recipient..."
                        value={personalMessage}
                        onChange={(e) => setPersonalMessage(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md resize-none h-24"
                        maxLength={200}
                      />
                      <p className="text-sm text-gray-500 mt-1">{personalMessage.length}/200 characters</p>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Order Summary */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-3">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Amount per card:</span>
                      <span>₹{getCurrentAmount().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quantity:</span>
                      <span>{quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>₹{getTotalAmount().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Cashback ({giftCard.cashback}):</span>
                      <span>+₹{getCashbackAmount()}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>₹{getTotalAmount().toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Purchase Button */}
                <Button
                  onClick={handlePurchase}
                  disabled={!getCurrentAmount() || !recipientEmail}
                  className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg py-6"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Buy Now - ₹{getTotalAmount().toLocaleString()}
                </Button>

                <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    Secure Payment
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-1" />
                    Instant Delivery
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
