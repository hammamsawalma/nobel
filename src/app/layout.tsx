import type { Metadata } from 'next';
import { Outfit, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { ReactNode } from "react";
import MobileBottomNav from "@/components/v1/MobileBottomNav";

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });
const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-serif',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Nobel Private Wealth',
    description: 'Institutional-grade wealth management for Australian investors.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={`${outfit.variable} ${cormorantGaramond.variable}`}>
            <body className="antialiased">
                <div className="bg-white min-h-screen relative pb-20 md:pb-0">
                    {children}
                    <MobileBottomNav />
                </div>
            </body>
        </html>
    );
}
