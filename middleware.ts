import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { verifyJWT } from '@/lib/jwt';

export function middleware(request: NextRequest) {
  // Paths that require authentication
  const protectedPaths = ['/profile', '/playlists', '/discover', '/mood'];
  
  const path = request.nextUrl.pathname;
  
  // Check if the path requires authentication
  if (protectedPaths.some(prefix => path.startsWith(prefix))) {
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token || !verifyJWT(token)) {
      const url = new URL('/auth/login', request.url);
      url.searchParams.set('from', path);
      return NextResponse.redirect(url);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/profile/:path*',
    '/playlists/:path*',
    '/discover/:path*',
    '/mood/:path*',
  ],
}; 