import FeaturedProducts from '@/components/FeaturedProducts'

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            Качественная мебель для вашего дома
          </h1>
        </div>
      </div>
      <FeaturedProducts />
    </main>
  )
} 