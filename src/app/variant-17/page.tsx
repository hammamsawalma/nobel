"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldAlert, Cpu, Database, ChevronRight, Menu, X, CheckCircle2 } from "lucide-react";

// --- Minimalist Tech Header ---
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F4F5]/80 backdrop-blur-xl border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Cpu className="w-6 h-6 text-[#10B981]" />
                    <span className="text-gray-900 text-lg font-black tracking-tighter uppercase">Yield<span className="text-[#10B981]">Arch</span></span>
                </div>
                <nav className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase text-gray-500">
                    <Link href="#architecture" className="hover:text-gray-900 transition-colors">Architecture</Link>
                    <Link href="#instruments" className="hover:text-gray-900 transition-colors">Instruments</Link>
                    <Link href="#lifecycle" className="hover:text-gray-900 transition-colors">Lifecycle</Link>
                    <Link href="#portal" className="hover:text-[#10B981] transition-colors flex items-center gap-1">Client Node <ChevronRight size={12} /></Link>
                </nav>
                <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
};

// --- Minimalist Tech Footer ---
const Footer = () => (
    <footer className="bg-gray-100 text-gray-600 py-16 border-t border-gray-200 font-mono text-xs">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <Cpu className="w-5 h-5 text-[#10B981]" />
                    <span className="text-gray-900 text-base font-black tracking-tighter uppercase">Yield<span className="text-[#10B981]">Arch</span></span>
                </div>
                <p className="mb-4 text-gray-500 leading-relaxed">
                    Algorithmic precision applied to high-yield credit instruments. Engineered for wholesale investors and retirees seeking absolute structural stability.
                </p>
                <p className="text-gray-400">SYS_ID: AFSL-456789 | ACN-123456789</p>
            </div>
            <div>
                <h4 className="text-gray-900 font-bold tracking-widest uppercase mb-4">Compliance Routes</h4>
                <ul className="space-y-2 text-gray-500">
                    <li><Link href="/" className="hover:text-[#10B981] transition-colors">/doc/financial-services-guide</Link></li>
                    <li><Link href="/" className="hover:text-[#10B981] transition-colors">/doc/privacy-protocol</Link></li>
                    <li><Link href="/" className="hover:text-[#10B981] transition-colors">/doc/target-market</Link></li>
                    <li><Link href="/" className="hover:text-[#10B981] transition-colors">/doc/risk-disclosure</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-gray-900 font-bold tracking-widest uppercase mb-4">Support Node</h4>
                <ul className="space-y-2 text-gray-500">
                    <li>Location: Brisbane Data Centre</li>
                    <li>Port: +61 7 3000 0000</li>
                    <li>Ping: sys@yieldarch.com.au</li>
                    <li className="pt-4 flex items-center gap-2 text-red-500">
                        <ShieldAlert size={14} /> Report Fraudulent Instances
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);

