"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Scale, Compass, Activity, ArrowUpRight } from 'lucide-react';
import V11Header from "@/components/v1/Header";
import V11Footer from "@/components/v1/Footer";

export default function FinancialAdvicePage() {
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
                    <source src="/vid/financial_advice_hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#0A1A3A]/60 mix-blend-multiply z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 z-0"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10 flex gap-8 items-end">
                    <div>
                        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={snapSpring as any} className="overflow-hidden mb-4 md:mb-6">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white tracking-[0.2em] font-bold text-[10px] md:text-sm uppercase px-5 py-2 rounded-full inline-block shadow-lg">
                                ADVISORY & STRUCTURING
                            </div>
                        </motion.div>
                        <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.1 } as any} className="text-4xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.9] text-white max-w-5xl drop-shadow-2xl">
                            Strategic Fiduciary <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Stewardship.</span>
                        </motion.h1>
                        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.2 } as any} className="mt-6 md:mt-8 text-sm md:text-xl text-gray-300 max-w-2xl leading-relaxed font-medium drop-shadow-lg">
                            Beyond simple asset allocation, we architect comprehensive financial frameworks. Our advisory nodes provide the strategic intelligence necessary to navigate complex wealth environments.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* THE PHILOSOPHY */}
            <section className="py-20 md:py-32 bg-[#0A1A3A] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8 leading-tight">Holistic Wealth Architecture.</h2>
                        <div className="w-20 h-1 bg-blue-500 mb-8 md:mb-10"></div>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium mb-6 text-justify">
                            True wealth management requires a holistic perspective. We do not view your assets in isolation. Our advisory board analyzes your entire financial ecosystem—from tax structuring to intergenerational transfer—ensuring total alignment with your overarching legacy objectives.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ...snapSpring, delay: 0.1 } as any}
                        className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-sm"
                    >
                        <div className="absolute top-4 right-4 opacity-10">
                            <Scale className="w-48 h-48 text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-blue-300 mb-6 uppercase tracking-widest relative z-10">The Nobel Wealth Standard</h3>
                        <p className="text-white text-xl md:text-2xl leading-relaxed font-bold italic relative z-10">
                            "Every recommendation we deploy is strictly impartial. Operating under a pure fiduciary mandate, our sole priority is the fortification and expansion of your capital."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CORE ADVISORY NODES */}
            <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="text-center mb-16 md:mb-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-[#0A1A3A] mb-4">Core Advisory Nodes.</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">The strategic pillars supporting your financial sovereignty.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
                        {[
                            { title: "Tax & Entity Structuring", desc: "Designing optimal holding environments. We consult on the utilization of Family Trusts, Corporate Entities, and Self-Managed Super Funds to achieve maximum tax efficiency.", img: "financial_advice_tax_v2.png" },
                            { title: "Intergenerational Transfer", desc: "Engineering your legacy. We map out the secure, structured transition of your wealth to future generations, actively mitigating estate risks and potential friction.", img: "financial_advice_legacy_v2.png" },
                            { title: "Corporate Executive Advisory", desc: "Specialized strategies for founders and C-suite executives. From concentrated stock unwinding to bespoke remuneration structuring and high-level liquidity events.", img: "financial_advice_corporate_v2.png" }
                        ].map((node, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...snapSpring, delay: i * 0.1 } as any}
                                className="group rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-gray-200/50 border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                            >
                                <div className="aspect-[4/3] relative overflow-hidden bg-[#0A1A3A]">
                                    <Image src={`/v11_assets/${node.img}`} alt={node.title} fill className="object-cover opacity-85 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 mix-blend-screen" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white text-6xl font-black opacity-20">0{i + 1}</div>
                                </div>
                                <div className="p-8 md:p-10 relative z-10 flex-1 flex flex-col bg-white">
                                    <h3 className="text-2xl md:text-3xl font-black text-[#0A1A3A] mb-4 group-hover:text-blue-600 transition-colors">{node.title}</h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium mb-6 flex-1">{node.desc}</p>
                                    <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                        Explore Node <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE ADVISORY PROCESS */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="text-center mb-16 md:mb-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-[#0A1A3A] mb-4">The Engagement Process.</h2>
                        <p className="text-gray-500 text-lg">A structured, four-phase methodology for integrating our advisory services.</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-6 md:space-y-8"
                    >
                        {[
                            { phase: "Phase 1", title: "Deep Discovery", desc: "A comprehensive audit of your current financial architecture, identifying vulnerabilities and structural inefficiencies." },
                            { phase: "Phase 2", title: "Strategic Blueprinting", desc: "Drafting the precise, customized action plan that aligns your capital structure with your long-term legacy objectives." },
                            { phase: "Phase 3", title: "Tactical Execution", desc: "The deliberate deployment of capital and the legal establishment of new protective entity structures." },
                            { phase: "Phase 4", title: "Ongoing Surveillance", desc: "Continuous, rigorous monitoring and dynamic re-calibration of your asset allocation based on macroeconomic shifts." }
                        ].map((step, i) => (
                            <motion.div key={i} variants={dropIn as any} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center bg-gray-50 p-6 md:p-8 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className="bg-[#0A1A3A] text-white font-mono font-bold w-16 h-16 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 shadow-md">
                                    0{i + 1}
                                </div>
                                <div>
                                    <div className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">{step.phase}</div>
                                    <h3 className="text-2xl font-black text-[#0A1A3A] mb-2">{step.title}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <section className="py-16 md:py-24 bg-[#0A1A3A] text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent mix-blend-multiply"></div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={snapSpring as any}
                    className="max-w-3xl mx-auto relative z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Establish Your Strategic Node.</h2>
                    <p className="text-blue-200 mb-10 text-lg md:text-xl font-medium">Request a confidential consultation with a Senior Wealth Architect to begin auditing your financial framework.</p>
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-[#0A1A3A] hover:bg-transparent hover:text-white border border-transparent hover:border-white font-black uppercase tracking-widest px-6 md:px-8 py-4 text-[10px] md:text-xs rounded-full transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-none">
                        Schedule a Private Consultation <ChevronRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </section>

            <V11Footer />
        </div>
    );
}
