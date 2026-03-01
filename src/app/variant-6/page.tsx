"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Variant6KineticGold() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [viewportWidth, setViewportWidth] = useState(0);

    // We need to know the viewport width to calculate how far the horizontal container should slide
    useEffect(() => {
        setViewportWidth(window.innerWidth);
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { scrollYProgress } = useScroll({ target: containerRef });

    // Total width of the horizontal scroll area is 700vw (7 sections at 100vw each)
    // To reach the end, we slide the container by -(700vw - 100vw) = -600vw
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85.71%"]);

    return (
        <div className="bg-[#0A0A0A] text-[#E8DCC2] selection:bg-[#D4AF37] selection:text-black">
            <Header />

            {/* 
        The outer container height determines how much user must scroll vertically to finish the horizontal pan.
        7 sections = 700vh tall to give a slow, smooth scroll experience.
      */}
            <div ref={containerRef} className="h-[700vh] relative">
                <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-[#0A0A0A]">

                    {/* Horizontal Canvas */}
                    <motion.div style={{ x }} className="flex h-full w-[700vw]">

                        {/* SECTION 1: Kinetic Hero */}
                        <div className="w-[100vw] h-full flex flex-col justify-center px-12 lg:px-32 flex-shrink-0 relative">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/10 to-transparent"></div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="text-[#D4AF37] font-mono tracking-widest text-sm mb-8 uppercase">Nobel Private Wealth</div>
                                <h1 className="text-7xl md:text-9xl font-serif text-white leading-none mb-8 tracking-tighter">
                                    Kinetic <br /><span className="text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] via-[#FFF8D6] to-[#AA7C11]">Gold.</span>
                                </h1>
                                <p className="text-2xl text-[#A0A0A0] max-w-xl font-light">
                                    Compounding wealth is not a static state; it is a relentless physics equation applied to capital.
                                </p>
                            </motion.div>
                        </div>

                        {/* SECTION 2: The Philosophy */}
                        <div className="w-[100vw] h-full flex flex-col justify-center px-12 lg:px-32 flex-shrink-0 border-l border-[#333333]">
                            <div className="grid grid-cols-2 gap-20 items-center">
                                <div>
                                    <h2 className="text-5xl font-serif text-white mb-8">Momentum Over Time</h2>
                                    <p className="text-xl text-[#888888] leading-relaxed mb-6">
                                        We do not attempt to time the market. We structure high-yield fixed income portfolios that capture persistent, undeniable compound interest over decades.
                                    </p>
                                    <p className="text-xl text-[#888888] leading-relaxed">
                                        The true luxury of wealth is the knowledge that it is architected to outlive you.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center">
                                    {/* Animated abstract geometric gold sphere */}
                                    <div className="w-96 h-96 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#111] animate-spin shadow-[0_0_100px_rgba(212,175,55,0.2)]" style={{ animationDuration: '20s' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 3: Performance Metrics */}
                        <div className="w-[100vw] h-full flex flex-col justify-center px-12 lg:px-32 flex-shrink-0 border-l border-[#333333] relative">
                            <h2 className="absolute top-32 left-32 text-2xl font-mono text-[#D4AF37] uppercase tracking-widest">Active Trajectory</h2>
                            <div className="flex gap-32">
                                <div className="text-center">
                                    <div className="text-8xl font-serif text-white mb-4">12<span className="text-[#D4AF37]">%</span></div>
                                    <div className="text-sm tracking-widest text-[#888888] uppercase">Target ROE (Equities)</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-8xl font-serif text-white mb-4">5.8<span className="text-[#D4AF37]">%</span></div>
                                    <div className="text-sm tracking-widest text-[#888888] uppercase">Avg Yield (Tier 1 Debt)</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-8xl font-serif text-white mb-4">0<span className="text-[#D4AF37]"></span></div>
                                    <div className="text-sm tracking-widest text-[#888888] uppercase">Default Rate (10 Yrs)</div>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 4: Architecture */}
                        <div className="w-[100vw] h-full flex items-center px-12 lg:px-32 flex-shrink-0 border-l border-[#333333] bg-gradient-to-r from-transparent to-[#D4AF37]/5">
                            <div className="max-w-4xl">
                                <h2 className="text-6xl font-serif text-white mb-12">The Golden Section</h2>
                                <div className="space-y-12">
                                    <div className="flex gap-8 group">
                                        <div className="text-4xl text-[#333] font-serif group-hover:text-[#D4AF37] transition-colors">01</div>
                                        <div>
                                            <h3 className="text-3xl text-white mb-2">Custodial Sovereignty</h3>
                                            <p className="text-[#888888]">Your capital rests in segregated ASIC-regulated trust structures, ensuring legal impenetrable walls against firm insolvency.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-8 group">
                                        <div className="text-4xl text-[#333] font-serif group-hover:text-[#D4AF37] transition-colors">02</div>
                                        <div>
                                            <h3 className="text-3xl text-white mb-2">High-Conviction Debt</h3>
                                            <p className="text-[#888888]">We exclusively purchase AAA to BBB+ rated Australian corporate and sovereign bonds.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 5: The Matrix (Grid of Services) */}
                        <div className="w-[100vw] h-full flex flex-col justify-center px-12 lg:px-32 flex-shrink-0 border-l border-[#333333]">
                            <div className="grid grid-cols-3 gap-1">
                                {[
                                    { name: "Sovereign Bonds", active: true },
                                    { name: "Corporate Hybrid", active: false },
                                    { name: "Blue-Chip Equity", active: true },
                                    { name: "Property Trust", active: false },
                                    { name: "Liquidity Reserves", active: true },
                                    { name: "Private Credit", active: false }
                                ].map((svc, i) => (
                                    <div key={i} className={`h-64 border border-[#333] p-8 flex flex-col justify-end transition-colors ${svc.active ? 'hover:bg-[#111]' : 'opacity-40'}`}>
                                        <div className={`w-3 h-3 rounded-full mb-4 ${svc.active ? 'bg-[#D4AF37]' : 'bg-[#333]'}`}></div>
                                        <h3 className="text-2xl font-serif text-white">{svc.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SECTION 6: The Advisory Monolith */}
                        <div className="w-[100vw] h-full flex items-center px-12 lg:px-32 flex-shrink-0 border-l border-[#333333] relative overflow-hidden">
                            <div className="z-10 bg-[#0A0A0A] p-16 border border-[#333] shadow-2xl">
                                <h2 className="text-5xl font-serif text-white mb-6">Designed by Fiduciaries</h2>
                                <p className="text-xl text-[#888888] max-w-lg mb-8">
                                    Nobel advisors are legally bound to act within your best financial interests, eliminating the commission-driven conflicts inherent in retail banking.
                                </p>
                                <button className="text-[#D4AF37] tracking-widest uppercase text-sm font-bold pb-2 border-b border-[#D4AF37] hover:text-white hover:border-white transition-colors">
                                    Review Our Credentials
                                </button>
                            </div>
                            {/* Background abstract gold bars */}
                            <div className="absolute right-[10%] top-0 h-full w-[400px] flex gap-4 rotate-12 opacity-20">
                                <div className="w-1/3 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent h-[150%] -translate-y-[25%]"></div>
                                <div className="w-1/3 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent h-[200%] -translate-y-[50%]"></div>
                                <div className="w-1/3 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent h-[120%] -translate-y-[10%]"></div>
                            </div>
                        </div>

                        {/* SECTION 7: Secure Terminal */}
                        <div className="w-[100vw] h-full flex flex-col justify-center px-12 lg:px-32 flex-shrink-0 border-l border-[#D4AF37]">
                            <div className="max-w-2xl">
                                <h2 className="text-6xl font-serif text-white mb-6">Enter the Vault.</h2>
                                <p className="text-xl text-[#888888] mb-12">
                                    Schedule a private briefing with our capital allocation specialists in Sydney.
                                </p>
                                <form className="space-y-8">
                                    <div className="relative">
                                        <input type="text" className="w-full bg-transparent border-b border-[#333] text-white text-xl py-4 focus:outline-none focus:border-[#D4AF37] transition-colors peer" placeholder=" " />
                                        <label className="absolute top-4 left-0 text-[#888] pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#D4AF37]">
                                            Legal Name
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input type="email" className="w-full bg-transparent border-b border-[#333] text-white text-xl py-4 focus:outline-none focus:border-[#D4AF37] transition-colors peer" placeholder=" " />
                                        <label className="absolute top-4 left-0 text-[#888] pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#D4AF37]">
                                            Direct Contact (Email)
                                        </label>
                                    </div>
                                    <button className="w-full bg-[#D4AF37] hover:bg-[#b0902c] text-black font-bold uppercase tracking-widest py-6 mt-8 transition-colors">
                                        Initialize Contact
                                    </button>
                                </form>
                            </div>
                        </div>

                    </motion.div>

                </div>

                {/* Floating Scroll Indicator mapped to bottom of the viewport */}
                <div className="fixed bottom-12 left-1/2 -ml-[1px] w-[2px] h-24 bg-[#333] overflow-hidden z-50 mix-blend-difference pointer-events-none">
                    <motion.div
                        className="w-full bg-[#D4AF37]"
                        style={{
                            height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
                        }}
                    />
                </div>

            </div>

                    <Footer />
        </div>
    );
}
