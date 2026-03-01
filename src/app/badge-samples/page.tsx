"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Landmark, Gem, Hexagon } from "lucide-react";

export default function BadgeSamplesPage() {
    return (
        <div className="bg-[#0A1A3A] min-h-screen py-24 px-6 md:px-12 text-white">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-black mb-4">Badge Prototypes Directory</h1>
                <p className="text-gray-400 mb-16">
                    Review the 5 distinct architectural variants for the 25-Year Heritage Badge below based on modern 2026 UI trends.
                    Let me know which Variant (1-5) you prefer.
                </p>

                <div className="space-y-32">

                    {/* VARIANT 1: The Ultra-Minimalist Glass Pill */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 1</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Modern Minimalist Glass Pill</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            Clean, unobtrusive, highly corporate. Uses a frosted glass effect with a subtle metallic rim. Perfect for not distracting from the main headline but still adding prestige.
                        </p>

                        {/* THE BADGE */}
                        <div className="flex justify-center bg-black/30 py-20 rounded-2xl border border-white/5 relative overflow-hidden">
                            <div className="relative inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/20 pl-4 pr-6 py-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                                <div className="bg-white text-[#0A1A3A] w-10 h-10 rounded-full flex items-center justify-center font-black text-lg">
                                    25
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold leading-none mb-1">Years of</span>
                                    <span className="text-sm uppercase tracking-widest font-black leading-none text-white">Absolute Preservation</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* VARIANT 2: The Geometric Monolith */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 2</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Geometric Monolith</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            Flat, monochromatic, and architectural. Uses precise lines and sharp geometry (hexagons) to imply technological sophistication and structural integrity.
                        </p>

                        {/* THE BADGE */}
                        <div className="flex justify-center bg-white py-20 rounded-2xl border border-gray-200 relative overflow-hidden">
                            <div className="flex items-center gap-6 border-l-4 border-[#0A1A3A] pl-6 py-2">
                                <div className="relative text-[#0A1A3A]">
                                    <Hexagon flex-shrink-0 className="w-16 h-16 stroke-[1.5]" />
                                    <span className="absolute inset-0 flex items-center justify-center font-black text-xl">25</span>
                                </div>
                                <div>
                                    <div className="text-[#0A1A3A] font-black text-2xl uppercase tracking-widest mb-1">Heritage</div>
                                    <div className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em]">Institutional Pedigree</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* VARIANT 3: The Classic Ribbon & Seal */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 3</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Modern Crest</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            A modern take on the traditional financial crest. Uses a stark shield with layered typography. Very authoritative and classic wealth management styling.
                        </p>

                        {/* THE BADGE */}
                        <div className="flex justify-center bg-gray-50 py-20 rounded-2xl border border-gray-200 relative overflow-hidden">
                            <div className="relative bg-[#0A1A3A] text-white p-6 rounded-b-3xl border-t-4 border-blue-500 shadow-2xl flex flex-col items-center min-w-[200px]">
                                <Landmark className="w-8 h-8 text-blue-400 mb-4" />
                                <div className="text-4xl font-black mb-1">25</div>
                                <div className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-4 bg-white/10 px-3 py-1 rounded-full">Years</div>
                                <div className="text-center border-t border-white/10 pt-4 w-full text-xs font-medium text-gray-300">
                                    EST. 2001
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* VARIANT 4: The Animated Typographic Ring */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 4</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Typographic Radar</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            Highly interactive and trendy. A spinning ring of text encircling a central, static graphic. Draws the eye via smooth, continuous motion.
                        </p>

                        {/* THE BADGE */}
                        <div className="flex justify-center bg-[#050C1F] py-24 rounded-2xl border border-white/5 relative overflow-hidden">
                            <div className="relative w-40 h-40 flex items-center justify-center">
                                {/* The Central Static Icon */}
                                <div className="absolute z-10 bg-gradient-to-br from-blue-500 to-blue-900 rounded-full w-16 h-16 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                                    <ShieldCheck className="w-8 h-8 text-white" />
                                </div>

                                {/* The Rotating Text Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                                    className="absolute w-full h-full"
                                >
                                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                        <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                                        <text className="text-[10.5px] font-bold uppercase tracking-[0.15em] fill-gray-300">
                                            <textPath href="#circlePath" startOffset="0%">
                                                • 25 YEARS • ABSOLUTE PRESERVATION
                                            </textPath>
                                        </text>
                                    </svg>
                                </motion.div>
                            </div>
                        </div>
                    </div>


                    {/* VARIANT 5: The Brutalist Impact */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 5</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Brutalist Impact</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            Stark, unmissable, typographic dominance. No gradients, no fluff. Just pure, unadulterated confidence using scale and contrast.
                        </p>

                        {/* THE BADGE */}
                        <div className="flex justify-center bg-[#E5E7EB] py-20 rounded-2xl border border-gray-300 relative overflow-hidden">
                            <div className="flex items-start">
                                <span className="text-8xl font-black text-[#0A1A3A] leading-none tracking-tighter">25</span>
                                <div className="ml-4 flex flex-col justify-between h-full pt-2">
                                    <span className="text-[#0A1A3A] font-black uppercase text-xl leading-none">Years</span>
                                    <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest max-w-[120px] mt-2 border-t border-gray-400 pt-2">
                                        Defending Institutional Capital
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

