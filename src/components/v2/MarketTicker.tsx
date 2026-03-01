"use client";

import { motion } from "framer-motion";

const tickerItems = [
    { label: "ASX 200", value: "8,143.20", change: "+0.45%" },
    { label: "Aust Govt 10Y", value: "4.12%", change: "-0.02" },
    { label: "AUD/USD", value: "0.6580", change: "+0.12%" },
    { label: "Global High Yield", value: "7.84%", change: "+0.05" },
    { label: "Cash Rate Target", value: "4.35%", change: "0.00" },
    { label: "Corporate A-Grade", value: "5.21%", change: "-0.01" },
];

export default function MarketTicker() {
    return (
        <div className="w-full bg-[#0A1A3A] border-y border-[#1A2A4A] overflow-hidden py-3 font-mono text-xs flex">
            {/* 
              We use two motion divs translating horizontally to create an infinite loop.
            */}
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 30,
                    repeat: Infinity,
                }}
            >
                {/* We render the items twice to ensure a seamless loop */}
                {[...tickerItems, ...tickerItems].map((item, i) => (
                    <div key={i} className="flex items-center px-8 border-r border-[#1A2A4A]/50 last:border-none">
                        <span className="text-gray-400 mr-3">{item.label}</span>
                        <span className="text-white font-bold mr-3">{item.value}</span>
                        <span className={item.change.startsWith('+') ? 'text-green-500' : item.change.startsWith('-') ? 'text-red-500' : 'text-gray-500'}>
                            {item.change}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
