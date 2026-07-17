import type { LoginCredentials } from "@/types/auth";

import { authError, authSuccess, parseJsonBody } from "@/lib/auth/api-utils";
import { isBackendAuthEnabled } from "@/lib/auth/backend-client";
import { loginWithTokens } from "@/lib/auth/service";
import { createTokens, setAuthCookies } from "@/lib/auth/session";

export async function POST(request: Request) {
  const body = await parseJsonBody<LoginCredentials>(request);

  if (!body?.email || !body?.password) {
    return authError("Email and password are required");
  }

  try {
    const result = await loginWithTokens(body);

    if (isBackendAuthEnabled()) {
      const response = authSuccess({ user: result.user });
      setAuthCookies(response, {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      });
      return response;
    }

    const tokens = await createTokens(result.user);
    const response = authSuccess({ user: result.user });
    setAuthCookies(response, tokens);
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Login failed";
    return authError(message, 401);
  }
}
