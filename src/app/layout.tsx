import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from "react";
import { LenisProvider } from "@/components/v2/LenisProvider";
import AIChatWidget from "@/components/v2/AIChatWidget";
import MobileBottomNav from "@/components/v2/MobileBottomNav";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Nobel Private Wealth',
    description: 'Next-generation fixed income architecture for Australian investors.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
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
