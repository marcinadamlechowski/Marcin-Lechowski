"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Bike } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200/50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Bike className="w-7 h-7 text-[color:var(--accent)]" />
              <span className="text-lg font-bold text-slate-900">Serwis Rowerowy</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-slate-600 hover:text-[color:var(--accent)] transition-colors font-medium">
              O nas
            </Link>
            <Link href="/gallery" className="text-slate-600 hover:text-[color:var(--accent)] transition-colors font-medium">
              Galeria
            </Link>
            <Link href="/pricing" className="text-slate-600 hover:text-[color:var(--accent)] transition-colors font-medium">
              Cennik
            </Link>
            <Link href="/contact" className="px-5 py-2 bg-[color:var(--accent)] hover:brightness-95 text-white font-semibold rounded-lg transition-all duration-300">
              Kontakt
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 border-t border-slate-200 mt-3 space-y-3 animate-slide-in-up">
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-slate-700 hover:text-[color:var(--accent)] rounded-lg">
              O nas
            </Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-slate-700 hover:text-[color:var(--accent)] rounded-lg">
              Galeria
            </Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-slate-700 hover:text-[color:var(--accent)] rounded-lg">
              Cennik
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 bg-[color:var(--accent)] text-white rounded-lg">
              Kontakt
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
