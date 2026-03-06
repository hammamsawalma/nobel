"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function V2DataChart() {
    // We simulate a strict, monochromatic data visualization with gold highlights
    const [hoveredNode, setHoveredNode] = useState<number | null>(null);

    const dataPoints = [
        { label: "Q1 '25", value: 45, yield: "+1.2%" },
        { label: "Q2 '25", value: 52, yield: "+1.8%" },
        { label: "Q3 '25", value: 38, yield: "+0.9%" },
        { label: "Q4 '25", value: 65, yield: "+2.4%" },
        { label: "Q1 '26", value: 72, yield: "+3.1%" },
        { label: "Q2 '26", value: 85, yield: "+4.2%" },
        { label: "Q3 '26", value: 80, yield: "+3.8%" },
    ];

    return (
        <div className="w-full bg-noble-charcoal/30 border border-noble-gold-900/30 p-8 md:p-12 relative overflow-hidden group">
            {/* Grid Lines */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex flex-col justify-between py-12">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-full h-[1px] bg-noble-parchment"></div>
                ))}
            </div>

            <div className="relative z-10">
                <div className="flex justify-between items-end mb-12 border-b border-noble-gold-900/40 pb-4">
                    <div>
                        <h3 className="font-display text-2xl md:text-3xl text-noble-ivory italic tracking-wide">Absolute Return Trajectory</h3>
                        <p className="text-[9px] uppercase tracking-[0.3em] text-noble-slate mt-4">Aggregate Model Portfolio Performance</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-gold-foil tracking-widest leading-none drop-shadow-sm">+12.4%</div>
                        <div className="text-[9px] uppercase tracking-[0.2em] text-noble-slate mt-4">Trailing 24 Months</div>
                    </div>
                </div>

                {/* The Chart (Minimalist Bar/Line Hybrid) */}
                <div className="h-64 flex items-end justify-between gap-2 md:gap-4 relative pt-10">
                    {dataPoints.map((point, i) => (
                        <div
                            key={i}
                            className="w-full h-full flex flex-col items-center justify-end group/bar relative"
                            onMouseEnter={() => setHoveredNode(i)}
                            onMouseLeave={() => setHoveredNode(null)}
                        >
                            {/* Value Tooltip (Appears on Hover) */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: hoveredNode === i ? 1 : 0, y: hoveredNode === i ? 0 : 10 }}
                                className="absolute top-0 -translate-y-full bg-noble-charcoal border border-noble-gold-600/50 text-noble-gold-500 text-[10px] uppercase tracking-widest px-3 py-1 pointer-events-none shadow-xl z-20"
                            >
                                {point.yield}
                            </motion.div>

                            {/* The Column */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${point.value}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`w-full max-w-[40px] border-b border-noble-gold-500 transition-colors duration-500 shadow-[0_0_15px_rgba(212,175,55,0.05)] ${hoveredNode === i ? 'bg-gradient-to-t from-noble-gold-900/40 to-noble-gold-600/20 border-noble-gold-400' : 'bg-transparent border-t border-x border-noble-gold-900/40'
                                    }`}
                            ></motion.div>

                            {/* X-Axis Label */}
                            <div className={`mt-6 text-[9px] font-bold uppercase tracking-widest transition-colors duration-500 ${hoveredNode === i ? 'text-noble-parchment' : 'text-noble-slate/50'
                                }`}>
                                {point.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
