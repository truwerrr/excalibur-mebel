'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    about: {
      title: 'О компании',
      links: [
        { name: 'О нас', href: '/about' },
        { name: 'Наши работы', href: 'https://www.instagram.com/mebel_zhihaz_excalibur/' },
        { name: 'Производство', href: '/about#production' },
        { name: 'Гарантия', href: '/about#warranty' }
      ]
    },
    catalog: {
      title: 'Каталог',
      links: [
        { name: 'Кухонные гарнитуры', href: '/catalog?category=Кухни' },
        { name: 'Шкафы-купе', href: '/catalog?category=Шкафы' },
        { name: 'Спальные гарнитуры', href: '/catalog?category=Спальни' },
        { name: 'Офисная мебель', href: '/catalog?category=Офисная мебель' }
      ]
    },
    contacts: {
      title: 'Контакты',
      content: [
        { label: 'Телефон', value: '+7 775 479 7687' },
        { label: 'Адрес', value: 'Шынтас переулок, 16, Астана' },
        { label: 'График', value: 'Пн-Пт: 9:00-21:00, Сб-Вс: 9:00-18:00' }
      ]
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Основной контент футера */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-amber-500 font-bold text-xl mb-4">Excalibur Mebel</h3>
              <p className="text-sm mb-4">
                Создаем качественную мебель для вашего дома и офиса с 2015 года.
                Индивидуальный подход к каждому клиенту.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/mebel_zhihaz_excalibur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/77754797687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">WhatsApp</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a10.027 10.027 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.988-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Ссылки "О компании" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">{footerSections.about.title}</h3>
            <ul className="space-y-2">
              {footerSections.about.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ссылки каталога */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">{footerSections.catalog.title}</h3>
            <ul className="space-y-2">
              {footerSections.catalog.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">{footerSections.contacts.title}</h3>
            <ul className="space-y-2">
              {footerSections.contacts.content.map((item) => (
                <li key={item.label} className="text-gray-400">
                  <span className="font-medium text-gray-300">{item.label}: </span>
                  {item.value}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Excalibur Mebel. Все права защищены.
            </p>
            <div className="mt-4 md:mt-0">
              <Link 
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
