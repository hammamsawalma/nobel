import { ReactNode } from "react";
import { LenisProvider } from "@/components/v11/LenisProvider";
import AIChatWidget from "@/components/v11/AIChatWidget";
import MobileBottomNav from "@/components/v11/MobileBottomNav";

export default function V11Layout({ children }: { children: ReactNode }) {
    return (
        <LenisProvider>
            <div className="bg-white min-h-screen relative pb-20 md:pb-0">
                {children}
                <AIChatWidget />
                <MobileBottomNav />
            </div>
        </LenisProvider>
    );
}
