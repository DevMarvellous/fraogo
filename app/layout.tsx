import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/sonner'
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: 'FRAOGO — Procurement, Logistics & General Services',
    template: '%s | FRAOGO',
  },
  description:
    'FRAOGO is your trusted Nigerian partner for procurement (local and international), logistics (delivery and relocation), and general services (vendors and supply orders).',
  keywords: ['procurement', 'logistics', 'delivery', 'Nigeria', 'supply', 'vendors', 'relocation', 'FRAOGO'],
  openGraph: {
    title: 'FRAOGO — Procurement, Logistics & General Services',
    description: 'Your trusted partner for procurement, logistics, and general services in Nigeria.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
