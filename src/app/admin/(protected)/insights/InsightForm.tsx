'use client';

import { useState } from 'react';
import { createInsightAction, updateInsightAction } from './actions';
import { Save, ArrowLeft, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function InsightForm({ initialData }: { initialData?: any }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isEditing = !!initialData;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        if (isEditing) {
            await updateInsightAction(initialData.id, formData);
        } else {
            await createInsightAction(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 md:p-12 max-w-4xl mx-auto">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <Link href="/admin/insights" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0A1A3A] font-bold text-sm tracking-widest uppercase mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Insights
                    </Link>
                    <h1 className="text-3xl font-black text-[#0A1A3A]">{isEditing ? 'Edit External Link' : 'Add External Link'}</h1>
                </div>

                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-white px-4 py-3 rounded-xl border border-gray-200 cursor-pointer shadow-sm">
                        <input type="checkbox" name="isPublished" defaultChecked={initialData?.isPublished} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                        Visible to Public
                    </label>
                    <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50">
                        <Save className="w-5 h-5" /> {isSubmitting ? 'Saving...' : 'Save Link'}
                    </button>
                </div>
            </header>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-8">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Headline / Title</label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={initialData?.title}
                        required
                        placeholder="e.g. RBA holds cash rate steady at 4.35%"
                        className="w-full text-xl font-black text-[#0A1A3A] bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Destination URL</label>
                    <div className="relative">
                        <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="url"
                            name="externalUrl"
                            defaultValue={initialData?.externalUrl}
                            required
                            placeholder="https://www.afr.com/..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Source / Publisher Name</label>
                        <input type="text" name="publisher" defaultValue={initialData?.publisher || 'Bloomberg'} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-bold text-[#0A1A3A]" />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Preview Image URL (Optional)</label>
                        <input type="url" name="coverImage" defaultValue={initialData?.coverImage} placeholder="https://..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>
                </div>

                <hr className="border-gray-100" />

                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Short Description</label>
                    <textarea
                        name="description"
                        defaultValue={initialData?.description}
                        required
                        rows={4}
                        placeholder="A brief summary of the external article..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm leading-relaxed resize-none"
                    ></textarea>
                </div>
            </div>
        </form>
    );
}
