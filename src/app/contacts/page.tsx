'use client'
import { motion } from 'framer-motion'

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8">Контакты</h1>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Адрес</h3>
                <p className="text-gray-600">Шынтас переулок, 16, Астана</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Телефон</h3>
                <p className="text-gray-600">+7 775 479 7687</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">График работы</h3>
                <p className="text-gray-600">Пн-Пт: 09:00-21:00</p>
                <p className="text-gray-600">Сб-Вс: 09:00-18:00</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 