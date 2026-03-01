"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

// Custom V11 Header
const V11Header = () => (
    <header className="fixed top-0 w-full z-50 bg-[#0A1128]/80 backdrop-blur-md border-b border-[#1A2E5B] px-8 py-4 flex justify-between items-center text-white">
        <div className="font-black text-2xl tracking-tighter">
            NOBEL <span className="text-[#3A86FF] font-light">| METROPOLITAN</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-[#B8C0D4]">
            <Link href="#" className="hover:text-white transition-colors">Yield Matrix</Link>
            <Link href="#" className="hover:text-white transition-colors">Custodial Tech</Link>
            <Link href="#" className="hover:text-white transition-colors">Advisory Node</Link>
        </nav>
        <button className="bg-[#3A86FF] hover:bg-[#2A75E6] text-white px-6 py-2 rounded font-bold uppercase tracking-widest text-xs transition-colors">
            Initialize Contact
        </button>
    </header>
);

// Custom V11 Footer
const V11Footer = () => (
    <footer className="bg-[#050814] text-[#B8C0D4] border-t border-[#1A2E5B] py-16 px-8 text-center sm:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
                <div className="font-black text-3xl tracking-tighter text-white mb-4">
                    NOBEL
                </div>
                <p className="max-w-sm text-sm leading-relaxed mb-6">
                    Next-generation fixed income architecture for Australian investors. Deep liquidity. Total preservation.
                </p>
                <p className="text-xs text-[#4A648C]">© 2026 Nobel Private Wealth. All systems nominal.</p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">System Hub</h4>
                <ul className="space-y-2 text-sm">
                    <li><Link href="/" className="hover:text-[#3A86FF] transition-colors">Main Navigator</Link></li>
                    <li><Link href="/about" className="hover:text-[#3A86FF] transition-colors">Firm Overview</Link></li>
                    <li><Link href="/knowledge-hub" className="hover:text-[#3A86FF] transition-colors">Data Lake</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Regulatory</h4>
                <ul className="space-y-2 text-sm text-[#4A648C]">
                    <li>ASIC AFSL: 457891</li>
                    <li>Wholesale Investors Only</li>
                    <li><Link href="#" className="hover:text-white transition-colors">Privacy Paradigm</Link></li>
                </ul>
            </div>
        </div>
    </footer>
);

export default function Variant11MetropolitanFlow() {

    // High-velocity Spring configuration (adapted from V9)
    const snapSpring = {
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.8
    };

    const elasticStagger = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const itemElastic = {
        hidden: { y: 100, opacity: 0, scale: 0.9 },
        show: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: snapSpring
        }
    };

    // V11 generated images mapping
    // /Users/spacetoonevent/.gemini/antigravity/brain/e934b82b-28fe-461c-ba19-26aa5b07f75c/v11_metropolitan_flow_1_XX.png
    // Assume images are moved to /public/images/v11_metropolitan_flow_X.png later or we use specific AI files.
    // For now using placeholder relative paths we will copy to public
    const imgBase = "/images/v11"; // We will script a copy of the generated images to public/images/v11

    return (
        <div className="bg-[#0A1128] text-[#E0E5F2] font-sans selection:bg-[#3A86FF] selection:text-white overflow-x-hidden min-h-screen">
            <V11Header />

            {/* SECTION 1: Video Hero */}
            <section className="relative h-screen flex flex-col justify-end pb-32 px-6 lg:px-12 overflow-hidden border-b-4 border-[#3A86FF]">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-50"
                >
                    <source src="/vid/drone-shot-above-river-panning-down-showing-brisbane-cbd-expressway-motorway-a-SBV-348964395-preview.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent z-0"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10 flex gap-8 items-end">
                    {/* Image 1: Main Cityscape overlay (Optional here since we have video, let's use it as a thumbnail card) */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={snapSpring as any}
                        className="hidden lg:block w-72 h-48 rounded-xl overflow-hidden border-2 border-white/20 shadow-[0_0_50px_rgba(58,134,255,0.3)] relative flex-shrink-0"
                    >
                        <Image src="/images/v11_metropolitan_flow_1.png" alt="Metropolis" fill className="object-cover" />
                    </motion.div>

                    <div>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ...snapSpring, delay: 0.1 } as any}
                            className="overflow-hidden mb-4"
                        >
                            <div className="text-[#3A86FF] tracking-[0.3em] font-bold text-sm uppercase flex items-center gap-4">
                                <span className="w-8 h-[2px] bg-[#3A86FF]"></span>
                                High-Velocity Capital
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ...snapSpring, delay: 0.2 } as any}
                            className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.85] text-white"
                        >
                            Metropolitan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] to-[#E0E5F2]">Flow.</span>
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Image Grid Philosophy */}
            <section className="py-32 bg-[#0A1128] relative z-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.h2
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="text-5xl font-bold mb-16 text-white border-l-4 border-[#3A86FF] pl-6"
                    >
                        Architecting <br />Liquidity.
                    </motion.h2>

                    <motion.div
                        variants={elasticStagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {/* Image 2, Image 3, Image 4 mapped to philosophy concepts */}
                        {[
                            { img: "v11_metropolitan_flow_2.png", title: "Institutional Custody", desc: "Platinum tier security protocols." },
                            { img: "v11_metropolitan_flow_3.png", title: "Algorithmic Spreads", desc: "Data-driven yield targeting." },
                            { img: "v11_metropolitan_flow_4.png", title: "Fiduciary Oversight", desc: "Uncompromised alignment." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                variants={itemElastic as any}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[4/3] relative rounded-t-2xl overflow-hidden border border-[#1A2E5B] border-b-0 shadow-lg group-hover:shadow-[0_0_30px_rgba(58,134,255,0.2)] transition-shadow">
                                    <Image src={`/images/${card.img}`} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] to-transparent"></div>
                                </div>
                                <div className="bg-[#101A3B] p-8 rounded-b-2xl border border-[#1A2E5B] border-t-0">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#3A86FF] transition-colors">{card.title}</h3>
                                    <p className="text-[#899CBE]">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: Deep Dive Image & Data */}
            <section className="py-0 relative h-[80vh] flex items-center overflow-hidden">
                {/* Image 5 (Vault) used as split-screen background */}
                <div className="absolute inset-0 w-full h-full lg:w-1/2 relative z-0">
                    <Image src="/images/v11_metropolitan_flow_5.png" alt="Data Vault" fill className="object-cover filter contrast-125" />
                    <div className="absolute inset-0 bg-[#0A1128]/60 lg:bg-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 relative z-10 h-full">
                    <div className="hidden lg:block"></div>
                    <div className="flex flex-col justify-center lg:pl-16 h-full bg-gradient-to-r from-transparent via-[#0A1128]/80 to-[#0A1128]">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={snapSpring as any}
                        >
                            <div className="text-[#3A86FF] font-mono mb-4 text-xl">SECURITY APEX</div>
                            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">Impenetrable <br />Structure.</h2>
                            <p className="text-xl text-[#899CBE] mb-12 max-w-lg">
                                We isolate your capital in heavily encrypted, ASIC-regulated custodial frameworks. Zero co-mingling. Zero systemic risk exposure.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-4xl font-black text-white">100%</div>
                                    <div className="text-sm font-bold text-[#4A648C] uppercase tracking-widest">Segregated</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-white">Tier-1</div>
                                    <div className="text-sm font-bold text-[#4A648C] uppercase tracking-widest">Custodians</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: High Velocity Horizontal Nodes */}
            <section className="py-32 bg-[#101A3B] border-y border-[#1A2E5B] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
                    <h2 className="text-4xl font-bold text-white uppercase tracking-widest">Node Allocation</h2>
                </div>

                <motion.div
                    variants={elasticStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex gap-8 px-6 lg:px-12 w-max"
                >
                    {/* Image 6, 7, 8, 9 mapped to nodes */}
                    {[
                        { id: "NODE-A", title: "Sovereign Bonds", img: "v11_metropolitan_flow_6.png" },
                        { id: "NODE-B", title: "Corporate Hybrid", img: "v11_metropolitan_flow_7.png" },
                        { id: "NODE-C", title: "Blue-Chip Equity", img: "v11_metropolitan_flow_8.png" },
                        { id: "NODE-D", title: "Cash Reserves", img: "v11_metropolitan_flow_9.png" }
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            variants={itemElastic as any}
                            whileHover={{ y: -20 }}
                            transition={snapSpring as any}
                            className="w-[350px] aspect-[3/4] rounded-3xl overflow-hidden relative group cursor-crosshair border border-[#1A2E5B]"
                        >
                            <Image src={`/images/${node.img}`} alt={node.title} fill className="object-cover filter opacity-50 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/50 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="bg-[#3A86FF] text-[#0A1128] inline-block px-3 py-1 font-mono text-xs font-bold mb-4">{node.id}</div>
                                <h3 className="text-3xl font-black text-white leading-none whitespace-pre-wrap">{node.title.replace(' ', '\n')}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* SECTION 5: The Interface (Image 10) */}
            <section className="py-32 bg-[#0A1128]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="relative rounded-3xl overflow-hidden aspect-square border-4 border-[#101A3B] shadow-[0_0_80px_rgba(58,134,255,0.15)]"
                    >
                        {/* Image 10: Compass/Strategic direction */}
                        <Image src="/images/v11_metropolitan_flow_10.png" alt="Strategic Interface" fill className="object-cover" />
                    </motion.div>

                    <div>
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={snapSpring as any}
                        >
                            <h2 className="text-5xl font-black text-white mb-6">Strategic Trajectory.</h2>
                            <p className="text-xl text-[#899CBE] leading-relaxed mb-8">
                                We don't react to the market; we model its flow. Utilizing continuous data ingestion, we adjust portfolio exposure to maintain an incredibly tight yield target range.
                            </p>
                            <ul className="space-y-4">
                                {['Algorithmic curve mapping.', 'Constant spread optimization.', 'Asymmetric risk filtering.'].map((li, i) => (
                                    <li key={i} className="flex items-center gap-4 text-white font-bold bg-[#101A3B] p-4 rounded-xl border border-[#1A2E5B]">
                                        <span className="text-[#3A86FF]">→</span>
                                        {li}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Signal Terminal */}
            <section className="py-16 bg-[#050814] border-y border-[#3A86FF]/20">
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={snapSpring as any}
                    className="max-w-4xl mx-auto px-6 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4 font-mono text-[#3A86FF] uppercase tracking-[0.2em]">Network Node Active</h2>
                    <p className="text-lg text-[#899CBE]">Brisbane/Sydney interconnected terminal running at full capacity.</p>
                </motion.div>
            </section>

            {/* SECTION 7: Contact Form */}
            <section className="py-32 bg-[#0A1128] relative overflow-hidden">
                {/* Abstract background sweep */}
                <div className="absolute bottom-0 right-0 w-full h-[500px] bg-gradient-to-tl from-[#3A86FF]/10 to-transparent transform -skew-y-12 translate-y-32"></div>

                <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring as any}
                        className="mb-16"
                    >
                        <h2 className="text-6xl font-black text-white mb-6 drop-shadow-lg">Plug into the Flow.</h2>
                        <p className="text-2xl text-[#899CBE] max-w-2xl mx-auto">Upload your contact parameters for a preliminary systems check on your retirement capital.</p>
                    </motion.div>

                    <motion.form
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ ...snapSpring, delay: 0.2 } as any}
                        className="bg-[#101A3B]/80 backdrop-blur-xl p-12 rounded-3xl border border-[#3A86FF]/30 shadow-2xl max-w-3xl mx-auto text-left"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <label className="block text-xs font-bold tracking-widest text-[#4A648C] uppercase mb-4">Identity String</label>
                                <input type="text" className="w-full bg-[#050814] border-b-2 border-[#1A2E5B] text-white p-4 focus:border-[#3A86FF] outline-none transition-colors font-mono" placeholder="NAME / ENTITY" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold tracking-widest text-[#4A648C] uppercase mb-4">Comms Channel</label>
                                <input type="email" className="w-full bg-[#050814] border-b-2 border-[#1A2E5B] text-white p-4 focus:border-[#3A86FF] outline-none transition-colors font-mono" placeholder="EMAIL ADDRESS" />
                            </div>
                        </div>
                        <button className="w-full bg-[#3A86FF] text-white font-black uppercase tracking-[0.2em] p-6 rounded-xl hover:bg-[#2A75E6] hover:shadow-[0_0_40px_rgba(58,134,255,0.4)] transition-all">
                            Initialize Transmission
                        </button>
                    </motion.form>

                </div>
            </section>

            <V11Footer />
        </div>
    );
}
