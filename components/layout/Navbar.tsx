'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Package, Truck, Wrench, MapPin, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  {
    label: 'Procurement',
    icon: Package,
    children: [
      { label: 'Nigeria Orders', href: '/procurement/nigeria', description: 'Source items within Nigeria' },
      { label: 'International Orders', href: '/procurement/international', description: 'Import from global markets' },
    ],
  },
  {
    label: 'Logistics',
    icon: Truck,
    children: [
      { label: 'Delivery', href: '/logistics/delivery', description: 'Local & international delivery' },
      { label: 'Relocation of Items', href: '/logistics/relocation', description: 'Move your belongings safely' },
    ],
  },
  {
    label: 'General Service',
    icon: Wrench,
    children: [
      { label: 'Rental & Vendors', href: '/general-service/rental', description: 'Hire vendors for events' },
      { label: 'Supply Orders', href: '/general-service/supply', description: 'Drinks, water & event supplies' },
    ],
  },
]

function DropdownMenu({ items, isOpen }: { items: typeof navItems[0]['children']; isOpen: boolean }) {
  if (!isOpen) return null
  return (
    <div className="nav-dropdown">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="nav-dropdown-item">
          <div>
            <div className="font-semibold text-sm">{item.label}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  const prevPathname = useRef(pathname)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setMobileOpen(false)
      setOpenDropdown(null)
      prevPathname.current = pathname
    }
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isAdminPage = pathname.startsWith('/admin')

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || isAdminPage
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-border'
          : 'bg-transparent'
      )}
    >
      <nav ref={navRef} className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-sm"
              style={{ background: 'linear-gradient(135deg, #0A4D2E, #1A6B42)' }}
            >
              F
            </div>
            <span
              className={cn(
                'text-xl font-black tracking-tight transition-colors',
                scrolled || isAdminPage ? 'text-[#0A4D2E]' : 'text-white'
              )}
            >
              FRAOGO
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150',
                    scrolled || isAdminPage
                      ? 'text-gray-700 hover:text-[#0A4D2E] hover:bg-green-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                  <ChevronDown
                    className={cn('w-3.5 h-3.5 transition-transform', openDropdown === item.label && 'rotate-180')}
                  />
                </button>
                <DropdownMenu items={item.children} isOpen={openDropdown === item.label} />
              </div>
            ))}

            <Link
              href="/track"
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150',
                scrolled || isAdminPage
                  ? 'text-gray-700 hover:text-[#0A4D2E] hover:bg-green-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              )}
            >
              <MapPin className="w-4 h-4" />
              Track Order
            </Link>
          </div>

          {/* Admin button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/admin/login"
              className={cn(
                'hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 border',
                scrolled || isAdminPage
                  ? 'text-gray-500 border-gray-200 hover:border-[#0A4D2E] hover:text-[#0A4D2E]'
                  : 'text-white/70 border-white/20 hover:border-white hover:text-white'
              )}
            >
              <Settings className="w-3.5 h-3.5" />
              Admin
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border animate-scale-in">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-foreground hover:bg-green-50 hover:text-[#0A4D2E] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </span>
                    <ChevronDown className={cn('w-4 h-4 transition-transform', openDropdown === item.label && 'rotate-180')} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="bg-green-50 border-l-2 border-[#0A4D2E] ml-4">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#0A4D2E] font-medium">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/track" className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-foreground hover:bg-green-50 hover:text-[#0A4D2E] transition-colors">
                <MapPin className="w-4 h-4" />
                Track Order
              </Link>
              <div className="px-4 pt-2 border-t border-border mt-2">
                <Link href="/admin/login" className="text-sm text-gray-400 hover:text-gray-600 flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Admin Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
