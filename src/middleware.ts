import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';

const publicRoutes = ['/ua/sign-in', '/ua/sign-up'];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = publicRoutes.includes(path);
  const isAuth = request.cookies.get('isAuth')?.value;

  // console.log('request:::' , request);
  // console.log('middleware:::' , path, isProtectedRoute, isAuth);

  if (!isProtectedRoute && !isAuth) {
      return NextResponse.redirect(new URL('/ua/sign-in', request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$).*)'],
};