import { NextResponse } from "next/server";

import { authSuccess } from "@/lib/auth/api-utils";
import { clearAuthCookiesOnResponse } from "@/lib/auth/session";

export async function POST() {
  const response = authSuccess({ success: true });
  clearAuthCookiesOnResponse(response);
  return response;
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
