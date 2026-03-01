import { prisma } from '@/lib/prisma';
import MediaGallery from './MediaGallery';

export default async function AdminMediaPage() {
    const mediaList = await prisma.media.findMany({
        orderBy: { uploadedAt: 'desc' },
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <MediaGallery mediaList={mediaList} />
        </div>
    );
}
