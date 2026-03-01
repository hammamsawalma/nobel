"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Percent, ArrowUpRight, BarChart3, ShieldCheck } from 'lucide-react';
import V11Header from "@/components/v2/Header";
import V11Footer from "@/components/v2/Footer";

export default function FixedIncomePage() {
    const snapSpring = { type: "spring", stiffness: 300, damping: 20, mass: 0.8 };

    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white min-h-screen">
            <V11Header />

            {/* HERO */}
            <section className="relative min-h-[60vh] md:min-h-[75vh] flex flex-col justify-end pb-16 md:pb-24 pt-32 px-6 lg:px-12 overflow-hidden border-b-[6px] md:border-b-[8px] border-[#0A1A3A]">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/vid/fixed_income_hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#0A1A3A]/60 mix-blend-multiply z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-0"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10 flex gap-8 items-end">
                    <div>
                        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={snapSpring as any} className="overflow-hidden mb-4 md:mb-6">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 tracking-[0.2em] font-bold text-[10px] md:text-sm uppercase px-5 py-2 rounded-full inline-block shadow-lg">
                                INVESTMENT SOLUTIONS
                            </div>
                        </motion.div>
                        <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.1 } as any} className="text-4xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.9] text-white max-w-5xl drop-shadow-2xl">
                            The Geometry of <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Predictable Yield.</span>
                        </motion.h1>
                        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.2 } as any} className="mt-6 md:mt-8 text-sm md:text-xl text-gray-300 max-w-2xl leading-relaxed font-medium drop-shadow-lg">
                            Fixed-income allocations are the shock absorbers of a resilient portfolio. By utilizing structured debt instruments, we engineer streams of predictable capital inflow.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* THE MECHANISM */}
            <section className="py-20 md:py-32 bg-[#0A1A3A] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8 leading-tight">The Mechanism.</h2>
                        <div className="w-20 h-1 bg-blue-500 mb-8 md:mb-10"></div>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium mb-6">
                            We mitigate the turbulence of equity markets by anchoring your wealth to high-grade corporate bonds and sovereign treasury notes.
                        </p>
                        <p className="text-blue-100 text-base md:text-lg leading-relaxed font-medium border-l-[3px] border-blue-500 pl-5 opacity-80">
                            This strategy is essential for wealth preservation, offering calculated, steady returns independent of broader market volatility. We do not speculate with your principal; we demand absolute structural integrity from every issuance.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ...snapSpring, delay: 0.1 } as any}
                        className="bg-[#0f234b] border border-blue-800/50 rounded-3xl p-8 md:p-10 shadow-2xl relative"
                    >
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                        <ShieldCheck className="w-12 h-12 text-blue-400 mb-6" />
                        <h3 className="text-2xl font-black text-white mb-4">Capital Preservation Priority</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Our architecture prioritizes the defense of your initial principal above aggressive yield seeking. This ensures your capital base remains intact while generating distributions.
                        </p>
                        <div className="flex items-center gap-3 text-sm font-bold text-blue-300 uppercase tracking-widest">
                            <ArrowUpRight className="w-4 h-4" /> Secure Your Core
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CORE ALLOCATIONS */}
            <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-200 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="text-center mb-16 md:mb-24"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3A] mb-4">Core Allocations.</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">The distinct tranches we utilize to build your defensive framework.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
                        {[
                            { title: "Sovereign Debt", desc: "The apex of security. Bonds issued by highly rated government entities offering ironclad stability and dependable coupon payments. These form the bedrock of defensive capital.", img: "fixed_income_sovereign_v2.png" },
                            { title: "Corporate Hybrids", desc: "Calibrated risk-to-reward. We meticulously vet senior corporate debt issuances from Tier-1 global companies to secure higher yields without compromising capital position.", img: "fixed_income_corporate_v2.png" },
                            { title: "Inflation Structures", desc: "Defending your purchasing power. We utilize specialized bonds whose principal adjustments are mathematically tethered to macroeconomic inflation indexes.", img: "fixed_income_inflation_v2.png" }
                        ].map((alloc, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...snapSpring, delay: i * 0.1 } as any}
                                className="group rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-gray-200/50 border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1A3A]/5 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                                <div className="aspect-[4/3] relative overflow-hidden bg-[#0A1A3A]">
                                    <Image src={`/v11_assets/${alloc.img}`} alt={alloc.title} fill className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                                </div>
                                <div className="p-8 md:p-10 relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-black text-[#0A1A3A] mb-4 group-hover:text-blue-600 transition-colors">{alloc.title}</h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">{alloc.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STRATEGIC BENCHMARKS */}
            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="w-full md:w-1/3"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-[#0A1A3A] mb-4">Strategic <br />Benchmarks.</h2>
                        <p className="text-gray-500 text-sm md:text-base">Operational parameters and targeted models defining our fixed-income architecture.</p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6"
                    >
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                            <Percent className="w-8 h-8 text-blue-600 mb-4" />
                            <div className="text-3xl font-black text-[#0A1A3A] mb-1">450-600</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">BPS Over Cash</div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <ShieldCheck className="w-8 h-8 text-[#0A1A3A] mb-4" />
                            <div className="text-xl font-black text-[#0A1A3A] mb-1 leading-tight">Conservative<br />to Moderate</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Risk Profile</div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <BarChart3 className="w-8 h-8 text-[#0A1A3A] mb-4" />
                            <div className="text-xl font-black text-[#0A1A3A] mb-1 leading-tight">High <br />Liquidity</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">T+2 Settlement</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <section className="py-16 md:py-24 bg-[#0A1A3A] text-center px-6 border-t-4 border-blue-600">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={snapSpring as any}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Secure Your Capital Position.</h2>
                    <p className="text-blue-100 mb-10 text-lg">Speak with a Fixed Income Strategist today to architect your defensive allocation.</p>
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-[#0A1A3A] hover:bg-transparent hover:text-white border border-transparent hover:border-white font-black uppercase tracking-widest px-6 md:px-8 py-4 text-[10px] md:text-xs rounded-full transition-all shadow-xl">
                        Schedule a Consultation <ChevronRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </section>

            <V11Footer />
        </div>
    );
}
