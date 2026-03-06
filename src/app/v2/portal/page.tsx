"use client";

import CinematicReveal from "@/components/v2/CinematicReveal";
import Image from "next/image";
import Link from "next/link";
import { Lock, Fingerprint, Server, Activity, ShieldCheck, Key, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function V2ClientPortal() {
    const [loginState, setLoginState] = useState<'idle' | 'authenticating' | 'error'>('idle');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoginState('authenticating');
        setTimeout(() => setLoginState('error'), 1500);
        setTimeout(() => setLoginState('idle'), 4000);
    };

    return (
        <div className="bg-[#0a0805] text-noble-ivory font-sans min-h-screen relative flex flex-col justify-between selection:bg-noble-gold-500 selection:text-noble-charcoal overflow-hidden pt-32 pb-0 perspective-1000">

            {/* ENVIRONMENTAL LIGHTING & TEXTURE */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Radial spotlight on the auth module */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(238,194,61,0.08)_0%,transparent_70%)]" />
                {/* Micro-grid overlay */}
                <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: '128px 128px' }} />
            </div>

            <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 py-20 w-full">
                <CinematicReveal direction="up" delay={0.2} className="w-full max-w-md">

                    {/* The Authentication Island */}
                    <motion.div whileHover={{ scale: 1.01 }} className="bg-noble-charcoal/40 backdrop-blur-2xl border border-noble-gold-500/30 rounded-3xl p-10 lg:p-14 shadow-[0_40px_80px_rgba(0,0,0,0.9)] shadow-inner w-full relative overflow-hidden transition-transform duration-700">
                        {/* Shimmer line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-noble-gold-500/50 to-transparent" />

                        <div className="flex flex-col items-center mb-10 text-center">
                            <div className="relative mb-6 group cursor-pointer">
                                <motion.div
                                    animate={loginState === 'authenticating' ? { rotate: 360 } : {}}
                                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                                    className="w-16 h-16 rounded-full border-2 border-noble-gold-500/40 flex items-center justify-center bg-[#110d06] relative z-10 shadow-[0_0_30px_rgba(238,194,61,0.2)]"
                                >
                                    <Lock className="text-noble-gold-500" size={24} />
                                </motion.div>
                                <div className="absolute inset-0 border border-noble-gold-500/20 rounded-full scale-110 group-hover:scale-125 transition-transform duration-700" />
                                <div className="absolute inset-0 border border-noble-gold-500/10 rounded-full scale-125 group-hover:scale-150 transition-transform duration-700 delay-100" />
                            </div>

                            <h1 className="text-3xl font-display text-noble-ivory tracking-wide mb-2 italic">Client Perimeter</h1>
                            <p className="text-[10px] uppercase tracking-[0.4em] font-sans text-noble-gold-500 font-bold">Encrypted Connection Established</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="sr-only">Access Identifier</label>
                                <input
                                    type="text"
                                    placeholder="Institutional ID / Email"
                                    className="w-full bg-[#110d06]/80 border border-noble-gold-900/50 rounded-xl px-5 py-4 text-noble-ivory text-sm focus:outline-none focus:border-noble-gold-500/50 focus:ring-1 focus:ring-noble-gold-500/50 transition-all font-sans tracking-wide shadow-inner placeholder:text-noble-slate/50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="sr-only">Cryptographic Key</label>
                                <input
                                    type="password"
                                    placeholder="Passkey"
                                    className="w-full bg-[#110d06]/80 border border-noble-gold-900/50 rounded-xl px-5 py-4 text-noble-ivory text-sm focus:outline-none focus:border-noble-gold-500/50 focus:ring-1 focus:ring-noble-gold-500/50 transition-all font-sans tracking-wide shadow-inner placeholder:text-noble-slate/50"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loginState === 'authenticating'}
                                className="w-full bg-noble-gold-500 text-[#110d06] font-bold text-[11px] uppercase tracking-[0.3em] py-5 rounded-xl hover:bg-noble-gold-400 transition-colors shadow-[0_0_20px_rgba(238,194,61,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center h-[56px]"
                            >
                                {mounted && loginState === 'idle' && "Initialize Handshake"}
                                {mounted && loginState === 'authenticating' && (
                                    <span className="flex items-center gap-3">
                                        <Activity size={16} className="animate-pulse" /> Verifying Signatures
                                    </span>
                                )}
                                {mounted && loginState === 'error' && (
                                    <span className="text-red-900 flex items-center gap-2">
                                        <ShieldCheck size={16} /> Access Denied
                                    </span>
                                )}
                            </button>
                        </form>

                        <div className="mt-8 flex justify-between items-center text-[9px] uppercase tracking-[0.2em] font-sans">
                            <button className="text-noble-slate hover:text-noble-gold-500 transition-colors">Reset Architecture</button>
                            <Link href="/v2/the-firm" className="text-noble-gold-500 hover:text-noble-ivory transition-colors">Not a Client?</Link>
                        </div>
                    </motion.div>
                </CinematicReveal>

                {/* Sub-auth Security Badges (Floating Island) */}
                <CinematicReveal delay={0.4} direction="up" className="mt-12 w-full max-w-2xl px-4">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center border border-noble-gold-900/30 rounded-full px-8 py-4 bg-[#110d06]/60 backdrop-blur-md shadow-inner">
                        <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                            <ShieldCheck size={16} className="text-noble-gold-500" />
                            <span className="text-[9px] uppercase tracking-[0.3em] font-sans text-noble-ivory">AES-256</span>
                        </div>
                        <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                            <Server size={16} className="text-noble-gold-500" />
                            <span className="text-[9px] uppercase tracking-[0.3em] font-sans text-noble-ivory">SOC 2 Type II</span>
                        </div>
                        <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                            <Fingerprint size={16} className="text-noble-gold-500" />
                            <span className="text-[9px] uppercase tracking-[0.3em] font-sans text-noble-ivory">Biometric Auth</span>
                        </div>
                        <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all hidden md:flex">
                            <Activity size={16} className="text-noble-gold-500" />
                            <span className="text-[9px] uppercase tracking-[0.3em] font-sans text-noble-ivory">ASIC Regulated</span>
                        </div>
                    </div>
                </CinematicReveal>

                {/* [NEW] SEC 3: The Custodian Network & Security Infrastructure (Content Doubling Phase 2) */}
                <CinematicReveal delay={0.6} direction="up" className="w-full max-w-5xl mt-32 relative z-20">
                    <div className="bg-noble-charcoal/30 backdrop-blur-xl border border-noble-gold-900/40 rounded-3xl p-8 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.8)] shadow-inner">
                        <div className="text-center mb-16">
                            <div className="flex items-center gap-4 justify-center mb-4">
                                <div className="w-8 h-[1px] bg-noble-gold-500/50" />
                                <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">System Architecture</span>
                                <div className="w-8 h-[1px] bg-noble-gold-500/50" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display text-noble-ivory italic tracking-wide">
                                Institutional Grade Defense.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="border border-noble-gold-900/50 bg-[#110d06]/60 rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-500 shadow-inner group">
                                <Key className="mx-auto text-noble-gold-500/50 mb-6 group-hover:text-noble-gold-400 transition-colors" size={32} />
                                <h4 className="font-display text-noble-ivory text-xl mb-3 tracking-wide">Zero-Knowledge</h4>
                                <p className="text-xs text-noble-slate font-sans tracking-wide leading-relaxed">Cryptographic architecture ensuring that Noble Rock personnel cannot access or view client raw data natively.</p>
                            </div>
                            <div className="border border-noble-gold-900/50 bg-[#110d06]/60 rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-500 shadow-inner group">
                                <Server className="mx-auto text-noble-gold-500/50 mb-6 group-hover:text-noble-gold-400 transition-colors" size={32} />
                                <h4 className="font-display text-noble-ivory text-xl mb-3 tracking-wide">Air-Gapped Cold Storage</h4>
                                <p className="text-xs text-noble-slate font-sans tracking-wide leading-relaxed">Critical family office administrative documents are vaulted offline in physical, EMP-hardened Swiss facilities.</p>
                            </div>
                            <div className="border border-noble-gold-900/50 bg-[#110d06]/60 rounded-xl p-8 text-center hover:-translate-y-2 transition-transform duration-500 shadow-inner group">
                                <EyeOff className="mx-auto text-noble-gold-500/50 mb-6 group-hover:text-noble-gold-400 transition-colors" size={32} />
                                <h4 className="font-display text-noble-ivory text-xl mb-3 tracking-wide">Stealth Execution</h4>
                                <p className="text-xs text-noble-slate font-sans tracking-wide leading-relaxed">Algorithmic capital deployment routed through dark pools to prevent front-running of ultra-high-net-worth orders.</p>
                            </div>
                        </div>

                        {/* Global Custodian Integrations */}
                        <div className="border-t border-noble-gold-900/40 pt-16">
                            <h3 className="text-center text-[10px] uppercase tracking-[0.4em] font-sans text-noble-slate font-bold mb-10">Direct Integration with Tier-1 Global Custodians</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale items-center text-center">
                                {/* Placeholder text/logos for custodial banks */}
                                <div className="font-display text-xl tracking-widest italic">J.P. Morgan</div>
                                <div className="font-display text-xl tracking-widest italic">UBS / CS</div>
                                <div className="font-display text-xl tracking-widest italic">Julius Baer</div>
                                <div className="font-display text-xl tracking-widest italic">Pictet</div>
                            </div>
                        </div>
                    </div>
                </CinematicReveal>
            </main>

            {/* SYSTEM STATUS FOOTER (Active Strip) */}
            <footer className="w-full bg-[#110d06] border-t border-noble-gold-900/50 py-4 px-6 fixed bottom-0 z-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.3em] font-sans font-bold">
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/v2" className="text-noble-slate hover:text-noble-gold-500 transition-colors">Return Home</Link>
                        <span className="text-noble-gold-900/50 hidden md:inline">|</span>
                        <a href="#" className="text-noble-slate hover:text-noble-gold-500 transition-colors">Privacy Architecture</a>
                        <span className="text-noble-gold-900/50 hidden md:inline">|</span>
                        <a href="#" className="text-noble-slate hover:text-noble-gold-500 transition-colors">Fiduciary Policy</a>
                    </div>

                    <div className="flex items-center gap-3 bg-noble-gold-900/20 px-4 py-2 rounded-full border border-noble-gold-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-green-500/80 tracking-widest">Geneva Datacenter Active</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
