"use client";

import CinematicReveal from "@/components/v2/CinematicReveal";
import HoverRevealArticle from "@/components/v2/HoverRevealArticle";
import { Lock, Clock, Filter } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Macroeconomic", "Fixed Income", "Estate", "Quantitative"];

const ARTICLES = [
    {
        title: "The Architecture of Sovereign Debt",
        category: "Fixed Income",
        date: "March 02, 2026",
        readTime: "8 MIN READ",
        wordCount: "1,240 WORDS",
        restricted: false,
        excerpt: "An analysis of yield curvature inversion and its structural implications for legacy portfolios holding duration risk beyond 2028."
    },
    {
        title: "Supply Chain Onshoring: The Hard Asset Premium",
        category: "Macroeconomic",
        date: "February 28, 2026",
        readTime: "12 MIN READ",
        wordCount: "2,150 WORDS",
        restricted: false,
        excerpt: "De-globalization is no longer a tail risk; it is a structural certainty. How to reposition portfolios toward physical infrastructure and resource scarcity.",
        bgImage: "/images/v2/maritime_shipping_1772830340075.png" // Using the newly generated image
    },
    {
        title: "Defensive Equities in Late-Stage Cycles",
        category: "Macroeconomic",
        date: "February 22, 2026",
        readTime: "11 MIN READ",
        wordCount: "1,890 WORDS",
        restricted: true,
        excerpt: "Why traditional 60/40 correlations fail during periods of persistent inflation, and the mathematical case for monopolistic pricing power."
    },
    {
        title: "Generational Trust Exemption Scenarios Pre-2027",
        category: "Estate",
        date: "February 15, 2026",
        readTime: "15 MIN READ",
        wordCount: "3,100 WORDS",
        restricted: true,
        excerpt: "Navigating the sunset provisions of the Tax Cuts and Jobs Act (TCJA). Structuring irrevocable trusts before the lifetime exemption halves."
    },
    {
        title: "Quantitative Market Pulse: Algorithmic Liquidity",
        category: "Quantitative",
        date: "February 10, 2026",
        readTime: "10 MIN READ",
        wordCount: "1,650 WORDS",
        restricted: false,
        excerpt: "Decoding high-frequency trading flows to identify asymmetric entry points during flash crashes. A mathematical approach to volatility harvesting.",
        bgImage: "/images/v2/vintage_ledger_book_1772830298015.png" // Using the newly generated image
    },
    {
        title: "The Mathematics of Tail-Risk Hedging",
        category: "Quantitative",
        date: "January 28, 2026",
        readTime: "14 MIN READ",
        wordCount: "2,800 WORDS",
        restricted: true,
        excerpt: "Constructing convexity profiles using deep out-of-the-money VIX calls and S&P puts to guarantee capital preservation during black swan events."
    },
    {
        title: "Structuring Philanthropic Conduits",
        category: "Estate",
        date: "January 14, 2026",
        readTime: "9 MIN READ",
        wordCount: "1,450 WORDS",
        restricted: false,
        excerpt: "The architectural framework for establishing a family foundation that fulfills charitable intent while maximizing generational tax efficiency."
    },
    {
        title: "The Illiquidity Premium in Private Credit",
        category: "Fixed Income",
        date: "January 05, 2026",
        readTime: "12 MIN READ",
        wordCount: "2,050 WORDS",
        restricted: true,
        excerpt: "Analyzing middle-market corporate lending as a definitive alternative to suppressed public market yields. Risk parameters and recovery rate analysis."
    }
];

