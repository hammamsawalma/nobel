"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            {/* Gold progress bar — pinned at the very top, above everything */}
            <motion.div
                className="fixed top-0 left-0 right-0 z-[9999] h-[2px] origin-left"
                style={{
                    scaleX,
                    background:
                        "linear-gradient(90deg, #B88900 0%, #EEC23D 40%, #FAE99A 60%, #EEC23D 80%, #B88900 100%)",
                    boxShadow: "0 0 12px rgba(238, 194, 61, 0.6)",
                }}
            />
        </>
    );
}
