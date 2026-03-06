"use client";

import CinematicReveal from "@/components/v2/CinematicReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, BarChart2, Heart, GraduationCap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Generational Trust SVG
const GenerationalTreeSVG = () => (
    <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-2xl" preserveAspectRatio="xMidYMid meet">
        <defs>
            <linearGradient id="goldGradientDark" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#4a3e1c" />
                <stop offset="50%" stopColor="#eec23d" />
                <stop offset="100%" stopColor="#fdf6d8" />
            </linearGradient>
            <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#eec23d" />
                <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        {/* Lines connecting nodes */}
        {/* Main to Children */}
        <path d="M 400 120 L 400 180" stroke="url(#lineGlow)" strokeWidth="2" fill="none" className="animate-pulse-gold" />
        <path d="M 400 180 L 200 180 L 200 220" stroke="url(#lineGlow)" strokeWidth="2" fill="none" className="animate-pulse-gold" />
        <path d="M 400 180 L 600 180 L 600 220" stroke="url(#lineGlow)" strokeWidth="2" fill="none" className="animate-pulse-gold" />

        {/* Foundation line */}
        <path d="M 400 180 L 400 320" stroke="#4a3e1c" strokeWidth="2" fill="none" strokeDasharray="5,5" />

        {/* --- Main Estate Node --- */}
        <g transform="translate(400, 70)">
            <rect x="-100" y="-35" width="200" height="70" rx="8" fill="#110d06" stroke="url(#goldGradientDark)" strokeWidth="2" filter="url(#glow)" />
            <text x="0" y="-5" fill="#fdf6d8" fontSize="16" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold" className="tracking-widest capitalize">The Master Estate</text>
            <text x="0" y="15" fill="#eec23d" fontSize="10" fontFamily="sans-serif" textAnchor="middle" className="tracking-[0.3em] uppercase">Irrevocable Trust</text>
        </g>

        {/* --- Child A Node --- */}
        <g transform="translate(200, 260)">
            <rect x="-80" y="-40" width="160" height="80" rx="6" fill="#110d06" stroke="#4a3e1c" strokeWidth="1" />
            <text x="0" y="-10" fill="#e4e0d4" fontSize="14" fontFamily="sans-serif" textAnchor="middle" className="tracking-wider">Dynasty Trust A</text>
            <text x="0" y="8" fill="#8f918b" fontSize="10" fontFamily="sans-serif" textAnchor="middle" className="tracking-[0.2em] uppercase">G2 Beneficiary</text>
            <text x="0" y="22" fill="#eec23d" fontSize="9" fontFamily="sans-serif" textAnchor="middle" className="tracking-widest">Generation-Skipping</text>
        </g>

        {/* --- Child B Node --- */}
        <g transform="translate(600, 260)">
            <rect x="-80" y="-40" width="160" height="80" rx="6" fill="#110d06" stroke="#4a3e1c" strokeWidth="1" />
            <text x="0" y="-10" fill="#e4e0d4" fontSize="14" fontFamily="sans-serif" textAnchor="middle" className="tracking-wider">Dynasty Trust B</text>
            <text x="0" y="8" fill="#8f918b" fontSize="10" fontFamily="sans-serif" textAnchor="middle" className="tracking-[0.2em] uppercase">G2 Beneficiary</text>
            <text x="0" y="22" fill="#eec23d" fontSize="9" fontFamily="sans-serif" textAnchor="middle" className="tracking-widest">Generation-Skipping</text>
        </g>

        {/* --- Foundation Node --- */}
        <g transform="translate(400, 360)">
            <rect x="-110" y="-40" width="220" height="80" rx="6" fill="rgba(238,194,61,0.05)" stroke="#eec23d" strokeWidth="1" strokeDasharray="2,2" />
            <text x="0" y="-10" fill="#fdf6d8" fontSize="14" fontFamily="sans-serif" textAnchor="middle" className="tracking-wider italic">Philanthropic Foundation</text>
            <text x="0" y="8" fill="#eec23d" fontSize="10" fontFamily="sans-serif" textAnchor="middle" className="tracking-[0.2em] uppercase">501(c)(3) Conduit</text>
            <text x="0" y="22" fill="#8f918b" fontSize="9" fontFamily="sans-serif" textAnchor="middle" className="tracking-widest">Tax-Exempt Architecture</text>
        </g>
    </svg>
);

