'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const CATALOG_PRODUCTS = [
  // Кухонные гарнитуры
  {
    id: 1,
    name: 'Кухонный гарнитур "Модерн"',
    price: '450 000 ₸',
    description: 'Современный кухонный гарнитур с фасадами из МДФ и встроенной подсветкой',
    specs: [
      'Длина: 3.6м',
      'Встроенная подсветка',
      'Фурнитура Blum'
    ],
    category: 'Кухни',
    image: '/images/kitchen-modern.jpg'
  },
  {
    id: 2,
    name: 'Шкаф-купе "Престиж"',
    price: '280 000 ₸',
    description: 'Вместительный шкаф-купе с зеркальными дверями и системой плавного закрывания',
    specs: [
      'Ширина: 2.4м',
      'Зеркальные двери',
      'Система Soft-Close'
    ],
    category: 'Шкафы',
    image: '/images/wardrobe-prestige.jpg'
  },
  {
    id: 3,
    name: 'Спальный гарнитур "Люкс"',
    price: '650 000 ₸',
    description: 'Комплексное решение для спальни с кроватью, тумбами и шкафом',
    specs: [
      'Кровать 180x200',
      '2 прикроватные тумбы',
      'Шкаф 2.5м'
    ],
    category: 'Спальни',
    image: '/images/bedroom-lux.jpg'
  },
  {
    id: 4,
    name: 'Кухня "Премиум"',
    price: '780 000 ₸',
    description: 'Премиальная кухня с фасадами из массива дерева и встроенной техникой',
    specs: [
      'Длина: 4.2м',
      'Встроенная техника Bosch',
      'Каменная столешница'
    ],
    category: 'Кухни',
    image: '/images/kitchen-premium.jpg'
  },
  {
    id: 20,
    name: 'Кухня "Классика"',
    price: '560 000 ₸',
    description: 'Классическая кухня из массива дерева',
    specs: [
      'Длина: 3.8м',
      'Фасады из массива',
      'Патинирование'
    ],
    category: 'Кухни',
    image: '/images/kitchen-classic.jpg'
  },
  {
    id: 5,
    name: 'Диван-кровать "Универсал"',
    price: '390 000 ₸',
    description: 'Угловой диван-кровать с механизмом трансформации и нишей для белья',
    specs: [
      'Размер: 2.8х1.7м',
      'Спальное место: 2.0х1.6м',
      'Пружинный блок'
    ],
    category: 'Мягкая мебель',
    image: '/images/sofa-universal.jpg'
  },
  {
    id: 6,
    name: 'Спальня "Венеция"',
    price: '850 000 ₸',
    description: 'Роскошный спальный гарнитур в классическом стиле',
    specs: [
      'Кровать с подъемным механизмом',
      'Туалетный столик с зеркалом',
      '4-дверный шкаф'
    ],
    category: 'Спальни',
    image: '/images/bedroom-venice.jpg'
  },
  {
    id: 7,
    name: 'Детская "Космос"',
    price: '460 000 ₸',
    description: 'Тематический детский гарнитур с игровыми элементами',
    specs: [
      'Кровать-ракета',
      'Стол-планета',
      'Шкаф со светодиодной подсветкой'
    ],
    category: 'Детская мебель',
    image: '/images/kids-cosmos.jpg'
  },
  {
    id: 8,
    name: 'Шкаф "Максимум"',
    price: '420 000 ₸',
    description: 'местительный шкаф-купе с системой организации пространства',
    specs: [
      'Ширина: 3.2м',
      'Умная организация',
      'LED-подсветка'
    ],
    category: 'Шкафы',
    image: '/images/wardrobe-maximum.jpg'
  },
  {
    id: 9,
    name: 'Прихожая "Модерн"',
    price: '250 000 ₸',
    description: 'Современная прихожая с глянцевыми фасадами',
    specs: [
      'Ширина: 2.2м',
      'Глянцевые фасады',
      'Антресоль'
    ],
    category: 'Прихожие',
    image: '/images/hallway-modern.jpg'
  },
  {
    id: 10,
    name: 'Кухня "Эконом"',
    price: '320 000 ₸',
    description: 'Функциональная кухня по доступной цене',
    specs: [
      'Длина: 2.8м',
      'Фасады МДФ',
      'Встроенная мойка'
    ],
    category: 'Кухни',
    image: '/images/kitchen-econom.jpg'
  },
  {
    id: 11,
    name: 'Кресло "Релакс"',
    price: '180 000 ₸',
    description: 'Удобное кресло с механизмом реклайнера',
    specs: [
      'Механизм реклайнера',
      '��одставка для ног',
      'Экокожа'
    ],
    category: 'Мягкая мебель',
    image: '/images/armchair-relax.jpg'
  },
  {
    id: 12,
    name: 'Детская "Принцесса"',
    price: '490 000 ₸',
    description: 'Сказочный гарнитур для маленькой принцессы',
    specs: [
      'Кровать-карета',
      'Шкаф-замок',
      'Туалетный столик'
    ],
    category: 'Детская мебель',
    image: '/images/kids-princess.jpg'
  },
  {
    id: 13,
    name: 'Спальня "Минимализм"',
    price: '580 000 ₸',
    description: 'Современный спальный гарнитур в стиле минимализм',
    specs: [
      'Парящая кровать с подсветкой',
      'Прикроватные тумбы',
      'Комод с зеркалом'
    ],
    category: 'Спальни',
    image: '/images/bedroom-minimal.jpg'
  },
  {
    id: 14,
    name: 'Прихожая "Компакт"',
    price: '150 000 ₸',
    description: 'Компактное решение для небольшой прихожей',
    specs: [
      'Ширина: 1.4м',
      'Зеркало с подсветкой',
      'Компактная обувница'
    ],
    category: 'Прихожие',
    image: '/images/hallway-compact.jpg'
  },
  {
    id: 15,
    name: 'Шкаф "Стандарт"',
    price: '240 000 ₸',
    description: 'Классический шкаф-купе с оптимальной организацией',
    specs: [
      'Ширина: 1.8м',
      'Зеркальные двери',
      'Антресоль'
    ],
    category: 'Шкафы',
    image: '/images/wardrobe-standard.jpg'
  },
  {
    id: 16,
    name: 'Диван "Модерн"',
    price: '450 000 ₸',
    description: 'Стильный диван с инновационным механизмом трансформации',
    specs: [
      'Еврокнижка',
      'Независимый пружинный блок',
      'Съемные чехлы'
    ],
    category: 'Мягкая мебель',
    image: '/images/sofa-modern.jpg'
  },
  {
    id: 17,
    name: 'Детская "Радуга"',
    price: '420 000 ₸',
    description: 'Яркий детский гарнитур с множеством систем хранения',
    specs: [
      'Двухъярусная кровать',
      'Встроенный письменный стол',
      'Шкаф с полками'
    ],
    category: 'Де��ская мебель',
    image: '/images/kids-rainbow.jpg'
  },
  {
    id: 18,
    name: 'Гостиная "Престиж"',
    price: '680 000 ₸',
    description: 'Элегантная мебель для гостиной в современном стиле',
    specs: [
      'Стенка 3.5м',
      'LED подсветка',
      'Витрины с стеклом'
    ],
    category: 'Гостиные',
    image: '/images/living-prestige.jpg'
  },
  {
    id: 19,
    name: 'Офисный комплект "Бизнес"',
    price: '340 000 ₸',
    description: 'Профессиональная мебель для офиса',
    specs: [
      'Рабочий стол с тумбой',
      'Шкаф для документов',
      'Кресло руководителя'
    ],
    category: 'Офисная мебель',
    image: '/images/office-business.jpg'
  },
  {
    id: 21,
    name: 'Кухня "Студио"',
    price: '420 000 ₸',
    description: 'Современная кухня для небольших пространств',
    specs: [
      'Длина: 2.4м',
      'Встроенная техника',
      'Барная стойка'
    ],
    category: 'Кухни',
    image: '/images/kitchen-studio.jpg'
  },
  {
    id: 22,
    name: 'Гар��еробная "Люкс"',
    price: '520 000 ₸',
    description: 'Система хранения премиум-класса',
    specs: [
      'Модульная система',
      'Подсветка секций',
      'Умная организация'
    ],
    category: 'Гардеробные',
    image: '/images/wardrobe-luxe.jpg'
  },
  {
    id: 23,
    name: 'Прихожая "Элегант"',
    price: '280 000 ₸',
    description: 'Стильная прихожая с зеркальными элементами',
    specs: [
      'Ширина: 1.8м',
      'Зеркальный фасад',
      'Подсветка'
    ],
    category: 'Прихожие',
    image: '/images/hallway-elegant.jpg'
  },
  {
    id: 24,
    name: 'Гостиная "Неоклассика"',
    price: '750 000 ₸',
    description: 'Элегантная мебель для гостиной в неоклассическом стиле',
    specs: [
      'Стенка 4.2м',
      'Витрины с подсветкой',
      'Фасады с патиной'
    ],
    category: 'Гостиные',
    image: '/images/living-neoclassic.jpg'
  },
  {
    id: 25,
    name: 'Кабинет "Директор"',
    price: '480 000 ₸',
    description: 'Представительсий кабинет руководителя',
    specs: [
      'Стол руководителя 2м',
      'Шкаф для документов',
      'Кожаное кресло'
    ],
    category: 'Офисная мебель',
    image: '/images/office-director.jpg'
  },
  {
    id: 26,
    name: 'Диван "Честер"',
    price: '620 000 ₸',
    description: 'Классический кожаный диван в английском стиле',
    specs: [
      'Натуральная кожа',
      'Каретная стяжка',
      'Массив дуба'
    ],
    category: 'Мягкая мебель',
    image: '/images/sofa-chester.jpg'
  },
  {
    id: 27,
    name: 'Кухня "Хай-тек"',
    price: '890 000 ₸',
    description: 'Современная кухня с инновационными решениями',
    specs: [
      'Длина: 3.6м',
      'Умная техника',
      'Сенсорное управление'
    ],
    category: 'Кухни',
    image: '/images/kitchen-hitech.jpg'
  },
  {
    id: 28,
    name: 'Детская "Путешественник"',
    price: '540 000 ₸',
    description: 'Тематический гарнитур в стиле путешествий',
    specs: [
      'Кровать-корабль',
      'Шкаф-маяк',
      'Стол-карта'
    ],
    category: 'Детская мебель',
    image: '/images/kids-traveler.jpg'
  },
  {
    id: 29,
    name: 'Спальня "Версаль"',
    price: '920 000 ₸',
    description: 'Роскошный спальный гарнитур в классическом стиле',
    specs: [
      'Кровать с балдахином',
      'Туалетный столик',
      'Пуф и банкетка'
    ],
    category: 'Спальни',
    image: '/images/bedroom-versailles.jpg'
  },
  {
    id: 30,
    name: 'Гардеробная "Смарт"',
    price: '430 000 ₸',
    description: 'Умная система хранения с электронным управлением',
    specs: [
      'Электропривод дверей',
      'Умная подсветка',
      'Автоматическая вентиляция'
    ],
    category: 'Гардеробные',
    image: '/images/wardrobe-smart.jpg'
  },
  {
    id: 31,
    name: 'Прихожая "Лофт"',
    price: '320 000 ₸',
    description: 'Индустриальный стиль для современного интерьера',
    specs: [
      'Металлический каркас',
      'Массив дерева',
      'Открытые полки'
    ],
    category: 'Прихожие',
    image: '/images/hallway-loft.jpg'
  },
  {
    id: 32,
    name: 'Рабочее место "Эргономика"',
    price: '280 000 ₸',
    description: 'Комфортное рабочее место с регулировками',
    specs: [
      'Стол с регулировкой высоты',
      'Эргономичное кресло',
      'Подставка для монитора'
    ],
    category: 'Офисная мебель',
    image: '/images/office-ergonomic.jpg'
  },
  {
    id: 33,
    name: 'Гостиная "Модерн"',
    price: '580 000 ₸',
    description: 'Современная мебель для гостиной в стиле модерн',
    specs: [
      'Подвесные модули',
      'Скрытая подсветка',
      'Стеклянные полки'
    ],
    category: 'Гостиные',
    image: '/images/living-modern.jpg'
  }
]

