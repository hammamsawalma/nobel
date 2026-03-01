import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import { format } from 'date-fns';
import { ArrowRight, Compass, Calendar, ExternalLink } from 'lucide-react';
import V11Header from "@/components/v2/Header";
import V11Footer from "@/components/v2/Footer";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function MarketInsightsPage() {
    const insights = await prisma.insight.findMany({
        where: { isPublished: true },
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className="bg-gray-50 text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white min-h-screen flex flex-col">
            <V11Header />

            {/* HERO SECTION */}
            <section className="bg-gradient-to-tl from-[#0A1A3A] to-blue-900 pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-12 relative overflow-hidden border-b-[8px] border-[#0A1A3A]">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/vid/insights-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#0A1A3A]/40 mix-blend-multiply z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-0"></div>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay z-0"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="mb-4">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 tracking-[0.2em] font-bold text-[10px] md:text-sm uppercase px-5 py-2 rounded-full inline-block">
                            MARKET INTELLIGENCE
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
                        Market Insights.
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A curated feed of breaking financial news, macroeconomic data, and industry publications.
                    </p>
                </div>
            </section>

            {/* INSIGHTS GRID */}
            <section className="py-16 md:py-24 px-6 lg:px-12 flex-1 relative z-20">
                <div className="max-w-7xl mx-auto">
                    {insights.length > 0 ? (
                        <div className="flex flex-col gap-12">
                            {/* Featured Insight (Latest) */}
                            <a
                                href={insights[0].externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 relative"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                                    <div className="relative h-48 lg:h-auto overflow-hidden bg-gray-100">
                                        {insights[0].coverImage ? (
                                            <Image src={insights[0].coverImage} alt={insights[0].title} fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" unoptimized />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-50 border-r border-gray-100"><Compass className="w-16 h-16 text-gray-200" /></div>
                                        )}
                                        <div className="absolute top-4 left-4"><span className="bg-[#0A1A3A] border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">{insights[0].publisher}</span></div>
                                    </div>
                                    <div className="p-6 lg:p-10 flex flex-col justify-center bg-white lg:-ml-8 z-10 lg:rounded-l-3xl shadow-[-20px_0_40px_rgba(0,0,0,0.02)]">
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 font-medium"><Calendar className="w-3 h-3" />{format(new Date(insights[0].createdAt), 'MMM dd, yyyy')}</div>
                                        <h2 className="text-2xl lg:text-3xl font-black text-[#0A1A3A] mb-4 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">{insights[0].title}</h2>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{insights[0].description}</p>
                                        <div className="flex items-center gap-2 text-blue-600 text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all w-fit border-b-2 border-transparent group-hover:border-blue-600 pb-1">Read on {insights[0].publisher} <ExternalLink className="w-4 h-4" /></div>
                                    </div>
                                </div>
                            </a>

                            {/* Standard Insights List */}
                            {insights.length > 1 && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 border-t border-gray-100 pt-16">
                                    {insights.slice(1).map((insight) => (
                                        <a
                                            href={insight.externalUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            key={insight.id}
                                            className="group flex flex-col sm:flex-row gap-6 items-start bg-white p-4 rounded-[2rem] border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-300"
                                        >
                                            <div className="relative w-full sm:w-32 h-32 aspect-square sm:aspect-auto rounded-xl overflow-hidden bg-gray-50 flex-shrink-0 shadow-sm border border-gray-100">
                                                {insight.coverImage ? (
                                                    <Image src={insight.coverImage} alt={insight.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gray-50"><Compass className="w-6 h-6 text-gray-300" /></div>
                                                )}
                                                <div className="absolute top-2 left-2"><span className="bg-[#0A1A3A]/80 backdrop-blur border border-white/20 text-white text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-md">{insight.publisher}</span></div>
                                            </div>
                                            <div className="flex flex-col flex-1 py-1 pr-2">
                                                <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-1 font-bold uppercase tracking-widest"><Calendar className="w-3 h-3" />{format(new Date(insight.createdAt), 'MMM dd, yyyy')}</div>
                                                <h3 className="text-base font-bold text-[#0A1A3A] mb-2 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">{insight.title}</h3>
                                                <p className="text-gray-500 line-clamp-2 text-xs leading-relaxed mb-3 flex-1">{insight.description}</p>
                                                <div className="mt-auto flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">Read on {insight.publisher} <ExternalLink className="w-3 h-3" /></div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-3xl mx-auto">
                            <Compass className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Feed is currently empty.</h3>
                            <p className="text-gray-500">Check back shortly as we curate the latest market intelligence.</p>
                        </div>
                    )}
                </div>
            </section>

            <V11Footer />
        </div>
    );
}
