'use client';

import { useState, useActionState, useEffect } from 'react';
import { uploadMediaAction, deleteMediaAction } from './actions';
import { UploadCloud, Copy, Trash2, Image as ImageIcon, Loader2, Check } from 'lucide-react';
import Image from 'next/image';
import { format } from 'date-fns';

export default function AdminMediaPage({ mediaList }: { mediaList: any[] }) {
    const [isUploading, setIsUploading] = useState(false);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return;
        setIsUploading(true);

        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        await uploadMediaAction(formData);
        setIsUploading(false);

        // Reset the input cleanly
        e.target.value = '';
    };

    const copyToClipboard = (url: string, id: string) => {
        // Determine the full host origin.
        const baseUrl = window.location.origin;
        navigator.clipboard.writeText(`${baseUrl}${url}`);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="p-8 md:p-12">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-3xl font-black text-[#0A1A3A]">Media Library</h1>
                    <p className="text-gray-500 font-medium">Upload imagery and copy links directly into your articles.</p>
                </div>

                <div className="relative">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                        disabled={isUploading}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                    />
                    <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30">
                        {isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <UploadCloud className="w-5 h-5" />}
                        {isUploading ? 'Uploading...' : 'Upload Asset'}
                    </div>
                </div>
            </header>

            {mediaList.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {mediaList.map((media) => (
                        <div key={media.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col relative">
                            <div className="aspect-square relative bg-gray-100 flex-shrink-0">
                                <Image
                                    src={media.url}
                                    alt={media.filename}
                                    fill
                                    className="object-cover"
                                    unoptimized // Local uploads don't need optimization layer locally initially
                                />

                                {/* Overlay Actions */}
                                <div className="absolute inset-0 bg-[#0A1A3A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm">
                                    <button
                                        onClick={() => copyToClipboard(media.url, media.id)}
                                        className="p-3 bg-white text-[#0A1A3A] hover:bg-blue-600 hover:text-white rounded-xl transition-colors shadow-lg"
                                        title="Copy Image Link"
                                    >
                                        {copiedId === media.id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                    <form action={async (formData: FormData) => {
                                        await deleteMediaAction(media.id, media.url);
                                    }}>
                                        <button
                                            type="submit"
                                            className="p-3 bg-red-600 text-white hover:bg-red-700 rounded-xl transition-colors shadow-lg"
                                            title="Delete Image"
                                            onClick={(e) => { if (!confirm('Delete this image permanently from both database and filesystem?')) e.preventDefault() }}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="p-4 flex-1 flex flex-col justify-end text-xs">
                                <p className="font-bold text-[#0A1A3A] truncate mb-1" title={media.filename}>{media.filename}</p>
                                <p className="text-gray-400 font-medium">{format(new Date(media.uploadedAt), 'MMM dd, yyyy')}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-32 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <ImageIcon className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#0A1A3A] mb-2">Media Library Empty.</h3>
                    <p className="text-gray-500 font-medium">Drag an image file over the Upload button to begin.</p>
                </div>
            )}
        </div>
    );
}
