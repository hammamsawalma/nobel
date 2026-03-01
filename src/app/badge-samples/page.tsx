"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, Landmark, Gem, Hexagon, Crown, Scale, Key, Globe, Coins, TrendingUp, CircleDashed, Feather, PenTool, Activity, Fingerprint, Gavel, Anchor, Circle, Building, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const VARIANTS = [
  {
    id: 1,
    title: "The Modern Minimalist Glass Pill",
    desc: "Clean, unobtrusive, highly corporate. Uses a frosted glass effect with a subtle metallic rim. Perfect for not distracting from the main headline but still adding prestige.",
    bgClass: "bg-black/30",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-black/30"}>
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
    )
  },
  {
    id: 2,
    title: "The Geometric Monolith",
    desc: "Flat, monochromatic, and architectural. Uses precise lines and sharp geometry (hexagons) to imply technological sophistication and structural integrity.",
    bgClass: "bg-white",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-white"}>
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
    )
  },
  {
    id: 3,
    title: "The Modern Crest",
    desc: "A modern take on the traditional financial crest. Uses a stark shield with layered typography. Very authoritative and classic wealth management styling.",
    bgClass: "bg-gray-50",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-gray-50"}>
<div className="relative bg-[#0A1A3A] text-white p-6 rounded-b-3xl border-t-4 border-blue-500 shadow-2xl flex flex-col items-center min-w-[200px]">
                                <Landmark className="w-8 h-8 text-blue-400 mb-4" />
                                <div className="text-4xl font-black mb-1">25</div>
                                <div className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-4 bg-white/10 px-3 py-1 rounded-full">Years</div>
                                <div className="text-center border-t border-white/10 pt-4 w-full text-xs font-medium text-gray-300">
                                    EST. 2001
                                </div>
                            </div>
      </div>
    )
  },
  {
    id: 4,
    title: "The Typographic Radar",
    desc: "Highly interactive and trendy. A spinning ring of text encircling a central, static graphic. Draws the eye via smooth, continuous motion.",
    bgClass: "bg-[#050C1F]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#050C1F]"}>
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
    )
  },
  {
    id: 5,
    title: "The Brutalist Impact",
    desc: "Stark, unmissable, typographic dominance. No gradients, no fluff. Just pure, unadulterated confidence using scale and contrast.",
    bgClass: "bg-[#E5E7EB]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#E5E7EB]"}>
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
    )
  },
  {
    id: 6,
    title: "The Neon Pulse",
    desc: "Highly futuristic. Employs a dark UI with glowing, bright cyan/blue wireframe borders. Screams algorithmic edge and modern quant finance.",
    bgClass: "bg-[#020617]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#020617]"}>
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
    )
  },
  {
    id: 7,
    title: "The Floating Sapphire Hexagon",
    desc: "An architectural 3D aesthetic using a deep blue gemstone vibe. Gives the impression of a dense, impenetrable vault seal.",
    bgClass: "bg-slate-900",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-slate-900"}>
<div className="relative flex justify-center items-center w-32 h-32">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-900 rotate-45 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-blue-300/30"></div>
                                <div className="absolute inset-1 bg-gradient-to-tl from-slate-900 to-[#0A1A3A] rotate-45 rounded-xl"></div>
                                <div className="relative z-10 flex flex-col items-center justify-center">
                                    <span className="text-blue-400 text-3xl font-black leading-none drop-shadow-md">25</span>
                                    <span className="text-white/50 text-[8px] uppercase tracking-widest font-bold mt-1">Years</span>
                                </div>
                            </div>
      </div>
    )
  },
  {
    id: 8,
    title: "The Academic Stamp",
    desc: "Resembles a university seal or a government-issued bond stamp. Evokes deep-rooted tradition, regulatory compliance, and unmatched legacy.",
    bgClass: "bg-[#FDFBF7]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#FDFBF7]"}>
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
    )
  },
  {
    id: 9,
    title: "The Golden Ratio Curve",
    desc: "Highly abstract. A sleek, semi-circular wireframe that implies compounding growth over 2.5 decades. Very artistic and elite.",
    bgClass: "bg-zinc-950",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-zinc-950"}>
<div className="relative flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full border-t border-r border-amber-500/50 absolute top-0 left-0 animate-[spin_10s_linear_infinite]"></div>
                                <div className="w-40 h-40 rounded-full border-b border-l border-amber-500/20 absolute -top-4 -left-4 animate-[spin_15s_linear_infinite_reverse]"></div>
                                <div className="text-center relative z-10 pt-4 px-8">
                                    <div className="text-amber-500 font-extralight text-6xl tracking-tighter">25</div>
                                    <div className="text-amber-500/50 uppercase text-[9px] tracking-[0.4em] font-bold mt-2">Years</div>
                                </div>
                            </div>
      </div>
    )
  },
  {
    id: 10,
    title: "The Vault Door",
    desc: "Heavy, solid, impenetrable. Uses dark metallic gradients to simulate the locking mechanism of a Swiss bank vault.",
    bgClass: "bg-[#050505]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#050505]"}>
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
    )
  },
  {
    id: 11,
    title: "The Swiss Minimal Ticket",
    desc: "Inspired by high-end Swiss typography and vintage transit tickets. Grid-based, stark, and deeply functional.",
    bgClass: "bg-[#F2F2F2]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#F2F2F2]"}>
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
    )
  },
  {
    id: 12,
    title: "The Platinum Inlay",
    desc: "Ultra-luxurious. Uses subtle silver/platinum gradients inset into a dark obsidian background, looking like engraved metal on luxury watches.",
    bgClass: "bg-[#111111]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#111111]"}>
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
    )
  },
  {
    id: 13,
    title: "The Micro-Tech Node",
    desc: "Resembles a dashboard data component. Perfect for blending seamlessly into UI grids. Very tech-forward and quantitative.",
    bgClass: "bg-[#070E1A]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#070E1A]"}>
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
    )
  },
  {
    id: 14,
    title: "The Classical Monogram",
    desc: "Old-money aesthetics. Uses a serif typeface with interlocking letters/numbers inside a simple botanical or thin geometric wreath.",
    bgClass: "bg-[#F9F6F0]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#F9F6F0]"}>
