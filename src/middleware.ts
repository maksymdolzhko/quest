import { NextRequest, NextResponse } from "next/server";
import { i18nRouter } from 'next-i18n-router';
import { i18nConfig } from '../i18nConfig';
import { cookies } from 'next/headers';

const publicRoutes = ['/sign-in', '/sign-up'];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = publicRoutes.some(item => path.includes(item));
  const isAuth = request.cookies.get('isAuth')?.value;

  // console.log('request:::' , request);
  // console.log('middleware:::' , path, isProtectedRoute, isAuth);

  if (!isProtectedRoute && !isAuth) {
      return NextResponse.redirect(new URL('/sign-in', request.nextUrl));
  }

  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$).*)'],
// };