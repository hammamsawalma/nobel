"use client";

import { motion } from 'framer-motion';

// SVG Path definitions for waving effect
const wavePath1 = "M0,160 C320,300 420,-100 740,100 C1060,300 1120,-100 1440,100 L1440,320 L0,320 Z";
const wavePath2 = "M0,100 C220, -100 620, 300 840, 100 C1060, -100 1220, 300 1440, 160 L1440,320 L0,320 Z";

const bottomWave1 = "M0,0 C320,200 420,-50 740,50 C1060,150 1120,-50 1440,50 L1440,0 L0,0 Z";
const bottomWave2 = "M0,50 C220,-50 620,200 840,50 C1060,-100 1220,200 1440,100 L1440,0 L0,0 Z";

export default function Variant8LiquidYield() {
    return (
        <div className="font-sans antialiased text-white selection:bg-cyan-300 selection:text-blue-900 bg-[#061A29]">

            {/* SECTION 1: Liquid Hero */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-6">
                {/* Subtle background gradient blob */}
                <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-400/10 rounded-full mix-blend-screen filter blur-[100px] animate-[pulse_6s_ease-in-out_infinite]"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <h1 className="text-7xl md:text-[9rem] font-light tracking-tighter mb-6 leading-[0.9]">
                            Liquid <br /><span className="font-serif italic text-cyan-400">Yield.</span>
                        </h1>
                        <p className="text-2xl text-blue-100/70 font-light max-w-2xl mx-auto leading-relaxed">
                            Australian wealth management that flows harmoniously with macroeconomic currents. Deep liquidity, total transparency.
                        </p>
                    </motion.div>
                </div>

                {/* Undulating SVG Separator */}
                <div className="absolute bottom-0 w-full overflow-hidden leading-none z-20">
                    <motion.svg
                        className="relative block w-[200%] h-[150px] md:h-[250px] text-[#0A2540]"
                        viewBox="0 0 1440 320" preserveAspectRatio="none"
                    >
                        <motion.path
                            fill="currentColor"
                            animate={{ d: [wavePath1, wavePath2, wavePath1] }}
                            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                        />
                    </motion.svg>
                </div>
            </section>

            {/* SECTION 2: The Deep Water (Philosophy) */}
            <section className="py-32 bg-[#0A2540] relative z-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-5xl font-light mb-8">Navigating the Deep.</h2>
                        <p className="text-2xl text-blue-200/60 font-light leading-relaxed mb-6">
                            Surface-level retail investments are subject to violent chop. True wealth preservation requires diving deeper into wholesale fixed income markets.
                        </p>
                        <p className="text-xl text-blue-200/40 font-light leading-relaxed">
                            Our models detect the subtlest shifts in the RBA's undercurrents, adjusting portfolio allocations fluidly to maintain a steady, unbreakable stream of yields.
                        </p>
                    </motion.div>

                    <div className="relative h-full min-h-[400px]">
                        {/* Abstract floating circles mimicking bubbles/liquidity */}
                        <motion.div
                            animate={{ y: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                            className="absolute bottom-0 left-[20%] w-32 h-32 rounded-full border border-cyan-500/30"
                        />
                        <motion.div
                            animate={{ y: [0, -80, 0], opacity: [0.2, 0.5, 0.2] }}
                            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
                            className="absolute top-[20%] right-[10%] w-48 h-48 rounded-full border border-blue-500/30 backdrop-blur-sm bg-blue-500/5"
                        />
                        <motion.div
                            animate={{ y: [0, -120, 0], opacity: [0.1, 0.4, 0.1] }}
                            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[40%] left-[50%] w-64 h-64 rounded-full border border-cyan-300/20"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 3: Top Wave to Next Section */}
            <div className="w-full relative h-[100px] bg-[#031525]">
                <motion.svg
                    className="absolute top-0 w-[200%] h-full text-[#0A2540]"
                    viewBox="0 0 1440 200" preserveAspectRatio="none"
                >
                    <motion.path
                        fill="currentColor"
                        animate={{ d: [bottomWave1, bottomWave2, bottomWave1] }}
                        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                    />
                </motion.svg>
            </div>

            {/* SECTION 4: Fluid Streams (Services) */}
            <section className="py-32 bg-[#031525]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-light text-center mb-24 text-blue-100">Currents of Return</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Sovereign Current", desc: "Federal bonds. The safest, most unyielding layer of the portfolio, ensuring absolute capital preservation against all market conditions." },
                            { title: "Corporate Stream", desc: "Tier-1 bank debt acting as a higher-yield tributary. Liquid, regulated, and consistently outperforming baseline cash rates." },
                            { title: "Equity Gulf", desc: "A carefully managed reservoir of Australian blue-chip equities providing both franked dividend flows and long-term capital expansion." }
                        ].map((stream, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-[#051C2F] p-12 rounded-[3rem] border border-blue-900/50 hover:border-cyan-500/50 transition-colors group relative overflow-hidden text-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                <div className="w-16 h-1 bg-cyan-500/50 mx-auto mb-8 rounded-full"></div>
                                <h3 className="text-3xl font-light mb-6 text-white">{stream.title}</h3>
                                <p className="text-blue-200/60 font-light leading-relaxed">{stream.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: Liquid Data Reveal */}
            <section className="py-0 relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Using a rich CSS gradient mimicking deep water */}
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-[#0A2540] to-black"></div>
                </div>

                <div className="relative z-10 w-full">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-[1px] bg-cyan-400 absolute top-1/2 left-0 -translate-y-1/2 z-0"
                    />

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                        {[
                            { val: "100%", lbl: "ASIC Regulated" },
                            { val: "$1.5B", lbl: "Assets Protected" },
                            { val: "AA-", lbl: "Avg Matrix Rating" },
                            { val: "0.0%", lbl: "Historical Default" },
                        ].map((metric, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 + (i * 0.2) }}
                                className="text-center bg-[#061A29]/80 backdrop-blur-md py-12 rounded-2xl border border-cyan-500/20"
                            >
                                <div className="text-4xl md:text-5xl font-light text-cyan-400 mb-2">{metric.val}</div>
                                <div className="text-sm tracking-widest uppercase text-blue-200/50">{metric.lbl}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: The Droplet (Testimonial) */}
            <section className="py-32 bg-[#051C2F]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="w-24 h-24 mx-auto mb-12 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0_20px_50px_rgba(34,211,238,0.3)] animate-[pulse_4s_infinite]"
                    />
                    <h2 className="text-3xl md:text-5xl font-serif italic text-blue-100 mb-10 leading-relaxed">
                        "Like water cutting through rock, our yield generation relies on persistence, time, and structural alignment, not aggressive force."
                    </h2>
                    <div className="uppercase tracking-widest text-sm text-cyan-500 font-bold">The Nobel Investment Committee</div>
                </div>
            </section>

            {/* SECTION 7: Bottom Wave Contact */}
            <section className="relative pt-12 pb-32 bg-[#061A29] overflow-hidden">
                {/* Inverse Wave */}
                <div className="absolute top-0 w-full overflow-hidden leading-none z-0 rotate-180">
                    <motion.svg
                        className="relative block w-[200%] h-[150px] text-[#051C2F]"
                        viewBox="0 0 1440 320" preserveAspectRatio="none"
                    >
                        <motion.path
                            fill="currentColor"
                            animate={{ d: [wavePath2, wavePath1, wavePath2] }}
                            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
                        />
                    </motion.svg>
                </div>

                <div className="relative z-10 max-w-lg mx-auto px-6 text-center mt-32">
                    <h2 className="text-4xl font-light mb-4">Make Waves.</h2>
                    <p className="text-blue-200/50 mb-12 font-light">Join an exclusive pool of Australian investors generating institutional-grade returns.</p>

                    <form className="space-y-4">
                        <input type="text" placeholder="Full Name" className="w-full bg-[#0A2540] border border-blue-900 px-6 py-4 rounded-full text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                        <input type="email" placeholder="Email Address" className="w-full bg-[#0A2540] border border-blue-900 px-6 py-4 rounded-full text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-cyan-600 text-[#061A29] font-bold px-6 py-4 rounded-full hover:bg-cyan-500 transition-colors shadow-[0_0_30px_rgba(8,145,178,0.4)]"
                        >
                            Cast Your Line
                        </motion.button>
                    </form>
                </div>
            </section>

        </div>
    );
}
