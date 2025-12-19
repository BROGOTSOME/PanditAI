"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-30 backdrop-blur-xl bg-[#0b0f1a]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#ff9f43] to-[#ff7a18]">
          PanditAI
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm tracking-widest text-white/80">
          <li>
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-white transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}
