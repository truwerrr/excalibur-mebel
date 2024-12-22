'use client'
import React from 'react'

export default function Hero() {
  return (
    <div className="relative h-[80vh] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#1a1a1a_25%,transparent_25%,transparent_75%,#1a1a1a_75%,#1a1a1a),linear-gradient(45deg,#1a1a1a_25%,transparent_25%,transparent_75%,#1a1a1a_75%,#1a1a1a)] bg-[length:60px_60px] opacity-20" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="backdrop-blur-sm bg-white/10 p-8 rounded-lg inline-block">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Качество и уют дома - <br/>
            <span className="text-amber-400">первый залог успеха для его очага</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Создаем уникальные интерьерные решения.<br/>
            Все виды мебели для вашего комфорта.
          </p>
          <div className="mt-10 space-x-4">
            <a
              href="/catalog"
              className="inline-block bg-amber-500 py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-amber-600 transition-colors"
            >
              Смотреть каталог
            </a>
            <a
              href="https://www.instagram.com/mebel_zhihaz_excalibur/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent py-3 px-8 border border-white rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Мы в Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 