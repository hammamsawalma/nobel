"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

// Custom V15 Header (Glassmorphic Indigo)
const V15Header = () => (
    <header className="fixed top-0 w-full z-50 bg-[#0A0B1A]/40 backdrop-blur-xl border-b border-white/5 px-8 py-5 flex justify-between items-center text-[#E0E7FF]">
        <div className="font-sans text-xl tracking-[0.3em] font-light flex items-center gap-4">
            nobel <span className="text-[#38BDF8] font-bold text-xs tracking-widest bg-white/5 px-2 py-1 rounded">TWILIGHT</span>
        </div>
        <nav className="hidden md:flex gap-12 text-xs font-semibold tracking-widest uppercase text-[#93C5FD]">
            <Link href="#" className="hover:text-white hover:text-shadow-[0_0_10px_#38BDF8] transition-all">Algorithmic Edge</Link>
            <Link href="#" className="hover:text-white hover:text-shadow-[0_0_10px_#38BDF8] transition-all">Capital Velocity</Link>
            <Link href="#" className="hover:text-white hover:text-shadow-[0_0_10px_#38BDF8] transition-all">Private Node</Link>
        </nav>
        <button className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-white font-bold px-6 py-2 tracking-widest text-xs transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] rounded-full">
            Initiate Sequence
        </button>
    </header>
);

