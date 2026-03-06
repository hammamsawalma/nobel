"use client";

import CinematicReveal from "@/components/v2/CinematicReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Scale, Anchor } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// SVGs and components 
const BondLadderSVG = () => (
    <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
            <linearGradient id="goldGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#4a3e1c" />
                <stop offset="50%" stopColor="#eec23d" />
                <stop offset="100%" stopColor="#fdf6d8" />
            </linearGradient>
            <linearGradient id="glowEffect" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(238,194,61,0.2)" />
                <stop offset="100%" stopColor="transparent" />
            </linearGradient>
        </defs>

        {/* Base Grid */}
        <line x1="100" y1="350" x2="750" y2="350" stroke="#4a3e1c" strokeWidth="1" opacity="0.5" />
        <line x1="100" y1="250" x2="750" y2="250" stroke="#4a3e1c" strokeWidth="1" strokeDasharray="5,5" opacity="0.2" />
        <line x1="100" y1="150" x2="750" y2="250" stroke="#4a3e1c" strokeWidth="1" strokeDasharray="5,5" opacity="0.2" />
        <line x1="100" y1="50" x2="750" y2="50" stroke="#4a3e1c" strokeWidth="1" strokeDasharray="5,5" opacity="0.2" />

        <text x="70" y="355" fill="#8f918b" fontSize="12" fontFamily="sans-serif" className="tracking-widest" textAnchor="end">0.0%</text>
        <text x="70" y="255" fill="#8f918b" fontSize="12" fontFamily="sans-serif" className="tracking-widest" textAnchor="end">2.5%</text>
        <text x="70" y="155" fill="#8f918b" fontSize="12" fontFamily="sans-serif" className="tracking-widest" textAnchor="end">5.0%</text>
        <text x="70" y="55" fill="#8f918b" fontSize="12" fontFamily="sans-serif" className="tracking-widest" textAnchor="end">7.5%</text>

        <text x="80" y="20" fill="#eec23d" fontSize="10" fontFamily="sans-serif" className="tracking-[0.4em] uppercase font-bold">Yield To Maturity (YTM)</text>
        <text x="750" y="380" fill="#eec23d" fontSize="10" fontFamily="sans-serif" className="tracking-[0.4em] uppercase font-bold" textAnchor="end">Duration (Years)</text>

        {/* Ladder Bars - Animated Height */}
        <g strokeWidth="0">
            {/* 1Y - 4.5% */}
            <rect x="150" y="170" width="60" height="180" fill="url(#goldGradient)" />
            <rect x="150" y="180" width="60" height="170" fill="url(#glowEffect)" />
            <text x="180" y="375" fill="#e4e0d4" fontSize="14" fontFamily="sans-serif" textAnchor="middle">1Y</text>
            <text x="180" y="155" fill="#eec23d" fontSize="16" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">4.5%</text>

            {/* 3Y - 5.2% */}
            <rect x="270" y="142" width="60" height="208" fill="url(#goldGradient)" />
            <rect x="270" y="152" width="60" height="198" fill="url(#glowEffect)" />
            <text x="300" y="375" fill="#e4e0d4" fontSize="14" fontFamily="sans-serif" textAnchor="middle">3Y</text>
            <text x="300" y="127" fill="#eec23d" fontSize="16" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">5.2%</text>

            {/* 5Y - 5.8% */}
            <rect x="390" y="118" width="60" height="232" fill="url(#goldGradient)" opacity="0.9" />
            <rect x="390" y="128" width="60" height="222" fill="url(#glowEffect)" />
            <text x="420" y="375" fill="#e4e0d4" fontSize="14" fontFamily="sans-serif" textAnchor="middle">5Y</text>
            <text x="420" y="103" fill="#eec23d" fontSize="16" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">5.8%</text>

            {/* 7Y - 6.0% */}
            <rect x="510" y="110" width="60" height="240" fill="url(#goldGradient)" opacity="0.8" />
            <rect x="510" y="120" width="60" height="230" fill="url(#glowEffect)" />
            <text x="540" y="375" fill="#e4e0d4" fontSize="14" fontFamily="sans-serif" textAnchor="middle">7Y</text>
            <text x="540" y="95" fill="#eec23d" fontSize="16" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">6.0%</text>

            {/* 10Y - 6.2% */}
            <rect x="630" y="102" width="60" height="248" fill="url(#goldGradient)" opacity="0.7" />
            <rect x="630" y="112" width="60" height="238" fill="url(#glowEffect)" />
            <text x="660" y="375" fill="#e4e0d4" fontSize="14" fontFamily="sans-serif" textAnchor="middle">10Y</text>
            <text x="660" y="87" fill="#eec23d" fontSize="16" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">6.2%</text>
        </g>
    </svg>
);

