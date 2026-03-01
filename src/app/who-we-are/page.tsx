"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import V11Header from "@/components/v2/Header";
import V11Footer from "@/components/v2/Footer";

export default function WhoWeArePage() {
    const snapSpring = { type: "spring", stiffness: 300, damping: 20, mass: 0.8 };

    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white overflow-x-hidden min-h-screen">
            <V11Header />

            {/* HERO with new formatting and video */}
            <section className="relative min-h-[60vh] md:h-[60vh] flex flex-col justify-end pb-12 md:pb-16 px-6 lg:px-12 overflow-hidden border-b-[6px] md:border-b-[8px] border-[#0A1A3A]">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/vid/beautiful-skyscraper-in-the-centre-aerial-view-modern-building-in-city-centre--SBV-348580015-preview.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#0A1A3A]/50 mix-blend-multiply z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-0"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10 flex gap-8 items-end">
                    <div>
                        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={snapSpring as any} className="overflow-hidden mb-4">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white tracking-[0.2em] font-bold text-[10px] md:text-sm uppercase px-4 py-2 rounded-full inline-block">
                                Firm Overview
                            </div>
                        </motion.div>
                        <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.1 } as any} className="text-4xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[0.9] text-white max-w-4xl drop-shadow-2xl">
                            25 Years of <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Unyielding Defense.</span>
                        </motion.h1>
                        <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.2 } as any} className="mt-6 text-sm md:text-xl text-gray-200 max-w-2xl leading-relaxed font-medium drop-shadow-lg">
                            We are an elite collective of market strategists and fiduciary stewards, dedicated to unlocking your financial potential.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* DIRECTIVE (Text Right, Image Left) */}
            <section className="py-16 md:py-24 bg-[#0A1A3A]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={snapSpring as any} className="relative rounded-3xl overflow-hidden aspect-square border border-white/10 shadow-2xl">
                        {/* A strong bright image fits best here, or inverted abstract */}
                        <Image src="/v11_assets/who_directive_leadership.png" alt="Directive" fill className="object-cover opacity-80 mix-blend-screen" />
                        <div className="absolute inset-0 bg-[#0A1A3A]/20"></div>
                    </motion.div>
                    <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={snapSpring as any}>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8 leading-tight">Our Directive.</h2>
                        <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-8">
                            Established on a foundation of rigorous mathematical modeling and unwavering ethical standards, Nobel Wealth has evolved into a premier destination for secure, aggressive wealth distribution and institutional-grade fixed income.
                        </p>
                        <div className="bg-blue-900/20 border border-blue-500/20 p-6 md:p-8 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                            <p className="text-white text-base md:text-lg leading-relaxed font-bold relative z-10">
                                "We do not chase trends. We structure enduring value. Our absolute priority is the defense and calculated expansion of your assets."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* VIRTUES */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16 md:mb-24">
                        <motion.h2
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={snapSpring as any}
                            className="text-4xl md:text-6xl font-black text-[#0A1A3A]"
                        >
                            Core Virtues.
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {[
                            { title: "Integrity", desc: "The bedrock of our architecture. Expect unfiltered truth, transparent fee structures, and completely unbiased execution." },
                            { title: "Protection", desc: "We build fortresses around your wealth. Utilizing strict ASIC-compliant oversight and Tier-1 custodial segregation, your capital is shielded from systemic shocks." },
                            { title: "Excellence", desc: "Average is unacceptable. We apply deep quantitative analysis and relentless market surveillance to identify asymmetrical opportunities ahead of the curve." },
                            { title: "Responsibility", desc: "We align capital with consequence. Our fixed-income and equity strategies integrate deep systemic considerations, ensuring your wealth builds a stronger future." }
                        ].map((virtue, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...snapSpring, delay: i * 0.1 } as any}
                                className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:border-blue-200 transition-all duration-500 group"
                            >
                                <div className="text-blue-600 font-mono mb-6 md:mb-8 text-xl md:text-2xl font-black bg-blue-50 w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">0{i + 1}</div>
                                <h3 className="text-2xl md:text-3xl font-black text-[#0A1A3A] mb-4">{virtue.title}</h3>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">{virtue.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CUSTODIAL & REGULATORY FRAMEWORK */}
            <section className="py-16 bg-blue-900 border-y border-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A3A] to-transparent mix-blend-multiply"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center gap-10 lg:gap-20">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Immutable Trust <br />Architecture.</h2>
                        <p className="text-blue-200 text-sm md:text-base leading-relaxed">
                            Operating distinctly apart from major banking conglomerates, we offer an independent, unconflicted perspective. Your assets are never commingled. We execute strategies while Tier-1 global institutions securely hold your capital.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur border border-white/20 p-5 rounded-xl text-center">
                            <div className="text-white font-black text-xl mb-1">Independent & Unbiased</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur border border-white/20 p-5 rounded-xl text-center">
                            <div className="text-white font-black text-xl mb-1">Segregated Accounts</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur border border-white/20 p-5 rounded-xl text-center sm:col-span-2">
                            <div className="text-white font-black text-xl mb-1">ASIC Regulated</div>
                            <div className="text-blue-300 text-xs font-bold uppercase tracking-widest">Wholesale Only</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM / LEADERSHIP */}
            <section className="py-20 md:py-32 bg-[#0A1A3A] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="mb-12 md:mb-20 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 md:mb-6">Executive Committee.</h2>
                        <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto">
                            The architects guiding capital allocation. Deep pedigree across top-tier global banking institutions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            { name: "Julian Vance", role: "Chief Investment Officer", focus: "Algorithmic Equities", img: "team_portrait_cio.png" },
                            { name: "Dr. Elena Rostova", role: "Head of Risk Management", focus: "Asymmetric Hedging", img: "team_portrait_risk.png" },
                            { name: "Marcus Thorne", role: "Director of Fixed Income", focus: "Yield Arbitration", img: "team_portrait_fixed_income.png" }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...snapSpring, delay: i * 0.15 } as any}
                                className="group relative"
                            >
                                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative mb-6">
                                    <Image src={`/v11_assets/${member.img}`} alt={member.name} fill className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-screen" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A] via-transparent to-transparent"></div>
                                </div>
                                <h3 className="text-xl md:text-3xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{member.name}</h3>
                                <div className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">{member.role}</div>
                                <div className="text-gray-400 bg-white/5 py-2 px-4 rounded-lg font-mono text-xs border border-white/10 inline-block">Specialty: {member.focus}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <section className="py-16 md:py-24 bg-gray-50 text-center px-6 border-y border-gray-200">
                <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={snapSpring as any} className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-[#0A1A3A] mb-8">Ready to Align Your Capital?</h2>
                    <Link href="/contact" className="inline-block bg-[#0A1A3A] text-white hover:bg-blue-600 px-6 md:px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs transition-colors shadow-lg shadow-[#0A1A3A]/20 text-center">
                        Schedule a Confidential Consultation
                    </Link>
                </motion.div>
            </section>

            <V11Footer />
        </div>
    );
}
