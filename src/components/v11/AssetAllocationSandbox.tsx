"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const RISK_PROFILES = [
    {
        name: "Capital Preservation (Low Risk)",
        data: [
            { name: "Sovereign Debt", value: 65, color: "#1e3a8a" }, // blue-900
            { name: "Investment Grade Corporate", value: 20, color: "#3b82f6" }, // blue-500
            { name: "Defensive Equities", value: 10, color: "#93c5fd" }, // blue-300
            { name: "Cash Equivalents", value: 5, color: "#e5e7eb" }, // gray-200
        ]
    },
    {
        name: "Balanced Yield (Moderate Risk)",
        data: [
            { name: "Sovereign Debt", value: 30, color: "#1e3a8a" },
            { name: "High Yield Corporate", value: 25, color: "#3b82f6" },
            { name: "Core Equities", value: 40, color: "#93c5fd" },
            { name: "Cash Equivalents", value: 5, color: "#e5e7eb" },
        ]
    },
    {
        name: "Ascendant Growth (High Risk)",
        data: [
            { name: "Sovereign Debt", value: 10, color: "#1e3a8a" },
            { name: "High Yield Corporate", value: 15, color: "#3b82f6" },
            { name: "Growth Equities", value: 65, color: "#93c5fd" },
            { name: "Alternative Assets", value: 10, color: "#e5e7eb" },
        ]
    }
];

export default function AssetAllocationSandbox() {
    const [sliderValue, setSliderValue] = useState(1); // 0, 1, or 2

    const currentProfile = RISK_PROFILES[sliderValue];

    return (
        <section className="py-32 bg-[#0A1A3A] text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Text Block */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 lg:col-start-1 lg:row-start-1 self-end"
                >
                    <div className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Interactive Matrix</div>
                    <h2 className="text-5xl font-black mb-6">Dynamic Allocation Simulator.</h2>
                    <p className="text-gray-300 mb-0 lg:mb-12 text-lg max-w-lg leading-relaxed">
                        Slide the control matrix to visualize how Nobel Rock dynamically recalibrates absolute asset allocation in real-time to match your exact risk-to-reward architecture.
                    </p>
                </motion.div>

                {/* Chart Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:col-start-2 lg:row-span-2 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-white/5 border border-white/10 rounded-3xl p-4 lg:p-8 backdrop-blur-md shadow-2xl"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={currentProfile.data}
                                cx="50%"
                                cy="50%"
                                innerRadius="55%"
                                outerRadius="80%"
                                paddingAngle={3}
                                dataKey="value"
                                animationDuration={800}
                                animationEasing="ease-out"
                                stroke="none"
                            >
                                {currentProfile.data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value: any) => `${value}%`}
                                contentStyle={{ backgroundColor: '#0A1A3A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white' }}
                            />
                            <Legend
                                verticalAlign="bottom"
                                height={36}
                                iconType="circle"
                                wrapperStyle={{ fontSize: '12px', fontWeight: 'bold', paddingTop: '20px' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-[-20px]">
                        <span className="text-3xl md:text-4xl font-black text-white mix-blend-screen drop-shadow-md">T-1</span>
                        <span className="text-[10px] text-blue-300 font-bold uppercase tracking-widest mt-1">Matrix</span>
                    </div>
                </motion.div>

                {/* Controls (Thumb Reachable) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-3 lg:col-start-1 lg:row-start-2 self-start"
                >
                    <div className="mb-8 lg:mb-12 bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm">
                        <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Dial Risk Tolerance</label>
                        <div className="py-4"> {/* Increased thumb target area */}
                            <input
                                type="range"
                                min="0"
                                max="2"
                                step="1"
                                value={sliderValue}
                                onChange={(e) => setSliderValue(parseInt(e.target.value))}
                                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer hover:bg-gray-600 transition-colors accent-blue-500 shadow-inner block"
                            />
                        </div>
                        <div className="flex justify-between mt-2 text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">
                            <span className={sliderValue === 0 ? "text-blue-400" : ""}>Preservation</span>
                            <span className={sliderValue === 1 ? "text-blue-400" : ""}>Balanced</span>
                            <span className={sliderValue === 2 ? "text-blue-400" : ""}>Growth</span>
                        </div>
                    </div>

                    <div className="bg-white/10 border-l-4 border-blue-500 p-6 rounded-r-xl">
                        <h4 className="font-bold text-xl mb-2">{currentProfile.name}</h4>
                        <p className="text-sm text-gray-300">Target weighting adjusted. The engine favors {currentProfile.data[0].name} and {currentProfile.data[2].name} combinations to shield downside.</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
