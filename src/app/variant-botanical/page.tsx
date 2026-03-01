"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function BotanicalGrowthVariant() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Parallax zoom for Hero
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
    // Organic rotation for backgrounds
    const blobRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

    return (
        <div className="font-sans bg-[#F7F9F6] text-[#2C3E33] overflow-x-hidden min-h-screen" ref={containerRef}>

            {/* SECTION 1: Hero Section - Organic Zoom */}
            <section className="relative min-h-[90vh] flex items-center px-4 overflow-hidden rounded-b-[4rem] sm:rounded-b-[8rem] bg-white shadow-sm mb-12">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-20">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="max-w-xl"
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-[#E8F0E6] text-[#3A5A43] font-medium text-sm mb-6 border border-[#3A5A43]/10">
                            Sustainable Wealth Generation
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif text-[#1C2C22] mb-6 leading-tight">
                            Wealth that <span className="text-[#D4A373] italic">thrives</span> naturally.
                        </h1>
                        <p className="text-xl text-[#4A5D50] leading-relaxed mb-10">
                            Just as the Australian flora adapts and endures, our capital preservation strategies are designed to protect and organically grow your retirement wealth.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#3A5A43] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2C4A33] transition-colors shadow-xl shadow-[#3A5A43]/20 flex items-center gap-2"
                        >
                            Cultivate Your Portfolio
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </motion.button>
                    </motion.div>

                    {/* Masked Hero Image with scale transformation */}
                    <div className="relative h-[500px] w-full lg:h-[700px] overflow-hidden rounded-[3rem] sm:rounded-[6rem] lg:rounded-tr-[10rem] lg:rounded-bl-[10rem] shadow-2xl">
                        <motion.div style={{ scale: heroScale }} className="w-full h-full relative">
                            <Image
                                src="/images/botanical_growth.png"
                                alt="Nobel Sustainable Wealth Management Office"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-[#3A5A43]/10 mix-blend-overlay"></div>
                        </motion.div>
                    </div>

                </div>

                {/* Soft rotating blob background shapes */}
                <motion.div
                    style={{ rotate: blobRotate }}
                    className="absolute top-0 right-1/2 w-[800px] h-[800px] bg-[#E8F0E6]/80 rounded-[40%_60%_70%_30%] mix-blend-multiply filter blur-3xl z-0 transform translate-x-1/2 -translate-y-1/2"
                ></motion.div>
            </section>

            {/* SECTION 2: Sticky Vertical Timeline (The Ethos) */}
            <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 relative">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3 relative">
                        <div className="sticky top-32">
                            <h2 className="text-4xl font-serif text-[#1C2C22] mb-6">The Cycle of Capital</h2>
                            <p className="text-lg text-[#4A5D50]">A transparent, nurturing approach to fixed income and safe capital allocation tailored for retirees.</p>
                        </div>
                    </div>

                    <div className="md:w-2/3 border-l-2 border-[#D4A373]/30 pl-8 space-y-24 relative">
                        {/* Timeline items */}
                        {[
                            { icon: "🌱", title: "1. Seed (Preservation)", desc: "Securing capital in high-grade Australian fixed income to prevent principal erosion. We treat your initial investment as the vital seed from which all future security grows." },
                            { icon: "🌿", title: "2. Root (Stability)", desc: "Establishing deep foundations through ASIC-regulated custodial structures. Our compliance and regulatory framework ensures your assets are fortified against market volatility and external threats." },
                            { icon: "🌳", title: "3. Canopy (Yield)", desc: "Harvesting predictable, periodic returns to fund your retirement lifestyle. Once the roots are secure, the canopy provides the shade and sustenance required for a comfortable future." }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[45px] top-4 w-6 h-6 bg-[#D4A373] text-[#F7F9F6] rounded-full border-4 border-[#F7F9F6] shadow-sm flex items-center justify-center text-[10px]">&quot;</div>
                                <div className="text-4xl mb-4 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm text-[#3A5A43] border border-[#E8F0E6]">{step.icon}</div>
                                <h3 className="text-3xl font-serif mb-4 text-[#1C2C22]">{step.title}</h3>
                                <p className="text-lg text-[#4A5D50] leading-relaxed max-w-xl">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: Blob SVG Separator */}
            <div className="w-full relative h-[100px] overflow-hidden">
                <svg className="absolute w-full h-full text-[#3A5A43]" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
                    <path d="M0,0 C320,100 420,0 740,50 C1060,100 1120,0 1440,50 L1440,100 L0,100 Z"></path>
                </svg>
            </div>

            {/* SECTION 4: The Green Ledger (Data) */}
            <section className="py-24 bg-[#3A5A43] text-[#F7F9F6] relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Rooted in <br /><span className="text-[#D4A373] italic">Australian Soil.</span></h2>
                        <p className="text-xl text-[#B9CBBF] mb-8 font-light max-w-md leading-relaxed">
                            Your wealth is managed locally, regulated strictly, and invested sustainably.
                        </p>
                        <button className="border border-[#D4A373] text-[#D4A373] px-8 py-4 rounded-full hover:bg-[#D4A373] hover:text-[#1C2C22] transition-colors font-medium">
                            Review our ASIC Credentials
                        </button>
                    </motion.div>

                    <div className="md:w-1/2 grid grid-cols-2 gap-6 w-full">
                        {[
                            { val: "$1.5B", lbl: "Assets Protected" },
                            { val: "12 Yrs", lbl: "Stable Operations" },
                            { val: "100%", lbl: "Australian Focus", colSpan: true }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className={`bg-[#2C4A33] p-8 rounded-[2rem] text-center border border-[#4A5D50] hover:border-[#D4A373] transition-colors ${stat.colSpan ? 'col-span-2' : ''}`}
                            >
                                <div className="text-4xl md:text-5xl font-serif text-[#D4A373] mb-3">{stat.val}</div>
                                <div className="text-[#B9CBBF] tracking-wide text-sm uppercase">{stat.lbl}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* Organic SVG Background Graphic */}
                <motion.div
                    style={{ rotate: blobRotate, scale: 1.5 }}
                    className="absolute top-1/2 right-0 w-[600px] h-[600px] border-[40px] border-[#2C4A33] rounded-[30%_70%_50%_50%] opacity-20 pointer-events-none transform translate-x-1/3 -translate-y-1/2"
                />
            </section>

            {/* SECTION 5: Sustainable Selection Grid */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
                    <h2 className="text-4xl font-serif text-[#1C2C22] mb-4">Investment Species</h2>
                    <p className="text-[#4A5D50] max-w-2xl mx-auto">Categorized streams of yield generation based on varying degrees of organic risk.</p>
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Sovereign Pines", desc: "Federal & State Bonds. Deep-rooted, virtually immune to market drought." },
                        { title: "Corporate Eucalypts", desc: "Tier-1 Corporate Debt. Higher yield canopies designed to weather economic shifts." },
                        { title: "Blue-Chip Banksias", desc: "Dividend-yielding Equities. The vibrant, blooming edge of your growth strategy." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#F7F9F6] rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl p-10 border border-[#E8F0E6] shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-[#3A5A43] rounded-full text-white flex items-center justify-center mb-6 font-serif italic text-xl">{i + 1}</div>
                            <h3 className="text-2xl font-serif text-[#1C2C22] mb-4">{item.title}</h3>
                            <p className="text-[#4A5D50] leading-relaxed mb-8">{item.desc}</p>
                            <button className="text-[#3A5A43] font-medium hover:text-[#D4A373] transition-colors border-b border-current pb-1">
                                Explore Strategy
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION 6: Advisory Testimonial */}
            <section className="py-24 bg-[#E8F0E6] rounded-[3rem] mx-4 sm:mx-8 mb-24 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-7xl text-[#D4A373] font-serif mb-6 leading-none">"</div>
                    <p className="text-3xl md:text-4xl font-serif text-[#2C3E33] leading-relaxed mb-12 italic">
                        For our senior clients, wealth management isn't about chasing the highest branch; it's about ensuring the roots are strong enough to weather any storm.
                    </p>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#3A5A43] font-bold font-serif text-2xl border-2 border-[#D4A373] mb-4 shadow-lg shadow-[#D4A373]/20">
                            SF
                        </div>
                        <p className="font-bold text-[#1C2C22] text-xl">Sarah Faulkner</p>
                        <p className="text-[#4A5D50]">Principal Fiduciary Advisor</p>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 7: Natural Contact Form */}
            <section className="pb-32 pt-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto bg-white p-12 rounded-[3rem] shadow-xl shadow-[#3A5A43]/5 border border-[#E8F0E6] text-center"
                >
                    <h2 className="text-3xl font-serif text-[#1C2C22] mb-4">Plant the Seed</h2>
                    <p className="text-[#4A5D50] mb-8">Begin a conversation about protecting your retirement capital.</p>
                    <div className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full bg-[#F7F9F6] border border-transparent px-6 py-4 rounded-2xl focus:border-[#3A5A43] outline-none text-[#2C3E33] transition-colors" />
                        <input type="email" placeholder="Your Email" className="w-full bg-[#F7F9F6] border border-transparent px-6 py-4 rounded-2xl focus:border-[#3A5A43] outline-none text-[#2C3E33] transition-colors" />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#3A5A43] text-white px-6 py-4 rounded-2xl font-medium hover:bg-[#2C4A33] transition-colors mt-6 shadow-md"
                        >
                            Request Information Kit
                        </motion.button>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}
