import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { FileText, Image as ImageIcon, Plus, Link as LinkIcon, Compass } from 'lucide-react';

export default async function AdminDashboard() {
    const totalPosts = await prisma.post.count();
    const publishedPosts = await prisma.post.count({ where: { isPublished: true } });
    const draftedPosts = totalPosts - publishedPosts;

    const totalInsights = await prisma.insight.count();
    const totalMedia = await prisma.media.count();

    return (
        <div>
            <header className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-black text-[#0A1A3A]">Dashboard Overview</h1>
                    <p className="text-gray-500 font-medium">Welcome back. Here is the current status of the Knowledge Base.</p>
                </div>
                <div className="flex gap-4">
                    <Link href="/admin/posts/new" className="hidden md:flex items-center gap-2 border border-[#0A1A3A] text-[#0A1A3A] hover:bg-gray-100 px-6 py-3 rounded-xl font-bold transition-all shadow-sm">
                        <Plus className="w-5 h-5" /> New Journal Post
                    </Link>
                    <Link href="/admin/insights/new" className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30">
                        <LinkIcon className="w-5 h-5" /> Add Insight Link
                    </Link>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-xl bg-blue-50 text-blue-600"><FileText className="w-6 h-6" /></div>
                    </div>
                    <h3 className="text-3xl font-black text-[#0A1A3A] mb-1">{totalPosts}</h3>
                    <p className="text-gray-500 font-medium text-sm">Hosted Articles</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-xl bg-green-50 text-green-600"><Compass className="w-6 h-6" /></div>
                    </div>
                    <h3 className="text-3xl font-black text-[#0A1A3A] mb-1">{totalInsights}</h3>
                    <p className="text-gray-500 font-medium text-sm">External Insights</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-xl bg-orange-50 text-orange-600"><FileText className="w-6 h-6" /></div>
                    </div>
                    <h3 className="text-3xl font-black text-[#0A1A3A] mb-1">{draftedPosts}</h3>
                    <p className="text-gray-500 font-medium text-sm">Post Drafts</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-xl bg-purple-50 text-purple-600"><ImageIcon className="w-6 h-6" /></div>
                    </div>
                    <h3 className="text-3xl font-black text-[#0A1A3A] mb-1">{totalMedia}</h3>
                    <p className="text-gray-500 font-medium text-sm">Media Assets</p>
                </div>
            </div>

            <h2 className="text-xl font-black text-[#0A1A3A] mb-6 border-b border-gray-200 pb-2">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/admin/posts" className="group bg-gradient-to-br from-[#0A1A3A] to-blue-900 p-8 rounded-3xl text-white relative overflow-hidden shadow-xl hover:-translate-y-1 transition-all">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-2">The Journal</h3>
                        <p className="text-blue-200 w-3/4 text-sm">Manage hosted articles and thought leadership pieces.</p>
                    </div>
                    <FileText className="absolute -right-6 -bottom-6 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform" />
                </Link>

                <Link href="/admin/insights" className="group bg-blue-600 border border-blue-500 p-8 rounded-3xl text-white relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-2">Market Insights</h3>
                        <p className="text-blue-100 w-3/4 text-sm">Curate your feed of external news and media links.</p>
                    </div>
                    <Compass className="absolute -right-6 -bottom-6 w-32 h-32 text-white/10 group-hover:scale-110 transition-transform" />
                </Link>

                <Link href="/admin/media" className="group bg-white border border-gray-200 p-8 rounded-3xl text-[#0A1A3A] relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-2">Media Library</h3>
                        <p className="text-gray-500 w-3/4 text-sm">Upload hero images and charts to embed in articles.</p>
                    </div>
                    <ImageIcon className="absolute -right-6 -bottom-6 w-32 h-32 text-gray-50 group-hover:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
