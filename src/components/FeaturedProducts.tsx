'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Обновленный SofaIcon с более реалистичным дизайном
const SofaIcon = ({ colors }) => (
  <div className="w-32 h-32 relative">
    {/* Основание дивана */}
    <div className={`absolute bottom-4 left-0 right-0 h-16 ${colors.icon} rounded-xl shadow-lg transform perspective-1000`}>
      {/* Текстура обивки */}
      <div className="absolute inset-2 grid grid-cols-4 gap-1">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`${colors.accent} rounded opacity-30`}></div>
        ))}
      </div>
      {/* Ножки */}
      <div className={`absolute -bottom-2 left-4 w-3 h-3 ${colors.accent} rounded-full shadow-md`}></div>
      <div className={`absolute -bottom-2 right-4 w-3 h-3 ${colors.accent} rounded-full shadow-md`}></div>
    </div>
    
    {/* Спинка дивана */}
    <div className={`absolute top-2 left-2 right-2 h-20 ${colors.icon} rounded-t-2xl shadow-md transform-gpu rotate-2 origin-bottom`}>
      {/* Декоративная строчка */}
      <div className="absolute inset-2 grid grid-rows-3 gap-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className={`${colors.accent} rounded-full opacity-30`}></div>
        ))}
      </div>
    </div>
    
    {/* Подушки */}
    <div className={`absolute bottom-10 left-4 w-12 h-12 ${colors.accent} rounded-lg shadow-inner transform -rotate-6`}>
      <div className={`absolute inset-1 border-2 border-${colors.icon} rounded opacity-20`}></div>
      <div className={`absolute inset-3 ${colors.icon} rounded opacity-10`}></div>
    </div>
    <div className={`absolute bottom-8 right-6 w-10 h-10 ${colors.accent} rounded-lg shadow-inner transform rotate-12`}>
      <div className={`absolute inset-1 border-2 border-${colors.icon} rounded opacity-20`}></div>
      <div className={`absolute inset-3 ${colors.icon} rounded opacity-10`}></div>
    </div>
  </div>
)

// Обновленный BedIcon
const BedIcon = ({ colors }) => (
  <div className="w-32 h-32 relative">
    {/* Каркас кровати */}
    <div className={`absolute bottom-6 left-2 right-2 h-14 ${colors.icon} rounded-lg shadow-lg`}>
      {/* Ножки */}
      <div className={`absolute -bottom-2 left-3 w-2 h-4 ${colors.accent} rounded-b-lg shadow-md`}></div>
      <div className={`absolute -bottom-2 right-3 w-2 h-4 ${colors.accent} rounded-b-lg shadow-md`}></div>
      
      {/* Матрас */}
      <div className={`absolute top-0 left-1 right-1 h-10 ${colors.accent} rounded-lg shadow-inner`}>
        {/* Узор матраса */}
        <div className="absolute inset-2 grid grid-cols-6 gap-1">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`${colors.icon} rounded opacity-10`}></div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Изголовье */}
    <div className={`absolute top-2 left-0 right-0 h-24 ${colors.icon} rounded-t-2xl shadow-lg`}>
      {/* Декоративная отделка */}
      <div className="absolute inset-4 grid grid-rows-3 gap-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className={`${colors.accent} rounded-full shadow-inner opacity-30`}></div>
        ))}
      </div>
    </div>
  </div>
)

// Обновленный WardrobeIcon
const WardrobeIcon = ({ colors }) => (
  <div className="w-32 h-32 relative">
    {/* Основной корпус */}
    <div className={`absolute inset-2 ${colors.icon} rounded-xl shadow-xl`}>
      {/* Двери */}
      <div className="absolute inset-1 flex gap-1">
        {/* Левая дверь */}
        <div className={`flex-1 ${colors.accent} rounded-l-lg relative group transition-all duration-300 hover:brightness-95`}>
          <div className={`absolute right-2 top-1/2 w-1.5 h-8 ${colors.icon} rounded-full shadow-md transform -translate-y-1/2`}></div>
          {/* Текстура дерева */}
          <div className="absolute inset-2 grid grid-rows-6 gap-1 opacity-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`${colors.icon} rounded-full`}></div>
            ))}
          </div>
        </div>
        {/* Правая дверь */}
        <div className={`flex-1 ${colors.accent} rounded-r-lg relative group transition-all duration-300 hover:brightness-95`}>
          <div className={`absolute left-2 top-1/2 w-1.5 h-8 ${colors.icon} rounded-full shadow-md transform -translate-y-1/2`}></div>
          {/* Текстура дерева */}
          <div className="absolute inset-2 grid grid-rows-6 gap-1 opacity-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`${colors.icon} rounded-full`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Обновленный KitchenIcon
