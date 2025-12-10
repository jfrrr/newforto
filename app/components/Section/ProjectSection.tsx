"use client";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react"; // ikon netral </>

const projects = [
  {
    title: "Website MyMusic",
    desc: "Website portofolio pribadi yang menampilkan profil, pengalaman, dan karya saya sebagai pengembang front-end.",
    image: "./assets/Project/mymusic.png",
    link: "https://mymusic-jfrr.netlify.app/",
  },
  {
    title: "My Fortofolio old",
    desc: "Chatbot cerdas yang merespons secara dinamis menggunakan integrasi API AI modern.",
    image: "./assets/Project/fortofolio.png",
    link: "https://myfortofolio-jfrr.netlify.app/",
  },
  // {
  //   title: "E-Commerce UI",
  //   desc: "Antarmuka e-commerce responsif menggunakan Tailwind dan React dengan animasi halus.",
  //   image: "/assets/projects/ecommerce.png",
  //   link: "https://github.com/maulanajafar/ecommerce-ui",
  // },
  // {
  //   title: "Landing Page Startup",
  //   desc: "Landing page startup interaktif dengan performa tinggi berbasis Vite + React.",
  //   image: "/assets/projects/startup-landing.png",
  //   link: "https://github.com/maulanajafar/startup-landing",
  // },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
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
        Proyek Saya
      </motion.h2>

      {/* 🧩 Grid 4 Kolom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f]/70 border border-[#32B5C7]/30 rounded-xl overflow-hidden shadow-lg 
                       hover:shadow-[0_0_25px_#32B5C770] transition-all duration-300 backdrop-blur-md flex flex-col"
          >
            {/* 🖼️ Gambar Project */}
            <div className="w-full h-40 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* 📄 Deskripsi */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#32B5C7] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#E4E2DA] text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* 🔗 Tombol Netral */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 text-[#E4E2DA]/70 hover:text-[#32B5C7] transition-all text-sm font-medium"
              >
                <Code2 size={16} />
                <span>Lihat Project</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
