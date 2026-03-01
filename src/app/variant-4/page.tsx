"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Variant4HarbourMomentum() {
    const containerRef = useRef(null);

    // Track scroll for the entire container to control the sticky right-side video
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    // Transform video scale based on scroll depth
    const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.2]);
    const videoFilter = useTransform(scrollYProgress, [0, 0.5, 1], ["brightness(1)", "brightness(0.6) contrast(1.2)", "brightness(0.4) saturate(0)"]);

    // Staggering blocks on the left
    const blocks = [
        { id: "01", title: "Currents of Capital", desc: "Just as the harbour filters the ocean's raw power into navigable channels, we filter global market volatility into predictable, regulated yield for Australian investors." },
        { id: "02", title: "Institutional Custody", desc: "No capital is deployed without adhering to profound ASIC structural protections. Every tier of fixed income is heavily scrutinized by quantitative models." },
        { id: "03", title: "Algorithmic Drift", desc: "Exploiting micro-inefficiencies in corporate debt spreads while maintaining sovereign bond safety buffers. We do not gamble; we engineer momentum." },
        { id: "04", title: "Fiduciary Engine", desc: "Operated by a crew without conflict of interest. No commissions, no aggressive sales. Only the mathematical alignment of your preservation." },
        { id: "05", title: "Data Transparency", desc: "Real-time ledger access. If the current changes, you know exactly how the ship is steered via our proprietary secure client portal." }
    ];

    return (
        <div className="font-sans bg-slate-900 text-white min-h-screen selection:bg-cyan-500 selection:text-white" ref={containerRef}>

            {/* Mobile-only Hero (hidden on lg) */}
            <div className="lg:hidden relative h-screen w-full flex items-center justify-center overflow-hidden">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover filter brightness-50"
                >
                    <source src="/vid/aerial-video-sydney-australia-april-2018-SBV-322996253-preview.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-5xl font-light tracking-tight mb-4">Harbour Momentum</h1>
                    <p className="text-slate-300">Fluid wealth management for Sydney.</p>
                </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 relative">

                {/* LEFT COLUMN: Scrollable Content (7 Sections total across the page) */}
                <div className="col-span-1 pt-[20vh] pb-[20vh] px-12 xl:px-24">

                    {/* 1. Desktop Hero Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-[50vh]"
                    >
                        <h1 className="text-6xl xl:text-8xl font-medium tracking-tight leading-[1.1] mb-8">
                            Relentless <br /><span className="text-cyan-400 font-serif italic">Momentum.</span>
                        </h1>
                        <p className="text-xl text-slate-400 font-light max-w-md leading-relaxed">
                            Australian wealth management that never rests. Capturing yield with the unstoppable force of the open ocean.
                        </p>
                        <div className="mt-12 h-32 border-l border-cyan-500/30 w-1">
                            <motion.div
                                animate={{ y: [0, 120, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="w-1 h-8 bg-cyan-400"
                            />
                        </div>
                    </motion.div>

                    {/* 2-6. Scrolling Block Sections */}
                    <div className="space-y-[40vh]">
                        {blocks.map((block, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-20%", amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative"
                            >
                                <div className="text-cyan-500/20 font-mono text-[8rem] leading-none absolute -top-16 -left-8 -z-10 font-black">{block.id}</div>
                                <h2 className="text-3xl xl:text-4xl font-medium mb-6">{block.title}</h2>
                                <p className="text-lg xl:text-xl text-slate-400 font-light leading-relaxed max-w-lg">{block.desc}</p>

                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100px" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="h-[1px] bg-cyan-500/50 mt-12"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* 7. Contact Terminal Formulation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-20%" }}
                        className="mt-[40vh]"
                    >
                        <h2 className="text-4xl font-light mb-8">Plot Your Course</h2>
                        <p className="text-slate-400 mb-8 max-w-sm">Diverting capital into deeply regulated, high-yielding Australian fixed income takes precision. Speak to a Nobel architect today.</p>

                        <form className="space-y-4 max-w-sm">
                            <input type="text" placeholder="Name" className="w-full bg-slate-800 border-none px-6 py-4 rounded text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
                            <input type="email" placeholder="Email" className="w-full bg-slate-800 border-none px-6 py-4 rounded text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
                            <button className="w-full bg-cyan-600 text-white font-bold py-4 rounded hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-900/50">
                                Initialize Dialogue
                            </button>
                        </form>
                    </motion.div>

                </div>

                {/* RIGHT COLUMN: Sticky Responsive Video */}
                <div className="col-span-1 border-l border-slate-800 relative">
                    <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
                        <motion.div
                            style={{ scale: videoScale, filter: videoFilter as any }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <video
                                autoPlay loop muted playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/vid/aerial-video-sydney-australia-april-2018-SBV-322996253-preview.mp4" type="video/mp4" />
                            </video>
                        </motion.div>

                        {/* Overlay Data HUD */}
                        <motion.div
                            className="relative z-10 grid grid-cols-2 gap-8 text-center bg-black/40 backdrop-blur-md p-12 rounded-2xl border border-white/10"
                        >
                            <div>
                                <div className="text-cyan-400 font-mono text-sm mb-2">TARGET YIELD</div>
                                <div className="text-4xl font-light">6.2%</div>
                            </div>
                            <div>
                                <div className="text-cyan-400 font-mono text-sm mb-2">REGULATION</div>
                                <div className="text-4xl font-light">ASIC</div>
                            </div>
                            <div className="col-span-2 pt-8 border-t border-white/10 mt-4">
                                <div className="text-cyan-400 font-mono text-sm mb-2">NETWORK STATUS</div>
                                <div className="text-xl font-light flex items-center justify-center gap-2">
                                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                    SECURE & ACTIVE
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
}