const KitchenIcon = ({ colors }) => (
  <div className="w-32 h-32 relative">
    {/* Основной модуль */}
    <div className={`absolute inset-4 ${colors.icon} rounded-xl shadow-lg`}>
      {/* Верхние шкафы */}
      <div className="absolute top-2 left-2 right-2 h-1/2 flex gap-1">
        {[...Array(2)].map((_, i) => (
          <div key={i} className={`flex-1 ${colors.accent} rounded-lg relative group hover:brightness-95 transition-all duration-300`}>
            <div className={`absolute bottom-2 left-1/2 w-1.5 h-4 ${colors.icon} rounded-full transform -translate-x-1/2`}></div>
            {/* Текстура фасада */}
            <div className="absolute inset-1 grid grid-rows-3 gap-0.5 opacity-10">
              {[...Array(3)].map((_, j) => (
                <div key={j} className={`${colors.icon} rounded-full`}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Столешница */}
      <div className={`absolute top-1/2 -mt-1 left-0 right-0 h-2 ${colors.accent} shadow-md`}></div>
      
      {/* Нижние ящики */}
      <div className="absolute bottom-2 left-2 right-2 h-1/3 grid grid-rows-2 gap-1">
        {[...Array(2)].map((_, i) => (
          <div key={i} className={`${colors.accent} rounded-lg relative group hover:brightness-95 transition-all duration-300`}>
            <div className={`absolute top-1/2 left-1/2 w-6 h-1.5 ${colors.icon} rounded-full transform -translate-x-1/2 -translate-y-1/2`}></div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Добавим TableIcon
const TableIcon = ({ colors }) => (
  <div className="w-32 h-32 relative">
    {/* Столешница */}
    <div className={`absolute top-8 left-2 right-2 h-4 ${colors.icon} rounded-lg shadow-lg`}>
      {/* Текстура дерева */}
      <div className="absolute inset-1 grid grid-cols-8 gap-0.5">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`${colors.accent} rounded opacity-20`}></div>
        ))}
      </div>
    </div>
    
    {/* Ножки стола */}
    <div className="absolute inset-0 flex justify-between items-end px-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="relative">
          <div className={`w-3 h-16 ${colors.icon} rounded-b-lg shadow-md`}>
            {/* Декоративный элемент на ножке */}
            <div className={`absolute top-2 inset-x-0 h-1 ${colors.accent} rounded-full opacity-30`}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

// Добавим ChairIcon
const ChairIcon = ({ colors }) => (
  <div className="w-32 h-32 relative">
    {/* Сиденье */}
    <div className={`absolute top-8 left-4 right-4 h-4 ${colors.icon} rounded-lg shadow-lg transform -skew-x-6`}>
      {/* Текстура сиденья */}
      <div className={`absolute inset-1 ${colors.accent} rounded opacity-30`}></div>
    </div>
    
    {/* Спинка */}
    <div className={`absolute top-2 left-8 right-8 h-12 ${colors.icon} rounded-t-lg shadow-md transform rotate-6`}>
      {/* Декоративные элементы спинки */}
      <div className="absolute inset-2 grid grid-rows-2 gap-1">
        {[...Array(2)].map((_, i) => (
          <div key={i} className={`${colors.accent} rounded-full opacity-30`}></div>
        ))}
      </div>
    </div>
    
    {/* Ножки */}
    <div className="absolute bottom-4 inset-x-4 flex justify-between">
      {[...Array(4)].map((_, i) => (
        <div key={i} className={`w-2 h-12 ${colors.icon} rounded-b-lg shadow-md transform ${
          i < 2 ? 'skew-x-12' : '-skew-x-12'
        }`}>
          {/* Декоративный элемент на ножке */}
          <div className={`absolute bottom-2 inset-x-0 h-1 ${colors.accent} rounded-full opacity-30`}></div>
        </div>
      ))}
    </div>
  </div>
)

// Вынесем функции расчета цен на уровень модуля
const getRandomDiscount = () => {
  const discounts = [10, 12, 15, 17];
  return discounts[Math.floor(Math.random() * discounts.length)];
}

const calculateDiscountedPrice = (originalPrice: string, discount: number) => {
  const numericPrice = parseInt(originalPrice.replace(/\D/g, ''))
  const discountedPrice = Math.round(numericPrice * (1 - discount/100))
  return `${discountedPrice.toLocaleString()} ₸`
}

// Цветовые схемы для разных категорий
const categoryColors = {
  'Мягкая мебель': {
    bg: 'bg-rose-100',
    icon: 'bg-rose-600',
    accent: 'bg-rose-300'
  },
  'Спальня': {
    icon: 'bg-blue-600',
    accent: 'bg-blue-100',
    hover: 'hover:bg-blue-50'
  },
  'Шкафы': {
    icon: 'bg-emerald-600',
    accent: 'bg-emerald-100',
    hover: 'hover:bg-emerald-50'
  },
  'Кухни': {
    icon: 'bg-amber-600',
    accent: 'bg-amber-100',
    hover: 'hover:bg-amber-50'
  },
  'Столы': {
    icon: 'bg-purple-600',
    accent: 'bg-purple-100',
    hover: 'hover:bg-purple-50'
  },
  'Стулья': {
    icon: 'bg-indigo-600',
    accent: 'bg-indigo-100',
    hover: 'hover:bg-indigo-50'
  }
}

// Предварительно рассчитаем все цены со скидками
const FEATURED_PRODUCTS = [
  // Мягкая мебель
  {
    id: 1,
    name: 'Диван "Комфорт"',
    originalPrice: '450 000 ₸',
    discount: 15,
    price: '382 500 ₸',
    description: 'Современный диван с мягкими подушками',
    category: 'Мягкая мебель',
    Icon: SofaIcon,
    animation: 'hover:scale-105',
    colors: categoryColors['Мягкая мебель'],
    badge: 'Хит продаж'
  },
  {
    id: 2,
    name: 'Диван "Модерн"',
    originalPrice: '520 000 ₸',
    discount: 12,
    price: '457 600 ₸',
    description: 'Угловой диван с функцией раскладывания',
    category: 'Мягкая мебель',
    Icon: SofaIcon,
    animation: 'hover:-rotate-1',
    colors: categoryColors['Мягкая мебель']
  },
  {
    id: 3,
    name: 'Диван "Премиум"',
    originalPrice: '680 000 ₸',
    discount: 17,
    price: '564 400 ₸',
    description: 'Кожаный диван с реклайнером',
    category: 'Мягкая мебель',
    Icon: SofaIcon,
    animation: 'hover:scale-105',
    badge: 'Новинка',
    colors: categoryColors['Мягкая мебель']
  },
  // Продолжаем мягкую мебель
  {
    id: 4,
    name: 'Кресло "Релакс"',
    originalPrice: '280 000 ₸',
    discount: 10,
    price: '252 000 ₸',
    description: 'Удобное кресло с механизмом качания',
    category: 'Мягкая мебель',
    Icon: SofaIcon,
    animation: 'hover:scale-105',
    colors: categoryColors['Мягкая мебель']
  },
  {
    id: 5,
    name: 'Диван "Лофт"',
    originalPrice: '495 000 ₸',
    discount: 15,
    price: '420 750 ₸',
    description: 'Стильный диван в современном стиле',
    category: 'Мягкая мебель',
    Icon: SofaIcon,
    animation: 'hover:-rotate-1',
    colors: categoryColors['Мягкая мебель']
  },

  // Спальня
  {
    id: 6,
    name: 'Кровать "Люкс"',
    originalPrice: '420 000 ₸',
    discount: 12,
    price: '369 600 ₸',
    description: 'Двуспальная кровать с мягким изголовьем',
    category: 'Спальня',
    Icon: BedIcon,
    animation: 'hover:scale-105',
    badge: 'Хит продаж',
    colors: categoryColors['Спальня']
  },
  {
    id: 7,
    name: 'Кровать "Классик"',
    originalPrice: '380 000 ₸',
    discount: 15,
    price: '323 000 ₸',
    description: 'Классическая кровать из массива дерева',
    category: 'Спальня',
    Icon: BedIcon,
    animation: 'hover:-rotate-1',
    colors: categoryColors['Спальня']
  },
  {
    id: 8,
    name: 'Кровать "Модерн"',
    originalPrice: '460 000 ₸',
    discount: 17,
    price: '381 800 ₸',
    description: 'Современная кровать с подъемным механизмом',
    category: 'Спальня',
    Icon: BedIcon,
    animation: 'hover:scale-105',
    badge: 'Новинка',
    colors: categoryColors['Спальня']
  },

  // Шкафы
  {
    id: 9,
    name: 'Шкаф-купе "Стандарт"',
    originalPrice: '350 000 ₸',
    discount: 10,
    price: '315 000 ₸',
    description: 'Вместительный шкаф-купе с зеркалом',
    category: 'Шкафы',
    Icon: WardrobeIcon,
    animation: 'hover:scale-105',
    colors: categoryColors['Шкафы']
  },
  {
    id: 10,
    name: 'Шкаф "Премиум"',
    originalPrice: '480 000 ₸',
    discount: 15,
    price: '408 000 ₸',
    description: 'Четырехдверный шкаф с подсветкой',
    category: 'Шкафы',
    Icon: WardrobeIcon,
    animation: 'hover:-rotate-1',
    badge: 'Хит продаж',
    colors: categoryColors['Шкафы']
  },

  // Кухни
  {
    id: 11,
    name: 'Кухня "Стандарт"',
    originalPrice: '580 000 ₸',
    discount: 12,
    price: '510 400 ₸',
    description: 'Функцион��льная кухня длиной 2.8 метра',
    category: 'Кухни',
    Icon: KitchenIcon,
    animation: 'hover:scale-105',
    colors: categoryColors['Кухни']
  },
  {
    id: 12,
    name: 'Кухня "Премиум"',
    originalPrice: '780 000 ₸',
    discount: 15,
    price: '663 000 ₸',
    description: 'Угловая кухня с встроенной техникой',
    category: 'Кухни',
    Icon: KitchenIcon,
    animation: 'hover:-rotate-1',
    badge: 'Новинка',
    colors: categoryColors['Кухни']
  },

  // Столы
  {
    id: 13,
    name: 'Стол обеденный "Классик"',
    originalPrice: '220 000 ₸',
    discount: 10,
    price: '198 000 ₸',
    description: 'Классический обеденный стол из массива дерева',
    category: 'Столы',
    Icon: TableIcon,
    animation: 'hover:scale-105',
    colors: categoryColors['Столы']
  },
  {
    id: 14,
    name: 'Стол "Трансформер"',
    originalPrice: '280 000 ₸',
    discount: 15,
    price: '238 000 ₸',
    description: 'Раскладной стол-трансформер для гостиной',
    category: 'Столы',
    Icon: TableIcon,
    animation: 'hover:-rotate-1',
    badge: 'Хит продаж',
    colors: categoryColors['Столы']
  },
  {
    id: 15,
    name: 'Стол рабочий "Офис"',
    originalPrice: '180 000 ₸',
    discount: 12,
    price: '158 400 ₸',
    description: 'Эргономичный рабочий стол с регулировкой высоты',
    category: 'Столы',
    Icon: TableIcon,
    animation: 'hover:scale-105',
    colors: categoryColors['Столы']
  },

  // Стулья
  {
    id: 16,
    name: 'Стул "Комфорт"',
    originalPrice: '45 000 ₸',
    discount: 10,
    price: '40 500 ₸',
    description: 'Удобный стул с мягким сиденьем',
    category: 'Стулья',
    Icon: ChairIcon,
    animation: 'hover:scale-105',
    colors: categoryColors['Стулья']
  },
  {
    id: 17,
    name: 'Стул барный "Модерн"',
    originalPrice: '65 000 ₸',
    discount: 15,
    price: '55 250 ₸',
    description: 'Высокий барный стул с подставкой для ног',
    category: 'Стулья',
    Icon: ChairIcon,
    animation: 'hover:-rotate-1',
    badge: 'Новинка',
    colors: categoryColors['Стулья']
  },

  // Дополнительные диваны
  {
    id: 18,
    name: 'Диван-кровать "Универсал"',
    originalPrice: '550 000 ₸',
    discount: 17,
    price: '456 500 ₸',
    description: 'Раскладной диван с функцией кровати',
    category: 'Мягкая мебель',
    Icon: SofaIcon,
    animation: 'hover:scale-105',
    colors: categoryColors['Мягкая мебель']
  },
  {
    id: 19,
    name: 'Угловой диван "Максимум"',
    originalPrice: '720 000 ₸',
    discount: 15,
    price: '612 000 ₸',
    description: 'Большой угловой диван с оттоманкой',
    category: 'Мягкая мебель',
    Icon: SofaIcon,
    animation: 'hover:-rotate-1',
    badge: 'Хит продаж',
    colors: categoryColors['Мягкая мебель']
  },

  // Дополнительные кровати
  {
    id: 20,
    name: 'Кровать "Детская"',
    originalPrice: '180 000 ₸',
    discount: 10,
    price: '162 000 ₸',
    description: 'Детская кровать с бортиками',
    category: 'Спальня',
    Icon: BedIcon,
    animation: 'hover:scale-105',
    colors: categoryColors['Спальня']
  },

  // Продолжать с id: 21...
]

// Обновим стили карточек товаров
const ProductCard = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Бейдж скидки/новинки */}
      {product.badge && (
        <div className={`absolute top-4 right-4 z-10 ${
          product.badge === 'Хит продаж' 
            ? 'bg-gradient-to-r from-red-500 to-pink-500'
            : 'bg-gradient-to-r from-green-500 to-emerald-500'
        } text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg`}>
          {product.badge}
        </div>
      )}
      
      {/* Изображение товара */}
      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-8 relative overflow-hidden">
        <div className={`transform transition-all duration-500 ${product.animation}`}>
          <product.Icon colors={product.colors} />
        </div>
        {/* Декоративный фоновый паттерн */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-transparent opacity-10"></div>
          <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>
      </div>

      {/* Информация о товаре */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{product.description}</p>
        </div>

        {/* Цены и скидка */}
        <div className="flex items-baseline justify-between mb-6">
          <div className="space-y-1">
            <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
            <p className="text-2xl font-bold text-amber-600">{product.price}</p>
          </div>
          <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
            -{product.discount}%
          </div>
        </div>

        {/* Кнопки действий */}
        <div className="space-y-2">
          <a
            href={`https://wa.me/77754797687?text=Здравствуйте! Интересует ${encodeURIComponent(product.name)}. Можно узнать подробнее?`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a10.027 10.027 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.988-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2z"/>
            </svg>
            Узнать стоимость
          </a>
          <a
            href="tel:+77754797687"
            className="flex items-center justify-center w-full px-4 py-3 border-2 border-amber-500 text-amber-600 rounded-xl font-medium hover:bg-amber-50 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Позвонить
          </a>
        </div>
      </div>
    </motion.div>
  )
}

// Обновим основной компонент
export default function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [sortOrder, setSortOrder] = useState('default')
  const [isLoading, setIsLoading] = useState(false)
  
  const categories = ['Все', ...new Set(FEATURED_PRODUCTS.map(p => p.category))]

  // Фильтрация и сортировка
  const getFilteredAndSortedProducts = () => {
    let result = selectedCategory === 'Все'
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter(p => p.category === selectedCategory)

    if (sortOrder === 'asc') {
      result = [...result].sort((a, b) => 
        parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''))
      )
    } else if (sortOrder === 'desc') {
      result = [...result].sort((a, b) => 
        parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''))
      )
    }

    return result
  }

  // Эффект загрузки при изменении фильтров
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timer)
  }, [selectedCategory, sortOrder])

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Популярные модели
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите идеальную мебель для вашего дома из нашей коллекции
          </p>
        </motion.div>
        
        {/* Фильтры */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-200 bg-white hover:border-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="default">По умолчанию</option>
            <option value="asc">Сначала дешевле</option>
            <option value="desc">Сначала дороже</option>
          </select>
        </div>

        {/* Сетка товаров */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {getFilteredAndSortedProducts().map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 