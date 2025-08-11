"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, FileText, Calendar, Shield, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using Fayeda Club ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
  },
  {
    title: "2. Use License",
    content: `Permission is granted to temporarily download one copy of the materials on Fayeda Club's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
    
    • Modify or copy the materials
    • Use the materials for any commercial purpose or for any public display (commercial or non-commercial)
    • Attempt to decompile or reverse engineer any software contained on the website
    • Remove any copyright or other proprietary notations from the materials`,
  },
  {
    title: "3. Disclaimer",
    content: `The materials on Fayeda Club's website are provided on an 'as is' basis. Fayeda Club makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
    
    Further, Fayeda Club does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.`,
  },
  {
    title: "4. Coupon Terms",
    content: `• All coupons and deals are subject to the terms and conditions of the respective merchant
    • Fayeda Club is not responsible for expired, invalid, or non-working coupons
    • Coupon codes are provided for informational purposes only
    • We do not guarantee the availability or validity of any coupon or deal
    • Users are responsible for verifying coupon terms before use`,
  },
  {
    title: "5. Limitations",
    content: `In no event shall Fayeda Club or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Fayeda Club's website, even if Fayeda Club or a Fayeda Club authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.`,
  },
  {
    title: "6. Accuracy of Materials",
    content: `The materials appearing on Fayeda Club's website could include technical, typographical, or photographic errors. Fayeda Club does not warrant that any of the materials on its website are accurate, complete, or current. Fayeda Club may make changes to the materials contained on its website at any time without notice.

Fayeda Club may make changes to the materials contained on its website at any time without notice. However, Fayeda Club does not make any commitment to update the materials.`,
  },
  {
    title: "7. Links",
    content: `Fayeda Club has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Fayeda Club of the site. Use of any such linked website is at the user's own risk.`,
  },
  {
    title: "8. Modifications",
    content: `Fayeda Club may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.`,
  },
  {
    title: "9. Governing Law",
    content: `These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.`,
  },
  {
    title: "10. Privacy Policy",
    content: `Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.`,
  },
  {
    title: "11. Contact Information",
    content: `If you have any questions about these Terms of Service, please contact us at:
    
    Email: legal@fayedaclub.com
    Phone: +91 98765 43210
    Address: 123 Tech Park, Sector 5, Gurgaon, Haryana 122001`,
  },
]

export default function TermsPage() {
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
      <section className="bg-gradient-to-r from-slate-600 to-gray-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Terms of Service</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-6">
              Please read these terms and conditions carefully before using our service
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Last Updated: January 15, 2025</span>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Version 2.1
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                <CardTitle className="text-orange-800">Important Notice</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700">
                By using Fayeda Club, you agree to these terms. If you disagree with any part of these terms, then you
                may not access the service. These terms apply to all visitors, users, and others who access or use the
                service.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terms Content */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-blue-800">Questions About These Terms?</CardTitle>
              </div>
              <CardDescription className="text-blue-700">
                If you have any questions about these Terms of Service, please don't hesitate to contact us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/privacy">
                  <Button variant="outline">Privacy Policy</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
