"use client";

import { usePathname } from 'next/navigation';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function GlobalUIRenderer({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Conditionally hide the global header and footer on variant pages
    // So they can implement their own bespoke navigation
    const isVariantPage = pathname?.startsWith('/variant-');

    return (
        <>
            {!isVariantPage && <Header />}
            <main className="flex-grow flex flex-col">
                {children}
            </main>
            {!isVariantPage && <Footer />}
        </>
    );
}
