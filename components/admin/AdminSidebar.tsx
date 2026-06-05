'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  LayoutDashboard, Package, Truck, MoveRight, ShoppingBag, Users, UserCheck,
  FileText, LogOut, Menu, X, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { adminLogout } from '@/app/actions/auth'

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard, exact: true },
  { label: 'Procurement Orders', href: '/admin/orders', icon: Package },
  { label: 'Deliveries', href: '/admin/deliveries', icon: Truck },
  { label: 'Relocations', href: '/admin/relocations', icon: MoveRight },
  { label: 'Supply Orders', href: '/admin/supply-orders', icon: ShoppingBag },
  { label: 'Vendors', href: '/admin/vendors', icon: Users },
  { label: 'Vendor Requests', href: '/admin/vendor-requests', icon: UserCheck },
  { label: 'Invoice Generator', href: '/admin/invoice', icon: FileText },
]

interface SidebarContentProps {
  pathname: string;
  setMobileOpen: (open: boolean) => void;
  handleLogout: () => void;
}

const SidebarContent = ({ pathname, setMobileOpen, handleLogout }: SidebarContentProps) => {
  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href)

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white font-black text-sm">F</div>
          <div>
            <div className="text-white font-black text-lg">FRAOGO</div>
            <div className="text-white/50 text-xs">Admin Panel</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all',
              isActive(item.href, item.exact)
                ? 'bg-white text-[#0A4D2E] shadow-soft'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            )}
          >
            <item.icon className="w-4 h-4 flex-shrink-0" />
            {item.label}
            {isActive(item.href, item.exact) && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white hover:bg-white/10 transition-all"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
        <p className="text-xs text-white/30 mt-3 px-3">FRAOGO Admin Panel</p>
      </div>
    </div>
  )
}

export default function AdminSidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = async () => {
    await adminLogout()
  }

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col w-64 fixed left-0 top-0 h-screen"
        style={{ background: 'linear-gradient(180deg, #0A4D2E 0%, #052818 100%)' }}
      >
        <SidebarContent pathname={pathname} setMobileOpen={setMobileOpen} handleLogout={handleLogout} />
      </aside>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-elevated"
        style={{ background: '#0A4D2E' }}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <aside
            className="relative w-72 h-full flex flex-col animate-slide-in-right"
            style={{ background: 'linear-gradient(180deg, #0A4D2E 0%, #052818 100%)' }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <SidebarContent pathname={pathname} setMobileOpen={setMobileOpen} handleLogout={handleLogout} />
          </aside>
        </div>
      )}
    </>
  )
}
