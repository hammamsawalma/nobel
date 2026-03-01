'use server';

import { createSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function loginAction(prevState: any, formData: FormData) {
    const password = formData.get('password');

    // Hardcoded highly secure password check since this is a single-admin system
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'nobel-secure-2026';

    if (password === ADMIN_PASSWORD) {
        await createSession();
        redirect('/admin');
    } else {
        return { error: 'Invalid credentials. Access denied.' };
    }
}
