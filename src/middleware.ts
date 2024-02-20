import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import {USER} from '@/constants/common'
 
export function middleware(req: NextRequest, event: NextFetchEvent) {
    const { pathname } = req.nextUrl

    const userData = req.cookies.get(USER)

    switch (pathname) {
      
      case '/auth/login': { 
        if(userData?.value) {
          return NextResponse.redirect(new URL('/', req.url))
        } 
        break;
      }
      case '/auth/register': { 
        return;
      }
      default:  if(!userData?.value) {
          return NextResponse.redirect(new URL('/auth/login', req.url))
      } 
    }

 
  return NextResponse.next()
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      {
        source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      },
    ],
  }
  