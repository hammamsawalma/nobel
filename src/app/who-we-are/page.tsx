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
                        <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.1 } as any} className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.85] text-white">
                            Custodians of <br />
                            Capital.
                        </motion.h1>
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
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 md:mb-6">Our Directive.</h2>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                            We are an elite collective of market strategists and fiduciary stewards, dedicated to unlocking your financial potential. Established on a foundation of rigorous mathematical modeling and unwavering ethical standards, Nobel Rock Partners has evolved into a premier destination for secure, aggressive wealth management.
                        </p>
                        <p className="text-white text-base md:text-lg leading-relaxed font-bold border-l-[4px] md:border-l-[6px] border-blue-500 pl-4 md:pl-6">
                            We do not chase trends; we structure enduring value. Our absolute priority is the defense and calculated expansion of your assets.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* VIRTUES */}
            <section className="py-16 md:py-24 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3A] mb-12 md:mb-16 text-center">Core Virtues.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        {[
                            { title: "Integrity", desc: "The bedrock of our architecture. Expect unfiltered truth, transparent fee structures, and completely unbiased execution." },
                            { title: "Protection", desc: "We build fortresses around your wealth. Utilizing stringent ASIC-compliant oversight and Tier-1 custodial segregation, your capital is shielded from systemic shocks." },
                            { title: "Excellence", desc: "Average is unacceptable. We apply deep quantitative analysis and relentless market surveillance to identify asymmetrical opportunities ahead of the curve." },
                            { title: "Responsibility", desc: "We align capital with consequence. Our strategies integrate deep ESG considerations, ensuring your wealth builds a stronger future." }
                        ].map((virtue, i) => (
                            <motion.div key={i} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ ...snapSpring, delay: i * 0.1 } as any} className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all">
                                <div className="text-white font-mono mb-4 md:mb-6 text-xl font-bold bg-[#0A1A3A] w-12 h-12 flex items-center justify-center rounded-xl shadow-md">0{i + 1}</div>
                                <h3 className="text-2xl md:text-3xl font-black text-[#0A1A3A] mb-3 md:mb-4">{virtue.title}</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">{virtue.desc}</p>
                            </motion.div>
                        ))}
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
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 md:mb-6">Strategic Node.</h2>
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
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative mb-6">
                                    {/* Placeholder applying a monochromatic filter to existing images for a 'portait' feel */}
                                    <Image src={`/v11_assets/${member.img}`} alt={member.name} fill className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 mix-blend-screen" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A] via-transparent to-transparent"></div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">{member.name}</h3>
                                <div className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">{member.role}</div>
                                <div className="text-gray-400 font-mono text-sm border-t border-white/10 pt-3 inline-block">Specialty: {member.focus}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <V11Footer />
        </div>
    );
}
