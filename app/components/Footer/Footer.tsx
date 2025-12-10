"use client";

import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-[#E4E2DA] border-t border-[#32B5C7]/30 backdrop-blur-md bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 🧩 Brand Section */}
        <div>
          <h2 className="text-xl font-semibold text-[#32B5C7] mb-2">
            Maulana Jafar Sidiq
          </h2>
          <p className="text-sm text-[#E4E2DA]/70 leading-relaxed max-w-sm">
            Seorang Front-End Developer yang berfokus pada tampilan modern,
            animasi interaktif, dan pengalaman pengguna yang menyenangkan.
          </p>
        </div>

        {/* 🌐 Social Media */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="text-base font-semibold text-[#32B5C7] mb-2">
            Terhubung
          </h3>
          <div className="flex gap-4">
            <a
              href="maulanajafarsidiq.8a@gmail.com"
              className="hover:text-[#32B5C7] hover:drop-shadow-[0_0_6px_#32B5C7] transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="http://github.com/jfrrr"
              target="_blank"
              className="hover:text-[#32B5C7] hover:drop-shadow-[0_0_6px_#32B5C7] transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            {/* <a
              href="https://linkedin.com/in/maulanajafarsidiq"
              target="_blank"
              className="hover:text-[#32B5C7] hover:drop-shadow-[0_0_6px_#32B5C7] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a> */}
            <a
              href="https://instagram.com/jfrsdiqq"
              target="_blank"
              className="hover:text-[#32B5C7] hover:drop-shadow-[0_0_6px_#32B5C7] transition-all"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* 🔸 Bottom Bar */}
      <div className="border-t border-[#32B5C7]/20 py-3 text-center text-xs text-[#E4E2DA]/70">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#32B5C7] font-medium">
          Maulana Jafar Sidiq
        </span>
        . Dibuat dengan kode dan dedikasi.
      </div>
    </footer>
  );
}
