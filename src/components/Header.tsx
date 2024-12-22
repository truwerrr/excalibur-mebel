'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Каталог', href: '/catalog' },
  { name: 'О нас', href: '/about' },
  { name: 'Контакты', href: '/contact' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500"></div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="flex items-center">
                <div className="flex items-center space-x-1 mr-2">
                  <span className="text-4xl font-black bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent hover:scale-105 transition-transform">E</span>
                  <span className="text-4xl font-black bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent hover:scale-105 transition-transform">X</span>
                  <span className="text-4xl font-black bg-gradient-to-r from-amber-700 to-amber-800 bg-clip-text text-transparent hover:scale-105 transition-transform">C</span>
                </div>
                <div className="hidden md:block">
                  <span className="text-xl font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent ml-2">
                    ALIBUR
                  </span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                  pathname === item.href
                    ? 'text-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 transform transition-transform origin-left ${
                  pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            <a
              href="tel:+77754797687"
              className="bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition-colors"
            >
              +7 775 479 7687
            </a>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-600"
            >
              <span className="sr-only">Открыть меню</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-t">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium ${
                  pathname === item.href
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+77754797687"
              className="block px-3 py-2 text-base font-medium text-amber-600"
            >
              +7 775 479 7687
            </a>
          </div>
        </div>
      )}
    </header>
  )
} 