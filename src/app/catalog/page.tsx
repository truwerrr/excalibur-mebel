'use client'
import { motion } from 'framer-motion'

const PRODUCTS = [
  {
    id: 1,
    name: 'Шкаф-купе "Максимум"',
    price: '420 000 ₸',
    image: '/images/wardrobe1.jpg',
    description: 'Вместительный шкаф-купе с системой плавного закрывания',
    category: 'Шкафы',
    isNew: true
  },
  {
    id: 2,
    name: 'Кухонный гарнитур "Модерн"',
    price: '780 000 ₸',
    image: '/images/kitchen1.jpg',
    description: 'Современная кухня со встроенной техникой',
    category: 'Кухни',
    isHit: true
  },
  {
    id: 3,
    name: 'Спальный гарнитур "Комфорт"',
    price: '650 000 ₸',
    image: '/images/bedroom1.jpg',
    description: 'Полный комплект мебели для спальни',
    category: 'Спальни',
    isNew: true
  }
  // Добавьте больше товаров
]

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Каталог мебели
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative aspect-video">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                    Новинка
                  </span>
                )}
                {product.isHit && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                    Хит продаж
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                  <a
                    href={`https://wa.me/77754797687?text=Здравствуйте! Интересует ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    Заказать
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 