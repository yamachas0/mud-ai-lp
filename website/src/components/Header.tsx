"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/profile", label: "Profile" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-mudai flex items-center justify-between h-16 md:h-20">
        <a href="/" className="select-none flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="MUD-Ai"
            className="h-7 md:h-8 w-auto"
          />
          <span className="text-lg md:text-xl font-bold tracking-wider text-mudai-black">
            MUD-Ai
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mudai-gray-600 hover:text-mudai-black transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-5 py-2.5 bg-mudai-black text-white hover:bg-mudai-gray-800 transition-colors rounded-full"
          >
            Contact
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span className={`block w-5 h-0.5 bg-mudai-black transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-mudai-black transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-mudai-black transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-mudai-gray-100">
          <nav className="container-mudai py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-mudai-gray-600 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-base px-5 py-2.5 bg-mudai-black text-white text-center rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