export default function YieldArchitectureVariant() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        { title: "Consultation & Init", desc: "Algorithmic profiling of your risk tolerance and yield requirements." },
        { title: "Asset Selection", desc: "Filtering high-yield and green bonds through our structural matrix." },
        { title: "Secure Account", desc: "Deployment of capital into your legally ring-fenced custodial node." },
        { title: "Predictable Returns", desc: "Automated distribution of fixed-income yields direct to your bank." }
    ];

    return (
        <div ref={containerRef} className="bg-zinc-50 min-h-screen text-gray-900 font-sans selection:bg-[#10B981] selection:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 w-full h-full opacity-60">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full mix-blend-luminosity"
                    >
                        <source src="/vid/drone-orbiting-and-panning-shot-of-brisbane-skyscraper-called-the-one-with-bri-SBV-348964385-preview.mp4" type="video/mp4" />
                    </video>
                    {/* Tech grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent" />
                </div>

                <motion.div
                    style={{ y: yHeroText }}
                    className="relative z-10 max-w-7xl mx-auto px-6 w-full"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                        <span className="text-[#10B981] font-mono text-sm uppercase tracking-widest">System Online // Yield Optimizer Active</span>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8"
                    >
                        STRUCTURAL<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-blue-400">CAPITAL</span> YIELD.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-gray-400 max-w-xl font-light mb-10 border-l-2 border-[#10B981] pl-6"
                    >
                        Engineered exclusively for retirees and wholesale investors seeking highly predictable, structure-based income mathematically insulated from market volatility.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white text-zinc-900 px-8 py-4 font-bold tracking-wider uppercase text-sm hover:bg-[#10B981] hover:text-white transition-all duration-300 flex items-center gap-3 group"
                    >
                        Initialize Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </section>

            {/* Architecture Concept */}
            <section id="architecture" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square w-full bg-zinc-100 p-8"
                        >
                            <Image src="/images/v17_yield_architecture_1.png" alt="Structural Yield Tower" fill className="object-cover p-4" />
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-zinc-900" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-zinc-900" />
                        </motion.div>
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-zinc-900">
                                The Architecture of Stability.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We do not speculate. We engineer. By utilizing deep data analysis and strict compliance frameworks, we construct bond portfolios that behave with mathematical predictability.
                            </p>
                            <div className="pt-6 grid grid-cols-2 gap-8">
                                <div>
                                    <Database className="w-8 h-8 text-[#10B981] mb-4" />
                                    <h4 className="font-bold text-zinc-900 mb-2">Data-Driven Models</h4>
                                    <p className="text-sm text-gray-500">Credit analysis powered by real-time quantitative metrics.</p>
                                </div>
                                <div>
                                    <ShieldAlert className="w-8 h-8 text-[#10B981] mb-4" />
                                    <h4 className="font-bold text-zinc-900 mb-2">Risk Insulation</h4>
                                    <p className="text-sm text-gray-500">Directly held assets via legally isolated custodial structures.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credit Instruments (Products) */}
            <section id="instruments" className="py-24 bg-zinc-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Credit Instruments</h2>
                            <p className="text-gray-400 max-w-2xl">Access tier-1 corporate debt, sustainable green bonds, and term structures previously unavailable to private capital.</p>
                        </div>
                        <button className="text-[#10B981] font-mono text-sm tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2">
                            View Matrix <ChevronRight size={16} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Corporate Bonds", yield: "6.5% - 8.0%", desc: "Senior secured debt from ASX-listed enterprises.", img: "/images/v17_yield_architecture_4.png" },
                            { title: "Green Bonds", yield: "5.5% - 7.0%", desc: "Sustainable infrastructure and renewable energy debt.", img: "/images/v17_yield_architecture_2.png" },
                            { title: "Term Investments", yield: "Fixed Term", desc: "Highly predictable, short-duration capital parking.", img: "/images/v17_yield_architecture_5.png" },
                            { title: "High-Yield Debt", yield: "8.0% - 11.0%", desc: "Calculated risk structures for maximum income generation.", img: "/images/v17_yield_architecture_3.png" },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-zinc-800/50 border border-zinc-700/50 hover:border-[#10B981]/50 group transition-all duration-300">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image src={item.img} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                                </div>
                                <div className="p-6">
                                    <div className="text-[#10B981] font-mono text-sm mb-2">{item.yield} Target</div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4-Step Compliance Lifecycle */}
            <section id="lifecycle" className="py-32 bg-zinc-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-4">4-Step Compliance Lifecycle</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">A rigid, transparent process ensuring total alignment between your capital and our algorithmic execution.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="w-full lg:w-1/3 space-y-4">
                            {steps.map((step, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveStep(idx)}
                                    className={`w-full text-left p-6 border-l-4 transition-all duration-300 ${activeStep === idx
                                            ? "bg-white border-[#10B981] shadow-lg"
                                            : "bg-transparent border-gray-200 hover:bg-white/50"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`font-mono text-sm ${activeStep === idx ? "text-[#10B981]" : "text-gray-400"}`}>0{idx + 1}</span>
                                        <h4 className={`font-bold text-lg ${activeStep === idx ? "text-zinc-900" : "text-gray-500"}`}>{step.title}</h4>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="w-full lg:w-2/3 bg-white p-12 shadow-xl border border-gray-100 relative min-h-[300px] flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <CheckCircle2 className="w-12 h-12 text-[#10B981] mb-6" />
                                    <h3 className="text-3xl font-black text-zinc-900 mb-4">{steps[activeStep].title}</h3>
                                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">{steps[activeStep].desc}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA / Scam Warning */}
            <section className="bg-zinc-900 border-y border-[#10B981]/30 py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <ShieldAlert className="w-12 h-12 text-red-500 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-white mb-4">Security Protocol Advisory</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed mb-8">
                        YieldArch (Capital Guard AU Pty Ltd) will never ask for your passwords, remote computer access, or direct deposits into personal bank accounts. Always ensure you are communicating through our official, encrypted Client Node portal.
                    </p>
                    <button className="bg-transparent border border-[#10B981] text-[#10B981] px-8 py-3 font-mono text-sm tracking-widest uppercase hover:bg-[#10B981] hover:text-white transition-all">
                        Initiate Secure Contact
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
