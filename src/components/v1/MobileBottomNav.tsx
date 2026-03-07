"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Lock, Menu, X, ChevronRight, BarChart3, TrendingUp, HeartHandshake, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileBottomNav() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    // Close menu automatically on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname?.startsWith(href);
    };

    return (
        <>
            {/* 1. BOTTOM FLOATING BAR — V1 Blue/White Theme */}
            <div
                className="md:hidden fixed bottom-0 left-0 w-full z-[90] bg-[#0A1A3A]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.4)]"
                style={{ paddingBottom: 'env(safe-area-inset-bottom, 12px)' }}
            >
                <div className="flex justify-between items-center px-4 py-3">

                    <Link href="/" className="flex flex-col items-center justify-center gap-1 group w-16">
                        <div className={`p-2 rounded-xl transition-all duration-300 ${isActive('/') ? 'bg-blue-600/30 text-blue-400' : 'text-gray-400 group-hover:text-white'}`}>
                            <Home className="w-5 h-5" />
                        </div>
                        <span className={`text-[9px] font-bold tracking-[0.15em] uppercase ${isActive('/') ? 'text-blue-400' : 'text-gray-500'}`}>Home</span>
                    </Link>

                    <Link href="/insights" className="flex flex-col items-center justify-center gap-1 group w-16">
                        <div className={`p-2 rounded-xl transition-all duration-300 ${isActive('/insights') ? 'bg-blue-600/30 text-blue-400' : 'text-gray-400 group-hover:text-white'}`}>
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <span className={`text-[9px] font-bold tracking-[0.15em] uppercase ${isActive('/insights') ? 'text-blue-400' : 'text-gray-500'}`}>Insights</span>
                    </Link>

                    <Link href="/contact" className="flex flex-col items-center justify-center gap-1 group w-16">
                        <div className={`p-2 rounded-xl transition-all duration-300 ${isActive('/contact') ? 'bg-blue-600/30 text-blue-400' : 'text-gray-400 group-hover:text-white'}`}>
                            <Lock className="w-5 h-5" />
                        </div>
                        <span className={`text-[9px] font-bold tracking-[0.15em] uppercase ${isActive('/contact') ? 'text-blue-400' : 'text-gray-500'}`}>Contact</span>
                    </Link>

                    <button onClick={() => setIsMenuOpen(true)} className="flex flex-col items-center justify-center gap-1 group w-16">
                        <div className={`p-2 rounded-xl transition-all duration-300 ${isMenuOpen ? 'bg-blue-600/30 text-blue-400' : 'text-gray-400 group-hover:text-white'}`}>
                            <Menu className="w-5 h-5" />
                        </div>
                        <span className={`text-[9px] font-bold tracking-[0.15em] uppercase ${isMenuOpen ? 'text-blue-400' : 'text-gray-500'}`}>Menu</span>
                    </button>

                </div>
            </div>

            {/* 2. FULL SCREEN DRAWER — V1 Blue/White Theme */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[100] bg-[#0A1A3A] flex flex-col"
                    >
                        {/* Subtle radial glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none" />

                        {/* Drawer Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 relative z-10 bg-[#0A1A3A]/80 backdrop-blur-xl">
                            <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/images/noble_rock_logo.png"
                                    alt="Nobel Private Wealth"
                                    style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
                                />
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Drawer Scrollable Content */}
                        <div className="flex-1 overflow-y-auto pb-32 relative z-10">

                            {/* Top Level Nav */}
                            <div className="px-6 py-4 border-b border-white/10">
                                <p className="text-[9px] uppercase tracking-[0.4em] text-blue-400 font-bold mb-4">Navigation</p>
                                <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-4 group border-b border-white/5">
                                    <div className="flex items-center gap-4 text-white font-bold text-base tracking-wide">
                                        <Home className="w-4 h-4 text-blue-400/60 group-hover:text-blue-400 transition-colors" /> Home
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                </Link>
                                <Link href="/who-we-are" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-4 group border-b border-white/5">
                                    <div className="flex items-center gap-4 text-white font-bold text-base tracking-wide">
                                        <HeartHandshake className="w-4 h-4 text-blue-400/60 group-hover:text-blue-400 transition-colors" /> Who We Are
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                </Link>
                                <Link href="/insights" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-4 group border-b border-white/5">
                                    <div className="flex items-center gap-4 text-white font-bold text-base tracking-wide">
                                        <BookOpen className="w-4 h-4 text-blue-400/60 group-hover:text-blue-400 transition-colors" /> Market Insights
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                </Link>
                                <Link href="/journal" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-4 group">
                                    <div className="flex items-center gap-4 text-white font-bold text-base tracking-wide">
                                        <BookOpen className="w-4 h-4 text-blue-400/60 group-hover:text-blue-400 transition-colors" /> The Journal
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-500" />
                                </Link>
                            </div>

                            {/* Investment Solutions Section */}
                            <div className="px-6 py-6 border-b border-white/10">
                                <p className="text-[9px] uppercase tracking-[0.4em] text-blue-400 font-bold mb-4">Investment Solutions</p>
                                <div className="grid gap-2">
                                    <Link href="/fixed-income" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors">
                                        <div className="bg-blue-600/20 text-blue-400 p-2.5 rounded-xl"><BarChart3 className="w-4 h-4" /></div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm tracking-wide">Fixed Income</h4>
                                            <p className="text-gray-400 text-xs mt-0.5">Defensive debt instruments</p>
                                        </div>
                                    </Link>
                                    <Link href="/equities" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors">
                                        <div className="bg-blue-600/20 text-blue-400 p-2.5 rounded-xl"><TrendingUp className="w-4 h-4" /></div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm tracking-wide">Strategic Equities</h4>
                                            <p className="text-gray-400 text-xs mt-0.5">High-conviction portfolios</p>
                                        </div>
                                    </Link>
                                    <Link href="/retirement-planning" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors">
                                        <div className="bg-blue-600/20 text-blue-400 p-2.5 rounded-xl"><ShieldCheck className="w-4 h-4" /></div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm tracking-wide">Retirement Planning</h4>
                                            <p className="text-gray-400 text-xs mt-0.5">Superannuation strategies</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Contact CTA */}
                            <div className="px-6 py-8">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full flex justify-center items-center gap-3 bg-white text-[#0A1A3A] py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-gray-100 transition-all duration-300 shadow-lg"
                                >
                                    Contact Us →
                                </Link>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
