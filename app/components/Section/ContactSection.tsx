"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaTiktok } from "react-icons/fa";
import { Instagram, MapPin } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📨 Kirim email pakai EmailJS (pakai env dari Vite)
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setIsSending(false);
          setSent(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsSending(false);
          console.error("Gagal mengirim pesan:", error);
        }
      );
  };

  return (
    <section
      id="contact"
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
        Hubungi Saya
      </motion.h2>

      {/* 🧩 Grid Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* 🟩 KIRI */}
        <div className="flex flex-col gap-6">
          {/* BOX ATAS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#0f0f0f]/70 border border-[#32B5C7]/30 rounded-xl p-8 backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-[#32B5C7] mb-6">
              Informasi Kontak
            </h3>
            <ul className="text-[#E4E2DA] space-y-4 text-base">
              <li className="flex items-center gap-3">
                <FaTiktok size={18} className="text-[#32B5C7]" />
                <span>
                  <span className="font-medium text-[#32B5C7]">TikTok:</span>{" "}
                  <a
                    href="https://www.tiktok.com/@jfrsdiqq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E4E2DA] transition-all"
                  >
                    @jfrsdiqq
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-[#32B5C7]" />
                <span>
                  <span className="font-medium text-[#32B5C7]">Instagram:</span>{" "}
                  <a
                    href="https://www.instagram.com/jfrsdiqq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E4E2DA] transition-all"
                  >
                    @jfrsdiqq
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#32B5C7]" />
                <span>
                  <span className="font-medium text-[#32B5C7]">Alamat:</span>{" "}
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </motion.div>

          {/* BOX BAWAH */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#0f0f0f]/70 border border-[#32B5C7]/30 rounded-xl p-8 backdrop-blur-md flex flex-col justify-center items-center text-center"
          >
            <p className="text-[#E4E2DA]/90 italic text-lg leading-relaxed max-w-md">
              “Apa yang kita inginkan, <br /> Belum tentu yang kita butuhkan.”
            </p>
            <span className="mt-3 text-sm text-[#32B5C7]/80">
              – Maulana Jafar Sidiq
            </span>
          </motion.div>
        </div>

        {/* 🟨 KANAN — FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#0f0f0f]/70 border border-[#32B5C7]/30 rounded-xl p-8 backdrop-blur-md"
        >
          <h3 className="text-2xl font-semibold text-[#32B5C7] mb-6">
            Kirim Pesan
          </h3>

          <form onSubmit={sendEmail} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama Anda"
              required
              className="p-3 rounded-lg bg-[#1a1a1a] text-[#E4E2DA] border border-gray-700 focus:border-[#32B5C7] outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Anda"
              required
              className="p-3 rounded-lg bg-[#1a1a1a] text-[#E4E2DA] border border-gray-700 focus:border-[#32B5C7] outline-none transition-all"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tulis pesan Anda di sini..."
              required
              rows={5}
              className="p-3 rounded-lg bg-[#1a1a1a] text-[#E4E2DA] border border-gray-700 focus:border-[#32B5C7] outline-none transition-all resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className="bg-[#32B5C7] text-black font-semibold py-3 rounded-lg hover:bg-[#2da3b4] transition-all disabled:opacity-50"
            >
              {isSending ? "Mengirim..." : "Kirim Pesan"}
            </button>

            {sent && (
              <p className="text-[#32B5C7] mt-2 text-sm">
                ✅ Pesan berhasil dikirim! Terima kasih 🙌
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
