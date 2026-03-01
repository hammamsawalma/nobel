"use client";

import Link from 'next/link';
import { useState } from 'react';
import ClientPortalModal from '@/components/v11/ClientPortalModal';

export default function V11Header() {
    const [isPortalOpen, setIsPortalOpen] = useState(false);
    return (
        <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 md:px-8">
            <header className="w-full max-w-7xl bg-white/95 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full px-8 py-4 flex justify-between items-center text-[#0A1A3A] border border-gray-100">
                <div className="font-black text-2xl tracking-tighter cursor-pointer">
                    <Link href="/variant-11">
                        NOBEL <span className="text-gray-400 font-light">| WEALTH</span>
                    </Link>
                </div>
                <nav className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-gray-500">
                    <Link href="/variant-11/fixed-income" className="hover:text-[#0A1A3A] transition-colors">Yield Matrix</Link>
                    <Link href="/variant-11/who-we-are" className="hover:text-[#0A1A3A] transition-colors">Custodial Tech</Link>
                    <Link href="/variant-11/equities" className="hover:text-[#0A1A3A] transition-colors">Advisory Node</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsPortalOpen(true)}
                        className="hidden lg:block text-xs font-bold uppercase tracking-widest text-[#0A1A3A] hover:text-blue-600 transition-colors"
                    >
                        Client Login
                    </button>
                    <button className="bg-[#0A1A3A] hover:bg-[#1A2A4A] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-colors shadow-lg shadow-[#0A1A3A]/20">
                        Initialize Contact
                    </button>
                </div>
            </header>

            <ClientPortalModal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
        </div>
    );
}
