import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ArrowRight, Newspaper, Calendar } from 'lucide-react';
import V11Header from "@/components/v2/Header";
import V11Footer from "@/components/v2/Footer";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function JournalPage() {
    // Fetch published posts
    const posts = await prisma.post.findMany({
        where: { isPublished: true },
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className="bg-gray-50 text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white min-h-screen flex flex-col">
            <V11Header />

            {/* HERO SECTION */}
            <section className="bg-gradient-to-br from-[#0A1A3A] to-blue-900 pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-12 relative overflow-hidden border-b-[8px] border-[#0A1A3A]">
                {/* Video Background */}
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/vid/journal-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#0A1A3A]/40 mix-blend-multiply z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-0"></div>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay z-0"></div>

                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/40 to-transparent"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="mb-4">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 tracking-[0.2em] font-bold text-[10px] md:text-sm uppercase px-5 py-2 rounded-full inline-block">
                            INTELLECTUAL CAPITAL
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
                        The Journal.
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Market surveillance, macroeconomic analysis, and official corporate updates from Nobel Wealth.
                    </p>
                </div>
            </section>

            {/* POSTS GRID */}
            <section className="py-16 md:py-24 px-6 lg:px-12 flex-1">
                <div className="max-w-7xl mx-auto">
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link
                                    href={`/journal/${post.slug}`}
                                    key={post.id}
                                    className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="aspect-[16/10] relative overflow-hidden bg-[#0A1A3A]">
                                        {post.coverImage ? (
                                            <Image
                                                src={post.coverImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                                                unoptimized
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0A1A3A] to-blue-900">
                                                <Newspaper className="w-16 h-16 text-blue-500/50" />
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                                            <Calendar className="w-4 h-4" />
                                            {format(new Date(post.createdAt), 'MMM dd, yyyy')}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black text-[#0A1A3A] mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed font-medium mb-6 line-clamp-3 ext-sm flex-1">
                                            {post.excerpt || 'Read the full insight.'}
                                        </p>

                                        <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-3xl mx-auto">
                            <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No journal entries published yet.</h3>
                            <p className="text-gray-500">Check back later for market updates and media releases.</p>
                        </div>
                    )}
                </div>
            </section>

            <V11Footer />
        </div>
    );
}
