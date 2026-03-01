"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import V11Header from "@/components/v2/Header";
import V11Footer from "@/components/v2/Footer";

export default function FixedIncomePage() {
    const snapSpring = { type: "spring", stiffness: 300, damping: 20, mass: 0.8 };

    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white min-h-screen">
            <V11Header />

            {/* HERO */}
            <section className="relative h-[60vh] flex flex-col justify-end pb-16 px-6 lg:px-12 overflow-hidden border-b-[8px] border-[#0A1A3A]">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/vid/australia-sydney-sydney-harbour-bridge-connect-business-center-city-skyline-wi-SBV-352381156-preview.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#0A1A3A]/40 mix-blend-multiply z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-0"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10 flex gap-8 items-end">
                    <div>
                        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={snapSpring as any} className="overflow-hidden mb-4">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white tracking-[0.2em] font-bold text-[10px] md:text-sm uppercase px-4 py-2 rounded-full inline-block">
                                Strategy
                            </div>
                        </motion.div>
                        <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.1 } as any} className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-white">
                            The Geometry of <br />
                            Predictable Yield.
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* THE MECHANISM */}
            <section className="py-24 bg-[#0A1A3A]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="text-4xl md:text-5xl font-black text-white mb-8"
                    >
                        The Mechanism.
                    </motion.h2>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ...snapSpring, delay: 0.1 } as any}
                        className="text-gray-300 text-xl leading-relaxed font-medium"
                    >
                        Fixed-income allocations are the shock absorbers of a resilient portfolio. By utilizing structured debt instruments—such as government treasury notes and high-grade corporate bonds—we engineer streams of predictable capital inflow. This strategy is essential for mitigating the turbulence of equity markets, highly recommended for those entering their wealth-preservation phase.
                    </motion.p>
                </div>
            </section>

            {/* CORE ALLOCATIONS */}
            <section className="py-24 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-5xl font-black text-[#0A1A3A] mb-16 border-l-[6px] border-blue-600 pl-6">Core Allocations.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "Sovereign Debt", desc: "The apex of security. Bonds issued by highly rated entities offering ironclad stability and dependable coupon payments.", img: "fixed_sovereign_debt.png" },
                            { title: "Corporate Hybrids", desc: "Calibrated risk-to-reward. We meticulously vet corporate debt issuances to secure higher yields.", img: "fixed_corporate_hybrids.png" },
                            { title: "Inflation Structures", desc: "Defending your purchasing power. We utilize specialized bonds whose principal adjustments are mathematically tethered to inflation indexes.", img: "fixed_inflation_structures.png" }
                        ].map((alloc, i) => (
                            <motion.div key={i} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ ...snapSpring, delay: i * 0.1 } as any} className="group rounded-2xl overflow-hidden bg-gray-50 shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                                <div className="aspect-[4/3] relative overflow-hidden bg-[#0A1A3A]">
                                    {/* These images look better as simple background headers */}
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

            <V11Footer />
        </div>
    );
}
