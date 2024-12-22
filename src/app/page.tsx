'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FeaturedProducts from '@/components/FeaturedProducts'

export default function HomePage() {
  return (
    <main>
      {/* Hero секция */}
      <div className="relative min-h-screen flex items-center">
        {/* Анимированный фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          {/* Декоративные элементы */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-700 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Сетка */}
          <div className="absolute inset-0 opacity-20 bg-grid-white/[0.1]"></div>
        </div>

        {/* Контент */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Качество и уют дома -
              <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                первый залог успеха для его очага
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Создаем уникальные интерьерные решения.
              <br />
              Все виды мебели для вашего комфорта.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/catalog"
                  className="block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Смотреть каталог
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://instagram.com/mebel_zhinaz_excalibur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-lg font-medium hover:bg-white/20 transition-all duration-300"
                >
                  Мы в Instagram
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Остальные секции */}
      <FeaturedProducts />
    </main>
  )
} 