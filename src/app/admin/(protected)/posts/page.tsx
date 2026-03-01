import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { deletePostAction } from './actions';

export default async function AdminPostsPage() {
    const posts = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className="p-8 md:p-12">
            <header className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-black text-[#0A1A3A]">Manage Posts</h1>
                    <p className="text-gray-500 font-medium">Create, edit, and publish your intellectual capital.</p>
                </div>
                <Link href="/admin/posts/new" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30">
                    <Plus className="w-5 h-5" /> Write New Article
                </Link>
            </header>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                {posts.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Title</th>
                                    <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest hidden md:table-cell">Status</th>
                                    <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest hidden lg:table-cell">Created</th>
                                    <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post) => (
                                    <tr key={post.id} className="border-b border-gray-50 hover:bg-blue-50/50 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-[#0A1A3A] mb-1 line-clamp-1">{post.title}</div>
                                            <div className="text-xs text-blue-500 font-mono">/{post.slug}</div>
                                        </td>
                                        <td className="py-4 px-6 hidden md:table-cell">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${post.isPublished ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                                {post.isPublished ? 'Live' : 'Draft'}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 hidden lg:table-cell text-sm text-gray-500 font-medium">
                                            {format(new Date(post.createdAt), 'MMM dd, yyyy')}
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link href={`/journal/${post.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-blue-600 transition-colors tooltip-trigger" title="View Public Page">
                                                    <Eye className="w-5 h-5" />
                                                </Link>
                                                <Link href={`/admin/posts/${post.id}`} className="p-2 text-gray-400 hover:text-green-600 transition-colors" title="Edit Post">
                                                    <Edit className="w-5 h-5" />
                                                </Link>
                                                <form action={async (formData: FormData) => {
                                                    "use server";
                                                    await deletePostAction(post.id);
                                                }}>
                                                    <button type="submit" className="p-2 text-gray-400 hover:text-red-600 transition-colors" title="Delete Post">
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center py-20 px-6">
                        <FileText className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-[#0A1A3A] mb-2">No posts available.</h3>
                        <p className="text-gray-500 mb-6 font-medium">Start drafting your first piece of intellectual capital.</p>
                        <Link href="/admin/posts/new" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all">
                            <Plus className="w-5 h-5" /> Write New Article
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
