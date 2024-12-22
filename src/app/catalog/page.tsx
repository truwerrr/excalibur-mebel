'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { PRODUCTS, categories } from '@/utils/products'
import ProductCard from '@/components/ProductCard'
import ProductSkeleton from '@/components/ProductSkeleton'

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('default')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000])
  const [isLoading, setIsLoading] = useState(true)
  
  // Имитация загрузки
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Фильтрация
  let filteredProducts = PRODUCTS
    .filter(p => selectedCategory === 'Все' || p.category === selectedCategory)
    .filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

  // Сортировка
  switch (sortOrder) {
    case 'price-asc':
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case 'name':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'discount':
      filteredProducts.sort((a, b) => (b.discount || 0) - (a.discount || 0))
      break
  }

  // Находим мин/макс цены для слайдера
  const minPrice = Math.min(...PRODUCTS.map(p => p.price))
  const maxPrice = Math.max(...PRODUCTS.map(p => p.price))

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

        {/* Фильтры */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md mb-8 p-6"
        >
          {/* Поиск и сортировка */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <input
              type="text"
              placeholder="Поиск мебели..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="default">По умолчанию</option>
              <option value="price-asc">Сначала дешевле</option>
              <option value="price-desc">Сначала дороже</option>
              <option value="name">По названию</option>
              <option value="discount">По размеру скидки</option>
            </select>
          </div>

          {/* Категории */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Ценовой диапазон */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Ценовой диапазон: {priceRange[0].toLocaleString()} ₸ - {priceRange[1].toLocaleString()} ₸
            </label>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Товары */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          ) : (
            filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))
          )}
        </div>

        {/* Информация о количестве товаров */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-gray-600"
        >
          {!isLoading && (
            <>
              Показано {filteredProducts.length} из {PRODUCTS.length} товаров
              {searchQuery && ` по запросу "${searchQuery}"`}
              {selectedCategory !== 'Все' && ` в категории "${selectedCategory}"`}
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
} 