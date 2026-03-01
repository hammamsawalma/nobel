"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, UserCircle, Menu, X, ChevronRight, BarChart3, TrendingUp, HeartHandshake, ShieldCheck, FileText, BookOpen, Lock, Building2 } from "lucide-react";
import { useState, useEffect } from "react";
import ClientPortalModal from "./ClientPortalModal";

export default function MobileBottomNav() {
    const pathname = usePathname();
    const [isPortalOpen, setIsPortalOpen] = useState(false);
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

    // Close menu automatically on route change if a link is clicked
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <>
            {/* 1. BOTTOM FLOATING BAR */}
            <div className="md:hidden fixed bottom-0 left-0 w-full z-[90] bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]" style={{ paddingBottom: 'env(safe-area-inset-bottom, 16px)' }}>
                <div className="flex justify-between items-center px-4 py-2">

                    <Link href="/" className="flex flex-col items-center justify-center gap-1 group w-16">
                        <div className={`p-2 rounded-xl transition-all ${pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-400 group-hover:bg-gray-50 group-hover:text-gray-600'}`}>
                            <Home className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-bold tracking-wide ${pathname === '/' ? 'text-blue-600' : 'text-gray-400'}`}>Home</span>
                    </Link>

                    <Link href="/journal" className="flex flex-col items-center justify-center gap-1 group w-16">
                        <div className={`p-2 rounded-xl transition-all ${pathname?.startsWith('/journal') ? 'bg-blue-50 text-blue-600' : 'text-gray-400 group-hover:bg-gray-50 group-hover:text-gray-600'}`}>
                            <FileText className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-bold tracking-wide ${pathname?.startsWith('/journal') ? 'text-blue-600' : 'text-gray-400'}`}>Journal</span>
                    </Link>

                    <button onClick={() => setIsPortalOpen(true)} className="flex flex-col items-center justify-center gap-1 group w-16">
                        <div className="p-2 rounded-xl transition-all text-gray-400 group-hover:bg-gray-50 group-hover:text-gray-600">
                            <UserCircle className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold tracking-wide text-gray-400">Login</span>
                    </button>

                    <button onClick={() => setIsMenuOpen(true)} className="flex flex-col items-center justify-center gap-1 group w-16">
                        <div className={`p-2 rounded-xl transition-all ${isMenuOpen ? 'bg-[#0A1A3A] text-white' : 'text-gray-400 group-hover:bg-gray-50 group-hover:text-gray-600'}`}>
                            <Menu className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-bold tracking-wide ${isMenuOpen ? 'text-[#0A1A3A]' : 'text-gray-400'}`}>Menu</span>
                    </button>

                </div>
            </div>

            {/* 2. FULL SCREEN DRAWER MENU */}
            <div className={`fixed inset-0 z-[100] bg-white transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100 bg-white">
                    <div className="font-black text-xl tracking-tighter text-[#0A1A3A]">
                        NOBEL <span className="text-gray-400 font-light">| WEALTH</span>
                    </div>
                    <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-[#0A1A3A] transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Drawer Scrollable Content */}
                <div className="h-[calc(100vh-80px)] overflow-y-auto pb-32">

                    {/* Top Level Nav */}
                    <div className="px-6 py-6 border-b border-gray-100">
                        <Link href="/who-we-are" className="flex items-center justify-between py-4 group">
                            <div className="flex items-center gap-4 text-[#0A1A3A] font-bold text-lg">
                                <Building2 className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" /> Who We Are
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                        </Link>
                        <Link href="/how-to-invest" className="flex items-center justify-between py-4 group">
                            <div className="flex items-center gap-4 text-[#0A1A3A] font-bold text-lg">
                                <TrendingUp className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" /> How to Invest
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                        </Link>
                    </div>

                    {/* Solutions Section */}
                    <div className="px-6 py-6 border-b border-gray-100 bg-gray-50/50">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Investment Solutions</h3>
                        <div className="grid gap-2">
                            <Link href="/fixed-income" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 transition-colors">
                                <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl"><BarChart3 className="w-5 h-5" /></div>
                                <div><h4 className="text-[#0A1A3A] font-bold text-sm">Fixed Income</h4><p className="text-gray-500 text-xs mt-0.5">Structured bonds & fixed interest</p></div>
                            </Link>
                            <Link href="/equities" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 transition-colors">
                                <div className="bg-purple-50 text-purple-600 p-2.5 rounded-xl"><TrendingUp className="w-5 h-5" /></div>
                                <div><h4 className="text-[#0A1A3A] font-bold text-sm">Equities</h4><p className="text-gray-500 text-xs mt-0.5">Global market exposure</p></div>
                            </Link>
                            <Link href="/financial-advice" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 transition-colors">
                                <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl"><HeartHandshake className="w-5 h-5" /></div>
                                <div><h4 className="text-[#0A1A3A] font-bold text-sm">Financial Advice</h4><p className="text-gray-500 text-xs mt-0.5">Strategic wealth structuring</p></div>
                            </Link>
                            <Link href="/retirement-planning" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 transition-colors">
                                <div className="bg-orange-50 text-orange-600 p-2.5 rounded-xl"><ShieldCheck className="w-5 h-5" /></div>
                                <div><h4 className="text-[#0A1A3A] font-bold text-sm">Retirement</h4><p className="text-gray-500 text-xs mt-0.5">Capital preservation planning</p></div>
                            </Link>
                        </div>
                    </div>

                    {/* Resources Section */}
                    <div className="px-6 py-6 border-b border-gray-100">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Knowledge & Resources</h3>
                        <div className="space-y-4">
                            <Link href="/journal" className="flex items-center gap-4 group">
                                <div className="bg-gray-100 text-gray-600 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors"><FileText className="w-4 h-4" /></div>
                                <span className="text-sm font-bold text-[#0A1A3A]">The Journal</span>
                            </Link>
                            <Link href="/insights" className="flex items-center gap-4 group">
                                <div className="bg-gray-100 text-gray-600 p-2 rounded-lg group-hover:bg-[#0A1A3A] group-hover:text-white transition-colors"><Compass className="w-4 h-4" /></div>
                                <span className="text-sm font-bold text-[#0A1A3A]">Market Insights</span>
                            </Link>
                            <Link href="/glossary" className="flex items-center gap-4 group">
                                <div className="bg-gray-100 text-gray-600 p-2 rounded-lg"><BookOpen className="w-4 h-4" /></div>
                                <span className="text-sm font-bold text-[#0A1A3A]">Financial Glossary</span>
                            </Link>
                            <Link href="/scam-alert" className="flex items-center gap-4 group">
                                <div className="bg-red-50 text-red-600 p-2 rounded-lg"><Lock className="w-4 h-4" /></div>
                                <span className="text-sm font-bold text-red-600">Security Center</span>
                            </Link>
                        </div>
                    </div>

                    {/* Footer Contact */}
                    <div className="px-6 py-8">
                        <Link href="/contact" className="w-full flex justify-center items-center bg-[#0A1A3A] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#1A2A4A] transition-colors shadow-lg">
                            Contact Support
                        </Link>
                    </div>

                </div>
            </div>

            <ClientPortalModal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
        </>
    );
}
