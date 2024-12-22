'use client'
import { motion } from 'framer-motion'

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Шкаф-купе "Максимум"',
    price: '420 000 ₸',
    image: '/images/wardrobe1.jpg',
    description: 'Вместительный шкаф-купе с системой плавного закрывания',
    isNew: true
  },
  {
    id: 2,
    name: 'Кухонный гарнитур "Модерн"',
    price: '780 000 ₸',
    image: '/images/kitchen1.jpg',
    description: 'Современная кухня со встроенной техникой',
    isHit: true
  },
  {
    id: 3,
    name: 'Спальный гарнитур "Комфорт"',
    price: '650 000 ₸',
    image: '/images/bedroom1.jpg',
    description: 'Полный комплект мебели для спальни',
    isNew: true
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Популярные модели</h2>
          <p className="text-xl text-gray-600">Наши лучшие предложения</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Бейджи */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <span className="px-2 py-1 bg-green-500 text-white text-sm rounded-full">
                      Новинка
                    </span>
                  )}
                  {product.isHit && (
                    <span className="px-2 py-1 bg-red-500 text-white text-sm rounded-full">
                      Хит продаж
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={`https://wa.me/77754797687?text=Здравствуйте! Интересует ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors"
                    >
                      Заказать
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Кнопка "Смотреть все" */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/catalog"
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Смотреть все товары
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
