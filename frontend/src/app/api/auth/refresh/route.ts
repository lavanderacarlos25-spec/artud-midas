import { authError, authSuccess } from "@/lib/auth/api-utils";
import { backendRefresh, isBackendAuthEnabled } from "@/lib/auth/backend-client";
import { toAuthUser, verifyToken } from "@/lib/auth/jwt";
import {
  clearAuthCookiesOnResponse,
  createTokens,
  getRefreshTokenFromCookies,
  setAuthCookies,
} from "@/lib/auth/session";

export async function POST() {
  const refreshToken = await getRefreshTokenFromCookies();

  if (!refreshToken) {
    return authError("No refresh token", 401);
  }

  try {
    if (isBackendAuthEnabled()) {
      const result = await backendRefresh(refreshToken);
      const response = authSuccess({ user: result.user });
      setAuthCookies(response, {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      });
      return response;
    }

    const payload = await verifyToken(refreshToken);

    if (!payload || payload.type !== "refresh") {
      const response = authError("Invalid refresh token", 401);
      clearAuthCookiesOnResponse(response);
      return response;
    }

    const user = toAuthUser(payload);
    const tokens = await createTokens(user);
    const response = authSuccess({ user });
    setAuthCookies(response, tokens);
    return response;
  } catch {
    const response = authError("Session expired", 401);
    clearAuthCookiesOnResponse(response);
    return response;
  }
}
