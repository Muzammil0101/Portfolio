import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
    // Only protect /admin routes
    if (!req.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.next();
    }

    // Allow access to login page
    if (req.nextUrl.pathname === "/admin/login") {
        return NextResponse.next();
    }

    const token = req.cookies.get("admin_token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        await jwtVerify(token, secret);
        return NextResponse.next();
    } catch (error) {
        // Token invalid/expired
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }
}

export const config = {
    matcher: ["/admin/:path*"],
};
