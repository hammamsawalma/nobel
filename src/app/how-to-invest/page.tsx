"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, ShieldCheck, TrendingUp, CheckCircle, ChevronRight, FileCheck } from 'lucide-react';
import V11Header from "@/components/v1/Header";
import V11Footer from "@/components/v1/Footer";

export default function HowToInvestPage() {
    const snapSpring = { type: "spring", stiffness: 300, damping: 20, mass: 0.8 };

    const elasticStagger = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };

    const itemElastic = {
        hidden: { y: 100, opacity: 0, scale: 0.9 },
        show: { y: 0, opacity: 1, scale: 1, transition: snapSpring }
    };

    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white overflow-x-hidden min-h-screen">
            <V11Header />

            {/* HERO */}
            <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end pb-16 md:pb-24 pt-32 px-6 lg:px-12 overflow-hidden border-b-[6px] md:border-b-[8px] border-[#0A1A3A]">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/vid2/melbourne-skyline-with-yarra-river-and-bridge-a-vibrant-urban-landscape-SBV-352664954-preview.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#0A1A3A]/60 mix-blend-multiply z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#0A1A3A]/40 to-black/20 z-0"></div>

                <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={snapSpring as any} className="mb-4">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 tracking-[0.2em] font-bold text-[10px] md:text-sm uppercase px-5 py-2 rounded-full inline-block shadow-lg">
                            ONBOARDING & EXECUTION
                        </div>
                    </motion.div>
                    <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.1 } as any} className="text-4xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] text-white drop-shadow-2xl">
                        A Streamlined Path to <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Capital Deployment.</span>
                    </motion.h1>
                    <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.2 } as any} className="mt-6 text-sm md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg">
                        We have engineered a frictionless, highly secure onboarding architecture for wholesale investors. Our methodology ensures total alignment before any capital is committed.
                    </motion.p>
                </div>
            </section>

            {/* PROCESS TIMELINE */}
            <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="text-center mb-16 md:mb-24"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-[#0A1A3A] mb-4">The Execution Methodology.</h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">Four deliberate steps from initial consultation to active market exposure.</p>
                    </motion.div>

                    <motion.div
                        variants={elasticStagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative"
                    >
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-1 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 rounded-full z-0"></div>

                        {[
                            { step: "01", icon: <Compass className="w-8 h-8 md:w-10 md:h-10 text-white" />, title: "Strategic Alignment", desc: "Confidential assessment of your financial architecture, asset allocation, and long-term legacy objectives." },
                            { step: "02", icon: <FileCheck className="w-8 h-8 md:w-10 md:h-10 text-white" />, title: "Portfolio Design", desc: "Constructing a bespoke portfolio blueprint across our distinct Fixed Income and Equity nodes." },
                            { step: "03", icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-white" />, title: "Custodial Setup", desc: "Seamless establishment of your segregated accounts with full AML/KYC compliance executed rapidly." },
                            { step: "04", icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />, title: "Capital Deployment", desc: "Calculated entry into the markets with immediate access to our 24/7 granular Client Portal." }
                        ].map((item, i) => (
                            <motion.div key={i} variants={itemElastic as any} className="relative z-10 flex flex-col items-center text-center">
                                <div className="bg-[#0A1A3A] w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center shadow-xl mb-6 transform hover:scale-110 transition-transform duration-500 hover:shadow-blue-500/30">
                                    {item.icon}
                                    <div className="absolute -top-3 -right-3 bg-blue-500 text-white font-black text-xs w-8 h-8 flex items-center justify-center rounded-full border-2 border-white">{item.step}</div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-[#0A1A3A] mb-3">{item.title}</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* WHOLESALE QUALIFICATIONS */}
            <section className="py-20 md:py-32 bg-white border-y border-gray-100">
                <div className="max-w-5xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A1A3A] mb-6 leading-tight">Wholesale Client <br className="hidden md:block" />Parameters.</h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                            To proceed with Nobel Wealth, ASIC regulations mandate that you must qualify as a Wholesale Investor via an Accountant's Certificate validating <strong>one</strong> of the following:
                        </p>
                        <div className="space-y-4">
                            {[
                                "Net assets of $2.5 million AUD or greater.",
                                "Gross income of $250,000 AUD or greater per annum over the last two financial years.",
                                "Professional Investor status under the Corporations Act."
                            ].map((req, i) => (
                                <div key={i} className="flex gap-4 items-start bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm md:text-base text-gray-700 font-bold">{req}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="w-full md:w-1/2 relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
                    >
                        <Image src="/v11_assets/wholesale_investor_compliance.png" alt="Compliance Overview" fill className="object-cover opacity-90 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-[#0A1A3A]/40"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                            <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-3xl p-8">
                                <ShieldCheck className="w-16 h-16 text-white mx-auto mb-4" />
                                <h3 className="text-2xl font-black text-white mb-2">Strictly Compliant</h3>
                                <p className="text-gray-200 text-sm font-medium">Protecting capital begins with rigorous regulatory adherence.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* INITIALIZATION FORM */}
            <section className="py-20 md:py-32 bg-[#0A1A3A] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-tl from-white/5 to-transparent transform -skew-y-12 translate-y-32"></div>

                <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="mb-10 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-lg">Initialize the Process.</h2>
                        <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">Provide your details below to schedule your preliminary alignment briefing with a Senior Strategist.</p>
                    </motion.div>

                    <motion.form
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ...snapSpring, delay: 0.2 } as any}
                        className="bg-[#0A1128]/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl text-left"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                            <div>
                                <label className="block text-[10px] md:text-xs font-bold tracking-widest text-blue-300 uppercase mb-3 text-left">Full Name</label>
                                <input type="text" className="w-full bg-[#0A1A3A]/50 border border-white/10 text-white rounded-xl p-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all placeholder-white/20" placeholder="e.g. Alexander Pierce" />
                            </div>
                            <div>
                                <label className="block text-[10px] md:text-xs font-bold tracking-widest text-blue-300 uppercase mb-3 text-left">Email Address</label>
                                <input type="email" className="w-full bg-[#0A1A3A]/50 border border-white/10 text-white rounded-xl p-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all placeholder-white/20" placeholder="alexander@domain.com" />
                            </div>
                            <div>
                                <label className="block text-[10px] md:text-xs font-bold tracking-widest text-blue-300 uppercase mb-3 text-left">Phone Number</label>
                                <input type="tel" className="w-full bg-[#0A1A3A]/50 border border-white/10 text-white rounded-xl p-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all placeholder-white/20" placeholder="+61 400 000 000" />
                            </div>
                            <div>
                                <label className="block text-[10px] md:text-xs font-bold tracking-widest text-blue-300 uppercase mb-3 text-left">Investment Entity</label>
                                <select className="w-full bg-[#0A1A3A]/50 border border-white/10 text-white rounded-xl p-4 text-sm focus:border-blue-400 outline-none transition-all appearance-none">
                                    <option value="individual">Individual / Joint</option>
                                    <option value="smsf">Self-Managed Super Fund (SMSF)</option>
                                    <option value="company">Company</option>
                                    <option value="trust">Family Trust</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-[10px] md:text-xs font-bold tracking-widest text-blue-300 uppercase mb-3 text-left">Approximate Capital for Allocation</label>
                                <select className="w-full bg-[#0A1A3A]/50 border border-white/10 text-white rounded-xl p-4 text-sm focus:border-blue-400 outline-none transition-all appearance-none">
                                    <option value="tier1">$500k - $1M</option>
                                    <option value="tier2">$1M - $5M</option>
                                    <option value="tier3">$5M - $10M+</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" className="w-full bg-white text-[#0A1A3A] font-black uppercase tracking-[0.2em] px-6 md:px-8 py-4 md:py-5 rounded-full text-[10px] md:text-xs hover:bg-blue-600 hover:text-white transition-all flex justify-center items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)] group">
                            Request Alignment Briefing <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </motion.form>
                </div>
            </section>

            <V11Footer />
        </div>
    );
}
