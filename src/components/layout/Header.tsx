"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Fixed Income", href: "/fixed-income" },
    { name: "Wealth Management", href: "/wealth-management" },
    { name: "Retirement Planning", href: "/retirement-planning" },
    { name: "About Us", href: "/about" },
    { name: "V11 (Main)", href: "/variant-11" },
    { name: "V15 (Plan B)", href: "/variant-15" }
  ];

  if (!mounted) return null;

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif font-bold text-2xl lg:text-3xl tracking-tight text-white hover:text-slate-200 transition-colors" aria-label="Nobel Home">
              Nobel
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-6 flex-wrap" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm xl:text-base font-medium transition-all focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm px-2 py-1 ${link.name.startsWith('V') ? 'text-yellow-500 hover:text-yellow-400' : 'text-slate-300 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Utility Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="text-base font-medium text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm px-2 py-1"
            >
              Contact
            </Link>
            <Link
              href="/portal"
              className="bg-slate-900 text-white border border-slate-600 hover:bg-slate-800 rounded-sm px-4 xl:px-6 py-2 transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-slate-900 text-sm xl:text-base whitespace-nowrap"
              aria-label="Secure Client Portal Access"
            >
              Client Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm p-1"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-800 animate-fade-in border-t border-slate-700 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-3 rounded-md text-base font-medium ${link.name.startsWith('V') ? 'text-yellow-500 hover:text-yellow-400 hover:bg-slate-700/50' : 'text-slate-300 hover:text-white hover:bg-slate-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-6 pt-6 border-t border-slate-700 flex flex-col space-y-4 px-3">
              <Link
                href="/contact"
                className="text-base font-medium text-slate-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/portal"
                className="bg-slate-900 text-white border border-slate-600 text-center font-semibold rounded-sm px-6 py-3 shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Client Portal Access
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
