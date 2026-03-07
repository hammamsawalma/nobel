"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import InteractiveProfitCalculator from '@/components/v1/InteractiveProfitCalculator';
import MarketTicker from '@/components/v1/MarketTicker';
import TrustMarquee from '@/components/v1/TrustMarquee';
import ExecutionTimeline from "@/components/v1/ExecutionTimeline";

import V11Header from "@/components/v1/Header";
import V11Footer from "@/components/v1/Footer";
import FaqAccordion from "@/components/v1/FaqAccordion";
import { ShieldCheck } from "lucide-react";

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
    const imgBase = "/images/v11"; // We will script a copy of the generated images to public/images/v11

    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white overflow-x-hidden min-h-screen">
            <V11Header />

            {/* SECTION 1: Video Hero */}
            <section className="relative min-h-[100svh] flex flex-col justify-center px-6 lg:px-12 overflow-hidden border-b-[6px] md:border-b-[8px] border-[#0A1A3A]">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/vid/drone-shot-above-river-panning-down-showing-brisbane-cbd-expressway-motorway-a-SBV-348964395-preview.mp4" type="video/mp4" />
                </video>
                {/* Subtle dark tint over video for readability */}
                <div className="absolute inset-0 bg-[#0A1A3A]/40 mix-blend-multiply z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-0"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10 text-center mt-12 md:mt-20">
                    <style>{`
                        @keyframes slideInDesktop {
                            from { opacity: 0; transform: translateX(-60px); }
                            to { opacity: 1; transform: translateX(0); }
                        }
                        @keyframes slideInMobile {
                            from { opacity: 0; transform: translateY(-40px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes textFadeDesktop {
                            from { opacity: 0; transform: translateX(60px); }
                            to { opacity: 1; transform: translateX(0); }
                        }
                        @keyframes sweepGlare {
                            0% { transform: translateX(-100%) skewX(-15deg); }
                            100% { transform: translateX(200%) skewX(-15deg); }
                        }
                        .animate-hero-badge {
                            opacity: 0;
                            animation: slideInMobile 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
                        }
                        .animate-hero-text {
                            opacity: 0;
                            animation: slideInMobile 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
                        }
                        @media (min-width: 768px) {
                            .animate-hero-badge {
                                animation: slideInDesktop 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
                            }
                            .animate-hero-text {
                                animation: textFadeDesktop 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
                            }
                        }
                        .hover-glare:hover .glare-element {
                            animation: sweepGlare 1.5s ease-in-out;
                        }
                    `}</style>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-6xl mx-auto">

                        {/* THE BADGE (Enhanced Variant 5) */}
                        <div className="animate-hero-badge relative group cursor-pointer perspective-[1000px] shrink-0">
                            {/* Backdrop glow */}
                            <div className="absolute inset-0 bg-white/10 md:bg-white/5 rounded-[3rem] md:rounded-[4rem] blur-2xl group-hover:bg-blue-600/30 transition-all duration-700"></div>

                            {/* The physical badge container */}
                            <div className="relative hover-glare bg-[#0A1A3A]/40 md:bg-white/5 backdrop-blur-xl border border-white/20 p-5 md:p-12 rounded-tl-[2rem] md:rounded-tl-[4rem] rounded-br-[2rem] md:rounded-br-[4rem] rounded-tr-xl rounded-bl-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-start group-hover:border-blue-500/50 group-hover:-translate-y-2 transition-all duration-500">

                                {/* Glare element */}
                                <div className="glare-element absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 opacity-0 group-hover:opacity-100 mix-blend-overlay pointer-events-none"></div>

                                <span className="text-[4.5rem] md:text-[8.5rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 md:to-gray-600 leading-none tracking-tighter relative z-10 drop-shadow-xl group-hover:from-blue-100 group-hover:via-blue-300 group-hover:to-blue-600 transition-all duration-700">25</span>

                                <div className="ml-4 md:ml-6 flex flex-col justify-between h-full pt-1.5 md:pt-5 relative z-10">
                                    <span className="text-white font-black uppercase text-lg md:text-3xl leading-none tracking-[0.1em] md:tracking-[0.2em] group-hover:text-blue-300 transition-colors duration-700">Years</span>
                                    <span className="text-gray-300 md:text-gray-400 font-bold uppercase text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] max-w-[100px] md:max-w-[160px] mt-3 md:mt-6 border-t border-white/30 md:border-white/20 pt-2 group-hover:border-blue-500/50 transition-colors duration-700">
                                        Defending<br className="hidden md:block" /> Institutional<br />Capital
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* HERO TEXT */}
                        <div className="animate-hero-text flex flex-col justify-center text-center md:text-left relative z-10 w-full md:w-auto mt-6 md:mt-0 max-w-2xl lg:max-w-4xl shrink-0 min-w-0">
                            <div className="text-blue-400 font-bold tracking-[0.2em] text-[10px] md:text-sm uppercase mb-3 md:mb-5 drop-shadow-md">Securing Your Financial Future</div>
                            <h1 className="text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] font-black tracking-tight leading-[1.1] text-white drop-shadow-2xl">
                                Elevate Your Wealth <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">with Strategic Execution.</span>
                            </h1>
                            <p className="mt-4 md:mt-6 text-sm md:text-xl text-gray-200 max-w-lg mx-auto md:mx-0 leading-relaxed drop-shadow-lg font-medium">
                                We architect institutional-grade portfolios designed for absolute preservation and calculated expansion. Experience transparent, unbiased wealth management tailored to your goals.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Link href="#solutions" className="bg-white text-[#0A1A3A] hover:bg-gray-100 px-6 md:px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs transition-all shadow-xl shadow-white/10 text-center">
                                    Explore Investment Solutions
                                </Link>
                                <Link href="/how-to-invest" className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 md:px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs transition-all backdrop-blur-sm text-center">
                                    How to Invest
                                </Link>
                            </div>
                        </div>
                    </div>
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

            {/* SECTION 2: Latest Intellectual Capital (Market Insights) */}
            <section className="py-16 md:py-24 bg-white relative z-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={snapSpring as any}
                        >
                            <div className="text-blue-600 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-3">Market Insights Preview</div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0A1A3A] border-l-[4px] md:border-l-[6px] border-[#0A1A3A] pl-4 md:pl-6 leading-tight">Latest Intellectual <br className="hidden md:block" />Capital.</h2>
                            <p className="text-base md:text-xl text-gray-600 font-medium pl-5 md:pl-8 mt-4">Actionable insights and market releases from our senior analysts.</p>
                        </motion.div>
                        <Link href="/insights" className="mt-6 md:mt-0 bg-white border border-gray-200 text-[#0A1A3A] hover:bg-gray-50 hover:border-gray-300 px-6 md:px-8 py-3 md:py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs transition-all flex items-center justify-center gap-2 group shadow-sm">
                            View All Insights <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    <motion.div
                        variants={elasticStagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
                    >
                        {[
                            { img: "v11_assets/main_approach_vault.png", title: "The Outlook on Inflation-Linked Bonds for Q3", date: "Oct 12, 2026", category: "Fixed Income" },
                            { img: "v11_assets/main_approach_shield.png", title: "Navigating Equity Volatility in Global Markets", date: "Sep 28, 2026", category: "Equities" },
                            { img: "v11_assets/main_approach_balance.png", title: "Superannuation Strategies for the Coming Decade", date: "Sep 15, 2026", category: "Retirement" }
                        ].map((card, i) => (
                            <Link href="/insights" key={i}>
                                <motion.div
                                    variants={itemElastic as any}
                                    className="group relative rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 bg-white cursor-pointer h-full flex flex-col"
                                >
                                    <div className="aspect-[16/9] relative bg-[#0A1128] overflow-hidden shrink-0">
                                        <Image src={`/${card.img}`} alt={card.title} fill className="object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#0A1A3A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                                            {card.category}
                                        </div>
                                    </div>
                                    <div className="p-6 pb-8 flex-1 flex flex-col justify-between">
                                        <div>
                                            <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mb-3">{card.date}</p>
                                            <h3 className="text-lg md:text-xl font-bold text-[#0A1A3A] mb-2 group-hover:text-blue-600 transition-colors leading-snug">{card.title}</h3>
                                        </div>
                                        <div className="mt-4 text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#0A1A3A] transition-colors flex items-center gap-2">
                                            Read More <span>→</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: Deep Dive Image & Data */}
            <section className="bg-[#0A1A3A] flex flex-col lg:flex-row relative lg:min-h-[80vh]">
                {/* Image Half */}
                <div className="w-full lg:w-1/2 relative min-h-[40vh] md:min-h-[50vh] lg:min-h-full z-0 order-1 lg:order-none lg:absolute lg:inset-y-0 lg:left-0">
                    <Image src="/v11_assets/noble_rock_wealth.png" alt="Noble Rock Wealth Management" fill className="object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A] to-transparent lg:hidden"></div>
                </div>

                {/* Text Half */}
                <div className="w-full lg:w-1/2 lg:ml-auto relative z-10 flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-24 order-2 lg:order-none">
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                    >
                        <div className="text-blue-400 font-mono mb-3 md:mb-4 text-sm md:text-xl font-bold tracking-widest">WHY NOBEL WEALTH</div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-none text-white">Architects of <br className="hidden md:block" />Growth.</h2>
                        <p className="text-sm md:text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed">
                            We are an elite collective of market strategists and fiduciary stewards, dedicated to unlocking your financial potential. Established on rigorous mathematical modeling and unwavering ethical standards.
                        </p>
                        <p className="text-sm md:text-lg text-gray-300 mb-8 md:mb-12 leading-relaxed">
                            We do not chase trends. We structure enduring value. Our absolute priority is the defense and calculated expansion of your assets using strict ASIC-compliant oversight.
                        </p>

                        <div className="grid grid-cols-2 gap-y-8 gap-x-6 md:gap-8">
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-white">25+</div>
                                <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Years Heritage</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-white">100%</div>
                                <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Unbiased Strategy</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-white">Tier-1</div>
                                <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Global Custodians</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-white px-2 py-1 bg-white/10 rounded inline-block">ASIC</div>
                                <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Regulated Wholesale</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Metric Card (Desktop Only) */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ...snapSpring, delay: 0.2 } as any}
                    className="hidden lg:block absolute bottom-32 left-[calc(50%-120px)] z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-2xl"
                >
                    <div className="text-4xl font-black text-white">$1.2B+</div>
                    <div className="text-xs text-blue-400 font-bold uppercase tracking-widest">Assets Protected</div>
                </motion.div>
            </section>

            {/* SECTION 4: Strategic Investment Solutions */}
            <section id="solutions" className="py-20 md:py-32 bg-gray-50 border-y border-gray-200 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 md:mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-black text-[#0A1A3A] mb-3 md:mb-4 md:border-l-[6px] border-[#0A1A3A] md:pl-6 leading-tight">Strategic Investment <br className="hidden md:block" />Solutions.</h2>
                    <p className="text-base md:text-xl text-gray-600 font-medium md:pl-8 max-w-3xl">Precision-engineered approaches to defensive income, capital growth, and long-term legacy planning.</p>
                </div>

                <motion.div
                    variants={elasticStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-6 lg:px-12 max-w-7xl mx-auto"
                >
                    {[
                        { id: "01", title: "Fixed-Income Portfolios", desc: "A deliberate focus on predictable, defensive debt instruments: Corporate, Investment Grade, and Inflation-Linked Bonds.", img: "v11_assets/main_tier1_foundation.png", link: "/fixed-income" },
                        { id: "02", title: "Strategic Equities", desc: "High-conviction portfolios capturing maximum upside velocity through Dividend-Paying and Growth Stocks.", img: "v11_assets/main_tier3_ascendant.png", link: "/equities" },
                        { id: "03", title: "Expert Fiduciary Advice", desc: "Bespoke structural insight from elite strategists ensuring your capital is managed with uncompromising ethical standards.", img: "v11_assets/main_tier2_balanced.png", link: "/financial-advice" },
                        { id: "04", title: "Retirement Planning", desc: "Strategies designed explicitly to shield and exponentially compound your superannuation reserves for a legacy that lasts.", img: "v11_assets/main_approach_vault.png", link: "/retirement-planning" }
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            variants={itemElastic as any}
                            whileHover={{ y: -5 }}
                            transition={snapSpring as any}
                            className="w-full aspect-[4/3] md:aspect-[16/9] rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-xl border border-white/20"
                        >
                            <Link href={node.link}>
                                <div className="absolute inset-0 bg-[#0A1A3A]">
                                    <Image src={`/${node.img}`} alt={node.title} fill className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A] via-[#0A1A3A]/80 md:via-[#0A1A3A]/40 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10 transition-transform duration-500">
                                    <div className="bg-white text-[#0A1A3A] inline-block px-3 py-1 font-mono text-[10px] font-bold mb-3 rounded-full shadow-md">{node.id}</div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2 md:mb-3 drop-shadow-md">{node.title}</h3>
                                    <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed drop-shadow-md max-w-lg">{node.desc}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* SECTION 5: The Execution Protocol */}
            <ExecutionTimeline />

            {/* SECTION 5: The Profit Calculator */}
            <InteractiveProfitCalculator />

            {/* SECTION 6: The Nobel Wealth Advantage */}
            <section className="py-16 md:py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-[#0A1A3A] mb-4 md:mb-6">The Nobel Wealth Advantage.</h2>
                        <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
                            Your capital remains distinctly yours. We orchestrate the strategy; Tier-1 global institutions execute the custody. Absolute transparency, absolute control.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            { title: "Segregated Accounts", desc: "Capital is held in individually named accounts with heavily regulated Tier-1 banking partners, never commingled with firm assets.", icon: "🔐" },
                            { title: "Asymmetric Risk Management", desc: "Downside protection protocols are deployed at every allocation level. We do not chase risky trends; we structure enduring value.", icon: "⚖️" },
                            { title: "Complete Transparency", desc: "24/7 access to your custom Client Portal, displaying granular transaction data, yield accruals, and direct market exposure.", icon: "📡" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...snapSpring, delay: i * 0.1 } as any}
                                className="bg-gray-50 border border-gray-200 p-8 md:p-10 rounded-[2rem] hover:shadow-2xl hover:border-blue-300 transition-all cursor-default group"
                            >
                                <div className="text-4xl md:text-5xl mb-6 md:mb-8 grayscale group-hover:grayscale-0 transition-all bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">{item.icon}</div>
                                <h3 className="text-xl md:text-2xl font-black text-[#0A1A3A] mb-3 md:mb-4">{item.title}</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7: Due Diligence FAQs */}
            <FaqAccordion />

            {/* SECTION 8: Security Badge & Contact Form */}
            <section className="py-16 md:py-32 bg-[#0A1A3A] relative overflow-hidden">
                {/* Abstract background sweep */}
                <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-tl from-white/5 to-transparent transform -skew-y-12 translate-y-32"></div>

                <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">

                    {/* Security Badge */}
                    <div className="bg-blue-900/30 border border-blue-500/30 rounded-3xl p-6 md:p-8 mb-16 md:mb-24 flex flex-col md:flex-row items-center md:items-start text-left gap-6 md:gap-8 backdrop-blur-md max-w-4xl mx-auto shadow-2xl">
                        <div className="bg-blue-500/20 p-4 rounded-full">
                            <ShieldCheck className="w-10 h-10 md:w-16 md:h-16 text-blue-400" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white font-black text-xl md:text-3xl mb-2 md:mb-3">Your Security is Our Priority</h3>
                            <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                                We employ stringent protocols to protect our clients against fraudulent activities and scams. We only operate through official channels.
                            </p>
                            <Link href="/scam-alert" className="inline-block bg-blue-400 text-[#0A1A3A] hover:bg-white px-6 md:px-8 py-3 md:py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs transition-all shadow-lg shadow-blue-500/20 text-center">
                                Read Our Scam & Fraud Alert
                            </Link>
                        </div>
                    </div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="mb-10 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 drop-shadow-lg leading-tight md:leading-normal">Strategic <br className="md:hidden" />Alignment.</h2>
                        <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">Initiate your journey. Provide your primary contact details for a preliminary, confidential discussion about your portfolio architecture.</p>
                    </motion.div>

                    <motion.form
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ...snapSpring, delay: 0.2 } as any}
                        className="bg-[#0A1128]/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl max-w-3xl mx-auto text-left"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                            <div className="md:col-span-2">
                                <label className="block text-[10px] md:text-xs font-bold tracking-widest text-blue-300 uppercase mb-3 md:mb-4">Full Name</label>
                                <input type="text" className="w-full bg-[#0A1A3A]/50 border border-white/10 text-white rounded-xl p-4 md:p-5 text-sm md:text-base focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all placeholder-white/20" placeholder="NAME / ENTITY" />
                            </div>
                            <div>
                                <label className="block text-[10px] md:text-xs font-bold tracking-widest text-blue-300 uppercase mb-3 md:mb-4">Email Address</label>
                                <input type="email" className="w-full bg-[#0A1A3A]/50 border border-white/10 text-white rounded-xl p-4 md:p-5 text-sm md:text-base focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all placeholder-white/20" placeholder="EMAIL@DOMAIN.COM" />
                            </div>
                            <div>
                                <label className="block text-[10px] md:text-xs font-bold tracking-widest text-blue-300 uppercase mb-3 md:mb-4">Phone Number</label>
                                <input type="tel" className="w-full bg-[#0A1A3A]/50 border border-white/10 text-white rounded-xl p-4 md:p-5 text-sm md:text-base focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all placeholder-white/20" placeholder="+61 000 000 000" />
                            </div>
                        </div>
                        <button type="button" className="w-full bg-white text-[#0A1A3A] font-black uppercase tracking-[0.2em] px-6 md:px-8 py-4 md:py-5 rounded-full text-[10px] md:text-xs hover:bg-gray-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all flex justify-center items-center gap-3">
                            Submit Inquiry <span className="text-lg md:text-xl leading-none group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </motion.form>
                </div>
            </section>

            <V11Footer />
        </div>
    );
}
