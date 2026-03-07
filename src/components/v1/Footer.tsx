import Link from 'next/link';

export default function V11Footer() {
    return (
        <footer className="bg-[#0A1A3A] text-gray-300 py-16 px-8 text-center sm:text-left relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                <div className="md:col-span-1 border-b md:border-b-0 border-white/10 pb-8 md:pb-0">
                    <div className="font-black text-2xl tracking-tighter text-white mb-4">
                        NOBEL
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed mb-6 text-gray-400">
                        Institutional-grade portfolios engineered with precision, safeguarding your capital across generations.
                    </p>
                    <p className="text-xs text-gray-500">© 2026 Nobel Wealth. <br />All rights reserved.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                        <li><Link href="/who-we-are" className="hover:text-blue-400 transition-colors">Who We Are</Link></li>
                        <li><Link href="/fixed-income" className="hover:text-blue-400 transition-colors">Fixed Income</Link></li>
                        <li><Link href="/equities" className="hover:text-blue-400 transition-colors">Equities</Link></li>
                        <li><Link href="/how-to-invest" className="hover:text-blue-400 transition-colors">How to Invest</Link></li>
                        <li><Link href="/retirement-planning" className="hover:text-blue-400 transition-colors">Retirement Planning</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link href="/journal" className="hover:text-blue-400 transition-colors">The Journal</Link></li>
                        <li><Link href="/insights" className="hover:text-blue-400 transition-colors">Market Insights</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
                        <li><Link href="/scam-alert" className="hover:text-blue-400 transition-colors">Security & Fraud Alert</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Compliance Hub</h4>
                    <ul className="space-y-3 text-xs text-gray-500 flex flex-col items-start">
                        <li><Link href="/compliance/cookie-policy" className="hover:text-gray-300 transition-colors">Cookie Policy</Link></li>
                        <li><Link href="/compliance/cpd-policy" className="hover:text-gray-300 transition-colors">CPD Policy</Link></li>
                        <li><Link href="/compliance/fsg" className="hover:text-gray-300 transition-colors">Financial Services Guide</Link></li>
                        <li><Link href="/compliance/privacy" className="hover:text-gray-300 transition-colors">Privacy Statement</Link></li>
                        <li><Link href="/compliance/referrer" className="hover:text-gray-300 transition-colors">Referrer Policy</Link></li>
                        <li><Link href="/compliance/content-security" className="hover:text-gray-300 transition-colors">Website Content Security Policy</Link></li>
                        <li><Link href="/compliance/terms" className="hover:text-gray-300 transition-colors">Terms of Business</Link></li>
                        {/* More links can be added via the dropdown or dedicated compliance page */}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
