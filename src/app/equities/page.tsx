"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import V11Header from "@/components/v2/Header";
import V11Footer from "@/components/v2/Footer";
import AssetAllocationSandbox from "@/components/v2/AssetAllocationSandbox";

export default function EquitiesPage() {
    // High-velocity Spring configuration
    const snapSpring = { type: "spring", stiffness: 300, damping: 20, mass: 0.8 };

    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white min-h-screen">
            <V11Header />

            {/* HERO */}
            <section className="relative h-[60vh] flex flex-col justify-end pb-16 px-6 lg:px-12 overflow-hidden border-b-[8px] border-blue-600">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/vid/aerial-sydney-australia-sunny-day-4k-video-SBV-323005013-preview.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#0A1A3A]/30 mix-blend-multiply z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-0"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10 flex gap-8 items-end">
                    <div>
                        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={snapSpring as any} className="overflow-hidden mb-4">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white tracking-[0.2em] font-bold text-[10px] md:text-sm uppercase px-4 py-2 rounded-full inline-block">
                                Growth Engine
                            </div>
                        </motion.div>
                        <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.1 } as any} className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-white">
                            The Architecture of <br />
                            Outperformance.
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE MECHANISM */}
            <section className="py-24 bg-[#0A1A3A]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="text-4xl font-black text-white mb-8"
                    >
                        Calculated Velocity.
                    </motion.h2>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ...snapSpring, delay: 0.1 } as any}
                        className="text-gray-300 text-xl leading-relaxed font-medium"
                    >
                        To merely preserve capital is entirely insufficient in an inflationary environment. Our equity deployment strategy focuses relentlessly on businesses exhibiting monopolistic tendencies, impenetrable balance sheets, and ruthless operational efficiency. This is where your wealth scales aggressively.
                    </motion.p>
                </div>
            </section>

            {/* CORE ALLOCATIONS */}
            <section className="py-24 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-5xl font-black text-[#0A1A3A] mb-16 border-l-[6px] border-[#0A1A3A] pl-6">Sector Dominance.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "Domestic Titans", desc: "Anchoring your portfolio with ASX top-tier entities. Concentrated exposure to the financial structures and resource logistics that power the Australian economy.", img: "equities_domestic_titans.png" },
                            { title: "Global Technology Infrastructure", desc: "Capitalizing on the digital monopolies mapping our future. Heavy exposure to AI computation, cloud infrastructure, and global FinTech networks.", img: "equities_global_tech.png" },
                            { title: "Defensive Healthcare Tech", desc: "Identifying hyper-growth pharmaceutical manufacturers and bio-tech pioneers completely insulated from cyclical economic downturns.", img: "equities_defensive_healthcare.png" }
                        ].map((alloc, i) => (
                            <motion.div key={i} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ ...snapSpring, delay: i * 0.1 } as any} className="group rounded-2xl overflow-hidden bg-gray-50 shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                                <div className="aspect-[4/3] relative overflow-hidden bg-[#0A1A3A] border-b-4 border-[#0A1A3A]">
                                    <Image src={`/v11_assets/${alloc.img}`} alt={alloc.title} fill className="object-cover filter opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-3xl font-black text-[#0A1A3A] mb-4 group-hover:text-blue-600 transition-colors">{alloc.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">{alloc.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Interactive Asset Sandbox */}
            <AssetAllocationSandbox />

            {/* CTA */}
            <section className="py-24 bg-gray-50 border-t border-gray-200 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3A] mb-6">Take Command of Your Growth.</h2>
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                        Speak with our equity analysts to determine how your portfolio can capture monopolistic market share.
                    </p>
                    <Link href="#contact" className="inline-block bg-[#0A1A3A] hover:bg-[#1A2A4A] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-colors shadow-2xl">
                        Request Advisory Node Access
                    </Link>
                </div>
            </section>

            <V11Footer />
        </div>
    );
}