<div className="w-32 h-32 rounded-full border-[0.5px] border-[#2A3427] flex items-center justify-center p-2">
                                <div className="w-full h-full rounded-full border-[0.5px] border-[#2A3427] flex items-center justify-center">
                                    <span className="font-serif text-[#2A3427] text-4xl italic pr-1">25</span>
                                </div>
                                {/* Simple aesthetic flourish lines */}
                                <div className="absolute -left-4 top-1/2 w-4 h-[1px] bg-[#2A3427]"></div>
                                <div className="absolute -right-4 top-1/2 w-4 h-[1px] bg-[#2A3427]"></div>
                            </div>
      </div>
    )
  },
  {
    id: 15,
    title: "The Dynamic Tag",
    desc: "A highly energetic, continuous ticker-tape style tag. Very modern fashion/streetwear tech aesthetic applied to finance.",
    bgClass: "bg-gray-900",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-gray-900"}>
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
    )
  },
  {
    id: 16,
    title: "The Traditional Crown Crest",
    desc: "Evokes centuries-old European private banking. A simple, elegant crown and shield combination focusing on legacy and aristocracy.",
    bgClass: "bg-[#1E2532]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#1E2532]"}>
<div className="flex flex-col items-center">
                                <Crown className="w-10 h-10 text-[#C2A878] mb-2" strokeWidth={1.5} />
                                <div className="border border-[#C2A878] p-1 rounded-t-full rounded-b-md">
                                    <div className="bg-gradient-to-b from-[#FAF1D6] to-[#C2A878] text-[#1E2532] px-6 py-8 rounded-t-full rounded-b-md shadow-inner flex flex-col items-center min-w-[120px]">
                                        <span className="font-serif text-4xl font-bold leading-none mb-1">25</span>
                                        <span className="text-[8px] font-bold uppercase tracking-widest">Years</span>
                                    </div>
                                </div>
                                <div className="mt-4 text-[#C2A878] text-xs uppercase tracking-[0.3em] font-serif">Legacy & Trust</div>
                            </div>
      </div>
    )
  },
  {
    id: 17,
    title: "The Greek Pillar",
    desc: "Represents foundational strength. Uses architectural columns as a metaphor for structural solidity and unshakeable markets.",
    bgClass: "bg-gray-50",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-gray-50"}>
<div className="flex items-center gap-6">
                                <Building className="w-16 h-16 text-[#0A1A3A] stroke-[1]" />
                                <div className="flex flex-col border-l-2 border-gray-300 pl-6 py-2">
                                    <span className="text-4xl text-[#0A1A3A] font-serif font-black leading-none">XXV</span>
                                    <span className="text-gray-500 text-[9px] font-bold tracking-[0.2em] uppercase mt-2">Years of Institutional Foundation</span>
                                </div>
                            </div>
      </div>
    )
  },
  {
    id: 18,
    title: "The Three Keys",
    desc: "A highly traditional Swiss banking motif. Keys represent security, discretion, and access to exclusive wealth management.",
    bgClass: "bg-[#0C121A]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#0C121A]"}>
