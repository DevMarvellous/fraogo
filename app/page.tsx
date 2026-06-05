import Link from 'next/link'
import { ArrowRight, Package, Truck, Wrench, ShieldCheck, Globe, Clock, Star, CheckCircle2 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FRAOGO — Procurement, Logistics & General Services',
  description:
    'FRAOGO delivers reliable procurement, logistics, and general services across Nigeria and internationally. Place orders, book deliveries, and hire vendors — all in one place.',
}

const services = [
  {
    icon: Package,
    title: 'Procurement',
    tagline: 'Local & International Sourcing',
    description:
      'Source products within Nigeria or import from global markets. We handle the legwork — you receive your goods.',
    links: [
      { label: 'Nigeria Orders', href: '/procurement/nigeria' },
      { label: 'International Orders', href: '/procurement/international' },
    ],
    color: '#0A4D2E',
    bg: 'from-green-900 to-green-800',
  },
  {
    icon: Truck,
    title: 'Logistics',
    tagline: 'Delivery & Relocation',
    description:
      'Local and international delivery with full tracking. Moving? We handle item relocation with care and precision.',
    links: [
      { label: 'Book a Delivery', href: '/logistics/delivery' },
      { label: 'Relocation Services', href: '/logistics/relocation' },
    ],
    color: '#C9A84C',
    bg: 'from-amber-800 to-amber-700',
  },
  {
    icon: Wrench,
    title: 'General Service',
    tagline: 'Vendors & Supply Orders',
    description:
      'Hire verified vendors for events, or order bulk supplies (water, drinks, event items) delivered to your door.',
    links: [
      { label: 'Hire a Vendor', href: '/general-service/rental' },
      { label: 'Supply Orders', href: '/general-service/supply' },
    ],
    color: '#1A6B42',
    bg: 'from-teal-900 to-teal-800',
  },
]

const whyFraogo = [
  {
    icon: ShieldCheck,
    title: 'Trusted & Reliable',
    desc: 'Every order is tracked and followed through. We maintain full accountability from placement to delivery.',
  },
  {
    icon: Globe,
    title: 'Local & Global Reach',
    desc: 'Whether you\'re ordering from Lagos or importing from overseas, FRAOGO has the connections to make it happen.',
  },
  {
    icon: Clock,
    title: 'Fast Response Time',
    desc: 'Our team responds to every order within 24–48 hours to confirm details and kickstart your request.',
  },
  {
    icon: Star,
    title: 'Verified Vendors Only',
    desc: 'Our vendor network is carefully vetted. Every vendor on our platform has passed our screening process.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A4D2E 0%, #1A6B42 60%, #0f5e37 100%)' }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Glow orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: '#C9A84C' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: '#22c55e' }}
        />

        <div className="section-container relative z-10 text-center pt-20 pb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border border-white/20 text-white/80 bg-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
            Nigeria&apos;s Trusted Procurement Partner
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-none tracking-tight">
            Procurement.{' '}
            <br className="hidden sm:block" />
            <span style={{ color: '#C9A84C' }}>Logistics.</span>
            <br className="hidden sm:block" />
            Service.
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            From sourcing products globally to delivering them to your door — FRAOGO handles everything,
            so you can focus on what matters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/procurement/nigeria"
              className="btn-gold text-base px-8 py-4 rounded-2xl font-bold hover-lift"
              id="hero-cta-get-started"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white/80 border border-white/20 hover:bg-white/10 transition-all text-base"
              id="hero-cta-learn-more"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: '500+', label: 'Orders Fulfilled' },
              { value: '50+', label: 'Active Vendors' },
              { value: '24h', label: 'Response Time' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── Services Section ──────────────────────────────────────────────── */}
      <section id="services" className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: '#C9A84C' }}>
              What We Do
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">
              Everything you need,{' '}
              <span className="text-gradient">all in one place</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              FRAOGO simplifies complex supply chains and service coordination for individuals and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="group rounded-2xl overflow-hidden shadow-card card-hover border border-border"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Card header */}
                <div
                  className={`bg-gradient-to-br ${svc.bg} p-8`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                    <svc.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1">{svc.title}</h3>
                  <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {svc.tagline}
                  </p>
                </div>

                {/* Card body */}
                <div className="p-6 bg-white">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{svc.description}</p>
                  <div className="flex flex-col gap-2">
                    {svc.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:pl-5"
                        style={{ color: svc.color, background: `${svc.color}10` }}
                      >
                        {link.label}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why FRAOGO ────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: '#C9A84C' }}>
                Why Choose Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-5">
                Built on trust,{' '}
                <span className="text-gradient">driven by results</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We&apos;re not just another logistics company. FRAOGO is a full-service partner that takes
                ownership of every request — from the moment you place your order to the moment it&apos;s delivered.
              </p>
              <Link href="/procurement/nigeria" className="btn-primary inline-flex">
                Start Your Order
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyFraogo.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 shadow-soft border border-border card-hover"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: '#f0fdf4' }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: '#0A4D2E' }} />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: '#C9A84C' }}>
              Simple Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-black">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Your Request', desc: 'Fill out the simple form for your order, delivery, or vendor hire.' },
              { step: '02', title: 'We Confirm', desc: 'FRAOGO reviews your request and contacts you within 24–48 hours.' },
              { step: '03', title: 'We Execute', desc: 'Our team handles sourcing, logistics, or vendor coordination on your behalf.' },
              { step: '04', title: 'Delivered to You', desc: 'Your order arrives safely. We follow up to ensure your satisfaction.' },
            ].map((item, i) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black text-white mx-auto mb-4 relative"
                  style={{ background: 'linear-gradient(135deg, #0A4D2E, #1A6B42)' }}
                >
                  {item.step}
                  {i < 3 && (
                    <div className="absolute left-full top-1/2 -translate-y-1/2 w-full hidden md:block">
                      <div className="border-t-2 border-dashed border-gray-200 mx-4" />
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A4D2E 0%, #1A6B42 100%)' }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="section-container relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5" style={{ color: '#C9A84C' }} />
            <span className="text-sm font-semibold text-white/70">No payment required upfront — we contact you first</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            Ready to place your order?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">
            Join hundreds of Nigerians who trust FRAOGO for their procurement, logistics, and service needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/procurement/nigeria" className="btn-gold text-base px-8 py-4 rounded-2xl font-bold" id="cta-start-order">
              Start an Order
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/logistics/delivery" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white border border-white/20 hover:bg-white/10 transition-all text-base" id="cta-book-delivery">
              Book a Delivery
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
