import CinematicReveal from "@/components/v2/CinematicReveal";
import Image from "next/image";

export default function NobleRockV2Home() {
    return (
        <div className="bg-transparent text-noble-ivory font-sans selection:bg-noble-gold-500 selection:text-noble-charcoal">

            {/* SEC 1: Masterpiece Cinematic Hero Section */}
            <section className="relative min-h-[100svh] flex flex-col justify-center items-center px-6 lg:px-12 overflow-hidden bg-noble-charcoal">

                {/* 
                  USER VIDEO INSTRUCTION:
                  To replace this static gold architecture image with a video:
                  1. Find a slow-motion, dark, moody video (e.g. abstract gold particles, dark ink in water, or slow-panning classical architecture).
                  2. Ensure it is MP4 format, 1080p minimum, compressed.
                  3. Place it in /public/videos/v2-hero.mp4
                  4. Uncomment the <video> tag below and delete the <Image> tag.
                */}

                {/* <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen">
                    <source src="/videos/v2-hero.mp4" type="video/mp4" />
                </video> */}

                {/* The AI Generated Architecture Background */}
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
                    <Image
                        src="/images/v2/architectural_gold_lines_1772822688451.png"
                        alt="Wealth Architecture"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Deep Background Vignette */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-noble-obsidian)_100%)] opacity-90" />
                <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" />

                <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center mt-20">
                    <CinematicReveal delay={0.2} direction="up" duration={1.5}>
                        <div className="mb-8 hidden md:block">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-noble-gold-500 border border-noble-gold-700/50 px-8 py-2 bg-noble-charcoal/50 backdrop-blur-sm">
                                Absolute Fiduciary Restraint
                            </span>
                        </div>
                    </CinematicReveal>

                    <CinematicReveal delay={0.5} direction="up" duration={2}>
                        <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] text-noble-ivory font-display leading-[1.05] mb-8 font-normal drop-shadow-2xl">
                            Preserving Legacy. <br />
                            <span className="italic text-transparent bg-clip-text bg-gradient-gold-foil">Defending Capital.</span>
                        </h1>
                    </CinematicReveal>

                    <CinematicReveal delay={0.8} direction="up" duration={1.5}>
                        <p className="text-noble-slate text-sm md:text-xl max-w-2xl mx-auto tracking-wide leading-relaxed font-serif mb-16 drop-shadow-md">
                            Architecting enduring wealth for high-net-worth families and sovereign institutions through mathematically rigorous, absolute return strategies.
                        </p>
                    </CinematicReveal>

                    <CinematicReveal delay={1.1} direction="up" duration={1.5}>
                        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
                            <button className="bg-transparent border-b border-noble-gold-500 text-noble-gold-500 pb-1 text-[10px] lg:text-xs uppercase tracking-[0.3em] hover:text-noble-gold-100 hover:border-noble-gold-100 transition-colors duration-700">
                                Discover Our Heritage
                            </button>
                        </div>
                    </CinematicReveal>
                </div>

                <CinematicReveal delay={2} direction="none" className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                    <div className="text-noble-gold-700/60 uppercase tracking-[0.4em] text-[8px] font-bold mb-4">Descend</div>
                    <div className="w-[1px] h-20 bg-gradient-to-b from-noble-gold-700/40 to-transparent"></div>
                </CinematicReveal>
            </section>

            {/* SEC 2: The Philosophy Grid (With Image) */}
            <section className="py-32 md:py-48 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Image */}
                    <div className="lg:col-span-5 relative h-[600px] w-full group">
                        <CinematicReveal direction="right" className="w-full h-full relative">
                            {/* Gold Foil Border Frame */}
                            <div className="absolute inset-0 border border-noble-gold-700/30 transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-1000"></div>
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src="/images/v2/classic_timepiece_macro_1772822945667.png"
                                    alt="Generational Time & Precision"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] scale-105 group-hover:scale-100"
                                />
                                {/* Overlay tint to match theme */}
                                <div className="absolute inset-0 bg-noble-espresso/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-1000"></div>
                            </div>
                        </CinematicReveal>
                    </div>

                    {/* Right Column: Editorial Text Blocks */}
                    <div className="lg:col-span-7 prose prose-invert prose-lg max-w-none text-noble-slate font-serif font-light leading-loose tracking-wide">
                        <CinematicReveal delay={0.2} direction="left">
                            <h2 className="text-noble-gold-500 font-display text-4xl md:text-5xl lg:text-6xl italic leading-tight mb-12 border-b border-noble-gold-900/30 pb-8 tracking-wide">
                                A paradigm of extreme precision.
                            </h2>
                            <p className="mb-8">
                                <span className="float-left text-7xl font-display text-transparent bg-clip-text bg-gradient-gold-foil leading-none pr-4 pt-2 -ml-2">W</span>e do not chase transient market beta. Our mandate is the absolute protection and calculated expansion of generational capital. Every decision executed within the walls of Noble Rock is underpinned by mathematical reality, distinct informational symmetry, and an uncompromising fiduciary duty.
                            </p>
                            <p>
                                With billions constructed under our architectural oversight, we partner exclusively with Tier-1 global custodians. Your capital remains distinctly yours; segregated securely into named accounts, transparently visible, and rigorously defended against geopolitical fracture and monetary debasement.
                            </p>
                        </CinematicReveal>
                    </div>

                </div>
            </section>

            {/* SEC 3: The Three Pillars (Masterpiece Dark Marble & Gold Styling) */}
            <section className="py-32 relative border-y border-noble-gold-900/20">
                {/* Background Texture for Pillars - Dark Marble */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/v2/marble_gold_veins_1772822929304.png"
                        alt="Dark Marble Background"
                        fill
                        className="object-cover opacity-20 mix-blend-multiply"
                    />
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-obsidian-depth opacity-80" />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <CinematicReveal direction="up" className="mb-20 text-center">
                        <h3 className="text-noble-ivory font-display text-3xl md:text-5xl tracking-wide italic">
                            Core Disciplines
                        </h3>
                        <div className="w-16 h-[1px] bg-noble-gold-700 mx-auto mt-8"></div>
                    </CinematicReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Pillar 1 */}
                        <div className="border border-noble-gold-900/40 p-12 lg:p-16 hover:bg-noble-leather/50 transition-colors duration-1000 group backdrop-blur-sm bg-noble-charcoal/60 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold-foil transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                            <CinematicReveal delay={0.1}>
                                <div className="text-transparent bg-clip-text bg-gradient-gold-foil font-display text-5xl mb-8 opacity-70 group-hover:opacity-100 transition-opacity">I.</div>
                                <h4 className="text-xl md:text-2xl font-display text-noble-ivory tracking-wider mb-6">Fixed-Income <br />Portfolios</h4>
                                <p className="text-xs text-noble-slate tracking-wide leading-relaxed font-sans">
                                    Predictable, defensive debt instruments focusing strictly on Investment Grade and Inflation-Linked Bonds to anchor your treasury.
                                </p>
                            </CinematicReveal>
                        </div>

                        {/* Pillar 2 */}
                        <div className="border border-noble-gold-900/40 p-12 lg:p-16 hover:bg-noble-leather/50 transition-colors duration-1000 group backdrop-blur-sm bg-noble-charcoal/60 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold-foil transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                            <CinematicReveal delay={0.3}>
                                <div className="text-transparent bg-clip-text bg-gradient-gold-foil font-display text-5xl mb-8 opacity-70 group-hover:opacity-100 transition-opacity">II.</div>
                                <h4 className="text-xl md:text-2xl font-display text-noble-ivory tracking-wider mb-6">Assymetric <br />Equities</h4>
                                <p className="text-xs text-noble-slate tracking-wide leading-relaxed font-sans">
                                    Targeted global market exposure designed for calculated upside capture while employing structural hedging against tail-risk.
                                </p>
                            </CinematicReveal>
                        </div>

                        {/* Pillar 3 */}
                        <div className="border border-noble-gold-900/40 p-12 lg:p-16 hover:bg-noble-leather/50 transition-colors duration-1000 group backdrop-blur-sm bg-noble-charcoal/60 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold-foil transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                            <CinematicReveal delay={0.5}>
                                <div className="text-transparent bg-clip-text bg-gradient-gold-foil font-display text-5xl mb-8 opacity-70 group-hover:opacity-100 transition-opacity">III.</div>
                                <h4 className="text-xl md:text-2xl font-display text-noble-ivory tracking-wider mb-6">Generational <br />Architecture</h4>
                                <p className="text-xs text-noble-slate tracking-wide leading-relaxed font-sans">
                                    Strategic succession structures, philanthropic trusts, and sophisticated superannuation oversight to ensure legacy endurance.
                                </p>
                            </CinematicReveal>
                        </div>

                    </div>
                </div>
            </section>

            {/* SEC 4: Masterpiece Discrete CTA Section */}
            <section className="py-40 px-6 lg:px-12 text-center relative overflow-hidden bg-noble-charcoal flex flex-col items-center">

                {/* Deep background vignette */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-noble-obsidian)_100%)] opacity-80" />
                <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" />

                {/* The Fountain Pen Visual Element */}
                <CinematicReveal delay={0.2} direction="up" className="relative z-10 w-48 h-64 md:w-64 md:h-80 mb-12">
                    <div className="absolute inset-0 border border-noble-gold-700/30 transform -translate-x-2 -translate-y-2"></div>
                    <div className="relative w-full h-full overflow-hidden shadow-2xl">
                        <Image
                            src="/images/v2/fountain_pen_signature_1772822914918.png"
                            alt="Fiduciary Authority"
                            fill
                            className="object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-gold-foil mix-blend-multiply opacity-20"></div>
                    </div>
                </CinematicReveal>

                <CinematicReveal delay={0.5} className="relative z-10 max-w-3xl mx-auto px-8">
                    <h2 className="text-3xl md:text-5xl font-display italic text-noble-ivory leading-tight mb-8">
                        The privilege of absolute certainty.
                    </h2>
                    <p className="text-noble-slate text-sm uppercase tracking-[0.2em] mb-12 font-bold">
                        Accepting sophisticated mandates by appointment alone.
                    </p>
                    <button className="border border-noble-gold-500 text-noble-gold-500 px-10 py-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gradient-gold-foil hover:text-noble-charcoal transition-all duration-[800ms] shadow-[0_0_20px_rgba(212,175,55,0)] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                        Request a Private Audience
                    </button>
                </CinematicReveal>
            </section>

        </div>
    )
}
