import { ReactNode } from "react";
import { LenisProvider } from "@/components/v11/LenisProvider";
import AIChatWidget from "@/components/v11/AIChatWidget";

export default function V11Layout({ children }: { children: ReactNode }) {
    return (
        <LenisProvider>
            <div className="bg-white min-h-screen relative">
                {children}
                <AIChatWidget />
            </div>
        </LenisProvider>
    );
}
