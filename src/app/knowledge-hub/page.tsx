import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Knowledge Hub & Insights | Nobel',
    description: 'Educational insights on capital protection, fixed income, and secure wealth management.',
};

export default function KnowledgeHub() {
    const articles = [
        {
            title: "Understanding Corporate Bonds vs. Term Deposits",
            date: "October 12, 2026",
            category: "Fixed Income",
            snippet: "An in-depth analysis of the yield curve and how high-grade corporate bonds can provide predictable returns compared to traditional term deposits.",
            href: "/knowledge-hub/corporate-bonds-vs-term-deposits"
        },
        {
            title: "How to Protect Your Superannuation from Inflation",
            date: "September 28, 2026",
            category: "Retirement",
            snippet: "Strategies for conservative investors to maintain purchasing power while minimizing portfolio volatility during periods of economic uncertainty.",
            href: "/knowledge-hub/protect-superannuation-inflation"
        },
        {
            title: "The Role of Custodial Services in Asset Safety",
            date: "August 14, 2026",
            category: "Security",
            snippet: "Why legal separation of assets and independent administration are crucial for the peace of mind of high-net-worth retirees.",
            href: "/knowledge-hub/custodial-services-safety"
        },
        {
            title: "Navigating Interest Rate Cycles for Predictable Returns",
            date: "July 02, 2026",
            category: "Strategy",
            snippet: "How our methodology adjusts duration and credit quality to ensure stability regardless of central bank monetary policy shifts.",
            href: "/knowledge-hub/interest-rate-cycles"
        }
    ];

    return (
        <div className="flex-grow bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Scam Alert Banner */}
                <div className="mb-12 bg-red-50 border-l-4 border-red-700 p-6 rounded-sm shadow-sm flex items-start" role="alert" aria-labelledby="scam-alert-title">
                    <div className="flex-shrink-0 mr-4 mt-1">
                        <svg className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div>
                        <h2 id="scam-alert-title" className="text-xl font-bold text-red-900 mb-2">SCAM ALERT: How to identify financial impersonators</h2>
                        <div className="text-red-800 text-base leading-relaxed space-y-2">
                            <p>
                                Nobel will <strong>never</strong> ask you to transfer funds via cryptocurrency, WhatsApp, or request remote access to your computer.
                            </p>
                            <p>
                                All official communications will originate from <code>@nobel.com.au</code>. If you receive suspicious correspondence claiming to be from our firm, please verify immediately by calling our registered number on the ASIC registry.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <section className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Knowledge Hub</h1>
                    <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
                        Educational resources strictly focused on capital preservation, predictable yields, and secure retirement planning.
                    </p>
                </section>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {articles.map((article, index) => (
                        <article key={index} className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col h-full group">
                            <div className="flex items-center justify-between mb-6">
                                <span className="bg-slate-100 text-slate-800 text-sm font-semibold px-3 py-1 rounded-sm uppercase tracking-wider">{article.category}</span>
                                <time className="text-slate-500 text-sm font-medium">{article.date}</time>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 font-serif group-hover:text-yellow-700 transition-colors">
                                <Link href={article.href} className="focus:outline-none focus:underline">{article.title}</Link>
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg flex-grow mb-8">
                                {article.snippet}
                            </p>
                            <Link href={article.href} className="text-slate-900 font-semibold flex items-center group-hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 rounded-sm w-fit">
                                Read full article <span aria-hidden="true" className="ml-2">→</span>
                            </Link>
                        </article>
                    ))}
                </div>

            </div>
        </div>
    );
}
