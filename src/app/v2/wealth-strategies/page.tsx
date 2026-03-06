"use client";

import CinematicReveal from "@/components/v2/CinematicReveal";
import V2DataChart from "@/components/v2/V2DataChart";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STRATEGIES = [
    {
        id: "fixed-income",
        title: "I. Fixed-Income Portfolios",
        subtitle: "Capital Preservation & Persistent Yield",
        desc: "Strictly constructed from sovereign debt, investment-grade corporate bonds, and inflation-linked treasuries. Designed to provide an anchor of stability and predictable cash flow regardless of macroeconomic volatility.",
        href: "/v2/wealth-strategies/fixed-income",
        bgImage: "/images/v2/marble_gold_veins_1772822929304.png",
        stats: [
            { label: "Target Yield", val: "4.5% - 6.2%" },
            { label: "Duration Risk", val: "Hedged" },
            { label: "Credit Quality", val: "AA Avg" },
        ],
        tags: ["Sovereigns", "IG Corporate", "TIPS"]
    },
    {
        id: "equities",
        title: "II. Strategic Equities",
        subtitle: "Asymmetric Upside Capture",
        desc: "A concentrated, conviction-driven allocation targeting global monopolies, strategic infrastructure, and scarce hard assets. We purchase businesses with impenetrable economic moats and generational pricing power.",
        href: "/v2/wealth-strategies/equities",
        bgImage: "/images/v2/equities_abstract_1772827138981.png",
        stats: [
            { label: "Target CAGR", val: "12% - 15%" },
            { label: "Max Drawdown", val: "Strict Limits" },
            { label: "Active Share", val: ">85%" },
        ],
        tags: ["Global Monopolies", "Hard Assets", "Sector Rotation"]
    },
    {
        id: "family-office",
        title: "III. Private & Family Office",
        subtitle: "Generational Architecture",
        desc: "Bespoke structural engineering for Ultra-High-Net-Worth families. Encompassing legacy trust administration, philanthropic conduit structuring, and next-generation financial stewardship.",
        href: "/v2/wealth-strategies/family-office",
        bgImage: "/images/v2/gilded_abstract_texture_v2_1772823845293.png",
        stats: [
            { label: "Structuring", val: "Bespoke" },
            { label: "Timeline", val: "Generational" },
            { label: "Jurisdiction", val: "Global Tier-1" },
        ],
        tags: ["Trusts", "Philanthropy", "Succession"]
    }
];

