import CinematicReveal from "@/components/v2/CinematicReveal";
import V2DataChart from "@/components/v2/V2DataChart";
import Link from "next/link";

export default function WealthStrategiesOverview() {
    return (
        <div className="bg-transparent text-noble-ivory font-sans pt-32 pb-24 selection:bg-noble-gold-500 selection:text-noble-charcoal">

            {/* Header Section */}
            <section className="relative px-6 lg:px-12 max-w-7xl mx-auto mb-20 border-b border-noble-gold-900/30 pb-20">
                <CinematicReveal direction="up" duration={1.5}>
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-12 h-[1px] bg-noble-gold-500"></div>
                        <span className="text-[9px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold border border-noble-gold-800/40 px-4 py-1">
                            Wealth Architecture
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display text-noble-ivory leading-tight font-light max-w-4xl mb-8">
                        Constructing the <br /><span className="italic text-transparent bg-clip-text bg-gradient-gold-foil">Generational Portfolio.</span>
                    </h1>
                    <p className="text-noble-slate font-serif text-sm md:text-[15px] max-w-2xl tracking-wide leading-loose">
                        A bespoke, intellectually rigorous framework combining mathematical defense with targeted global yield execution. Institutional capabilities tailored exclusively for the private client.
                    </p>
                </CinematicReveal>
            </section>

            {/* The Modules List (Minimalist Row-Based Layout, NO CARDS) */}
            <section className="mb-40 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto flex flex-col border-t border-noble-gold-900/30">

                    {/* Module 1 */}
                    <div className="border-b border-noble-gold-900/30 group hover:bg-noble-gold-900/5 transition-all duration-700">
                        <CinematicReveal delay={0.1}>
                            <Link href="/v2/wealth-strategies/fixed-income" className="flex flex-col md:flex-row justify-between md:items-center py-16 px-4 lg:px-8 gap-8">
                                <div className="flex-1 flex gap-8 lg:gap-16">
                                    <div className="text-transparent bg-clip-text bg-gradient-gold-foil font-display text-4xl md:text-5xl opacity-40 group-hover:opacity-100 transition-opacity">
                                        I
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl md:text-4xl font-display text-noble-ivory mb-6 tracking-wider group-hover:text-noble-parchment transition-colors duration-500">
                                            Fixed-Income Portfolios
                                        </h2>
                                        <p className="text-noble-slate font-sans text-xs tracking-widest leading-loose max-w-2xl border-l border-noble-gold-900/50 pl-6">
                                            The defensive cornerstone. Allocation to AAA-rated corporate, sovereign, and inflation-linked debt instruments to guarantee strict capital preservation and calculable yields.
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-shrink-0 items-center justify-center w-12 h-12 border border-noble-gold-800/50 text-noble-gold-500 group-hover:bg-noble-gold-900/30 transition-all duration-700 rounded-sm">
                                    <span className="font-serif italic text-lg">+</span>
                                </div>
                            </Link>
                        </CinematicReveal>
                    </div>

                    {/* Module 2 */}
                    <div className="border-b border-noble-gold-900/30 group hover:bg-noble-gold-900/5 transition-all duration-700">
                        <CinematicReveal delay={0.2}>
                            <Link href="/v2/wealth-strategies/equities" className="flex flex-col md:flex-row justify-between md:items-center py-16 px-4 lg:px-8 gap-8">
                                <div className="flex-1 flex gap-8 lg:gap-16">
                                    <div className="text-transparent bg-clip-text bg-gradient-gold-foil font-display text-4xl md:text-5xl opacity-40 group-hover:opacity-100 transition-opacity">
                                        II
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl md:text-4xl font-display text-noble-ivory mb-6 tracking-wider group-hover:text-noble-parchment transition-colors duration-500">
                                            Strategic Equities
                                        </h2>
                                        <p className="text-noble-slate font-sans text-xs tracking-widest leading-loose max-w-2xl border-l border-noble-gold-900/50 pl-6">
                                            Calculated upside capture. Directed exposure to global mega-cap blue-chip equities with systematic structural hedges engineered to blunt macroeconomic volatility.
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-shrink-0 items-center justify-center w-12 h-12 border border-noble-gold-800/50 text-noble-gold-500 group-hover:bg-noble-gold-900/30 transition-all duration-700 rounded-sm">
                                    <span className="font-serif italic text-lg">+</span>
                                </div>
                            </Link>
                        </CinematicReveal>
                    </div>

                    {/* Module 3 */}
                    <div className="border-b border-noble-gold-900/30 group hover:bg-noble-gold-900/5 transition-all duration-700">
                        <CinematicReveal delay={0.3}>
                            <Link href="/v2/wealth-strategies/family-office" className="flex flex-col md:flex-row justify-between md:items-center py-16 px-4 lg:px-8 gap-8">
                                <div className="flex-1 flex gap-8 lg:gap-16">
                                    <div className="text-transparent bg-clip-text bg-gradient-gold-foil font-display text-4xl md:text-5xl opacity-40 group-hover:opacity-100 transition-opacity">
                                        III
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl md:text-4xl font-display text-noble-ivory mb-6 tracking-wider group-hover:text-noble-parchment transition-colors duration-500">
                                            Private & Family Office
                                        </h2>
                                        <p className="text-noble-slate font-sans text-xs tracking-widest leading-loose max-w-2xl border-l border-noble-gold-900/50 pl-6">
                                            Exhaustive structural oversight for complex entities. encompassing tax minimization frameworks, inter-generational wealth transfer, and philanthropic foundation management.
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-shrink-0 items-center justify-center w-12 h-12 border border-noble-gold-800/50 text-noble-gold-500 group-hover:bg-noble-gold-900/30 transition-all duration-700 rounded-sm">
                                    <span className="font-serif italic text-lg">+</span>
                                </div>
                            </Link>
                        </CinematicReveal>
                    </div>

                </div>
            </section>

            {/* Asset Allocation Visual (Dark Mode Chart Component integration placeholder) */}
            <section className="mb-32 px-6 lg:px-12 max-w-7xl mx-auto border border-noble-gold-900/30 p-8 lg:p-16 bg-noble-charcoal/50 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-noble-gold-900/10 to-transparent pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-1000"></div>
                <div className="relative z-10">
                    <CinematicReveal direction="up">
                        <div className="text-center mb-16">
                            <h3 className="text-noble-ivory font-display text-3xl md:text-5xl tracking-wide italic mb-4">
                                Transparent Exposure
                            </h3>
                            <p className="text-noble-slate text-xs uppercase tracking-[0.3em]">
                                Institutional Capital Allocation Modeling
                            </p>
                        </div>
                        <V2DataChart />
                    </CinematicReveal>
                </div>
            </section>

        </div>
    );
}
