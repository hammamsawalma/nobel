"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const navLinks = [
    { label: 'The Firm', href: '/v2/the-firm' },
    {
        label: 'Wealth Strategies',
        href: '/v2/wealth-strategies',
        submenu: [
            { label: 'Fixed-Income Portfolios', href: '/v2/wealth-strategies/fixed-income', description: 'Sovereign & AAA-rated capital preservation' },
            { label: 'Strategic Equities', href: '/v2/wealth-strategies/equities', description: 'Blue-chip global equity exposure' },
            { label: 'Private & Family Office', href: '/v2/wealth-strategies/family-office', description: 'Generational wealth architecture' },
        ]
    },
    { label: 'Insights', href: '/v2/insights' },
];

export default function V2Header() {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-5 px-4 lg:px-8">
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className={`
                    w-full max-w-6xl flex justify-between items-center
                    px-5 py-3 lg:px-8 lg:py-4
                    rounded-2xl transition-all duration-700
                    border border-noble-gold-900/30
                    ${scrolled
                        ? 'bg-noble-charcoal/90 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.6)]'
                        : 'bg-noble-charcoal/60 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
                    }
                `}
            >
                {/* Logo */}
                <div className="flex-shrink-0 relative flex items-center h-[80px] w-[90px]">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 group">
                        <Link href="/v2">
                            <div className="relative w-[76px] h-[76px] rounded-2xl border border-noble-gold-500/40 bg-noble-charcoal/80 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex items-center justify-center p-2 overflow-hidden transition-all duration-500 group-hover:border-noble-gold-400 group-hover:shadow-[0_0_25px_rgba(238,194,61,0.25)] group-hover:-translate-y-1">
                                {/* Diagonal subtle light shimmer map */}
                                <div className="absolute inset-0 bg-gradient-to-br from-noble-gold-900/20 to-transparent"></div>
                                {/* Inner glowing top edge */}
                                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-noble-gold-500/60 to-transparent" />

                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/images/noble_rock_logo.png"
                                    alt="Noble Rock Private Wealth"
                                    className="relative z-10 w-[60px] h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </Link>
                    </div>
                </div>


                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <div key={link.label} className="relative" onMouseEnter={() => setOpenMenu(link.label)} onMouseLeave={() => setOpenMenu(null)}>
                            <Link
                                href={link.href}
                                className={`flex items-center gap-1 px-4 py-2 rounded-xl text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${openMenu === link.label
                                    ? 'text-noble-gold-400 bg-noble-gold-900/20'
                                    : 'text-noble-slate hover:text-noble-parchment hover:bg-white/5'
                                    }`}
                            >
                                {link.label}
                                {link.submenu && (
                                    <ChevronDown
                                        className={`w-3 h-3 transition-transform duration-300 ${openMenu === link.label ? 'rotate-180 text-noble-gold-400' : ''}`}
                                    />
                                )}
                            </Link>

                            {/* Dropdown */}
                            <AnimatePresence>
                                {link.submenu && openMenu === link.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                        transition={{ duration: 0.25, ease: 'easeOut' }}
                                        className="absolute top-[calc(100%+8px)] left-0 min-w-[280px] bg-noble-charcoal/95 backdrop-blur-xl border border-noble-gold-900/40 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
                                    >
                                        <div className="p-3 flex flex-col gap-1">
                                            {link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.label}
                                                    href={sub.href}
                                                    className="group p-4 rounded-xl hover:bg-noble-gold-900/20 transition-all duration-300 border border-transparent hover:border-noble-gold-900/40"
                                                >
                                                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-noble-ivory group-hover:text-noble-gold-400 transition-colors">
                                                        {sub.label}
                                                    </div>
                                                    <div className="text-[10px] text-noble-slate/70 font-sans font-normal tracking-normal mt-1 leading-relaxed">
                                                        {sub.description}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="hidden lg:block text-[9px] uppercase tracking-[0.3em] text-noble-slate font-bold border-r border-noble-gold-900/30 pr-3">
                        Sydney, AU
                    </span>
                    <Link href="/v2/portal">
                        <motion.button
                            whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(224,184,58,0.15)' }}
                            whileTap={{ scale: 0.96 }}
                            className="bg-noble-gold-900/30 border border-noble-gold-600/50 text-noble-gold-400 px-5 py-2.5 rounded-xl text-[9px] font-bold tracking-[0.3em] uppercase hover:bg-noble-gold-900/50 hover:text-noble-gold-300 hover:border-noble-gold-400 transition-all duration-500"
                        >
                            Client Vault
                        </motion.button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden flex flex-col gap-1 p-2 rounded-lg border border-noble-gold-900/30 hover:bg-noble-gold-900/20 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-[1px] bg-noble-gold-400 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                        <span className={`block w-5 h-[1px] bg-noble-gold-400 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-5 h-[1px] bg-noble-gold-400 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-[calc(100%-4px)] left-4 right-4 mt-2 bg-noble-charcoal/95 backdrop-blur-xl border border-noble-gold-900/40 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
                    >
                        <div className="p-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="px-4 py-3 rounded-xl text-[10px] font-bold tracking-[0.25em] uppercase text-noble-slate hover:text-noble-gold-400 hover:bg-noble-gold-900/20 transition-all duration-300"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="border-t border-noble-gold-900/30 mt-2 pt-3">
                                <Link href="/v2/portal" onClick={() => setMobileOpen(false)}>
                                    <button className="w-full text-center bg-noble-gold-900/30 border border-noble-gold-600/50 text-noble-gold-400 px-5 py-3 rounded-xl text-[9px] font-bold tracking-[0.3em] uppercase hover:bg-noble-gold-900/50 transition-all duration-500">
                                        Client Vault
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
