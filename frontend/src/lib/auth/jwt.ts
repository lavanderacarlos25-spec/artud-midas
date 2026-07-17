import { SignJWT, jwtVerify, type JWTPayload } from "jose";

import type { AuthUser, SessionPayload } from "@/types/auth";

import {
  ACCESS_TOKEN_TTL,
  REFRESH_TOKEN_TTL,
} from "./constants";

function getJwtSecret(): Uint8Array {
  const secret =
    process.env.JWT_SECRET ?? "artud-midas-dev-secret-change-in-production";

  if (
    process.env.NODE_ENV === "production" &&
    secret === "artud-midas-dev-secret-change-in-production"
  ) {
    throw new Error("JWT_SECRET must be set in production");
  }

  return new TextEncoder().encode(secret);
}

function toSessionPayload(user: AuthUser, type: SessionPayload["type"]): JWTPayload {
  return {
    sub: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    type,
  };
}

export async function signAccessToken(user: AuthUser): Promise<string> {
  return new SignJWT(toSessionPayload(user, "access"))
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(ACCESS_TOKEN_TTL)
    .sign(getJwtSecret());
}

export async function signRefreshToken(user: AuthUser): Promise<string> {
  return new SignJWT(toSessionPayload(user, "refresh"))
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(REFRESH_TOKEN_TTL)
    .sign(getJwtSecret());
}

export async function verifyToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret());

    if (
      typeof payload.sub !== "string" ||
      typeof payload.email !== "string" ||
      typeof payload.name !== "string" ||
      typeof payload.role !== "string" ||
      (payload.type !== "access" && payload.type !== "refresh")
    ) {
      return null;
    }

    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
      role: payload.role as SessionPayload["role"],
      type: payload.type,
    };
  } catch {
    return null;
  }
}

export function toAuthUser(payload: SessionPayload): AuthUser {
  return {
    id: payload.id,
    email: payload.email,
    name: payload.name,
    role: payload.role,
  };
}
