"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Modern, interactive profit calculator component
export default function InteractiveProfitCalculator() {
    const [initialDeposit, setInitialDeposit] = useState(100000);
    const [monthlyContribution, setMonthlyContribution] = useState(2500);
    const [years, setYears] = useState(10);
    const [riskProfile, setRiskProfile] = useState<'Foundation' | 'Balanced' | 'Growth'>('Balanced');

    const [projectedValue, setProjectedValue] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [chartData, setChartData] = useState<number[]>([]);

    // Return rates based on chosen profile (Simplified for demonstration)
    const getRate = () => {
        switch (riskProfile) {
            case 'Foundation': return 0.055; // 5.5%
            case 'Balanced': return 0.082;   // 8.2%
            case 'Growth': return 0.115;     // 11.5%
            default: return 0.082;
        }
    };

    useEffect(() => {
        calculateProjection();
    }, [initialDeposit, monthlyContribution, years, riskProfile]);

    const calculateProjection = () => {
        const rate = getRate();
        const months = years * 12;
        const monthlyRate = rate / 12;

        let currentBalance = initialDeposit;
        const newChartData = [currentBalance];

        for (let i = 1; i <= months; i++) {
            currentBalance = currentBalance * (1 + monthlyRate) + monthlyContribution;
            // Record data point yearly for the chart
            if (i % 12 === 0) {
                newChartData.push(currentBalance);
            }
        }

        const totalInvested = initialDeposit + (monthlyContribution * months);
        const earnedInterest = currentBalance - totalInvested;

        setProjectedValue(currentBalance);
        setTotalInterest(Math.max(0, earnedInterest)); // Ensure it doesn't show negative strangely
        setChartData(newChartData.length > 1 ? newChartData : [initialDeposit, currentBalance]);
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 }).format(value);
    };

    // Calculate dynamic heights for the simplistic bar chart
    const maxChartValue = Math.max(...chartData, 1); // Avoid division by zero

    return (
        <section className="py-16 md:py-24 bg-[#0A1A3A] border-y border-[#1A2A4A] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 relative z-10">

                {/* Left Side: The Interactive Chart */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-3 md:mb-4">Project Your Trajectory.</h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                            Visualize the power of algorithmic compounding. Adjust the parameters to model your potential capital expansion.
                        </p>
                    </motion.div>

                    {/* Dynamic Bar Chart Visualization */}
                    <div className="h-48 md:h-64 flex items-end gap-2 md:gap-4 w-full pr-4 md:pr-12">
                        {chartData.map((val, idx) => {
                            const heightPercentage = (val / maxChartValue) * 100;
                            return (
                                <div key={idx} className="flex-1 flex flex-col justify-end items-center group">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${Math.max(5, heightPercentage)}%` }}
                                        transition={{ type: "spring", stiffness: 50, damping: 15 }}
                                        className="w-full bg-gradient-to-t from-[#1A2E5B] to-[#3A86FF] rounded-t-sm relative transition-all"
                                    >
                                        {/* Tooltip on hover */}
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-[#0A1A3A] text-xs py-1 px-3 rounded font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-xl">
                                            Year {idx}: {formatCurrency(val)}
                                        </div>
                                    </motion.div>
                                    <span className="text-[10px] text-gray-500 mt-2 font-mono hidden sm:block">Y{idx}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side: Calculator Inputs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="lg:col-span-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl"
                >
                    <div className="mb-6 md:mb-8">
                        <div className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2 mt-2">Projected Value</div>
                        <div className="text-4xl md:text-6xl font-black text-white">{formatCurrency(projectedValue)}</div>
                        <div className="text-sm font-medium text-gray-400 mt-2">
                            Total Yield Generated: <span className="text-green-400">{formatCurrency(totalInterest)}</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Input: Initial Deposit */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-xs font-bold text-blue-300 uppercase tracking-wide">Initial Injection</label>
                                <span className="text-sm text-white font-mono font-bold">{formatCurrency(initialDeposit)}</span>
                            </div>
                            <input
                                type="range" min="10000" max="1000000" step="10000"
                                value={initialDeposit}
                                onChange={(e) => setInitialDeposit(Number(e.target.value))}
                                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-400"
                            />
                        </div>

                        {/* Input: Monthly Contribution */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-xs font-bold text-blue-300 uppercase tracking-wide">Monthly Deployment</label>
                                <span className="text-sm text-white font-mono font-bold">{formatCurrency(monthlyContribution)}/mo</span>
                            </div>
                            <input
                                type="range" min="0" max="25000" step="500"
                                value={monthlyContribution}
                                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-400"
                            />
                        </div>

                        {/* Input: Time Horizon */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-xs font-bold text-blue-300 uppercase tracking-wide">Time Horizon</label>
                                <span className="text-sm text-white font-mono font-bold">{years} Years</span>
                            </div>
                            <input
                                type="range" min="1" max="30" step="1"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-400"
                            />
                        </div>

                        {/* Profile Selection */}
                        <div className="pt-4 border-t border-white/20">
                            <label className="text-xs font-bold text-blue-300 uppercase tracking-wide block mb-4">Strategic Protocol</label>
                            <div className="grid grid-cols-3 gap-2">
                                {(['Foundation', 'Balanced', 'Growth'] as const).map(profile => (
                                    <button
                                        key={profile}
                                        onClick={() => setRiskProfile(profile)}
                                        className={`py-2 px-1 text-xs font-bold rounded-lg border transition-all ${riskProfile === profile
                                            ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                                            : 'bg-transparent border-white/20 text-gray-300 hover:border-blue-400'
                                            }`}
                                    >
                                        {profile}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
