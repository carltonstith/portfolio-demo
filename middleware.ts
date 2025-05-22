import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({ headers });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set("x-pathname", request.nextUrl.pathname);
//   console.log(`Received ${request.method} request to ${request.url} at ${new Date()}`);

//   return NextResponse.next({
//     request: {
//       headers: requestHeaders
//     }
//   });
// }

// export const config = {
//   matcher: [
//     '/portfolio/:path*',
//     ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
//   ]
// }