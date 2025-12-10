"use client";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Sertifikat kepengurusan MPK",
    desc: "Menjadi anggota MPK aktif di SMK, berkontribusi pada pengawasan organisasi dan pengembangan program sekolah.",
    image: "./assets/Certificate/SertifikatMPK.jpg",
  },
  {
    title: "Olimpiade Nasional Sejarah",
    desc: "Pencapaian di Ajang kompetisi Tingkat Nasional yang diselenggarakan oleh CV. Alberta Nusa Education",
    image: "./assets/Certificate/Sejarah.png",
  },
  {
    title: "Olimpiade Nasional Sosiologi",
    desc: "Pencapaian di Ajang Tingkat Nasional yang diselenggarakan oleh CV. Alberta Nusa Education",
    image: "./assets/Certificate/Sosiologi.png",
  },
  {
    title: "Sertifikat Pelatihan P4",
    desc: "Pelatihan bersama jurusan RPL mengenai pembentukan karakter, etika profesional, dan nilai kolaboratif dalam lingkungan pendidikan.",
    image: "./assets/Certificate/P4.png",
  },
  {
    title: "Sertifikat Pelatihan Osis dan Ekskul",
    desc: "Pelatihan kepemimpinan dan manajemen kegiatan OSIS serta ekstrakurikuler yang diselenggarakan oleh Festival Belajar Unggulan.",
    image: "./assets/Certificate/FestivalBelajar.png",
  },
  {
    title: "Sertifikat School Of Parliament",
    desc: "Kegiatan bertema “Peran Pemuda sebagai Pengawal Demokrasi” mengenai dasar parlementer dan peran generasi muda dalam demokrasi.",
    image: "./assets/Certificate/Schoolof.png",
  },
  {
    title: "Piagam Bijak Kelola Stress",
    desc: "Kegiatan edukasi kesehatan mental tentang cara mengelola stres secara bijak untuk meningkatkan produktivitas dan keseimbangan hidup.",
    image: "./assets/Certificate/iamokay.png",
  },
];

export default function CertificateSection() {
  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20"
    >
      {/* 🌟 Judul */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-[#32B5C7] mb-12 text-center"
      >
        Sertifikat
      </motion.h2>

      {/* 📜 Grid Sertifikat */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f]/70 border border-[#32B5C7]/30 rounded-xl overflow-hidden shadow-lg 
                       hover:shadow-[0_0_20px_#32B5C770] transition-all duration-300 backdrop-blur-md flex flex-col"
          >
            {/* 🖼️ Gambar Sertifikat */}
            <div className="w-full h-40 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* 📄 Deskripsi */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#32B5C7] mb-2">
                  {cert.title}
                </h3>
                <p className="text-[#E4E2DA] text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