<div className="relative border-4 border-double border-amber-600/50 p-6 rounded-full w-48 h-48 flex items-center justify-center bg-gradient-to-br from-[#121A26] to-[#0A0D14] shadow-2xl">
                                <div className="absolute top-4 flex justify-center w-full">
                                    <Key className="w-6 h-6 text-amber-500 rotate-[-45deg]" strokeWidth={1.5} />
                                    <Key className="w-6 h-6 text-amber-500 rotate-[45deg] -ml-2" strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col items-center mt-6">
                                    <span className="text-white text-5xl font-serif">25</span>
                                    <span className="text-amber-500/80 text-[10px] tracking-[0.3em] font-serif uppercase mt-1">Anniversary</span>
                                </div>
                                <div className="absolute bottom-4 flex justify-center w-full text-gray-500 text-[8px] uppercase tracking-widest font-mono">2001 - 2026</div>
                            </div>
      </div>
    )
  },
  {
    id: 19,
    title: "The Roman Laurel Wreath",
    desc: "The timeless symbol of victory and longevity. Very common in 25th, 50th, and 100th-anniversary insignias for global institutions.",
    bgClass: "bg-[#022B3A]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#022B3A]"}>
<div className="relative flex items-center justify-center w-48 h-48">
                                {/* SVG approximating a laurel wreath */}
                                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#D4AF37] opacity-80" fill="currentColor">
                                    <path d="M15,50 C15,20 45,5 50,5 C55,5 85,20 85,50 C85,80 55,95 50,95 C45,95 15,80 15,50 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                                    <path d="M20,50 C20,30 40,15 50,15 C60,15 80,30 80,50 C80,70 60,85 50,85 C40,85 20,70 20,50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                                </svg>
                                <div className="text-center z-10 flex flex-col items-center">
                                    <span className="text-[#D4AF37] text-5xl font-serif italic pr-2">25</span>
                                    <span className="text-[#BF953F] text-[9px] uppercase tracking-[0.3em] font-bold">Years</span>
                                </div>
                            </div>
      </div>
    )
  },
  {
    id: 20,
    title: "The Global Footprint",
    desc: "Focuses on international reach and macroeconomic stability over a quarter-century. Uses a geometric wireframe globe.",
    bgClass: "bg-zinc-100",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-zinc-100"}>
<div className="flex items-center gap-6">
                                <Globe className="w-16 h-16 text-blue-900 stroke-[1]" />
                                <div className="flex flex-col">
                                    <span className="text-blue-900 text-3xl font-black uppercase tracking-tighter">25 Years</span>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="w-6 h-[1px] bg-blue-900/40"></div>
                                        <span className="text-blue-900/60 text-[10px] font-bold uppercase tracking-[0.2em]">Global Markets</span>
                                    </div>
                                </div>
                            </div>
      </div>
    )
  },
  {
    id: 21,
    title: "The Sovereign Coin",
    desc: "Designed to look like a physical embossed gold or platinum coin. Represents bullion, backing, and physical asset security.",
    bgClass: "bg-[#0F0F0F]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#0F0F0F]"}>
