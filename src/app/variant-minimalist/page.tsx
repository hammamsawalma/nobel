import Image from 'next/image';

export default function MelbourneMinimalistVariant() {
    return (
        <div className="font-sans antialiased bg-black text-white selection:bg-white selection:text-black">

            {/* 1. Hero Section - Brutalist Monochromatic */}
            <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full z-0 animate-[fade-in-right_2s_ease-out]">
                    <div className="relative w-full h-full filter grayscale contrast-125">
                        <Image
                            src="/images/melbourne_minimalist.png"
                            alt="Melbourne Minimalist Boardroom"
                            fill
                            className="object-cover object-left"
                            priority
                        />
                        {/* Diagonal geometric cut */}
                        <div className="absolute inset-0 bg-black" style={{ clipPath: 'polygon(0 0, 30% 0, 0 100%)' }}></div>
                    </div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="max-w-xl animate-[fade-in-left_1s_ease-out]">
                        <div className="h-[1px] w-12 bg-white mb-8"></div>
                        <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8 leading-[0.9]">
                            Calculated<br /><span className="text-gray-500">Precision.</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light mb-12">
                            Institutional-grade capital allocation. Removing the emotional variable from Australian wealth management.
                        </p>
                        <button className="bg-white text-black px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-300 transition-colors">
                            Initialize Dialogue
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Thesis / Approach */}
            <section className="py-32 bg-zinc-950 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div>
                            <h2 className="text-3xl font-light tracking-tight mb-8">The Algorithmic Edge in Fixed Income</h2>
                            <div className="space-y-6 text-gray-400 font-light text-lg">
                                <p>In a landscape dominated by noise, we seek the signal. Our quantitative models evaluate every tier of the Australian debt market to construct portfolios that perform with machine-like reliability.</p>
                                <p>Melbourne-based. Globally informed. We do not speculate; we engineer yield.</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="text-4xl font-light text-gray-700 group-hover:text-white transition-colors duration-500">01</div>
                                <div>
                                    <h3 className="text-xl mb-1 mt-2">Data Supremacy</h3>
                                    <p className="text-gray-500 text-sm">Empirical analysis overrides sentiment.</p>
                                </div>
                            </div>
                            <div className="h-[1px] w-full bg-zinc-800"></div>
                            <div className="flex items-center gap-6 group">
                                <div className="text-4xl font-light text-gray-700 group-hover:text-white transition-colors duration-500">02</div>
                                <div>
                                    <h3 className="text-xl mb-1 mt-2">Structural Security</h3>
                                    <p className="text-gray-500 text-sm">ASIC-regulated custodial holding vehicles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Grid / Services */}
            <section className="py-0">
                <div className="grid grid-cols-1 md:grid-cols-3 border-y border-zinc-900 divide-y md:divide-y-0 md:divide-x divide-zinc-900">
                    {[
                        { title: "Sovereign Yield", text: "Australian Federal and State government bond aggregation for absolute capital protection." },
                        { title: "Credit Arbitrage", text: "Exploiting inefficiencies in the corporate debt sector through proprietary quantitative models." },
                        { title: "Defensive Equities", text: "Algorithmic selection of ASX200 companies demonstrating impenetrable balance sheets." }
                    ].map((service, idx) => (
                        <div key={idx} className="p-16 hover:bg-zinc-900 transition-colors duration-300 group cursor-crosshair">
                            <div className="h-2 w-2 bg-white mb-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <h3 className="text-2xl font-medium tracking-tight mb-4">{service.title}</h3>
                            <p className="text-gray-500 min-h-[80px]">{service.text}</p>
                            <div className="mt-12 text-xs tracking-widest uppercase text-gray-600 group-hover:text-white transition-colors flex items-center gap-2">
                                View Parameters <span className="block w-4 h-[1px] bg-current"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Marquee Metrics */}
            <section className="py-24 bg-black overflow-hidden relative">
                <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] opacity-20 hover:opacity-100 transition-opacity duration-700">
                    <span className="text-8xl md:text-[12rem] font-bold tracking-tighter mx-8">$2.5B AUM</span>
                    <span className="text-8xl md:text-[12rem] font-bold tracking-tighter mx-8 text-black" style={{ WebkitTextStroke: '2px white' }}>100% REGULATED</span>
                    <span className="text-8xl md:text-[12rem] font-bold tracking-tighter mx-8">ZERO DEFAULT</span>
                    <span className="text-8xl md:text-[12rem] font-bold tracking-tighter mx-8 text-black" style={{ WebkitTextStroke: '2px white' }}>INSTITUTIONAL</span>
                </div>
            </section>

            {/* 5. Terminal Contact */}
            <section className="py-32 bg-zinc-950 border-t border-zinc-900">
                <div className="max-w-2xl mx-auto px-6 font-mono text-sm">
                    <div className="mb-8 border-b border-zinc-800 pb-4 flex justify-between text-gray-500">
                        <span>SYSTEM: CptlGrd_Connect</span>
                        <span>STATUS: ONLINE</span>
                    </div>
                    <p className="text-gray-400 mb-6">{'>'} Initiate secure channel request for private wealth management.</p>

                    <div className="space-y-4">
                        <div className="flex items-center bg-black border border-zinc-800 p-4 focus-within:border-white transition-colors">
                            <span className="text-green-500 mr-4">{'>'}</span>
                            <input type="text" placeholder="ID (Name)" className="bg-transparent border-none outline-none text-white w-full placeholder-zinc-700" />
                        </div>
                        <div className="flex items-center bg-black border border-zinc-800 p-4 focus-within:border-white transition-colors">
                            <span className="text-green-500 mr-4">{'>'}</span>
                            <input type="text" placeholder="COMMS (Email)" className="bg-transparent border-none outline-none text-white w-full placeholder-zinc-700" />
                        </div>
                        <button className="w-full bg-white text-black p-4 font-bold uppercase hover:bg-gray-300 transition-colors mt-8">
                            [ EXECUTE REQUEST ]
                        </button>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fade-in-right { from { opacity: 0; transform: translateX(5%); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fade-in-left { from { opacity: 0; transform: translateX(-5%); } to { opacity: 1; transform: translateX(0); } }
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
      `}} />
        </div>
    );
}
