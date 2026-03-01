"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Custom V14 Header (Noir Emerald)
const V14Header = () => (
    <header className="fixed top-0 w-full z-50 bg-[#02130C]/90 backdrop-blur-md border-b border-[#064E3B] px-8 py-5 flex justify-between items-center text-[#A7F3D0] shadow-[0_4px_30px_rgba(4,120,87,0.15)]">
        <div className="font-serif text-2xl tracking-widest uppercase flex items-center gap-4">
            <span className="w-8 h-px bg-[#10B981]"></span>
            <span className="font-light text-white">NOBEL</span> | TACTILE
        </div>
        <nav className="hidden md:flex gap-10 text-xs font-mono tracking-widest uppercase">
            <Link href="#" className="hover:text-white transition-colors">Physical Yield</Link>
            <Link href="#" className="hover:text-white transition-colors">Vault Architecture</Link>
            <Link href="#" className="hover:text-white transition-colors">Syndicate</Link>
        </nav>
        <button className="bg-[#059669] hover:bg-[#047857] text-[#022C22] font-bold px-6 py-2 uppercase tracking-widest text-xs transition-colors border border-[#10B981]">
            Enter Vault
        </button>
    </header>
);

// Custom V14 Footer
const V14Footer = () => (
    <footer className="bg-[#010B07] text-[#6EE7B7] border-t-2 border-[#064E3B] py-20 px-8 font-serif">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
                <div className="font-serif text-3xl tracking-widest uppercase text-white mb-6 border-b border-[#047857] pb-4 inline-block">NOBEL PRIVATE.</div>
                <p className="max-w-md text-lg leading-relaxed mb-8 text-[#A7F3D0] font-light italic">
                    "Capital is an abstract concept until it occupies physical space. We ensure your yield has weight."
                </p>
                <p className="text-xs text-[#059669] font-mono tracking-widest">© 2026 TACTILE RESERVES.</p>
            </div>
            <div>
                <h4 className="text-white font-mono mb-6 tracking-widest text-xs uppercase border-b border-[#064E3B] pb-2">Institutional Hub</h4>
                <ul className="space-y-4 text-sm tracking-wide">
                    <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#10B981]">▸</span> Directory</Link></li>
                    <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#10B981]">▸</span> Bloodline</Link></li>
                    <li><Link href="/knowledge-hub" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-[#10B981]">▸</span> Intelligence</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-mono mb-6 tracking-widest text-xs uppercase border-b border-[#064E3B] pb-2">Compliance Framework</h4>
                <ul className="space-y-4 text-sm tracking-wide text-[#34D399]">
                    <li>ASIC AFSL: 457891</li>
                    <li>Wholesale Certificates Active</li>
                    <li><Link href="#" className="hover:text-white transition-colors underline decoration-[#059669]">Privacy Protocol</Link></li>
                </ul>
            </div>
        </div>
    </footer>
);

export default function Variant14TactileLiquidity() {

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    const slowZoom = {
        hidden: { scale: 1.1, opacity: 0 },
        show: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }
    };

    return (
        <div className="bg-[#02130C] text-[#D1FAE5] font-serif selection:bg-[#10B981] selection:text-[#02130C] min-h-screen">
            <V14Header />

            {/* SECTION 1: Video Hero (Money falling/printing conceptual) */}
            <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay loop muted playsInline
                        className="w-full h-full object-cover filter brightness-50 contrast-125 sepia-[0.3] hue-rotate-[140deg]"
                    >
                        {/* Using the money counting video for Tactile Liquidity */}
                        <source src="/vid/hand-holding-a-fan-of-australian-twenty-dollar-notes-against-black-backdrop-SBV-353404207-preview.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02130C] via-[#02130C]/60 to-transparent"></div>
                    {/* Vignette */}
                    <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(2,19,12,1)]"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <div className="text-[#10B981] font-mono tracking-[0.4em] uppercase text-sm mb-8 border-b border-[#10B981]/30 pb-4 inline-block">
                            Physical Capital Reserve
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight mb-8 drop-shadow-2xl">
                            Tactile <br />
                            <span className="italic text-[#6EE7B7]">Liquidity.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-[#A7F3D0] max-w-2xl mx-auto leading-relaxed">
                            We transform digital ledger balances into heavy, indisputable, physical wealth. The ultimate hedge against systemic abstraction.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-12 right-12 text-[#059669] font-mono text-xs tracking-[0.2em] flex flex-col items-end gap-2">
                    <span>VOL: 24,000</span>
                    <span>VEL: MAXIMUM</span>
                    <span className="w-12 h-px bg-[#10B981]"></span>
                </div>
            </section>

            {/* SECTION 2: The Vault Grid (Images 1, 5, 4) */}
            <section className="py-32 relative z-20 bg-[#02130C] border-t-2 border-[#064E3B]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp as any}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 uppercase tracking-widest">
                            The Weight of <span className="text-[#10B981] italic">Yield</span>
                        </h2>
                        <div className="w-24 h-px bg-[#064E3B] mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Large Feature - Image 5 (Safe) */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={slowZoom as any}
                            className="md:col-span-8 relative aspect-[16/9] rounded-sm overflow-hidden border border-[#064E3B] group"
                        >
                            <Image src="/images/v14_tactile_liquidity_5.png" alt="Capital Vault" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-[#02130C]/40 group-hover:bg-transparent transition-colors duration-500"></div>
                            <div className="absolute bottom-6 left-6 bg-[#02130C]/80 backdrop-blur-sm border border-[#064E3B] p-4">
                                <div className="text-[#10B981] font-mono text-xs tracking-widest mb-1">RESERVE NODE 01</div>
                                <h3 className="text-white font-serif text-xl">Cold Storage</h3>
                            </div>
                        </motion.div>

                        <div className="md:col-span-4 flex flex-col gap-6">
                            {/* Image 1 ( polymer notes ) */}
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeUp as any}
                                className="relative flex-1 rounded-sm overflow-hidden border border-[#064E3B] group"
                            >
                                <Image src="/images/v14_tactile_liquidity_1.png" alt="Polymer Currency" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-[#02130C]/40 group-hover:bg-transparent transition-colors duration-500"></div>
                            </motion.div>

                            {/* Image 4 ( Banker's Lamp ) */}
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeUp as any}
                                className="relative flex-1 rounded-sm overflow-hidden border border-[#064E3B] group"
                            >
                                <Image src="/images/v14_tactile_liquidity_4.png" alt="Deep Analysis" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-[#02130C]/40 group-hover:bg-transparent transition-colors duration-500"></div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 3: Noir Manifesto (Images 2, 9) */}
            <section className="py-0 relative min-h-screen flex items-center bg-[#010905]">

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20">

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp as any}
                        className="space-y-8"
                    >
                        <h2 className="text-5xl lg:text-6xl font-serif text-white leading-tight">
                            Exclusivity is not a luxury. <br />
                            <span className="text-[#059669] italic">It is a risk control matrix.</span>
                        </h2>
                        <p className="text-xl text-[#A7F3D0] font-light leading-relaxed">
                            The private wealth club environment (Image 2) and the empty boardroom (Image 9) represent our operational isolation. We do not participate in mass-market liquidity pools. We operate in closed systems where yield is generated privately, securely, and with absolute discretion.
                        </p>
                        <div className="flex gap-8 pt-8">
                            <div className="border-l-2 border-[#10B981] pl-4">
                                <div className="text-3xl text-white font-serif mb-1">0.00%</div>
                                <div className="text-xs text-[#059669] font-mono tracking-widest uppercase">Public Market Exposure</div>
                            </div>
                            <div className="border-l-2 border-[#10B981] pl-4">
                                <div className="text-3xl text-white font-serif mb-1">100%</div>
                                <div className="text-xs text-[#059669] font-mono tracking-widest uppercase">Private Syndicate Access</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative">
                        {/* Image 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[4/5] w-3/4 ml-auto rounded-sm border border-[#064E3B] shadow-[0_20px_50px_rgba(2,19,12,1)] overflow-hidden z-20"
                        >
                            <Image src="/images/v14_tactile_liquidity_2.png" alt="Private Club" fill className="object-cover" />
                        </motion.div>
                        {/* Image 9 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="absolute bottom-[-10%] left-0 w-2/3 aspect-video rounded-sm border border-[#059669] shadow-2xl overflow-hidden z-30"
                        >
                            <Image src="/images/v14_tactile_liquidity_9.png" alt="Boardroom" fill className="object-cover" />
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* SECTION 4: The Ingredients of Solid Wealth (Images 3, 7, 6) */}
            <section className="py-32 bg-[#02130C] border-y border-[#064E3B]">
                <div className="max-w-[90rem] mx-auto px-6">

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp as any}
                        className="mb-20 text-center"
                    >
                        <span className="text-[#10B981] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Elemental Capital</span>
                        <h2 className="text-5xl font-serif text-white">Solidification Protocol</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Image 3: Liquid Gold */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeUp as any}
                            className="group"
                        >
                            <div className="aspect-square relative rounded-full overflow-hidden border-4 border-[#064E3B] mb-8 group-hover:border-[#10B981] transition-colors duration-500">
                                <Image src="/images/v14_tactile_liquidity_3.png" alt="Liquid Gold" fill className="object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                            </div>
                            <h3 className="text-2xl text-white font-serif mb-4 text-center">Liquidity Capture</h3>
                            <p className="text-[#A7F3D0] text-center font-light px-6">Siphoning high-velocity yield from macro-economic inefficiencies before they collapse.</p>
                        </motion.div>

                        {/* Image 7: Emerald Marble */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={{ ...fadeUp, transition: { delay: 0.2, duration: 1 } } as any}
                            className="group"
                        >
                            <div className="aspect-square relative rounded-full overflow-hidden border-4 border-[#064E3B] mb-8 group-hover:border-[#10B981] transition-colors duration-500">
                                <Image src="/images/v14_tactile_liquidity_7.png" alt="Emerald Marble" fill className="object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                            </div>
                            <h3 className="text-2xl text-white font-serif mb-4 text-center">Permanent Foundation</h3>
                            <p className="text-[#A7F3D0] text-center font-light px-6">Anchoring captured yield into unshakeable, heavily regulated institutional structures.</p>
                        </motion.div>

                        {/* Image 6: Signet Ring Hand */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={{ ...fadeUp, transition: { delay: 0.4, duration: 1 } } as any}
                            className="group"
                        >
                            <div className="aspect-square relative rounded-full overflow-hidden border-4 border-[#064E3B] mb-8 group-hover:border-[#10B981] transition-colors duration-500">
                                <Image src="/images/v14_tactile_liquidity_6.png" alt="Authoritative Command" fill className="object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                            </div>
                            <h3 className="text-2xl text-white font-serif mb-4 text-center">Authoritative Command</h3>
                            <p className="text-[#A7F3D0] text-center font-light px-6">Execution signed not by algorithms, but by vastly experienced fiduciary custodians.</p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* SECTION 5: The Contract (Image 10) & Form */}
            <section className="relative min-h-screen py-32 bg-[#010905]">
                {/* Large Abstract Background */}
                <div className="absolute top-0 right-0 w-2/3 h-full opacity-20 pointer-events-none">
                    {/* Image 8 (Clock) used as large background texture for time/patience concept */}
                    <Image src="/images/v14_tactile_liquidity_8.png" alt="Patience" fill className="object-cover filter contrast-150" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#010905]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 flex items-center h-full">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] w-full relative rounded-sm border border-[#064E3B] shadow-2xl overflow-hidden mb-8">
                            <Image src="/images/v14_tactile_liquidity_10.png" alt="The Contract" fill className="object-cover" />
                        </div>
                        <div className="border-l-4 border-[#10B981] pl-6 py-2">
                            <h3 className="text-white text-3xl font-serif italic">"Agreements carved in stone, executed in ink."</h3>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="bg-[#02130C]/90 p-12 border-t-4 border-[#059669] shadow-[0_0_50px_rgba(4,120,87,0.1)]"
                    >
                        <h2 className="text-4xl text-white font-serif mb-4 uppercase tracking-widest">Establish Contact</h2>
                        <p className="text-[#A7F3D0] font-light mb-12">Submit your basic corporate or personal trust entity details. Our secure network protocols will establish a private line.</p>

                        <form className="space-y-8">
                            <div>
                                <label className="block text-[#059669] font-mono text-xs uppercase tracking-widest mb-2">Entity Lexicon</label>
                                <input type="text" className="w-full bg-[#010905] border-b border-[#064E3B] text-white p-4 font-serif focus:outline-none focus:border-[#10B981] transition-colors" />
                            </div>
                            <div>
                                <label className="block text-[#059669] font-mono text-xs uppercase tracking-widest mb-2">Secure Routing (Email)</label>
                                <input type="email" className="w-full bg-[#010905] border-b border-[#064E3B] text-white p-4 font-serif focus:outline-none focus:border-[#10B981] transition-colors" />
                            </div>
                            <button className="w-full bg-gradient-to-r from-[#064E3B] to-[#047857] hover:from-[#047857] hover:to-[#059669] text-white font-mono tracking-[0.3em] uppercase p-5 border border-[#10B981]/50 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                Transmit Directives
                            </button>
                        </form>
                    </motion.div>

                </div>
            </section>

            <V14Footer />
        </div>
    );
}
