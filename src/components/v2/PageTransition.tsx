"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: "easeOut",
                    },
                }}
                exit={{
                    opacity: 0,
                    y: -10,
                    transition: {
                        duration: 0.3,
                        ease: "easeIn",
                    },
                }}
            >
                {/* Dark gold curtain that sweeps away on page enter */}
                <motion.div
                    key={`curtain-${pathname}`}
                    className="fixed inset-0 z-[9998] pointer-events-none bg-noble-obsidian"
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { duration: 0.5, ease: "easeOut", delay: 0.05 },
                    }}
                />
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
