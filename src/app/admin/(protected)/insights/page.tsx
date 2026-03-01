import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Plus, Edit, Trash2, ExternalLink, Compass } from 'lucide-react';
import { format } from 'date-fns';
import { deleteInsightAction } from './actions';

export default async function AdminInsightsPage() {
    const insights = await prisma.insight.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className="p-8 md:p-12">
            <header className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-black text-[#0A1A3A]">Manage Market Insights</h1>
                    <p className="text-gray-500 font-medium">Curate links to external market news, PR, and analytics.</p>
                </div>
                <Link href="/admin/insights/new" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30">
                    <Plus className="w-5 h-5" /> Add External Link
                </Link>
            </header>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                {insights.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Headline & Source</th>
                                    <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest hidden md:table-cell">Status</th>
                                    <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest hidden lg:table-cell">Added</th>
                                    <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {insights.map((insight) => (
                                    <tr key={insight.id} className="border-b border-gray-50 hover:bg-blue-50/50 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-[#0A1A3A] mb-1 line-clamp-1">{insight.title}</div>
                                            <div className="text-xs text-blue-500 font-medium flex items-center gap-1">
                                                <ExternalLink className="w-3 h-3" /> {new URL(insight.externalUrl).hostname.replace('www.', '')}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 hidden md:table-cell">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${insight.isPublished ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                                {insight.isPublished ? 'Visible' : 'Hidden'}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 hidden lg:table-cell text-sm text-gray-500 font-medium">
                                            {format(new Date(insight.createdAt), 'MMM dd, yyyy')}
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <a href={insight.externalUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-blue-600 transition-colors tooltip-trigger" title="Verify Link">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                                <Link href={`/admin/insights/${insight.id}`} className="p-2 text-gray-400 hover:text-green-600 transition-colors" title="Edit Link">
                                                    <Edit className="w-5 h-5" />
                                                </Link>
                                                <form action={async (formData: FormData) => {
                                                    "use server";
                                                    await deleteInsightAction(insight.id);
                                                }}>
                                                    <button type="submit" className="p-2 text-gray-400 hover:text-red-600 transition-colors" title="Delete Link">
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
                        <Compass className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-[#0A1A3A] mb-2">No external insights logged.</h3>
                        <p className="text-gray-500 mb-6 font-medium">Build your curated feed of external news and PR.</p>
                        <Link href="/admin/insights/new" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all">
                            <Plus className="w-5 h-5" /> Add External Link
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
