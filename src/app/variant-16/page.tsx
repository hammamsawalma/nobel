"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, ChevronRight, BarChart3, Lock, Building, ArrowRight, Menu, X, Landmark, FileText, Globe } from "lucide-react";

// --- Custom Header ---
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A2F]/90 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#A67C00] rounded-sm flex items-center justify-center">
                        <span className="text-[#0A1A2F] font-bold text-xl tracking-tighter">IG</span>
                    </div>
                    <span className="text-white text-xl font-bold tracking-widest uppercase">Institution Guard</span>
                </div>
                <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase text-white/80">
                    <Link href="#solutions" className="hover:text-[#D4AF37] transition-colors">Solutions</Link>
                    <Link href="#custodial" className="hover:text-[#D4AF37] transition-colors">Custodial</Link>
                    <Link href="#calculator" className="hover:text-[#D4AF37] transition-colors">Yield Calculator</Link>
                    <Link href="#about" className="hover:text-[#D4AF37] transition-colors">Firm</Link>
                </nav>
                <div className="hidden md:flex items-center gap-4">
                    <button className="text-white text-sm font-medium hover:text-[#D4AF37] transition-colors">Login</button>
                    <button className="bg-[#D4AF37] text-[#0A1A2F] px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors">Client Access</button>
                </div>
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
};

// --- Custom Footer ---
const Footer = () => (
    <footer className="bg-[#050D17] text-white pt-24 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#A67C00] rounded-sm flex items-center justify-center">
                            <span className="text-[#0A1A2F] font-bold text-sm tracking-tighter">IG</span>
                        </div>
                        <span className="text-white text-lg font-bold tracking-widest uppercase">Institution Guard</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed max-w-md">
                        Executing discrete, high-yield capital preservation strategies for wholesale and institutional clients. Authorized under Australian financial regulations.
                    </p>
                </div>
                <div>
                    <h4 className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-6">Legal</h4>
                    <ul className="space-y-3 text-sm text-white/60">
                        <li><Link href="/" className="hover:text-white transition-colors">Financial Services Guide</Link></li>
                        <li><Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/" className="hover:text-white transition-colors">Target Market Determination</Link></li>
                        <li><Link href="/" className="hover:text-white transition-colors">Risk Disclosure</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-6">Contact</h4>
                    <ul className="space-y-3 text-sm text-white/60">
                        <li>Level 42, 1 Farrer Place</li>
                        <li>Sydney NSW 2000, Australia</li>
                        <li className="pt-2">+61 2 8000 0000</li>
                        <li>institutional@guard.com.au</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                <p>© {new Date().getFullYear()} Institution Guard Pty Ltd. All rights reserved.</p>
                <p>AFSL: 456 789 | ACN: 123 456 789</p>
            </div>
        </div>
    </footer>
);

