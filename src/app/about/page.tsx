'use client'
import React from 'react'

const MILESTONES = [
  { year: 2015, title: 'Основание компании', description: 'Начало производства мебели в Астане' },
  { year: 2017, title: 'Расширение производства', description: 'Открытие нового цеха и шоу-рума' },
  { year: 2019, title: 'Модернизация оборудования', description: 'Внедрение современных технологий производства' },
  { year: 2021, title: 'Выход на новый уровень', description: 'Запуск онлайн-конструктора мебели' },
  { year: 2023, title: 'Развитие сети', description: 'Открытие представительств в других городах' }
]

const STATS = [
  { number: '2000+', label: 'Довольных клиентов' },
  { number: '5000+', label: 'Выполненных проектов' },
  { number: '8', label: 'Лет на рынке' },
  { number: '100%', label: 'Гарантия качества' }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero секция */}
      <div className="bg-gradient-to-b from-amber-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              О компании
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Создаем уютное пространство для вашей жизни с 2015 года
            </p>
          </div>
        </div>
      </div>

      {/* Основная информация */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Excalibur Mebel - ваш надежный партнер в создании идеального интерьера
            </h2>
            <p className="text-lg text-gray-600">
              Мы не просто производим мебель – мы создаем пространство для вашей жизни, работы и отдыха. 
              Каждый проект для нас – это возможность воплотить ваши мечты в реальность.
            </p>
            <p className="text-lg text-gray-600">
              Наша команда профессионалов использует только высококачественные материалы и современное 
              оборудование, чтобы создавать мебель, которая будет радовать вас долгие годы.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl font-bold text-amber-600">{stat.number}</div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Наши преимущества */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Индивидуальный подход',
                description: 'Каждый проект разрабатывается с учетом ваших пожеланий и особенностей помещения'
              },
              {
                icon: '🛠️',
                title: 'Качественные материалы',
                description: 'Используем только сертифицированные материалы от проверенных поставщиков'
              },
              {
                icon: '👨‍🔧',
                title: 'Опытные мастера',
                description: 'Наши специалисты имеют многолетний опыт работы в мебельном производстве'
              },
              {
                icon: '⚡',
                title: 'Современное оборудование',
                description: 'Производство оснащено передовым европейским оборудованием'
              },
              {
                icon: '🏆',
                title: 'Гарантия качества',
                description: 'Предоставляем гарантию на всю продукцию и постгарантийное обслуживание'
              },
              {
                icon: '💰',
                title: 'Доступные цены',
                description: 'Предлагаем конкурентные цены и гибкую систему скидок'
              }
            ].map((advantage, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* История компании */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Наша история</h2>
          <div className="space-y-8">
            {MILESTONES.map((milestone, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 group"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-amber-600">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-amber-500 group-hover:scale-125 transition-transform" />
                <div className="flex-grow bg-white p-4 rounded-lg shadow group-hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="bg-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы создать мебель вашей мечты?</h2>
          <p className="text-xl mb-8">Свяжитесь с нами для консультации и расчета стоимости</p>
          <div className="space-x-4">
            <a
              href="tel:+77754797687"
              className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Позвонить
            </a>
            <a
              href="https://wa.me/+77754797687"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 