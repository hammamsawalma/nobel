import CinematicReveal from "@/components/v2/CinematicReveal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FamilyOfficePage() {
    return (
        <div className="bg-transparent text-noble-ivory font-sans pt-32 pb-24 selection:bg-noble-gold-500 selection:text-noble-charcoal min-h-screen">

            {/* Top Navigation Bar */}
            <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-16">
                <Link href="/v2/wealth-strategies" className="inline-flex items-center gap-3 text-noble-slate hover:text-noble-gold-500 transition-colors duration-300 font-serif text-sm tracking-widest uppercase">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Strategies</span>
                </Link>
            </div>

            {/* Header Section */}
            <section className="relative px-6 lg:px-12 max-w-7xl mx-auto mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-8">
                        <CinematicReveal direction="up" duration={1.5}>
                            <div className="flex items-center gap-6 mb-8">
                                <span className="text-transparent bg-clip-text bg-gradient-gold-foil font-display text-2xl lg:text-3xl">III</span>
                                <div className="w-12 h-[1px] bg-noble-gold-500"></div>
                                <span className="text-[9px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold border border-noble-gold-800/40 px-4 py-1">
                                    Generational Stewardship
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-display text-noble-ivory leading-[1.1] mb-8">
                                Private & <br /><span className="italic text-transparent bg-clip-text bg-gradient-gold-foil">Family Office.</span>
                            </h1>
                        </CinematicReveal>
                    </div>

                    <div className="lg:col-span-4 lg:pt-24 border-t lg:border-t-0 lg:border-l border-noble-gold-900/30 pt-8 lg:pl-8">
                        <CinematicReveal delay={0.3}>
                            <p className="text-noble-slate font-serif text-sm tracking-wide leading-loose">
                                Comprehensive architectural oversight for multi-generational wealth. We integrate legal, tax, and intellectual capital into a unified structure designed for permanence.
                            </p>
                        </CinematicReveal>
                    </div>
                </div>
            </section>

            {/* Core Tenets Grid */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32 border-t border-noble-gold-900/30 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    <CinematicReveal delay={0.1}>
                        <div className="border border-noble-gold-900/20 p-8 h-full bg-noble-charcoal/20 hover:bg-noble-gold-900/10 transition-colors duration-700">
                            <h3 className="text-noble-gold-400 font-serif italic text-2xl mb-4">Structural Integrity</h3>
                            <p className="text-noble-slate text-xs font-sans tracking-widest leading-loose">
                                Designing and implementing bespoke trust frameworks and jurisdictional models to shield assets from geopolitical and litigious friction.
                            </p>
                        </div>
                    </CinematicReveal>

                    <CinematicReveal delay={0.2}>
                        <div className="border border-noble-gold-900/20 p-8 h-full bg-noble-charcoal/20 hover:bg-noble-gold-900/10 transition-colors duration-700">
                            <h3 className="text-noble-gold-400 font-serif italic text-2xl mb-4">Tax Optimization</h3>
                            <p className="text-noble-slate text-xs font-sans tracking-widest leading-loose">
                                Engaging proprietary tax abatement strategies and generation-skipping transfer models to maximize net intergenerational outcomes.
                            </p>
                        </div>
                    </CinematicReveal>

                    <CinematicReveal delay={0.3}>
                        <div className="border border-noble-gold-900/20 p-8 h-full bg-noble-charcoal/20 hover:bg-noble-gold-900/10 transition-colors duration-700">
                            <h3 className="text-noble-gold-400 font-serif italic text-2xl mb-4">Philanthropic Legacies</h3>
                            <p className="text-noble-slate text-xs font-sans tracking-widest leading-loose">
                                Architecting dedicated foundations and donor-advised conduits to manifest your core values in perpetuity while realizing vital tax efficiencies.
                            </p>
                        </div>
                    </CinematicReveal>

                </div>
            </section>

            {/* The Quote */}
            <section className="px-6 lg:px-12 max-w-4xl mx-auto text-center mb-32">
                <CinematicReveal>
                    <div className="w-[1px] h-20 bg-noble-gold-900/50 mx-auto mb-12"></div>
                    <h2 className="text-3xl md:text-4xl font-display italic text-noble-ivory leading-relaxed mb-8">
                        "The ultimate luxury is the absolute certainty that what you have built today will endure for a century."
                    </h2>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">
                        Noble Rock Strategy Council
                    </span>
                </CinematicReveal>
            </section>

        </div>
    );
}
