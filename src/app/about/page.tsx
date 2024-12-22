'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  const advantages = [
    {
      title: "8 лет опыта",
      description: "Производим качественную мебель с 2015 года",
      icon: "🏆"
    },
    {
      title: "1000+ проектов",
      description: "Реализовали более тысячи проектов под ключ",
      icon: "✨"
    },
    {
      title: "Гарантия 2 года",
      description: "Предоставляем гарантию на всю нашу продукцию",
      icon: "🛡️"
    },
    {
      title: "Собственное производство",
      description: "Контролируем качество на всех этапах",
      icon: "🏭"
    }
  ]

  const teamMembers = [
    {
      name: "Александр Петров",
      position: "Главный дизайнер",
      photo: "/team/designer.jpg"
    },
    {
      name: "Елена Смирнова",
      position: "Руководитель производства",
      photo: "/team/manager.jpg"
    }
    // Добавьте больше членов команды
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Основная информация */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">О компании Excalibur Mebel</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создаем уникальную мебель, которая становится частью вашей истории. 
            Каждый проект - это воплощение ваших желаний и нашего профессионализма.
          </p>
        </motion.div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Производство */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">Наше производство</h2>
              <p className="text-gray-600 mb-4">
                Мы используем современное оборудование и качественные материалы 
                для создания мебели, которая будет радовать вас долгие годы.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Современное оборудование
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Качественные материалы
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Опытные мастера
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/production.jpg"
                alt="Наше производство"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Команда */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <a
            href="https://wa.me/77754797687"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 text-white px-8 py-4 rounded-xl hover:bg-amber-600 transition-colors shadow-lg"
          >
            Связаться с нами
          </a>
        </motion.div>
      </div>
    </div>
  )
} 