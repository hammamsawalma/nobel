import { redirect } from 'next/navigation';
import { verifySession } from '@/lib/auth';
import Link from 'next/link';
import { FileText, Image as ImageIcon, LogOut, LayoutDashboard, Compass } from 'lucide-react';
import { logoutAction } from './actions';

export default async function ProtectedAdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const isAuthenticated = await verifySession();

    if (!isAuthenticated) {
        redirect('/admin/login');
    }

    return (
        <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* SIDEBAR */}
            <aside className="w-64 bg-[#0A1A3A] text-white flex flex-col hidden md:flex fixed h-screen overflow-y-auto">
                <div className="p-6 border-b border-white/10">
                    <h2 className="text-xl font-black tracking-widest uppercase text-white">Nobel Wealth</h2>
                    <p className="text-blue-300 text-xs font-mono mt-1">Intranet Portal v2.0</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-colors">
                        <LayoutDashboard className="w-5 h-5" /> Dashboard
                    </Link>
                    <Link href="/admin/posts" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-colors">
                        <FileText className="w-5 h-5" /> The Journal
                    </Link>
                    <Link href="/admin/insights" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-colors">
                        <Compass className="w-5 h-5" /> Market Insights
                    </Link>
                    <Link href="/admin/media" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-colors">
                        <ImageIcon className="w-5 h-5" /> Media Library
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <form action={logoutAction}>
                        <button type="submit" className="w-full flex items-center justify-center gap-2 bg-red-900/40 hover:bg-red-900/80 text-red-200 py-3 rounded-xl transition-colors text-sm font-bold uppercase tracking-widest">
                            <LogOut className="w-4 h-4" /> Disconnect
                        </button>
                    </form>
                </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="flex-1 md:ml-64 p-8 md:p-12 overflow-y-auto min-h-screen">
                {children}
            </main>
        </div>
    );
}
