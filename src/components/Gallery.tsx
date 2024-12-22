'use client'
import React from 'react'

const CATEGORIES = [
  {
    id: 1,
    name: 'Кухонные гарнитуры',
    description: 'Современные и классические кухни под заказ. Любые размеры и конфигурации',
    icon: '🍳',
    features: ['Встроенная техника', 'Системы хранения', 'Подсветка рабочих зон']
  },
  {
    id: 2,
    name: 'Шкафы-купе',
    description: 'Встроенные и корпусные шкафы любых размеров с индивидуальным наполнением',
    icon: '🏠',
    features: ['Зеркальные двери', 'Системы Blum', 'Антресоли']
  },
  {
    id: 3,
    name: 'Спальные гарнитуры',
    description: 'Комплексные решения для спальной комнаты с максимальным комфортом',
    icon: '🛏️',
    features: ['Кровати', 'Тумбы', 'Комоды']
  },
  {
    id: 4,
    name: 'Детская мебель',
    description: 'Безопасная и функциональная мебель для детей любого возраста',
    icon: '🧸',
    features: ['Кровати-чердаки', 'Рабочие зоны', 'Игровые комплексы']
  },
  {
    id: 5,
    name: 'Офисная мебель',
    description: 'Эргономичные решения для рабочего пространства и офисов',
    icon: '💼',
    features: ['Рабочие столы', 'Стеллажи', 'Переговорные']
  },
  {
    id: 6,
    name: 'Мягкая мебель',
    description: 'Диваны и кресла с обивкой на выбор, для максимального комфорта',
    icon: '🛋️',
    features: ['Диваны', 'Кресла', 'Пуфы']
  },
  {
    id: 7,
    name: 'Прихожие',
    description: 'Функциональные решения для прихожей любого размера',
    icon: '🚪',
    features: ['Вешалки', 'Обувницы', 'Зеркала']
  },
  {
    id: 8,
    name: 'Гардеробные',
    description: 'Индивидуальные гардеробные системы с продуманной организацией',
    icon: '👔',
    features: ['Системы хранения', 'Освещение', 'Островные элементы']
  }
]

export default function Gallery() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Наши направления
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Создаем мебель для любых помещений и задач
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                  {category.name}
                </h3>
                <p className="mt-2 text-gray-500 text-sm">
                  {category.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={`https://wa.me/+77754797687?text=Здравствуйте! Интересует ${category.name.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors group-hover:shadow-md"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"/>
                    </svg>
                    Узнать стоимость
                  </a>
                  <a
                    href="tel:+77754797687"
                    className="inline-flex items-center justify-center w-full px-4 py-2 mt-2 border border-amber-500 text-amber-500 rounded-md hover:bg-amber-50 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"/>
                    </svg>
                    Позвонить
                  </a>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/mebel_zhihaz_excalibur/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-lg hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <span className="text-lg">Смотреть наши работы в Instagram</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
} 