"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, Database, Cookie, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const privacySections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you:
    
    • Create an account or profile
    • Subscribe to our newsletter
    • Contact us for support
    • Participate in surveys or promotions
    
    This may include your name, email address, phone number, and preferences. We also automatically collect certain information about your device and how you interact with our service, including IP address, browser type, operating system, and usage patterns.`,
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: `We use the information we collect to:
    
    • Provide, maintain, and improve our services
    • Send you technical notices and support messages
    • Communicate with you about products, services, and promotions
    • Monitor and analyze trends and usage
    • Detect, investigate, and prevent fraudulent transactions
    • Personalize your experience and provide relevant content
    • Comply with legal obligations`,
  },
  {
    icon: Lock,
    title: "Information Sharing and Disclosure",
    content: `We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
    
    • With your consent
    • To service providers who assist us in operating our website
    • To comply with legal obligations or protect our rights
    • In connection with a merger, acquisition, or sale of assets
    • To prevent harm to the rights, property, or safety of Fayeda Club, our users, or the public
    
    We may share aggregated, non-personally identifiable information publicly and with our partners.`,
  },
  {
    icon: Cookie,
    title: "Cookies and Tracking Technologies",
    content: `We use cookies and similar tracking technologies to:
    
    • Remember your preferences and settings
    • Understand how you use our service
    • Improve our website performance
    • Provide personalized content and advertisements
    
    You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our service. We also use web beacons, pixel tags, and other technologies to collect information about your interactions with our emails and website.`,
  },
  {
    icon: Shield,
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
    
    • Encryption of sensitive data
    • Regular security assessments
    • Access controls and authentication
    • Secure data transmission protocols
    
    However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.`,
  },
  {
    icon: Mail,
    title: "Your Rights and Choices",
    content: `You have certain rights regarding your personal information:
    
    • Access: Request a copy of your personal information
    • Correction: Update or correct inaccurate information
    • Deletion: Request deletion of your personal information
    • Portability: Request transfer of your data to another service
    • Opt-out: Unsubscribe from marketing communications
    
    To exercise these rights, please contact us using the information provided below. We will respond to your request within a reasonable timeframe and in accordance with applicable law.`,
  },
]

const dataTypes = [
  { type: "Account Information", description: "Name, email, password", retention: "Until account deletion" },
  { type: "Usage Data", description: "Pages visited, time spent, clicks", retention: "2 years" },
  { type: "Device Information", description: "IP address, browser, OS", retention: "1 year" },
  { type: "Communication Data", description: "Support messages, feedback", retention: "3 years" },
]

export default function PrivacyPage() {
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
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-6">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <span>Last Updated: January 15, 2025</span>
              <Badge variant="secondary" className="bg-white/20 text-white">
                GDPR Compliant
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Privacy at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-700">No Sale</div>
                  <div className="text-sm text-green-600">We never sell your personal data</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-700">Secure</div>
                  <div className="text-sm text-green-600">Industry-standard encryption</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-700">Control</div>
                  <div className="text-sm text-green-600">You control your data</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {privacySections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <section.icon className="h-6 w-6 mr-3 text-blue-600" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Data Retention Table */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Data Retention Periods</CardTitle>
              <CardDescription>How long we keep different types of information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Data Type</th>
                      <th className="text-left py-3 px-4 font-semibold">Description</th>
                      <th className="text-left py-3 px-4 font-semibold">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTypes.map((data, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{data.type}</td>
                        <td className="py-3 px-4 text-gray-600">{data.description}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{data.retention}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Questions About Your Privacy?
              </CardTitle>
              <CardDescription className="text-blue-700">
                Contact our Data Protection Officer for any privacy-related questions or requests.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Email:</strong> privacy@fayedaclub.com
                  </div>
                  <div>
                    <strong>Phone:</strong> +91 98765 43210
                  </div>
                  <div>
                    <strong>Address:</strong> 123 Tech Park, Sector 5, Gurgaon, Haryana 122001
                  </div>
                  <div>
                    <strong>Response Time:</strong> Within 30 days
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/terms">
                    <Button variant="outline">Terms of Service</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
