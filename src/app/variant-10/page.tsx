"use client";

import { motion, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

// Reusable 3D Tilt Card Component
const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const x = useSpring(0, { stiffness: 150, damping: 15 });
    const y = useSpring(0, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Normalize coordinates from -1 to 1 based on center of card
        const normX = (e.clientX - centerX) / (rect.width / 2);
        const normY = (e.clientY - centerY) / (rect.height / 2);

        // Max rotation in degrees
        x.set(normY * -10); // Tilt up/down
        y.set(normX * 10);  // Tilt left/right
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovering(false);
    };

    return (
        <motion.div
            style={{ rotateX: x, rotateY: y, transformPerspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl overflow-hidden transition-all duration-300 ${isHovering ? 'shadow-fuchsia-500/20 shadow-2xl' : ''} ${className}`}
        >
            {/* Dynamic glare effect based on mouse hover */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovering ? 0.4 : 0 }}
                className="absolute inset-0 z-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none mix-blend-overlay"
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default function Variant10GlassGeometric() {

    // App-level mouse tracking for floating background geometric shapes
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const smoothMouseX = useSpring(mouse.x, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouse.y, { stiffness: 50, damping: 20 });

    // Transforms for background shapes
    const shape1X = useTransform(smoothMouseX, [0, 2000], [50, -50]);
    const shape1Y = useTransform(smoothMouseY, [0, 1000], [50, -50]);

    const shape2X = useTransform(smoothMouseX, [0, 2000], [-80, 80]);
    const shape2Y = useTransform(smoothMouseY, [0, 1000], [-80, 80]);

    useEffect(() => {
        const handleGlobalMouse = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleGlobalMouse);
        return () => window.removeEventListener("mousemove", handleGlobalMouse);
    }, []);

    return (
        <div className="font-sans text-white min-h-screen relative overflow-x-hidden selection:bg-fuchsia-500 selection:text-white pb-32">

            {/* GLOBAL BACKGROUND ENGINES */}
            <div className="fixed inset-0 z-0 bg-[#0A0014]">
                {/* Mouse tracking abstract geometric background blurs */}
                <motion.div
                    style={{ x: shape1X, y: shape1Y }}
                    className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-fuchsia-600/30 rounded-full mix-blend-screen filter blur-[120px]"
                ></motion.div>

                <motion.div
                    style={{ x: shape2X, y: shape2Y }}
                    className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px]"
                ></motion.div>

                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10">

                {/* SECTION 1: Translucent Hero */}
                <section className="min-h-screen flex items-center justify-center px-6">
                    <TiltCard className="p-16 md:p-24 max-w-5xl text-center w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="inline-block px-4 py-1 mb-8 rounded-full border border-fuchsia-500/30 text-fuchsia-400 text-sm tracking-widest font-bold font-mono">
                                NOBEL WEALTH LABS
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-fuchsia-200 to-blue-200">
                                Geometric Transparency.
                            </h1>
                            <p className="text-xl md:text-3xl font-light text-white/70 max-w-3xl mx-auto leading-relaxed">
                                Shattering the opacity of traditional Australian banking. We engineer crystalline fixed-income structures where every yield variable is completely visible.
                            </p>
                        </motion.div>
                    </TiltCard>
                </section>

                {/* SECTION 2: 3D Dimension Philosophy */}
                <section className="py-32 px-6 max-w-7xl mx-auto relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <TiltCard className="p-12 aspect-square flex flex-col justify-center">
                            <h2 className="text-4xl font-bold mb-6">Multi-Dimensional Capital</h2>
                            <p className="text-xl text-white/60 leading-relaxed mb-6">
                                Retail investments exist on a flat plane. You put money in; you hope it goes up.
                            </p>
                            <p className="text-xl text-white/60 leading-relaxed">
                                Nobel architects your portfolio in three dimensions. We assess yield probability, macroeconomic stress, and regulatory fortified mass—building a structure that cannot simply tip over.
                            </p>
                        </TiltCard>
                        {/* Decorative floating isometric shapes */}
                        <div className="relative h-full min-h-[500px] hidden lg:block">
                            <motion.div
                                animate={{ rotateZ: 360, rotateX: 360 }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="absolute top-1/4 left-1/4 w-48 h-48 border-2 border-fuchsia-500/50 rounded-xl"
                            />
                            <motion.div
                                animate={{ rotateZ: -360, rotateY: 360 }}
                                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                                className="absolute bottom-1/4 right-1/4 w-64 h-64 border-2 border-blue-500/50 rounded-full"
                            />
                        </div>
                    </div>
                </section>

                {/* SECTION 3: Fractional Metrics */}
                <section className="py-32 px-6 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { raw: "1.5", unit: "B", title: "Institutional Scale" },
                            { raw: "0", unit: "%", title: "Retail Commission" },
                            { raw: "100", unit: "%", title: "ASIC Regulated" }
                        ].map((metric, i) => (
                            <TiltCard key={i} className="p-12 text-center group">
                                <div className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white group-hover:text-fuchsia-400 transition-colors duration-500">
                                    {metric.raw}<span className="text-white/30">{metric.unit}</span>
                                </div>
                                <div className="text-sm tracking-widest uppercase font-bold text-white/60">{metric.title}</div>
                            </TiltCard>
                        ))}
                    </div>
                </section>

                {/* SECTION 4: Architecture Blueprints */}
                <section className="py-32 px-6 max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16">The Geometric Scaffold</h2>
                    <div className="space-y-8">
                        {[
                            { title: "Layer 1: Absolute State (Sovereign)", desc: "Australian Government issuance. The mathematical zero-risk foundation." },
                            { title: "Layer 2: Corporate Hybrid", desc: "Tier-1 banking debt. Calculated spread capturing optimized yield variance." },
                            { title: "Layer 3: Equities Node", desc: "Select top-decile ASX companies mapped for continuous dividend outputs." }
                        ].map((layer, i) => (
                            <TiltCard key={i} className="p-10 flex flex-col md:flex-row md:items-center gap-8">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-fuchsia-600 to-blue-600 flex items-center justify-center text-2xl font-black shadow-[0_0_30px_rgba(217,70,239,0.5)]">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold mb-2">{layer.title}</h3>
                                    <p className="text-xl text-white/60">{layer.desc}</p>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </section>

                {/* SECTION 5: The Interface (Tech Showcase) */}
                <section className="py-32 px-6 max-w-7xl mx-auto text-center">
                    <TiltCard className="p-16 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-3xl mx-auto"
                        >
                            <h2 className="text-5xl font-bold mb-6 tracking-tight">Algorithmic Oversight.</h2>
                            <p className="text-2xl text-white/60 leading-relaxed mb-12">
                                Our proprietary portal provides crystalline optics into your portfolio. Watch market shifts, bond maturity curves, and yield aggregations compute in real-time.
                            </p>
                            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500">
                                <button className="px-8 py-4 bg-black/80 rounded-xl font-bold uppercase tracking-widest hover:bg-black/40 transition-colors backdrop-blur-md">
                                    Initiate Portal Demo
                                </button>
                            </div>
                        </motion.div>
                    </TiltCard>
                </section>

                {/* SECTION 6: The Advisor Prism */}
                <section className="py-24 px-6 max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-light text-white/80 leading-relaxed italic mb-8">
                        "We do not bend light; we let it pass straight through. Total fiduciary transparency means we are entirely separated from product providers."
                    </h2>
                    <div className="text-fuchsia-400 font-bold uppercase tracking-widest">Nobel Fiduciary Board</div>
                </section>

                {/* SECTION 7: Holographic Contact Matrix */}
                <section className="py-32 px-6 max-w-2xl mx-auto">
                    <TiltCard className="p-12">
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-bold mb-4">Connect to the Network</h2>
                            <p className="text-white/60">Upload your parameters for an initial capital evaluation.</p>
                        </div>
                        <form className="space-y-6">
                            <div>
                                <input type="text" placeholder="Entity Designation (Name)" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-fuchsia-500 focus:bg-white/10 transition-all font-mono" />
                            </div>
                            <div>
                                <input type="email" placeholder="Signal Origin (Email)" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-fuchsia-500 focus:bg-white/10 transition-all font-mono" />
                            </div>
                            <button className="w-full bg-white text-black font-black uppercase tracking-widest p-5 rounded-xl hover:bg-fuchsia-400 transition-colors mt-6 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                Transmit Data
                            </button>
                        </form>
                    </TiltCard>
                </section>

            </div>
        </div>
    );
}
