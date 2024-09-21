import { NextResponse } from "next/server";

const Middleware = (request) => {
  //   if (request.nextUrl.pathname != "/login") {
  return NextResponse.redirect(new URL("/login", request.url));
  //   }
};

export default Middleware;

export const config = {
  matcher: ["/about/:path*", "/studentlist/:path*"],
};
