"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function NavigatorPage() {
  const variantsData = [
    { id: 1, title: "Coastal Wealth", path: "/variant-coastal", desc: "Sydney/Gold Coast vibes, bright & airy." },
    { id: 2, title: "Botanical Growth", path: "/variant-botanical", desc: "Organic, eucalyptus greens, sustainable." },
    { id: 3, title: "Sydney Skyline Aerial", path: "/variant-3", desc: "Bold typography video mask." },
    { id: 4, title: "Harbour Momentum", path: "/variant-4", desc: "Split-screen sticky video layout." },
    { id: 5, title: "North Sydney Elevation", path: "/variant-5", desc: "Deep parallax frosted glass cards." },
    { id: 6, title: "Kinetic Gold", path: "/variant-6", desc: "Luxurious horizontal scrolling." },
    { id: 7, title: "Monolithic Trust", path: "/variant-7", desc: "Concrete tones with stacked sticky cards." },
    { id: 8, title: "Liquid Yield", path: "/variant-8", desc: "Fluid undulating SVG curve transitions." },
    { id: 9, title: "Outback Horizon", path: "/variant-9", desc: "High-velocity elastic slides, terracotta." },
    { id: 10, title: "Glass Geometric", path: "/variant-10", desc: "3D mouse-tracking translucent shapes." },
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
            The <span className="font-serif italic text-yellow-500">10 Variants</span>
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
