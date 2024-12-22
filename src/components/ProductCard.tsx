'use client'
import { motion } from 'framer-motion'
import { Product, formatPrice } from '@/utils/products'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
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
            <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full shadow-lg">
              Новинка
            </span>
          )}
          {product.isHit && (
            <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full shadow-lg">
              Хит продаж
            </span>
          )}
          {product.discount && (
            <span className="px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded-full shadow-lg animate-pulse">
              -{product.discount}%
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        {/* Спецификации */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {product.specs.map((spec, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md hover:bg-amber-50 transition-colors"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            {product.discount ? (
              <>
                <span className="text-2xl font-bold text-amber-600">
                  {formatPrice(product.price, product.discount)}
                </span>
                <span className="ml-2 text-sm text-gray-400 line-through">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-amber-600">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href={`https://wa.me/77754797687?text=Здравствуйте! Интересует ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors shadow-md"
            >
              Заказать
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 