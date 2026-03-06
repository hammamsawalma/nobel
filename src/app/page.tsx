import Link from "next/link";
import Image from "next/image";

export default function AppGateway() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full font-sans tracking-tight">

            {/* LEFT SIDE: V1 (Modern Tech Structure) */}
            <Link
                href="/v1"
                className="group relative flex-1 flex flex-col justify-center items-center overflow-hidden bg-[#0A1A3A] text-white p-12 transition-all duration-700 hover:flex-[1.2]"
            >
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay bg-gradient-to-t from-black to-transparent" />
                {/* Hover FX */}
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 text-center max-w-md">
                    <div className="mb-6 opacity-80 uppercase tracking-[0.2em] text-xs font-bold text-blue-300 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        Original Architecture
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-xl transform group-hover:scale-105 transition-all duration-500">Noble Rock V1</h2>
                    <p className="text-gray-300 font-medium text-lg mb-8 leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        The high-velocity, modern institutional framework. Engineered for rapid execution and structural growth.
                    </p>
                    <div className="inline-block border border-white/20 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 backdrop-blur-md group-hover:bg-white group-hover:text-[#0A1A3A] transition-all duration-300">
                        Enter Standard Version
                    </div>
                </div>
            </Link>

            {/* RIGHT SIDE: V2 MASTERPIECE GILDED AGE */}
            <Link
                href="/v2"
                className="group relative flex-1 flex flex-col justify-center items-center overflow-hidden bg-noble-charcoal p-12 transition-all duration-700 hover:flex-[1.2] border-l border-noble-obsidian"
            >
                {/* Masterpiece The Heritage Library Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/v2/heritage_library_interior_1772822899708.png"
                        alt="Private Heritage Estate"
                        fill
                        className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-[1500ms] group-hover:scale-105 transform ease-[cubic-bezier(0.16,1,0.3,1)]"
                        priority
                    />
                </div>

                {/* Masterpiece Deep Gradient & Foil Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-obsidian-depth opacity-80 z-0" />
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] z-0" />

                {/* Foil Edge Highlights on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-[1500ms] bg-gradient-gold-foil mix-blend-color-dodge z-0" />

                {/* Cinematic Slow Reveal Hover Effects */}
                <div className="absolute inset-0 bg-noble-leather/40 opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms] z-10 mix-blend-multiply" />

                <div className="relative z-20 text-center max-w-md flex flex-col items-center">

                    {/* Minimalist Crest Placeholder */}
                    <div className="w-12 h-12 mb-8 border border-noble-gold-700 rounded-full flex items-center justify-center text-noble-gold-300 opacity-50 group-hover:opacity-100 transition-all duration-1000 group-hover:bg-gradient-gold-foil group-hover:border-transparent group-hover:text-noble-charcoal shadow-[0_0_30px_rgba(212,175,55,0)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                        <span className="font-serif italic text-xl translate-y-px">N</span>
                    </div>

                    <div className="mb-6 uppercase tracking-[0.3em] text-[10px] text-noble-gold-500 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        Private Wealth Variant
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif text-noble-ivory tracking-wide mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-[800ms] font-light">
                        Noble Rock <span className="text-noble-gold-500 italic">V2</span>
                    </h2>

                    <p className="text-noble-slate text-lg font-serif mb-8 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-100">
                        Exclusive fiduciary architecture for high-net-worth families and institutional capital.
                    </p>

                    {/* The Masterpiece Button */}
                    <div className="mt-4 text-[10px] uppercase tracking-[0.4em] font-bold text-noble-gold-500 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300 translate-y-4 group-hover:translate-y-0 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-noble-gold-700"></span>
                        Enter the Estate
                        <span className="w-8 h-[1px] bg-noble-gold-700"></span>
                    </div>

                </div>
            </Link>
        </div>
    );
}
