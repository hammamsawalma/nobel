"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Percent, ArrowUpRight, Target, Activity } from 'lucide-react';
import V11Header from "@/components/v2/Header";
import V11Footer from "@/components/v2/Footer";
import AssetAllocationSandbox from "@/components/v2/AssetAllocationSandbox";

export default function EquitiesPage() {
    const snapSpring = { type: "spring", stiffness: 300, damping: 20, mass: 0.8 };

    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white min-h-screen">
            <V11Header />

            {/* HERO */}
            <section className="relative min-h-[60vh] md:min-h-[75vh] flex flex-col justify-end pb-16 md:pb-24 pt-32 px-6 lg:px-12 overflow-hidden border-b-[6px] md:border-b-[8px] border-blue-600">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/vid/equities_hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#0A1A3A]/50 mix-blend-multiply z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#0A1A3A]/40 to-black/20 z-0"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10 flex gap-8 items-end">
                    <div>
                        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={snapSpring as any} className="overflow-hidden mb-4 md:mb-6">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 tracking-[0.2em] font-bold text-[10px] md:text-sm uppercase px-5 py-2 rounded-full inline-block shadow-lg">
                                INVESTMENT SOLUTIONS
                            </div>
                        </motion.div>
                        <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.1 } as any} className="text-4xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.9] text-white max-w-5xl drop-shadow-2xl">
                            The Architecture of <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Outperformance.</span>
                        </motion.h1>
                        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.2 } as any} className="mt-6 md:mt-8 text-sm md:text-xl text-gray-300 max-w-2xl leading-relaxed font-medium drop-shadow-lg">
                            To merely preserve capital is entirely insufficient in an inflationary environment. Our equity deployment strategy focuses relentlessly on businesses exhibiting monopolistic tendencies.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* THE PHILOSOPHY */}
            <section className="py-20 md:py-32 bg-[#0A1A3A] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8 leading-tight">Calculated Velocity.</h2>
                        <div className="w-20 h-1 bg-blue-500 mb-8 md:mb-10"></div>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium mb-6">
                            We do not chase short-term market noise. We identify and acquire stakes in enterprises with impenetrable balance sheets and ruthless operational efficiency.
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mt-8 group hover:bg-white/10 transition-colors">
                            <p className="text-white text-base md:text-lg leading-relaxed font-bold italic">
                                "This is where your wealth scales aggressively, capturing true market share globally."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ...snapSpring, delay: 0.1 } as any}
                        className="bg-blue-600 border border-blue-400 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(37,99,235,0.3)] relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
                        <Activity className="w-16 h-16 text-white mb-8 relative z-10" />
                        <h3 className="text-3xl font-black text-white mb-4 relative z-10">Monopolistic Growth</h3>
                        <p className="text-blue-100 text-base md:text-lg leading-relaxed font-medium mb-8 relative z-10">
                            Our architecture demands exposure to entities that possess pricing power. In environments of systemic stress, true monopolies expand margins while competitors compress.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-white text-blue-900 px-4 py-2 rounded-full font-bold uppercase tracking-widest text-xs relative z-10">
                            Target: Sector Dominance
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTOR DOMINANCE CARDS */}
            <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-200 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="text-center mb-16 md:mb-24"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3A] mb-4">Sector Dominance.</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">The strategic verticals powering our equity outperformance.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
                        {[
                            { title: "Domestic Titans", desc: "Anchoring your portfolio with ASX top-tier entities. Concentrated exposure to the financial structures and resource logistics that power the broader global economy.", img: "equities_domestic_titans_v2.png" },
                            { title: "Global Technology", desc: "Capitalizing on the digital monopolies mapping our future. Heavy exposure to AI computation, cloud infrastructure, and global FinTech networks.", img: "equities_global_tech_v2.png" },
                            { title: "Defensive Healthcare", desc: "Identifying hyper-growth pharmaceutical manufacturers and bio-tech pioneers completely insulated from cyclical economic downturns.", img: "equities_defensive_healthcare_v2.png" }
                        ].map((alloc, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...snapSpring, delay: i * 0.1 } as any}
                                className="group rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-gray-200/50 border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative flex flex-col"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                                <div className="aspect-[4/3] relative overflow-hidden bg-[#0A1A3A] border-b-4 border-blue-600">
                                    <Image src={`/v11_assets/${alloc.img}`} alt={alloc.title} fill className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                                </div>
                                <div className="p-8 md:p-10 relative z-10 flex-1 flex flex-col">
                                    <h3 className="text-2xl md:text-3xl font-black text-[#0A1A3A] mb-4 group-hover:text-blue-600 transition-colors">{alloc.title}</h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium mb-6 flex-1">{alloc.desc}</p>
                                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTERACTIVE SANDBOX */}
            <div className="border-b border-gray-200">
                <AssetAllocationSandbox />
            </div>

            {/* STRATEGIC EQUITY PARAMETERS */}
            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="w-full md:w-1/3"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-[#0A1A3A] mb-4">Aggressive <br />Parameters.</h2>
                        <p className="text-gray-500 text-sm md:text-base">The mathematical benchmarks demanded from our equity allocations.</p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6"
                    >
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full -mr-8 -mt-8"></div>
                            <Percent className="w-8 h-8 text-blue-600 mb-4" />
                            <div className="text-3xl font-black text-[#0A1A3A] mb-1">CPI + 5-7%</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Target Min Growth</div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <Target className="w-8 h-8 text-[#0A1A3A] mb-4" />
                            <div className="text-xl font-black text-[#0A1A3A] mb-1 leading-tight">5 - 7+ <br />Years</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Investment Horizon</div>
                        </div>
                        <div className="bg-[#0A1A3A] rounded-2xl p-6 border border-gray-800 shadow-xl">
                            <Activity className="w-8 h-8 text-blue-400 mb-4" />
                            <div className="text-xl font-black text-white mb-1 leading-tight">High Growth<br />& Aggressive</div>
                            <div className="text-xs font-bold text-blue-300 uppercase tracking-widest mt-2">Risk Profile</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <section className="py-16 md:py-24 bg-[#0A1A3A] text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={snapSpring as any}
                    className="max-w-3xl mx-auto relative z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Take Command of Your Growth.</h2>
                    <p className="text-blue-200 mb-10 text-lg md:text-xl">Speak with our equity analysts to determine how your portfolio can capture robust market share.</p>
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-white text-white hover:text-[#0A1A3A] font-black uppercase tracking-widest px-6 md:px-8 py-4 text-[10px] md:text-xs rounded-full transition-all shadow-xl shadow-blue-500/20">
                        Request Advisory Access <ChevronRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </section>

            <V11Footer />
        </div>
    );
}
