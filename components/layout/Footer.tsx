import Link from 'next/link'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'

export default function Footer() {
  const rcNumber = process.env.FRAOGO_RC_NUMBER
  const address = process.env.FRAOGO_ADDRESS
  const phone = process.env.FRAOGO_PHONE

  return (
    <footer style={{ background: '#052818' }} className="text-white">
      <div className="section-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg border border-white/20"
                style={{ background: 'rgba(201,168,76,0.2)' }}
              >
                F
              </div>
              <span className="text-2xl font-black tracking-tight">FRAOGO</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Your trusted partner for procurement, logistics, and general services across Nigeria and internationally.
            </p>
            {rcNumber && (
              <p className="text-xs text-white/40 font-medium">
                RC: {rcNumber}
              </p>
            )}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#C9A84C' }}>
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Nigeria Procurement', href: '/procurement/nigeria' },
                { label: 'International Procurement', href: '/procurement/international' },
                { label: 'Local Delivery', href: '/logistics/delivery' },
                { label: 'Relocation Services', href: '/logistics/relocation' },
                { label: 'Vendor Hire', href: '/general-service/rental' },
                { label: 'Supply Orders', href: '/general-service/supply' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#C9A84C' }}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Track My Order', href: '/track' },
                { label: 'Become a Vendor', href: '/general-service/rental/register-vendor' },
                { label: 'Hire a Vendor', href: '/general-service/rental/hire-vendor' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: '#C9A84C' }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              {phone && (
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#C9A84C' }} />
                  <span className="text-sm text-white/70">{phone}</span>
                </li>
              )}
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#C9A84C' }} />
                <a
                  href="mailto:info@fraogo.com"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  info@fraogo.com
                </a>
              </li>
              {address && (
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#C9A84C' }} />
                  <span className="text-sm text-white/70">{address}</span>
                </li>
              )}
            </ul>

            {/* Social icons fallback */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { href: '#', label: 'Facebook' },
                { href: '#', label: 'Instagram' },
                { href: '#', label: 'Twitter/X' },
                { href: '#', label: 'LinkedIn' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Globe className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} FRAOGO. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Procurement · Logistics · General Service
          </p>
        </div>
      </div>
    </footer>
  )
}
