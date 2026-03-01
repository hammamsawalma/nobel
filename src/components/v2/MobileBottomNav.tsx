"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart3, TrendingUp, Building2, UserCircle } from "lucide-react";
import { useState } from "react";
import ClientPortalModal from "./ClientPortalModal";

export default function MobileBottomNav() {
    const pathname = usePathname();
    const [isPortalOpen, setIsPortalOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/", icon: <Home className="w-5 h-5" />, exact: true },
        { name: "Yield", href: "/fixed-income", icon: <BarChart3 className="w-5 h-5" /> },
        { name: "Equities", href: "/equities", icon: <TrendingUp className="w-5 h-5" /> },
        { name: "Firm", href: "/who-we-are", icon: <Building2 className="w-5 h-5" /> },
    ];

    return (
        <>
            <div className="md:hidden fixed bottom-0 left-0 w-full z-[90] bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]" style={{ paddingBottom: 'env(safe-area-inset-bottom, 16px)' }}>
                <div className="flex justify-between items-center px-4 py-2">
                    {navItems.map((item) => {
                        const isActive = item.exact ? pathname === item.href : pathname?.startsWith(item.href);
                        return (
                            <Link key={item.name} href={item.href} className="flex flex-col items-center justify-center gap-1 group w-16">
                                <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-400 group-hover:bg-gray-50 group-hover:text-gray-600'}`}>
                                    {item.icon}
                                </div>
                                <span className={`text-[10px] font-bold tracking-wide ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}

                    {/* Login Trigger */}
                    <button
                        onClick={() => setIsPortalOpen(true)}
                        className="flex flex-col items-center justify-center gap-1 group w-16"
                    >
                        <div className="p-2 rounded-xl transition-all text-gray-400 group-hover:bg-gray-50 group-hover:text-gray-600">
                            <UserCircle className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold tracking-wide text-gray-400">
                            Login
                        </span>
                    </button>
                </div>
            </div>

            <ClientPortalModal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
        </>
    );
}
