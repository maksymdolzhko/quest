import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const {device} = userAgent(request);
  // console.log('device', device.type) // undefined

  const url = request.nextUrl;
  url.searchParams.set("lng", "en");

  const requestHeaders = new Headers(request.headers);
  //  requestHeaders.set('Content-Type', 'application/json');

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return NextResponse.rewrite(url);
}
