import { NextResponse } from "next/server";

import type { ForgotPasswordRequest } from "@/types/auth";

import { authError, authSuccess, parseJsonBody } from "@/lib/auth/api-utils";
import { requestPasswordReset } from "@/lib/auth/service";

export async function POST(request: Request) {
  const body = await parseJsonBody<ForgotPasswordRequest>(request);

  if (!body?.email) {
    return authError("Email is required");
  }

  try {
    await requestPasswordReset(body);

    return authSuccess({
      message:
        "If an account exists for this email, password reset instructions have been sent.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Request failed";
    return authError(message);
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
