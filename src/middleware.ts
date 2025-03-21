import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {

    const token = await getToken({
        req,
        secret: process.env.NEXT_AUTH_SECRET
    });

    if(!token) {
        const url = new URL('/login', req.url)
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/api/competition/:path*', '/bepro', '/benmax', '/api/me']
};