"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Target, Users, Shield, Zap, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Target,
    title: "Curated Deals",
    description: "We handpick and verify every coupon to ensure you get working deals every time.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our platform is optimized for speed, so you can find and use coupons in seconds.",
  },
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "Your data is safe with us. We use industry-standard security measures.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join thousands of smart shoppers who save money with Fayeda Club every day.",
  },
]

const stats = [
  { number: "50+", label: "Partner Stores" },
  { number: "500+", label: "Active Coupons" },
  { number: "10K+", label: "Happy Users" },
  { number: "₹50L+", label: "Money Saved" },
]

const team = [
  {
    name: "Vikram Sharma",
    role: "Founder & CEO",
    image: "/professional-indian-founder.png",
    description: "Passionate about helping people save money and discover great deals.",
  },
  {
    name: "Priya Patel",
    role: "Head of Partnerships",
    image: "/indian-woman-partnerships.png",
    description: "Building relationships with brands to bring you exclusive offers.",
  },
  {
    name: "Rahul Kumar",
    role: "Tech Lead",
    image: "/indian-developer.png",
    description: "Ensuring our platform is fast, reliable, and user-friendly.",
  },
]

export default function AboutPage() {
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
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Fayeda Club</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to help you save money on your favorite brands with verified, up-to-date coupons and
              deals. No clutter, no expired codes – just real savings.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Fayeda Club was born out of frustration with existing coupon websites. We were tired of cluttered
                  interfaces, expired codes, and endless ads that made finding a simple discount feel like a treasure
                  hunt.
                </p>
                <p>
                  In 2025, we decided to build something different – a clean, fast, and reliable platform where users
                  could find verified coupons without the hassle. Every coupon on our platform is manually verified and
                  regularly updated.
                </p>
                <p>
                  Today, we're proud to serve thousands of smart shoppers who trust us to help them save money on their
                  online purchases. Our commitment to quality and user experience remains at the heart of everything we
                  do.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-office-collaboration.png"
                alt="Our team at work"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Fayeda Club?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're different from other coupon sites. Here's what makes us special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that show how we're helping people save money every day.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Fayeda Club who work hard to bring you the best deals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-orange-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 mr-3" />
            <h3 className="text-3xl font-bold">Our Mission</h3>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
            To make online shopping more affordable for everyone by providing a clean, fast, and reliable platform for
            discovering verified coupons and deals from trusted brands.
          </p>
          <Link href="/">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              Start Saving Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
