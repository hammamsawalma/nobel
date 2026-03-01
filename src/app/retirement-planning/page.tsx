"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, TrendingUp, Landmark, Droplets, ArrowUpRight } from 'lucide-react';
import V11Header from "@/components/v2/Header";
import V11Footer from "@/components/v2/Footer";

export default function RetirementPlanningPage() {
    const snapSpring = { type: "spring", stiffness: 300, damping: 20, mass: 0.8 };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
    };

    const dropIn = {
        hidden: { y: 30, opacity: 0 },
        show: { y: 0, opacity: 1, transition: snapSpring }
    };

    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white min-h-screen">
            <V11Header />

            {/* HERO */}
            <section className="relative min-h-[60vh] md:min-h-[75vh] flex flex-col justify-end pb-16 md:pb-24 pt-32 px-6 lg:px-12 overflow-hidden border-b-[6px] md:border-b-[8px] border-[#0A1A3A]">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/vid/retirement_planning_hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#0A1A3A]/50 mix-blend-multiply z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 z-0"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10 flex gap-8 items-end">
                    <div>
                        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={snapSpring as any} className="overflow-hidden mb-4 md:mb-6">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 tracking-[0.2em] font-bold text-[10px] md:text-sm uppercase px-5 py-2 rounded-full inline-block shadow-lg">
                                SECURE YIELD & PRESERVATION
                            </div>
                        </motion.div>
                        <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.1 } as any} className="text-4xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.9] text-white max-w-5xl drop-shadow-2xl">
                            Definitive Post-Career <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Security.</span>
                        </motion.h1>
                        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.2 } as any} className="mt-6 md:mt-8 text-sm md:text-xl text-gray-300 max-w-2xl leading-relaxed font-medium drop-shadow-lg">
                            Transitioning from active wealth accumulation to passive wealth preservation. We mathematically structure your portfolio to ensure your capital outlives your requirements.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* THE PHILOSOPHY */}
            <section className="py-20 md:py-32 bg-[#0A1A3A] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-900/10 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8 leading-tight">The Preservation Mandate.</h2>
                        <div className="w-20 h-1 bg-blue-500 mb-8 md:mb-10"></div>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium mb-6 text-justify">
                            Retirement is not the cessation of growth; it is the recalibration of risk. Our primary directive shifts from aggressive capital scaling to ironclad capital defense and sustainable, inflation-adjusted yield generation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ...snapSpring, delay: 0.1 } as any}
                        className="bg-[#0f234b] border border-blue-800/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    >
                        <ShieldCheck className="w-16 h-16 text-blue-500 mb-8 relative z-10" />
                        <h3 className="text-xl md:text-2xl font-black text-white mb-4 uppercase tracking-widest relative z-10">The Nobel Wealth Standard</h3>
                        <p className="text-blue-100 text-lg md:text-xl leading-relaxed font-medium italic relative z-10">
                            "In retirement, volatility is the enemy of longevity. We construct portfolios designed to weather severe macroeconomic shocks without compromising your standard of living."
                        </p>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>
            </section>

            {/* CORE STRATEGIES (Service Pillars) */}
            <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="text-center mb-16 md:mb-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-[#0A1A3A] mb-4">Core Retirement Strategies.</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">The unyielding pillars of our wealth preservation framework.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { title: "Capital Defense & Yield", desc: "Reallocating assets toward high-grade fixed-income and defensive equities to produce predictable streams of passive income.", img: "retirement_defense_v2.png", icon: ShieldCheck },
                            { title: "Inflation-Adjusted Modeling", desc: "Stress-testing your portfolio against long-term inflation scenarios, ensuring your yield consistently outpaces the rising cost of living.", img: "retirement_inflation_v2.png", icon: TrendingUp },
                            { title: "SMSF Optimization", desc: "Maximizing the structural tax benefits of the Australian Superannuation environment, optimizing your tax-free pension phase.", img: "retirement_super_v2.png", icon: Landmark },
                            { title: "Aged Care & Liq. Buffers", desc: "Ensuring sufficient, highly liquid cash buffers are maintained to address unforeseen healthcare contingencies.", img: "retirement_liquidity_v2.png", icon: Droplets }
                        ].map((node, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...snapSpring, delay: i * 0.1 } as any}
                                className="group rounded-3xl overflow-hidden bg-white shadow-xl shadow-gray-200/50 border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                            >
                                <div className="aspect-square relative overflow-hidden bg-[#0A1A3A]">
                                    <Image src={`/v11_assets/${node.img}`} alt={node.title} fill className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A] via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
                                    <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between">
                                        <node.icon className="w-8 h-8 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                                        <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" />
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 relative z-10 flex-1 flex flex-col bg-white">
                                    <h3 className="text-xl md:text-2xl font-black text-[#0A1A3A] mb-3 group-hover:text-blue-600 transition-colors leading-tight">{node.title}</h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">{node.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE TRANSITION TIMELINE */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="mb-16 md:mb-20 text-center md:text-left"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-[#0A1A3A] mb-4">The Transition Timeline.</h2>
                        <p className="text-gray-500 text-lg">A deliberate sequence for migrating your capital into a highly defensive, yield-generating stance.</p>
                    </motion.div>

                    <div className="relative">
                        {/* Vertical line connecting nodes for larger screens */}
                        <div className="hidden md:block absolute left-[31px] top-4 bottom-4 w-[2px] bg-gray-200 z-0"></div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-8 md:space-y-12 relative z-10"
                        >
                            {[
                                { phase: "Phase 1", title: "Accumulation Review", desc: "A total assessment of pre-retirement asset structures and current velocity." },
                                { phase: "Phase 2", title: "Risk Recalibration", desc: "Systematically de-risking the portfolio architecture, exchanging high-beta equity for structured debt." },
                                { phase: "Phase 3", title: "The Pension Phase", desc: "Activating the highly optimized, tax-free income streams drawn from your SMSF or retail structures." },
                                { phase: "Phase 4", title: "Legacy Preservation", desc: "Ensuring surplus capital is fundamentally protected and structured for beneficiaries." }
                            ].map((step, i) => (
                                <motion.div key={i} variants={dropIn as any} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
                                    {/* Number Circle */}
                                    <div className="w-16 h-16 rounded-full bg-white border-4 border-[#0A1A3A] shadow-lg flex items-center justify-center text-xl font-black text-[#0A1A3A] flex-shrink-0 relative z-10 group-hover:bg-[#0A1A3A] group-hover:text-white transition-colors">
                                        0{i + 1}
                                    </div>
                                    <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-8 w-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">{step.phase}</div>
                                        <h3 className="text-2xl font-black text-[#0A1A3A] mb-2">{step.title}</h3>
                                        <p className="text-gray-600 font-medium leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <section className="py-16 md:py-24 bg-[#0A1A3A] text-center px-6 relative overflow-hidden border-t-4 border-blue-600">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={snapSpring as any}
                    className="max-w-3xl mx-auto relative z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Secure Your Financial Longevity.</h2>
                    <p className="text-blue-200 mb-10 text-lg md:text-xl font-medium">Request a confidential consultation with a Retirement Strategist to audit your transition readiness.</p>
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-white text-white hover:text-[#0A1A3A] font-black uppercase tracking-widest px-6 md:px-8 py-4 text-[10px] md:text-xs rounded-full transition-all shadow-xl shadow-blue-500/20">
                        Schedule a Retirement Audit <ChevronRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </section>

            <V11Footer />
        </div>
    );
}