// Custom V15 Footer
const V15Footer = () => (
    <footer className="bg-[#03030A] text-[#818CF8] border-t border-white/5 py-24 px-8 font-sans relative overflow-hidden">
        {/* Glow effect at bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-32 bg-[#3B82F6] blur-[150px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
            <div className="md:col-span-2">
                <div className="font-sans font-light text-3xl tracking-[0.2em] text-white mb-6">nobel.</div>
                <p className="max-w-sm text-sm leading-relaxed mb-8 text-[#94A3B8]">
                    Continuous execution. Fluid capital motion. We orchestrate yield across the digital dusk.
                </p>
                <p className="text-xs text-[#475569] font-mono">© 2026 NOBEL ALGOSYSTEMS</p>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-6 tracking-widest text-xs uppercase text-[#38BDF8]">Systems</h4>
                <ul className="space-y-3 text-sm tracking-wide font-light">
                    <li><Link href="/" className="hover:text-white transition-colors">Core Interface</Link></li>
                    <li><Link href="/about" className="hover:text-white transition-colors">Architecture Map</Link></li>
                    <li><Link href="/knowledge-hub" className="hover:text-white transition-colors">Signal Processing</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-6 tracking-widest text-xs uppercase text-[#38BDF8]">Legalities</h4>
                <ul className="space-y-3 text-sm tracking-wide font-light text-[#64748B]">
                    <li>ASIC Protocol Verified</li>
                    <li>Wholesale Node Only</li>
                    <li><Link href="#" className="hover:text-white transition-colors">Data Encryption Policy</Link></li>
                </ul>
            </div>
        </div>
    </footer>
);

export default function Variant15TwilightYield() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
    const fade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div ref={containerRef} className="bg-[#0A0B1A] text-[#E2E8F0] font-sans selection:bg-[#38BDF8] selection:text-[#0A0B1A] min-h-screen">
            <V15Header />

            {/* SECTION 1: Video Hero with Glassmorphic Overlay */}
            <section className="relative h-[110vh] flex flex-col justify-center items-center overflow-hidden">
                {/* Abstract Gradient Image 10 as absolute base layer */}
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
                    <Image src="/images/v15_twilight_yield_10.png" alt="Color Mesh" fill className="object-cover object-center" />
                </div>

                {/* Background Network Video */}
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <video
                        autoPlay loop muted playsInline
                        className="w-full h-full object-cover filter contrast-125 saturate-150 mix-blend-lighten opacity-60"
                    >
                        {/* Using network lines video for algorithmic/tech feel */}
                        <source src="/vid/the-sydney-skyline-and-harbor-bridge-at-dusk-with-boats-in-the-water-SBV-352411265-preview.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B1A]/50 via-transparent to-[#0A0B1A]"></div>
                </motion.div>

                {/* Central Glassmorphic Panel */}
                <div className="relative z-10 w-full max-w-5xl px-6 mt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-12 md:p-20 shadow-[0_40px_100px_rgba(30,58,138,0.2)]"
                    >
                        <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
                            Continuous <br />
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#D946EF]">
                                Compound State.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-[#94A3B8] max-w-2xl leading-relaxed">
                            We deploy high-frequency algorithmic architecture into the deepest pools of institutional liquidity, securing yield around the clock.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div style={{ opacity: fade }} className="absolute bottom-24 flex flex-col items-center gap-4 text-[#38BDF8] z-20">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-[#38BDF8] to-transparent animate-pulse"></div>
                    <span className="text-[10px] tracking-[0.4em] uppercase font-semibold">Initialize Protocol</span>
                </motion.div>
            </section>

            {/* SECTION 2: The Infrastructure Grid (Images 1, 3, 6) */}
            <section className="py-32 relative z-20 bg-[#0A0B1A]">
                {/* Decorative glow lines */}
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#8B5CF6]/30 to-transparent"></div>
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#3B82F6]/30 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl text-white font-light mb-4">Architectural <span className="font-bold text-[#38BDF8]">Precision</span></h2>
                        <p className="text-[#94A3B8] max-w-2xl mx-auto">Operating at the intersection of superior technology and human oversight.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Large Panel - Image 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-8 group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 aspect-[16/10]"
                        >
                            <Image src="/images/v15_twilight_yield_1.png" alt="Twilight Balcony" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1A] to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <div className="px-3 py-1 bg-[#3B82F6]/20 border border-[#3B82F6]/50 rounded-full text-[#93C5FD] text-xs font-bold tracking-widest inline-block mb-3">ENVIRONMENT 01</div>
                                <h3 className="text-3xl text-white font-light">The View from <span className="font-bold text-[#818CF8]">Above</span></h3>
                                <p className="text-[#94A3B8] mt-2 max-w-md">Clear sightlines over global market topography allow for anticipatory execution.</p>
                            </div>
                        </motion.div>

                        <div className="lg:col-span-4 flex flex-col gap-8">
                            {/* Small Panel - Image 3 */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative flex-1 rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 group"
                            >
                                <Image src="/images/v15_twilight_yield_3.png" alt="Data Sphere" fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transform" />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0A0B1A] via-[#0A0B1A]/80 to-transparent">
                                    <h4 className="text-white font-bold mb-1">Algorithmic Density</h4>
                                    <p className="text-[#64748B] text-sm">Concentrated data models processing multiple market vectors simultaneously.</p>
                                </div>
                            </motion.div>

                            {/* Small Panel - Image 6 */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="relative flex-1 rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 group"
                            >
                                <Image src="/images/v15_twilight_yield_6.png" alt="Fiber Optics" fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transform" />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0A0B1A] via-[#0A0B1A]/80 to-transparent">
                                    <h4 className="text-white font-bold mb-1">Execution Velocity</h4>
                                    <p className="text-[#64748B] text-sm">Direct-market fiber optics ensuring zero-latency trade settlement.</p>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 3: The Engine Parallax (Images 5, 9) */}
            <section className="relative h-[120vh] bg-[#0A0B1A] overflow-hidden flex items-center">

                <motion.div style={{ y: y2 }} className="absolute -left-1/4 w-[150vw] aspect-square rounded-full bg-[#1E1B4B] blur-[200px] opacity-30"></motion.div>

                <div className="max-w-[100rem] mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-20 relative z-10">

                    <div className="md:w-1/2 relative aspect-square">
                        {/* Image 5 rotating behind */}
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <Image src="/images/v15_twilight_yield_5.png" alt="Kinetic Engine" fill className="object-cover rounded-full mix-blend-screen opacity-60" />
                        </motion.div>
                        {/* Image 9 static overlay */}
                        <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-[#38BDF8]/50 shadow-[0_0_80px_rgba(56,189,248,0.2)]">
                            <Image src="/images/v15_twilight_yield_9.png" alt="Light Trails" fill className="object-cover" />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="md:w-1/2"
                    >
                        <div className="px-4 py-1 bg-[#8B5CF6]/20 border border-[#8B5CF6]/50 rounded-full text-[#C4B5FD] text-sm font-bold tracking-widest inline-block mb-6">DYNAMIC KINEMATICS</div>
                        <h2 className="text-5xl lg:text-7xl font-light text-white mb-8">
                            Relentless <br /><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#F472B6]">Momentum.</span>
                        </h2>
                        <p className="text-xl text-[#94A3B8] font-light leading-relaxed mb-8">
                            Capital only generates return when it moves. Our proprietary engine creates fluid streams of value, navigating through market twilight while others sleep.
                        </p>
                        <button className="flex items-center gap-4 text-[#38BDF8] hover:text-white transition-colors group">
                            <span className="font-bold uppercase tracking-widest text-sm">View System Whitepaper</span>
                            <div className="w-8 h-px bg-[#38BDF8] group-hover:bg-white group-hover:w-12 transition-all"></div>
                        </button>
                    </motion.div>

                </div>
            </section>

            {/* SECTION 4: The Human Element & Access (Images 7, 2, 4, 8) */}
            <section className="py-32 bg-[#050614] relative">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* The Operator */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0A0B1A]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-10 flex flex-col justify-between"
                    >
                        <div className="aspect-video relative rounded-2xl overflow-hidden mb-8 border border-white/10">
                            <Image src="/images/v15_twilight_yield_7.png" alt="Digital Operator" fill className="object-cover" />
                            {/* Glassmorphic overlay piece (Image 2) */}
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 opacity-50 mix-blend-screen">
                                <Image src="/images/v15_twilight_yield_2.png" alt="Glass texture" fill className="object-cover" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Architectural Oversight</h3>
                            <p className="text-[#64748B] font-light">
                                While the machine operates at microsecond intervals, the overarching strategy—the macro view across the glass—is driven by elite human intelligence interpreting the data streams.
                            </p>
                        </div>
                    </motion.div>

                    {/* The Access */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-rows-2 gap-8"
                    >
                        {/* Performance Image 4 */}
                        <div className="relative rounded-3xl overflow-hidden border border-white/5 group">
                            <Image src="/images/v15_twilight_yield_4.png" alt="Performance" fill className="object-cover opacity-80 group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050614] to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white">Quiet Power</h3>
                                <p className="text-[#94A3B8] text-sm">Electric acceleration mirroring high-yield velocity.</p>
                            </div>
                        </div>

                        {/* Access Image 8 */}
                        <div className="relative rounded-3xl overflow-hidden border border-[#38BDF8]/30 group bg-[#0A0B1A]">
                            <Image src="/images/v15_twilight_yield_8.png" alt="Access Key" fill className="object-cover mix-blend-screen opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center bg-[#0A0B1A]/40 group-hover:bg-transparent transition-colors duration-500 backdrop-blur-[2px]">
                                <button className="bg-white/10 hover:bg-[#38BDF8]/20 border border-[#38BDF8]/50 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs backdrop-blur-md transition-all">
                                    Request Physical Key
                                </button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* SECTION 5: Final Call to Action */}
            <section className="py-24 bg-[#0A0B1A] relative overflow-hidden border-t border-white/10">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-[10/3] bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#D946EF] blur-[100px] opacity-10 rounded-full"></div>

                <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">Enter the <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#D946EF]">Protocol.</span></h2>
                    <p className="text-[#94A3B8] mb-10 font-light text-lg">Sophisticated capital requires sophisticated execution. Connect your entity to the Nobel environment today.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input type="email" placeholder="Connect Secure Email" className="bg-white/5 border border-white/20 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#38BDF8] focus:bg-white/10 transition-all font-light w-full sm:w-96 text-center sm:text-left" />
                        <button className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all">
                            Initialize
                        </button>
                    </div>
                </div>
            </section>

            <V15Footer />
        </div>
    );
}
