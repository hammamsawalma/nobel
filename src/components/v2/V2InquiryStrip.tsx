"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function V2InquiryStrip() {
    return (
        <section className="relative overflow-hidden bg-noble-obsidian border-t border-noble-gold-900/30 py-20 px-6 lg:px-12">
            {/* Radial glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(238,194,61,0.06)_0%,transparent_70%)] pointer-events-none" />

            {/* Subtle noise overlay — local CSS, no external request */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: '128px 128px' }} />

            <div className="max-w-5xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* Left: text content */}
                <div className="text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-[9px] uppercase tracking-[0.45em] text-noble-gold-600 font-bold block mb-4">
                            By Private Appointment Only
                        </span>
                        <h2 className="text-2xl md:text-4xl font-display italic text-noble-ivory leading-tight mb-4">
                            Begin the conversation.
                        </h2>
                        <p className="text-sm text-noble-slate max-w-md leading-relaxed">
                            Noble Rock accepts mandates exclusively from qualifying sophisticated investors. Engagements commence with a confidential, obligation-free consultation.
                        </p>
                    </motion.div>
                </div>

                {/* Right: dual CTAs */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row gap-4 shrink-0"
                >
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(238,194,61,0.25)" }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Link
                            href="/v2/portal"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-noble-gold-700/40 to-noble-gold-900/20 border border-noble-gold-500/70 text-noble-gold-300 px-10 py-4 text-[10px] font-bold tracking-[0.3em] uppercase rounded-xl hover:text-noble-gold-100 hover:border-noble-gold-400 transition-all duration-500"
                        >
                            Request Audience
                            <span className="text-noble-gold-500">→</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Link
                            href="/v2/insights"
                            className="inline-flex items-center justify-center gap-2 border border-noble-slate/25 text-noble-slate px-10 py-4 text-[10px] font-bold tracking-[0.3em] uppercase rounded-xl hover:text-noble-ivory hover:border-noble-slate/50 transition-all duration-500"
                        >
                            Read The Journal
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated gold line divider at bottom */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-[1px] origin-left"
                style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(238,194,61,0.3) 30%, rgba(238,194,61,0.6) 50%, rgba(238,194,61,0.3) 70%, transparent 100%)"
                }}
            />
        </section>
    );
}
