'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPostAction(formData: FormData) {
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const content = formData.get('content') as string;
    const excerpt = formData.get('excerpt') as string;
    const category = formData.get('category') as string;
    const coverImage = formData.get('coverImage') as string;
    const isPublished = formData.get('isPublished') === 'on';

    if (!title || !slug || !content) {
        return { error: 'Title, slug, and content are strictly required.' };
    }

    try {
        await prisma.post.create({
            data: {
                title,
                slug,
                content,
                excerpt: excerpt || null,
                category: category || 'Market Insight',
                coverImage: coverImage || null,
                isPublished,
            },
        });
    } catch (error: any) {
        if (error.code === 'P2002') {
            return { error: 'A post with this slug already exists.' };
        }
        return { error: 'Failed to create post. Database error.' };
    }

    revalidatePath('/journal');
    revalidatePath('/admin/posts');
    redirect('/admin/posts');
}

export async function updatePostAction(id: string, formData: FormData) {
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const content = formData.get('content') as string;
    const excerpt = formData.get('excerpt') as string;
    const category = formData.get('category') as string;
    const coverImage = formData.get('coverImage') as string;
    const isPublished = formData.get('isPublished') === 'on';

    if (!title || !slug || !content) {
        return { error: 'Title, slug, and content are strictly required.' };
    }

    try {
        await prisma.post.update({
            where: { id },
            data: {
                title,
                slug,
                content,
                excerpt: excerpt || null,
                category: category || 'Market Insight',
                coverImage: coverImage || null,
                isPublished,
            },
        });
    } catch (error: any) {
        if (error.code === 'P2002') {
            return { error: 'A post with this slug already exists.' };
        }
        return { error: 'Failed to update post. Database error.' };
    }

    revalidatePath('/insights');
    revalidatePath(`/insights/${slug}`);
    revalidatePath('/admin/posts');
    redirect('/admin/posts');
}

export async function deletePostAction(id: string) {
    try {
        await prisma.post.delete({
            where: { id },
        });
    } catch (error) {
        return { error: 'Failed to delete post.' };
    }

    revalidatePath('/journal');
    revalidatePath('/admin/posts');
    redirect('/admin/posts');
}