<div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#E6C27A] via-[#B8860B] to-[#593E00] p-1 shadow-[0_15px_30px_rgba(184,134,11,0.2)]">
                                <div className="w-full h-full rounded-full border border-[#FFFACD]/40 bg-gradient-to-b from-[#DAA520] to-[#8B6508] p-1">
                                    <div className="w-full h-full rounded-full border-2 border-dashed border-[#593E00]/50 flex flex-col items-center justify-center shadow-[inset_0_4px_10px_rgba(255,255,255,0.3)]">
                                        <span className="text-[#3E2700] text-5xl font-black font-serif drop-shadow-sm">25</span>
                                        <span className="text-[#3E2700] text-[8px] font-bold uppercase tracking-[0.2em] mt-1">Fine Gold</span>
                                    </div>
                                </div>
                            </div>
      </div>
    )
  },
  {
    id: 22,
    title: "The Geometric Equator",
    desc: "Modern interpretation of traditional banking logos (like Deutsche Bank or Chase). Uses abstract shapes like squares intersecting with a slash to represent compounded growth.",
    bgClass: "bg-white",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-white"}>
<div className="flex items-center gap-8">
                                <div className="w-16 h-16 bg-[#001E50] text-white flex items-center justify-center rounded-sm rotate-45">
                                    <div className="w-8 h-8 border-2 border-white -rotate-45 flex items-center justify-center">
                                        <div className="w-[2px] h-10 bg-white rotate-45"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#001E50] text-4xl font-black tracking-tighter">25 YRS</span>
                                    <span className="text-[#001E50]/60 text-[10px] font-bold uppercase tracking-widest mt-1">Capital Expansion</span>
                                </div>
                            </div>
      </div>
    )
  },
  {
    id: 23,
    title: "The Fiduciary Scale",
    desc: "Uses the scale of justice to emphasize unbiased strategy, strict regulatory adherence, and perfectly balanced portfolios.",
    bgClass: "bg-[#F4F1EA]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#F4F1EA]"}>
<div className="flex flex-col items-center">
                                <Scale className="w-12 h-12 text-[#2C3E50] mb-4 stroke-[1.5]" />
                                <div className="text-[#2C3E50] text-3xl font-serif font-black underline decoration-1 underline-offset-8">25 YEARS</div>
                                <div className="mt-4 text-gray-500 text-[9px] uppercase tracking-[0.3em] font-medium">Unbiased Equilibrium</div>
                            </div>
      </div>
    )
  },
  {
    id: 24,
    title: "The Signet Wax Seal",
    desc: "The ultimate symbol of final authorization and elite pedigree. Mimics a stamped wax press on a formal document.",
    bgClass: "bg-[#1A1A1A]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#1A1A1A]"}>