export default function WealthStrategiesOverview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const indicatorY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="bg-noble-charcoal text-noble-ivory font-sans pt-32 pb-24 selection:bg-noble-gold-500 selection:text-noble-charcoal" ref={containerRef}>

            {/* HERO SECTION */}
            <section className="relative w-full overflow-hidden mb-32 pb-20 border-b border-noble-gold-900/40">
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-noble-gold-500/50 to-transparent" />
                {/* Diagonal background rule */}
                <div className="absolute top-[-20%] right-[-10%] w-[120%] h-[1px] bg-noble-gold-500/20 rotate-12 transform origin-right pointer-events-none" />

                <div className="px-6 lg:px-12 max-w-7xl mx-auto z-10 relative">
                    <CinematicReveal delay={0.2}>
                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-12 h-[1px] bg-noble-gold-500" />
                            <span className="text-[9px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">The Mandate</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-[6rem] text-noble-ivory font-display leading-[1.05] mb-8">
                            Wealth <br />
                            <span className="italic text-transparent bg-clip-text bg-gradient-gold-foil">Architecture.</span>
                        </h1>
                    </CinematicReveal>

                    <CinematicReveal delay={0.4} direction="up">
                        <motion.div whileHover={{ scale: 1.02 }} className="max-w-3xl bg-noble-charcoal/60 backdrop-blur-xl border border-noble-gold-500/30 rounded-2xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.8)] shadow-inner">
                            <p className="text-noble-slate text-sm md:text-base font-serif leading-loose tracking-wide">
                                We do not distribute generic financial products. We engineer bespoke structural solutions. Every portfolio is mathematically calibrated to precise liquidity requirements, inter-generational timelines, and global macroeconomic realities.
                            </p>
                        </motion.div>
                    </CinematicReveal>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative flex">

                {/* LEFT RAIL SCROLL INDICATOR (Desktop) */}
                <div className="hidden lg:flex w-24 shrink-0 flex-col items-center relative mr-12 h-auto text-noble-slate">
                    <div className="sticky top-40 h-[60vh] flex flex-col items-center justify-between">
                        <div className="text-[10px] font-display italic text-noble-gold-500 mb-4">I</div>
                        <div className="w-[1px] flex-1 bg-noble-gold-900/30 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-noble-gold-400 to-transparent"
                                style={{ y: indicatorY }}
                            />
                        </div>
                        <div className="text-[10px] font-display italic text-noble-gold-500 mt-4">III</div>
                    </div>
                </div>

                {/* STRATEGY CARDS (Sticky Scrolling Islands) */}
                <div className="flex-1 perspective-1000">
                    <div className="space-y-32">
                        {STRATEGIES.map((strat, idx) => (
                            <CinematicReveal key={strat.id} delay={0.2} className="relative">
                                {/* Sticky container requires h-screen container to work properly, using simple relative positioning with large margins instead for a cleaner visual flow here, though can be made sticky if desired */}
                                <motion.div whileHover={{ scale: 1.01 }} className={`group relative w-full rounded-3xl overflow-hidden border border-noble-gold-500/30 bg-noble-charcoal/80 flex flex-col lg:flex-row shadow-[0_30px_60px_rgba(0,0,0,0.9)] shadow-inner sticky top-24 z-[${10 + idx}]`}>

                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-noble-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                    {/* Left Image Area */}
                                    <div className="w-full lg:w-2/5 h-64 lg:h-auto relative overflow-hidden border-b lg:border-b-0 lg:border-r border-noble-gold-900/40">
                                        <Image
                                            src={strat.bgImage}
                                            alt={strat.title}
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-1000 grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 duration-[2000ms]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-noble-charcoal to-transparent opacity-80" />

                                        <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                                            {strat.tags.map(tag => (
                                                <span key={tag} className="text-[8px] uppercase tracking-[0.4em] text-noble-ivory/80 border border-noble-gold-500/30 px-3 py-1.5 rounded-full bg-noble-charcoal/60 backdrop-blur-sm w-fit">{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Content Area */}
                                    <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
                                        <div>
                                            <h2 className="text-3xl md:text-5xl font-display text-noble-ivory mb-2 tracking-wide group-hover:text-noble-gold-400 transition-colors duration-500">
                                                {strat.title}
                                            </h2>
                                            <p className="text-sm font-display italic text-noble-gold-500 mb-8 tracking-widest uppercase">
                                                {strat.subtitle}
                                            </p>
                                            <p className="text-noble-slate text-sm leading-relaxed tracking-wide font-serif mb-10 max-w-xl">
                                                {strat.desc}
                                            </p>
                                        </div>

                                        {/* Strategy Stats Row */}
                                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-noble-gold-900/40 mb-10">
                                            {strat.stats.map(stat => (
                                                <div key={stat.label}>
                                                    <div className="text-[10px] uppercase tracking-[0.3em] text-noble-slate mb-2">{stat.label}</div>
                                                    <div className="text-noble-ivory font-display tracking-wider font-bold">{stat.val}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div>
                                            <Link
                                                href={strat.href}
                                                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 hover:text-noble-ivory transition-all group/link font-bold border border-noble-gold-500/30 rounded-xl px-6 py-4 bg-noble-gold-900/20 hover:bg-noble-gold-600/30"
                                            >
                                                Examine Blueprint
                                                <MoveRight size={14} className="group-hover/link:translate-x-1 group-hover/link:text-noble-gold-400 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </CinematicReveal>
                        ))}
                    </div>

                    {/* ENHANCED DATA VISUALIZATION SECTION (Island) */}
                    <div className="mt-40 mb-32 perspective-1000">
                        <CinematicReveal>
                            <motion.div whileHover={{ scale: 1.01 }} className="bg-noble-charcoal/60 backdrop-blur-3xl border border-noble-gold-500/40 rounded-3xl p-8 lg:p-16 shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_top_right,rgba(238,194,61,0.05)_0%,transparent_70%)] pointer-events-none" />

                                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-noble-gold-900/40 pb-12 gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-8 h-[1px] bg-noble-gold-500" />
                                            <span className="text-[9px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">Performance Architecture</span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl text-noble-ivory font-display italic tracking-wide">
                                            Capital Protection <br className="hidden md:block" />Metrics
                                        </h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-gold-foil mb-2 drop-shadow-lg">11.4%</div>
                                        <div className="text-[9px] uppercase tracking-[0.4em] text-noble-slate font-bold">Composite Yield (T-12)</div>
                                    </div>
                                </div>

                                <div className="w-full relative z-10">
                                    <V2DataChart />
                                </div>

                                {/* Qualifier strip below chart */}
                                <div className="mt-12 pt-8 border-t border-noble-gold-900/20 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-noble-slate">Audited independently by Tier-1 Accounting Partners.</span>
                                    <span className="text-[9px] uppercase tracking-[0.3em] text-noble-gold-700 font-bold px-4 py-2 bg-[#110d06] rounded border border-noble-gold-900/50">Who We Serve: $10M Minimum Engagement</span>
                                </div>
                            </motion.div>
                        </CinematicReveal>
                    </div>

                    {/* [NEW] SEC 4.5: Risk Architecture (Content Doubling Phase 2) */}
                    <section className="py-24 relative z-20">
                        <CinematicReveal direction="up" duration={1.5}>
                            <div className="bg-noble-charcoal/50 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl p-8 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.9)] shadow-inner relative overflow-hidden group">

                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-noble-gold-500/50 to-transparent" />

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                                    <div className="lg:col-span-6 relative z-10 hidden lg:block perspective-1000">
                                        <motion.div whileHover={{ rotateY: 5 }} className="relative h-[450px] w-full rounded-2xl overflow-hidden border border-noble-gold-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-transform duration-700">
                                            <Image
                                                src="/images/v2/architectural_blueprint_gold_1772830222909.png"
                                                alt="Geometric Master Blueprint"
                                                fill
                                                className="object-cover saturate-50"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-noble-charcoal/80 to-transparent" />
                                        </motion.div>
                                    </div>

                                    <div className="lg:col-span-6 lg:pl-8">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-8 h-[1px] bg-noble-gold-500/50" />
                                            <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">Risk Architecture</span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-display text-noble-ivory italic leading-tight mb-8 tracking-wide">
                                            Derivatives &amp; <br />Tail-Risk Defense.
                                        </h2>
                                        <p className="text-noble-slate font-serif font-light leading-loose tracking-wide mb-8">
                                            Capital preservation is mathematically impossible without systemic downside protection. Our portfolios integrate explicit volatility targeting utilizing VIX structures and highly asymmetric S&amp;P 500 put options.
                                        </p>
                                        <p className="text-noble-slate font-serif font-light leading-loose tracking-wide mb-10">
                                            When the macro environment inevitably cracks, these hedges rapidly compound, providing instantaneous liquidity to capitalize on generational market dislocations while others are forced to liquidate.
                                        </p>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-4 text-xs tracking-wide text-noble-ivory">
                                                <span className="text-noble-gold-500 text-[10px]">◆</span> Systematic Volatility Hedging
                                            </li>
                                            <li className="flex items-center gap-4 text-xs tracking-wide text-noble-ivory">
                                                <span className="text-noble-gold-500 text-[10px]">◆</span> Opportunistic Convexity Profiles
                                            </li>
                                            <li className="flex items-center gap-4 text-xs tracking-wide text-noble-ivory">
                                                <span className="text-noble-gold-500 text-[10px]">◆</span> Continuous Portfolio Stress-Testing
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CinematicReveal>
                    </section>
                </div>
            </div>
        </div>
    );
}
