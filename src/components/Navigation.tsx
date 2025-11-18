'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Rocket, BarChart3, Hammer, Zap, BookOpen, Bot, ArrowRight, Menu, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const navigationItems: Array<{ name: string; href: string; icon: LucideIcon }> = [
  { name: 'Start Here', href: '/start-here', icon: Rocket },
  { name: 'Data Analysis', href: '/data-analysis', icon: BarChart3 },
  { name: 'App Builder', href: '/app-builder', icon: Hammer },
  { name: 'Automation', href: '/automation', icon: Zap },
  { name: 'Git & GitHub', href: '/git-github', icon: BookOpen },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-claude-600 to-orange-500 shadow-md transition-transform group-hover:scale-110">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold bg-gradient-to-r from-claude-600 to-orange-500 bg-clip-text text-transparent">
                Claude Code
              </span>
              <span className="block text-xs text-gray-500 font-medium">Learning Hub</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {navigationItems.map((item) => {
              const active = isActive(item.href)
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                    active
                      ? 'bg-claude-50 text-claude-700 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-claude-600'
                  }`}
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>{item.name}</span>
                  {active && (
                    <div className="absolute bottom-0 left-1/2 h-0.5 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-claude-600 to-orange-500"></div>
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link
              href="/advanced-topics/best-practices"
              className="group relative inline-flex items-center gap-1.5 text-sm font-semibold text-claude-600 hover:text-claude-700 transition-colors"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-claude-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-claude-600"></span>
              </span>
              <span>Best Practices</span>
            </Link>
            <a
              href="https://docs.claude.com/en/docs/claude-code/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 hover:text-claude-600 transition-colors"
            >
              Docs
            </a>
            <Link
              href="/start-here"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-claude-600 to-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 transition-colors hover:bg-gray-100"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigationItems.map((item) => {
              const active = isActive(item.href)
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all ${
                    active
                      ? 'bg-claude-50 text-claude-700 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-claude-600'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                  {active && (
                    <svg className="ml-auto h-5 w-5 text-claude-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
              )
            })}
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <Link
                href="/advanced-topics/best-practices"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-semibold text-claude-600 bg-claude-50 border border-claude-200 hover:bg-claude-100 transition-all"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-claude-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-claude-600"></span>
                </span>
                <span>Best Practices</span>
              </Link>
              <Link
                href="/start-here"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-claude-600 to-orange-500 px-4 py-3 text-base font-semibold text-white shadow-md"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
