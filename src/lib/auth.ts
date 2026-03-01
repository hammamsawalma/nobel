import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-super-secret-key-for-nobel-wealth';

export async function createSession() {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = jwt.sign({ admin: true }, JWT_SECRET, { expiresIn: '7d' });

    const cookieStore = await cookies();
    cookieStore.set('admin_session', session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    });
}

export async function verifySession() {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session')?.value;

    if (!session) return false;

    try {
        jwt.verify(session, JWT_SECRET);
        return true;
    } catch (error) {
        return false;
    }
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete('admin_session');
}
