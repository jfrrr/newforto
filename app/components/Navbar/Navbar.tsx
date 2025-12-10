"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // ikon burger & close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/60 backdrop-blur-md border-b border-[#32B5C7]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-[#32B5C7] font-bold text-lg sm:text-xl tracking-wide">
          Maulana Jafar Sidiq
        </h1>

        {/* Tombol menu (mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#E4E2DA] hover:text-[#32B5C7] transition-all"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-[#E4E2DA] font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-[#32B5C7] hover:drop-shadow-[0_0_6px_#32B5C7] transition-all"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0f0f]/95 backdrop-blur-md border-t border-[#32B5C7]/20">
          <ul className="flex flex-col items-center gap-4 py-6 text-[#E4E2DA] font-medium">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="hover:text-[#32B5C7] hover:drop-shadow-[0_0_6px_#32B5C7] transition-all text-lg"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
