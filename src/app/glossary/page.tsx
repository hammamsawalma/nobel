"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Info, ChevronUp } from 'lucide-react';
import V11Header from "@/components/v1/Header";
import V11Footer from "@/components/v1/Footer";

// Premium Placeholder Financial Terms
const glossaryData = [
    {
        letter: "A",
        terms: [
            { term: "Alpha", definition: "A measure of the active return on an investment, the performance of that investment compared with a suitable market index. An alpha of 1.0 means the investment outperformed the benchmark index by 1%." },
            { term: "Asset Allocation", definition: "An investment strategy that aims to balance risk and reward by apportioning a portfolio's assets according to an individual's goals, risk tolerance, and investment horizon." },
        ]
    },
    {
        letter: "B",
        terms: [
            { term: "Beta", definition: "A measure of the volatility, or systematic risk, of a security or a portfolio in comparison to the market as a whole. A beta of 1 indicates that the security's price will move with the market." },
            { term: "Blue-Chip", definition: "A nationally recognized, well-established, and financially sound company. Blue chips generally sell high-quality, widely accepted products and services." },
            { term: "Bond Yield", definition: "The amount of return an investor realizes on a bond. The current yield is a function of the bond's price and its coupon or interest payment." }
        ]
    },
    {
        letter: "C",
        terms: [
            { term: "Capital Gains", definition: "An increase in a capital asset's value. It is considered to be realized when you sell the asset. A capital gain may be short-term (one year or less) or long-term (more than one year)." },
            { term: "Corporate Hybrid Bonds", definition: "A type of security that has both equity and debt characteristics. They generally offer a higher yield in exchange for being subordinated in the capital structure." }
        ]
    },
    {
        letter: "D",
        terms: [
            { term: "Derivatives", definition: "Financial securities with a value that is reliant upon or derived from, an underlying asset or group of assets. The derivative itself is a contract between two or more parties." },
            { term: "Dividend Yield", definition: "A financial ratio that indicates how much a company pays out in dividends each year relative to its stock price." }
        ]
    },
    {
        letter: "E",
        terms: [
            { term: "Equities", definition: "Shares representing ownership interest in a corporation. If the company dissolves, equity owners are the last in line to receive any of the remaining assets." }
        ]
    },
    {
        letter: "F",
        terms: [
            { term: "Fiduciary", definition: "A person or organization that acts on behalf of another person or persons, putting their clients' interest ahead of their own, with a duty to preserve good faith and trust." },
            { term: "Fixed Income", definition: "A type of investment in which real return rates or periodic income is received at regular intervals and at reasonably predictable levels." }
        ]
    },
    {
        letter: "I",
        terms: [
            { term: "Index Fund", definition: "A type of mutual fund or exchange-traded fund (ETF) with a portfolio constructed to match or track the components of a financial market index." },
            { term: "Inflation Risk", definition: "The risk that the general rise in prices of goods and services will reduce the purchasing power of your investment returns." }
        ]
    },
    {
        letter: "L",
        terms: [
            { term: "Liquidity", definition: "The degree to which an asset or security can be quickly bought or sold in the market without affecting the asset's price." }
        ]
    },
    {
        letter: "M",
        terms: [
            { term: "Monopolistic Competition", definition: "A market structure in which many firms sell products that are similar but not identical. In wealth management, identifying firms with monopolistic tendencies often yields superior long-term returns." }
        ]
    },
    {
        letter: "P",
        terms: [
            { term: "Portfolio Sourcing", definition: "The methodical process of identifying, analyzing, and selecting appropriate investment vehicles to populate a client's wealth architecture." }
        ]
    },
    {
        letter: "R",
        terms: [
            { term: "Risk Tolerance", definition: "The degree of variability in investment returns that an investor is willing to withstand. It is a critical component in dictating portfolio architecture." }
        ]
    },
    {
        letter: "S",
        terms: [
            { term: "Sovereign Debt", definition: "Bonds issued by a national government in a foreign currency, in order to finance the issuing country's growth and development." },
            { term: "Superannuation (SMSF)", definition: "In Australia, a Self-Managed Super Fund (SMSF) is a trust structure that provides benefits to its members upon retirement, managed by the members themselves." }
        ]
    },
    {
        letter: "Y",
        terms: [
            { term: "Yield Curve", definition: "A line that plots yields (interest rates) of bonds having equal credit quality but differing maturity dates. It is used as a benchmark for other debt in the market." }
        ]
    }
];

