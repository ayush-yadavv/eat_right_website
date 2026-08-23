import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const response = NextResponse.next()
  
  // Accept: text/markdown fix
  // Without it, CDNs can serve the cached HTML variant to an agent asking for markdown
  response.headers.set('Vary', 'Accept, Accept-Encoding')
  
  return response
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
