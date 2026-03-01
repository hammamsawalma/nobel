"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { motion, Transition } from 'framer-motion';

export default function Variant9OutbackHorizon() {

    // Spring configuration for high-velocity, elastic animations
    const snapSpring: Transition = {
        type: "spring",
        stiffness: 400,
        damping: 15,
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
        hidden: { x: 200, opacity: 0, scale: 0.8 },
        show: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: snapSpring
        }
    };

    return (
        <div className="bg-[#1C0F08] text-[#EAD5C5] font-sans selection:bg-[#E0522B] selection:text-white overflow-x-hidden min-h-screen">
            <Header />

            {/* SECTION 1: Elastic Hero */}
            <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 relative overflow-hidden">
                {/* Abstract Sun / Background Element */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ ...snapSpring, delay: 0.5 }}
                    className="absolute top-1/2 right-[-20%] w-[800px] h-[800px] bg-[#E0522B] rounded-full filter blur-[100px] opacity-20 -translate-y-1/2"
                />

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ x: -1000, skewX: 20 }}
                        animate={{ x: 0, skewX: 0 }}
                        transition={snapSpring}
                        className="overflow-hidden mb-6"
                    >
                        <div className="text-[#E0522B] tracking-[0.3em] font-bold text-sm uppercase">Enduring Capital</div>
                    </motion.div>

                    <motion.h1
                        initial={{ x: -1000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ...snapSpring, delay: 0.1 }}
                        className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 text-white relative"
                    >
                        Outback <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0522B] to-[#F28C28]">Horizon.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ...snapSpring, delay: 0.3 }}
                        className="text-2xl md:text-3xl font-light text-[#C4A48A] max-w-2xl leading-relaxed"
                    >
                        Wealth management engineered with the permanence and vast scale of the Australian interior.
                    </motion.p>
                </div>
            </section>

            {/* SECTION 2: Expansive Philosophy */}
            <section className="py-32 bg-[#2D1B11] border-y border-[#3E2517] relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring}
                        className="h-full w-4 bg-[#E0522B] origin-top hidden lg:block absolute left-12 top-0"
                    />

                    <div className="col-span-1 lg:pl-16">
                        <motion.h2
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={snapSpring}
                            className="text-5xl font-bold mb-8 text-white"
                        >
                            Built for the Long Run.
                        </motion.h2>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ...snapSpring, delay: 0.1 }}
                            className="text-xl text-[#C4A48A] leading-relaxed mb-6"
                        >
                            In the outback, survival requires preparation, structural integrity, and deep reserves. We apply this exact philosophy to your capital.
                        </motion.p>
                    </div>

                    <div className="col-span-1">
                        <motion.div
                            variants={elasticStagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {['Unshakable fixed income yields.', 'ASIC-fortified custodial accounts.', 'Zero-commission fiduciary advisory.'].map((text, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemElastic}
                                    className="bg-[#1C0F08] p-6 border-l-4 border-[#E0522B] shadow-2xl"
                                >
                                    <p className="text-xl font-medium">{text}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Horizon Slider */}
            <section className="py-32 bg-[#1C0F08] overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={snapSpring}
                    className="pl-6 lg:pl-12 mb-16"
                >
                    <h2 className="text-4xl font-bold text-white uppercase tracking-widest">Asset Vehicles</h2>
                </motion.div>

                {/* Extends off-screen right */}
                <motion.div
                    variants={elasticStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex gap-8 px-6 lg:px-12 w-max"
                >
                    {[
                        { id: "SV-01", title: "Sovereign Debt", tag: "Absolute Safety" },
                        { id: "CP-02", title: "Corporate Notes", tag: "Spread Optimization" },
                        { id: "EQ-03", title: "Yield Equities", tag: "Inflation Hedge" },
                        { id: "LQ-04", title: "Cash Reserves", tag: "Deep Liquidity" }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            variants={itemElastic}
                            whileHover={{ scale: 1.05, y: -20 }}
                            transition={snapSpring}
                            className="w-[400px] h-[500px] bg-[#2D1B11] border border-[#3E2517] p-10 flex flex-col justify-between group relative overflow-hidden cursor-crosshair"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E0522B] rounded-full blur-[50px] opacity-0 group-hover:opacity-30 transition-opacity"></div>

                            <div>
                                <div className="text-[#E0522B] font-mono text-xl mb-4">{card.id}</div>
                                <h3 className="text-4xl font-bold text-white">{card.title}</h3>
                            </div>

                            <div className="flex justify-between items-center bg-[#1C0F08] p-4 font-mono text-sm uppercase text-[#C4A48A]">
                                <span>{card.tag}</span>
                                <span>→</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* SECTION 4: High-Velocity Data Impact */}
            <section className="py-32 bg-[#E0522B] text-[#1C0F08] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { raw: "1.5", unit: "B", lbl: "Assets Under Custody" },
                            { raw: "AA", unit: "+", lbl: "Target Credit Rating" },
                            { raw: "100", unit: "%", lbl: "Aligned Fiduciary" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, rotate: -15 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ ...snapSpring, delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-8xl md:text-[150px] font-black tracking-tighter leading-none mb-4">
                                    {stat.raw}<span className="text-[#8B2B12]">{stat.unit}</span>
                                </div>
                                <div className="text-xl font-bold uppercase tracking-widest">{stat.lbl}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: The Red Center (Approach) */}
            <section className="py-32 bg-[#2D1B11] relative">
                {/* Diagonal cut background */}
                <div className="absolute top-0 left-0 w-full h-[150px] bg-[#E0522B]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
                    <div>
                        <motion.h2
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={snapSpring}
                            className="text-5xl md:text-6xl font-black text-white mb-8"
                        >
                            The Red Center.
                        </motion.h2>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ...snapSpring, delay: 0.1 }}
                            className="text-2xl text-[#C4A48A] leading-relaxed mb-8"
                        >
                            At the core of every portfolio is a fiercely protected allocation of Australian Commonwealth Bonds.
                        </motion.p>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ...snapSpring, delay: 0.2 }}
                            className="text-xl text-[#A68669] leading-relaxed"
                        >
                            This acts as the immovable rock against which all market volatility crashes and breaks. Once the core is secure, we hunt for yield in the periphery.
                        </motion.p>
                    </div>

                    <div className="flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ...snapSpring, delay: 0.3 }}
                            className="w-[300px] h-[300px] bg-[#E0522B] rounded shadow-[0_40px_100px_rgba(224,82,43,0.4)] rotate-45 flex items-center justify-center"
                        >
                            <div className="w-[150px] h-[150px] bg-[#1C0F08] border-4 border-[#F28C28]"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Signal Terminal */}
            <section className="py-24 bg-[#1C0F08]">
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={snapSpring}
                    className="max-w-4xl mx-auto px-6 text-center border-y-2 border-[#E0522B] py-16"
                >
                    <h2 className="text-4xl font-bold mb-4 font-mono text-[#E0522B] uppercase">System Integrity Check</h2>
                    <p className="text-xl text-[#C4A48A] mb-8">All custodial frameworks operating optimally. Ready for capital integration.</p>
                    <div className="flex justify-center gap-4">
                        <span className="w-16 h-2 bg-[#E0522B]"></span>
                        <span className="w-4 h-2 bg-[#E0522B]"></span>
                        <span className="w-2 h-2 bg-[#E0522B]"></span>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 7: Elastic Contact Form */}
            <section className="py-32 bg-[#2D1B11]">
                <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring}
                    >
                        <h2 className="text-6xl font-black text-white mb-6">Forge Ahead.</h2>
                        <p className="text-2xl text-[#C4A48A]">Partner with Nobel to cement your financial legacy.</p>
                    </motion.div>

                    <motion.form
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={snapSpring}
                        className="bg-[#1C0F08] p-10 border-t-8 border-[#E0522B] shadow-2xl space-y-6 flex flex-col"
                    >
                        <div>
                            <label className="block text-sm font-bold text-[#E0522B] uppercase mb-2">Given Name</label>
                            <input type="text" className="w-full bg-[#2D1B11] border-none text-white p-4 focus:ring-2 focus:ring-[#E0522B] outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-[#E0522B] uppercase mb-2">Comms (Email)</label>
                            <input type="email" className="w-full bg-[#2D1B11] border-none text-white p-4 focus:ring-2 focus:ring-[#E0522B] outline-none" />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            transition={snapSpring}
                            className="bg-[#E0522B] text-white font-black uppercase tracking-widest p-6 mt-4 hover:bg-[#F28C28] transition-colors"
                        >
                            Launch Request
                        </motion.button>
                    </motion.form>

                </div>
            </section>

                    <Footer />
        </div>
    );
}
