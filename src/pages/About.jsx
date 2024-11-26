import React from 'react'
import Case from '../components/Case'

export default function About() {
  return (
    <Case>
      <div className="py-12">
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Tentang Desa X</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Desa X adalah salah satu desa yang terletak di wilayah Kabupaten Y. Dengan keindahan alam yang memukau dan masyarakat yang ramah, Desa X dikenal sebagai pusat kegiatan sosial dan budaya. Desa ini memiliki potensi besar di berbagai sektor seperti pariwisata, pertanian, dan pendidikan.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sejarah Desa X</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Desa X memiliki sejarah panjang yang kaya akan budaya dan tradisi. Desa ini didirikan pada abad ke-18 dan sejak itu berkembang menjadi komunitas yang harmonis dan maju. Banyak peninggalan sejarah seperti rumah adat dan situs budaya yang masih dilestarikan hingga kini.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Keunggulan Desa X</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
            <li>
              <span className="font-semibold text-blue-500">Potensi Pariwisata:</span> Keindahan alam Desa X meliputi pegunungan, sungai, dan air terjun yang sering menjadi tujuan wisata.
            </li>
            <li>
              <span className="font-semibold text-blue-500">Kegiatan Budaya:</span> Desa X rutin mengadakan festival budaya tahunan yang menampilkan seni tradisional seperti tari-tarian, musik, dan kerajinan tangan.
            </li>
            <li>
              <span className="font-semibold text-blue-500">Pertanian Unggulan:</span> Komoditas unggulan seperti padi, jagung, dan kopi menjadi tulang punggung ekonomi masyarakat.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tujuan Kami</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Dengan layanan pengaduan online ini, kami berkomitmen untuk memberikan solusi terbaik bagi setiap warga Desa X. Kami percaya bahwa transparansi dan komunikasi yang baik adalah kunci untuk membangun desa yang lebih maju dan harmonis.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hubungi Kami</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Jika Anda memiliki pertanyaan, masukan, atau pengaduan, jangan ragu untuk menghubungi kami melalui layanan ini. Mari bersama-sama membangun Desa X menjadi tempat yang lebih baik bagi kita semua.
          </p>
        </div>
      </div>
    </Case>
  )
}