export default function V2FixedIncomePage() {
    const heroRef = useRef(null);
    const { scrollYProgress: heroOpacity } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const contentOpacity = useTransform(heroOpacity, [0, 1], [1, 0]);

    return (
        <div className="bg-noble-charcoal text-noble-ivory font-sans pt-32 pb-24 selection:bg-noble-gold-500 selection:text-noble-charcoal min-h-screen">

            {/* HERO MODULE (Island-like framed feel) */}
            <section ref={heroRef} className="relative w-full h-[85vh] overflow-hidden mb-32 border-b border-noble-gold-900/60 perspective-1000">
                <Image
                    src="/images/v2/vintage_bank_lock.png"
                    alt="Ancestral Vault"
                    fill
                    className="object-cover z-0 opacity-20 grayscale scale-105"
                    priority
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-noble-charcoal via-noble-charcoal/80 to-transparent" />
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-noble-charcoal via-noble-charcoal/50 to-transparent" />

                <motion.div style={{ opacity: contentOpacity }} className="relative z-10 h-full flex items-center">
                    <div className="px-6 lg:px-12 max-w-7xl mx-auto w-full">
                        <CinematicReveal delay={0.2}>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-12 h-[1px] bg-noble-gold-500" />
                                <span className="text-[9px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold border border-noble-gold-500/30 px-4 py-1.5 rounded-full bg-noble-charcoal/50 backdrop-blur-sm">Strategy I</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] text-noble-ivory font-display leading-[1.0] mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                                Fixed-Income <br />
                                <span className="italic text-transparent bg-clip-text bg-gradient-gold-foil">Portfolios.</span>
                            </h1>
                            <p className="text-noble-slate text-sm md:text-lg font-serif leading-loose tracking-wide max-w-2xl border-l-2 border-noble-gold-900/60 pl-6">
                                The impenetrable anchor of inter-generational wealth. Capital preservation guaranteed through structurally senior debt and strictly enforced duration mandates.
                            </p>
                        </CinematicReveal>
                    </div>
                </motion.div>

                {/* Floating Stat Chips on Hero */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 right-6 lg:right-12 z-20 flex flex-col gap-3"
                >
                    <motion.div whileHover={{ scale: 1.05, x: -10 }} className="flex items-center gap-4 bg-[#110d06]/80 backdrop-blur-md border border-noble-gold-500/40 rounded-xl px-6 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.6)] shadow-inner transition-transform">
                        <div className="w-2 h-2 rounded-full bg-noble-gold-500 animate-pulse-gold" />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-noble-ivory">Sovereign Treasuries</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05, x: -10 }} className="flex items-center gap-4 bg-[#110d06]/80 backdrop-blur-md border border-noble-gold-500/40 rounded-xl px-6 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.6)] shadow-inner transition-transform">
                        <div className="w-2 h-2 rounded-full bg-noble-slate" />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-noble-slate">IG Corporate Credit</span>
                    </motion.div>
                </motion.div>
            </section>

            {/* THE LADDER VISUALIZATION (Deep 3D Island) */}
            <section className="px-6 lg:px-12 max-w-6xl mx-auto mb-32 perspective-1000">
                <CinematicReveal>
                    <motion.div whileHover={{ scale: 1.01 }} className="bg-[#110d06]/60 backdrop-blur-2xl border border-noble-gold-500/40 rounded-3xl p-8 lg:p-12 shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-hidden relative transition-transform duration-700">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-display text-noble-ivory mb-4 tracking-wide italic">
                                Strategic Bond Laddering
                            </h2>
                            <p className="text-noble-slate text-xs uppercase tracking-[0.3em] font-bold">Optimizing Duration & Yield Curvature</p>
                        </div>

                        <div className="relative w-full aspect-video bg-[#0a0805] rounded-2xl border border-noble-gold-900/50 p-6 shadow-inner">
                            {/* SVG Ladder */}
                            <motion.div
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="w-full h-full origin-bottom"
                            >
                                <BondLadderSVG />
                            </motion.div>
                        </div>

                        <div className="mt-8 text-center px-4 md:px-20 border-t border-noble-gold-900/40 pt-8 mt-12 gap-8 flex flex-col md:flex-row justify-between items-center text-noble-slate text-xs tracking-wide leading-relaxed font-sans">
                            <p className="text-left flex-1">
                                By systematically laddering maturities, we insulate the portfolio against central bank interest rate volatility. Maturing tranches are continuously rolled into the optimal risk-adjusted node of the yield curve.
                            </p>
                            <span className="text-[10px] font-bold text-noble-gold-500 uppercase tracking-[0.3em] border border-noble-gold-500/30 px-6 py-3 rounded-lg flex-shrink-0 bg-noble-charcoal/40 shadow-inner">
                                View Treasury Data Room
                            </span>
                        </div>
                    </motion.div>
                </CinematicReveal>
            </section>

            {/* STRATEGY TENETS (3D Island Flow) */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32">
                <div className="flex items-center gap-4 mb-16 justify-center">
                    <div className="w-12 h-[1px] bg-noble-gold-900/50" />
                    <span className="text-xs uppercase tracking-[0.3em] text-noble-slate flex items-center gap-2 font-bold">
                        <ShieldCheck size={16} className="text-noble-gold-500" />
                        Defensive Parameters
                    </span>
                    <div className="w-12 h-[1px] bg-noble-gold-900/50" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Capital Priority", desc: "Equities dictate growth; debt mandates survival. We prioritize senior secured tranches in capital structures, ensuring client funds are legally first-in-line during any corporate restructuring or distress.", icon: <ShieldCheck size={24} />, risk: 1 },
                        { title: "Duration Governance", desc: "Long-duration bonds are functionally equity disguised as debt. We strictly cap overall portfolio duration, eliminating the catastrophic tail-risks associated with sudden, non-transitory inflation spikes.", icon: <Scale size={24} />, risk: 2 },
                        { title: "Yield Harvesting", desc: "Income is mathematically inevitable if default is avoided. By isolating fortress balance sheets and robust collateral, we lock in persistent, cash-flowing yields that consistently outpace CPI.", icon: <Anchor size={24} />, risk: 2 }
                    ].map((tenet, idx) => (
                        <CinematicReveal key={tenet.title} delay={idx * 0.2}>
                            <motion.div whileHover={{ y: -10 }} className="group border border-noble-gold-500/30 bg-noble-charcoal/80 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] shadow-inner flex flex-col h-full relative transition-transform duration-700">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-noble-gold-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

                                <div className="p-10 flex-1 flex flex-col">
                                    <div className="text-noble-gold-500/50 group-hover:text-noble-gold-400 transition-colors duration-500 mb-6 drop-shadow-lg">
                                        {tenet.icon}
                                    </div>
                                    <h3 className="text-2xl font-display text-noble-ivory mb-4 tracking-wide group-hover:text-noble-gold-300 transition-colors">{tenet.title}</h3>
                                    <p className="text-noble-slate text-base md:text-lg font-medium leading-relaxed font-sans tracking-wide flex-1 mb-8">{tenet.desc}</p>

                                    {/* Risk meter visualization */}
                                    <div className="border-t border-noble-gold-900/40 pt-4 flex items-center justify-between">
                                        <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-noble-gold-700">Volatility Profile</span>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map(level => (
                                                <div key={level} className={`w-3 h-1 rounded-sm ${level <= tenet.risk ? 'bg-noble-gold-500' : 'bg-[#110d06] border border-noble-gold-900/30'}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </CinematicReveal>
                    ))}
                </div>
            </section>

            {/* [NEW] SEC 4.5: Private & Corporate Credit (Content Doubling Phase 2) */}
            <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-20 mb-32 perspective-1000">
                <CinematicReveal direction="up" duration={1.5}>
                    <motion.div whileHover={{ scale: 1.01 }} className="bg-noble-charcoal/50 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl p-8 lg:p-16 shadow-[0_40px_80px_rgba(0,0,0,0.9)] shadow-inner relative overflow-hidden group">

                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-noble-gold-500/50 to-transparent" />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                            <div className="lg:col-span-5 relative z-10 hidden lg:block perspective-1000">
                                <motion.div whileHover={{ rotateY: 5 }} className="relative h-[480px] w-full rounded-2xl overflow-hidden border border-noble-gold-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-transform duration-700">
                                    <Image
                                        src="/images/v2/gold_bullion_vault_1772830269055.png"
                                        alt="Vault Security"
                                        fill
                                        className="object-cover saturate-50"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-noble-charcoal/80 to-transparent" />
                                </motion.div>
                            </div>

                            <div className="lg:col-span-7 lg:pl-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-8 h-[1px] bg-noble-gold-500/50" />
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">Alternative Yield</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display text-noble-ivory italic leading-tight mb-8 tracking-wide drop-shadow-xl">
                                    Private Credit Expansion.
                                </h2>
                                <p className="text-noble-slate font-serif font-light leading-loose tracking-wide mb-6">
                                    As traditional banks retreat from middle-market corporate lending due to Basel III capital requirements, a distinct vacuum has emerged. Noble Rock steps into this void as a direct senior lender.
                                </p>
                                <p className="text-noble-slate font-serif font-light leading-loose tracking-wide mb-10">
                                    This provides our clients with highly illiquid, but exceptionally compensated floating-rate yields (SOFR + 600bps), fully secured entirely by the underlying corporate enterprise value and hard assets.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border hover:-translate-y-2 transition-transform duration-300 border-noble-gold-900/50 bg-[#110d06]/60 rounded-xl p-6 shadow-inner text-center">
                                        <div className="font-display text-noble-gold-400 text-3xl mb-2 italic">1.1x</div>
                                        <div className="text-[8px] uppercase tracking-[0.3em] text-noble-ivory font-bold mb-2">Collateral Coverage</div>
                                        <p className="text-[10px] text-noble-slate leading-relaxed">Hard physical assets backing the loan.</p>
                                    </div>
                                    <div className="border hover:-translate-y-2 transition-transform duration-300 border-noble-gold-900/50 bg-[#110d06]/60 rounded-xl p-6 shadow-inner text-center">
                                        <div className="font-display text-noble-gold-400 text-3xl mb-2 italic">Floating</div>
                                        <div className="text-[8px] uppercase tracking-[0.3em] text-noble-ivory font-bold mb-2">Rate Structure</div>
                                        <p className="text-[10px] text-noble-slate leading-relaxed">Inherently hedged against hiking cycles.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </CinematicReveal>
            </section>

            {/* FLOW NAVIGATION FOOTER */}
            <section className="border-t border-noble-gold-900/30 bg-[#110d06]">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="grid grid-cols-2 w-full divide-x divide-noble-gold-900/30">
                        <Link href="/v2/wealth-strategies" className="group p-12 lg:p-16 hover:bg-noble-gold-900/10 transition-colors duration-500 flex flex-col justify-center relative overflow-hidden text-center items-center">
                            <span className="text-[9px] uppercase tracking-[0.4em] text-noble-slate mb-4 group-hover:text-noble-gold-500 transition-colors flex items-center gap-3 font-bold">
                                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Previous
                            </span>
                            <span className="font-display text-2xl lg:text-4xl text-noble-ivory group-hover:text-noble-gold-300 transition-colors italic">Wealth <br />Overview</span>
                        </Link>

                        <Link href="/v2/wealth-strategies/equities" className="group p-12 lg:p-16 hover:bg-noble-gold-900/10 transition-colors duration-500 flex flex-col justify-center relative overflow-hidden text-center items-center">
                            <span className="text-[9px] uppercase tracking-[0.4em] text-noble-slate mb-4 group-hover:text-noble-gold-500 transition-colors flex items-center gap-3 font-bold">
                                Next Mandate <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </span>
                            <span className="font-display text-2xl lg:text-4xl text-noble-ivory group-hover:text-noble-gold-300 transition-colors italic">Strategic <br />Equities</span>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
