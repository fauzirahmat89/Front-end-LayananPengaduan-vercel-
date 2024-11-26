import React from 'react'
import Case from '../components/Case'
export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1567767292888-46f1e39b16c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1524049730815-7b587df05b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1516557070067-44e44e4cdbc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  ];

  return (
    <Case>
      <div className="bg-gray-100 py-12">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Galeri Desa X</h2>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Temukan keindahan Desa X melalui koleksi foto-foto berikut. Nikmati pemandangan alam yang memukau dan kehidupan masyarakat yang harmonis.
          </p>

          {/* Grid layout for gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-56 object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <p className="text-white text-lg font-bold">Foto {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Case>
  )
}
