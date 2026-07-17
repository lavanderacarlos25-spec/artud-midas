import { NextResponse } from "next/server";

import type { AuthErrorResponse } from "@/types/auth";

export function authSuccess<T extends Record<string, unknown>>(data: T, status = 200) {
  return NextResponse.json(data, { status });
}

export function authError(message: string, status = 400): NextResponse<AuthErrorResponse> {
  return NextResponse.json({ error: message }, { status });
}

export async function parseJsonBody<T>(request: Request): Promise<T | null> {
  try {
    return (await request.json()) as T;
  } catch {
    return null;
  }
}
