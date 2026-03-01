"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CoastalWealthVariant() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Parallax effects
    const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const waveX = useTransform(scrollYProgress, [0.1, 0.4], ["-5%", "5%"]);

    return (
        <div className="font-sans bg-white text-slate-800 overflow-x-hidden" ref={containerRef}>
            <Header />

            {/* SECTION 1: Hero Section - Coastal Parallax */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: heroY, opacity: opacityFade }} className="absolute inset-0 z-0">
                    <Image
                        src="/images/v1_coastal_wealth_1_1772325682299.png"
                        alt="Nobel Coastal Wealth Management Office"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                {/* Soft elegant gradient overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/80 to-blue-50/20 backdrop-blur-[2px]"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <span className="text-blue-600 font-medium tracking-[0.2em] uppercase text-sm mb-6 block drop-shadow-sm">Coastal Capital</span>
                        <h1 className="text-6xl md:text-8xl font-light text-slate-900 leading-[1.1] mb-8 tracking-tight">
                            Fluid wealth <br /><span className="italic text-blue-800">steady horizon.</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 font-light max-w-xl leading-relaxed">
                            Australian wealth management designed for absolute transparency. Capital protection mapped to your coastal lifestyle.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-colors">
                                Begin Your Voyage
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white/50 backdrop-blur text-blue-900 border border-blue-100 px-8 py-4 rounded-full font-medium hover:bg-white transition-colors">
                                Our Philosophy
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: Sticky Philosophy */}
            <section className="relative bg-slate-50 py-32 z-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-16 relative">

                    <div className="md:w-1/2 relative">
                        <div className="sticky top-32">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="text-4xl md:text-5xl font-light text-slate-900 mb-6"
                            >
                                The Current of <span className="text-blue-600 italic font-serif">Capital</span>
                            </motion.h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Just as the tide is predictable, so too should be your returns. We specialize in high-grade Australian fixed income, ensuring that your wealth is insulated from volatile storms.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/2 space-y-8">
                        {[1, 2, 3].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-10 rounded-3xl shadow-sm border border-blue-50 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700 ease-out z-0"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl text-slate-900 mb-3 font-medium">Clear Trajectory 0{item}</h3>
                                    <p className="text-slate-500 font-light leading-relaxed">By maintaining a minimalist approach to portfolio construction, we eliminate the noise and deliver pristine, oceanic clarity to your financial future.</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SECTION 3: Wealth Instruments (Grid + Reveal) */}
            <section className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light text-slate-900"
                    >
                        Wealth Instruments
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-[2px] bg-blue-600 mx-auto mt-8 relative"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Coastal SMSF", desc: "Self-managed super fund custody tailored for property and bond enthusiasts." },
                        { title: "Harbour Capital", desc: "Corporate bond portfolios focusing on Tier-1 Australian lending institutions." },
                        { title: "Horizon Equities", desc: "Blue-chip, dividend-yielding Australian stocks for long-term growth." }
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group cursor-pointer relative"
                        >
                            <div className="aspect-[4/5] bg-slate-50 rounded-[2rem] p-10 flex flex-col justify-end border border-transparent hover:border-blue-100 transition-colors overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <h3 className="text-3xl text-slate-900 mb-4 font-light relative z-10">{service.title}</h3>
                                <p className="text-slate-600 font-light relative z-10 leading-relaxed">{service.desc}</p>
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mt-8 relative z-10"
                                    whileHover={{ x: 10 }}
                                >
                                    →
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION 4: SVG Curved Separation Wave */}
            <div className="w-full relative h-[150px] -mb-1 overflow-hidden bg-white">
                <motion.svg
                    style={{ x: waveX }}
                    className="absolute bottom-0 w-[200%] h-full text-blue-50"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    fill="currentColor"
                >
                    <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,197.3C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </motion.svg>
            </div>

            {/* SECTION 5: Allocation Data Counters */}
            <section className="py-24 bg-blue-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-blue-200/50">
                        {[
                            { id: "15+", label: "Years Navigating" },
                            { id: "$1.2B", label: "Custodial Assets" },
                            { id: "100%", label: "Australian Owned" },
                            { id: "AA", label: "Avg Credit Rating" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 + 0.2 }}
                                className="text-center px-4"
                            >
                                <div className="text-5xl md:text-6xl font-light text-blue-600 mb-4">{stat.id}</div>
                                <div className="text-xs tracking-[0.2em] uppercase text-slate-500 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: The Architect (Team) */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative shadow-2xl">
                            <Image
                                src="/images/v1_coastal_wealth_2_1772325701624.png"
                                alt="Nobel Financial Architect"
                                fill
                                className="object-cover object-right filter grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
                        </div>
                    </motion.div>
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-light mb-6">Designed by Fiduciaries.</h2>
                        <p className="text-lg text-slate-600 mb-8 font-light leading-relaxed">Our advisors do not operate on commissions. We are architects of preservation, legally and ethically bound to prioritize the longevity of your coastal lifestyle above all else.</p>
                        <motion.button whileHover={{ x: 10 }} className="text-blue-600 font-medium tracking-wide border-b border-blue-600 pb-1 flex items-center gap-2">
                            Meet the Crew <span className="text-xl">→</span>
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Anchor Contact */}
            <section className="relative py-32 bg-slate-900 border-t-8 border-blue-600">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 text-white">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light mb-8"
                    >
                        Ready to drop anchor?
                    </motion.h2>
                    <p className="text-xl text-slate-400 mb-12 font-light">
                        Schedule a confidential dialogue with our advisory team in Sydney.
                    </p>
                    <motion.form
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="max-w-lg mx-auto space-y-4"
                    >
                        <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-full bg-slate-800/50 border border-slate-700 focus:outline-none focus:border-blue-400 focus:bg-slate-800 transition text-white placeholder-slate-500" />
                        <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-full bg-slate-800/50 border border-slate-700 focus:outline-none focus:border-blue-400 focus:bg-slate-800 transition text-white placeholder-slate-500" />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-blue-600 text-white font-medium px-6 py-4 rounded-full hover:bg-blue-500 transition shadow-lg shadow-blue-900/50"
                        >
                            Request Advisory Call
                        </motion.button>
                    </motion.form>
                </div>
            </section>

                    <Footer />
        </div>
    );
}
