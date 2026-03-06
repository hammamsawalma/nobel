"use client";

import CinematicReveal from "@/components/v2/CinematicReveal";
import { Lock } from "lucide-react";
import Image from "next/image";

export default function PrivateClientPortal() {
    return (
        <div className="bg-transparent text-noble-ivory font-sans pt-12 selection:bg-noble-gold-500 selection:text-noble-charcoal">

            <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 lg:px-12 overflow-hidden mb-24">

                {/* Vault Door Texture Backdrop */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/v2/gilded_abstract_texture_v2_1772823845293.png"
                        alt="Vault Detail"
                        fill
                        className="object-cover opacity-20 mix-blend-color-dodge grayscale"
                    />
                </div>

                {/* Spotlight Gradient */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[80vh] bg-gradient-to-b from-noble-gold-900/10 via-transparent to-transparent pointer-events-none z-0 mix-blend-screen" />

                <div className="relative z-10 w-full max-w-md mx-auto mt-20 p-8 lg:p-12 border border-noble-gold-900/30 bg-noble-charcoal/40 backdrop-blur-md">
                    <CinematicReveal direction="up" duration={1}>
                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-16 border border-noble-gold-800/40 rounded-sm flex items-center justify-center text-noble-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                                <Lock className="w-5 h-5 font-light" strokeWidth={1.5} />
                            </div>
                        </div>
                    </CinematicReveal>

                    <CinematicReveal delay={0.2} direction="up" duration={1.2}>
                        <h1 className="text-3xl md:text-5xl font-display text-center text-noble-ivory mb-4 tracking-wide">
                            Secure <span className="italic text-transparent bg-clip-text bg-gradient-gold-foil">Gateway.</span>
                        </h1>
                        <div className="flex flex-col items-center gap-3 mb-12">
                            <div className="w-8 h-[1px] bg-noble-gold-500/50"></div>
                            <p className="text-center text-[9px] uppercase tracking-[0.4em] text-noble-slate">
                                Authorized Private Clients Only
                            </p>
                        </div>
                    </CinematicReveal>

                    <CinematicReveal delay={0.4} direction="up" duration={1.2}>
                        <form className="space-y-10">

                            {/* Vault-style Inputs */}
                            <div className="relative group">
                                <label className="absolute left-0 -top-5 text-[8px] uppercase tracking-[0.3em] text-noble-slate focus-within:text-noble-gold-500 transition-colors">
                                    Entity ID / Legal Designation
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-noble-gold-900/40 py-3 text-noble-ivory font-serif text-lg focus:outline-none focus:border-noble-gold-500 transition-colors font-light placeholder-noble-slate/30"
                                    placeholder="Enter Designation"
                                />
                            </div>

                            <div className="relative group pt-4">
                                <label className="absolute left-0 -top-5 text-[8px] uppercase tracking-[0.3em] text-noble-slate focus-within:text-noble-gold-500 transition-colors">
                                    Architectural Passcode
                                </label>
                                <input
                                    type="password"
                                    className="w-full bg-transparent border-b border-noble-gold-900/40 py-3 text-noble-ivory font-sans text-xl tracking-[0.5em] focus:outline-none focus:border-noble-gold-500 transition-colors placeholder-noble-slate/30"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="pt-10 flex flex-col gap-8">
                                <button type="button" className="w-full bg-transparent border border-noble-gold-800/50 text-noble-gold-400 py-4 text-[10px] uppercase tracking-[0.4em] hover:bg-noble-gold-900/30 hover:text-noble-gold-300 transition-all duration-700 shadow-[inset_0_0_20px_rgba(212,175,55,0.02)]">
                                    Authenticate Signatory
                                </button>

                                <div className="text-center">
                                    <span className="text-[8px] uppercase tracking-[0.3em] text-noble-slate border-b border-transparent pb-1 cursor-pointer hover:text-noble-parchment hover:border-noble-gold-900/50 transition-all duration-500">
                                        Establish Recovery Protocol
                                    </span>
                                </div>
                            </div>

                        </form>
                    </CinematicReveal>

                    <CinematicReveal delay={0.6} direction="up" duration={1.5}>
                        <div className="mt-16 pt-8 border-t border-noble-gold-900/20 text-center">
                            <p className="text-[8px] leading-relaxed tracking-widest text-noble-slate max-w-xs mx-auto font-sans">
                                THIS TERMINAL IS MONITORED BY AES-256 MILITARY-GRADE ENCRYPTION. UNAUTHORIZED INTRUSION ATTEMPTS ARE GEOLOCATED AND REFERRED TO FEDERAL JURISDICTIONS.
                            </p>
                        </div>
                    </CinematicReveal>
                </div>
            </section>

        </div>
    )
}
