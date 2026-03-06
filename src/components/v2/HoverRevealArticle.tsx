"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import { ReactNode } from "react";

interface HoverRevealArticleProps {
    category: string;
    title: string;
    description?: string;
    imageSrc?: string;
    previewImage?: string;
    className?: string;
    date?: string;
    children?: ReactNode;
}

export default function HoverRevealArticle({ category, title, description, imageSrc, previewImage, className = "", date, children }: HoverRevealArticleProps) {
    const resolvedImage = imageSrc || previewImage || "/images/v2/gilded_abstract_texture_v2_1772823845293.png";

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative group cursor-pointer border-b border-noble-espresso/20 pb-8 ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`transition-opacity duration-700 ${isHovered ? 'opacity-100 relative z-20' : 'opacity-80'}`}>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-noble-espresso font-bold uppercase tracking-[0.2em] text-[10px] block border-l-2 border-noble-espresso pl-3">
                        {category}
                    </span>
                    {date && <span className="text-[9px] uppercase tracking-widest text-noble-slate font-bold">{date}</span>}
                </div>
                <h4 className="text-3xl lg:text-4xl font-serif text-noble-charcoal leading-snug mb-6 group-hover:text-noble-gold-700 transition-colors duration-500">
                    {title}
                </h4>
                {children ? (
                    <div>{children}</div>
                ) : (
                    <p className="text-sm font-sans text-transparent bg-clip-text bg-gradient-to-br from-noble-charcoal to-noble-slate font-medium leading-relaxed max-w-xl">
                        {description}
                    </p>
                )}
            </div>

            {/* The Floating Image Reveal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.9,
                    y: isHovered ? 0 : 20
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-80 h-48 z-10 pointer-events-none shadow-2xl hidden md:block"
            >
                <div className="relative w-full h-full border border-noble-gold-900/50 p-1 bg-noble-charcoal">
                    <div className="relative w-full h-full overflow-hidden">
                        <Image
                            src={resolvedImage}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-noble-charcoal/20 mix-blend-multiply"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
