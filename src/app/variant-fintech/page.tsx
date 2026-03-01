import Image from 'next/image';

export default function TechFintechVariant() {
    return (
        <div className="font-mono bg-[#0B0F19] text-[#E2E8F0] overflow-x-hidden min-h-screen">

            {/* Dynamic grid background */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* 1. Hero Section - Algorithmic Core */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 z-10 border-b border-[#1E293B]">
                {/* Glow effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/20 rounded-full mix-blend-screen filter blur-[100px] animate-[pulse_4s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F59E0B]/10 rounded-full mix-blend-screen filter blur-[100px] animate-[pulse_6s_ease-in-out_infinite]"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-[fade-in-right_1s_ease-out]">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E293B]/80 text-[#3B82F6] text-xs font-bold rounded mb-6 border border-[#3B82F6]/30">
                            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-ping"></span>
                            SYSTEM_ONLINE
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#3B82F6]">
                                Algorithmic
                            </span><br />
                            Wealth Gen.
                        </h1>
                        <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed max-w-lg font-sans">
                            Deploying quantitative models across Australian fixed income markets. We process millions of data points to generate predictable, risk-adjusted returns.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#3B82F6] text-white px-8 py-3 font-bold hover:bg-[#2563EB] transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                [ RUN_MODEL ]
                            </button>
                            <button className="bg-transparent text-[#94A3B8] border border-[#1E293B] px-8 py-3 font-bold hover:bg-[#1E293B] transition-colors">
                                VIEW_DOCS
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-[#1E293B] shadow-[0_0_50px_rgba(59,130,246,0.1)] animate-[fade-in-left_1s_ease-out_0.3s_both] group">
                        <Image
                            src="/images/tech_fintech.png"
                            alt="Aura Fintech Control Room Sydney"
                            fill
                            className="object-cover transition-transform duration-[8s] group-hover:scale-105"
                            priority
                        />
                        {/* UI Overlay mockups over image */}
                        <div className="absolute top-4 left-4 bg-[#0B0F19]/80 backdrop-blur border border-[#1E293B] p-3 text-xs">
                            <div className="text-[#3B82F6] mb-1">NODE_01: SYD_ACTV</div>
                            <div className="text-green-400">YIELD: +4.82%</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Tech Stack / Methods */}
            <section className="py-24 z-10 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">{'<Architecture>'}</h2>
                        <div className="h-[2px] w-full bg-gradient-to-r from-[#3B82F6] via-[#1E293B] to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { id: "01", title: "Data Ingestion", desc: "Real-time parsing of RBA rate announcements, ASX corporate debt issuances, and global macroeconomic indicators." },
                            { id: "02", title: "Risk Algorithms", desc: "Proprietary ML models evaluating default probabilities across 500+ Australian corporate entities simultaneously." },
                            { id: "03", title: "Automated Execution", desc: "High-frequency precision locking in yield spreads before manual market participants can react." }
                        ].map((feature, i) => (
                            <div key={i} className="bg-[#0F172A] border border-[#1E293B] p-8 hover:border-[#3B82F6]/50 transition-colors group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 font-bold text-[#1E293B] text-4xl group-hover:text-[#3B82F6]/20 transition-colors">.{feature.id}</div>
                                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{feature.title}</h3>
                                <p className="text-[#94A3B8] font-sans relative z-10">{feature.desc}</p>
                                <div className="w-0 h-[2px] bg-[#3B82F6] absolute bottom-0 left-0 group-hover:w-full transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Live Data Simulation */}
            <section className="py-24 bg-[#0F172A] border-y border-[#1E293B] z-10 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold font-sans">ACTIVE STRATEGIES</h2>
                        <div className="flex gap-2">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                    </div>

                    <div className="bg-[#0B0F19] rounded-lg border border-[#1E293B] overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left font-sans text-sm">
                                <thead className="bg-[#1E293B] text-[#94A3B8] font-mono text-xs">
                                    <tr>
                                        <th className="p-4">TICKER</th>
                                        <th className="p-4">INSTRUMENT</th>
                                        <th className="p-4">TARGET_YIELD</th>
                                        <th className="p-4">RISK_SCORE</th>
                                        <th className="p-4">STATUS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#1E293B]">
                                    <tr className="hover:bg-[#1E293B]/50 transition-colors">
                                        <td className="p-4 font-bold text-white">GOV_10Y</td>
                                        <td className="p-4 text-[#94A3B8]">AU Treasury Bond</td>
                                        <td className="p-4 text-green-400">4.15%</td>
                                        <td className="p-4"><div className="w-full bg-[#1E293B] h-2 rounded"><div className="bg-[#3B82F6] h-2 rounded w-[10%]"></div></div></td>
                                        <td className="p-4 text-[#3B82F6]">EXECUTING</td>
                                    </tr>
                                    <tr className="hover:bg-[#1E293B]/50 transition-colors">
                                        <td className="p-4 font-bold text-white">CBA_SUB</td>
                                        <td className="p-4 text-[#94A3B8]">CBA Subordinated Notes</td>
                                        <td className="p-4 text-green-400">6.20%</td>
                                        <td className="p-4"><div className="w-full bg-[#1E293B] h-2 rounded"><div className="bg-[#F59E0B] h-2 rounded w-[45%]"></div></div></td>
                                        <td className="p-4 text-[#3B82F6]">EXECUTING</td>
                                    </tr>
                                    <tr className="hover:bg-[#1E293B]/50 transition-colors">
                                        <td className="p-4 font-bold text-white">BHP_CORP</td>
                                        <td className="p-4 text-[#94A3B8]">BHP Corporate Debt</td>
                                        <td className="p-4 text-green-400">5.50%</td>
                                        <td className="p-4"><div className="w-full bg-[#1E293B] h-2 rounded"><div className="bg-green-500 h-2 rounded w-[25%]"></div></div></td>
                                        <td className="p-4 text-[#F59E0B]">ANALYZING</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Security & Compliance Protocol */}
            <section className="py-24 z-10 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-[12rem] font-bold leading-none text-[#1E293B] absolute -z-10 -ml-8 mt-[-4rem]">SEC</div>
                        <h2 className="text-4xl font-bold text-white mb-6">Cryptographic Security. ASIC Regulated.</h2>
                        <p className="text-[#94A3B8] font-sans text-lg mb-6 leading-relaxed">
                            Despite our technological velocity, our regulatory foundation is immutable. We operate under a full Australian Financial Services License (AFSL).
                        </p>
                        <ul className="space-y-4 font-sans text-[#E2E8F0]">
                            <li className="flex items-center gap-3"><span className="text-[#3B82F6]">{'>'}</span> Institutional Custodial Vaults</li>
                            <li className="flex items-center gap-3"><span className="text-[#3B82F6]">{'>'}</span> Real-time API Client Reporting</li>
                            <li className="flex items-center gap-3"><span className="text-[#3B82F6]">{'>'}</span> End-to-end 256-bit Encryption</li>
                        </ul>
                    </div>

                    <div className="bg-[#0F172A] border border-[#1E293B] p-8 aspect-square flex flex-col items-center justify-center relative shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
                        <div className="w-48 h-48 border-4 border-[#1E293B] rounded-full flex items-center justify-center relative">
                            <div className="absolute inset-0 border-4 border-t-[#3B82F6] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-[spin_2s_linear_infinite]"></div>
                            <div className="absolute inset-2 border-4 border-b-[#F59E0B] border-r-transparent border-t-transparent border-l-transparent rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>
                            <div className="text-center">
                                <div className="text-[#94A3B8] text-xs">SYSTEM</div>
                                <div className="text-white font-bold text-xl">SECURE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Terminal CLI Contact */}
            <section className="py-20 z-10 relative border-t border-[#1E293B] bg-[#0B0F19]">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="bg-[#0F172A] p-6 border border-[#1E293B] rounded shadow-2xl">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-[#1E293B]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#1E293B]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#1E293B]"></div>
                        </div>
                        <div className="font-mono text-sm text-[#3B82F6]">
                            $ ./init_client_onboarding.sh<br />
                            <span className="text-[#94A3B8]">Requesting API key for institutional application...</span><br /><br />
                            $ enter_email:<br />
                            <input type="text" className="bg-transparent border-b border-[#3B82F6] outline-none text-white w-full max-w-xs mt-2 focus:border-white transition-colors animate-pulse" autoFocus />
                        </div>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fade-in-right { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fade-in-left { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
      `}} />
        </div>
    );
}
