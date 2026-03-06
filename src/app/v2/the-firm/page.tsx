import CinematicReveal from "@/components/v2/CinematicReveal";
import Image from "next/image";

export default function TheFirmHeritagePage() {
    return (
        <div className="bg-transparent text-noble-ivory font-sans pt-32 pb-24 selection:bg-noble-gold-500 selection:text-noble-charcoal">

            {/* HERITAGE HERO SECTION */}
            <section className="relative px-6 lg:px-12 max-w-7xl mx-auto mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">

                    <div className="lg:col-span-8 relative z-10">
                        <CinematicReveal delay={0.2}>
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-12 h-[1px] bg-noble-gold-500"></div>
                                <span className="text-[9px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold">The Firm</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-[6rem] text-noble-ivory font-display leading-[1.05] mb-8 drop-shadow-lg">
                                Architectural <br />
                                <span className="italic text-transparent bg-clip-text bg-gradient-gold-foil">Fiduciary Duty.</span>
                            </h1>
                        </CinematicReveal>
                    </div>

                    <div className="lg:col-span-4 relative z-10 pb-4">
                        <CinematicReveal delay={0.5} direction="left">
                            <p className="text-noble-slate text-sm font-serif leading-loose tracking-wide border-l border-noble-gold-900/50 pl-6">
                                Founded on the principle that true wealth requires absolute, unyielding defense mechanisms. We are not a traditional advisory; we are structural engineers for generational capital.
                            </p>
                        </CinematicReveal>
                    </div>

                </div>
            </section>

            {/* EDITORIAL IMAGE SPREAD */}
            <section className="w-full relative h-[60vh] md:h-[80vh] mb-32 group overflow-hidden">
                <CinematicReveal duration={2} className="w-full h-full relative" direction="none">
                    {/* The Texture Vignette Overlay */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-noble-charcoal via-transparent to-transparent"></div>
                    <div className="absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-[0.05] mix-blend-overlay"></div>

                    <Image
                        src="/images/v2/heritage_library_interior_v2_1772823832456.png"
                        alt="The Noble Rock Private Library"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[3000ms] scale-105 group-hover:scale-100"
                        priority
                    />
                    <div className="absolute inset-0 bg-noble-espresso/30 mix-blend-multiply group-hover:bg-transparent transition-colors duration-[2000ms] z-10"></div>
                </CinematicReveal>
            </section>

            {/* THE MANIFESTO GRID */}
            <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32 border-t border-noble-gold-900/30 pt-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">

                    <CinematicReveal>
                        <h2 className="text-3xl md:text-4xl font-display italic text-noble-gold-400 mb-8 leading-tight">
                            The Institutional <br />Advantage
                        </h2>
                        <div className="prose prose-invert prose-sm text-noble-slate font-serif font-light leading-loose tracking-wide max-w-none">
                            <p>
                                Private wealth has historically been serviced by commoditized retail structures masquerading as bespoke solutions. Noble Rock was built to sever this paradigm.
                            </p>
                            <p className="mt-6">
                                By leveraging direct institutional custody relationships and utilizing distinct mandate routing architectures, we strip away the bloat of traditional private banking. What remains is a frictionless conduit to wholesale market execution, guarded by a fiduciary framework that aligns our success purely with your absolute return.
                            </p>
                        </div>
                    </CinematicReveal>

                    <CinematicReveal delay={0.3}>
                        <h2 className="text-3xl md:text-4xl font-display italic text-noble-gold-400 mb-8 leading-tight">
                            Mathematical <br />Objectivity
                        </h2>
                        <div className="prose prose-invert prose-sm text-noble-slate font-serif font-light leading-loose tracking-wide max-w-none">
                            <p>
                                We operate free from the structural conflicts of interest that plague hybrid advisory firms. We manufacture no proprietary products, allowing us to exact a singular focus: scouring the global macro-environment to isolate and construct the highest-conviction portfolios available.
                            </p>
                            <p className="mt-6">
                                Emotion is engineered completely out of the equation. Decisions are driven entirely by quantitative rigor, risk premia analysis, and asymmetric upside potential.
                            </p>
                        </div>
                    </CinematicReveal>

                </div>
            </section>

            {/* THE COMMITMENT - TEXTURE BLOCK */}
            <section className="relative py-40 border-y border-noble-gold-900/40 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/v2/gilded_abstract_texture_v2_1772823845293.png"
                        alt="Abstract Gilded Texture"
                        fill
                        className="object-cover opacity-30 mix-blend-color-dodge grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-obsidian-depth opacity-80" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
                    <CinematicReveal direction="up" delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-display italic text-noble-ivory mb-12 leading-tight">
                            "A legacy is not merely inherited; it is architected, defended, and compounded."
                        </h2>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-[1px] h-16 bg-noble-gold-600 mb-4"></div>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 font-bold border border-noble-gold-800/60 px-6 py-2">
                                The Private Mandate
                            </span>
                        </div>
                    </CinematicReveal>
                </div>
            </section>

        </div>
    );
}
