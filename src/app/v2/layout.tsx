import { ReactNode } from "react";
import V2Header from "@/components/v2/V2Header";
import V2Footer from "@/components/v2/V2Footer";
import { LenisProvider } from "@/components/v2/LenisProvider";

export default function V2Layout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <LenisProvider>
            <div className={`min-h-[100svh] bg-noble-charcoal text-noble-ivory font-sans relative flex flex-col`}>

                {/* 
                MASTERPIECE V2 GLOBAL CANVAS 
                Instead of flat black, we use a deep espresso/charcoal with a vignette 
                */}

                {/* The "Gilded Age" Dark Vignette (Deepens the corners) */}
                <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-noble-obsidian)_100%)] opacity-80" />

                {/* Subtle paper/leather texture */}
                <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" />

                <V2Header />

                {/* Actual Page Content */}
                <main className="relative z-10 flex-grow">
                    {children}
                </main>

                <V2Footer />
            </div>
        </LenisProvider>
    );
}
