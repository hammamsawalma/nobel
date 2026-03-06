import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ReactNode } from "react";
import { LenisProvider } from "@/components/v2/LenisProvider";
import AIChatWidget from "@/components/v2/AIChatWidget";
import MobileBottomNav from "@/components/v2/MobileBottomNav";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-serif',
    display: 'swap',
});
const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-display',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Nobel Private Wealth',
    description: 'Next-generation fixed income architecture for Australian investors.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable} ${playfair.variable}`}>
            <body className="antialiased">
                <LenisProvider>
                    <div className="bg-white min-h-screen relative pb-20 md:pb-0">
                        {children}
                        <AIChatWidget />
                        <MobileBottomNav />
                    </div>
                </LenisProvider>
            </body>
        </html>
    );
}
