"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Globe2, Landmark, TrendingUp } from "lucide-react";

const TRUST_LOGOS = [
    { name: "Bloomberg", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "Financial Times", icon: <Landmark className="w-6 h-6" /> },
    { name: "Wall Street Journal", icon: <Globe2 className="w-6 h-6" /> },
    { name: "Australian Fin. Review", icon: <Building2 className="w-6 h-6" /> },
    { name: "Reuters", icon: <Briefcase className="w-6 h-6" /> },
];

export default function TrustMarquee() {
    return (
        <section className="py-6 bg-white border-y border-gray-200 overflow-hidden relative flex items-center">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex w-full overflow-hidden">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                    className="flex flex-none gap-24 pr-24 items-center whitespace-nowrap"
                >
                    {/* Double the list for seamless looping */}
                    {[...TRUST_LOGOS, ...TRUST_LOGOS, ...TRUST_LOGOS, ...TRUST_LOGOS].map((logo, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-400 grayscale hover:grayscale-0 hover:text-[#0A1A3A] transition-all cursor-default">
                            {logo.icon}
                            <span className="text-xl font-bold tracking-tight">{logo.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
