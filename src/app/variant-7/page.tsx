"use client";

import { motion } from 'framer-motion';

export default function Variant7MonolithicTrust() {

    // Array of sections, we map over these to create the stacked sticky effect
    const sections = [
        {
            id: "01",
            title: "Monolithic Trust.",
            subtitle: "Institutional Architecture",
            content: "Nobel manages capital with the structural permanence of a physical vault. No speculation. Absolute preservation.",
            bg: "bg-zinc-100",
            text: "text-zinc-900",
            height: "h-screen"
        },
        {
            id: "02",
            title: "The Foundation",
            subtitle: "Custodial Isolation",
            content: "Before any yield generation occurs, the foundation must be poured. Client assets are held in segregated, bankruptcy-remote trust facilities regulated directly by ASIC.",
            bg: "bg-zinc-200",
            text: "text-zinc-800",
            height: "min-h-[80vh]"
        },
        {
            id: "03",
            title: "Primary Columns",
            subtitle: "Sovereign & Tier-1 Debt",
            content: "The load-bearing pillars of our portfolios consist strictly of Australian Commonwealth Government Bonds and Tier-1 banking subordinated debt.",
            bg: "bg-zinc-300",
            text: "text-zinc-900",
            height: "min-h-[80vh]"
        },
        {
            id: "04",
            title: "The Canopy",
            subtitle: "Adaptive Equities",
            content: "Resting upon the secure foundation, a highly selective layer of Australian blue-chip equities provides dividend yield and inflation protection.",
            bg: "bg-zinc-400",
            text: "text-zinc-900",
            height: "min-h-[80vh]"
        },
        {
            id: "05",
            title: "Stress Testing",
            subtitle: "Quantitative Validation",
            content: "Every structural component is subjected to algorithmic stress modeling, simulating historical market crashes to mandate survival.",
            bg: "bg-zinc-800",
            text: "text-zinc-100",
            height: "min-h-[80vh]"
        },
        {
            id: "06",
            title: "Scale & Mass",
            subtitle: "$1.5B AUM",
            content: "Our mass provides gravity. We leverage our institutional size to secure wholesale fixed-income pricing typically unavailable to the retail market.",
            bg: "bg-zinc-900",
            text: "text-zinc-100",
            height: "min-h-[80vh]"
        },
        {
            id: "07",
            title: "Commission Architecture",
            subtitle: "Initialize Contact",
            content: "Begin construction on your legacy. Secure an appointment with a Nobel fiduciary architect.",
            bg: "bg-black",
            text: "text-white",
            height: "min-h-[80vh]"
        }
    ];

    return (
        <div className="font-sans antialiased bg-zinc-100 text-zinc-900 selection:bg-zinc-800 selection:text-white pb-[10vh]">

            {sections.map((sec, index) => {
                // We use sticky positioning with a dynamically increasing `top` value
                // so they stack on each other like a deck of cards rather than completely overlapping
                const topOffset = index * 40;

                return (
                    <motion.section
                        key={sec.id}
                        className={`sticky w-full ${sec.height} ${sec.bg} ${sec.text} flex flex-col justify-center px-6 lg:px-24 border-t border-zinc-950/10 shadow-[0_-20px_50px_rgba(0,0,0,0.15)]`}
                        style={{ top: `${topOffset}px`, zIndex: index }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">

                            <div className="md:col-span-3 pb-4">
                                <div className="text-8xl md:text-[120px] font-black tracking-tighter opacity-10 leading-none">
                                    {sec.id}
                                </div>
                                <div className="text-sm font-bold tracking-widest uppercase mt-4">
                                    {sec.subtitle}
                                </div>
                            </div>

                            <div className="md:col-span-9 pb-12">
                                <h2 className={`text-6xl md:text-8xl font-bold tracking-tighter mb-8 ${index === sections.length - 1 ? 'text-white' : 'text-zinc-900'}`}>
                                    {sec.title}
                                </h2>
                                <p className="text-2xl md:text-3xl font-light leading-relaxed max-w-3xl">
                                    {sec.content}
                                </p>

                                {/* Form specifically for the final section */}
                                {index === sections.length - 1 && (
                                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                                        <input type="text" placeholder="Name" className="bg-zinc-900 text-white px-6 py-4 outline-none border border-zinc-800 focus:border-zinc-500 transition-colors" />
                                        <input type="email" placeholder="Email" className="bg-zinc-900 text-white px-6 py-4 outline-none border border-zinc-800 focus:border-zinc-500 transition-colors" />
                                        <button className="sm:col-span-2 bg-white text-black font-bold uppercase tracking-widest py-5 hover:bg-zinc-300 transition-colors">
                                            Request Blueprint
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>
                    </motion.section>
                );
            })}

        </div>
    );
}
