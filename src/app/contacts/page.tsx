'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactsPage() {
  const [activeTab, setActiveTab] = useState('contacts')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const contactInfo = {
    phone: '+7 775 479 7687',
    email: 'excaliburkz@gmail.com',
    address: 'Шынтас переулок, 16',
    city: 'Сарыарка район, Астана',
    postcode: 'Z10G4X1',
    workingHours: {
      weekdays: '9:00 - 21:00',
      weekend: '9:00 - 18:00'
    },
    social: {
      instagram: '@mebel_zhihaz_excalibur',
      whatsapp: '+7 775 479 7687'
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь можно добавить логику отправки формы
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Наши контакты</h1>
          <p className="text-lg text-gray-600">Будем рады видеть вас в нашем салоне</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Левая колонка - Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <div className="space-y-8">
                {/* Телефон */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Телефон</p>
                    <a 
                      href={`tel:${contactInfo.phone}`} 
                      className="text-lg font-medium text-amber-600 hover:text-amber-700"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a10.027 10.027 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.988-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2zm0 18.355h-.003a8.332 8.332 0 01-4.232-1.158l-.303-.18-3.144.824.839-3.06-.198-.314a8.295 8.295 0 01-1.27-4.398c0-4.575 3.727-8.3 8.306-8.3 2.219 0 4.303.865 5.869 2.433a8.273 8.273 0 012.431 5.865c0 4.574-3.727 8.288-8.295 8.288z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">WhatsApp</p>
                    <a 
                      href={`https://wa.me/${contactInfo.social.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-lg font-medium text-green-600 hover:text-green-700"
                    >
                      Написать в WhatsApp
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Instagram</p>
                    <a 
                      href="https://instagram.com/mebel_zhihaz_excalibur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-pink-600 hover:text-pink-700"
                    >
                      {contactInfo.social.instagram}
                    </a>
                  </div>
                </div>

                {/* Адрес */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Адрес</p>
                    <p className="text-lg font-medium text-gray-900">{contactInfo.address}</p>
                    <p className="text-base text-gray-600">{contactInfo.city}</p>
                    <p className="text-sm text-gray-500">{contactInfo.postcode}</p>
                  </div>
                </div>

                {/* Режим работы */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Режим работы</p>
                    <p className="text-base text-gray-900">Пн-Пт: {contactInfo.workingHours.weekdays}</p>
                    <p className="text-base text-gray-900">Сб-Вс: {contactInfo.workingHours.weekend}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Правая колонка - Карта */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.5981649459627!2d71.43675731573567!3d51.18031797958425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a605525605%3A0x4dff4a1973f7567e!2sExcalibur%20Mebel!5e0!3m2!1sru!2skz!4v1635000000000!5m2!1sru!2skz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Форма обратной связи */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Сообщение
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors shadow-lg"
              >
                Отправить сообщение
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
} 