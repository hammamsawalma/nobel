const fs = require('fs');
const code = fs.readFileSync('src/app/badge-samples/page.tsx', 'utf8');

const variantChunks = code.split(/\/\*\s*VARIANT \d+:/).slice(1);
const variants = [];

variantChunks.forEach((chunk, index) => {
    const id = index + 1;
    const titleMatch = chunk.match(/<h2[^>]*>(.*?)<\/h2>/);
    const title = titleMatch ? titleMatch[1] : '';
    
    const descMatch = chunk.match(/<p[^>]*>([\s\S]*?)<\/p>/);
    const desc = descMatch ? descMatch[1].trim() : '';
    
    const bgMatch = chunk.match(/<div className="flex justify-center ([^\s]+)/);
    const bgClass = bgMatch ? bgMatch[1] : 'bg-[#0A1A3A]';
    
    const startIdx = chunk.indexOf('<div className="flex justify-center');
    const containerStart = chunk.indexOf('>', startIdx) + 1;
    
    let depth = 1;
    let endIdx = containerStart;
    for (let i = containerStart; i < chunk.length; i++) {
        if (chunk.substr(i, 4) === '<div') depth++;
        if (chunk.substr(i, 5) === '</div') depth--;
        if (depth === 0) {
            endIdx = i;
            break;
        }
    }
    
    const badgeJsx = chunk.substring(containerStart, endIdx).trim();
    variants.push({ id, title, desc, bgClass, badgeJsx });
});

let newFile = `"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, Landmark, Gem, Hexagon, Crown, Scale, Key, Globe, Coins, TrendingUp, CircleDashed, Feather, PenTool, Activity, Fingerprint, Gavel, Anchor, Circle, Building, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const VARIANTS = [
${variants.map(v => `  {
    id: ${v.id},
    title: ${JSON.stringify(v.title)},
    desc: ${JSON.stringify(v.desc)},
    bgClass: ${JSON.stringify(v.bgClass)},
    render: () => (
      <div className={"flex justify-center relative overflow-hidden py-10 px-10 rounded-3xl border border-white/20 shadow-2xl " + ${JSON.stringify(v.bgClass)}}>
${v.badgeJsx}
      </div>
    )
  }`).join(',\n')}
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
`;

fs.writeFileSync('src/app/badge-samples/page.tsx', newFile);
console.log("Rewrote page.tsx with interactive hero previewer! Processed " + variants.length + " variants.");