<div className="relative">
                                {/* Fake ribbon */}
                                <div className="absolute top-1/2 left-[-40px] w-[200px] h-8 bg-blue-900 -translate-y-1/2 -z-10 shadow-lg"></div>
                                {/* Wax Seal Base */}
                                <div className="w-32 h-32 bg-[#8B0000] rounded-full flex justify-center items-center shadow-[0_10px_20px_rgba(0,0,0,0.8)] border border-[#AA0000]">
                                    <div className="w-28 h-28 bg-[#7A0000] rounded-full flex justify-center items-center shadow-[inset_0_5px_15px_rgba(0,0,0,0.5)]">
                                        <div className="text-[#D39E82] flex flex-col items-center">
                                            <span className="font-serif text-4xl italic pr-1 drop-shadow-md">25</span>
                                            <span className="text-[7px] uppercase tracking-widest border-t border-[#D39E82]/30 pt-1 mt-1">Certified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
      </div>
    )
  },
  {
    id: 25,
    title: "The Heirloom Ribbon",
    desc: "A classic sweeping banner ribbon. Highly legible, festive yet extremely professional, often used in wealth management reports.",
    bgClass: "bg-gray-50",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-gray-50"}>
<div className="relative flex flex-col items-center">
                                <span className="text-6xl text-blue-900 font-serif font-black relative z-10 bg-gray-50 px-4">25</span>
                                <div className="absolute top-[60%] w-64 h-10 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 -z-10 shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex items-center justify-center transform skew-x-[-10deg]">
                                    <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase transform skew-x-[10deg]">Years Excellence</span>
                                </div>
                            </div>
      </div>
    )
  },
  {
    id: 26,
    title: "The Minimalist Signature",
    desc: "Imitates a handwritten founder's sign-off or fountain pen ink. Highly personal, artisanal, implying bespoke wealth curation.",
    bgClass: "bg-amber-50/50",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-amber-50/50"}>
<div className="flex flex-col items-center gap-2">
                                <PenTool className="w-6 h-6 text-gray-400 mb-2" strokeWidth={1} />
                                <div className="text-4xl text-[#0A1A3A] font-[cursive] italic opacity-80">25 Years</div>
                                <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#0A1A3A]/40 to-transparent"></div>
                                <div className="text-[#0A1A3A]/50 text-[9px] font-mono uppercase tracking-[0.2em] mt-1">Curated Capital</div>
                            </div>
      </div>
    )
  },
  {
    id: 27,
    title: "The Blueprint Overlay",
    desc: "Leans heavily into the \"Architects of Growth\" theme. Looks like a technical grid plotting mathematical certainty over 25 years.",
    bgClass: "bg-[#1E3A8A]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#1E3A8A]"}>
{/* Blueprint grid background */}
                            <div className="absolute inset-0 border-[0.5px] border-white/10 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]"></div>

                            <div className="relative border border-white/30 backdrop-blur-sm p-6 flex flex-col items-end">
                                <div className="text-white/50 text-[8px] font-mono tracking-widest uppercase mb-1">DATA//FIG:25.YRS</div>
                                <span className="text-white text-6xl font-mono font-light tracking-tighter">25.0</span>
                                <div className="w-full h-[1px] bg-white/30 my-2"></div>
                                <div className="flex items-center gap-2">
                                    <Activity className="w-4 h-4 text-cyan-400" />
                                    <span className="text-cyan-400 text-[10px] uppercase font-bold tracking-widest">Model Verified</span>
                                </div>
                            </div>
      </div>
    )
  },
  {
    id: 28,
    title: "Concentric Growth Rings",
    desc: "Uses expanding rings (like a tree trunk or radar) to visualize 25 years of compounded, outbound growth.",
    bgClass: "bg-zinc-900",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-zinc-900"}>
<div className="relative flex items-center justify-center w-40 h-40">
                                <div className="absolute inset-0 rounded-full border border-white/5 animate-ping" style={{ animationDuration: '3s' }}></div>
                                <div className="absolute inset-2 rounded-full border border-white/10"></div>
                                <div className="absolute inset-6 rounded-full border border-white/20"></div>
                                <div className="absolute inset-10 rounded-full border border-white/40"></div>
                                <div className="absolute bg-[#0A1A3A] w-16 h-16 rounded-full z-10 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                    <span className="text-white font-black text-2xl">25</span>
                                </div>
                            </div>
      </div>
    )
  },
  {
    id: 29,
    title: "The Stained Glass Vault",
    desc: "Intricate overlapping geometric panels. Emulates thick security glass or stained cathedral windows representing legacy wealth.",
    bgClass: "bg-[#000511]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#000511]"}>
