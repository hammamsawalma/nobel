"use client";

import Link from 'next/link';

export default function V2Header() {
    return (
        <header className="absolute top-0 w-full z-50 p-6 lg:p-12 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
            {/* V2 Logo (Gilded Age Display Serif) */}
            <div className="font-display text-2xl lg:text-3xl tracking-[0.1em] text-transparent bg-clip-text bg-gradient-gold-foil flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-700 font-semibold drop-shadow-md">
                <Link href="/v2">
                    Noble Rock <span className="text-noble-slate block text-[8px] lg:text-[10px] tracking-[0.5em] mt-1 font-sans font-bold uppercase">Private Wealth</span>
                </Link>
            </div>

            {/* V2 Navigation (Minimal, Spread out) */}
            <nav className="hidden lg:flex items-center gap-12 text-[10px] font-bold tracking-[0.2em] uppercase text-noble-slate">
                <Link href="/v2/the-firm" className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-noble-gold-400 hover:after:w-full after:transition-all after:duration-500 hover:text-noble-parchment transition-colors duration-500">The Firm</Link>
                <Link href="/v2/wealth-strategies" className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-noble-gold-400 hover:after:w-full after:transition-all after:duration-500 hover:text-noble-parchment transition-colors duration-500">Wealth Strategies</Link>
                <Link href="/v2/insights" className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-noble-gold-400 hover:after:w-full after:transition-all after:duration-500 hover:text-noble-parchment transition-colors duration-500">Insights</Link>
            </nav>

            {/* V2 Client Portal Action */}
            <div className="flex items-center gap-6 relative z-20 flex-shrink-0">
                <button className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] text-noble-slate hover:text-noble-gold-400 transition-colors duration-500">
                    Inquire
                </button>
                <Link href="/v2/portal">
                    <button className="border border-noble-gold-700/60 bg-transparent text-noble-gold-500 px-8 py-3 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-noble-gold-900/20 hover:border-noble-gold-400 hover:text-noble-parchment transition-all duration-700 rounded-none shadow-sm shadow-noble-gold-900/10 hover:shadow-noble-gold-900/40">
                        Client Vault
                    </button>
                </Link>
            </div>
        </header>
    );
}
