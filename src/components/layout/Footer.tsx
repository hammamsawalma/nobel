import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800" aria-label="Site Footer">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Top Row: Sitemap */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800">
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6 tracking-wide">Services</h3>
                        <ul className="space-y-4">
                            <li><Link href="/fixed-income" className="text-base hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm">Fixed Income</Link></li>
                            <li><Link href="/wealth-management" className="text-base hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm">Wealth Management</Link></li>
                            <li><Link href="/retirement-planning" className="text-base hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm">Retirement Planning</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6 tracking-wide">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-base hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm">About Us</Link></li>
                            <li><Link href="/contact" className="text-base hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm">Contact</Link></li>
                            <li><Link href="/portal" className="text-base hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm">Client Portal</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6 tracking-wide">Knowledge</h3>
                        <ul className="space-y-4">
                            <li><Link href="/knowledge-hub" className="text-base hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm">Insights</Link></li>
                            <li><Link href="/market-updates" className="text-base hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm">Market Updates</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Middle Row: Compliance */}
                <div className="py-2 text-sm leading-relaxed text-slate-400 max-w-4xl" role="contentinfo" aria-label="Compliance Information">
                    <p>
                        Nobel AU Pty Ltd is an authorized representative and regulated by the Australian Securities and Investments Commission (ASIC). AFSL No: [Insert Number]. ACN: [Insert Number]. We operate as a custodial service protecting client assets.
                    </p>
                    <p className="mt-4">
                        The information contained on this website is intended for general information purposes only. It does not take into account your personal investment objectives, financial situation, or specific needs. All investments carry risk, and the preservation of capital is strictly tied to the class and grade of underlying fixed income securities.
                    </p>
                </div>

                {/* Bottom Row: Legal Links */}
                <div className="pt-8 border-t border-slate-800 flex flex-wrap gap-x-6 gap-y-4 text-sm font-medium">
                    <Link href="/fsg" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm">Financial Services Guide (FSG)</Link>
                    <span className="text-slate-700 hidden sm:inline" aria-hidden="true">|</span>
                    <Link href="/tmd" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm">Target Market Determination (TMD)</Link>
                    <span className="text-slate-700 hidden sm:inline" aria-hidden="true">|</span>
                    <Link href="/privacy" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm">Privacy Policy</Link>
                    <span className="text-slate-700 hidden sm:inline" aria-hidden="true">|</span>
                    <Link href="/risk-disclosure" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm">Risk Disclosure</Link>
                    <span className="text-slate-700 hidden sm:inline" aria-hidden="true">|</span>
                    <Link href="/scam-warning" className="text-yellow-600 hover:text-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm flex items-center gap-2">
                        Scam Warning
                    </Link>
                </div>
            </div>
        </footer>
    );
}
