'use client';

import { useActionState } from 'react';
import { loginAction } from './actions';
import { ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminLogin() {
    const [state, formAction, isPending] = useActionState(loginAction, null);

    return (
        <div className="min-h-screen bg-[#0A1A3A] text-white flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background styling to match the premium theme */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 mb-6 shadow-2xl backdrop-blur-md">
                        <ShieldCheck className="w-10 h-10 text-blue-500" />
                    </div>
                    <h1 className="text-3xl font-black mb-2 tracking-tight">Admin Portal</h1>
                    <p className="text-blue-200">Authorized Personnel Only.</p>
                </div>

                <form action={formAction} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="mb-6 relative">
                        <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-widest text-xs">Access Protocol</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="Enter Master Password"
                                className="w-full bg-black/40 border border-white/10 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono"
                            />
                        </div>
                        {state?.error && (
                            <p className="text-red-400 text-sm mt-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                {state.error}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
                    >
                        {isPending ? 'Authenticating...' : 'Establish Connection'}
                        {!isPending && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </button>
                </form>

                <div className="text-center mt-8">
                    <p className="text-xs text-gray-500 font-mono">Nobel Wealth Intranet // v2.0</p>
                </div>
            </motion.div>
        </div>
    );
}
