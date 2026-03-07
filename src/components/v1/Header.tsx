"use client";

import Link from 'next/link';
import { useState } from 'react';
import ClientPortalModal from '@/components/v1/ClientPortalModal';
import {
    BarChart3,
    TrendingUp,
    ShieldCheck,
    HeartHandshake,
    FileText,
    Compass,
    BookOpen,
    Lock,
    ChevronDown
} from 'lucide-react';

export default function V11Header() {
    const [isPortalOpen, setIsPortalOpen] = useState(false);

    return (
        <div className="fixed top-0 md:top-6 left-0 w-full z-[100] flex justify-center md:px-8">
            <header className="w-full max-w-7xl bg-white/95 backdrop-blur-lg md:shadow-[0_8px_30px_rgb(0,0,0,0.08)] md:rounded-full px-5 py-3 lg:px-8 lg:py-4 flex justify-between items-center text-[#0A1A3A] border-b md:border border-gray-100">
                <div className="font-black text-xl lg:text-2xl tracking-tighter cursor-pointer relative z-20 flex-shrink-0">
                    <Link href="/">
                        NOBEL <span className="text-gray-400 font-light hidden sm:inline">| WEALTH</span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-3 lg:gap-8 text-[11px] lg:text-sm font-bold tracking-wider lg:tracking-widest uppercase text-gray-500 relative flex-1 justify-center whitespace-nowrap">
                    <Link href="/who-we-are" className="hover:text-[#0A1A3A] hover:bg-gray-50 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full transition-colors">Who We Are</Link>

                    {/* Investment Solutions Mega Dropdown */}
                    <div className="group relative cursor-pointer">
                        <div className="flex items-center gap-1 hover:text-[#0A1A3A] hover:bg-gray-50 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full transition-colors relative z-20">
                            Solutions <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 group-hover:rotate-180 transition-transform duration-300" />
                        </div>

                        {/* Mega Menu Wrapper (includes padding to bridge gap) */}
                        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 w-[calc(100vw-48px)] md:w-max min-w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                            {/* Mega Menu Dropdown */}
                            <div className="bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                                <div className="p-4 lg:p-6 flex flex-col gap-2 bg-gradient-to-br from-white to-gray-50/50">
                                    <Link href="/fixed-income" className="group/item flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all border border-transparent hover:border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-blue-50 text-blue-600 p-3 rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                                                <BarChart3 className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-[#0A1A3A] font-bold text-sm uppercase tracking-widest">Fixed Income</h4>
                                                <p className="text-gray-500 text-xs font-normal tracking-normal normal-case mt-0.5">Stable, high-yield structured bonds & fixed interest.</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href="/equities" className="group/item flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all border border-transparent hover:border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-purple-50 text-purple-600 p-3 rounded-xl group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                                                <TrendingUp className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-[#0A1A3A] font-bold text-sm uppercase tracking-widest">Equities</h4>
                                                <p className="text-gray-500 text-xs font-normal tracking-normal normal-case mt-0.5">Global market exposure and bespoke portfolios.</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href="/financial-advice" className="group/item flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all border border-transparent hover:border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                                                <HeartHandshake className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-[#0A1A3A] font-bold text-sm uppercase tracking-widest">Financial Advice</h4>
                                                <p className="text-gray-500 text-xs font-normal tracking-normal normal-case mt-0.5">Strategic wealth structuring and succession planning.</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href="/retirement-planning" className="group/item flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all border border-transparent hover:border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-orange-50 text-orange-600 p-3 rounded-xl group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors">
                                                <ShieldCheck className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-[#0A1A3A] font-bold text-sm uppercase tracking-widest">Retirement</h4>
                                                <p className="text-gray-500 text-xs font-normal tracking-normal normal-case mt-0.5">Capital preservation and tax-optimized distributions.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="/how-to-invest" className="hover:text-[#0A1A3A] hover:bg-gray-50 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full transition-colors">How to Invest</Link>

                    {/* Knowledge & Resources Mega Dropdown */}
                    <div className="group relative cursor-pointer">
                        <div className="flex items-center gap-1 hover:text-[#0A1A3A] hover:bg-gray-50 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full transition-colors relative z-20">
                            Insights <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 group-hover:rotate-180 transition-transform duration-300" />
                        </div>

                        {/* Mega Menu Wrapper (includes padding to bridge gap) */}
                        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 w-[calc(100vw-48px)] md:w-max min-w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                            {/* Mega Menu Dropdown */}
                            <div className="bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden transform group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                                <div className="p-4 lg:p-6 flex flex-col gap-2 bg-gradient-to-br from-white to-gray-50">
                                    <Link href="/journal" className="group/item flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all border border-transparent hover:border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-blue-50 text-blue-600 p-3 rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-[#0A1A3A] font-bold text-sm uppercase tracking-widest">The Journal</h4>
                                                <p className="text-gray-500 text-xs font-normal tracking-normal normal-case mt-0.5">Firm thought leadership and macroeconomic essays.</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href="/insights" className="group/item flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all border border-transparent hover:border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-gray-100 text-[#0A1A3A] p-3 rounded-xl group-hover/item:bg-[#0A1A3A] group-hover/item:text-white transition-colors">
                                                <Compass className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-[#0A1A3A] font-bold text-sm uppercase tracking-widest">Market Insights</h4>
                                                <p className="text-gray-500 text-xs font-normal tracking-normal normal-case mt-0.5">Curated external financial news and intelligence.</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href="/glossary" className="group/item flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all border border-transparent hover:border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <div className="border border-gray-200 text-gray-500 p-3 rounded-xl group-hover/item:bg-gray-100 transition-colors">
                                                <BookOpen className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-[#0A1A3A] font-bold text-sm uppercase tracking-widest">Financial Glossary</h4>
                                                <p className="text-gray-500 text-xs font-normal tracking-normal normal-case mt-0.5">Definitions of sophisticated market terminology.</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href="/scam-alert" className="group/item flex items-center justify-between p-4 rounded-2xl hover:bg-red-50 transition-all border border-transparent hover:border-red-100">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-red-50 text-red-600 p-3 rounded-xl group-hover/item:bg-red-600 group-hover/item:text-white transition-colors">
                                                <Lock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-red-700 font-bold text-sm uppercase tracking-widest">Security Center</h4>
                                                <p className="text-red-900/50 text-xs font-normal tracking-normal normal-case mt-0.5">Important fraud and institutional scam warnings.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="flex items-center gap-2 lg:gap-4 relative z-20 flex-shrink-0">
                    {/* Only show Login text on desktop as mobile has user icon */}
                    <button
                        onClick={() => setIsPortalOpen(true)}
                        className="hidden lg:block text-xs font-bold uppercase tracking-widest text-[#0A1A3A] hover:text-blue-600 transition-colors"
                    >
                        Sign In
                    </button>
                    {/* Always ensure contact us acts as primary CTA inside nav */}
                    <Link href="/contact" className="hidden md:block bg-[#0A1A3A] hover:bg-blue-600 text-white px-5 py-2.5 lg:px-8 lg:py-3 rounded-full font-bold uppercase tracking-wider lg:tracking-widest text-[10px] lg:text-xs transition-colors shadow-lg shadow-[#0A1A3A]/20">
                        Contact
                    </Link>
                </div>
            </header>

            <ClientPortalModal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
        </div>
    );
}
