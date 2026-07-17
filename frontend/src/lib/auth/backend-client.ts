import type {
  AuthResponse,
  AuthUser,
  ForgotPasswordRequest,
  LoginCredentials,
  RegisterCredentials,
} from "@/types/auth";

function getBackendUrl(): string | null {
  const url = process.env.AUTH_BACKEND_URL?.trim();
  return url ? url.replace(/\/$/, "") : null;
}

export function isBackendAuthEnabled(): boolean {
  return Boolean(getBackendUrl());
}

async function parseBackendError(response: Response): Promise<string> {
  try {
    const data = (await response.json()) as { error?: string; message?: string };
    return data.error ?? data.message ?? "Authentication request failed";
  } catch {
    return "Authentication request failed";
  }
}

export async function backendLogin(
  credentials: LoginCredentials,
): Promise<AuthResponse & { accessToken: string; refreshToken: string }> {
  const backendUrl = getBackendUrl();

  if (!backendUrl) {
    throw new Error("Backend auth is not configured");
  }

  const response = await fetch(`${backendUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(await parseBackendError(response));
  }

  return response.json() as Promise<
    AuthResponse & { accessToken: string; refreshToken: string }
  >;
}

export async function backendRegister(
  credentials: RegisterCredentials,
): Promise<AuthResponse & { accessToken: string; refreshToken: string }> {
  const backendUrl = getBackendUrl();

  if (!backendUrl) {
    throw new Error("Backend auth is not configured");
  }

  const response = await fetch(`${backendUrl}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(await parseBackendError(response));
  }

  return response.json() as Promise<
    AuthResponse & { accessToken: string; refreshToken: string }
  >;
}

export async function backendForgotPassword(
  payload: ForgotPasswordRequest,
): Promise<void> {
  const backendUrl = getBackendUrl();

  if (!backendUrl) {
    throw new Error("Backend auth is not configured");
  }

  const response = await fetch(`${backendUrl}/auth/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(await parseBackendError(response));
  }
}

export async function backendGetMe(accessToken: string): Promise<AuthUser> {
  const backendUrl = getBackendUrl();

  if (!backendUrl) {
    throw new Error("Backend auth is not configured");
  }

  const response = await fetch(`${backendUrl}/auth/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch authenticated user");
  }

  const data = (await response.json()) as AuthResponse;
  return data.user;
}

export async function backendRefresh(
  refreshToken: string,
): Promise<{ accessToken: string; refreshToken: string; user: AuthUser }> {
  const backendUrl = getBackendUrl();

  if (!backendUrl) {
    throw new Error("Backend auth is not configured");
  }

  const response = await fetch(`${backendUrl}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to refresh session");
  }

  return response.json() as Promise<{
    accessToken: string;
    refreshToken: string;
    user: AuthUser;
  }>;
}
