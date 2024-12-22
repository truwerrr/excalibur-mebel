'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-amber-500 font-bold text-xl mb-4">Excalibur Mebel</h3>
            <p className="text-sm mb-4">
              Создаем качественную мебель для вашего дома и офиса с 2015 года.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Контакты</h3>
            <p>+7 775 479 7687</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 
