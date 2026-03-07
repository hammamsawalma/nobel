"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_DATA = [
    {
        question: "How does Nobel Rock manage downside protection in volatile markets?",
        answer: "We deploy asymmetric risk protocols heavily weighted in investment-grade sovereign debt and corporate hybrids. This establishes a high-yield 'floor' that mathematically cushions equity volatility before it impacts your principal."
    },
    {
        question: "Are your custodial accounts fully segregated?",
        answer: "Yes. Absolutely. We utilize only Tier-1 global custodians. Your capital remains held in your entity’s name, structurally segregated from Nobel Rock's balance sheets to guarantee absolute security under ASIC regulations."
    },
    {
        question: "What is the typical onboarding timeline?",
        answer: "Upon completing our Initial Audit, capital deployment strategy engineering takes 14 days. Once approved, custodial alignments and active allocation happen concurrently within 48 hours."
    },
    {
        question: "How do you align with my specific risk tolerance?",
        answer: "We do not use generalized models. Every deployment is a proprietary, tailored synthesis of our fixed-income Foundation Matrix and Equities Advisory Node, mathematically weighted to your exact specifications."
    }
];

export default function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 bg-white border-y border-gray-100">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-[#0A1A3A] mb-4 border-l-[4px] md:border-l-[6px] border-blue-600 pl-4 md:pl-6">Deep Due Diligence.</h2>
                    <p className="text-lg md:text-xl text-gray-500 font-medium pl-6 md:pl-8">Operational transparency is our foremost prerequisite.</p>
                </div>

                <div className="space-y-4">
                    {FAQ_DATA.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`border ${isOpen ? 'border-blue-600 shadow-lg' : 'border-gray-200'} rounded-2xl overflow-hidden transition-all duration-300`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center p-6 bg-white text-left focus:outline-none"
                                >
                                    <span className="text-lg md:text-xl font-bold text-[#0A1A3A] pr-8">{faq.question}</span>
                                    <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 text-[#0A1A3A]'}`}>
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-gray-600 leading-relaxed font-medium">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