// All alphabet letters for the navigation
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryPage() {
    const snapSpring = { type: "spring", stiffness: 300, damping: 20, mass: 0.8 };
    const [searchQuery, setSearchQuery] = useState("");
    const [scrolled, setScrolled] = useState(false);

    // References for smooth scrolling
    const letterRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToLetter = (letter: string) => {
        const element = letterRefs.current[letter];
        if (element) {
            const yOffset = -140; // Offset for sticky header and nav
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Filter data based on search
    const filteredData = glossaryData.map(group => {
        const filteredTerms = group.terms.filter(item =>
            item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.definition.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...group, terms: filteredTerms };
    }).filter(group => group.terms.length > 0);

    return (
        <div className="bg-gray-50 text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white min-h-screen">
            <V11Header />

            {/* HERO */}
            <section className="bg-[#0A1A3A] pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-12 relative overflow-hidden border-b-4 border-blue-600">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/40 to-transparent"></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={snapSpring as any} className="mb-4">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 tracking-[0.2em] font-bold text-[10px] md:text-sm uppercase px-5 py-2 rounded-full inline-block">
                            KNOWLEDGE BASE
                        </div>
                    </motion.div>
                    <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.1 } as any} className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
                        The Lexicon of Wealth.
                    </motion.h1>
                    <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.2 } as any} className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Master the terminology of high-end finance. A definitive glossary documenting the concepts, instruments, and structures utilized by Nobel Wealth.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.3 } as any} className="mt-10 max-w-xl relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20 transition-all font-medium"
                            placeholder="Search financial terms..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </motion.div>
                </div>
            </section>

            {/* STICKY A-Z NAVIGATION */}
            <div className="sticky top-20 md:top-[85px] z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="max-w-5xl mx-auto px-6 py-4 overflow-x-auto hide-scrollbar">
                    <div className="flex items-center gap-1 md:gap-2 min-w-max">
                        {ALPHABET.map((letter) => {
                            const hasTerms = glossaryData.some(g => g.letter === letter);
                            return (
                                <button
                                    key={letter}
                                    onClick={() => hasTerms && scrollToLetter(letter)}
                                    disabled={!hasTerms}
                                    className={`w-8 h-8 md:w-10 md:h-10 rounded-lg font-bold text-sm md:text-base flex items-center justify-center transition-all
                                        ${hasTerms
                                            ? 'text-[#0A1A3A] hover:bg-blue-50 hover:text-blue-600 cursor-pointer'
                                            : 'text-gray-300 cursor-not-allowed'
                                        }`}
                                >
                                    {letter}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* GLOSSARY CONTENT */}
            <section className="py-16 md:py-24 px-6 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    {filteredData.length > 0 ? (
                        <div className="space-y-16 md:space-y-24">
                            {filteredData.map((group, index) => (
                                <div
                                    key={group.letter}
                                    ref={(el) => { letterRefs.current[group.letter] = el; }}
                                    className="scroll-mt-[150px]"
                                >
                                    <div className="flex items-baseline gap-6 mb-8 border-b-2 border-gray-100 pb-4">
                                        <h2 className="text-5xl md:text-7xl font-black text-[#0A1A3A] select-none">{group.letter}</h2>
                                        <div className="h-[2px] w-full bg-gray-100 mt-auto mb-2 hidden md:block"></div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                        {group.terms.map((item, i) => (
                                            <div key={i} className="group">
                                                <h3 className="text-xl md:text-2xl font-black text-[#0A1A3A] mb-3 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                                                    {item.term}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed font-medium">
                                                    {item.definition}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-[2rem] border border-gray-100 shadow-sm">
                            <Info className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No terms found</h3>
                            <p className="text-gray-500">We couldn't find any financial terms matching "{searchQuery}".</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="mt-6 text-blue-600 font-bold hover:text-blue-800"
                            >
                                Clear search
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Scroll to top button */}
            <AnimatePresence>
                {scrolled && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={scrollToTop}
                        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-[#0A1A3A] hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl transition-colors z-50 flex items-center justify-center"
                    >
                        <ChevronUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>

            <V11Footer />
        </div>
    );
}
