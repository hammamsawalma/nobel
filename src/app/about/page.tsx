import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Nobel',
    description: 'Learn about our team of fiduciary financial advisors protecting your wealth.',
};

export default function AboutUs() {
    return (
        <div className="flex-grow bg-slate-50 py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
            <div className="max-w-7xl mx-auto">

                {/* Intro Section */}
                <section className="mb-20 text-center max-w-3xl mx-auto">
                    <h1 id="about-heading" className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Our Heritage of Trust</h1>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        At Nobel, our singular focus is the preservation and steady growth of your capital.
                        We operate under a strict fiduciary duty, ensuring that every strategic decision is made
                        to provide peace of mind, stability, and predictable returns for Australian retirees and conservative investors.
                    </p>
                </section>

                {/* The Team Section */}
                <section aria-labelledby="team-heading" className="bg-white p-10 md:p-16 rounded-sm shadow-sm border border-slate-100">
                    <div className="text-center mb-16">
                        <h2 id="team-heading" className="text-3xl font-serif font-bold text-slate-900 mb-4">Our Team</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Our seasoned financial advisors bring decades of regulated experience. We believe in absolute transparency
                            and direct human relationships.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                        {/* Advisor 1 */}
                        <div className="flex flex-col items-center group">
                            {/* // TODO: Insert high-resolution photos of advisors here. Transparency is a regulatory expectation. */}
                            <div className="w-48 h-48 rounded-full bg-slate-200 mb-6 overflow-hidden border-4 border-slate-100 group-hover:border-yellow-600 transition-colors">
                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">Robert Harrington</h3>
                            <p className="text-yellow-700 font-semibold mb-2">Senior Wealth Custodian</p>
                            <p className="text-sm text-slate-500 font-medium tracking-wide">B.Com, CFP®, F Fin</p>
                        </div>

                        {/* Advisor 2 */}
                        <div className="flex flex-col items-center group">
                            {/* // TODO: Insert high-resolution photos of advisors here. Transparency is a regulatory expectation. */}
                            <div className="w-48 h-48 rounded-full bg-slate-200 mb-6 overflow-hidden border-4 border-slate-100 group-hover:border-yellow-600 transition-colors">
                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">Eleanor Vance</h3>
                            <p className="text-yellow-700 font-semibold mb-2">Head of Fixed Income</p>
                            <p className="text-sm text-slate-500 font-medium tracking-wide">M.Fin, CFA</p>
                        </div>

                        {/* Advisor 3 */}
                        <div className="flex flex-col items-center group">
                            {/* // TODO: Insert high-resolution photos of advisors here. Transparency is a regulatory expectation. */}
                            <div className="w-48 h-48 rounded-full bg-slate-200 mb-6 overflow-hidden border-4 border-slate-100 group-hover:border-yellow-600 transition-colors">
                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">William Davies</h3>
                            <p className="text-yellow-700 font-semibold mb-2">Retirement Specialist</p>
                            <p className="text-sm text-slate-500 font-medium tracking-wide">BBus, Dip FP</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
