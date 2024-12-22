export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
      <div className="relative aspect-video bg-gray-200" />
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
        <div className="h-4 bg-gray-200 rounded w-full mb-2" />
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-4" />
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded w-20" />
          <div className="h-6 bg-gray-200 rounded w-20" />
          <div className="h-6 bg-gray-200 rounded w-20" />
        </div>
        <div className="flex justify-between items-center">
          <div className="h-8 bg-gray-200 rounded w-24" />
          <div className="h-10 bg-gray-200 rounded w-28" />
        </div>
      </div>
    </div>
  )
} 