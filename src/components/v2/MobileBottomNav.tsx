"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Lock, Menu, X, ChevronRight, BarChart3, TrendingUp, HeartHandshake, Building2 } from "lucide-react";
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
        if (href === '/v2') return pathname === '/v2';
        return pathname?.startsWith(href);
    };

    return (
        <>
            {/* 1. BOTTOM FLOATING BAR — V2 Dark/Gold Theme */}
            <div
                className="md:hidden fixed bottom-0 left-0 w-full z-[90] bg-noble-charcoal/90 backdrop-blur-xl border-t border-noble-gold-900/40 shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"
                style={{ paddingBottom: 'env(safe-area-inset-bottom, 12px)' }}
            >
                <div className="flex justify-between items-center px-4 py-3">

                    <Link href="/v2" className="flex flex-col items-center justify-center gap-1 group w-16">
                        <div className={`p-2 rounded-xl transition-all duration-300 ${isActive('/v2') ? 'bg-noble-gold-900/30 text-noble-gold-400' : 'text-noble-slate group-hover:text-noble-ivory'}`}>
                            <Home className="w-5 h-5" />
                        </div>
                        <span className={`text-[9px] font-bold tracking-[0.15em] uppercase ${isActive('/v2') ? 'text-noble-gold-400' : 'text-noble-slate/60'}`}>Home</span>
                    </Link>

                    <Link href="/v2/insights" className="flex flex-col items-center justify-center gap-1 group w-16">
                        <div className={`p-2 rounded-xl transition-all duration-300 ${isActive('/v2/insights') ? 'bg-noble-gold-900/30 text-noble-gold-400' : 'text-noble-slate group-hover:text-noble-ivory'}`}>
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <span className={`text-[9px] font-bold tracking-[0.15em] uppercase ${isActive('/v2/insights') ? 'text-noble-gold-400' : 'text-noble-slate/60'}`}>Insights</span>
                    </Link>

                    <Link href="/v2/portal" className="flex flex-col items-center justify-center gap-1 group w-16">
                        <div className={`p-2 rounded-xl transition-all duration-300 ${isActive('/v2/portal') ? 'bg-noble-gold-900/30 text-noble-gold-400' : 'text-noble-slate group-hover:text-noble-ivory'}`}>
                            <Lock className="w-5 h-5" />
                        </div>
                        <span className={`text-[9px] font-bold tracking-[0.15em] uppercase ${isActive('/v2/portal') ? 'text-noble-gold-400' : 'text-noble-slate/60'}`}>Vault</span>
                    </Link>

                    <button onClick={() => setIsMenuOpen(true)} className="flex flex-col items-center justify-center gap-1 group w-16">
                        <div className={`p-2 rounded-xl transition-all duration-300 ${isMenuOpen ? 'bg-noble-gold-900/30 text-noble-gold-400' : 'text-noble-slate group-hover:text-noble-ivory'}`}>
                            <Menu className="w-5 h-5" />
                        </div>
                        <span className={`text-[9px] font-bold tracking-[0.15em] uppercase ${isMenuOpen ? 'text-noble-gold-400' : 'text-noble-slate/60'}`}>Menu</span>
                    </button>

                </div>
            </div>

            {/* 2. FULL SCREEN DRAWER — V2 Dark/Gold Theme */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[100] bg-noble-charcoal flex flex-col"
                    >
                        {/* Subtle radial glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(238,194,61,0.05)_0%,transparent_60%)] pointer-events-none" />

                        {/* Drawer Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-noble-gold-900/30 relative z-10 bg-noble-charcoal/80 backdrop-blur-xl">
                            <Link href="/v2" onClick={() => setIsMenuOpen(false)}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/images/noble_rock_logo.png"
                                    alt="Noble Rock Private Wealth"
                                    style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
                                />
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-xl border border-noble-gold-900/30 text-noble-slate hover:text-noble-ivory hover:border-noble-gold-600/50 transition-all duration-300"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Drawer Scrollable Content */}
                        <div className="flex-1 overflow-y-auto pb-32 relative z-10">

                            {/* Top Level Nav */}
                            <div className="px-6 py-4 border-b border-noble-gold-900/20">
                                <p className="text-[9px] uppercase tracking-[0.4em] text-noble-gold-600 font-bold mb-4">Navigation</p>
                                <Link href="/v2" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-4 group border-b border-noble-gold-900/10">
                                    <div className="flex items-center gap-4 text-noble-ivory font-bold text-base tracking-wide">
                                        <Home className="w-4 h-4 text-noble-gold-500/60 group-hover:text-noble-gold-400 transition-colors" /> Home
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-noble-slate/40" />
                                </Link>
                                <Link href="/v2/the-firm" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-4 group border-b border-noble-gold-900/10">
                                    <div className="flex items-center gap-4 text-noble-ivory font-bold text-base tracking-wide">
                                        <Building2 className="w-4 h-4 text-noble-gold-500/60 group-hover:text-noble-gold-400 transition-colors" /> The Firm
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-noble-slate/40" />
                                </Link>
                                <Link href="/v2/insights" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-4 group">
                                    <div className="flex items-center gap-4 text-noble-ivory font-bold text-base tracking-wide">
                                        <BookOpen className="w-4 h-4 text-noble-gold-500/60 group-hover:text-noble-gold-400 transition-colors" /> Insights
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-noble-slate/40" />
                                </Link>
                            </div>

                            {/* Wealth Strategies Section */}
                            <div className="px-6 py-6 border-b border-noble-gold-900/20">
                                <p className="text-[9px] uppercase tracking-[0.4em] text-noble-gold-600 font-bold mb-4">Wealth Strategies</p>
                                <div className="grid gap-2">
                                    <Link href="/v2/wealth-strategies/fixed-income" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 p-4 rounded-xl bg-noble-charcoal/60 border border-noble-gold-900/20 hover:border-noble-gold-600/40 transition-colors">
                                        <div className="bg-noble-gold-900/30 text-noble-gold-500 p-2.5 rounded-xl"><BarChart3 className="w-4 h-4" /></div>
                                        <div>
                                            <h4 className="text-noble-ivory font-bold text-sm tracking-wide">Fixed Income</h4>
                                            <p className="text-noble-slate text-xs mt-0.5">Sovereign & AAA-rated preservation</p>
                                        </div>
                                    </Link>
                                    <Link href="/v2/wealth-strategies/equities" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 p-4 rounded-xl bg-noble-charcoal/60 border border-noble-gold-900/20 hover:border-noble-gold-600/40 transition-colors">
                                        <div className="bg-noble-gold-900/30 text-noble-gold-500 p-2.5 rounded-xl"><TrendingUp className="w-4 h-4" /></div>
                                        <div>
                                            <h4 className="text-noble-ivory font-bold text-sm tracking-wide">Strategic Equities</h4>
                                            <p className="text-noble-slate text-xs mt-0.5">Blue-chip global equity exposure</p>
                                        </div>
                                    </Link>
                                    <Link href="/v2/wealth-strategies/family-office" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 p-4 rounded-xl bg-noble-charcoal/60 border border-noble-gold-900/20 hover:border-noble-gold-600/40 transition-colors">
                                        <div className="bg-noble-gold-900/30 text-noble-gold-500 p-2.5 rounded-xl"><HeartHandshake className="w-4 h-4" /></div>
                                        <div>
                                            <h4 className="text-noble-ivory font-bold text-sm tracking-wide">Family Office</h4>
                                            <p className="text-noble-slate text-xs mt-0.5">Generational wealth architecture</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Client Vault CTA */}
                            <div className="px-6 py-8">
                                <Link
                                    href="/v2/portal"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-noble-gold-700/40 to-noble-gold-900/20 border border-noble-gold-500/60 text-noble-gold-300 py-4 rounded-xl font-bold uppercase tracking-[0.3em] text-[10px] hover:text-noble-gold-100 hover:border-noble-gold-400 transition-all duration-500 shadow-[0_0_20px_rgba(238,194,61,0.08)]"
                                >
                                    Client Vault →
                                </Link>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
