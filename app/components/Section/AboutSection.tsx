"use client";

import SplitText from "../SplitText/SplitText";
import BlurText from "../BlurText/BlurText";
import PixelTransition from "../PixelTransition/PixelTransition";

export default function AboutSection() {
  return (
    <section
      id="about"
      // Mengurangi padding horizontal di mobile (px-4 atau px-6 sudah cukup)
      // dan memastikan konten berada di tengah.
      className="min-h-screen flex items-center justify-center px-4 md:px-16" 
    >
      {/* ✨ BOX BLUR */}
      <div
        className="
          bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_0_40px_#5AB4E620]
          // Pastikan padding di mobile tidak terlalu besar
          rounded-3xl p-6 sm:p-10 md:p-12 w-full max-w-6xl
        "
      >
        <div
          className="
            grid grid-cols-1 md:grid-cols-12 items-center gap-8 
          "
        >
          {/* ✨ BAGIAN FOTO (di atas saat mobile) */}
          {/* Tambahkan 'mx-auto' untuk memastikan rata tengah jika ada batasan width/height di sini */}
          <div className="order-1 md:order-2 col-span-12 md:col-span-6 flex justify-center items-center rounded-xl p-4 mx-auto">
            <PixelTransition
              firstContent={
                <img
                  src="./assets/About/about1.jpg"
                  alt="Foto Maulana Jafar Sidiq"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <img
                  src="./assets/About/about2.jpg"
                  alt="Foto Maulana Jafar Sidiq"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="
                rounded-2xl overflow-hidden 
                // Mengurangi ukuran di mobile agar tidak melebihi batas layar
                w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[26rem] md:h-[26rem] 
                shadow-[0_0_40px_#5AB4E625] 
                transition-shadow duration-500 hover:shadow-[0_0_60px_#5AB4E650]
              "
            />
          </div>

          {/* 🧩 BAGIAN TEKS */}
          {/* Pastikan teks, list, dan tombol rata tengah di mobile */}
          <div className
            ="order-2 md:order-1 col-span-12 md:col-span-6 flex flex-col justify-center gap-6 rounded-xl p-4 text-center md:text-left"
          >
            <SplitText
              text="Tentang Saya"
              className="text-4xl sm:text-5xl font-bold text-[#5AB4E6] mb-4"
              delay={50}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
            />

            <BlurText
              text="Saya adalah seorang pengembang web yang memiliki passion besar di dunia teknologi. Dengan semangat belajar tinggi, saya terus mengasah kemampuan dalam berbagai bahasa pemrograman dan framework modern. Saya percaya bahwa setiap baris kode dapat menjadi karya yang memiliki nilai estetika dan fungsionalitas."
              delay={75}
              animateBy="words"
              direction="top"
              // mx-auto memastikan paragraf rata tengah di mobile
              className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-xl mx-auto md:mx-0"
            />

            {/* Tambahkan 'mx-auto' dan 'max-w-xs' untuk memastikan list rata tengah dan tidak terlalu lebar di mobile */}
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-400 mt-4 mx-auto md:mx-0 max-w-sm">
              <p>
                <span className="font-semibold text-[#5AB4E6]">Nama:</span>{" "}
                Maulana Jafar Sidiq
              </p>
              <p>
                <span className="font-semibold text-[#5AB4E6]">Role:</span>{" "}
                Front-End Developer
              </p>
              <p>
                <span className="font-semibold text-[#5AB4E6]">Asal:</span>{" "}
                Jakarta, Indonesia
              </p>
              <p>
                <span className="font-semibold text-[#5AB4E6]">Bahasa:</span>{" "}
                JavaScript
              </p>
            </div>

            {/* Pastikan tombol rata tengah di mobile */}
            <div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start">
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="px-6 py-2 rounded-lg bg-[#5AB4E6] text-black font-semibold hover:bg-[#6BC8FA] transition-all shadow-[0_0_20px_#5AB4E640]"
              >
                Lihat Proyek Saya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}