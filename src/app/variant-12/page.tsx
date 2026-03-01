"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

// Custom V12 Header (Brutalist style)
const V12Header = () => (
    <header className="fixed top-0 w-full z-50 bg-[#F4F4F6]/90 backdrop-blur-md border-b-4 border-black px-8 py-6 flex justify-between items-center text-black">
        <div className="font-black text-3xl tracking-tighter uppercase">
            Nobel / <span className="text-[#64748B]">Structural</span>
        </div>
        <nav className="hidden md:flex gap-12 text-sm font-black tracking-widest uppercase">
            <Link href="#" className="hover:text-[#64748B] transition-colors relative group">
                Framework
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black group-hover:w-full transition-all"></span>
            </Link>
            <Link href="#" className="hover:text-[#64748B] transition-colors relative group">
                Yield Stress
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black group-hover:w-full transition-all"></span>
            </Link>
            <Link href="#" className="hover:text-[#64748B] transition-colors relative group">
                Foundations
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-black group-hover:w-full transition-all"></span>
            </Link>
        </nav>
        <button className="bg-black text-white hover:bg-[#64748B] px-8 py-3 font-black uppercase tracking-[0.2em] text-xs transition-colors border-2 border-black">
            Engage
        </button>
    </header>
);

// Custom V12 Footer (Brutalist style)
const V12Footer = () => (
    <footer className="bg-black text-white border-t-8 border-[#334155] py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
                <div className="font-black text-5xl tracking-tighter mb-8 uppercase">NOBEL.</div>
                <p className="max-w-md text-xl leading-relaxed mb-12 text-[#94A3B8] font-medium">
                    Unyielding structural fixed income for the wholesale investor. Built on granite.
                </p>
                <p className="text-sm text-[#475569] font-mono">© 2026 Nobel Private Wealth.</p>
            </div>
            <div>
                <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-lg text-[#F4F4F6] border-b-2 border-[#334155] pb-2 inline-block">Architecture</h4>
                <ul className="space-y-4 font-bold text-[#94A3B8]">
                    <li><Link href="/" className="hover:text-white transition-colors">Main Directory</Link></li>
                    <li><Link href="/about" className="hover:text-white transition-colors">Firm History</Link></li>
                    <li><Link href="/knowledge-hub" className="hover:text-white transition-colors">Research Documents</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-lg text-[#F4F4F6] border-b-2 border-[#334155] pb-2 inline-block">Compliance</h4>
                <ul className="space-y-4 font-bold text-[#94A3B8]">
                    <li>ASIC AFSL: 457891</li>
                    <li>Wholesale Only</li>
                    <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
            </div>
        </div>
    </footer>
);

export default function Variant12StructuralCapital() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Brutalist animation configs (heavy, slow, geometric)
    const heavySlide = {
        hidden: { y: 100, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const slowReveal = {
        hidden: { scale: 1.1, opacity: 0 },
        show: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut" }
        }
    };

    // Parallax for the bridge video
    const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    return (
        <div ref={containerRef} className="bg-[#F4F4F6] text-black font-sans selection:bg-black selection:text-white overflow-x-hidden min-h-screen">
            <V12Header />

            {/* SECTION 1: Video Hero (Sydney Harbour Bridge) */}
            <section className="relative h-screen pt-24 pb-16 px-6 lg:px-12 flex flex-col justify-end grid-bg">
                {/* CSS grid background defined in tailwind or style tag */}
                <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="absolute top-24 right-12 w-2/3 lg:w-1/2 h-2/3 z-10 overflow-hidden shadow-2xl border-l-[16px] border-b-[16px] border-black">
                    <motion.video
                        style={{ y: videoY }}
                        autoPlay loop muted playsInline
                        className="w-[120%] h-[120%] object-cover filter grayscale contrast-125"
                    >
                        <source src="/vid/australia-sydney-sydney-harbour-bridge-connect-business-center-city-skyline-wi-SBV-352381156-preview.mp4" type="video/mp4" />
                    </motion.video>
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-20">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={heavySlide as any}
                        className="bg-white p-8 lg:p-12 inline-block border-4 border-black shadow-[16px_16px_0px_rgba(0,0,0,1)]"
                    >
                        <div className="text-black font-mono font-bold mb-6 tracking-widest uppercase text-sm">
                            [ Foundation 01 / Sydney ]
                        </div>
                        <h1 className="text-7xl md:text-[8rem] font-black tracking-tighter leading-none mb-6">
                            Structural <br />Capital.
                        </h1>
                        <p className="text-2xl font-medium text-[#475569] max-w-xl">
                            Yield built on unbreakable engineering. We architect fixed-income portfolios designed to withstand extreme macroeconomic stress.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: Image Philosophy (Raw Grid) */}
            <section className="py-32 bg-black text-[#F4F4F6] relative z-20 border-t-[1rem] border-[#94A3B8]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={heavySlide as any}
                        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32"
                    >
                        <div>
                            <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
                                Weighted <br />Yield.
                            </h2>
                            <p className="text-2xl text-[#94A3B8] font-medium leading-relaxed">
                                Retail investments are built on hope. Institutional capital is built on structure. We map every fraction of yield to a concrete, underlying asset backing.
                            </p>
                        </div>

                        <div className="relative aspect-square">
                            {/* Image 3: The Steel Sphere */}
                            <Image src="/images/v12_structural_capital_3.png" alt="Steel Sphere" fill className="object-cover border-8 border-white p-2" />
                        </div>
                    </motion.div>

                    {/* Brutalist image/data grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 border-t-4 border-l-4 border-[#334155]">
                        {[
                            { img: "v12_structural_capital_1.png", stat: "100%", label: "Asset Backed" },
                            { img: "v12_structural_capital_4.png", stat: "0", label: "Speculative Risk" },
                            { img: "v12_structural_capital_6.png", stat: "Tier-1", label: "Custody" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={heavySlide as any}
                                className="border-r-4 border-b-4 border-[#334155] p-8"
                            >
                                <div className="aspect-[4/5] relative mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image src={`/images/${item.img}`} alt={item.label} fill className="object-cover" />
                                </div>
                                <div className="text-6xl font-black mb-2">{item.stat}</div>
                                <div className="text-lg uppercase tracking-widest font-bold text-[#64748B]">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECTION 3: The Architect (Portrait & Quote) */}
            <section className="py-32 bg-[#F4F4F6] relative">
                <div className="max-w-[90rem] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-5 gap-0">

                    <div className="col-span-2 relative aspect-[3/4] z-10 border-8 border-black shadow-[24px_24px_0px_rgba(100,116,139,1)]">
                        {/* Image 7: The Wealth Manager */}
                        <Image src="/images/v12_structural_capital_7.png" alt="Chief Architect" fill className="object-cover" />
                        <div className="absolute bottom-6 left-6 bg-black text-white px-4 py-2 font-mono text-sm uppercase">Chief Architect // Fiduciary Board</div>
                    </div>

                    <div className="col-span-3 bg-white p-12 lg:p-24 border-4 border-black ml-0 lg:-ml-12 mt-12 lg:mt-32 relative z-0">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={heavySlide as any}
                        >
                            <svg className="w-24 h-24 mb-12 text-[#94A3B8]" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                            </svg>
                            <h3 className="text-4xl lg:text-5xl font-black leading-tight mb-8">
                                We do not speculate. We engineer. Our mandate is to build an unshakeable edifice of capital preservation that generates absolute, reliable yield.
                            </h3>
                            <div className="w-32 h-2 bg-black"></div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* SECTION 4: The Components (Data Drive) */}
            <section className="py-32 bg-[#E2E8F0]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-6xl font-black mb-16 uppercase border-b-8 border-black pb-8">Structural Nodes</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Use remaining images for detailed nodes */}
                        {[
                            { img: "v12_structural_capital_2.png", title: "ALGORITHMIC PROJECTION", info: "Mapping yield variance." },
                            { img: "v12_structural_capital_8.png", title: "CUSTODIAL ISOLATION", info: "100% segregated architecture." },
                            { img: "v12_structural_capital_9.png", title: "CORPORATE HYBRID TIER", info: "Unshakeable debt issuance." },
                            { img: "v12_structural_capital_10.png", title: "REFINED YIELD EXTRACTION", info: "Zero commission friction." }
                        ].map((node, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={heavySlide as any}
                                className="bg-white border-2 border-black flex flex-col sm:flex-row group hover:bg-black transition-colors duration-500"
                            >
                                <div className="w-full sm:w-1/3 aspect-square relative border-b-2 sm:border-b-0 sm:border-r-2 border-black">
                                    <Image src={`/images/${node.img}`} alt={node.title} fill className="object-cover grayscale" />
                                </div>
                                <div className="p-8 flex flex-col justify-center w-full sm:w-2/3">
                                    <h3 className="text-2xl font-black mb-2 group-hover:text-white transition-colors uppercase">{node.title}</h3>
                                    <p className="text-[#64748B] font-medium font-mono group-hover:text-[#94A3B8] transition-colors">&gt;&gt; {node.info}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: Executive Interface */}
            <section className="py-0 h-screen relative flex items-center">
                <Image src="/images/v12_structural_capital_5.png" alt="Executive Office" fill className="object-cover filter contrast-125 z-0" />
                <div className="absolute inset-0 bg-white/60 mix-blend-screen z-0"></div>
                <div className="absolute inset-0 border-[24px] border-black pointer-events-none z-20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex justify-end">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-black text-white p-12 lg:p-24 max-w-2xl border-l-[1rem] border-white shadow-2xl"
                    >
                        <h2 className="text-5xl font-black mb-8 uppercase">The Access Terminal.</h2>
                        <p className="text-xl text-[#94A3B8] font-medium leading-relaxed mb-12">
                            Total transparency. Our proprietary interface provides complete visibility into the underlying structure of your asset map.
                        </p>
                        <button className="w-full bg-white text-black font-black uppercase text-xl py-6 hover:bg-[#E2E8F0] transition-colors">
                            Initiate System Login
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 6: Data Ticker (Brutalist marquee) */}
            <section className="bg-[#CBD5E1] border-y-8 border-black py-4 overflow-hidden flex whitespace-nowrap">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    className="text-4xl lg:text-5xl font-black uppercase tracking-widest text-black flex gap-12"
                >
                    {/* Duplicated for smooth loop */}
                    {[...Array(10)].map((_, i) => (
                        <span key={i}>
                            ASIC REGULATED ⏤ TIER 1 CUSTODY ⏤ WHOLESALE YIELD ⏤ ABSOLUTE PRESERVATION ⏤
                        </span>
                    ))}
                </motion.div>
            </section>

            {/* SECTION 7: Contact Form (Raw Architecture) */}
            <section className="py-32 bg-white relative">
                <div className="absolute top-0 right-12 w-px h-full bg-black/10"></div>
                <div className="absolute top-0 right-32 w-px h-full bg-black/10"></div>

                <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <h2 className="text-7xl font-black uppercase tracking-tighter mb-16">Construct <br />Your Yield.</h2>

                    <form className="border-4 border-black p-8 md:p-16 bg-[#F4F4F6] shadow-[16px_16px_0px_rgba(0,0,0,1)] text-left">
                        <div className="space-y-8">
                            <div>
                                <label className="block text-sm font-black uppercase tracking-widest mb-2">Entity Legal Name</label>
                                <input type="text" className="w-full bg-white border-2 border-black p-4 font-mono text-lg focus:outline-none focus:ring-4 focus:ring-black/10" />
                            </div>
                            <div>
                                <label className="block text-sm font-black uppercase tracking-widest mb-2">Contact Directive (Email)</label>
                                <input type="email" className="w-full bg-white border-2 border-black p-4 font-mono text-lg focus:outline-none focus:ring-4 focus:ring-black/10" />
                            </div>
                            <button className="w-full bg-black text-white font-black uppercase tracking-widest text-xl p-6 hover:bg-[#334155] transition-colors mt-8">
                                Submit Parameters
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <V12Footer />
        </div>
    );
}
