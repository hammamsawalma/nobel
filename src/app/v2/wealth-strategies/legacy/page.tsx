"use client";

import CinematicReveal from "@/components/v2/CinematicReveal";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const LEGACY_PILLARS = [
    {
        roman: "I",
        title: "Dynastic Trust Architecture",
        desc: "Multi-generational trust structures engineered to preserve and grow capital across three or more generations. Jurisdiction-optimised across Tier-1 common law environments.",
        tags: ["Discretionary Trusts", "Generation-Skipping", "Protective Structures"],
    },
    {
        roman: "II",
        title: "Philanthropic Conduit Design",
        desc: "Private Ancillary Funds, charitable foundations, and impact vehicles designed to formalise your family's philanthropic legacy while maximising tax efficiency.",
        tags: ["Private Foundations", "DAF Structures", "Impact Investing"],
    },
    {
        roman: "III",
        title: "Succession & Stewardship",
        desc: "Next-generation stewardship programmes, family governance charters, and bespoke family council infrastructure to ensure continuity of values across wealth transitions.",
        tags: ["Family Governance", "Heir Stewardship", "Succession Planning"],
    },
];

export default function LegacyPage() {
    return (
        <div className="bg-noble-charcoal text-noble-ivory font-sans pt-32 pb-24">

            {/* HERO */}
            <section className="relative mb-24 border-b border-noble-gold-900/30 pb-20 px-6 lg:px-12">
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-noble-gold-500/40 to-transparent" />
                <div className="max-w-7xl mx-auto">
                    <CinematicReveal delay={0.1}>
                        <div className="flex items-center gap-6 mb-10">
                            <div className="w-12 h-[1px] bg-noble-gold-500" />
                            <span className="text-[9px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">Wealth Strategies — IV</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-[6rem] text-noble-ivory font-display leading-[1.05] mb-8">
                            Estate &<br />
                            <span className="italic text-transparent bg-clip-text bg-gradient-gold-foil">Philanthropy.</span>
                        </h1>
                    </CinematicReveal>
                    <CinematicReveal delay={0.35} direction="up">
                        <div className="max-w-2xl bg-noble-charcoal/60 backdrop-blur-xl border border-noble-gold-500/20 rounded-2xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                            <p className="text-noble-slate text-sm md:text-base font-serif leading-loose tracking-wide">
                                The ultimate measure of enduring wealth is not its size — it is the permanence of the values it carries forward. Noble Rock engineers bespoke legacy structures that transcend generations without compromise.
                            </p>
                        </div>
                    </CinematicReveal>
                </div>
            </section>

            {/* PILLARS */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="space-y-20">
                    {LEGACY_PILLARS.map((pillar, idx) => (
                        <CinematicReveal key={pillar.roman} delay={0.1 + idx * 0.15}>
                            <motion.div
                                whileHover={{ scale: 1.005 }}
                                className="group relative rounded-3xl border border-noble-gold-500/20 bg-noble-charcoal/60 backdrop-blur-xl p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-noble-gold-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
                                    {/* Roman numeral */}
                                    <div className="text-[64px] lg:text-[80px] font-display italic text-noble-gold-500/15 leading-none select-none shrink-0 w-16">
                                        {pillar.roman}
                                    </div>
                                    {/* Content */}
                                    <div className="flex-1">
                                        <h2 className="text-2xl md:text-4xl font-display text-noble-ivory mb-4 group-hover:text-noble-gold-300 transition-colors duration-500 tracking-wide">
                                            {pillar.title}
                                        </h2>
                                        <p className="text-noble-slate text-sm font-serif leading-loose tracking-wide mb-8 max-w-2xl">
                                            {pillar.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {pillar.tags.map(tag => (
                                                <span key={tag} className="text-[8px] uppercase tracking-[0.35em] text-noble-ivory/70 border border-noble-gold-500/25 px-3 py-1.5 rounded-full bg-noble-charcoal/60">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </CinematicReveal>
                    ))}
                </div>
            </section>

            {/* CONSULTATION CTA */}
            <section className="mt-32 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <CinematicReveal direction="up">
                        <div className="text-center">
                            <span className="text-[9px] uppercase tracking-[0.45em] text-noble-gold-600 font-bold block mb-6">
                                By Private Appointment Only
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display italic text-noble-ivory mb-10">
                                Architect your family's permanent legacy.
                            </h2>
                            <Link
                                href="/v2/portal"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-noble-gold-700/40 to-noble-gold-900/20 border border-noble-gold-500/60 text-noble-gold-300 px-10 py-4 text-[10px] font-bold tracking-[0.3em] uppercase rounded-xl hover:text-noble-gold-100 hover:border-noble-gold-400 transition-all duration-500"
                            >
                                Request Private Consultation
                                <MoveRight size={14} />
                            </Link>
                        </div>
                    </CinematicReveal>
                </div>
            </section>
        </div>
    );
}
