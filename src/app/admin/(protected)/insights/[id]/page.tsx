import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import InsightForm from '../InsightForm';

export default async function EditInsightPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const insight = await prisma.insight.findUnique({
        where: { id: resolvedParams.id },
    });

    if (!insight) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <InsightForm initialData={insight} />
        </div>
    );
}
