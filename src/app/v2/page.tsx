"use client";

import CinematicReveal from "@/components/v2/CinematicReveal";
import StaggeredBlurText from "@/components/v2/StaggeredBlurText";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Animated Counter Hook
function useCountUp(target: number, duration = 2000, shouldStart = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!shouldStart) return;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, shouldStart]);
    return count;
}

// Animated Metrics Counter
function MetricsCounter() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const aum = useCountUp(42, 2000, isInView);   // $4.2B → shown as 4.2
    const years = useCountUp(37, 1500, isInView);
    const clients = useCountUp(340, 2000, isInView);
    const nations = useCountUp(24, 1500, isInView);

    const metrics = [
        { value: `$${(aum / 10).toFixed(1)}B`, label: 'Assets Under Management', sub: '↑ 12% YoY' },
        { value: `${years}`, label: 'Years of Track Record', sub: 'Since 1987' },
        { value: `${clients}+`, label: 'HNW Client Families', sub: 'Private Mandate' },
        { value: `${nations}`, label: 'Global Nations', sub: 'Sydney · Geneva' },
    ];

    return (
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 divide-x divide-noble-gold-900/20 border-y border-noble-gold-900/20">
            {metrics.map((m, i) => (
                <div key={m.label} className={`p-8 lg:p-10 text-center group hover:bg-noble-gold-900/10 transition-colors duration-700 ${i >= 2 ? 'border-t md:border-t-0 border-noble-gold-900/20' : ''}`}>
                    <div className="text-3xl md:text-4xl font-display text-noble-gold-400 font-semibold mb-2">{m.value}</div>
                    <div className="text-xs font-bold uppercase tracking-[0.25em] text-noble-slate mb-1">{m.label}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-noble-gold-700/90">{m.sub}</div>
                </div>
            ))}
        </div>
    );
}

