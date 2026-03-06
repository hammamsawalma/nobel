import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Brand Guidelines | Nobel Private Wealth',
    description: 'Comprehensive digital brand identity and design system for Nobel Private Wealth.',
};

export default function BrandGuidelinesPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0A1A3A] selection:text-white pb-32">

            {/* Header Navigation */}
            <header className="sticky top-0 z-50 bg-[#0A1A3A] text-white py-4 px-6 md:px-12 flex items-center justify-between border-b border-white/10 shadow-lg">
                <div className="flex items-center gap-4">
                    <Link href="/" className="hover:text-blue-300 transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft size={16} /> Return to App
                    </Link>
                    <div className="h-6 w-px bg-white/20 hidden md:block"></div>
                    <span className="hidden md:block font-black tracking-tight text-xl">NOBEL PRIVATE WEALTH</span>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-blue-300 font-bold border border-blue-500/30 px-3 py-1.5 rounded-full bg-blue-900/20">
                    Digital Brand Book v1.0
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-[#0A1A3A] text-white pt-20 pb-32 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-blue-400 font-bold tracking-[0.2em] text-xs uppercase mb-6 inline-block border border-blue-400/30 py-1 px-3 rounded-full">Identity & Design System</div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">Architects of <br />Growth.</h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-medium">
                        This document serves as the single source of truth for the Nobel Private Wealth visual identity. It dictates our visual language, ensuring absolute consistency, trust, and institutional authority across all touchpoints.
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 lg:px-12 -mt-16 relative z-20 space-y-12 md:space-y-24">

                {/* 1. Core Strategy & Tone */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200" id="strategy">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-black text-xl">01</div>
                        <h2 className="text-3xl font-black text-[#0A1A3A]">Core Strategy & Tone</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-4 border-b pb-2">The Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To blueprint and execute institutional-grade portfolios designed for absolute preservation and calculated expansion. We provide fiduciary stewardship over multi-generational capital.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 border-b pb-2">The Voice</h3>
                            <p className="text-slate-600 leading-relaxed">
                                **Authoritative, Fiduciary, Transparent, and Precise.** We do not use hyperbole. We do not use slang. We speak in terms of architecture, strategy, and calculated defense.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-bold text-sm uppercase tracking-widest text-slate-500 mb-6">Copywriting Precepts</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="flex gap-3"><CheckCircle2 className="text-green-600 shrink-0" /> <span className="text-sm">Use "Strategic Execution" instead of "Fast Trades"</span></div>
                                <div className="flex gap-3"><CheckCircle2 className="text-green-600 shrink-0" /> <span className="text-sm">Use "Capital Preservation" instead of "Safe Money"</span></div>
                                <div className="flex gap-3"><CheckCircle2 className="text-green-600 shrink-0" /> <span className="text-sm">Use "Institutional Custody" instead of "Bank Accounts"</span></div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex gap-3 text-slate-400"><XCircle className="text-red-400 shrink-0" /> <span className="text-sm line-through decoration-red-400/50">"Get rich quick"</span></div>
                                <div className="flex gap-3 text-slate-400"><XCircle className="text-red-400 shrink-0" /> <span className="text-sm line-through decoration-red-400/50">"Hottest new stocks"</span></div>
                                <div className="flex gap-3 text-slate-400"><XCircle className="text-red-400 shrink-0" /> <span className="text-sm line-through decoration-red-400/50">"Don't miss out" (FOMO)</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Logo System */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200" id="logo">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-black text-xl">02</div>
                        <h2 className="text-3xl font-black text-[#0A1A3A]">Logo System & Rules</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Primary Logo Construction */}
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[300px] relative group overflow-hidden">
                            {/* Mathematical grid background mimicking PDF guidelines */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMjAgMEwwIDBaTTAgMjBMMjAgMjBaTTAgMEwyMCAwaC0yMFpNNSAwTDUgMjB6TTE1IDBMMTUgMjB6TTAgNUwyMCA1ek0wIDE1TDIwIDE1eiIgc3Ryb2tlPSIjZTRlNGEwIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4=')] opacity-30 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10 flex items-center gap-3">
                                {/* The physical logomark conceptual proxy */}
                                <div className="w-12 h-12 bg-[#0A1A3A] relative overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <div className="absolute top-0 right-0 w-0 h-0 border-l-[24px] border-l-transparent border-t-[24px] border-t-white mix-blend-overlay opacity-50"></div>
                                    <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[24px] border-r-transparent border-b-[24px] border-b-cyan-500 mix-blend-overlay opacity-80"></div>
                                    <span className="text-white font-black text-2xl relative z-20">N</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#0A1A3A] font-black tracking-tight text-3xl leading-none">NOBEL</span>
                                    <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[8px] mt-1 ml-1">Private Wealth</span>
                                </div>
                            </div>

                            {/* Clear Space Indicators */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[120px] border border-blue-400 border-dashed opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-blue-600 font-bold font-mono">CLEAR SPACE = 2x "N" HEIGHT</div>
                            </div>
                        </div>

                        <div className="bg-[#0A1A3A] border border-[#0A1A3A] rounded-2xl p-8 flex flex-col items-center justify-center min-h-[300px]">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute top-0 right-0 w-0 h-0 border-l-[24px] border-l-transparent border-t-[24px] border-t-[#0A1A3A] mix-blend-overlay opacity-20"></div>
                                    <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[24px] border-r-transparent border-b-[24px] border-b-cyan-400 mix-blend-overlay opacity-100"></div>
                                    <span className="text-[#0A1A3A] font-black text-2xl relative z-20">N</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-black tracking-tight text-3xl leading-none">NOBEL</span>
                                    <span className="text-slate-300 font-bold uppercase tracking-[0.3em] text-[8px] mt-1 ml-1">Private Wealth</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="font-bold text-lg mb-6 border-b pb-2">Logo Usage Constraints</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 border border-red-100 bg-red-50 rounded-xl relative">
                            <XCircle className="absolute top-4 right-4 text-red-500" size={20} />
                            <div className="opacity-50 blur-[2px] mb-4 text-[#0A1A3A] font-black text-2xl skew-x-12">NOBEL</div>
                            <p className="text-sm font-bold text-red-900">Never stretch or skew</p>
                        </div>
                        <div className="p-6 border border-red-100 bg-red-50 rounded-xl relative">
                            <XCircle className="absolute top-4 right-4 text-red-500" size={20} />
                            <div className="mb-4 text-purple-600 font-black text-2xl drop-shadow-lg">NOBEL</div>
                            <p className="text-sm font-bold text-red-900">Never use unauthorized colors or drop shadows</p>
                        </div>
                        <div className="p-6 border border-red-100 bg-red-50 rounded-xl relative">
                            <XCircle className="absolute top-4 right-4 text-red-500" size={20} />
                            <div className="flex items-center gap-1 mb-4 flex-col">
                                <span className="text-[#0A1A3A] font-black text-xs">NOBEL</span>
                            </div>
                            <p className="text-sm font-bold text-red-900">Minimum print height: 10mm. Minimum web width: 120px.</p>
                        </div>
                    </div>
                </section>

                {/* 3. The Color System (Exhaustive) */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200" id="colors">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-black text-xl">03</div>
                        <h2 className="text-3xl font-black text-[#0A1A3A]">The Color System</h2>
                    </div>

                    <p className="text-slate-600 mb-8 max-w-3xl leading-relaxed">
                        The Nobel color palette is intentionally restrained. It projects authority, security, and institutional weight. The ratio of usage across any collateral should be approximately: <strong>60% Whites/Slates (Negative Space), 30% Deep Blue (Structure & Headings), 10% Accents (Action & Data).</strong>
                    </p>

                    {/* Primary Color Hero */}
                    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg border border-slate-200 mb-12">
                        <div className="bg-[#0A1A3A] p-8 md:p-12 md:w-1/2 flex flex-col justify-between text-white min-h-[300px]">
                            <div>
                                <h3 className="text-3xl font-black mb-2">Nobel Deep Blue</h3>
                                <p className="text-slate-300 text-sm font-medium">Primary Brand Architecture</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-white/20 pb-2">
                                    <span className="text-xs uppercase tracking-widest text-slate-400">HEX</span>
                                    <span className="font-mono text-sm">#0A1A3A</span>
                                </div>
                                <div className="flex justify-between border-b border-white/20 pb-2">
                                    <span className="text-xs uppercase tracking-widest text-slate-400">RGB</span>
                                    <span className="font-mono text-sm">10, 26, 58</span>
                                </div>
                                <div className="flex justify-between border-b border-white/20 pb-2">
                                    <span className="text-xs uppercase tracking-widest text-slate-400">CMYK</span>
                                    <span className="font-mono text-sm">100, 85, 40, 60</span>
                                </div>
                                <div className="flex justify-between text-green-400 pt-2">
                                    <span className="text-xs uppercase tracking-widest">WCAG Contrast (on White)</span>
                                    <span className="font-mono text-sm font-bold pl-2 flex items-center gap-1"><CheckCircle2 size={14} /> 13.5:1 (AAA)</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                            {/* Tint Scale */}
                            {[
                                { weight: '900', hex: '#0A1A3A' },
                                { weight: '800', hex: '#112A5E' },
                                { weight: '700', hex: '#1A3F8C' },
                                { weight: '600', hex: '#265BE0' },
                                { weight: '500', hex: '#4F7CFF' },
                                { weight: '400', hex: '#8AA6FF' },
                                { weight: '300', hex: '#B5C7FF' },
                                { weight: '200', hex: '#DFE7FF' },
                                { weight: '100', hex: '#F0F4FF' },
                                { weight: '50', hex: '#F8FAFF' },
                            ].map((tint, i) => (
                                <div key={i} className="flex-1 flex items-center justify-between px-6" style={{ backgroundColor: tint.hex, color: i < 5 ? 'white' : '#0A1A3A' }}>
                                    <span className="font-bold text-sm">Blue {tint.weight}</span>
                                    <span className="font-mono text-xs opacity-70">{tint.hex}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Secondary & Semantic Colors */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Action Blue */}
                        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                            <div className="h-32 bg-[#2563EB] flex items-end p-4">
                                <span className="text-white font-black text-xl">Action Blue</span>
                            </div>
                            <div className="p-4 bg-white">
                                <div className="flex justify-between text-sm mb-2 font-mono"><span className="text-slate-500">HEX</span> #2563EB</div>
                                <p className="text-xs text-slate-500 mt-4 leading-relaxed">Used strictly for primary buttons, active states, and interactive textual links. Never as a background.</p>
                            </div>
                        </div>

                        {/* Highlight Cyan */}
                        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                            <div className="h-32 bg-[#06B6D4] flex items-end p-4">
                                <span className="text-white font-black text-xl">Highlight Cyan</span>
                            </div>
                            <div className="p-4 bg-white">
                                <div className="flex justify-between text-sm mb-2 font-mono"><span className="text-slate-500">HEX</span> #06B6D4</div>
                                <p className="text-xs text-slate-500 mt-4 leading-relaxed">Used for data visualization highlights, positive financial metrics, and subtle accents. Do not use for text on white.</p>
                            </div>
                        </div>

                        {/* Error Crimson */}
                        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                            <div className="h-32 bg-[#E11D48] flex items-end p-4">
                                <span className="text-white font-black text-xl">Alert Crimson</span>
                            </div>
                            <div className="p-4 bg-white">
                                <div className="flex justify-between text-sm mb-2 font-mono"><span className="text-slate-500">HEX</span> #E11D48</div>
                                <p className="text-xs text-slate-500 mt-4 leading-relaxed">Semantic color exclusively for negative financial metrics, form errors, and destructive actions (e.g., delete portfolio).</p>
                            </div>
                        </div>
                    </div>

                    {/* Accessibility Note */}
                    <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
                        <AlertCircle className="text-amber-600 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-amber-900">WCAG 2.1 Compliance Warning</h4>
                            <p className="text-sm text-amber-800 mt-2 leading-relaxed">
                                Never place Action Blue or Highlight Cyan text over Deep Blue backgrounds without testing. Always maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. Typography System */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200" id="typography">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-black text-xl">04</div>
                        <h2 className="text-3xl font-black text-[#0A1A3A]">Typography System</h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 mb-12 border-b border-slate-200 pb-12">
                        <div className="md:w-1/3">
                            <div className="text-[120px] leading-none font-black tracking-tighter text-[#0A1A3A] -ml-2">Aa</div>
                            <h3 className="text-2xl font-black mt-4">Inter</h3>
                            <p className="text-slate-500 text-sm mt-2 font-mono">Sans-Serif / Geometric</p>
                            <p className="text-slate-600 mt-4 leading-relaxed text-sm">
                                Inter is a highly legible typeface designed specifically for computer screens. We utilize its massive range of weights to create strict hierarchy without needing a secondary font.
                            </p>
                        </div>
                        <div className="md:w-2/3 flex flex-col justify-center space-y-6">
                            <div className="flex justify-between items-end border-b pb-2"><span className="text-4xl font-black tracking-tight">Black (900)</span> <span className="text-xs font-mono text-slate-400">Hero Headings</span></div>
                            <div className="flex justify-between items-end border-b pb-2"><span className="text-3xl font-bold tracking-tight">Bold (700)</span> <span className="text-xs font-mono text-slate-400">Standard Headings</span></div>
                            <div className="flex justify-between items-end border-b pb-2"><span className="text-2xl font-medium tracking-tight">Medium (500)</span> <span className="text-xs font-mono text-slate-400">Subtitles / Lead Config</span></div>
                            <div className="flex justify-between items-end border-b pb-2"><span className="text-xl font-normal tracking-tight">Regular (400)</span> <span className="text-xs font-mono text-slate-400">Body Text</span></div>
                            <div className="flex justify-between items-end"><span className="font-mono text-sm uppercase tracking-[0.2em] font-bold">Mono Setup</span> <span className="text-xs font-mono text-slate-400">Data & Tables</span></div>
                        </div>
                    </div>

                    <h3 className="font-bold text-lg mb-6 tracking-tight">Hierarchical Scale (Modular: Major Third 1.250)</h3>

                    <div className="space-y-8">
                        <div className="grid md:grid-cols-4 gap-4 items-baseline border-b pb-6">
                            <div className="font-mono text-xs text-slate-400">Display 1</div>
                            <div className="font-mono text-xs text-slate-400">72px / 4.5rem</div>
                            <div className="font-mono text-xs text-slate-400">Tracking: -0.05em / Leading: 1.1</div>
                            <div className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] text-[#0A1A3A] md:col-span-4 mt-2">Architects.</div>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4 items-baseline border-b pb-6">
                            <div className="font-mono text-xs text-slate-400">Heading 1</div>
                            <div className="font-mono text-xs text-slate-400">48px / 3rem</div>
                            <div className="font-mono text-xs text-slate-400">Tracking: -0.02em / Leading: 1.2</div>
                            <div className="text-3xl md:text-5xl font-black tracking-tight leading-[1.2] text-[#0A1A3A] md:col-span-4 mt-2">Institutional Wealth</div>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4 items-baseline border-b pb-6">
                            <div className="font-mono text-xs text-slate-400">Heading 2</div>
                            <div className="font-mono text-xs text-slate-400">30px / 1.875rem</div>
                            <div className="font-mono text-xs text-slate-400">Tracking: -0.01em / Leading: 1.3</div>
                            <div className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.3] text-[#0A1A3A] md:col-span-4 mt-2">Portfolio Overview Details</div>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4 items-baseline border-b pb-6">
                            <div className="font-mono text-xs text-slate-400">Body Text (Base)</div>
                            <div className="font-mono text-xs text-slate-400">16px / 1rem</div>
                            <div className="font-mono text-xs text-slate-400">Measure: Max 70ch / Leading: 1.6</div>
                            <div className="text-base font-normal leading-relaxed text-slate-600 md:col-span-4 mt-2 max-w-[70ch]">We orchestrate institutional-grade portfolios designed for absolute preservation and calculated expansion. Experience transparent, unbiased wealth management.</div>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4 items-baseline pb-4">
                            <div className="font-mono text-xs text-slate-400">Eyebrow / Overline</div>
                            <div className="font-mono text-xs text-slate-400">12px / 0.75rem</div>
                            <div className="font-mono text-xs text-slate-400">Tracking: 0.2em / Uppercase</div>
                            <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 md:col-span-4 mt-2">Strictly Regulated</div>
                        </div>
                    </div>
                </section>

                {/* 5. UI Application & Components */}
                <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200" id="components">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-black text-xl">05</div>
                        <h2 className="text-3xl font-black text-[#0A1A3A]">Component Library Rules</h2>
                    </div>

                    {/* Buttons */}
                    <div className="mb-12">
                        <h3 className="font-bold text-lg mb-4 border-b pb-2">Button Architecture</h3>
                        <p className="text-sm text-slate-500 mb-6">Buttons must be easily tappable, utilizing maximum padding constraints and specific hover transitions. Corner radius is strictly `rounded-full` for primary actions.</p>

                        <div className="flex flex-wrap gap-6 items-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
                            <button className="bg-[#0A1A3A] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/20">
                                Primary Action
                            </button>
                            <button className="bg-white border-2 border-slate-200 text-[#0A1A3A] px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:border-[#0A1A3A] transition-all">
                                Secondary Outline
                            </button>
                            <button className="text-slate-500 hover:text-[#0A1A3A] font-bold text-sm transition-colors border-b border-transparent hover:border-[#0A1A3A] pb-1">
                                Tertiary Text Link →
                            </button>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="mb-12">
                        <h3 className="font-bold text-lg mb-4 border-b pb-2">Data Input Fields</h3>
                        <div className="grid md:grid-cols-2 gap-8 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                            <div>
                                <label className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-3">Standard Input (Resting)</label>
                                <input type="text" className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl p-4 text-sm outline-none placeholder-slate-400" placeholder="e.g. Fiduciary Management" disabled />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-3">Active Focus State (Ring)</label>
                                <input type="text" className="w-full bg-white border border-blue-400 ring-2 ring-blue-100 text-slate-900 rounded-xl p-4 text-sm outline-none" defaultValue="Active Typing..." disabled />
                            </div>
                        </div>
                    </div>

                    {/* Elevation Shadow System */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 border-b pb-2">Elevation & Shadow System</h3>
                        <p className="text-sm text-slate-500 mb-6">We use physical elevation to indicate hierarchy. The background is Level 0. Cards sit at Level 1. Dropdowns at Level 2. Modals at Level 3.</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-slate-50 border border-slate-200 h-32 rounded-xl flex items-center justify-center p-4 text-center">
                                <span className="font-mono text-xs text-slate-500">Level 0<br />flat (`bg-slate-50`)</span>
                            </div>
                            <div className="bg-white border border-slate-100 shadow-sm h-32 rounded-xl flex items-center justify-center p-4 text-center">
                                <span className="font-mono text-xs text-slate-900 font-bold">Level 1<br />`shadow-sm`</span>
                            </div>
                            <div className="bg-white border border-slate-100 shadow-md h-32 rounded-xl flex items-center justify-center p-4 text-center relative z-10">
                                <span className="font-mono text-xs text-blue-600 font-bold">Level 2<br />`shadow-md`</span>
                            </div>
                            <div className="bg-white border border-slate-100 shadow-[0_20px_50px_rgba(10,26,58,0.15)] h-32 rounded-xl flex flex-col items-center justify-center p-4 text-center relative z-20">
                                <ShieldCheck size={24} className="text-[#0A1A3A] mb-2" />
                                <span className="font-mono text-xs text-[#0A1A3A] font-black">Level 3<br />Modal Depth</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Rule */}
                <div className="mt-16 text-center border-t border-slate-200 pt-8">
                    <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                        Nobel Private Wealth // Brand Guidelines v1.0 // Last Updated: Mar 2026
                    </p>
                </div>
            </div>
        </div>
    );
}
