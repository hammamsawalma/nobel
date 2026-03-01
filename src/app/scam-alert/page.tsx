"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldAlert, AlertTriangle, Fingerprint, Lock, ShieldCheck, MailWarning, FileWarning, ExternalLink } from 'lucide-react';
import V11Header from "@/components/v2/Header";
import V11Footer from "@/components/v2/Footer";

export default function ScamAlertPage() {
    const snapSpring = { type: "spring", stiffness: 300, damping: 20, mass: 0.8 };

    return (
        <div className="bg-[#0A1A3A] text-white font-sans selection:bg-red-600 selection:text-white min-h-screen">
            <V11Header />

            {/* HERO - SECURITY DIRECTIVE */}
            <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12 overflow-hidden border-b border-red-900/40">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600/0 via-red-600 to-red-600/0"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>

                {/* Subtle red glow in background */}
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={snapSpring as any} className="mb-6 flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.8)]"></span>
                            <div className="text-red-400 tracking-[0.2em] font-bold text-[10px] md:text-sm uppercase">
                                OFFICIAL SECURITY DIRECTIVE
                            </div>
                        </motion.div>
                        <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.1 } as any} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight text-white mb-6">
                            Fraud & Impersonation <span className="text-red-500">Defense.</span>
                        </motion.h1>
                        <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.2 } as any} className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium mb-8">
                            High-net-worth individuals and premium wealth management firms are primary targets for sophisticated financial impersonation. This directive outlines our official verification protocols and the active threats currently in circulation.
                        </motion.p>

                        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.3 } as any}>
                            <a href="#report-fraud" className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest px-8 py-5 text-xs md:text-sm rounded-full transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-none">
                                Report Suspicious Activity <ShieldAlert className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ...snapSpring, delay: 0.4 } as any} className="relative hidden lg:block">
                        <div className="aspect-square relative rounded-full overflow-hidden border border-red-900/30 shadow-[0_0_50px_rgba(220,38,38,0.1)]">
                            <Image src="/v11_assets/scam_alert_defense_v2.png" alt="Fraud Defense" fill className="object-cover opacity-80 mix-blend-screen" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* KNOWN THREAT VECTORS */}
            <section className="py-20 md:py-32 bg-[#050D20] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="mb-16 md:mb-20 text-center"
                    >
                        <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Known Threat Vectors.</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Please be hyper-vigilant regarding the following deceptive practices currently being employed by bad actors claiming affiliation with Nobel Wealth.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Threat 1 */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={snapSpring as any}
                            className="bg-red-950/20 border border-red-900/30 rounded-3xl p-8 hover:bg-red-950/30 transition-colors"
                        >
                            <MailWarning className="w-10 h-10 text-red-500 mb-6" />
                            <h3 className="text-xl md:text-2xl font-black text-white mb-3">Domain Spoofing (Phishing)</h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6">
                                Fraudsters are sending emails from domains that visually mimic ours (e.g., <code className="text-red-400 bg-red-950/50 px-2 py-1 rounded">@nobel-wealth.com</code> or <code className="text-red-400 bg-red-950/50 px-2 py-1 rounded">@nobelwealth-invest.com</code>).
                            </p>
                            <div className="bg-[#0A1A3A] rounded-xl p-4 border border-blue-900/30">
                                <strong className="text-white block mb-1 text-sm"><span className="text-blue-400 text-xs tracking-widest uppercase">Official Domain</span></strong>
                                <span className="text-blue-300 font-mono text-sm">@nobelwealth.com.au</span>
                            </div>
                        </motion.div>

                        {/* Threat 2 */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ...snapSpring, delay: 0.1 } as any}
                            className="bg-red-950/20 border border-red-900/30 rounded-3xl p-8 hover:bg-red-950/30 transition-colors"
                        >
                            <FileWarning className="w-10 h-10 text-red-500 mb-6" />
                            <h3 className="text-xl md:text-2xl font-black text-white mb-3">Fake Bond & High-Yield Offers</h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6">
                                The circulation of counterfeit offering memorandums promising guaranteed high yields. These documents illegally utilize our logos, AFSL numbers, and genuine executive names.
                            </p>
                            <div className="bg-[#0A1A3A] rounded-xl p-4 border border-blue-900/30">
                                <strong className="text-white block mb-1 text-sm"><span className="text-blue-400 text-xs tracking-widest uppercase">The Policy</span></strong>
                                <span className="text-blue-300 text-sm">We never solicit unscheduled capital injections via unsolicited emails.</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* VERIFICATION PROTOCOLS */}
            <section className="py-20 md:py-32 bg-[#0A1A3A] relative">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-10 border-l-[4px] border-blue-500 pl-6">Core Verification Protocols.</h2>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="bg-blue-900/40 p-3 rounded-xl border border-blue-800 flex-shrink-0">
                                    <Lock className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Secure Client Portal Only</h3>
                                    <p className="text-gray-400 leading-relaxed font-medium">Any legitimate request for documentation, identification, or capital deployment will strictly occur within our heavily encrypted Client Portal. Never authorize transfers based purely on email or phone instructions.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="bg-blue-900/40 p-3 rounded-xl border border-blue-800 flex-shrink-0">
                                    <Fingerprint className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Advisor Voice Authentication</h3>
                                    <p className="text-gray-400 leading-relaxed font-medium">If you receive unexpected contact claiming to be your advisor, hang up immediately. Call our main switchboard via the official number listed on this website and ask to be internally transferred to your specific advisor.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="bg-blue-900/40 p-3 rounded-xl border border-blue-800 flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">ASIC Registry Validation</h3>
                                    <p className="text-gray-400 leading-relaxed font-medium">Nobel Wealth operates under strict Australian Securities & Investments Commission (ASIC) oversight. You can instantly verify our AFSL licensing and corporate entity status via the official government registries.</p>
                                    <a href="https://asic.gov.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-white mt-3 font-bold text-sm transition-colors">
                                        Visit ASIC Registry <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECURE REPORTING MECHANISM */}
            <section id="report-fraud" className="py-20 md:py-32 bg-[#030814] border-t border-red-900/20 text-center px-6">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={snapSpring as any}
                    className="max-w-3xl mx-auto"
                >
                    <div className="inline-block bg-red-950/30 border border-red-900 p-4 rounded-full mb-8">
                        <ShieldAlert className="w-10 h-10 text-red-500" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Report Fraudulent Activity.</h2>
                    <p className="text-gray-400 mb-10 text-lg md:text-xl font-medium">If you believe you have been targeted by an entity impersonating Nobel Wealth, do not engage. Forward any malicious documentation immediately to our compliance team.</p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <a href="mailto:compliance@nobelwealth.com.au" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-red-600 text-white hover:bg-white hover:text-red-700 font-black uppercase tracking-widest px-6 md:px-8 py-4 text-[10px] md:text-xs rounded-full transition-all border border-transparent">
                            Email Compliance Team
                        </a>
                        <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent text-white hover:bg-white/5 border border-white/20 font-black uppercase tracking-widest px-6 md:px-8 py-4 text-[10px] md:text-xs rounded-full transition-all">
                            General Contact
                        </Link>
                    </div>
                </motion.div>
            </section>

            <V11Footer />
        </div>
    );
}
