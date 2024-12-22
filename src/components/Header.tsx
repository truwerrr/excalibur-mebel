'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-amber-600">
            Excalibur Mebel
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600">Главная</Link>
            <Link href="/catalog" className="text-gray-700 hover:text-amber-600">Каталог</Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600">О нас</Link>
            <Link href="/contacts" className="text-gray-700 hover:text-amber-600">Контакты</Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 
