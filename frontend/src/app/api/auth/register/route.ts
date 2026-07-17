import type { RegisterCredentials } from "@/types/auth";

import { authError, authSuccess, parseJsonBody } from "@/lib/auth/api-utils";
import { isBackendAuthEnabled } from "@/lib/auth/backend-client";
import { registerWithTokens } from "@/lib/auth/service";
import { createTokens, setAuthCookies } from "@/lib/auth/session";

export async function POST(request: Request) {
  const body = await parseJsonBody<RegisterCredentials>(request);

  if (!body?.name || !body?.email || !body?.password) {
    return authError("Name, email, and password are required");
  }

  try {
    const result = await registerWithTokens(body);

    if (isBackendAuthEnabled()) {
      const response = authSuccess({ user: result.user }, 201);
      setAuthCookies(response, {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      });
      return response;
    }

    const tokens = await createTokens(result.user);
    const response = authSuccess({ user: result.user }, 201);
    setAuthCookies(response, tokens);
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Registration failed";
    return authError(message, 400);
  }
}
