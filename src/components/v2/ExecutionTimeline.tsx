"use client";

import { motion } from "framer-motion";
import { ClipboardList, Cpu, ShieldCheck, Activity } from "lucide-react";

export default function ExecutionTimeline() {
    const steps = [
        {
            title: "Phase I: Initial Audit",
            description: "A comprehensive qualitative assessment of your current asset positioning, liquidity needs, and risk threshold.",
            icon: <ClipboardList className="w-8 h-8 text-white" />
        },
        {
            title: "Phase II: Strategy Engineering",
            description: "Algorithmic alignment of your financial trajectory with our proprietary fixed-income and equities matrices.",
            icon: <Cpu className="w-8 h-8 text-white" />
        },
        {
            title: "Phase III: Custodial Alignment",
            description: "Establishment of entirely segregated, Tier-1 custodial accounts to guarantee absolute transparency and security.",
            icon: <ShieldCheck className="w-8 h-8 text-white" />
        },
        {
            title: "Phase IV: Active Deployment",
            description: "Capital is deployed with precision. You receive immediate, 24/7 access to our real-time performance portal.",
            icon: <Activity className="w-8 h-8 text-white" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
    };

    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden border-y border-gray-200">
            {/* Background Accent */}
            <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-gray-50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-end"
                >
                    <div>
                        <div className="text-blue-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4">Onboarding Architecture</div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A1A3A] leading-tight">The Execution <br />Protocol.</h2>
                    </div>
                    <div>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium max-w-lg">
                            We have engineered a frictionless, highly transparent onboarding sequence designed to deploy your capital with precision while maintaining paramount operational security.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative"
                >
                    {/* Vertical Line */}
                    <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 md:-translate-x-1/2"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants as any}
                            className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-16 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            <div className="w-full md:w-5/12 hidden md:block"></div>

                            {/* Center Node */}
                            <div className="absolute left-0 md:left-1/2 z-10 w-20 h-20 bg-[#0A1A3A] text-white rounded-full border-[6px] border-white shadow-xl flex items-center justify-center -translate-x-0 md:-translate-x-1/2 ring-4 ring-gray-50">
                                {step.icon}
                            </div>

                            {/* Content Card */}
                            <div className={`w-full md:w-5/12 pl-24 md:pl-0 mt-6 md:mt-0 ${index % 2 === 0 ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"
                                }`}>
                                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 relative group overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out opacity-5"></div>
                                    <div className="text-[#0A1A3A] font-bold text-xs uppercase tracking-widest mb-3 opacity-50">Step 0{index + 1}</div>
                                    <h3 className="text-xl md:text-2xl font-black text-[#0A1A3A] mb-3 md:mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                                    <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
