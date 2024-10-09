import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const tokenKey = process.env["ACCESS_TOKEN"]!;

export function middleware(request: NextRequest) {
  // Fixes: middleware redirect doesn't load css
  if (request.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  // >>>------------ Authentication
  const { pathname } = request.nextUrl;

  // Checks if there is token while visiting login page
  if (pathname === "/login" && request.cookies.has(tokenKey))
    // Redirects to "/" if there was already a token
    return NextResponse.redirect(new URL("/", request.url));

  // Checks if there is not token while visiting pages other than login
  if (pathname !== "/login" && !request.cookies.has(tokenKey))
    // Redirects to "/login" due to lack of the token
    return NextResponse.redirect(new URL("/login", request.url));

  // Authentication ------------<<<

  return NextResponse.next();
}
