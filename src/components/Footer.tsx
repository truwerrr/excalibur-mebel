'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  // Создаем объект с данными schema.org
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "name": "Excalibur Mebel",
    "image": "https://excalibur.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Шынтас переулок, 16",
      "addressLocality": "Астана",
      "postalCode": "Z10G4X1",
      "addressCountry": "KZ"
    },
    "openingHours": [
      "Mo-Fr 09:00-21:00",
      "Sa-Su 09:00-18:00"
    ],
    "telephone": "+77754797687"
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Основной контент футера */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-amber-500 font-bold text-xl mb-4">Excalibur Mebel</h3>
            <p className="text-sm mb-4">
              Создаем качественную мебель для вашего дома и офиса с 2015 года. 
              Индивидуальный подход к каждому клиенту.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/mebel_zhihaz_excalibur" 
                className="text-gray-400 hover:text-amber-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://wa.me/77754797687" 
                className="text-gray-400 hover:text-amber-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a10.027 10.027 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.988-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Наши преимущества */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Почему мы?</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                8 лет опыта производства мебели
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Гарантия 2 года на всю продукцию
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Собственное производство
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Бесплатный замер и консультация
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Рассрочка 0% до 12 месяцев
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Доставка и сборка включены
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <a 
                  href="https://2gis.kz/astana/firm/70000001018375883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 transition-colors"
                >
                  <span>
                    Шынтас переулок, 16<br />
                    Сарыарка район, Астана<br />
                    Z10G4X1
                  </span>
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+77754797687" className="hover:text-amber-500 transition-colors">
                  +7 775 479 7687
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:excaliburkz@excalibur.com" className="hover:text-amber-500 transition-colors">
                  excaliburkz@excalibur.com
                </a>
              </li>
            </ul>
          </div>

          {/* Режим работы */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Режим работы</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Пн-Пт:</span>
                <span className="text-amber-500">9:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Сб-Вс:</span>
                <span className="text-amber-500">9:00 - 18:00</span>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-700">
                <span className="text-amber-500 font-medium">Выезд на замер:</span><br />
                <span>Ежедневно с 10:00 до 19:00</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Нижняя часть футера */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2024 Excalibur Mebel. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-amber-500 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="hover:text-amber-500 transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp кнопка */}
      <motion.a 
        href="https://wa.me/77754797687"
        className="fixed bottom-24 right-8 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:shadow-xl z-50"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a10.027 10.027 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.988-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2z"/>
        </svg>
      </motion.a>

      {/* Schema.org разметка */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </footer>
  )
} 