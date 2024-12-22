'use client'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8">О нас</h1>
          <div className="prose prose-lg">
            <p>
              Excalibur Mebel - ведущий производитель мебели в Астане с 2015 года. 
              Мы специализируемся на создании качественной мебели для дома и офиса.
            </p>
            <p>
              Наша миссия - создавать комфортное и стильное пространство для жизни и работы, 
              используя современные технологии и качественные материалы.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 