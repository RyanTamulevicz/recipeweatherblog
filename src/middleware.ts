import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isAuthorized } from '@/lib/auth'
 
export async function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const auth = await isAuthorized()
  if (!auth.authorized) {
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: '/admin/:path*',
}