// Insights Ticker
function InsightsTicker() {
    const headlines = [
        'Navigating Yield Compression in a De-globalizing Economy',
        'The Ascendancy of Corporate Private Credit Markets',
        'Structuring Inter-Generational Trusts Pre-2027',
        'Algorithmic Defensive Hedging in Bull Markets',
    ];
    return (
        <div className="border-y border-noble-gold-900/20 py-4 overflow-hidden bg-noble-charcoal/30">
            <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, duration: 35, ease: 'linear' }}
                className="flex gap-0 whitespace-nowrap"
            >
                {[...headlines, ...headlines].map((h, i) => (
                    <span key={i} className="inline-flex items-center gap-6 px-8">
                        <span className="text-[8px] uppercase tracking-[0.35em] text-noble-slate hover:text-noble-gold-400 transition-colors cursor-pointer">{h}</span>
                        <span className="text-noble-gold-700/40 text-xs">◆</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

export default function NobleRockV2Home() {
    return (
        <div className="bg-noble-charcoal text-noble-ivory font-sans selection:bg-noble-gold-500 selection:text-noble-charcoal min-h-screen">

            {/* SEC 1: Masterpiece Cinematic Hero Section */}
            <section className="relative min-h-[100svh] flex flex-col justify-center items-center px-6 lg:px-12 overflow-hidden bg-noble-charcoal">

                {/* The Video Background */}
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen grayscale">
                    <source src="/videos/v2/roman-villa.mp4" type="video/mp4" />
                </video>

                {/* Deep Background Vignette */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-noble-obsidian)_100%)] opacity-90" />
                <div className="absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: '128px 128px' }} />

                {/* Horizontal Scan Line */}
                <motion.div
                    className="absolute inset-x-0 z-0 pointer-events-none h-[3px]"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ repeat: Infinity, duration: 9, ease: 'linear' }}
                    style={{ background: 'linear-gradient(to right, transparent, rgba(238,194,61,0.05), rgba(238,194,61,0.08), rgba(238,194,61,0.05), transparent)' }}
                />

                <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center mt-20">
                    <CinematicReveal delay={0.2} direction="up" duration={1.5}>
                        <div className="mb-10 hidden md:flex justify-center">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-400 border border-noble-gold-500/50 px-8 py-2.5 bg-noble-charcoal/70 backdrop-blur-sm rounded-full shadow-[0_0_20px_rgba(238,194,61,0.1)] animate-pulse-gold">
                                Absolute Fiduciary Restraint
                            </span>
                        </div>
                    </CinematicReveal>

                    <div className="mb-10 font-normal drop-shadow-2xl">
                        <StaggeredBlurText
                            text="Preserving Legacy."
                            className="text-5xl md:text-7xl lg:text-[7.5rem] text-noble-ivory font-display leading-[1.05]"
                            delay={0.5}
                        />
                        <br />
                        <StaggeredBlurText
                            text="Defending Capital."
                            className="text-5xl md:text-7xl lg:text-[7.5rem] italic font-display leading-[1.05] text-noble-gold-400"
                            delay={0.8}
                        />
                    </div>

                    <CinematicReveal delay={0.8} direction="up" duration={1.5}>
                        <p className="text-noble-slate text-sm md:text-xl max-w-2xl mx-auto tracking-wide leading-relaxed font-serif mb-16 drop-shadow-md">
                            Architecting enduring wealth for high-net-worth families and sovereign institutions through mathematically rigorous, absolute return strategies.
                        </p>
                    </CinematicReveal>

                    <CinematicReveal delay={1.1} direction="up" duration={1.5}>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
                            <motion.a
                                href="/v2/the-firm"
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(238,194,61,0.2)' }}
                                whileTap={{ scale: 0.97 }}
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-noble-gold-600/30 to-noble-gold-900/20 border border-noble-gold-500/60 text-noble-gold-300 px-10 py-4 text-[10px] lg:text-xs uppercase tracking-[0.3em] rounded-xl hover:text-noble-gold-100 hover:border-noble-gold-400 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                            >
                                Discover Our Heritage
                                <span className="text-noble-gold-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </motion.a>
                            <motion.a
                                href="/v2/portal"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-3 bg-noble-charcoal/50 backdrop-blur-md border border-noble-slate/30 text-noble-slate px-10 py-4 text-[10px] lg:text-xs uppercase tracking-[0.3em] rounded-xl hover:text-noble-ivory hover:border-noble-slate/60 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                            >
                                Client Vault Access
                            </motion.a>
                        </div>
                    </CinematicReveal>
                </div>

                {/* Floating Island Stat Cards */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2, duration: 1, ease: 'easeOut' }}
                    className="absolute bottom-20 left-6 lg:left-12 z-20 flex flex-col gap-2 perspective-1000"
                >
                    <motion.div whileHover={{ rotateX: 5, rotateY: 5 }} className="bg-noble-charcoal/80 backdrop-blur-2xl border border-noble-gold-500/40 rounded-xl px-6 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.8)] shadow-inner min-w-[200px] border-t-noble-gold-400/60 transition-transform duration-300">
                        <div className="text-xs font-bold uppercase tracking-[0.25em] text-noble-slate mb-2">{`Assets Under Management`}</div>
                        <div className="text-3xl font-display text-transparent bg-clip-text bg-gradient-gold-foil font-semibold leading-tight">$4.2B+</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-noble-gold-500 mt-2">↑ 12% YoY</div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.5, duration: 1, ease: 'easeOut' }}
                    className="absolute bottom-20 right-6 lg:right-12 z-20 perspective-1000"
                >
                    <motion.div whileHover={{ rotateX: -5, rotateY: -5 }} className="bg-noble-charcoal/80 backdrop-blur-2xl border border-noble-gold-500/40 rounded-xl px-6 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.8)] shadow-inner border-t-noble-gold-400/60 transition-transform duration-300">
                        <div className="text-xs font-bold uppercase tracking-[0.25em] text-noble-slate mb-2">Est.</div>
                        <div className="text-2xl font-display text-noble-ivory leading-tight">1987</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-noble-gold-500 mt-2">Sydney · Geneva</div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <div className="text-noble-gold-500/70 uppercase tracking-[0.5em] text-[8px] font-bold group-hover:text-noble-gold-400 transition-colors">Descend</div>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                        className="w-[1px] h-16 bg-gradient-to-b from-noble-gold-500/60 to-transparent"
                    />
                </motion.div>
            </section>

            {/* SEC 2: The Philosophy Grid (3D Island Architecture) */}
            <section className="py-24 md:py-40 px-6 lg:px-12 max-w-7xl mx-auto relative z-20">
                <CinematicReveal direction="up" duration={1.5}>
                    <div className="bg-noble-charcoal/50 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl p-8 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.9)] shadow-inner relative overflow-hidden group">

                        {/* Inner glowing top border */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-noble-gold-500/50 to-transparent" />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                            {/* Left Column: Image Island */}
                            <div className="lg:col-span-5 relative h-[500px] w-full rounded-2xl overflow-hidden border border-noble-gold-900/60 shadow-2xl perspective-1000">
                                <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full relative transition-transform duration-[2000ms]">
                                    <Image
                                        src="/images/v2/vintage_hourglass.png"
                                        alt="Generational Time & Precision"
                                        fill
                                        className="object-cover brightness-90 hover:brightness-110 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-noble-espresso/30 mix-blend-multiply hover:bg-transparent transition-colors duration-1000" />
                                </motion.div>
                            </div>

                            {/* Right Column: Editorial Text Blocks */}
                            <div className="lg:col-span-7 prose prose-invert prose-lg max-w-none text-noble-slate font-serif font-light leading-loose tracking-wide pt-4 lg:pl-8 relative z-10">
                                <h2 className="text-noble-gold-400 font-display text-3xl md:text-5xl italic leading-tight mb-10 border-b border-noble-gold-900/40 pb-8 tracking-wide">
                                    A paradigm of extreme precision.
                                </h2>
                                <p className="mb-8">
                                    <span className="float-left text-7xl font-display text-transparent bg-clip-text bg-gradient-gold-foil leading-none pr-4 pt-2 -ml-2">W</span>e do not chase transient market beta. Our mandate is the absolute protection and calculated expansion of generational capital. Every decision executed within the walls of Noble Rock is underpinned by mathematical reality, distinct informational symmetry, and an uncompromising fiduciary duty.
                                </p>
                                <p>
                                    With billions constructed under our architectural oversight, we partner exclusively with Tier-1 global custodians. Your capital remains distinctly yours; segregated securely into named accounts, transparently visible, and rigorously defended against geopolitical fracture and monetary debasement.
                                </p>
                            </div>
                        </div>
                    </div>
                </CinematicReveal>
            </section>

            {/* [NEW] SEC 2.5: The Strategy Council (Content Doubling Phase 1) */}
            <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-20">
                <CinematicReveal direction="up" duration={1.5}>
                    <div className="bg-noble-charcoal/50 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl p-8 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.9)] shadow-inner relative overflow-hidden group">

                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-noble-gold-500/50 to-transparent" />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                            <div className="lg:col-span-6 relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-8 h-[1px] bg-noble-gold-500/50" />
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">The Strategy Council</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display text-noble-ivory italic leading-tight mb-8 tracking-wide">
                                    Intellectual Rigor.
                                </h2>
                                <p className="text-noble-slate font-serif font-light leading-loose tracking-wide mb-8">
                                    The architectural foundation of our outperformance lies within the Noble Rock Strategy Council. Comprised of veteran portfolio managers, quantitative PhDs, and structural legal experts, the Council convenes bi-weekly to dissect global macroeconomic shifts and stress-test portfolio resilience.
                                </p>
                                <p className="text-noble-slate font-serif font-light leading-loose tracking-wide">
                                    Decisions are strictly consensus-driven, ensuring that no single individual cognitive bias can influence capital deployment. This rigorous peer-review mechanism is the bedrock of our fiduciary promise.
                                </p>
                            </div>

                            <div className="lg:col-span-6 lg:pl-8">
                                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-noble-gold-900/60 shadow-2xl">
                                    <Image
                                        src="/images/v2/boardroom_cinematic_1772830147562.png"
                                        alt="The Strategy Council Boardroom"
                                        fill
                                        className="object-cover brightness-90 saturate-50"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-noble-charcoal/80 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </CinematicReveal>
            </section>

            {/* SEC 3: Animated Metrics Counters (Island Format) */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32 relative z-20 perspective-1000">
                <CinematicReveal direction="up">
                    <motion.div whileHover={{ scale: 1.01 }} className="bg-noble-charcoal/70 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-500">
                        <MetricsCounter />
                    </motion.div>
                </CinematicReveal>
            </section>

            {/* SEC 4: The Three Pillars (Island Cards) */}
            <section className="py-32 relative">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/v2/marble_gold_veins_1772822929304.png"
                        alt="Dark Marble Background"
                        fill
                        className="object-cover opacity-20 mix-blend-multiply"
                    />
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-obsidian-depth opacity-90" />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <CinematicReveal direction="up" className="mb-20 text-center">
                        <h3 className="text-noble-ivory font-display text-3xl md:text-5xl tracking-wide italic">
                            Core Disciplines
                        </h3>
                        <div className="w-16 h-[1px] bg-noble-gold-700 mx-auto mt-8" />
                    </CinematicReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">

                        {/* Pillar 1 */}
                        <CinematicReveal delay={0.1}>
                            <motion.div whileHover={{ y: -10 }} className="border border-noble-gold-500/30 rounded-2xl p-10 lg:p-14 transition-all duration-700 group backdrop-blur-xl bg-noble-charcoal/80 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] h-full flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-br from-noble-gold-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold-foil transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
                                <div className="text-transparent bg-clip-text bg-gradient-gold-foil font-display text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">I.</div>
                                <h4 className="text-2xl md:text-3xl font-display text-noble-ivory tracking-wider mb-4">Fixed-Income <br />Portfolios</h4>
                                <p className="text-base md:text-lg text-noble-slate font-medium tracking-wide leading-relaxed font-sans mb-8 flex-1">
                                    Predictable, defensive debt instruments focusing strictly on Investment Grade and Inflation-Linked Bonds to anchor your treasury.
                                </p>
                                <a href="/v2/wealth-strategies/fixed-income" className="inline-flex items-center gap-2 text-[8px] uppercase tracking-[0.4em] text-noble-gold-500 border border-noble-gold-500/30 rounded-lg px-5 py-3 opacity-80 group-hover:opacity-100 group-hover:bg-noble-gold-900/20 transition-all duration-500 hover:text-noble-gold-300 w-fit">
                                    Explore Strategy <span>→</span>
                                </a>
                            </motion.div>
                        </CinematicReveal>

                        {/* Pillar 2 */}
                        <CinematicReveal delay={0.3}>
                            <motion.div whileHover={{ y: -10 }} className="border border-noble-gold-500/30 rounded-2xl p-10 lg:p-14 transition-all duration-700 group backdrop-blur-xl bg-noble-charcoal/80 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] h-full flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-br from-noble-gold-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold-foil transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
                                <div className="text-transparent bg-clip-text bg-gradient-gold-foil font-display text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">II.</div>
                                <h4 className="text-2xl md:text-3xl font-display text-noble-ivory tracking-wider mb-4">Asymmetric <br />Equities</h4>
                                <p className="text-base md:text-lg text-noble-slate font-medium tracking-wide leading-relaxed font-sans mb-8 flex-1">
                                    Targeted global market exposure designed for calculated upside capture while employing structural hedging against tail-risk.
                                </p>
                                <a href="/v2/wealth-strategies/equities" className="inline-flex items-center gap-2 text-[8px] uppercase tracking-[0.4em] text-noble-gold-500 border border-noble-gold-500/30 rounded-lg px-5 py-3 opacity-80 group-hover:opacity-100 group-hover:bg-noble-gold-900/20 transition-all duration-500 hover:text-noble-gold-300 w-fit">
                                    Explore Strategy <span>→</span>
                                </a>
                            </motion.div>
                        </CinematicReveal>

                        {/* Pillar 3 */}
                        <CinematicReveal delay={0.5}>
                            <motion.div whileHover={{ y: -10 }} className="border border-noble-gold-500/30 rounded-2xl p-10 lg:p-14 transition-all duration-700 group backdrop-blur-xl bg-noble-charcoal/80 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] h-full flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-br from-noble-gold-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold-foil transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
                                <div className="text-transparent bg-clip-text bg-gradient-gold-foil font-display text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">III.</div>
                                <h4 className="text-2xl md:text-3xl font-display text-noble-ivory tracking-wider mb-4">Generational <br />Architecture</h4>
                                <p className="text-base md:text-lg text-noble-slate font-medium tracking-wide leading-relaxed font-sans mb-8 flex-1">
                                    Strategic succession structures, philanthropic trusts, and sophisticated superannuation oversight to ensure legacy endurance.
                                </p>
                                <a href="/v2/wealth-strategies/family-office" className="inline-flex items-center gap-2 text-[8px] uppercase tracking-[0.4em] text-noble-gold-500 border border-noble-gold-500/30 rounded-lg px-5 py-3 opacity-80 group-hover:opacity-100 group-hover:bg-noble-gold-900/20 transition-all duration-500 hover:text-noble-gold-300 w-fit">
                                    Explore Strategy <span>→</span>
                                </a>
                            </motion.div>
                        </CinematicReveal>

                    </div>
                </div>
            </section>

            {/* [NEW] SEC 4.5: Global Macro Thematics (Content Doubling Phase 1) */}
            <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-20">
                <CinematicReveal direction="up" duration={1.5}>
                    <div className="bg-noble-charcoal/50 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl p-8 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.9)] shadow-inner relative overflow-hidden group">

                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-noble-gold-500/50 to-transparent" />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                            <div className="lg:col-span-5 relative z-10 hidden lg:block">
                                <div className="relative h-[450px] w-full rounded-2xl overflow-hidden border border-noble-gold-900/60 shadow-2xl">
                                    <Image
                                        src="/images/v2/antique_globe_macro_1772830159927.png"
                                        alt="Global Macro Reach"
                                        fill
                                        className="object-cover saturate-50"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-noble-charcoal/40" />
                                </div>
                            </div>

                            <div className="lg:col-span-7 lg:pl-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-8 h-[1px] bg-noble-gold-500/50" />
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">Macro Themes</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display text-noble-ivory italic leading-tight mb-8 tracking-wide">
                                    De-globalization &amp; Scarcity.
                                </h2>
                                <p className="text-noble-slate font-serif font-light leading-loose tracking-wide mb-8">
                                    We are actively architecting portfolios for a multi-polar monetary order. The post-1980s era of frictionless global trade is fracturing, replaced by resource nationalism and supply chain on-shoring.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                                    <div className="p-6 border border-noble-gold-900/40 rounded-xl bg-noble-charcoal/60">
                                        <div className="text-noble-gold-400 font-display italic text-2xl mb-3">Hard Asset Premium</div>
                                        <p className="text-base md:text-lg text-noble-slate font-medium tracking-wide leading-relaxed">Structural allocations to infrastructure, critical minerals, and real assets to hedge against persistent fiat debasement.</p>
                                    </div>
                                    <div className="p-6 border border-noble-gold-900/40 rounded-xl bg-noble-charcoal/60">
                                        <div className="text-noble-gold-400 font-display italic text-2xl mb-3">Geographic Alphas</div>
                                        <p className="text-base md:text-lg text-noble-slate font-medium tracking-wide leading-relaxed">Targeting specific emerging market equities benefiting massively from supply chain relocations and near-shoring trends.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </CinematicReveal>
            </section>

            {/* SEC 5: Masterpiece Discrete CTA Section (Island Format) */}
            <section className="py-32 px-6 lg:px-12 max-w-5xl mx-auto relative z-20">
                <CinematicReveal direction="up" duration={1.5}>
                    <div className="bg-noble-charcoal/60 backdrop-blur-2xl border border-noble-gold-500/40 rounded-3xl p-12 lg:p-24 shadow-[0_40px_80px_rgba(0,0,0,0.9)] text-center relative overflow-hidden">

                        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(238,194,61,0.05)_0%,transparent_70%)]" />

                        <div className="relative z-10 w-24 h-24 mx-auto mb-10 opacity-80">
                            <Image
                                src="/images/v2/fountain_pen_signature_1772822914918.png"
                                alt="Fiduciary Authority"
                                fill
                                className="object-cover rounded-full mix-blend-screen"
                            />
                        </div>

                        <h2 className="relative z-10 text-3xl md:text-5xl font-display italic text-noble-ivory leading-tight mb-6">
                            The privilege of absolute certainty.
                        </h2>
                        <p className="relative z-10 text-noble-gold-600/80 text-xs sm:text-sm uppercase tracking-[0.2em] mb-12 font-bold">
                            Accepting sophisticated mandates by appointment alone.
                        </p>
                        <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-center">
                            <a href="/v2/portal">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="border border-noble-gold-500 text-noble-gold-400 px-10 py-5 text-[10px] font-bold tracking-[0.3em] uppercase rounded-xl bg-noble-gold-900/20 hover:bg-noble-gold-600/30 hover:text-noble-gold-200 transition-all duration-500 shadow-[0_0_30px_rgba(238,194,61,0.1)]"
                                >
                                    Request a Private Audience
                                </motion.button>
                            </a>
                        </div>
                    </div>
                </CinematicReveal>
            </section>

            {/* SEC 6: Live Insights Ticker Strip */}
            <section className="relative z-10 border-t border-noble-gold-900/40 mt-16 bg-noble-charcoal backdrop-blur-md">
                <div className="px-6 lg:px-12 max-w-7xl mx-auto py-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-[1px] bg-noble-gold-500" />
                        <span className="text-[8px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">The Journal</span>
                    </div>
                    <a href="/v2/insights" className="text-[8px] uppercase tracking-[0.3em] text-noble-slate hover:text-noble-gold-400 transition-colors duration-300">
                        All Publications →
                    </a>
                </div>
                <InsightsTicker />
            </section>

        </div>
    )
}
