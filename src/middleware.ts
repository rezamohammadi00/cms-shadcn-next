import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";

export async function middleware(req: Request) {
  const session = await getSession();

  if (session) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth/login", req.url));
}

export const config = {
  matcher: ["/", "/posts/:path*"], //means: |)/posts/anything(ex:/posts/2/dasdasdada) ||)/posts |||)/
};
