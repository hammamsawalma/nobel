"use client";

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function V2Footer() {
    return (
        <footer className="bg-[#050505] border-t border-noble-gold-900/30 pt-24 pb-12 px-6 lg:px-12 text-noble-slate relative overflow-hidden">
            {/* Extremely subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-noble-gold-800/20 to-transparent" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 font-sans relative z-10">

                {/* Branding Column */}
                <div className="md:col-span-5 pr-8">
                    <div className="font-display text-3xl tracking-[0.1em] text-transparent bg-clip-text bg-gradient-gold-foil mb-6">
                        Noble Rock
                    </div>
                    <p className="text-[11px] tracking-widest leading-loose mb-10 max-w-sm text-noble-slate/80 font-light">
                        Architecting enduring legacy through mathematical absolute return strategies and uncompromising fiduciary oversight.
                    </p>
                    <button className="group flex items-center gap-4 bg-transparent border border-noble-gold-800/50 text-noble-gold-400 px-6 py-3 text-[9px] font-bold tracking-[0.3em] uppercase hover:bg-noble-gold-900/10 hover:border-noble-gold-500 hover:text-noble-parchment transition-all duration-500 rounded-none w-max">
                        Contact The Firm
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="md:col-span-2">
                    <h4 className="text-[9px] font-bold tracking-[0.4em] uppercase text-noble-gold-600 mb-8 border-b border-noble-gold-900/30 pb-4 inline-block">The Firm</h4>
                    <ul className="space-y-5 text-[11px] tracking-widest text-noble-slate/70">
                        <li><Link href="/v2/the-firm" className="hover:text-noble-parchment transition-colors duration-500">Heritage</Link></li>
                        <li><Link href="/v2/philosophy" className="hover:text-noble-parchment transition-colors duration-500">Philosophy</Link></li>
                        <li><Link href="/v2/team" className="hover:text-noble-parchment transition-colors duration-500">Executive Committee</Link></li>
                        <li><Link href="/v2/careers" className="hover:text-noble-parchment transition-colors duration-500">Careers</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h4 className="text-[9px] font-bold tracking-[0.4em] uppercase text-noble-gold-600 mb-8 border-b border-noble-gold-900/30 pb-4 inline-block">Strategies</h4>
                    <ul className="space-y-5 text-[11px] tracking-widest text-noble-slate/70">
                        <li><Link href="/v2/wealth-strategies/fixed-income" className="hover:text-noble-parchment transition-colors duration-500">Yield & Fixed Income</Link></li>
                        <li><Link href="/v2/wealth-strategies/equities" className="hover:text-noble-parchment transition-colors duration-500">Strategic Equities</Link></li>
                        <li><Link href="/v2/wealth-strategies/family-office" className="hover:text-noble-parchment transition-colors duration-500">Family Office</Link></li>
                        <li><Link href="/v2/wealth-strategies/legacy" className="hover:text-noble-parchment transition-colors duration-500">Estate & Philanthropy</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h4 className="text-[9px] font-bold tracking-[0.4em] uppercase text-noble-gold-600 mb-8 border-b border-noble-gold-900/30 pb-4 inline-block">Offices</h4>
                    <ul className="space-y-5 text-[11px] tracking-widest text-noble-slate/70">
                        <li className="leading-loose">Level 42, 1 Farrer Place<br />Sydney NSW 2000</li>
                        <li className="pt-2"><a href="mailto:private@noblerock.com" className="hover:text-noble-parchment transition-colors duration-500 text-noble-gold-500/80">private@noblerock.com</a></li>
                        <li><a href="tel:+61200000000" className="hover:text-noble-parchment transition-colors duration-500">+61 2 0000 0000</a></li>
                    </ul>
                </div>
            </div>

            {/* Compliance & Legal Footer */}
            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-noble-gold-900/20 text-[9px] leading-loose tracking-[0.1em] text-noble-slate/40 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <p className="max-w-3xl">
                    Noble Rock Private Wealth Pty Ltd is a Corporate Authorised Representative of Noble Rock Capital (AFSL 000000). Information presented on this site is strictly for wholesale and sophisticated investors. It does not constitute personal financial advice.
                </p>

                <div className="flex flex-col items-end gap-4 min-w-max">
                    <div className="flex gap-6 uppercase tracking-[0.2em]">
                        <Link href="/v2/privacy" className="hover:text-noble-parchment transition-colors duration-500">Privacy Policy</Link>
                        <Link href="/v2/terms" className="hover:text-noble-parchment transition-colors duration-500">Terms of Use</Link>
                        <Link href="/v2/fsr" className="hover:text-noble-parchment transition-colors duration-500">FSR</Link>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Noble Rock. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
