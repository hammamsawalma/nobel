"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CinematicRevealProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    className?: string;
}

/**
 * CinematicReveal
 * V2 Animation Philosophy (Phase 8):
 * We strictly avoid bouncy, fast spring physics used in V1. 
 * Old Money aesthetics demand slow, deliberate, heavy, and effortless fades.
 * We use an eased cubic bezier curve that feels like cinematic film pacing.
 */
export default function CinematicReveal({
    children,
    delay = 0,
    direction = "up",
    duration = 1.2,
    className = ""
}: CinematicRevealProps) {

    // Calculate initial offset based on direction
    const getInitialOffset = () => {
        switch (direction) {
            case "up": return { y: 30 };
            case "down": return { y: -30 };
            case "left": return { x: 30 };
            case "right": return { x: -30 };
            case "none": return { y: 0, x: 0 };
        }
    };

    const initialOffset = getInitialOffset();

    return (
        <motion.div
            initial={{ opacity: 0, ...initialOffset }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.16, 1, 0.3, 1] // Custom cinematic ease-out curve
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
