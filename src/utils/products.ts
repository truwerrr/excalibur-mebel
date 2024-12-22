// Функция для генерации случайной скидки
export const getRandomDiscount = () => {
  const discounts = [10, 12, 15, 18]
  return Math.random() < 0.3 ? discounts[Math.floor(Math.random() * discounts.length)] : null
}

// Функция для форматирования цены
export const formatPrice = (price: number, discount?: number | null) => {
  if (discount) {
    const discountedPrice = price - (price * discount / 100)
    return `${discountedPrice.toLocaleString('ru-RU')} ₸`
  }
  return `${price.toLocaleString('ru-RU')} ₸`
}

// Базовые товары с реальными изображениями
export const PRODUCTS = [
  // Шкафы
  {
    id: 1,
    name: 'Шкаф-купе "Максимум"',
    price: 420000,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
    description: 'Элегантный шкаф-купе с зеркальными дверями и системой плавного закрывания. Встроенная LED-подсветка.',
    category: 'Шкафы',
    specs: ['Ширина: 2.4м', 'Высота: 2.2м', 'Глубина: 0.6м'],
    isNew: true,
    discount: getRandomDiscount()
  },
  {
    id: 2,
    name: 'Шкаф "Венеция"',
    price: 380000,
    image: 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a',
    description: 'Классический шкаф с распашными дверями и резными элементами. Идеально для спальни.',
    category: 'Шкафы',
    specs: ['Ширина: 2.0м', 'Высота: 2.1м', 'Глубина: 0.55м'],
    isHit: true,
    discount: getRandomDiscount()
  },

  // Кухни
  {
    id: 3,
    name: 'Кухонный гарнитур "Модерн"',
    price: 780000,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f',
    description: 'Современная кухня со встроенной техникой и эргономичным дизайном. Фасады из высококачественного МДФ.',
    category: 'Кухни',
    specs: ['Длина: 3.6м', 'Высота: 2.3м', 'Глубина: 0.6м'],
    isHit: true,
    discount: getRandomDiscount()
  },
  {
    id: 4,
    name: 'Кухня "Премиум"',
    price: 950000,
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4',
    description: 'Премиальная кухня с островом и барной стойкой. Встроенная бытовая техника Bosch.',
    category: 'Кухни',
    specs: ['Длина: 4.2м', 'Высота: 2.3м', 'Остров: 1.2х2.4м'],
    isNew: true,
    discount: getRandomDiscount()
  },

  // Спальни
  {
    id: 5,
    name: 'Спальный гарнитур "Комфорт"',
    price: 650000,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c',
    description: 'Полный комплект мебели для спальни включая кровать с подъемным механизмом.',
    category: 'Спальни',
    specs: ['Кровать: 160x200', 'Тумбы: 2 шт', 'Комод'],
    isNew: true,
    discount: getRandomDiscount()
  },
  {
    id: 6,
    name: 'Спальня "Элегант"',
    price: 850000,
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457',
    description: 'Роскошный гарнитур в современном стиле. Кровать с мягким изголовьем и прикроватные тумбы с подсветкой.',
    category: 'Спальни',
    specs: ['Кровать: 180x200', 'Шкаф 3м', 'Туалетный столик'],
    isHit: true,
    discount: getRandomDiscount()
  },

  // Гостиные
  {
    id: 7,
    name: 'Гостиная "Престиж"',
    price: 580000,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013',
    description: 'Современная стенка с LED подсветкой и местом под ТВ до 65 дюймов.',
    category: 'Гостиные',
    specs: ['Длина: 3.2м', 'Высота: 2.1м', 'TV секция: 1.4м'],
    isNew: true,
    discount: getRandomDiscount()
  },
  {
    id: 8,
    name: 'Гостиная "Лофт"',
    price: 490000,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37',
    description: 'Индустриальный стиль с комбинацией дерева и металла. Открытые полки и закрытые секции.',
    category: 'Гостиные',
    specs: ['Длина: 2.8м', 'Высота: 1.9м', 'Глубина: 0.45м'],
    isHit: true,
    discount: getRandomDiscount()
  },

  // Прихожие
  {
    id: 9,
    name: 'Прихожая "Компакт"',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1585128792020-803d29415281',
    description: 'Компактное решение для небольшой прихожей. Вме��тительный шкаф и удобная обувница.',
    category: 'Прихожие',
    specs: ['Ширина: 1.6м', 'Высота: 2.2м', 'Глубина: 0.4м'],
    isNew: true,
    discount: getRandomDiscount()
  },

  // Детская мебель
  {
    id: 10,
    name: 'Детская "Радуга"',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1558959356-2d0e3c8df1d6',
    description: 'Яркий и функциональный комплект с рабочей зоной и кроватью-чердаком.',
    category: 'Детская мебель',
    specs: ['Кровать-чердак', 'Рабочий стол', 'Шкаф'],
    isHit: true,
    discount: getRandomDiscount()
  },

  // Офисная мебель
  {
    id: 11,
    name: 'Кабинет "Бизнес"',
    price: 680000,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    description: 'Представительский кабинет руководителя с массивным столом и системой хранения документов.',
    category: 'Офисная мебель',
    specs: ['Стол: 2.0x0.9м', 'Шкаф: 2.4м', 'Кресло'],
    isHit: true,
    discount: getRandomDiscount()
  },
  {
    id: 12,
    name: 'Рабо��ее место "Смарт"',
    price: 245000,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd',
    description: 'Эргономичное рабочее место с регулируемым столом и встроенной системой кабель-менеджмента.',
    category: 'Офисная мебель',
    specs: ['Стол: 1.4x0.7м', 'Тумба', 'Полки'],
    isNew: true,
    discount: getRandomDiscount()
  },

  // Мягкая мебель
  {
    id: 13,
    name: 'Диван "Комфорт Плюс"',
    price: 495000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    description: 'Раскладной диван с ортопедическим матрасом и системой "Еврокнижка".',
    category: 'Мягкая мебель',
    specs: ['Длина: 2.4м', 'Спальное место: 1.6x2.0м'],
    isHit: true,
    discount: getRandomDiscount()
  },
  {
    id: 14,
    name: 'Угловой диван "Премьер"',
    price: 785000,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e',
    description: 'Модульный угловой диван с реклайнером и USB-зарядкой.',
    category: 'Мягкая мебель',
    specs: ['Размер: 3.2x2.1м', 'Реклайнер', 'Бар'],
    isNew: true,
    discount: getRandomDiscount()
  },

  // Столовые группы
  {
    id: 15,
    name: 'Обеденная группа "Классик"',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200',
    description: 'Классический обеденный стол со стульями из массива дерева.',
    category: 'Столовые группы',
    specs: ['Стол: 1.6x0.9м', 'Стулья: 6 шт'],
    isHit: true,
    discount: getRandomDiscount()
  },

  // Столовые группы (продолжение)
  {
    id: 16,
    name: 'Обеденная группа "Модерн"',
    price: 420000,
    image: 'https://images.unsplash.com/photo-1611464908623-07f19927264e',
    description: 'Современный обеденный комплект со стеклянным столом и дизайнерскими стульями.',
    category: 'Столовые группы',
    specs: ['Стол: 1.8x0.9м', 'Стулья: 6 шт', 'Стекло: закаленное'],
    isNew: true,
    discount: getRandomDiscount()
  },

  // Гардеробные системы
  {
    id: 17,
    name: 'Гардеробная "Люкс"',
    price: 890000,
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8',
    description: 'Полноценная гардеробная комната с системой хранения и островом для аксессуаров.',
    category: 'Гардеробные',
    specs: ['Размер: 2.5x2.0м', 'Остров', 'LED подсветка'],
    isHit: true,
    discount: getRandomDiscount()
  },
  {
    id: 18,
    name: 'Гардеробная "Компакт"',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
    description: 'Компактное решение для хранения одежды с раздвижными дверями.',
    category: 'Гардеробные',
    specs: ['Ширина: 1.8м', 'Высота: 2.4м', 'Глубина: 0.6м'],
    isNew: true,
    discount: getRandomDiscount()
  },

  // Мебель для ванной
  {
    id: 19,
    name: 'Комплект "Аква Люкс"',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101',
    description: 'Современный комплект мебели для ванной комнаты с подвесной тумбой и зеркалом.',
    category: 'Мебель для ванной',
    specs: ['Тумба: 1.2м', 'Зеркал�� с LED', 'Пенал'],
    isHit: true,
    discount: getRandomDiscount()
  },

  // Мебель для балкона
  {
    id: 20,
    name: 'Балконный сет "Уют"',
    price: 145000,
    image: 'https://images.unsplash.com/photo-1595514535415-dae8580c416c',
    description: 'Компактный набор мебели для балкона со складным столом и стульями.',
    category: 'Мебель для балкона',
    specs: ['Стол складной', 'Стулья: 2 шт', 'Система хранения'],
    isNew: true,
    discount: getRandomDiscount()
  },

  // Продолжим добавлять товары...
  {
    id: 21,
    name: 'Кухня "Эко-Стиль"',
    price: 680000,
    image: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7',
    description: 'Экологичная кухня из натуральных материалов с системой сортировки отходов.',
    category: 'Кухни',
    specs: ['Длина: 3.0м', 'Высота: 2.3м', 'Эко-материалы'],
    isHit: true,
    discount: getRandomDiscount()
  },

  // Детская мебель (продолжение)
  {
    id: 22,
    name: 'Детская "Космос"',
    price: 520000,
    image: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a',
    description: 'Тематический комплект в космическом стиле с кроватью-ракетой и столом-планетой.',
    category: 'Детская мебель',
    specs: ['Кровать-ракета', 'Стол', 'Шкаф-комета'],
    isNew: true,
    discount: getRandomDiscount()
  },

  // Мягкая мебель (продолжение)
  {
    id: 23,
    name: 'Кресло-реклайнер "Босс"',
    price: 245000,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237',
    description: 'Премиальное кресло с электроприводом и функцией массажа.',
    category: 'Мягкая мебель',
    specs: ['Электропривод', 'Массаж', 'USB-порт'],
    isHit: true,
    discount: getRandomDiscount()
  },

  // Прихожие (продолжение)
  {
    id: 24,
    name: 'Прихожая "Модерн XL"',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
    description: 'Вместительная прихожая с зеркальными дверями и системой хранения обуви.',
    category: 'Прихожие',
    specs: ['Ширина: 2.2м', 'Высота: 2.4м', 'Глубина: 0.45м'],
    isNew: true,
    discount: getRandomDiscount()
  },

  // Офисная мебель (продолжение)
  {
    id: 25,
    name: 'Офисный комплект "Опен Спейс"',
    price: 890000,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    description: 'Комплект для open space офиса на 4 рабочих места с перегородками.',
    category: 'Офисная мебель',
    specs: ['4 рабочих места', 'Перегородки', 'Кабель-менеджмент'],
    isHit: true,
    discount: getRandomDiscount()
  },

  // Шкафы (продолжение)
  {
    id: 26,
    name: 'Шкаф-купе "Минимал"',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
    description: 'Лаконичный шкаф-купе в стиле минимализм с матовыми дверями.',
    category: 'Шкафы',
    specs: ['Ширина: 1.8м', 'Высота: 2.4м', 'Глубина: 0.6м'],
    isNew: true,
    discount: getRandomDiscount()
  },

  // Кухни (продолжение)
  {
    id: 27,
    name: 'Кухня "Смарт"',
    price: 420000,
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77',
    description: 'Компактная кухня со встроенной техникой для небольших помещений.',
    category: 'Кухни',
    specs: ['Длина: 2.2м', 'Высота: 2.3м', 'Встроенная техника'],
    isHit: true,
    discount: getRandomDiscount()
  },

  // Спальни (продолжение)
  {
    id: 28,
    name: 'Спальня "Лофт"',
    price: 580000,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    description: 'Индустриальный стиль с металлическими элементами и натуральным деревом.',
    category: 'Спальни',
    specs: ['Кровать 160x200', 'Тумбы лофт', 'Система хранения'],
    isNew: true,
    discount: getRandomDiscount()
  },

  // Гостиные (продолжение)
  {
    id: 29,
    name: 'Гостиная "Неоклассика"',
    price: 750000,
    image: 'https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0',
    description: 'Элегантная стенка с витринами и подсветкой в неоклассическом стиле.',
    category: 'Гостиные',
    specs: ['Длина: 3.6м', 'Витрины', 'LED подсветка'],
    isHit: true,
    discount: getRandomDiscount()
  },

  // Мебель для ванной (продолжение)
  {
    id: 30,
    name: 'Ванная "Премиум Спа"',
    price: 420000,
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101',
    description: 'Премиальный комплект с двойной раковиной и системой хранения.',
    category: 'Мебель для ванной',
    specs: ['Тумба 1.5м', 'Двойная раковина', 'Пеналы 2 шт'],
    isNew: true,
    discount: getRandomDiscount()
  }
]

// Интерфейс для типизации товаров
export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: string
  specs: string[]
  isNew?: boolean
  isHit?: boolean
  discount: number | null
}

// Получаем уникальные категории
export const categories = ['Все', ...new Set(PRODUCTS.map(p => p.category))]

// Отдельный массив для популярных товаров
export const FEATURED_PRODUCTS = PRODUCTS
  .filter(p => p.isHit || p.isNew)
  .sort(() => Math.random() - 0.5) // Случайный порядок
  .slice(0, 20)
  