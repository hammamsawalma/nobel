'use client';

import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { createPostAction, updatePostAction } from './actions';
import { Bold, Italic, List, ListOrdered, Heading2, Quote, Save, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function PostForm({ initialData }: { initialData?: any }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isEditing = !!initialData;

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image.configure({
                inline: true,
                allowBase64: true,
            }),
        ],
        content: initialData?.content || '',
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px] p-6 text-gray-800 leading-relaxed',
            },
        },
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        formData.append('content', editor?.getHTML() || '');

        if (isEditing) {
            await updatePostAction(initialData.id, formData);
        } else {
            await createPostAction(formData);
        }
    };

    const addImage = () => {
        const url = window.prompt('Enter Image URL (or use the Media Library to upload one and paste the link here):');
        if (url && editor) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 md:p-12 max-w-6xl mx-auto">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <Link href="/admin/posts" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0A1A3A] font-bold text-sm tracking-widest uppercase mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Posts
                    </Link>
                    <h1 className="text-3xl font-black text-[#0A1A3A]">{isEditing ? 'Editing Insight' : 'Draft New Insight'}</h1>
                </div>

                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-white px-4 py-3 rounded-xl border border-gray-200 cursor-pointer shadow-sm">
                        <input type="checkbox" name="isPublished" defaultChecked={initialData?.isPublished} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                        Publish Live
                    </label>
                    <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50">
                        <Save className="w-5 h-5" /> {isSubmitting ? 'Saving...' : 'Save Document'}
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Editor Column */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Internal Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={initialData?.title}
                            required
                            placeholder="e.g. Q4 Macroeconomic Threat Assessment"
                            className="w-full text-2xl font-black text-[#0A1A3A] focus:outline-none placeholder-gray-300"
                        />
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                        {/* Tiptap Toolbar */}
                        <div className="bg-gray-50 border-b border-gray-200 p-3 flex flex-wrap items-center gap-2">
                            <button type="button" onClick={() => editor?.chain().focus().toggleBold().run()} className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('bold') ? 'bg-gray-200 text-blue-600' : 'text-gray-600'}`}><Bold className="w-5 h-5" /></button>
                            <button type="button" onClick={() => editor?.chain().focus().toggleItalic().run()} className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('italic') ? 'bg-gray-200 text-blue-600' : 'text-gray-600'}`}><Italic className="w-5 h-5" /></button>
                            <div className="w-px h-6 bg-gray-300 mx-1"></div>
                            <button type="button" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} className={`p-2 rounded hover:bg-gray-200 transition-colors font-bold ${editor?.isActive('heading', { level: 2 }) ? 'bg-gray-200 text-blue-600' : 'text-gray-600'}`}>H2</button>
                            <button type="button" onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} className={`p-2 rounded hover:bg-gray-200 transition-colors font-bold ${editor?.isActive('heading', { level: 3 }) ? 'bg-gray-200 text-blue-600' : 'text-gray-600'}`}>H3</button>
                            <div className="w-px h-6 bg-gray-300 mx-1"></div>
                            <button type="button" onClick={() => editor?.chain().focus().toggleBulletList().run()} className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('bulletList') ? 'bg-gray-200 text-blue-600' : 'text-gray-600'}`}><List className="w-5 h-5" /></button>
                            <button type="button" onClick={() => editor?.chain().focus().toggleOrderedList().run()} className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('orderedList') ? 'bg-gray-200 text-blue-600' : 'text-gray-600'}`}><ListOrdered className="w-5 h-5" /></button>
                            <button type="button" onClick={() => editor?.chain().focus().toggleBlockquote().run()} className={`p-2 rounded hover:bg-gray-200 transition-colors ${editor?.isActive('blockquote') ? 'bg-gray-200 text-blue-600' : 'text-gray-600'}`}><Quote className="w-5 h-5" /></button>
                            <div className="w-px h-6 bg-gray-300 mx-1"></div>
                            <button type="button" onClick={addImage} className="p-2 rounded hover:bg-gray-200 transition-colors text-gray-600 inline-flex items-center gap-2 text-sm font-bold"><ImageIcon className="w-5 h-5" /> Insert Image</button>
                        </div>
                        {/* Editor Area */}
                        <div className="flex-1 cursor-text bg-white">
                            <EditorContent editor={editor} />
                        </div>
                    </div>
                </div>

                {/* Sidebar Configuration Column */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">URL Slug</label>
                            <input type="text" name="slug" defaultValue={initialData?.slug} required placeholder="q4-macro-assessment" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm" />
                            <p className="text-xs text-gray-400 mt-2">Example: <code>nobelwealth.com.au/journal/your-slug</code></p>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Category Tag</label>
                            <select name="category" defaultValue={initialData?.category || 'Market Insight'} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-[#0A1A3A] appearance-none">
                                <option value="Market Insight">Market Insight</option>
                                <option value="Media Release">Media Release</option>
                                <option value="Securities Alert">Securities Alert</option>
                                <option value="Corporate Update">Corporate Update</option>
                            </select>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Cover Image URL</label>
                            <input type="url" name="coverImage" defaultValue={initialData?.coverImage} placeholder="https://..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Article Excerpt (Summary)</label>
                            <textarea name="excerpt" defaultValue={initialData?.excerpt} rows={4} placeholder="Brief summary displayed on the main insights grid..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm leading-relaxed resize-none"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
