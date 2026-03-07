"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, ShieldAlert } from "lucide-react";
import { useState, useEffect } from "react";

export default function ClientPortalModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [statusText, setStatusText] = useState("Awaiting authentication vector...");

    useEffect(() => {
        if (isOpen) {
            const timeout1 = setTimeout(() => setStatusText("Establishing secure connection..."), 1000);
            const timeout2 = setTimeout(() => setStatusText("Verifying biometric token..."), 2500);
            const timeout3 = setTimeout(() => setStatusText("Ready for credentials."), 4000);
            return () => { clearTimeout(timeout1); clearTimeout(timeout2); clearTimeout(timeout3); };
        } else {
            setStatusText("Awaiting authentication vector...");
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center font-sans tracking-wide">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#0A1A3A]/80 backdrop-blur-xl"
                        onClick={onClose}
                    ></motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-md relative z-10 shadow-2xl border border-gray-100 overflow-hidden"
                    >
                        {/* Top gradient accent */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400"></div>

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-gray-400 hover:text-[#0A1A3A] transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200">
                                <Lock className="w-8 h-8 text-[#0A1A3A]" />
                            </div>
                        </div>

                        <h2 className="text-3xl font-black text-center text-[#0A1A3A] mb-2 tracking-tight">Client Node</h2>
                        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Secure Access Portal</p>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold text-[#0A1A3A] uppercase tracking-widest mb-2">Entity ID / Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0A1A3A] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                    placeholder="Enter your registered ID"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-[#0A1A3A] uppercase tracking-widest mb-2 flex justify-between">
                                    <span>Access Key</span>
                                    <span className="text-blue-600 cursor-pointer hover:underline">Reset</span>
                                </label>
                                <input
                                    type="password"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0A1A3A] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                    placeholder="••••••••••••"
                                />
                            </div>

                            <button className="w-full bg-[#0A1A3A] hover:bg-blue-700 text-white font-bold py-4 rounded-xl uppercase tracking-widest text-sm transition-colors mt-4 shadow-lg shadow-blue-900/20">
                                Authenticate
                            </button>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 flex items-start gap-3">
                            <ShieldAlert className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                System log: <span className="font-mono text-blue-600">{statusText}</span><br />
                                Access is restricted to active partners. Unauthorised attempts are logged and flagged under ASIC regulations.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
