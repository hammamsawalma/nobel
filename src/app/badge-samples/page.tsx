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


                    {/* VARIANT 6: The Neon Cyber-Finance */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 6</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Neon Pulse</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            Highly futuristic. Employs a dark UI with glowing, bright cyan/blue wireframe borders. Screams algorithmic edge and modern quant finance.
                        </p>
                        <div className="flex justify-center bg-[#020617] py-20 rounded-2xl border border-white/5 relative overflow-hidden">
                            <div className="relative group cursor-crosshair">
                                <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/30 transition-all duration-500"></div>
                                <div className="relative border border-cyan-400/50 bg-[#020617]/80 backdrop-blur-sm p-6 rounded-lg flex items-center gap-4 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                    <div className="text-cyan-400 font-mono text-5xl font-black">25<span className="text-xl">Y</span></div>
                                    <div className="w-[1px] h-12 bg-cyan-400/30"></div>
                                    <div className="font-mono text-[10px] text-cyan-200 uppercase tracking-[0.2em] leading-relaxed">
                                        Absolute<br />Preservation<br />Since 2001
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VARIANT 7: The Floating Sapphire Hexagon */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 7</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Floating Sapphire Hexagon</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            An architectural 3D aesthetic using a deep blue gemstone vibe. Gives the impression of a dense, impenetrable vault seal.
                        </p>
                        <div className="flex justify-center bg-slate-900 py-24 rounded-2xl border border-white/5 relative overflow-hidden">
                            <div className="relative flex justify-center items-center w-32 h-32">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-900 rotate-45 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-blue-300/30"></div>
                                <div className="absolute inset-1 bg-gradient-to-tl from-slate-900 to-[#0A1A3A] rotate-45 rounded-xl"></div>
                                <div className="relative z-10 flex flex-col items-center justify-center">
                                    <span className="text-blue-400 text-3xl font-black leading-none drop-shadow-md">25</span>
                                    <span className="text-white/50 text-[8px] uppercase tracking-widest font-bold mt-1">Years</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VARIANT 8: The Academic Stamp */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 8</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Academic Stamp</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            Resembles a university seal or a government-issued bond stamp. Evokes deep-rooted tradition, regulatory compliance, and unmatched legacy.
                        </p>
                        <div className="flex justify-center bg-[#FDFBF7] py-20 rounded-2xl border border-gray-200 relative overflow-hidden">
                            <div className="w-40 h-40 rounded-full border-[3px] border-double border-[#0A1A3A] flex items-center justify-center relative p-2">
                                <div className="w-full h-full rounded-full border border-[#0A1A3A] flex items-center justify-center p-1">
                                    <svg viewBox="0 0 100 100" className="absolute w-[95%] h-[95%] animate-[spin_30s_linear_infinite]">
                                        <path id="stampPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                        <text className="text-[9px] font-bold uppercase tracking-widest fill-[#0A1A3A]">
                                            <textPath href="#stampPath" startOffset="0%">
                                                INSTITUTIONAL GRADE • FIDUCIARY STEWARDS •
                                            </textPath>
                                        </text>
                                    </svg>
                                    <div className="bg-[#0A1A3A] text-[#FDFBF7] w-16 h-16 rounded-full flex flex-col items-center justify-center relative z-10">
                                        <span className="text-2xl font-black font-serif leading-none">25</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VARIANT 9: The Golden Ratio Curve */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 9</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Golden Ratio Curve</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            Highly abstract. A sleek, semi-circular wireframe that implies compounding growth over 2.5 decades. Very artistic and elite.
                        </p>
                        <div className="flex justify-center bg-zinc-950 py-20 rounded-2xl border border-white/5 relative overflow-hidden">
                            <div className="relative flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full border-t border-r border-amber-500/50 absolute top-0 left-0 animate-[spin_10s_linear_infinite]"></div>
                                <div className="w-40 h-40 rounded-full border-b border-l border-amber-500/20 absolute -top-4 -left-4 animate-[spin_15s_linear_infinite_reverse]"></div>
                                <div className="text-center relative z-10 pt-4 px-8">
                                    <div className="text-amber-500 font-extralight text-6xl tracking-tighter">25</div>
                                    <div className="text-amber-500/50 uppercase text-[9px] tracking-[0.4em] font-bold mt-2">Years</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VARIANT 10: The Vault Door */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 10</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Vault Door</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            Heavy, solid, impenetrable. Uses dark metallic gradients to simulate the locking mechanism of a Swiss bank vault.
                        </p>
                        <div className="flex justify-center bg-[#050505] py-20 rounded-2xl border border-white/5 relative overflow-hidden">
                            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-gray-900 to-gray-600 p-2 shadow-[0_0_50px_rgba(0,0,0,0.8)_inset]">
                                <div className="w-full h-full rounded-full bg-gradient-to-bl from-gray-900 via-black to-gray-800 flex items-center justify-center border-4 border-gray-700/50 relative overflow-hidden">
                                    {/* Vault locking bars */}
                                    <div className="absolute w-full h-[2px] bg-gray-600/30"></div>
                                    <div className="absolute h-full w-[2px] bg-gray-600/30"></div>
                                    <div className="relative z-10 bg-black w-24 h-24 rounded-full border border-gray-600 shadow-2xl flex flex-col items-center justify-center">
                                        <span className="text-gray-300 font-black text-3xl tracking-tighter shadow-black drop-shadow-lg">25Y</span>
                                        <span className="text-gray-500 text-[8px] font-mono tracking-widest uppercase">Secured</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VARIANT 11: The Swiss Minimalist Ticket */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 11</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Swiss Minimal Ticket</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            Inspired by high-end Swiss typography and vintage transit tickets. Grid-based, stark, and deeply functional.
                        </p>
                        <div className="flex justify-center bg-[#F2F2F2] py-20 rounded-2xl border border-gray-300 relative overflow-hidden">
                            <div className="bg-white border-2 border-black p-6 flex items-stretch gap-6 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                                <div className="flex flex-col justify-between border-r-2 border-dashed border-gray-400 pr-6">
                                    <span className="text-black font-black text-6xl leading-none">25</span>
                                    <span className="text-black font-bold uppercase text-xs tracking-widest">YRS.</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-black font-bold uppercase text-sm tracking-widest mb-1">Nobel Rock Partners</div>
                                    <div className="text-gray-500 font-mono text-[10px] uppercase">Est. 2001 // Authorized</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VARIANT 12: The Platinum Obsidian Inlay */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 12</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Platinum Inlay</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            Ultra-luxurious. Uses subtle silver/platinum gradients inset into a dark obsidian background, looking like engraved metal on luxury watches.
                        </p>
                        <div className="flex justify-center bg-[#111111] py-20 rounded-2xl border border-white/5 relative overflow-hidden">
                            <div className="relative px-12 py-6 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] rounded-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_10px_20px_rgba(0,0,0,0.5)] border border-white/5">
                                <div className="flex items-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-400 mb-1">
                                    <span className="font-serif italic text-2xl">Quarter</span>
                                    <span className="font-black text-5xl uppercase tracking-tighter">Century</span>
                                </div>
                                <div className="text-center text-[10px] font-mono text-gray-500 tracking-[0.4em] uppercase">
                                    Of Absolute Preservation
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VARIANT 13: The Micro-Tech Data Node */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 13</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Micro-Tech Node</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            Resembles a dashboard data component. Perfect for blending seamlessly into UI grids. Very tech-forward and quantitative.
                        </p>
                        <div className="flex justify-center bg-[#070E1A] py-20 rounded-2xl border border-white/5 relative overflow-hidden">
                            <div className="bg-[#0D182E] border border-[#1E3050] p-4 rounded-lg flex items-center gap-4 min-w-[240px]">
                                <div className="w-12 h-12 rounded-md bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                                </div>
                                <div>
                                    <div className="text-blue-400 font-mono text-[10px] uppercase mb-1">System Uptime</div>
                                    <div className="text-white font-black text-xl leading-none">25 YEARS</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VARIANT 14: The Classical Monogram */}
                    <div className="border border-white/10 p-12 rounded-3xl relative">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Variant 14</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300">The Classical Monogram</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">
                            Old-money aesthetics. Uses a serif typeface with interlocking letters/numbers inside a simple botanical or thin geometric wreath.
                        </p>
                        <div className="flex justify-center bg-[#F9F6F0] py-20 rounded-2xl border border-gray-200 relative overflow-hidden">
                            <div className="w-32 h-32 rounded-full border-[0.5px] border-[#2A3427] flex items-center justify-center p-2">
                                <div className="w-full h-full rounded-full border-[0.5px] border-[#2A3427] flex items-center justify-center">
                                    <span className="font-serif text-[#2A3427] text-4xl italic pr-1">25</span>
                                </div>
                                {/* Simple aesthetic flourish lines */}
                                <div className="absolute -left-4 top-1/2 w-4 h-[1px] bg-[#2A3427]"></div>
                                <div className="absolute -right-4 top-1/2 w-4 h-[1px] bg-[#2A3427]"></div>
                            </div>
                        </div>
                    </div>

                    {/* VARIANT 15: The Dynamic Marquee Tag */}
                    <div className="border border-white/10 p-12 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-[-16px] left-8 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">Variant 15</div>
                        <h2 className="text-2xl font-bold mb-8 text-gray-300 relative z-10">The Dynamic Tag</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg relative z-10">
                            A highly energetic, continuous ticker-tape style tag. Very modern fashion/streetwear tech aesthetic applied to finance.
                        </p>
                        <div className="flex justify-center bg-gray-900 py-20 rounded-2xl border border-white/5 relative overflow-hidden">
                            <div className="w-full max-w-[300px] overflow-hidden bg-[#CCFF00] text-black py-2 rotate-[-5deg] shadow-[0_10px_20px_rgba(204,255,0,0.2)]">
                                <motion.div
                                    className="flex whitespace-nowrap gap-4"
                                    animate={{ x: [0, -200] }}
                                    transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
                                >
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest">
                                            <span>25 YEARS PRESERVATION</span>
                                            <span>///</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

