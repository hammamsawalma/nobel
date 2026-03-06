import { ReactNode } from "react";
import V2Header from "@/components/v2/V2Header";
import V2Footer from "@/components/v2/V2Footer";
import V2InquiryStrip from "@/components/v2/V2InquiryStrip";
import ScrollProgressBar from "@/components/v2/ScrollProgressBar";
import PageTransition from "@/components/v2/PageTransition";
import { LenisProvider } from "@/components/v2/LenisProvider";
import MobileBottomNav from "@/components/v2/MobileBottomNav";

export default function V2Layout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <LenisProvider>
            <div className={`min-h-[100svh] bg-noble-charcoal text-noble-ivory font-sans relative flex flex-col`}>

                {/* Gold scroll progress bar — fixed to top of viewport */}
                <ScrollProgressBar />

                {/*
                MASTERPIECE V2 GLOBAL CANVAS
                Deep espresso/charcoal with a radial vignette to deepen corners
                */}

                {/* The "Gilded Age" Dark Vignette */}
                <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-noble-obsidian)_100%)] opacity-80" />

                {/* Subtle paper/leather texture */}
                <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: '128px 128px' }} />

                <V2Header />

                {/* Page content — wrapped in cinematic page transition */}
                <main className="relative z-10 flex-grow">
                    <PageTransition>
                        {children}
                    </PageTransition>
                </main>

                {/* Inquiry CTA strip — appears above footer on every page */}
                <V2InquiryStrip />

                <V2Footer />

                {/* Mobile bottom nav — visible only on small screens */}
                <MobileBottomNav />
            </div>
        </LenisProvider>
    );
}