export default function V2FamilyOfficePage() {
    const heroRef = useRef(null);
    const { scrollYProgress: heroOpacity } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const contentOpacity = useTransform(heroOpacity, [0, 1], [1, 0]);

    return (
        <div className="bg-noble-charcoal text-noble-ivory font-sans pt-32 pb-24 selection:bg-noble-gold-500 selection:text-noble-charcoal min-h-screen">

            {/* HERO MODULE (Island-linked aesthetic) */}
            <section ref={heroRef} className="relative w-full h-[85vh] overflow-hidden mb-32 border-b border-noble-gold-900/40 perspective-1000">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen grayscale">
                    <source src="/videos/v2/horseback-riding.mp4" type="video/mp4" />
                </video>
                {/* Specific amber/warm tint for family office differentiation */}
                <div className="absolute inset-0 z-0 bg-noble-leather/40 mix-blend-color" />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-noble-charcoal via-noble-charcoal/80 to-transparent opacity-90" />

                <motion.div style={{ opacity: contentOpacity }} className="relative z-10 h-full flex items-center">
                    <div className="px-6 lg:px-12 max-w-7xl mx-auto w-full">
                        <CinematicReveal delay={0.2}>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-12 h-[1px] bg-noble-gold-500" />
                                <span className="text-[9px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold border border-noble-gold-500/30 px-4 py-1.5 rounded-full bg-[#110d06]/50 backdrop-blur-sm shadow-inner">Strategy III</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] text-noble-ivory font-display leading-[1.0] mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                                Private & <br />
                                <span className="italic text-transparent bg-clip-text bg-gradient-gold-foil">Family Office.</span>
                            </h1>
                            <p className="text-noble-slate text-sm md:text-lg font-serif leading-loose tracking-wide max-w-2xl border-l-2 border-noble-gold-900/60 pl-6">
                                Securing the architectural blueprint of generation-skipping wealth. We provide ultra-high-net-worth families with institutional-grade fiduciary oversight, legal structuring, and philanthropic administration.
                            </p>
                        </CinematicReveal>
                    </div>
                </motion.div>
            </section>

            {/* TRUST ARCHITECTURE VISUALIZATION (Deep 3D Island) */}
            <section className="px-6 lg:px-12 max-w-6xl mx-auto mb-40 perspective-1000">
                <CinematicReveal>
                    <motion.div whileHover={{ scale: 1.01 }} className="bg-noble-charcoal/60 backdrop-blur-3xl border border-noble-gold-500/40 rounded-3xl p-8 lg:p-16 shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-700 relative">
                        {/* Soft gold radial backdrop inside island */}
                        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(238,194,61,0.06)_0%,transparent_60%)] pointer-events-none" />

                        <div className="text-center mb-12 relative z-10">
                            <h2 className="text-3xl md:text-5xl font-display text-noble-ivory mb-4 tracking-wide italic">
                                Structural Architecture Model
                            </h2>
                            <p className="text-noble-slate text-xs uppercase tracking-[0.3em] font-bold">Standard Multi-Generational Trust Framework</p>
                        </div>

                        <div className="relative w-full aspect-[16/9] bg-[#0a0502]/80 lg:bg-[#0a0502] rounded-2xl border border-noble-gold-900/50 p-6 lg:p-10 shadow-inner z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="w-full h-full"
                            >
                                <GenerationalTreeSVG />
                            </motion.div>
                        </div>
                    </motion.div>
                </CinematicReveal>
            </section>

            {/* [NEW] SEC 3.5: Philanthropy & Education (Content Doubling - Dual Islands) */}
            <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-20 mb-40 perspective-1000">
                <CinematicReveal direction="up" duration={1.5}>
                    <div className="bg-noble-charcoal/50 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl p-8 lg:p-16 shadow-[0_40px_80px_rgba(0,0,0,0.9)] shadow-inner relative overflow-hidden group">

                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-noble-gold-500/50 to-transparent" />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                            <div className="lg:col-span-5 relative z-10 hidden lg:block perspective-1000">
                                <motion.div whileHover={{ rotateY: 5 }} className="relative h-[550px] w-full rounded-2xl overflow-hidden border border-noble-gold-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-transform duration-700">
                                    <Image
                                        src="/images/v2/family_crest_signet_1772830282530.png"
                                        alt="Generational Wealth Signet"
                                        fill
                                        className="object-cover saturate-50"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-noble-charcoal/80 to-transparent" />
                                </motion.div>
                            </div>

                            <div className="lg:col-span-7 lg:pl-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-8 h-[1px] bg-noble-gold-500/50" />
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">The Stewardship</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display text-noble-ivory italic leading-tight mb-8 tracking-wide drop-shadow-xl">
                                    Legacy & Education.
                                </h2>
                                <p className="text-noble-slate font-serif font-light leading-loose tracking-wide mb-8">
                                    The statistical reality is unforgiving: 70% of wealthy families lose their wealth by the second generation, and 90% by the third. Our structural mandate is to break this probabilistic ruin.
                                </p>

                                <div className="flex flex-col gap-6">
                                    <div className="group border hover:-translate-y-1 transition-all duration-300 border-noble-gold-900/50 bg-[#110d06]/60 rounded-xl p-8 shadow-inner relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-noble-gold-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                                        <div className="flex items-center gap-4 mb-4">
                                            <GraduationCap className="text-noble-gold-500" size={24} />
                                            <div className="font-display text-noble-ivory text-xl tracking-wider uppercase">Next-Gen Education</div>
                                        </div>
                                        <p className="text-base md:text-lg font-medium text-noble-slate leading-relaxed font-sans">Formalized curricula for heirs, teaching quantitative capital allocation, fiduciary responsibility, and the moral weight of wealth stewardship prior to asset transfer.</p>
                                    </div>
                                    <div className="group border hover:-translate-y-1 transition-all duration-300 border-noble-gold-900/50 bg-[#110d06]/60 rounded-xl p-8 shadow-inner relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-noble-gold-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                                        <div className="flex items-center gap-4 mb-4">
                                            <Heart className="text-noble-gold-500" size={24} />
                                            <div className="font-display text-noble-ivory text-xl tracking-wider uppercase">Philanthropic Conduits</div>
                                        </div>
                                        <p className="text-base md:text-lg font-medium text-noble-slate leading-relaxed font-sans">Full administrative support for 501(c)(3) foundations, ensuring familial legacy is enshrined through tax-efficient charitable architectures matching your values.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </CinematicReveal>
            </section>

            {/* SERVICE PILLARS (3D Islands) */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32">
                <div className="flex items-center gap-4 mb-16 justify-center">
                    <div className="w-12 h-[1px] bg-noble-gold-900/50" />
                    <span className="text-xs uppercase tracking-[0.3em] text-noble-slate">Operational Pillars</span>
                    <div className="w-12 h-[1px] bg-noble-gold-900/50" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Consolidated Reporting", desc: "A singular, cryptographic portal providing mathematically precise views across all global custodians, private business equity, and illiquid alternative investments.", icon: <BarChart2 size={24} />, tag: "Technology" },
                        { title: "Legal Structuring", desc: "Collaborative coordination with Tier-1 external counsel to design and administer complex Dynasty Trusts, ensuring absolute asset minimization against estate taxation.", icon: <Shield size={24} />, tag: "Architecture" },
                    ].map((tenet, idx) => (
                        <CinematicReveal key={tenet.title} delay={idx * 0.2}>
                            <motion.div whileHover={{ y: -10 }} className="group border border-noble-gold-500/30 bg-noble-charcoal/80 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] shadow-inner flex flex-col h-full transform transition-all duration-700 relative">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-noble-gold-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                                <div className="p-10 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="text-noble-gold-500/50 group-hover:text-noble-gold-400 transition-colors duration-500 drop-shadow-md">
                                            {tenet.icon}
                                        </div>
                                        <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-noble-gold-500 border border-noble-gold-900/50 px-3 py-1 rounded-full">{tenet.tag}</span>
                                    </div>
                                    <h3 className="text-2xl font-display text-noble-ivory mb-4 tracking-wide group-hover:text-noble-gold-300 transition-colors drop-shadow-sm">{tenet.title}</h3>
                                    <p className="text-noble-slate text-base md:text-lg font-medium leading-relaxed font-sans tracking-wide mb-8">{tenet.desc}</p>
                                </div>
                            </motion.div>
                        </CinematicReveal>
                    ))}

                    <CinematicReveal delay={0.4}>
                        <Link href="/v2/portal">
                            {/* CTA card formatted as Island */}
                            <motion.div whileHover={{ y: -10 }} className="group border border-noble-gold-500/60 bg-gradient-to-br from-[#110d06] to-noble-charcoal rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] shadow-inner flex flex-col items-center justify-center text-center p-10 h-full relative cursor-pointer">
                                <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: '128px 128px' }} />
                                <h3 className="text-2xl font-display text-noble-gold-400 mb-4 tracking-wide z-10 italic">Request Private Audience</h3>
                                <div className="w-12 h-[1px] bg-noble-gold-500/50 mb-4 z-10" />
                                <span className="text-[9px] uppercase tracking-[0.4em] text-noble-slate z-10 group-hover:text-noble-ivory transition-colors">By Invitation Only</span>
                            </motion.div>
                        </Link>
                    </CinematicReveal>
                </div>
            </section>

            {/* ONBOARDING TIMELINE (Embedded Island Grid) */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-40 text-center">
                <CinematicReveal>
                    <div className="bg-[#110d06]/40 backdrop-blur-xl border border-noble-gold-900/40 rounded-3xl p-10 lg:p-16 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                        <h2 className="text-2xl md:text-3xl font-display text-noble-ivory mb-16 tracking-wide italic">Onboarding Architecture</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
                            {/* Horizontal Line for Desktop */}
                            <div className="hidden md:block absolute top-8 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-noble-gold-900/60 to-transparent" />

                            {[
                                { step: "1", title: "Discovery", desc: "Mathematical audit of existing balance sheets and trust indentures." },
                                { step: "2", title: "Architecture", desc: "Collaborative structural design with internal and external counsel." },
                                { step: "3", title: "Implementation", desc: "Executing entity formation and securing global custodian mandates." },
                                { step: "4", title: "Stewardship", desc: "Algorithmic execution of capital alongside rigorous ongoing reporting." },
                            ].map((phase, idx) => (
                                <motion.div whileHover={{ scale: 1.05 }} key={phase.step} className="relative z-10 flex flex-col items-center group">
                                    <div className="w-16 h-16 rounded-full bg-noble-charcoal border-2 border-noble-gold-900/60 flex items-center justify-center font-display text-xl text-noble-gold-500 mb-6 group-hover:border-noble-gold-400 group-hover:bg-[#110d06] transition-colors shadow-xl">
                                        {phase.step}
                                    </div>
                                    <h4 className="text-sm uppercase tracking-[0.3em] text-noble-ivory font-bold mb-3">{phase.title}</h4>
                                    <p className="text-[10px] text-noble-slate max-w-[200px] leading-relaxed font-sans">{phase.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </CinematicReveal>
            </section>

            {/* FLOW NAVIGATION FOOTER */}
            <section className="border-t border-noble-gold-900/30 bg-[#110d06]">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="grid grid-cols-2 w-full divide-x divide-noble-gold-900/30">
                        <Link href="/v2/wealth-strategies/equities" className="group p-12 lg:p-16 hover:bg-noble-gold-900/10 transition-colors duration-500 flex flex-col justify-center relative overflow-hidden text-center items-center">
                            <span className="text-[9px] uppercase tracking-[0.4em] text-noble-slate mb-4 group-hover:text-noble-gold-500 transition-colors flex items-center gap-3 font-bold">
                                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Previous Mandate
                            </span>
                            <span className="font-display text-2xl lg:text-4xl text-noble-ivory group-hover:text-noble-gold-300 transition-colors italic">Strategic <br />Equities</span>
                        </Link>

                        <div className="p-12 lg:p-16 flex flex-col justify-center text-center items-center opacity-40 cursor-not-allowed">
                            <span className="text-[9px] uppercase tracking-[0.4em] text-noble-slate mb-4 flex items-center gap-3 font-bold">
                                Final Mandate Reached
                            </span>
                            <span className="font-display text-2xl lg:text-4xl text-noble-slate italic">End <br />Journey</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