export default function V2InsightsJournal() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredArticles = ARTICLES.filter(article =>
        activeCategory === "All" || article.category === activeCategory
    );

    return (
        <div className="bg-[#110d06] text-noble-ivory font-serif pt-32 pb-24 selection:bg-noble-gold-500 selection:text-noble-charcoal min-h-screen">

            {/* HERO / MASTHEAD */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20 relative">
                <CinematicReveal delay={0.2}>
                    <div className="border-t-4 border-b-2 border-noble-gold-900/40 py-8 mb-12 flex flex-col md:flex-row justify-between items-center gap-6 relative">
                        {/* Decorative central mark */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#110d06] px-4 text-noble-gold-500">
                            <span className="text-xs">◆</span>
                        </div>

                        <div>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-noble-slate font-sans font-bold">Vol. XII</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-[6rem] text-noble-ivory font-display leading-none tracking-tight">
                            The Noble <span className="italic text-transparent bg-clip-text bg-gradient-gold-foil pr-4">Journal.</span>
                        </h1>
                        <div className="text-right">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-noble-slate font-sans font-bold block">No. 24</span>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 font-sans mt-1 block">March 2026</span>
                        </div>
                    </div>
                </CinematicReveal>

                {/* Sub-masthead metadata */}
                <CinematicReveal delay={0.4}>
                    <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs tracking-widest uppercase font-sans text-noble-slate border-b border-noble-gold-900/30 pb-4 mb-8 text-center md:text-left">
                        <span className="mb-2 md:mb-0">Quarterly Macroeconomic & Structural Analysis</span>
                        <span>Restricted Distribution</span>
                    </div>
                </CinematicReveal>
            </section>

            {/* MAIN CONTENT LAYOUT WITH 3D ISLANDS */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">

                    {/* LEFT SIDEBAR: CATEGORY FILTER (Island Wrapper) */}
                    <div className="col-span-1 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0 perspective-1000">
                        <CinematicReveal delay={0.5}>
                            <motion.div whileHover={{ scale: 1.02 }} className="bg-noble-charcoal/40 backdrop-blur-xl border border-noble-gold-500/30 rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.6)] shadow-inner">
                                <div className="flex items-center gap-3 mb-8 border-b border-noble-gold-900/40 pb-4">
                                    <Filter size={14} className="text-noble-gold-500" />
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-noble-slate font-sans">Thematic Index</span>
                                </div>

                                <ul className="space-y-4 font-sans">
                                    {CATEGORIES.map(cat => (
                                        <li key={cat}>
                                            <button
                                                onClick={() => setActiveCategory(cat)}
                                                className={`text-[11px] uppercase tracking-[0.2em] font-bold w-full text-left transition-all duration-300 py-2 border-l-2 pl-4 ${activeCategory === cat
                                                        ? 'text-noble-gold-400 border-noble-gold-500 bg-noble-gold-900/10'
                                                        : 'text-noble-slate border-transparent hover:text-noble-ivory hover:border-noble-slate/30'
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-12 pt-8 border-t border-noble-gold-900/40">
                                    <div className="bg-[#1a140d]/80 rounded-xl p-4 border border-noble-gold-900/30 shadow-inner">
                                        <Lock size={12} className="text-noble-gold-500 mb-2" />
                                        <span className="block text-[9px] uppercase tracking-[0.2em] text-noble-ivory font-sans mb-1">Premium Access</span>
                                        <p className="text-[10px] text-noble-slate font-sans leading-relaxed">Certain structural analyses are strictly embargoed for active clients.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </CinematicReveal>
                    </div>

                    {/* RIGHT COLUMN: ARTICLE FEED (Island Encapsulation) */}
                    <div className="col-span-1 lg:col-span-3 min-h-[800px] perspective-1000">
                        <AnimatePresence mode="popLayout">
                            {filteredArticles.map((article, idx) => (
                                <motion.div
                                    key={article.title}
                                    layout
                                    initial={{ opacity: 0, y: 20, rotateX: -5 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="mb-8"
                                >
                                    {/* Wrapping the custom HoverRevealArticle in a 3D Island container */}
                                    <div className="group bg-noble-charcoal/30 backdrop-blur-md border border-noble-gold-900/40 rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:border-noble-gold-500/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-500 relative">
                                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-noble-gold-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                                        <div className="p-1 lg:p-2">
                                            {/* Inject background image if available during hovered state in HoverRevealArticle component */}
                                            <HoverRevealArticle
                                                title={article.title}
                                                category={article.category.toUpperCase()}
                                                date={article.date}
                                                previewImage={article.bgImage || "/images/v2/gilded_abstract_texture_v2_1772823845293.png"}
                                            >
                                                {/* Meta Data Row nested inside */}
                                                <div className="flex flex-wrap items-center gap-4 md:gap-8 text-[9px] uppercase tracking-[0.3em] font-sans text-noble-slate font-bold mb-6">
                                                    <span className="flex items-center gap-2">
                                                        <Clock size={12} className="text-noble-gold-500/70" />
                                                        {article.readTime}
                                                    </span>
                                                    <span>{article.wordCount}</span>
                                                    {article.restricted && (
                                                        <span className="flex items-center gap-2 text-red-900/80 bg-red-900/10 border border-red-900/20 px-3 py-1 rounded">
                                                            <Lock size={10} />
                                                            Restricted Access
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-base md:text-lg font-light leading-relaxed text-noble-ivory/90 mb-6 drop-shadow-sm">
                                                    {article.excerpt}
                                                </p>
                                                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] font-bold text-noble-gold-500 bg-noble-gold-900/20 px-4 py-2 border border-noble-gold-900/50 rounded-lg group-hover:bg-noble-gold-600/30 transition-colors">
                                                    Read Analysis <span>→</span>
                                                </div>
                                            </HoverRevealArticle>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* EMPTY STATE */}
                        {filteredArticles.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="border border-noble-gold-900/40 p-16 text-center rounded-2xl bg-[#110d06]/60 backdrop-blur-md shadow-inner py-32"
                            >
                                <span className="text-noble-slate text-sm font-sans tracking-wide">No specialized analysis found for this thematic index.</span>
                            </motion.div>
                        )}

                        <div className="mt-20 pt-10 border-t border-noble-gold-900/30 text-center relative z-20">
                            <button className="border border-noble-gold-500/40 text-noble-gold-500 px-10 py-5 text-[10px] font-bold tracking-[0.3em] uppercase rounded-xl hover:bg-noble-gold-900/30 hover:text-noble-ivory transition-all duration-500 shadow-[0_0_20px_rgba(238,194,61,0.05)] shadow-inner flex items-center gap-3 mx-auto">
                                <Lock size={14} />
                                Unlock Master Archive
                            </button>
                            <p className="text-[10px] mt-4 uppercase tracking-widest text-noble-slate font-sans">Premium Access Required</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