// Добавим фильтрацию по категориям
export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [page, setPage] = useState(1)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [sortOrder, setSortOrder] = useState('default')
  const [searchQuery, setSearchQuery] = useState('')
  const itemsPerPage = 9

  // Следим за скроллом
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Обновляем фильтрацию с учетом поиска и сортировки
  const getFilteredProducts = () => {
    let result = selectedCategory === 'Все'
      ? CATALOG_PRODUCTS
      : CATALOG_PRODUCTS.filter(p => p.category === selectedCategory)

    // Применяем поиск
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
      )
    }

    // Применяем сортировку
    switch (sortOrder) {
      case 'price-asc':
        return result.sort((a, b) => 
          parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''))
        )
      case 'price-desc':
        return result.sort((a, b) => 
          parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''))
        )
      case 'name':
        return result.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return result
    }
  }

  // Обновляем пагинацию
  const filteredProducts = getFilteredProducts()
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const displayedProducts = filteredProducts.slice(0, page * itemsPerPage)
  const hasMore = page < totalPages

  // Сброс страницы при изменении фильтров
  useEffect(() => {
    setPage(1)
  }, [selectedCategory, sortOrder, searchQuery])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* Декоративный паттерн */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-10" />
      
      {/* Верхний декоративный разделитель - удалим его, так как он перекрывается с навигацией */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Каталог мебели</h1>
          <p className="text-lg text-gray-600">Выберите идеальную мебель для вашего дома</p>
        </motion.div>

        {/* Фильтры и поиск в карточке */}
        <div className="bg-white rounded-xl shadow-md mb-8 p-6 border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
            <input
              type="text"
              placeholder="Поиск мебели..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
            />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
            >
              <option value="default">По умолчанию</option>
              <option value="price-asc">Сначала дешевле</option>
              <option value="price-desc">Сначала дороже</option>
              <option value="name">По названию</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Все', ...new Set(CATALOG_PRODUCTS.map(p => p.category))].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-amber-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Градиентный оверлей */}
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
                  {product.discount && (
                    <span className="px-2 py-1 bg-amber-500 text-white text-sm rounded-full">
                      -{product.discount}%
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                  <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                    Подробнее
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Кнопка "Показать еще" */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setPage(p => p + 1)}
              className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                Показать еще {Math.min(itemsPerPage, filteredProducts.length - page * itemsPerPage)} товаров
                <svg 
                  className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        )}

        {/* Информация о количестве товаров */}
        <div className="mt-4 text-center text-gray-600">
          Показано {displayedProducts.length} из {filteredProducts.length} товаров
        </div>
      </div>

      {/* Кнопка "Наверх" */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-amber-500 text-white rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300 hover:shadow-xl z-50"
        style={{ display: showScrollTop ? 'block' : 'none' }}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>

      {/* Удалим нижний декоративный разделитель */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0" /> */}

      {/* Декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Декоративные круги */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  )
} 