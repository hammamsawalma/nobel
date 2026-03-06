"use client";

import CinematicReveal from "@/components/v2/CinematicReveal";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Parallax Image Wrapper
function ParallaxImage({ src, alt }: { src: string; alt: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
    return (
        <div ref={ref} className="relative w-full h-full overflow-hidden">
            <motion.div className="absolute inset-[-10%] w-[120%] h-[120%]" style={{ y }}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100"
                />
            </motion.div>
        </div>
    );
}

export default function TheFirmHeritagePage() {
    return (
        <div className="bg-[#1a140d] text-noble-ivory font-sans pt-32 pb-24 selection:bg-noble-gold-500 selection:text-noble-charcoal min-h-screen">

            {/* HERITAGE HERO SECTION */}
            <section className="relative w-full pt-32 pb-32 mb-32 overflow-hidden border-b border-noble-gold-900/40">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 mix-blend-screen grayscale">
                    <source src="/videos/v2/horseback-riding.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1a140d] via-transparent to-[#1a140d] opacity-90" />

                {/* Roman Numeral Watermark */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-5">
                    <span className="text-[22vw] font-display text-noble-gold-300 leading-none tracking-tight">MCMLXXXVII</span>
                </div>

                <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">

                        <div className="lg:col-span-8 relative z-10">
                            <CinematicReveal delay={0.2}>
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="w-12 h-[1px] bg-noble-gold-500" />
                                    <span className="text-[9px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">The Firm</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl lg:text-[6rem] text-noble-ivory font-display leading-[1.05] mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                                    Architectural <br />
                                    <span className="italic text-transparent bg-clip-text bg-gradient-gold-foil">Fiduciary Duty.</span>
                                </h1>
                            </CinematicReveal>
                        </div>

                        <div className="lg:col-span-4 relative z-10 pb-4">
                            <CinematicReveal delay={0.5} direction="left">
                                <motion.div whileHover={{ scale: 1.02 }} className="bg-noble-charcoal/60 backdrop-blur-xl border border-noble-gold-500/30 rounded-2xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.8)] shadow-inner">
                                    <p className="text-noble-slate text-sm font-serif leading-loose tracking-wide">
                                        Founded on the principle that true wealth requires absolute, unyielding defense mechanisms. We are not a traditional advisory; we are structural engineers for generational capital.
                                    </p>
                                </motion.div>
                            </CinematicReveal>
                        </div>
                    </div>
                </div>

                {/* Floating Island Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-12 right-6 lg:right-12 z-20 flex gap-4 perspective-1000"
                >
                    <motion.div whileHover={{ rotateX: 5, rotateY: -5 }} className="bg-noble-charcoal/80 backdrop-blur-2xl border border-noble-gold-500/40 rounded-xl px-6 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.8)] shadow-inner border-t-noble-gold-400/60 min-w-[160px] cursor-default">
                        <div className="text-[8px] uppercase tracking-[0.4em] text-noble-slate mb-1">Global Clients</div>
                        <div className="text-3xl font-display text-transparent bg-clip-text bg-gradient-gold-foil font-semibold leading-tight">340+</div>
                        <div className="text-[7px] text-noble-gold-500 uppercase tracking-[0.3em] mt-1">HNW Families</div>
                    </motion.div>
                    <motion.div whileHover={{ rotateX: 5, rotateY: 5 }} className="bg-noble-charcoal/80 backdrop-blur-2xl border border-noble-gold-500/40 rounded-xl px-6 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.8)] shadow-inner border-t-noble-gold-400/60 min-w-[160px] cursor-default">
                        <div className="text-[8px] uppercase tracking-[0.4em] text-noble-slate mb-1">Track Record</div>
                        <div className="text-3xl font-display text-transparent bg-clip-text bg-gradient-gold-foil font-semibold leading-tight">37yr</div>
                        <div className="text-[7px] text-noble-gold-500 uppercase tracking-[0.3em] mt-1">Proven Legacy</div>
                    </motion.div>
                </motion.div>
            </section>

            {/* MANDATE NUMBERS ROW (Island Format) */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32 perspective-1000">
                <CinematicReveal direction="up">
                    <motion.div whileHover={{ scale: 1.01 }} className="bg-noble-charcoal/70 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden transition-transform duration-500">
                        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-noble-gold-900/40 border-y border-noble-gold-900/40">
                            {[
                                { value: '$4.2B', label: 'Assets Under Management', sub: 'Actively Deployed' },
                                { value: '37 Yrs', label: 'Proven Track Record', sub: 'Unbroken Fiduciary' },
                                { value: '340+', label: 'HNW Client Families', sub: 'Private Mandate' },
                                { value: '24', label: 'Nations of Reach', sub: 'Sydney · Geneva' },
                            ].map((stat, i) => (
                                <div key={stat.label} className={`p-8 lg:p-10 text-center group hover:bg-noble-gold-900/20 transition-colors duration-700 ${i >= 2 ? 'border-t md:border-t-0 border-noble-gold-900/40' : ''}`}>
                                    <div className="text-3xl md:text-4xl font-display text-noble-gold-400 font-semibold mb-2">{stat.value}</div>
                                    <div className="text-[8px] uppercase tracking-[0.35em] text-noble-slate mb-1">{stat.label}</div>
                                    <div className="text-[7px] uppercase tracking-[0.3em] text-noble-gold-700">{stat.sub}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </CinematicReveal>
            </section>

            {/* EDITORIAL IMAGE SPREAD (Framed Island) */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto w-full relative h-[60vh] md:h-[80vh] mb-40 group overflow-hidden perspective-1000">
                <CinematicReveal duration={2} className="w-full h-full relative" direction="none">
                    <motion.div whileHover={{ scale: 1.02 }} className="w-full h-full rounded-3xl border border-noble-gold-500/40 shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden relative transition-transform duration-1000">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-noble-charcoal via-transparent to-transparent opacity-80" />

                        <Image
                            src="/images/v2/heritage_library_interior_v2_1772823832456.png"
                            alt="The Noble Rock Private Library"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[3000ms] scale-105 group-hover:scale-100"
                            priority
                        />
                        <div className="absolute inset-0 bg-noble-espresso/40 mix-blend-multiply group-hover:bg-transparent transition-colors duration-[2000ms] z-10" />

                        {/* Caption bar inside the island */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 px-8 py-6 flex justify-between items-end backdrop-blur-sm bg-noble-charcoal/60 border-t border-noble-gold-500/20">
                            <span className="text-[9px] uppercase tracking-[0.5em] text-noble-ivory/80 font-bold">The Noble Rock Private Archive — Est. 1987</span>
                            <span className="text-[9px] uppercase tracking-[0.5em] text-noble-gold-500 font-bold">Fig. I</span>
                        </div>
                    </motion.div>
                </CinematicReveal>
            </section>

            {/* [NEW] SEC 3.5: The Fiduciary Oath (Content Doubling Phase 2) */}
            <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-20 mb-32">
                <CinematicReveal direction="up" duration={1.5}>
                    <div className="bg-noble-charcoal/50 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl p-8 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.9)] shadow-inner relative overflow-hidden group">

                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-noble-gold-500/50 to-transparent" />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                            <div className="lg:col-span-5 relative z-10 hidden lg:block perspective-1000">
                                <motion.div whileHover={{ rotateY: 5 }} className="relative h-[550px] w-full rounded-2xl overflow-hidden border border-noble-gold-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-transform duration-700">
                                    <Image
                                        src="/images/v2/wax_seal_document_1772830177480.png"
                                        alt="The Fiduciary Oath Seal"
                                        fill
                                        className="object-cover saturate-50"
                                    />
                                    <div className="absolute inset-0 bg-noble-charcoal/20 mix-blend-overlay" />
                                </motion.div>
                            </div>

                            <div className="lg:col-span-7 lg:pl-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-8 h-[1px] bg-noble-gold-500/50" />
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">The Mandate</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display text-noble-ivory italic leading-tight mb-8 tracking-wide">
                                    The Uncompromising Oath.
                                </h2>
                                <p className="text-noble-slate font-serif font-light leading-loose tracking-wide mb-6">
                                    In an era where the lines between objective advisory and product distribution are chronically blurred, Noble Rock operates under a strict, legally binding Fiduciary Oath.
                                </p>
                                <p className="text-noble-slate font-serif font-light leading-loose tracking-wide mb-10">
                                    We manufacture no proprietary financial instruments. We receive no hidden commissions or retrocessions from custodians or asset managers. Our singular, indivisible alignment is with the mathematical compounding of your capital.
                                </p>

                                <div className="bg-[#110d06]/80 border border-noble-gold-900/50 rounded-xl p-8 shadow-inner">
                                    <div className="text-[#c9a84c] text-3xl font-serif italic mb-4">"A structural impossibility of conflict."</div>
                                    <p className="text-xs text-noble-slate/70 tracking-widest uppercase">The Noble Rock Charter, Article II</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </CinematicReveal>
            </section>

            {/* THE TIMELINE (VERTICAL LEGACY STAIRCASE in 3D Islands) */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32">
                <div className="relative">
                    {/* Center Line for desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-noble-gold-500/30 to-transparent transform -translate-x-1/2" />

                    {/* Timeline Item 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center relative z-10 perspective-1000">
                        <div className="order-2 lg:order-1 text-right lg:pr-12">
                            <CinematicReveal direction="right">
                                <motion.div whileHover={{ x: -10 }} className="bg-noble-charcoal/60 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] shadow-inner transition-transform duration-500 text-left lg:text-right relative">
                                    <div className="absolute top-1/2 -right-16 w-16 h-[2px] bg-noble-gold-500/50 hidden lg:block" />
                                    <span className="text-noble-gold-500 text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">I. Foundation (1987)</span>
                                    <h2 className="text-3xl md:text-5xl font-display italic text-noble-ivory mb-8 leading-tight">
                                        The Institutional <br />Advantage
                                    </h2>
                                    <p className="text-noble-slate font-serif font-light leading-loose tracking-wide">
                                        Private wealth has historically been serviced by commoditized retail structures masquerading as bespoke solutions. Noble Rock was built in Geneva to sever this paradigm, leveraging direct institutional custody relationships.
                                    </p>
                                </motion.div>
                            </CinematicReveal>
                        </div>
                        <div className="order-1 lg:order-2 lg:pl-12">
                            <CinematicReveal direction="left">
                                <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-0 group border-2 border-noble-gold-500/40 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden">
                                    <div className="relative w-full h-full">
                                        <ParallaxImage src="/images/v2/ancestral_vault.png" alt="Ancestral Vault" />
                                    </div>
                                    <div className="absolute inset-0 bg-noble-charcoal/20 mix-blend-overlay pointer-events-none" />
                                </div>
                            </CinematicReveal>
                        </div>
                    </div>

                    {/* [NEW] Timeline Item 1.5 (Content Doubling) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center relative z-10 perspective-1000">
                        <div className="order-1 lg:pr-12">
                            <CinematicReveal direction="right">
                                <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mr-0 group border-2 border-noble-gold-500/40 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden">
                                    <div className="relative w-full h-full">
                                        <ParallaxImage src="/images/v2/swiss_bank_exterior_1772830208482.png" alt="European Banking Headquarters" />
                                    </div>
                                    <div className="absolute inset-0 bg-noble-charcoal/20 mix-blend-overlay pointer-events-none" />
                                </div>
                            </CinematicReveal>
                        </div>
                        <div className="order-2 lg:pl-12">
                            <CinematicReveal direction="left">
                                <motion.div whileHover={{ x: 10 }} className="bg-noble-charcoal/60 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] shadow-inner transition-transform duration-500 relative">
                                    <div className="absolute top-1/2 -left-16 w-16 h-[2px] bg-noble-gold-500/50 hidden lg:block" />
                                    <span className="text-noble-gold-500 text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">II. Expansion (2004)</span>
                                    <h2 className="text-3xl md:text-5xl font-display italic text-noble-ivory mb-8 leading-tight">
                                        Global Custody <br />Architectures
                                    </h2>
                                    <p className="text-noble-slate font-serif font-light leading-loose tracking-wide">
                                        As our client mandates grew in complexity, we expanded our physical footprint beyond Geneva into Sydney and Singapore. This triad provided a 24-hour defensive moat around our clients' capital.
                                    </p>
                                </motion.div>
                            </CinematicReveal>
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 perspective-1000">
                        <div className="order-2 lg:order-1 text-right lg:pr-12">
                            <CinematicReveal direction="right">
                                <motion.div whileHover={{ x: -10 }} className="bg-noble-charcoal/60 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] shadow-inner transition-transform duration-500 text-left lg:text-right relative">
                                    <div className="absolute top-1/2 -right-16 w-16 h-[2px] bg-noble-gold-500/50 hidden lg:block" />
                                    <span className="text-noble-gold-500 text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">III. Precision (Present)</span>
                                    <h2 className="text-3xl md:text-5xl font-display italic text-noble-ivory mb-8 leading-tight">
                                        Mathematical <br />Objectivity
                                    </h2>
                                    <p className="text-noble-slate font-serif font-light leading-loose tracking-wide">
                                        Emotion is engineered completely out of the equation. In the modern era of algorithmic volatility, decisions are driven entirely by quantitative rigor, risk premia analysis, and asymmetric upside potential.
                                    </p>
                                </motion.div>
                            </CinematicReveal>
                        </div>
                        <div className="order-1 lg:order-2 lg:pl-12">
                            <CinematicReveal direction="left">
                                <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-0 group border-2 border-noble-gold-500/40 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden">
                                    <div className="relative w-full h-full">
                                        <ParallaxImage src="/images/v2/antique_compass.png" alt="Antique Compass" />
                                    </div>
                                    <div className="absolute inset-0 bg-noble-charcoal/20 mix-blend-overlay pointer-events-none" />
                                </div>
                            </CinematicReveal>
                        </div>
                    </div>

                </div>
            </section>

            {/* THE COMMITMENT - TEXTURE BLOCK (Island Encapsulated) */}
            <section className="relative px-6 lg:px-12 max-w-5xl mx-auto mb-32 perspective-1000">
                <CinematicReveal direction="up" delay={0.1}>
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-noble-charcoal/60 backdrop-blur-2xl border border-noble-gold-500/40 rounded-3xl p-12 lg:p-24 shadow-[0_40px_80px_rgba(0,0,0,0.9)] text-center relative overflow-hidden transition-transform duration-700">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/v2/gilded_abstract_texture_v2_1772823845293.png"
                                alt="Abstract Gilded Texture"
                                fill
                                className="object-cover opacity-20 mix-blend-color-dodge grayscale"
                            />
                        </div>
                        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1a140d]/90 to-transparent" />

                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-noble-ivory mb-12 leading-tight drop-shadow-xl text-balance">
                                &ldquo;A legacy is not merely inherited; it is architected, defended, and compounded.&rdquo;
                            </h2>
                            <div className="w-[1px] h-16 bg-gradient-to-b from-noble-gold-400 to-transparent mb-6" />
                            <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold border border-noble-gold-500/40 rounded-full px-8 py-3 bg-[#110d06]/60 backdrop-blur-sm shadow-[0_0_20px_rgba(238,194,61,0.1)]">
                                The Private Mandate
                            </span>
                            {/* Quote Attribution */}
                            <div className="mt-10 flex flex-col items-center gap-3">
                                <div className="w-12 h-12 rounded-full border-2 border-noble-gold-500/40 bg-[#110d06] flex items-center justify-center overflow-hidden shadow-xl">
                                    <span className="text-noble-gold-400 text-sm font-display italic">NR</span>
                                </div>
                                <span className="text-[9px] uppercase tracking-[0.5em] text-noble-slate/70 font-bold">Sir Edward Noble — Founding Partner, 1987</span>
                            </div>
                        </div>
                    </motion.div>
                </CinematicReveal>
            </section>

        </div>
    );
}
