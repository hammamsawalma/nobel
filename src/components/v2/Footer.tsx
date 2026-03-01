import Link from 'next/link';

export default function V11Footer() {
    return (
        <footer className="bg-[#0A1A3A] text-gray-300 py-16 px-8 text-center sm:text-left relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-2">
                    <div className="font-black text-3xl tracking-tighter text-white mb-4">
                        NOBEL
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed mb-6">
                        Next-generation fixed income architecture for Australian investors. Deep liquidity. Total preservation.
                    </p>
                    <p className="text-xs text-gray-500">© 2026 Nobel Private Wealth. All systems nominal.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">System Hub</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-blue-400 transition-colors">Main Navigator</Link></li>
                        <li><Link href="/who-we-are" className="hover:text-blue-400 transition-colors">Firm Overview</Link></li>
                        <li><Link href="/knowledge-hub" className="hover:text-blue-400 transition-colors">Data Lake</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Regulatory</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>ASIC AFSL: 457891</li>
                        <li>Wholesale Investors Only</li>
                        <li><Link href="#" className="hover:text-white transition-colors">Privacy Paradigm</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
