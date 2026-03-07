import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { ChevronLeft, Calendar, Tag } from 'lucide-react';
import V11Header from "@/components/v1/Header";
import V11Footer from "@/components/v1/Footer";
import type { Metadata } from 'next';

export const revalidate = 60;

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await prisma.post.findUnique({
        where: { slug: resolvedParams.slug },
    });

    if (!post) return { title: 'Not Found' };

    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt || '',
    };
}

export default async function SingleJournalPage({ params }: Props) {
    const resolvedParams = await params;
    const post = await prisma.post.findUnique({
        where: { slug: resolvedParams.slug, isPublished: true },
    });

    if (!post) {
        notFound();
    }

    // Optional: create some dynamic sanitized HTML or rely on Tailwind Typography.
    // We'll rely on global prose styles or manual tiptap mappings to display `post.content`.

    return (
        <div className="bg-gray-50 text-gray-900 font-sans selection:bg-[#0A1A3A] selection:text-white min-h-screen">
            <V11Header />

            {/* ARTICLE HEADER HERO */}
            <section className="bg-[#0A1A3A] pt-32 pb-16 md:pt-40 md:pb-20 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <Link href="/journal" className="inline-flex items-center gap-2 text-blue-400 hover:text-white font-bold text-sm tracking-widest uppercase mb-8 transition-colors">
                        <ChevronLeft className="w-4 h-4" /> Back to Journal
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                            <Calendar className="w-4 h-4" />
                            {format(new Date(post.createdAt), 'MMMM dd, yyyy')}
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {post.excerpt && (
                        <p className="text-xl text-gray-300 font-medium leading-relaxed border-l-4 border-blue-500 pl-6">
                            {post.excerpt}
                        </p>
                    )}
                </div>
            </section>

            {/* ARTICLE COVER IMAGE IF EXISTS */}
            {post.coverImage && (
                <div className="max-w-5xl mx-auto px-6 lg:px-12 -mt-10 md:-mt-16 relative z-20">
                    <div className="aspect-[21/9] md:aspect-[2.5/1] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#0A1A3A]">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                </div>
            )}

            {/* ARTICLE CONTENT CONFIGURATION */}
            <section className={`px-6 lg:px-12 pb-24 ${post.coverImage ? 'pt-16 md:pt-24' : 'pt-16'}`}>
                <div className="max-w-3xl mx-auto">
                    {/* 
            Since we expect TipTap raw HTML, injecting it securely. 
            Note: In production with user input, sanitize. Here admin is trusted. 
          */}
                    <div
                        className="prose prose-lg md:prose-xl prose-blue prose-headings:font-black prose-headings:text-[#0A1A3A] text-gray-700 leading-relaxed max-w-none 
                       prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-2xl prose-img:shadow-lg"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <hr className="my-12 border-gray-200" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-gray-500 font-medium text-sm">
                            <Tag className="w-4 h-4" />
                            <span>Tagged under:</span>
                            <span className="font-bold text-[#0A1A3A]">{post.category}</span>
                        </div>

                        {/* Simple Social Share placeholders */}
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Share</span>
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">in</div>
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">tw</div>
                        </div>
                    </div>
                </div>
            </section>

            <V11Footer />
        </div>
    );
}
