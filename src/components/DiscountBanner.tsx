export default function DiscountBanner() {
  return (
    <div className="bg-amber-500 text-white py-2 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="animate-pulse mr-2">🔥</div>
        <p className="text-center font-medium">
          Грандиозная распродажа! Скидка 15% на весь ассортимент
        </p>
        <div className="animate-pulse ml-2">🔥</div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
    </div>
  )
} 