'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function uploadMediaAction(formData: FormData) {
    const file = formData.get('file') as File;

    if (!file || file.size === 0) {
        return { error: 'No valid file uploaded.' };
    }

    // Basic validation - check if it's an image
    if (!file.type.startsWith('image/')) {
        return { error: 'Only image files are supported in this version.' };
    }

    try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Generate a unique filename using UUID and original extension
        const extension = file.name.split('.').pop();
        const filename = `${uuidv4()}.${extension}`;

        // Save locally to public/uploads
        const path = join(process.cwd(), 'public', 'uploads', filename);
        await writeFile(path, buffer);

        const publicUrl = `/uploads/${filename}`;

        // Record in DB
        await prisma.media.create({
            data: {
                filename: file.name,
                url: publicUrl,
            },
        });

    } catch (error) {
        console.error("Upload error:", error);
        return { error: 'Failed to process file upload on the server.' };
    }

    revalidatePath('/admin/media');
    return { success: true };
}

export async function deleteMediaAction(id: string, url: string) {
    try {
        // 1. Delete record from database
        await prisma.media.delete({
            where: { id },
        });

        // 2. Erase from filesystem
        const filename = url.split('/').pop();
        if (filename) {
            const path = join(process.cwd(), 'public', 'uploads', filename);
            await unlink(path).catch(() => console.warn('File already missing from FS'));
        }

    } catch (error) {
        return { error: 'Failed to delete media asset.' };
    }

    revalidatePath('/admin/media');
}