<div className="relative w-32 h-32 flex items-center justify-center">
                                <div className="absolute inset-0 bg-blue-600/20 rounded-xl rotate-12 backdrop-blur-md border border-cyan-400/30"></div>
                                <div className="absolute inset-0 bg-indigo-600/20 rounded-xl -rotate-12 backdrop-blur-md border border-indigo-400/30"></div>
                                <div className="bg-[#0A1A3A]/80 backdrop-blur-xl p-4 rounded-lg border border-white/20 relative z-10 text-center shadow-2xl">
                                    <div className="text-white text-3xl font-black">25</div>
                                    <div className="text-cyan-200 text-[8px] uppercase tracking-[0.2em] font-bold mt-1">Years</div>
                                </div>
                            </div>
      </div>
    )
  },
  {
    id: 30,
    title: "The Nautical Anchor",
    desc: "Financial safety in rough waters. Uses a nautical anchor to symbolize grounding, heavy preservation, and calm in economic storms.",
    bgClass: "bg-[#E5E5E5]",
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + "bg-[#E5E5E5]"}>
<div className="flex flex-col items-center">
                                <Anchor className="w-12 h-12 text-[#1c2c44] mb-4" strokeWidth={1.5} />
                                <div className="text-[#1c2c44] font-serif font-black text-4xl mb-2">Quarter Century</div>
                                <div className="text-gray-500 font-bold text-[9px] uppercase tracking-widest px-4 py-1 border border-gray-400 rounded-full">
                                    Anchored Capital
                                </div>
                            </div>
      </div>
    )
  }
];

export default function InteractiveBadgePreviewer() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const v = VARIANTS[currentIndex];

    return (
        <div className="bg-[#0A1A3A] min-h-screen text-white flex flex-col relative overflow-hidden">
            
            <div className="absolute inset-0 z-0">
                <video 
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover opacity-30 mix-blend-screen"
                >
                    <source src="/vid/drone-shot-above-river-panning-down-showing-brisbane-cbd-expressway-motorway-a-SBV-348964395-preview.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#0A1A3A]/60 mix-blend-multiply border-b-8 border-[#0A1A3A]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="relative z-50 bg-[#0A1A3A]/90 backdrop-blur-xl border-b border-white/5 py-4 px-6 flex items-center justify-between shadow-lg">
                <div className="flex-1">
                    <h1 className="text-xl font-black text-white">Hero Context Visualizer</h1>
                    <div className="text-gray-400 text-xs font-mono">Simulating Homepage Environment</div>
                </div>
                
                <div className="flex items-center justify-center gap-6 flex-1">
                    <button 
                        onClick={() => setCurrentIndex(prev => prev > 0 ? prev - 1 : VARIANTS.length - 1)}
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
                    >
                        <ChevronLeft className="w-5 h-5 text-cyan-400" />
                    </button>
                    
                    <div className="w-64 text-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Variant {v.id}/{VARIANTS.length}</span>
                        <div className="text-[11px] text-gray-300 truncate mt-1">{v.title}</div>
                    </div>
                    
                    <button 
                        onClick={() => setCurrentIndex(prev => (prev + 1) % VARIANTS.length)}
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
                    >
                        <ChevronRight className="w-5 h-5 text-cyan-400" />
                    </button>
                </div>
                
                <div className="flex-1 text-right text-gray-400 text-xs flex justify-end">
                    <span className="bg-white/10 px-3 py-1 rounded-full uppercase tracking-widest text-[9px]">Select a badge layout below</span>
                </div>
            </div>

            <div className="flex-1 relative flex flex-col justify-center items-center px-4 w-full h-full">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={v.id}
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -30 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center mt-12 mb-32"
                    >
                        <div className="mb-12 relative">
                            {/* The massive glow exactly like the actual hero */}
                            <div className="absolute inset-x-0 inset-y-[-20%] bg-amber-500/20 rounded-full blur-[60px] animate-pulse"></div>
                            <div className="scale-100 md:scale-110 relative z-10 transition-transform cursor-pointer hover:scale-105 duration-300 transform-gpu">
                                {v.render()}
                            </div>
                        </div>

                        {/* HERO HOOK */}
                        <div className="text-center relative z-10 transform-gpu" style={{ perspective: 1000 }}>
                            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] text-white drop-shadow-2xl mb-6">
                                Nobel Rock <br />
                                Partners.
                            </h1>
                            <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                                Institutional-grade portfolios engineered with precision, safeguarding your capital across generations.
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute bottom-0 inset-x-0 bg-black/95 backdrop-blur-2xl border-t border-white/10 p-6 z-50 text-center">
                <p className="text-sm text-gray-300 max-w-4xl mx-auto opacity-80 leading-relaxed font-mono">
                    {v.desc}
                </p>
            </div>

        </div>
    );
}
