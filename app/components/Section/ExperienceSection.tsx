"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const education = [
  {
    year: "2020 - 2023",
    title: "SMP Attahiriyah Assyairiyah",
    desc: "Mengembangkan dasar disiplin dan semangat belajar. Aktif dalam kegiatan akademik dan organisasi sekolah yang membentuk karakter, kerja sama, serta tanggung jawab.",
    details: [
      "Pelajaran Umum & Keterampilan Dasar",
      "Kegiatan Organisasi & Keagamaan",
      "Komunikasi & Kepemimpinan",
      "Teknologi Informasi Dasar",
    ],
  },
  {
    year: "2023 - 2027",
    title: "SMK Negeri 69 Jakarta — Jurusan SIJA",
    desc: "Mendalami bidang sistem informatika jaringan dan aplikasi. Aktif mengikuti kegiatan teknologi, kompetisi IT, dan proyek pengembangan aplikasi berbasis web.",
    details: [
      "Pemrograman Web & Jaringan",
      "Proyek Aplikasi Berbasis IoT",
      "Pengembangan Diri & Presentasi",
      "Kegiatan OSIS & Kepemimpinan",
    ],
  },
];

const organizations = [
  {
    year: "2021 - 2022",
    title: "OSIS SMP Attahiriyah Assyairiyah",
    desc: "Aktif dalam kegiatan organisasi sekolah yang membantu mengembangkan rasa tanggung jawab, kedisiplinan, dan kepemimpinan sejak dini.",
    details: [
      "Mengikuti berbagai kegiatan sosial dan keagamaan sekolah.",
      "Berpartisipasi dalam kepanitiaan acara tahunan.",
      "Meningkatkan kemampuan komunikasi dan kerja sama tim.",
    ],
  },
  {
    year: "2024 - 2025",
    title: "MPK SMKN 69 Jakarta",
    desc: "Aktif di Majelis Perwakilan Kelas sebagai penghubung antara siswa dan pihak sekolah, serta membantu mengawasi kinerja OSIS.",
    details: [
      "Mengatur dan mengawasi program kerja OSIS.",
      "Membangun komunikasi yang baik antarperwakilan kelas.",
      "Berpartisipasi dalam perencanaan kegiatan sekolah.",
    ],
  },
  {
    year: "2024 - 2025",
    title: "Paskibra SMKN 69 Jakarta",
    desc: "Berperan sebagai anggota Paskibra sekolah dengan fokus pada disiplin, loyalitas, dan tanggung jawab dalam kegiatan upacara dan pelatihan kepemimpinan.",
    details: [
      "Menjadi bagian dari tim inti dalam kegiatan upacara resmi sekolah.",
      "Mengikuti pelatihan baris-berbaris dan pembentukan karakter.",
      "Melatih anggota baru untuk meningkatkan solidaritas tim.",
    ],
  },
];

export default function ExperienceSection() {
  const [selectedTab, setSelectedTab] = useState<"organisasi" | "pendidikan">("organisasi");
  const currentData = selectedTab === "organisasi" ? organizations : education;
  const isEducation = selectedTab === "pendidikan";

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 relative"
    >
      {/* 🌟 Judul */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-[#32B5C7] mb-12 text-center"
      >
        Pengalaman
      </motion.h2>

      {/* 🧭 Tombol Switch */}
      <div className="flex gap-6 mb-12 bg-[#0f0f0f]/60 px-4 py-3 rounded-full border border-[#32B5C7]/30 backdrop-blur-md">
        <button
          onClick={() => setSelectedTab("organisasi")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
            selectedTab === "organisasi"
              ? "bg-[#32B5C7] text-black shadow-[0_0_15px_#32B5C790]"
              : "text-[#E4E2DA] hover:text-[#32B5C7]"
          }`}
        >
          Organisasi
        </button>
        <button
          onClick={() => setSelectedTab("pendidikan")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
            selectedTab === "pendidikan"
              ? "bg-[#32B5C7] text-black shadow-[0_0_15px_#32B5C790]"
              : "text-[#E4E2DA] hover:text-[#32B5C7]"
          }`}
        >
          Pendidikan
        </button>
      </div>

      {/* 🕓 Garis Tengah */}
      <div className="relative w-full max-w-5xl">
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#32B5C7]/40 -translate-x-1/2"></div>

        {/* 📦 Isi Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-16"
          >
            {currentData.map((item, index) => {
              const isLeft = isEducation ? index % 2 !== 0 : index % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative w-full md:w-[45%] p-6 bg-[#0f0f0f]/70 border border-[#32B5C7]/40 rounded-xl shadow-lg backdrop-blur-md ${
                    isLeft ? "self-start ml-0 md:ml-auto" : "self-end mr-0 md:mr-auto"
                  }`}
                >
                  {/* Titik di garis */}
                  <span
                    className={`absolute top-6 w-4 h-4 bg-[#E4E2DA] rounded-full shadow-[0_0_15px_#32B5C7] ${
                      isLeft ? "-right-[2.2rem]" : "-left-[2.2rem]"
                    }`}
                  ></span>

                  {/* Isi Box */}
                  <div className="text-[#E4E2DA]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-[#32B5C7] text-black text-xs font-semibold px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#32B5C7] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#E4E2DA]/90 text-sm leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    <ul className="list-disc pl-5 text-[#E4E2DA]/80 text-sm space-y-1">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
