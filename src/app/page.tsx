"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function NavigatorPage() {
  const variantsData = [
    { id: 1, title: "Coastal Wealth", path: "/variant-1", desc: "Sydney/Gold Coast vibes, bright & airy." },
    { id: 2, title: "Botanical Growth", path: "/variant-2", desc: "Organic, eucalyptus greens, sustainable." },
    { id: 3, title: "Sydney Skyline Aerial", path: "/variant-3", desc: "Bold typography video mask." },
    { id: 4, title: "Harbour Momentum", path: "/variant-4", desc: "Split-screen sticky video layout." },
    { id: 5, title: "North Sydney Elevation", path: "/variant-5", desc: "Deep parallax frosted glass cards." },
    { id: 6, title: "Kinetic Gold", path: "/variant-6", desc: "Luxurious horizontal scrolling." },
    { id: 9, title: "Outback Horizon", path: "/variant-9", desc: "High-velocity elastic slides, terracotta." },
    { id: 11, title: "Metropolitan Flow", path: "/variant-11", desc: "Deep Cobalt & Platinum Silver, fluidity." },
    { id: 12, title: "Structural Capital", path: "/variant-12", desc: "Brutalist Grey, White, and Black geometry." },
    { id: 13, title: "Western Horizon", path: "/variant-13", desc: "Parallax Gold & Deep Violet, opulent." },
    { id: 14, title: "Tactile Liquidity", path: "/variant-14", desc: "Noir Emerald, physical capital weight." },
    { id: 15, title: "Twilight Yield", path: "/variant-15", desc: "Indigo Glassmorphism, high velocity." },
    { id: 16, title: "Institutional Guard", path: "/variant-16", desc: "Supreme Authority, Navy & Light Gold." },
    { id: 17, title: "Yield Architecture", path: "/variant-17", desc: "Modern algorithmic structure, sharp glass." },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans py-24 selection:bg-yellow-500 selection:text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-slate-800 text-slate-300 text-sm font-medium tracking-widest uppercase mb-6 border border-slate-700">
            Nobel Aesthetic Catalog
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            The <span className="font-serif italic text-yellow-500">14 Variants</span>
          </h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
            A curated showcase of high-end, animated UI architectures designed for Australian wealth management.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {variantsData.map((variant) => (
            <motion.div key={variant.id} variants={itemVariants}>
              <Link href={variant.path} className="block group h-full">
                <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:border-yellow-500/50 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  {/* Hover effect background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="text-yellow-500 font-mono text-sm mb-4">V{variant.id < 10 ? `0${variant.id}` : variant.id}</div>
                  <h2 className="text-2xl font-medium text-white mb-3 group-hover:text-yellow-400 transition-colors">{variant.title}</h2>
                  <p className="text-slate-400 font-light text-sm flex-grow leading-relaxed">{variant.desc}</p>

                  <div className="mt-8 flex items-center text-sm font-medium tracking-wide text-slate-300 group-hover:text-white transition-colors">
                    Explore Variant
                    <motion.span
                      className="ml-2 inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
