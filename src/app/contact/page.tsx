"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ChevronRight } from 'lucide-react';
import V11Header from "@/components/v1/Header";
import V11Footer from "@/components/v1/Footer";

export default function ContactPage() {
    const snapSpring = { type: "spring", stiffness: 300, damping: 20, mass: 0.8 };

    return (
        <div className="bg-gray-50 text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white min-h-screen">
            <V11Header />

            {/* HERO SECTION */}
            <section className="bg-gradient-to-br from-[#0A1A3A] to-blue-900 pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-12 relative overflow-hidden border-b-[8px] border-[#0A1A3A]">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay z-0"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/40 to-transparent"></div>

                <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#0A1A3A] to-transparent z-0"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={snapSpring as any} className="mb-4">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 tracking-[0.2em] font-bold text-[10px] md:text-sm uppercase px-5 py-2 rounded-full inline-block">
                            PRIVATE CLIENT SERVICES
                        </div>
                    </motion.div>
                    <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.1 } as any} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6">
                        Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Contact.</span>
                    </motion.h1>
                    <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...snapSpring, delay: 0.2 } as any} className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        Initiate a confidential dialogue with our advisory team. We operate with absolute discretion and precision.
                    </motion.p>
                </div>
            </section>

            {/* CONTACT MAIN STRUCTURE */}
            <section className="py-20 md:py-32 px-6 lg:px-12 bg-white relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* LEFT: CONTACT DETAILS */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={snapSpring as any}
                            className="mb-12"
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-[#0A1A3A] mb-6">Global Reach.<br />Boutique Focus.</h2>
                            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                                Whether you require institutional portfolio structuring or family office advisory, our wealth architects are available to coordinate your capital strategy.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ...snapSpring, delay: 0.1 } as any}
                            className="space-y-8"
                        >
                            <div className="flex gap-6 items-start group">
                                <div className="bg-[#0A1A3A] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:-translate-y-1 transition-transform shadow-lg shadow-[#0A1A3A]/20">
                                    <MapPin className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Corporate Headquarters</h3>
                                    <p className="font-bold text-[#0A1A3A] text-lg leading-tight">Level 42, 100 Barangaroo Avenue<br />Sydney NSW 2000, Australia</p>
                                </div>
                            </div>

                            <a href="tel:+61280000000" className="flex gap-6 items-start group hover:opacity-80 transition-opacity">
                                <div className="bg-[#0A1A3A] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:-translate-y-1 transition-transform shadow-lg shadow-[#0A1A3A]/20">
                                    <Phone className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Direct Line</h3>
                                    <p className="font-bold text-[#0A1A3A] text-lg leading-tight">+61 2 8000 0000</p>
                                </div>
                            </a>

                            <a href="mailto:advisory@nobelwealth.com.au" className="flex gap-6 items-start group hover:opacity-80 transition-opacity">
                                <div className="bg-[#0A1A3A] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:-translate-y-1 transition-transform shadow-lg shadow-[#0A1A3A]/20">
                                    <Mail className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Electronic Correspondence</h3>
                                    <p className="font-bold text-[#0A1A3A] text-lg leading-tight">advisory@nobelwealth.com.au</p>
                                </div>
                            </a>

                            <div className="flex gap-6 items-start group">
                                <div className="bg-[#0A1A3A] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:-translate-y-1 transition-transform shadow-lg shadow-[#0A1A3A]/20">
                                    <Clock className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Secure Operating Hours</h3>
                                    <p className="font-bold text-[#0A1A3A] text-lg leading-tight">Monday - Friday<br />8:30 AM - 5:30 PM (AEST)</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: CONTACT FORM */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ...snapSpring, delay: 0.2 } as any}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -z-10 opacity-50"></div>

                            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <h3 className="text-2xl font-black text-[#0A1A3A] mb-8 border-b-2 border-gray-100 pb-4">Secure Inquiry Transmission</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Legal Name</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900 font-medium" placeholder="E.g. James Sterling" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Contact Number</label>
                                        <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900 font-medium" placeholder="+61 400 000 000" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Primary Email Address</label>
                                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900 font-medium" placeholder="james.sterling@example.com" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Target Area of Interest</label>
                                    <div className="relative">
                                        <select className="appearance-none w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900 font-medium" required>
                                            <option value="" disabled selected>Please select an advisory division</option>
                                            <option value="fixed-income">Premium Fixed Income Strategies</option>
                                            <option value="equities">Equities & Capital Growth</option>
                                            <option value="retirement">Retirement Architecture (SMSF)</option>
                                            <option value="corporate">Corporate & Executive Advisory</option>
                                            <option value="other">General Wealth Management Inquiry</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                                            <ChevronRight className="w-5 h-5 text-gray-400 rotate-90" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Confidential Message</label>
                                    <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900 font-medium resize-none" placeholder="Provide a brief overview of your current position and objectives..." required></textarea>
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="w-full bg-[#0A1A3A] text-white font-black uppercase tracking-widest px-6 md:px-8 py-4 md:py-5 rounded-full text-[10px] md:text-xs hover:bg-blue-600 transition-all flex justify-center items-center gap-3 shadow-lg group">
                                        Transmit Inquiry securely <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>

                                <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed font-medium">
                                    By submitting this form, you acknowledge our Privacy Collection Statement. Your data is encrypted and immediately routed to standard compliance protocols.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            <V11Footer />
        </div>
    );
}
