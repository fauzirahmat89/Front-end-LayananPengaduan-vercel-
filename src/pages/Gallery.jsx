import React from 'react'
import Case from '../components/Case'
export default function Gallery() {
  const images = [
    'https://jabartoday.com/m/WhatsApp-Image-2020-08-05-at-15.28.19.jpeg',
    'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/92/2024/10/08/Kepala-Desa-Cijengkol-Serap-Aspirasi-Warga-Lewat-Musdus-1001293141.jpg',
    'https://asset-2.tstatic.net/wartakota/foto/bank/images/warga-desa-cijengkol-kecamatan-cilograng-kabupaten-lebak-banten-dapat-bantuan-rp-26-miliar.jpg',
    'https://radarsukabumi.com/wp-content/uploads/2023/04/Marwan-Cijengkol.jpg',
    'https://media.sukabumiupdate.com/media/2023/04/08/1680947632_643139b0819d0_u73oniLKPDbZTt61rC0D.webp',
    'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/10/01/2870583318.jpg',
  ];

  return (
    <Case>
      <div className="bg-gray-100 py-12">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Galeri Desa Cijengkol</h2>
          <p className="text-lg text-gray-700 mb-12 text-center">
            Temukan keindahan Desa Cijengkol melalui koleksi foto-foto berikut. Nikmati pemandangan alam yang memukau dan kehidupan masyarakat yang harmonis.
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
