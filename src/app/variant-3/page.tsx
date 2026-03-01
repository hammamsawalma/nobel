"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Variant3SydneyAerial() {
    const containerRef = useRef(null);
    const heroRef = useRef(null);

    // Parallax and masking scroll calculations
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // As the user scrolls down, the mask scales up dramatically
    const maskScale = useTransform(heroScroll, [0, 0.8], [1, 50]);
    const maskOpacity = useTransform(heroScroll, [0.6, 0.8], [1, 0]);

    // Reveal text below the hero
    const revealY = useTransform(heroScroll, [0.5, 1], [100, 0]);
    const revealOpacity = useTransform(heroScroll, [0.5, 1], [0, 1]);

    return (
        <div className="font-sans bg-black text-white overflow-x-hidden min-h-screen selection:bg-white selection:text-black" ref={containerRef}>

            {/* SECTION 1 & 2: Hero Video Mask & Sticky Scroll Reveal */}
            <section ref={heroRef} className="relative h-[200vh]">
                <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center">

                    {/* Background Video Layer */}
                    <div className="absolute inset-0 w-full h-full object-cover z-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/vid/aerial-sydney-australia-sunny-day-4k-video-SBV-323005013-preview.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Masking Layer */}
                    {/* We use a large SVG path or CSS mask. Here we use a CSS background with mix-blend-mode to create a text cutout. */}
                    <motion.div
                        style={{
                            scale: maskScale,
                            opacity: maskOpacity,
                            transformOrigin: '50% 50%'
                        }}
                        className="absolute inset-0 z-10 w-full h-full flex flex-col items-center justify-center bg-black mix-blend-multiply"
                    >
                        <h1 className="text-[15vw] md:text-[200px] font-black tracking-tighter text-white whitespace-nowrap leading-none select-none">
                            NOBEL
                        </h1>
                    </motion.div>

                    {/* Text that fades in as the video overtakes the screen */}
                    <motion.div
                        style={{ y: revealY, opacity: revealOpacity }}
                        className="relative z-20 max-w-4xl mx-auto px-6 text-center mt-[40vh]"
                    >
                        <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-2xl">Elevated Perspective.</h2>
                        <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg font-light">Australian wealth management driven by macro-level clarity and precision execution.</p>
                    </motion.div>

                </div>
            </section>

            {/* SECTION 3: The Philosophy (Framer Motion Staggered Lists) */}
            <section className="py-32 bg-zinc-950 relative z-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 border-l-4 border-white pl-8"
                    >
                        <h2 className="text-4xl font-bold mb-4">Unobstructed Vision</h2>
                        <p className="text-xl text-zinc-400 font-light max-w-2xl">To navigate the complexities of Australian capital markets requires removing oneself from the noise on the ground.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Macro Data Analysis", text: "Ingesting vast datasets to predict interest rate shifts and bond yield curves." },
                            { title: "Micro Execution", text: "Precise allocation into Tier-1 corporate and sovereign debt instruments." },
                            { title: "Absolute Custody", text: "ASIC regulated environments ensuring total capital preservation." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-zinc-900 border border-zinc-800 p-10 hover:bg-zinc-800 transition-colors"
                            >
                                <div className="text-white/20 font-mono text-5xl mb-6">0{i + 1}</div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-zinc-400 font-light leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Horizontal Parallax Marquee */}
            <section className="py-24 bg-white text-black overflow-hidden flex flex-col justify-center">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: [0, -2000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                >
                    <div className="flex gap-16 px-8 items-center">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="flex gap-16 items-center">
                                <span className="text-8xl font-black tracking-tighter uppercase">$1.2B AUM</span>
                                <span className="w-8 h-8 bg-black rounded-full"></span>
                                <span className="text-8xl font-black tracking-tighter uppercase text-transparent" style={{ WebkitTextStroke: '2px black' }}>100% REGULATED</span>
                                <span className="w-8 h-8 bg-black rounded-full"></span>
                                <span className="text-8xl font-black tracking-tighter uppercase">ZERO DEFAULT</span>
                                <span className="w-8 h-8 bg-black rounded-full"></span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* SECTION 5: Sticky Interaction Grid */}
            <section className="relative bg-zinc-950 py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 relative">

                    <div className="lg:sticky top-32 h-fit mb-12 lg:mb-0">
                        <h2 className="text-5xl font-bold mb-6">Structural Integrity.</h2>
                        <p className="text-xl text-zinc-400 font-light mb-8">Our portfolios are engineered to withstand macroeconomic stress tests while delivering reliable, friction-less yield.</p>
                        <ul className="space-y-6">
                            {['Sovereign Bond Framework', 'Tier-1 Bank Hybrid Capital', 'Floating Rate Corporate Debt'].map((li, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg">
                                    <div className="w-2 h-2 bg-white"></div>
                                    <span>{li}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-12">
                        {[1, 2, 3].map((card) => (
                            <motion.div
                                key={card}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                whileHover={{ scale: 1.02 }}
                                className="aspect-[4/3] bg-zinc-900 border border-zinc-800 p-10 flex flex-col justify-between group cursor-pointer"
                            >
                                <div className="text-sm tracking-widest uppercase text-zinc-500 font-mono">Module {card}</div>
                                <div>
                                    <h3 className="text-3xl font-bold mb-4 group-hover:text-white/80 transition-colors">Yield Optimization Protocol</h3>
                                    <p className="text-zinc-400 font-light">Adaptive algorithms continuously scanning the Australian debt registry for mispriced fixed income opportunities.</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECTION 6: Video Frame Overlay Transition */}
            <section className="py-0 relative h-[60vh] overflow-hidden flex items-center justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 filter contrast-125 grayscale"
                >
                    <source src="/vid/aerial-sydney-australia-sunny-day-4k-video-SBV-323005013-preview.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply z-10"></div>
                <div className="absolute inset-0 bg-black/60 z-10"></div>

                <div className="relative z-20 text-center px-4">
                    <h2 className="text-3xl md:text-5xl font-bold italic">"The view from the top changes everything."</h2>
                </div>
            </section>

            {/* SECTION 7: Monolithic Footer Contact */}
            <section className="py-32 bg-black border-t border-zinc-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold mb-8">Initiate Contact</h2>
                    <p className="text-xl text-zinc-500 mb-12 font-light">
                        Establish a secure connection with our Sydney advisory board.
                    </p>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        <input type="text" placeholder="Identity" className="bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-white transition-colors" />
                        <input type="email" placeholder="Comms Channel" className="bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-white transition-colors" />
                        <motion.button
                            whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
                            className="md:col-span-2 bg-transparent border border-white text-white p-4 font-bold tracking-widest uppercase transition-colors"
                        >
                            Transmit Request
                        </motion.button>
                    </form>
                </div>
            </section>

        </div>
    );
}
