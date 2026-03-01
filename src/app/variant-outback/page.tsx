import Image from 'next/image';

export default function OutbackHeritageVariant() {
    return (
        <div className="font-serif bg-[#FAF6F0] text-[#2C2C2C]">

            {/* 1. Hero Section - Earthy Premium Heritage */}
            <section className="relative min-h-screen flex items-end pb-24 border-b-[16px] border-[#9A4B3A]">
                {/* Animated Background overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#FAF6F0] via-[#FAF6F0]/80 to-transparent"></div>
                <div className="absolute inset-0 z-0 bg-[#35483A] animate-[reveal-right_1.5s_cubic-bezier(0.77,0,0.175,1)]">
                    <Image
                        src="/images/outback_heritage.png"
                        alt="Outback Heritage Corporate Wealth Meeting Room"
                        fill
                        className="object-cover opacity-80 mix-blend-luminosity"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="max-w-2xl animate-[fade-in-up_1s_ease-out_0.5s_both]">
                        <h1 className="text-6xl md:text-8xl font-bold text-[#1A1A1A] leading-[0.9] tracking-tighter mb-6">
                            Wealth <br /> <span className="text-[#9A4B3A]">Rooted</span> in the Land.
                        </h1>
                        <p className="text-xl text-[#5A5A5A] font-sans max-w-lg mb-8">
                            Generational capital preservation strategies built on the robust foundation of the Australian economy.
                        </p>
                    </div>

                    <div className="bg-[#1A1A1A] p-8 md:p-12 text-[#EAEAEA] max-w-sm animate-[slide-left_1s_ease-out_0.8s_both] border-t-4 border-[#9A4B3A]">
                        <p className="font-sans text-sm tracking-widest uppercase mb-4 text-[#CFA771]">The Heritage Mandate</p>
                        <p className="text-lg leading-snug mb-8">
                            "We measure success not by the rapid ascent, but by the endurance against the dry seasons."
                        </p>
                        <button className="font-sans tracking-wide uppercase border-b border-[#CFA771] pb-1 hover:text-[#CFA771] transition-colors">
                            Read our manifesto
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Values / Materials Section */}
            <section className="py-32 bg-[#FAF6F0]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#35483A]">Solid Ground.</h2>
                            <div className="h-1 w-24 bg-[#9A4B3A] mb-8"></div>
                            <p className="font-sans text-lg text-[#5A5A5A] leading-relaxed">
                                Our investment philosophy mirrors the ancient landscape: enduring, resilient, and carefully adapted to survive all climates. We secure assets with absolute custodial integrity.
                            </p>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="bg-[#FEFCF9] border border-[#EAEAEA] p-10 hover:border-[#35483A] transition-colors duration-500">
                                <span className="block text-4xl text-[#9A4B3A] mb-4">01.</span>
                                <h3 className="text-2xl font-bold mb-4">Terracotta Resilience</h3>
                                <p className="font-sans text-[#5A5A5A]">Real asset allocation focusing on Australian agricultural and commercial infrastructure underlying our bond offerings.</p>
                            </div>
                            <div className="bg-[#FEFCF9] border border-[#EAEAEA] p-10 hover:border-[#35483A] transition-colors duration-500 mt-0 sm:mt-12">
                                <span className="block text-4xl text-[#35483A] mb-4">02.</span>
                                <h3 className="text-2xl font-bold mb-4">Eucalyptus Growth</h3>
                                <p className="font-sans text-[#5A5A5A]">Slow, steady, compounding wealth through highly regulated, investment-grade equities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Advisory Board */}
            <section className="py-24 bg-[#1A1A1A] text-[#FAF6F0]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">The Elders of Capital</h2>
                    <p className="font-sans text-[#CFA771] tracking-widest uppercase mb-20 text-sm">Fiduciary Executive Team</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="text-left group cursor-pointer">
                                <div className="aspect-[3/4] bg-[#2C2C2C] mb-6 overflow-hidden border border-[#35483A] group-hover:border-[#9A4B3A] transition-colors duration-500 relative">
                                    <div className="absolute inset-0 bg-[#35483A]/20 group-hover:bg-transparent transition-colors duration-700"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-[#EAEAEA]">Director Name</h3>
                                <p className="font-sans text-[#CFA771] mt-1 mb-4 text-sm">Head of Resources</p>
                                <div className="h-[1px] w-0 bg-[#9A4B3A] group-hover:w-full transition-all duration-700"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Indigenous Art Pattern Motif / Statistics */}
            <section className="py-32 bg-[#9A4B3A] text-[#FEFCF9] relative overflow-hidden">
                {/* Subtle dot pattern animation in background */}
                <div className="absolute inset-0 opacity-10 flex flex-wrap gap-4 items-center justify-center p-8 overflow-hidden pointer-events-none">
                    {[...Array(50)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full bg-white animate-[pulse_3s_ease-in-out_infinite]`} style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center items-center justify-center">
                        <div>
                            <p className="text-7xl font-bold mb-2">40+</p>
                            <p className="font-sans text-sm tracking-widest uppercase">Decades combined experience</p>
                        </div>
                        <div>
                            <p className="text-7xl font-bold mb-2">$3B</p>
                            <p className="font-sans text-sm tracking-widest uppercase">Administered Capital</p>
                        </div>
                        <div>
                            <p className="text-7xl font-bold mb-2">AFSL</p>
                            <p className="font-sans text-sm tracking-widest uppercase">Fully Regulated Entity</p>
                        </div>
                        <div>
                            <p className="text-7xl font-bold mb-2">100%</p>
                            <p className="font-sans text-sm tracking-widest uppercase">Onshore management</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Consultation Endplate */}
            <section className="py-32 bg-[#FAF6F0]">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-5xl font-bold text-[#1A1A1A] mb-8">Establish your legacy.</h2>
                    <p className="font-sans text-xl text-[#5A5A5A] mb-12">
                        Secure an appointment with our private wealth division.
                    </p>
                    <button className="bg-[#35483A] text-[#FAF6F0] font-sans font-semibold tracking-wider uppercase px-12 py-5 hover:bg-[#1A1A1A] transition-colors duration-300">
                        Request an Audience
                    </button>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes reveal-right { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-left { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
      `}} />
        </div>
    );
}
