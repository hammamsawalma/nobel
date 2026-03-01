"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Variant5NorthSydney() {
    const containerRef = useRef(null);

    // Create different parallax speeds for various glass cards
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const yFast = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const yMedium = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const ySlow = useTransform(scrollYProgress, [0, 1], [0, -200]);

    // Fade out video slightly as we scroll deep
    const videoOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.4, 0.2]);

    return (
        <div className="font-sans text-white min-h-[300vh]" ref={containerRef}>
            <Header />

            {/* FIXED BACKGROUND VIDEO */}
            <motion.div
                className="fixed inset-0 w-full h-full z-0"
                style={{ opacity: videoOpacity }}
            >
                <video
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover filter brightness-75"
                >
                    <source src="/vid/aerial-australia-north-sydney-april-2018-partly-cloudy-day-30mm-4k-inspire-2-p-SBV-323048194-preview.mp4" type="video/mp4" />
                </video>
                {/* Subtle gradient overlay to ensure text legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900/80"></div>
            </motion.div>

            {/* FOREGROUND CONTENT (Scrolls over the fixed video) */}
            <div className="relative z-10 w-full pt-[20vh] pb-[30vh]">

                {/* SECTION 1: Hero */}
                <div className="max-w-7xl mx-auto px-6 mb-[50vh] text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 drop-shadow-2xl">
                            North Sydney <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Elevation</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-slate-200 drop-shadow-lg max-w-2xl mx-auto">
                            Ascending beyond traditional wealth management through transparent, data-driven fixed income allocation.
                        </p>
                    </motion.div>
                </div>

                {/* SECTIONS 2-6: Parallax Glass Cards */}
                <div className="max-w-7xl mx-auto px-6 relative h-[200vh]">

                    {/* Card 1: Fast Parallax (Left) */}
                    <motion.div
                        style={{ y: yFast }}
                        className="absolute top-0 left-0 md:left-[10%] w-[90%] md:w-[400px] bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl"
                    >
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-6 text-2xl">🏛️</div>
                        <h2 className="text-2xl font-bold mb-4">Capital Custody</h2>
                        <p className="text-slate-300 font-light leading-relaxed mb-6">Your wealth is never co-mingled. It resides in standalone, ASIC-regulated custodial accounts ensuring profound structural integrity.</p>
                        <div className="text-xs uppercase tracking-widest text-blue-300 font-bold">Secure Asset Framework</div>
                    </motion.div>

                    {/* Card 2: Medium Parallax (Right) */}
                    <motion.div
                        style={{ y: yMedium }}
                        className="absolute top-[30vh] right-0 md:right-[5%] w-[90%] md:w-[450px] bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl"
                    >
                        <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-6 text-2xl">📈</div>
                        <h2 className="text-2xl font-bold mb-4">Yield Mechanics</h2>
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center text-sm text-slate-300 border-b border-white/10 pb-2">
                                <span>Corporate Debt (Tier 1)</span>
                                <span className="text-green-400 font-mono">5.2% - 6.5%</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-slate-300 border-b border-white/10 pb-2">
                                <span>Sovereign Bonds</span>
                                <span className="text-green-400 font-mono">3.8% - 4.5%</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-slate-300 pb-2">
                                <span>Cash Equivalent</span>
                                <span className="text-green-400 font-mono">4.1%</span>
                            </div>
                        </div>
                        <p className="text-slate-300 font-light leading-relaxed text-sm">We engineer predictable cash flows without exposing principal to equity market drawdowns.</p>
                    </motion.div>

                    {/* Card 3: Slow Parallax (Center) */}
                    <motion.div
                        style={{ y: ySlow }}
                        className="absolute top-[70vh] left-1/2 -ml-[45%] md:-ml-[350px] w-[90%] md:w-[700px] bg-slate-900/60 backdrop-blur-2xl border border-blue-500/30 p-12 rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.2)] text-center"
                    >
                        <h2 className="text-4xl font-light mb-8">The Fiduciary Standard</h2>
                        <p className="text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-xl mx-auto">
                            A pure alignment of interests. No commissions, no hidden fees, and no proprietary product pushing. We sit entirely on your side of the table.
                        </p>
                        <div className="grid grid-cols-3 gap-6 text-center border-t border-white/10 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-blue-400">$2.5B</div>
                                <div className="text-xs text-slate-400 uppercase tracking-widest mt-2">Advised</div>
                            </div>
                            <div className="border-x border-white/10">
                                <div className="text-3xl font-bold text-blue-400">100%</div>
                                <div className="text-xs text-slate-400 uppercase tracking-widest mt-2">Transparent</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-400">0%</div>
                                <div className="text-xs text-slate-400 uppercase tracking-widest mt-2">Commission</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* SECTION 7: Contact Form inside a grand glass card */}
                <div className="max-w-3xl mx-auto px-6 mt-[20vh] relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/40 backdrop-blur-xl border border-white/20 p-12 rounded-3xl shadow-2xl text-center"
                    >
                        <h2 className="text-3xl font-bold mb-4">Request a Consultation</h2>
                        <p className="text-slate-300 mb-8 font-light">
                            Our wealth architects will prepare a preliminary portfolio analysis based on your current retirement trajectory.
                        </p>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors" />
                                <input type="text" placeholder="Last Name" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors" />
                            </div>
                            <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors" />
                            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded-xl transition-colors mt-4">
                                Submit Request
                            </button>
                        </form>
                    </motion.div>
                </div>

            </div>
                    <Footer />
        </div>
    );
}
