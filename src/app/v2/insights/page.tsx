import CinematicReveal from "@/components/v2/CinematicReveal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function InsightsJournal() {
    return (
        <div className="bg-noble-parchment text-noble-charcoal font-sans selection:bg-noble-espresso selection:text-noble-parchment min-h-screen relative z-10">

            {/* Top Navigation Bar - overriding dark to light for this page */}
            <div className="px-6 lg:px-12 max-w-7xl mx-auto pt-16 pb-8 border-b-2 border-noble-espresso/20 flex flex-col items-center">
                <div className="font-display italic text-6xl lg:text-7xl mb-4 text-noble-espresso tracking-tight">
                    Noble Rock
                </div>
                <div className="text-[10px] lg:text-xs font-bold tracking-[0.4em] uppercase text-noble-espresso/80 border-y border-noble-espresso/30 py-3 px-12 text-center w-full max-w-2xl bg-noble-espresso/5">
                    The Journal & Proprietary Market Commentary
                </div>
                <div className="mt-4 flex w-full justify-between items-center max-w-2xl px-4">
                    <div className="text-[9px] uppercase tracking-widest text-noble-slate font-bold">
                        Vol. XXIV
                    </div>
                    <div className="text-[9px] uppercase tracking-widest text-noble-slate font-bold">
                        Sydney, Australia
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* The Lead Story (Span 8 cols) */}
                    <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-noble-espresso/20 pb-12 lg:pb-0 lg:pr-12">
                        <CinematicReveal>
                            <span className="text-noble-espresso font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block border-l-2 border-noble-espresso pl-3">Macroeconomic Strategy</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] text-noble-charcoal mb-6 font-semibold pt-4">
                                Navigating Yield Compression in a De-globalizing Economy.
                            </h1>
                            <p className="text-noble-slate font-bold text-[10px] uppercase tracking-widest mb-10 pb-4 border-b border-noble-espresso/10">
                                By The Executive Committee &middot; October 14, 2026
                            </p>

                            {/* Monochromatic Image Placeholder */}
                            <div className="w-full aspect-video bg-noble-charcoal mb-10 relative grayscale border border-noble-espresso/20 p-2 shadow-sm">
                                <div className="absolute inset-2 border border-noble-parchment/20 pointer-events-none z-10 mix-blend-overlay"></div>
                                <div className="absolute inset-2 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-10 mix-blend-overlay z-10"></div>
                                <div className="w-full h-full bg-[#111] flex items-center justify-center">
                                    <span className="text-noble-parchment/50 font-serif italic tracking-widest text-xl">Macro-Analysis Visual Asset</span>
                                </div>
                            </div>

                            <div className="prose prose-lg prose-stone max-w-none font-serif text-noble-charcoal/90 leading-loose tracking-wide font-medium">
                                <p className="text-2xl leading-relaxed mb-8">
                                    <span className="float-left text-[6rem] leading-[0.8] pr-4 pt-1 -ml-2 font-display italic text-noble-espresso mix-blend-multiply opacity-90 drop-shadow-sm">A</span>s sovereign debt yields endure structural suppression, the architecting of absolute returns requires a departure from traditional 60/40 correlations. The current geopolitical fracturing demands a localized assessment of supply chains.
                                </p>
                                <p>
                                    Inflation-linked bonds remain the paramount defensive instrument. However, realizing asymmetric upside necessitates hyper-specific exposure to industrial monoliths dominating domestic infrastructure—a clear divergence from pandemic-era tech valuations. Noble Rock is systematically reweighting core allocations to absorb this reality...
                                </p>
                                <button className="mt-12 group inline-flex items-center text-[10px] uppercase font-bold tracking-[0.3em] transition-colors duration-300">
                                    <span className="border-b border-noble-espresso pb-1 group-hover:text-noble-gold-600 group-hover:border-noble-gold-600 transition-colors">Read Full Analysis</span>
                                    <span className="ml-4 w-8 h-[1px] bg-noble-espresso group-hover:bg-noble-gold-600 transition-colors"></span>
                                </button>
                            </div>
                        </CinematicReveal>
                    </div>

                    {/* The Sidebar (Span 4 cols) */}
                    <div className="lg:col-span-4 flex flex-col gap-16">

                        <CinematicReveal delay={0.2}>
                            <h3 className="font-display italic text-3xl text-noble-espresso mb-8 border-b border-noble-espresso pb-4 uppercase tracking-widest">
                                Briefings
                            </h3>

                            <div className="flex flex-col gap-10">
                                {/* Article Summary 1 */}
                                <div className="group cursor-pointer">
                                    <span className="text-noble-slate font-bold uppercase tracking-[0.2em] text-[9px] mb-3 block">Fixed Income</span>
                                    <h4 className="text-2xl font-serif text-noble-charcoal leading-snug mb-4 group-hover:text-noble-gold-700 transition-colors">
                                        The Ascendancy of Corporate Private Credit Markets.
                                    </h4>
                                    <p className="text-sm font-sans text-transparent bg-clip-text bg-gradient-to-br from-noble-charcoal to-noble-slate font-medium leading-relaxed line-clamp-3">
                                        As Tier-1 banks pull back from middle-market lending due to stringent capital requirements, private credit provides distinct yield extraction opportunities for the sophisticated investor...
                                    </p>
                                </div>
                                <hr className="border-noble-espresso/20 border-dotted border-b-2" />

                                {/* Article Summary 2 */}
                                <div className="group cursor-pointer">
                                    <span className="text-noble-slate font-bold uppercase tracking-[0.2em] text-[9px] mb-3 block">Estate Planning</span>
                                    <h4 className="text-2xl font-serif text-noble-charcoal leading-snug mb-4 group-hover:text-noble-gold-700 transition-colors">
                                        Structuring Inter-Generational Trusts Pre-2027.
                                    </h4>
                                    <p className="text-sm font-sans text-transparent bg-clip-text bg-gradient-to-br from-noble-charcoal to-noble-slate font-medium leading-relaxed line-clamp-3">
                                        Anticipated alterations to taxation legislation dictate immediate reviews of family office trust structures to preserve inherited capital pools...
                                    </p>
                                </div>
                            </div>
                        </CinematicReveal>

                        {/* Proprietary Chart Callout */}
                        <CinematicReveal delay={0.4}>
                            <div className="bg-noble-charcoal p-8 lg:p-10 text-noble-parchment relative border border-noble-espresso/50 shadow-2xl">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20 mix-blend-overlay"></div>
                                <h4 className="font-display text-4xl italic mb-8 relative z-10 tracking-wider">Volatility Index</h4>
                                <div className="w-full h-40 border-b border-noble-gold-900/50 flex items-end gap-3 pb-2 relative z-10">
                                    {/* Mock histogram upgraded */}
                                    {[40, 60, 30, 80, 50, 90, 45, 75].map((h, i) => (
                                        <div key={i} className="bg-gradient-to-t from-noble-gold-600 to-noble-gold-400 w-full rounded-[1px] shadow-[0_0_10px_rgba(212,175,55,0.2)]" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                                <p className="text-[9px] uppercase tracking-widest text-noble-gold-400 mt-8 leading-loose relative z-10 font-bold border border-noble-gold-900/40 p-3">
                                    Proprietary tracking indicating heightened defensive positioning requirements across global equities.
                                </p>
                            </div>
                        </CinematicReveal>

                    </div>
                </div>

                <div className="mt-32 flex justify-center border-t-2 border-noble-espresso/30 pt-16">
                    <button className="border border-noble-espresso text-noble-espresso px-16 py-4 text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-noble-espresso hover:text-noble-parchment transition-all duration-700 shadow-md">
                        Explore Compendium Archives
                    </button>
                </div>
            </main>

        </div>
    )
}
