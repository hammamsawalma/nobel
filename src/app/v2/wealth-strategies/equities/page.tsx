"use client";

import CinematicReveal from "@/components/v2/CinematicReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, TrendingUp, ShieldAlert, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function V2EquitiesPage() {
    const heroRef = useRef(null);
    const { scrollYProgress: heroOpacity } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const contentOpacity = useTransform(heroOpacity, [0, 1], [1, 0]);

    return (
        <div className="bg-noble-charcoal text-noble-ivory font-sans pt-32 pb-24 selection:bg-noble-gold-500 selection:text-noble-charcoal min-h-screen">

            {/* HERO MODULE (Island-like framed feel) */}
            <section ref={heroRef} className="relative w-full h-[85vh] overflow-hidden mb-32 border-b-2 border-noble-gold-500/30">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen grayscale">
                    <source src="/videos/v2/financial-district.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-noble-charcoal via-noble-charcoal/80 to-transparent" />

                <motion.div style={{ opacity: contentOpacity }} className="relative z-10 h-full flex items-center">
                    <div className="px-6 lg:px-12 max-w-7xl mx-auto w-full">
                        <CinematicReveal delay={0.2}>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-12 h-[1px] bg-noble-gold-500" />
                                <span className="text-[9px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold border border-noble-gold-500/30 px-4 py-1.5 rounded-full bg-noble-charcoal/50 backdrop-blur-sm">Strategy II</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] text-noble-ivory font-display leading-[1.0] mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                                Strategic <br />
                                <span className="italic text-transparent bg-clip-text bg-gradient-gold-foil">Equities.</span>
                            </h1>
                            <p className="text-noble-slate text-sm md:text-lg font-serif leading-loose tracking-wide max-w-2xl border-l-2 border-noble-gold-900/60 pl-6">
                                Uncompromising ownership of the world's most indestructible economic moats. Providing generational capital with asymmetric upside capture and structural resistance to inflation.
                            </p>
                        </CinematicReveal>
                    </div>
                </motion.div>

                {/* Floating Stat Chips on Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 right-6 lg:right-12 z-20 flex flex-nowrap gap-4 perspective-1000"
                >
                    <motion.div whileHover={{ rotateX: 5, rotateY: -5 }} className="bg-noble-charcoal/80 backdrop-blur-md border border-noble-gold-500/40 rounded-xl px-5 py-4 w-32 shadow-[0_10px_20px_rgba(0,0,0,0.8)] shadow-inner">
                        <div className="text-[8px] uppercase tracking-[0.3em] text-noble-slate mb-1 whitespace-nowrap">Target CAGR</div>
                        <div className="text-xl font-display text-noble-ivory">+14.2%</div>
                    </motion.div>
                    <motion.div whileHover={{ rotateX: 5, rotateY: 5 }} className="bg-noble-charcoal/80 backdrop-blur-md border border-noble-gold-500/40 rounded-xl px-5 py-4 w-32 shadow-[0_10px_20px_rgba(0,0,0,0.8)] shadow-inner">
                        <div className="text-[8px] uppercase tracking-[0.3em] text-noble-slate mb-1 whitespace-nowrap">Max Drawdown</div>
                        <div className="text-xl font-display text-noble-gold-500">-3.1%</div>
                    </motion.div>
                    <motion.div whileHover={{ rotateX: -5, rotateY: -5 }} className="bg-noble-charcoal/80 backdrop-blur-md border border-noble-gold-500/40 rounded-xl px-5 py-4 w-32 hidden md:block shadow-[0_10px_20px_rgba(0,0,0,0.8)] shadow-inner">
                        <div className="text-[8px] uppercase tracking-[0.3em] text-noble-slate mb-1 whitespace-nowrap">Portfolio Beta</div>
                        <div className="text-xl font-display text-noble-ivory">0.72</div>
                    </motion.div>
                </motion.div>
            </section>

            {/* FULL WIDTH EDITORIAL IMAGE (Island encapsulation logic applied to the image wrapper) */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32 group perspective-1000">
                <CinematicReveal>
                    <motion.div whileHover={{ scale: 1.01 }} className="relative h-[60vh] w-full border-t border-b border-noble-gold-500/40 shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden rounded-3xl">
                        <Image
                            src="/images/v2/kinetic_bull_art.png"
                            alt="Equities Momentum"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-[#110d06]/40 mix-blend-multiply group-hover:bg-transparent transition-colors duration-[2000ms]" />
                        <div className="absolute bottom-0 left-0 bg-[#110d06]/80 backdrop-blur-md px-6 py-4 border-t border-r border-noble-gold-900/50 rounded-tr-xl">
                            <span className="text-[9px] uppercase tracking-[0.5em] text-noble-ivory/80 font-bold block mb-1">Kinetic Momentum</span>
                            <span className="text-[8px] uppercase tracking-[0.4em] text-noble-gold-500 italic">Fig. II</span>
                        </div>
                    </motion.div>
                </CinematicReveal>
            </section>

            {/* STRATEGY TENETS - 3D Island Grid Grid */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32 perspective-1000">
                <div className="flex items-center gap-4 mb-16 justify-center">
                    <div className="w-12 h-[1px] bg-noble-gold-900/50" />
                    <span className="text-xs uppercase tracking-[0.3em] text-noble-slate flex items-center gap-2">
                        <TrendingUp size={16} className="text-noble-gold-500" />
                        The Three Pillars of Ownership
                    </span>
                    <div className="w-12 h-[1px] bg-noble-gold-900/50" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Monopolistic Pricing Power", desc: "We exclusively underwrite businesses that operate as unofficial monopolies. These entities dictate pricing terms to their markets, allowing profit margins to effortlessly outpace inflation and currency debasement.", img: "gilded_abstract_texture_v2_1772823845293.png", icon: <TrendingUp size={24} />, tags: ["Tech Monopolies", "Luxury Goods"] },
                        { title: "Defensive Moats & Scarcity", desc: "Capital is deployed toward assets with irreplaceable physical or digital scarcity. Infrastructure, critical minerals, and mission-critical software layers that cannot be replicated regardless of competitor capital expenditure.", img: "antique_globe_macro_1772830159927.png", icon: <ShieldAlert size={24} />, tags: ["Infrastructure", "Hard Assets"] },
                        { title: "Asymmetric Volatility Capture", desc: "Volatility is not risk; it is an exploitable mispricing. We maintain strict structural liquidity to aggressively acquire tier-1 assets during moments of maximum market distress and algorithmic liquidation.", img: "vintage_hourglass.png", icon: <Globe size={24} />, tags: ["Liquidity Premium", "Distressed Entry"] }
                    ].map((tenet, idx) => (
                        <CinematicReveal key={tenet.title} delay={idx * 0.2}>
                            <motion.div whileHover={{ y: -10 }} className="group border border-noble-gold-500/30 bg-noble-charcoal/80 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] shadow-inner flex flex-col h-full transform transition-all duration-700">

                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-noble-gold-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

                                <div className="h-40 relative border-b border-noble-gold-900/50 overflow-hidden">
                                    <Image
                                        src={`/images/v2/${tenet.img}`}
                                        alt={tenet.title}
                                        fill
                                        className="object-cover opacity-40 mix-blend-screen grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-noble-charcoal to-transparent" />
                                    <div className="absolute bottom-4 left-6 text-noble-gold-500/50 group-hover:text-noble-gold-400 transition-colors duration-500">
                                        {tenet.icon}
                                    </div>
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        {tenet.tags.map(t => (
                                            <span key={t} className="text-[7px] uppercase tracking-[0.3em] font-bold text-noble-gold-500 bg-[#110d06]/80 backdrop-blur-sm border border-noble-gold-900/50 px-3 py-1 rounded-full">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8 lg:p-10 flex-1 flex flex-col relative z-10 bg-noble-charcoal/40 backdrop-blur-xl">
                                    <h3 className="text-xl lg:text-3xl font-display text-noble-ivory mb-4 tracking-wide group-hover:text-noble-gold-300 transition-colors drop-shadow-md">{tenet.title}</h3>
                                    <p className="text-noble-slate text-base md:text-lg font-medium leading-relaxed font-sans tracking-wide">{tenet.desc}</p>
                                </div>
                            </motion.div>
                        </CinematicReveal>
                    ))}
                </div>
            </section>

            {/* [NEW] SEC 3.5: Sector & Geographic Architecture (Content Doubling - Deep 3D Island) */}
            <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-20 mb-32 perspective-1000">
                <CinematicReveal direction="up" duration={1.5}>
                    <motion.div whileHover={{ scale: 1.01 }} className="bg-noble-charcoal/50 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl p-8 lg:p-16 shadow-[0_40px_80px_rgba(0,0,0,0.9)] shadow-inner relative overflow-hidden group">

                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-noble-gold-500/50 to-transparent" />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                            <div className="lg:col-span-7 relative z-10 lg:pr-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-8 h-[1px] bg-noble-gold-500/50" />
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">Allocation Framework</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display text-noble-ivory italic leading-tight mb-8 tracking-wide drop-shadow-xl">
                                    Targeted Synthesis.
                                </h2>
                                <p className="text-noble-slate font-serif font-light leading-loose tracking-wide mb-8">
                                    Geographic diversification is often a euphemism for diluting returns. We reject the standard model of passive global indexing. Instead, we target precise nexuses of capital formation and technological dominance.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border hover:-translate-y-2 transition-transform duration-300 border-noble-gold-900/50 bg-[#110d06]/60 rounded-xl p-6 shadow-inner">
                                        <div className="font-display text-noble-gold-400 text-2xl mb-2 italic">72%</div>
                                        <div className="text-[8px] uppercase tracking-[0.3em] text-noble-ivory font-bold mb-2">North America</div>
                                        <p className="text-[10px] text-noble-slate leading-relaxed">Absolute dominance in software monopolies and defense aerospace.</p>
                                    </div>
                                    <div className="border hover:-translate-y-2 transition-transform duration-300 border-noble-gold-900/50 bg-[#110d06]/60 rounded-xl p-6 shadow-inner">
                                        <div className="font-display text-noble-gold-400 text-2xl mb-2 italic">18%</div>
                                        <div className="text-[8px] uppercase tracking-[0.3em] text-noble-ivory font-bold mb-2">European Luxury & Industrials</div>
                                        <p className="text-[10px] text-noble-slate leading-relaxed">Generational pricing power immune to cyclical spending compression.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 perspective-1000 hidden lg:block">
                                <motion.div whileHover={{ rotateY: -5, rotateX: 5 }} className="relative h-[550px] w-full rounded-2xl overflow-hidden border border-noble-gold-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-transform duration-700">
                                    <Image
                                        src="/images/v2/vintage_stock_ticker_1772830235689.png"
                                        alt="Vintage Stock Ticker"
                                        fill
                                        className="object-cover saturate-50 brightness-90"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-noble-charcoal/80 to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6 border border-noble-gold-900/40 bg-[#110d06]/80 backdrop-blur-md rounded-xl p-4 text-center shadow-inner">
                                        <span className="text-noble-gold-500 font-display italic text-lg tracking-widest block mb-1">Algorithmic Defense</span>
                                        <span className="text-[8px] uppercase tracking-[0.3em] text-noble-slate">Quantitative Market Pulse</span>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </motion.div>
                </CinematicReveal>
            </section>

            {/* PERFORMANCE COMPARISON TABLE (Framed Island Module) */}
            <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-40 perspective-1000">
                <CinematicReveal>
                    <motion.div whileHover={{ scale: 1.01 }} className="bg-noble-charcoal/60 backdrop-blur-2xl border border-noble-gold-500/40 rounded-3xl p-10 lg:p-16 shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-700 relative">
                        {/* Gold vignette background */}
                        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(238,194,61,0.03)_0%,transparent_50%)] pointer-events-none" />

                        <div className="text-center mb-12 relative z-10">
                            <h3 className="text-3xl md:text-4xl font-display text-noble-ivory italic tracking-wide mb-4">Risk-Adjusted Performance matrix</h3>
                            <p className="text-noble-slate text-xs uppercase tracking-[0.3em]">Trailing 10-Year Statistical Profile</p>
                        </div>

                        <div className="overflow-x-auto relative z-10 w-full">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr>
                                        <th className="py-6 px-4 border-b border-noble-gold-900/60 text-[10px] uppercase tracking-[0.3em] text-noble-gold-500 font-bold w-1/3">Metric</th>
                                        <th className="py-6 px-4 border-b border-noble-gold-900/60 text-[10px] uppercase tracking-[0.3em] text-noble-ivory font-bold bg-[#110d06]/40 rounded-t-lg">NR Strategic Equities</th>
                                        <th className="py-6 px-4 border-b border-noble-gold-900/60 text-[10px] uppercase tracking-[0.3em] text-noble-slate">MSCI World (Unhedged)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-sans tracking-wide">
                                    <tr className="hover:bg-noble-gold-900/10 transition-colors">
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-slate">Annualized Net Return</td>
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-gold-400 font-display text-xl bg-[#110d06]/40">14.2%</td>
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-slate/70">9.8%</td>
                                    </tr>
                                    <tr className="hover:bg-noble-gold-900/10 transition-colors">
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-slate">Maximum Drawdown</td>
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-ivory font-bold bg-[#110d06]/40">-12.4%</td>
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-slate/70">-34.1%</td>
                                    </tr>
                                    <tr className="hover:bg-noble-gold-900/10 transition-colors">
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-slate">Sharpe Ratio (Risk-Adj)</td>
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-ivory font-bold bg-[#110d06]/40">1.84</td>
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-slate/70">0.92</td>
                                    </tr>
                                    <tr className="hover:bg-noble-gold-900/10 transition-colors">
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-slate">Up-Market Capture</td>
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-ivory font-bold bg-[#110d06]/40">92%</td>
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-slate/70">100%</td>
                                    </tr>
                                    <tr className="hover:bg-noble-gold-900/10 transition-colors">
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-slate">Down-Market Capture</td>
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-gold-400 font-bold bg-[#110d06]/40">34%</td>
                                        <td className="py-5 px-4 border-b border-noble-gold-900/20 text-noble-slate/70">100%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </CinematicReveal>
            </section>

            {/* FLOW NAVIGATION FOOTER */}
            <section className="border-t border-noble-gold-900/30 bg-[#110d06]">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="grid grid-cols-2 w-full divide-x divide-noble-gold-900/30">
                        <Link href="/v2/wealth-strategies/fixed-income" className="group p-12 lg:p-16 hover:bg-noble-gold-900/10 transition-colors duration-500 flex flex-col justify-center relative overflow-hidden text-center items-center">
                            <span className="text-[9px] uppercase tracking-[0.4em] text-noble-slate mb-4 group-hover:text-noble-gold-500 transition-colors flex items-center gap-3">
                                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Previous Mandate
                            </span>
                            <span className="font-display text-2xl lg:text-4xl text-noble-ivory group-hover:text-noble-gold-300 transition-colors italic">Fixed-Income <br />Portfolios</span>
                        </Link>

                        <Link href="/v2/wealth-strategies/family-office" className="group p-12 lg:p-16 hover:bg-noble-gold-900/10 transition-colors duration-500 flex flex-col justify-center relative overflow-hidden text-center items-center">
                            <span className="text-[9px] uppercase tracking-[0.4em] text-noble-slate mb-4 group-hover:text-noble-gold-500 transition-colors flex items-center gap-3">
                                Next Mandate <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </span>
                            <span className="font-display text-2xl lg:text-4xl text-noble-ivory group-hover:text-noble-gold-300 transition-colors italic">Private & <br />Family Office</span>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
