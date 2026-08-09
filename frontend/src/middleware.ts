import { NextResponse, type NextRequest } from "next/server";

import {
  ACCESS_TOKEN_COOKIE,
  AUTH_ROUTES,
  PUBLIC_API_ROUTES,
  PUBLIC_ROUTES,
  REFRESH_TOKEN_COOKIE,
} from "@/lib/auth/constants";
import { verifyToken } from "@/lib/auth/jwt";
import { canAccessOperations, canAccessPortal, getSurfaceHomeForRole } from "@/lib/auth/roles";
import type { SessionPayload } from "@/types/auth";

const PORTAL_PATH_PREFIX = "/portal";

function isAuthRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.includes(pathname as (typeof PUBLIC_ROUTES)[number]);
}

function isPublicApiRoute(pathname: string): boolean {
  return PUBLIC_API_ROUTES.some((route) => pathname.startsWith(route));
}

function isStaticAsset(pathname: string): boolean {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/icons") ||
    pathname === "/favicon.ico" ||
    pathname === "/manifest.webmanifest"
  );
}

function isPortalRoute(pathname: string): boolean {
  return pathname === PORTAL_PATH_PREFIX || pathname.startsWith(`${PORTAL_PATH_PREFIX}/`);
}

async function getSessionPayload(request: NextRequest): Promise<SessionPayload | null> {
  const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;

  if (accessToken) {
    const payload = await verifyToken(accessToken);
    if (payload?.type === "access") {
      return payload;
    }
  }

  const refreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;

  if (refreshToken) {
    const payload = await verifyToken(refreshToken);
    if (payload?.type === "refresh") {
      return payload;
    }
  }

  return null;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isStaticAsset(pathname) || isPublicApiRoute(pathname) || pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const session = await getSessionPayload(request);

  if (isAuthRoute(pathname)) {
    if (session) {
      return NextResponse.redirect(new URL(getSurfaceHomeForRole(session), request.url));
    }
    return NextResponse.next();
  }

  if (!session) {
    const loginUrl = new URL(AUTH_ROUTES.login, request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Gating por superficie (ARCHITECTURE.md §4.4 — Roles -> superficies):
  // admin/staff -> Operations (`/`); business_owner -> Portal (`/portal`).
  if (isPortalRoute(pathname)) {
    if (!canAccessPortal(session)) {
      return NextResponse.redirect(new URL(getSurfaceHomeForRole(session), request.url));
    }
  } else if (!canAccessOperations(session)) {
    return NextResponse.redirect(new URL(getSurfaceHomeForRole(session), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