export default function InstitutionalGuardVariant() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    const yHero = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // Yield Calculator State
    const [investment, setInvestment] = useState(500000);
    const [term, setTerm] = useState(3);
    const [rate] = useState(0.065); // 6.5% base

    const calculateReturn = () => {
        return (investment * Math.pow(1 + rate, term)).toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });
    };

    return (
        <div ref={containerRef} className="bg-white min-h-screen text-[#0A1A2F] font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">
            <Header />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A1A2F]">
                <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full opacity-40 scale-105"
                    >
                        <source src="/vid/beautiful-skyscraper-in-the-centre-aerial-view-modern-building-in-city-centre--SBV-348580015-preview.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-[#0A1A2F]/50 to-transparent" />
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <span className="inline-block py-1 px-3 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-8 bg-[#D4AF37]/10 backdrop-blur-sm">
                            Wholesale Wealth Management
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8"
                    >
                        Supreme <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E596] italic">Authority</span><br /> in Capital Yield.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-lg md:text-xl text-white/70 max-w-2xl font-light mb-12"
                    >
                        Protecting and growing generational wealth through strictly regulated, fixed-income custodial services and unparalleled institutional access.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button className="bg-[#D4AF37] text-[#0A1A2F] px-8 py-4 font-bold tracking-wider uppercase text-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group">
                            View Current Rates <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="border border-white/20 text-white px-8 py-4 font-bold tracking-wider uppercase text-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
                            Download Prospectus
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Trust Bar */}
            <div className="bg-[#050D17] border-y border-white/10 py-6">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 text-sm font-medium tracking-widest uppercase text-white/50">
                    <div className="flex items-center gap-2"><Landmark size={18} className="text-[#D4AF37]" /> ASIC Regulated</div>
                    <div className="flex items-center gap-2"><Shield size={18} className="text-[#D4AF37]" /> Capital Preservation</div>
                    <div className="flex items-center gap-2"><Globe size={18} className="text-[#D4AF37]" /> $2.4B+ AUM</div>
                    <div>AFSL: 456 789</div>
                    <div>ACN: 123 456 789</div>
                </div>
            </div>

            {/* Value Proposition */}
            <section id="solutions" className="py-32 bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[#0A1A2F] text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                Institutional Access. <br /> <span className="text-[#A67C00]">Private Precision.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                We bridge the gap between wholesale financial markets and private capital. As a licensed custodial entity, we legally hold and protect your assets while generating consistent, predictable income streams immune to equity market volatility.
                            </p>

                            <ul className="space-y-6 mb-10">
                                {[
                                    { title: "Fixed Income (Corporate Bonds)", desc: "Lend directly to tier-1 corporations for fixed annual returns." },
                                    { title: "Equities (Managed Growth)", desc: "Long-term, deeply researched equity positions for capital appreciation." },
                                    { title: "Superannuation (Retirement)", desc: "Structuring secure SMSF portfolios designed to outlast you." }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-4 items-start">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-[#0A1A2F] flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[#0A1A2F] font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/5] w-full max-w-md mx-auto"
                        >
                            <Image
                                src="/images/v16_institutional_guard_1_1772326417985.png"
                                alt="Modern Corporate Tower"
                                fill
                                className="object-cover shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-xs border-l-4 border-[#D4AF37]">
                                <p className="text-[#0A1A2F] font-bold text-2xl mb-2">10.4%</p>
                                <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Average Historical Portfolio Yield (2014-2024)</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Custodial Vault Concept */}
            <section id="custodial" className="py-32 bg-[#0A1A2F] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
                    <Image src="/images/v16_institutional_guard_3_1772326442392.png" alt="Secure Vault" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2F] to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-2xl">
                        <Shield className="w-16 h-16 text-[#D4AF37] mb-8" />
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Absolute Custodial Security.</h2>
                        <p className="text-white/70 text-lg leading-relaxed mb-10">
                            Unlike traditional brokers, we operate as a legal Custodian. Your bonds and assets are held legally in trust for you as the beneficial owner. This structural separation ensures that your capital is completely ring-fenced from our corporate operations.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="border-l border-white/20 pl-6">
                                <Lock className="w-6 h-6 text-[#D4AF37] mb-4" />
                                <h4 className="text-xl font-bold mb-2">Ring-fenced Assets</h4>
                                <p className="text-white/50 text-sm">Targeting absolute insulation from operational risk.</p>
                            </div>
                            <div className="border-l border-white/20 pl-6">
                                <FileText className="w-6 h-6 text-[#D4AF37] mb-4" />
                                <h4 className="text-xl font-bold mb-2">Direct Settlement</h4>
                                <p className="text-white/50 text-sm">Direct market clearing via wholesale tier-1 partners.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Yield Calculator */}
            <section id="calculator" className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[#0A1A2F] text-4xl font-bold tracking-tight mb-4">Project Your Yield</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Simulate potential returns based on our targeted high-yield bond portfolios.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#F8F9FA] p-8 md:p-12 border border-gray-100 shadow-xl">
                        <div className="lg:col-span-5 space-y-10">
                            <div>
                                <label className="flex justify-between text-sm font-bold text-[#0A1A2F] uppercase tracking-wide mb-4">
                                    <span>Initial Investment</span>
                                    <span className="text-[#A67C00]">{investment.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 })}</span>
                                </label>
                                <input
                                    type="range"
                                    min="50000"
                                    max="5000000"
                                    step="50000"
                                    value={investment}
                                    onChange={(e) => setInvestment(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0A1A2F]"
                                />
                            </div>

                            <div>
                                <label className="flex justify-between text-sm font-bold text-[#0A1A2F] uppercase tracking-wide mb-4">
                                    <span>Investment Term</span>
                                    <span className="text-[#A67C00]">{term} Years</span>
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    step="1"
                                    value={term}
                                    onChange={(e) => setTerm(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0A1A2F]"
                                />
                            </div>

                            <div className="p-6 bg-[#0A1A2F] text-white">
                                <p className="text-sm text-white/60 uppercase tracking-widest font-semibold mb-2">Targeted Fixed Rate</p>
                                <p className="text-4xl font-light text-[#D4AF37]">{(rate * 100).toFixed(1)}% p.a.</p>
                                <p className="text-xs text-white/40 mt-4">*Indicative rate based on current wholesale corporate bond offerings. Not guaranteed.</p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 relative aspect-[16/9] w-full">
                            <Image src="/images/v16_institutional_guard_4_1772326456688.png" alt="Analytics Dashboard" fill className="object-cover shadow-2xl" />
                            <div className="absolute inset-0 bg-[#0A1A2F]/40 backdrop-blur-[2px] flex items-center justify-center">
                                <div className="text-center p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                                    <p className="text-white text-sm font-bold tracking-widest uppercase mb-2">Projected Maturity Value</p>
                                    <p className="text-5xl md:text-6xl font-bold text-[#F9E596] tracking-tight">{calculateReturn()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership / About */}
            <section id="about" className="py-32 bg-[#050D17] text-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-1 relative aspect-[4/5] w-full"
                    >
                        <Image src="/images/v16_institutional_guard_5_1772326469066.png" alt="Leadership Team" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/20" />
                    </motion.div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Leadership forged in institutional markets.</h2>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            We bring decades of experience from global investment banks and institutional funds directly to private clients. You aren't just a number; you are investing alongside our own partners.
                        </p>
                        <div className="flex flex-col gap-6">
                            <div className="border-b border-white/10 pb-6">
                                <p className="text-[#D4AF37] font-bold text-xl mb-1">Alexander Vance</p>
                                <p className="text-white/50 text-sm uppercase tracking-wider">Managing Director</p>
                            </div>
                            <div className="border-b border-white/10 pb-6">
                                <p className="text-[#D4AF37] font-bold text-xl mb-1">Sarah Sterling</p>
                                <p className="text-white/50 text-sm uppercase tracking-wider">Head of Fixed Income</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
