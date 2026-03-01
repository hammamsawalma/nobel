"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

// Custom V13 Header (Gold/Violet Luxury Parallax)
const V13Header = () => {
    const { scrollY } = useScroll();
    const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
    const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(16px)']);

    return (
        <motion.header
            style={{ backgroundColor: `rgba(26, 11, 46, ${bgOpacity.get()})`, backdropFilter: backdropBlur }}
            className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center text-[#FCD34D] transition-all duration-300"
        >
            <div className="font-serif text-3xl tracking-wide italic">
                Nobel <span className="text-white not-italic font-sans text-xl ml-2 tracking-[0.2em] font-light">| WESTERN</span>
            </div>
            <nav className="hidden md:flex gap-12 text-sm font-medium tracking-widest uppercase">
                <Link href="#" className="text-white hover:text-[#FCD34D] transition-colors">Yield Horizon</Link>
                <Link href="#" className="text-white hover:text-[#FCD34D] transition-colors">Tangible Assets</Link>
                <Link href="#" className="text-white hover:text-[#FCD34D] transition-colors">Private Advisory</Link>
            </nav>
            <button className="bg-transparent text-[#FCD34D] border border-[#FCD34D] hover:bg-[#FCD34D] hover:text-[#1A0B2E] px-8 py-2 font-medium tracking-[0.1em] text-sm transition-colors rounded-full shadow-[0_0_15px_rgba(252,211,77,0.3)]">
                Inquire
            </button>
        </motion.header>
    );
};

// Custom V13 Footer
const V13Footer = () => (
    <footer className="bg-[#10071C] text-[#A78BFA] border-t border-[#4C1D95] py-24 px-8 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
                <div className="font-serif italic text-4xl text-[#FCD34D] mb-6">Nobel.</div>
                <p className="max-w-sm text-sm leading-loose mb-8 text-[#DDD6FE]">
                    Guiding wholesale wealth through the shifting landscapes of global yield. Absolute discretion. Total alignment.
                </p>
                <p className="text-xs text-[#7C3AED]">© 2026 Nobel Private Advisory.</p>
            </div>
            <div>
                <h4 className="text-white font-medium mb-6 tracking-widest text-xs uppercase">Portfolio Navigation</h4>
                <ul className="space-y-3 text-sm">
                    <li><Link href="/" className="hover:text-[#FCD34D] transition-colors">Central Directory</Link></li>
                    <li><Link href="/about" className="hover:text-[#FCD34D] transition-colors">Our Ethos</Link></li>
                    <li><Link href="/knowledge-hub" className="hover:text-[#FCD34D] transition-colors">Market Intelligence</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-medium mb-6 tracking-widest text-xs uppercase">Governance</h4>
                <ul className="space-y-3 text-sm">
                    <li>ASIC Regulated Entity</li>
                    <li>Wholesale Certificates Only</li>
                    <li><Link href="#" className="hover:text-[#FCD34D] transition-colors">Privacy Framework</Link></li>
                </ul>
            </div>
        </div>
    </footer>
);

export default function Variant13WesternHorizon() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Parallax Values
    const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
    const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div ref={containerRef} className="bg-[#1A0B2E] text-[#F3E8FF] font-sans selection:bg-[#FCD34D] selection:text-[#1A0B2E] min-h-screen">
            <V13Header />

            {/* SECTION 1: Video Hero Parallax */}
            <section className="relative h-[120vh] flex items-center justify-center overflow-hidden">
                {/* Background Parallax Video */}
                <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full z-0">
                    <video
                        autoPlay loop muted playsInline
                        className="w-full h-full object-cover filter contrast-125 brightness-75 hue-rotate-15"
                    >
                        <source src="/vid/perth-skyline-from-swan-river-australia-cityscape-with-modern-buildings-and-cl-SBV-353612070-preview.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B2E]/40 via-transparent to-[#1A0B2E]"></div>
                </motion.div>

                {/* Floating elements */}
                <motion.div style={{ y: y2 }} className="absolute top-1/4 right-[10%] w-64 h-64 mix-blend-screen opacity-50 blur-[2px] z-10 hidden lg:block">
                    <Image src="/images/v13_western_horizon_5.png" alt="Data" fill className="object-cover rounded-full" />
                </motion.div>

                {/* Foreground Content */}
                <div className="relative z-20 text-center max-w-5xl mx-auto px-6 mt-[-20vh]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-8xl xl:text-[10rem] font-serif italic text-transparent bg-clip-text bg-gradient-to-br from-[#FDE68A] via-[#D97706] to-[#78350F] leading-none mb-6 drop-shadow-2xl">
                            Horizons.
                        </h1>
                        <p className="text-xl md:text-3xl font-light tracking-wide text-[#E9D5FF] max-w-2xl mx-auto">
                            Expanding wealth through layered capital generation and unshakeable structural assets.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div style={{ opacity: opacityFade }} className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-20">
                    <span className="text-[#FCD34D] text-xs uppercase tracking-[0.3em]">Descend</span>
                    <div className="w-px h-24 bg-gradient-to-b from-[#FCD34D] to-transparent"></div>
                </motion.div>
            </section>

            {/* SECTION 2: The Horizon Philosophy (Image Grid Parallax) */}
            <section className="py-32 relative z-30 bg-[#1A0B2E]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-5xl font-serif text-[#FCD34D] mb-8">Layered Preservation</h2>
                            <p className="text-lg text-[#C4B5FD] leading-relaxed mb-8 font-light">
                                True wealth requires depth. We construct portfolios using multi-tiered parallax strategies—ensuring that localized volatility is absorbed while long-term trajectories are strictly maintained.
                            </p>
                            <div className="w-16 h-px bg-[#FCD34D]"></div>
                        </motion.div>

                        {/* Image 2 Parallax Window */}
                        <motion.div style={{ y: y3 }} className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(124,58,237,0.3)]">
                            <Image src="/images/v13_western_horizon_2.png" alt="Layered Capital" fill className="object-cover" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-[#FCD34D]/30 rounded-2xl"></div>
                        </motion.div>
                    </div>

                    {/* Sub Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { img: "v13_western_horizon_4.png", title: "Tangible Weight", desc: "Gold and physical commodity backed securities." },
                            { img: "v13_western_horizon_6.png", title: "Liquid Flow", desc: "Accessing deep pools of institutional liquidity." },
                            { img: "v13_western_horizon_7.png", title: "Transparent Edifice", desc: "Clear line-of-sight to the underlying assets." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className="group relative h-[400px] rounded-xl overflow-hidden"
                            >
                                <Image src={`/images/${item.img}`} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-[#1A0B2E]/60 to-transparent"></div>
                                <div className="absolute bottom-0 p-8 w-full border-t border-[#FCD34D]/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-serif text-[#FCD34D] mb-2">{item.title}</h3>
                                    <p className="text-[#A78BFA] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECTION 3: The Advisor (Horizontal Parallax Scroll if possible, or simple overlap) */}
            <section className="py-0 relative h-screen flex items-center overflow-hidden bg-[#2E1065]">
                <motion.div style={{ y: y2 }} className="absolute inset-0 opacity-40">
                    <Image src="/images/v13_western_horizon_1.png" alt="City Sunset" fill className="object-cover" />
                </motion.div>

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative aspect-[3/4] rounded-3xl overflow-hidden border border-[#A78BFA] shadow-[0_0_80px_rgba(91,33,182,1)]">
                        <Image src="/images/v13_western_horizon_8.png" alt="Advisor" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] directly to-transparent opacity-80"></div>
                        <div className="absolute bottom-8 left-8">
                            <div className="text-[#FCD34D] text-sm tracking-[0.2em] font-medium mb-1">FIDUCIARY STANDARD</div>
                            <div className="text-white text-3xl font-serif">A. Kensington</div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-1 lg:order-2 space-y-8"
                    >
                        <h2 className="text-5xl lg:text-7xl font-serif text-[#FCD34D] leading-tight">
                            Guided <br /><span className="italic text-white">Ascension.</span>
                        </h2>
                        <p className="text-xl text-[#C4B5FD] font-light leading-relaxed">
                            Our private advisory node isn't algorithms and automated rebalancing. It is highly tailored, human-led asset architecture utilizing institutional tools.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 4: Data Core */}
            <section className="py-32 bg-[#1A0B2E] relative border-y border-[#4C1D95]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, type: "spring" }}
                        className="relative w-full max-w-2xl aspect-square mb-16"
                    >
                        <Image src="/images/v13_western_horizon_9.png" alt="Data Core Parallax" fill className="object-contain" />
                        {/* Decorative rings */}
                        <div className="absolute inset-0 rounded-full border border-[#7C3AED]/30 animate-[spin_60s_linear_infinite]"></div>
                        <div className="absolute inset-8 rounded-full border border-[#FCD34D]/20 animate-[spin_40s_linear_infinite_reverse]"></div>
                    </motion.div>

                    <h2 className="text-4xl font-serif text-white mb-6">The Algorithmic Core</h2>
                    <p className="text-lg text-[#A78BFA] max-w-2xl font-light">
                        Beneath the luxury of our service lies a heart of pure processing power. We model yield potentials across 14,000 distinct financial instruments per second to find the optimal layer for your capital.
                    </p>

                </div>
            </section>

            {/* SECTION 5: Contact / The Desk */}
            <section className="relative min-h-[80vh] flex items-center bg-[#0F0518]">
                {/* Background Image 3 */}
                <div className="absolute inset-0 w-full lg:w-1/2 opacity-30 lg:opacity-100">
                    <Image src="/images/v13_western_horizon_3.png" alt="Office Desk" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1A0B2E]/50 to-[#1A0B2E]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex justify-end">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-5/12 bg-[#2E1065]/80 backdrop-blur-xl p-10 rounded-2xl border border-[#7C3AED] shadow-[0_0_40px_rgba(91,33,182,0.4)]"
                    >
                        <h3 className="text-3xl font-serif text-[#FCD34D] mb-4">Request Audience</h3>
                        <p className="text-[#C4B5FD] mb-8 font-light text-sm">
                            We engage exclusively with sophisticated and wholesale investors. Detail your core parameters to initiate a consultation.
                        </p>

                        <form className="space-y-6">
                            <div>
                                <input type="text" placeholder="Principal Name" className="w-full bg-[#1A0B2E] border border-[#4C1D95] text-[#F3E8FF] px-4 py-3 rounded-md focus:outline-none focus:border-[#FCD34D] transition-colors font-light" />
                            </div>
                            <div>
                                <input type="email" placeholder="Direct Communication Ch." className="w-full bg-[#1A0B2E] border border-[#4C1D95] text-[#F3E8FF] px-4 py-3 rounded-md focus:outline-none focus:border-[#FCD34D] transition-colors font-light" />
                            </div>
                            <div>
                                <select className="w-full bg-[#1A0B2E] border border-[#4C1D95] text-[#A78BFA] px-4 py-3 rounded-md focus:outline-none focus:border-[#FCD34D] transition-colors font-light appearance-none">
                                    <option>Capital Allocation Tier</option>
                                    <option>$A 1M - $A 5M</option>
                                    <option>$A 5M - $A 10M</option>
                                    <option>&gt; $A 10M+</option>
                                </select>
                            </div>
                            <button className="w-full bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-medium tracking-widest uppercase py-4 rounded-md shadow-lg hover:from-[#FCD34D] hover:to-[#D97706] hover:text-[#1A0B2E] transition-all duration-300">
                                Submit Profile
                            </button>
                        </form>

                        {/* Image 10: The Velvet Touch (small accent) */}
                        <div className="mt-8 flex items-center gap-4 text-xs text-[#A78BFA]">
                            <div className="w-16 h-16 relative rounded-full overflow-hidden border border-[#4C1D95] flex-shrink-0">
                                <Image src="/images/v13_western_horizon_10.png" alt="Luxury Touch" fill className="object-cover" />
                            </div>
                            <p>Our commitment to capital is wrapped in absolute client dedication.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <V13Footer />
        </div>
    );
}
