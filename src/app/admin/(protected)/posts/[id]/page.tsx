import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import PostForm from '../PostForm';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const post = await prisma.post.findUnique({
        where: { id: resolvedParams.id },
    });

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <PostForm initialData={post} />
        </div>
    );
}
