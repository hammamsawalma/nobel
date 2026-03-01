'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createInsightAction(formData: FormData) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const externalUrl = formData.get('externalUrl') as string;
    const coverImage = formData.get('coverImage') as string;
    const publisher = formData.get('publisher') as string;
    const isPublished = formData.get('isPublished') === 'on';

    if (!title || !externalUrl || !description) {
        return { error: 'Title, URL, and Description are required.' };
    }

    try {
        await prisma.insight.create({
            data: {
                title,
                description,
                externalUrl,
                publisher: publisher || 'External',
                coverImage: coverImage || null,
                isPublished,
            },
        });
    } catch (error) {
        return { error: 'Failed to create insight link.' };
    }

    revalidatePath('/insights');
    revalidatePath('/admin/insights');
    redirect('/admin/insights');
}

export async function updateInsightAction(id: string, formData: FormData) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const externalUrl = formData.get('externalUrl') as string;
    const coverImage = formData.get('coverImage') as string;
    const publisher = formData.get('publisher') as string;
    const isPublished = formData.get('isPublished') === 'on';

    if (!title || !externalUrl || !description) {
        return { error: 'Title, URL, and Description are required.' };
    }

    try {
        await prisma.insight.update({
            where: { id },
            data: {
                title,
                description,
                externalUrl,
                publisher: publisher || 'External',
                coverImage: coverImage || null,
                isPublished,
            },
        });
    } catch (error) {
        return { error: 'Failed to update insight link.' };
    }

    revalidatePath('/insights');
    revalidatePath('/admin/insights');
    redirect('/admin/insights');
}

export async function deleteInsightAction(id: string) {
    try {
        await prisma.insight.delete({
            where: { id },
        });
    } catch (error) {
        return { error: 'Failed to delete insight.' };
    }

    revalidatePath('/insights');
    revalidatePath('/admin/insights');
    redirect('/admin/insights');
}
