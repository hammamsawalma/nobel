"use client";

import { motion, Variants } from "framer-motion";

interface StaggeredBlurTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function StaggeredBlurText({ text, className = "", delay = 0 }: StaggeredBlurTextProps) {
    const words = text.split(" ");

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    return (
        <motion.span
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`inline-block ${className}`}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={wordVariants}
                    className="inline-block mr-3 mb-2"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}
