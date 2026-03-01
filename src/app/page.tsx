"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import InteractiveProfitCalculator from '@/components/v2/InteractiveProfitCalculator';
import MarketTicker from '@/components/v2/MarketTicker';
import TrustMarquee from '@/components/v2/TrustMarquee';
import ExecutionTimeline from "@/components/v2/ExecutionTimeline";

import V11Header from "@/components/v2/Header";
import V11Footer from "@/components/v2/Footer";
import FaqAccordion from "@/components/v2/FaqAccordion";

export default function Variant11NobelWealth() {

    // High-velocity Spring configuration (adapted from V9)
    const snapSpring = {
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.8
    };

    const elasticStagger = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const itemElastic = {
        hidden: { y: 100, opacity: 0, scale: 0.9 },
        show: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: snapSpring
        }
    };

    // V11 generated images mapping
    // /Users/spacetoonevent/.gemini/antigravity/brain/e934b82b-28fe-461c-ba19-26aa5b07f5c/v11_metropolitan_flow_1_XX.png
    // Assume images are moved to /public/images/v11_metropolitan_flow_X.png later or we use specific AI files.
    // For now using placeholder relative paths we will copy to public
    const imgBase = "/images/v11"; // We will script a copy of the generated images to public/images/v11

    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white overflow-x-hidden min-h-screen">
            <V11Header />

            {/* SECTION 1: Video Hero (Restored - Option 6A) */}
            <section className="relative h-screen flex flex-col justify-center px-6 lg:px-12 overflow-hidden border-b-[8px] border-[#0A1A3A]">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/vid/drone-shot-above-river-panning-down-showing-brisbane-cbd-expressway-motorway-a-SBV-348964395-preview.mp4" type="video/mp4" />
                </video>
                {/* Subtle dark tint over video for readability */}
                <div className="absolute inset-0 bg-[#0A1A3A]/40 mix-blend-multiply z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-0"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10 text-center mt-20">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ...snapSpring, delay: 0.1 } as any}
                        className="overflow-hidden mb-6 flex justify-center"
                    >
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white tracking-[0.2em] font-bold text-[10px] md:text-xs uppercase px-6 py-2 rounded-full shadow-lg">
                            Architecting Liquidity. Securing Tomorrows.
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ...snapSpring, delay: 0.2 } as any}
                        className="text-5xl md:text-[8rem] font-black tracking-tighter leading-[0.9] text-white drop-shadow-2xl"
                    >
                        Nobel Rock <br />
                        Partners.
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ...snapSpring, delay: 0.3 } as any}
                        className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
                    >
                        Institutional-grade portfolios engineered with precision, safeguarding your capital across generations.
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
                >
                    <div className="text-white/60 uppercase tracking-[0.3em] text-[9px] font-bold mb-3">Explore</div>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
                </motion.div>
            </section>

            {/* SECTION 1.5: Trust Marquee */}
            <TrustMarquee />

            {/* Ticker separating Hero and Content */}
            <MarketTicker />

            {/* SECTION 2: Image Grid Philosophy (White Bg) */}
            <section className="py-16 md:py-24 bg-white relative z-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.h2
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="text-4xl md:text-6xl font-black mb-12 md:mb-16 text-[#0A1A3A] border-l-[6px] border-[#0A1A3A] pl-6"
                    >
                        The Nobel <br />Advantage.
                    </motion.h2>

                    <motion.div
                        variants={elasticStagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
                    >
                        {[
                            { img: "v11_assets/main_approach_vault.png", title: "Fixed-Income Supremacy", desc: "A deliberate, heavily-weighted focus on predictable debt instruments for absolute mitigation." },
                            { img: "v11_assets/main_approach_shield.png", title: "Superannuation Defense", desc: "Strategies designed to shield and exponentially compound retirement reserves." },
                            { img: "v11_assets/main_approach_balance.png", title: "Asymmetric Risk Management", desc: "Downside protection protocols deployed at every allocation level." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                variants={itemElastic as any}
                                className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white min-w-[85vw] md:min-w-0 shrink-0 snap-center"
                            >
                                {/* We will use the 3D assets here, but inverted or differently overlaid since they were dark. For now, placed on a light gray card top */}
                                <div className="aspect-[16/9] relative bg-[#0A1128] overflow-hidden">
                                    <Image src={`/${card.img}`} alt={card.title} fill className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                                </div>
                                <div className="p-8 pb-10">
                                    <h3 className="text-2xl font-bold text-[#0A1A3A] mb-3 group-hover:text-blue-600 transition-colors">{card.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: Deep Dive Image & Data (Corporate Navy Bg) */}
            <section className="py-20 lg:py-0 relative min-h-[80vh] lg:h-[80vh] flex items-center overflow-hidden bg-[#0A1A3A]">
                {/* Image 5 (Boardroom Overlay) */}
                <div className="absolute inset-0 w-full h-[50%] lg:h-full lg:w-1/2 relative z-0">
                    <Image src="/v11_assets/main_strategic_vision.png" alt="Boardroom Executives" fill className="object-cover opacity-80" />
                    <div className="absolute inset-0 bg-[#0A1A3A]/40 lg:bg-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 relative z-10 h-full">
                    <div className="hidden lg:block relative">
                        {/* Hovering UI Cards */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ...snapSpring, delay: 0.2 } as any}
                            className="absolute bottom-32 right-[-20px] bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-2xl"
                        >
                            <div className="text-4xl font-black text-white">$1.2B+</div>
                            <div className="text-xs text-blue-400 font-bold uppercase tracking-widest">Assets Protected</div>
                        </motion.div>
                    </div>
                    <div className="flex flex-col justify-center lg:pl-16 h-full lg:bg-gradient-to-r from-transparent via-[#0A1A3A]/90 lg:via-[#0A1A3A] to-[#0A1A3A]">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={snapSpring as any}
                            className="bg-[#0A1A3A]/90 lg:bg-transparent p-8 lg:p-0 rounded-2xl lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none"
                        >
                            <div className="text-blue-400 font-mono mb-4 text-xl font-bold tracking-widest">CUSTODIAL STEWARDS</div>
                            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none text-white">Architects of <br />Growth.</h2>
                            <p className="text-base md:text-lg text-gray-300 mb-6 max-w-lg leading-relaxed">
                                We are an elite collective of market strategists and fiduciary stewards, dedicated to unlocking your financial potential. Established on rigorous mathematical modeling and unwavering ethical standards.
                            </p>
                            <p className="text-lg text-gray-300 mb-12 max-w-lg leading-relaxed">
                                We do not chase trends. We structure enduring value. Our absolute priority is the defense and calculated expansion of your assets using ASIC-compliant oversight.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <div className="text-4xl font-black text-white">100%</div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Unbiased Execution</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white">Tier-1</div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Custodians</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: High Velocity Strategic Portfolios (White Bg) */}
            <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-200 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3A] mb-4 border-l-[6px] border-[#0A1A3A] pl-4 md:pl-6">Strategic Portfolios.</h2>
                    <p className="text-lg md:text-xl text-gray-600 font-medium pl-6 md:pl-8">Engineered for absolute preservation and calculated expansion.</p>
                </div>

                <motion.div
                    variants={elasticStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex md:flex-wrap gap-6 md:gap-8 px-6 lg:px-12 md:justify-center max-w-[1600px] mx-auto overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden"
                >
                    {[
                        { id: "TIER-1", title: "The Foundation Matrix", desc: "Government & Investment-Grade Bonds. Maximum capital preservation.", img: "v11_assets/main_tier1_foundation.png" },
                        { id: "TIER-2", title: "Balanced Yield Protocol", desc: "Corporate Bonds & Dividend Equities. Equilibrium of income and growth.", img: "v11_assets/main_tier2_balanced.png" },
                        { id: "TIER-3", title: "The Ascendant Horizon", desc: "High-Conviction Growth Equities. Capturing maximum upside velocity.", img: "v11_assets/main_tier3_ascendant.png" }
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            variants={itemElastic as any}
                            whileHover={{ y: -15 }}
                            transition={snapSpring as any}
                            className="w-[85vw] md:w-[400px] xl:w-[450px] shrink-0 snap-center aspect-[4/5] rounded-3xl overflow-hidden relative group cursor-crosshair shadow-2xl border-4 border-white"
                        >
                            <Image src={`/${node.img}`} alt={node.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A] via-[#0A1A3A]/60 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-8 w-full z-10 transition-transform duration-500 group-hover:translate-y-[-10px]">
                                <div className="bg-white text-[#0A1A3A] inline-block px-4 py-1 font-mono text-xs font-bold mb-4 rounded-full shadow-md">{node.id}</div>
                                <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">{node.title}</h3>
                                <p className="text-gray-200 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{node.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* SECTION 5: The Execution Protocol */}
            <ExecutionTimeline />

            {/* SECTION 5: The Profit Calculator */}
            <InteractiveProfitCalculator />

            {/* SECTION 6: Immutable Protections */}
            <section className="py-20 md:py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="text-center mb-16 md:mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3A] mb-6">Immutable Protections.</h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
                            Your capital remains distinctly yours. We orchestrate the strategy; Tier-1 global institutions execute the custody. Absolute transparency, absolute control.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Segregated Accounts", desc: "Capital is held in individually named accounts with heavily regulated Tier-1 banking partners, never commingled with firm assets.", icon: "🔐" },
                            { title: "ASIC Compliant", desc: "Operating strictly under the regulatory purview of the Australian Securities and Investments Commission for wholesale investors.", icon: "⚖️" },
                            { title: "Real-Time Transparent", desc: "24/7 access to your custom Client Portal, displaying granular transaction data, yield accruals, and direct market exposure.", icon: "📡" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...snapSpring, delay: i * 0.1 } as any}
                                className="bg-gray-50 border border-gray-200 p-10 rounded-2xl hover:shadow-xl hover:border-blue-300 transition-all cursor-crosshair group"
                            >
                                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                                <h3 className="text-2xl font-black text-[#0A1A3A] mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7: Due Diligence FAQs */}
            <FaqAccordion />

            {/* SECTION 8: Contact Form */}
            <section className="py-20 md:py-32 bg-[#0A1A3A] relative overflow-hidden">
                {/* Abstract background sweep */}
                <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-tl from-white/5 to-transparent transform -skew-y-12 translate-y-32"></div>

                <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="mb-12 md:mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg leading-tight md:leading-normal">Strategic <br className="md:hidden" />Alignment.</h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">Upload your contact parameters for a preliminary qualitative assessment of your portfolio architecture.</p>
                    </motion.div>

                    <motion.form
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ...snapSpring, delay: 0.2 } as any}
                        className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20 shadow-2xl max-w-3xl mx-auto text-left"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <label className="block text-xs font-bold tracking-widest text-blue-300 uppercase mb-4">Identity String</label>
                                <input type="text" className="w-full bg-[#0A1A3A] border border-white/20 text-white rounded-lg p-4 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all font-mono" placeholder="NAME / ENTITY" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold tracking-widest text-blue-300 uppercase mb-4">Comms Channel</label>
                                <input type="email" className="w-full bg-[#0A1A3A] border border-white/20 text-white rounded-lg p-4 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all font-mono" placeholder="EMAIL ADDRESS" />
                            </div>
                        </div>
                        <button className="w-full bg-white text-[#0A1A3A] font-black uppercase tracking-[0.2em] p-6 rounded-xl hover:bg-gray-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all">
                            Initialize Transmission
                        </button>
                    </motion.form>
                </div>
            </section>

            <V11Footer />
        </div>
    );
}
