import type {
  AuthUser,
  ForgotPasswordRequest,
  LoginCredentials,
  RegisterCredentials,
} from "@/types/auth";

import {
  backendForgotPassword,
  backendLogin,
  backendRegister,
  isBackendAuthEnabled,
} from "./backend-client";
import { mockForgotPassword, mockLogin, mockRegister } from "./mock-store";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export function validateEmail(email: string): string | null {
  const value = email.trim();

  if (!value) {
    return "Email is required";
  }

  if (!EMAIL_PATTERN.test(value)) {
    return "Enter a valid email address";
  }

  return null;
}

export function validatePassword(password: string): string | null {
  if (!password) {
    return "Password is required";
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
  }

  return null;
}

export function validateName(name: string): string | null {
  const value = name.trim();

  if (!value) {
    return "Name is required";
  }

  if (value.length < 2) {
    return "Name must be at least 2 characters";
  }

  return null;
}

export async function authenticateUser(
  credentials: LoginCredentials,
): Promise<AuthUser> {
  const emailError = validateEmail(credentials.email);
  const passwordError = validatePassword(credentials.password);

  if (emailError || passwordError) {
    throw new Error(emailError ?? passwordError ?? "Invalid credentials");
  }

  if (isBackendAuthEnabled()) {
    const result = await backendLogin({
      email: credentials.email.trim().toLowerCase(),
      password: credentials.password,
    });
    return result.user;
  }

  const user = await mockLogin({
    email: credentials.email.trim().toLowerCase(),
    password: credentials.password,
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
}

export async function registerUser(
  credentials: RegisterCredentials,
): Promise<AuthUser> {
  const nameError = validateName(credentials.name);
  const emailError = validateEmail(credentials.email);
  const passwordError = validatePassword(credentials.password);

  if (nameError || emailError || passwordError) {
    throw new Error(nameError ?? emailError ?? passwordError ?? "Invalid input");
  }

  if (isBackendAuthEnabled()) {
    const result = await backendRegister({
      name: credentials.name.trim(),
      email: credentials.email.trim().toLowerCase(),
      password: credentials.password,
    });
    return result.user;
  }

  return mockRegister({
    name: credentials.name.trim(),
    email: credentials.email.trim().toLowerCase(),
    password: credentials.password,
  });
}

export async function requestPasswordReset(
  payload: ForgotPasswordRequest,
): Promise<void> {
  const emailError = validateEmail(payload.email);

  if (emailError) {
    throw new Error(emailError);
  }

  if (isBackendAuthEnabled()) {
    await backendForgotPassword({
      email: payload.email.trim().toLowerCase(),
    });
    return;
  }

  await mockForgotPassword(payload.email.trim().toLowerCase());
}

export async function loginWithTokens(credentials: LoginCredentials) {
  if (isBackendAuthEnabled()) {
    return backendLogin({
      email: credentials.email.trim().toLowerCase(),
      password: credentials.password,
    });
  }

  const user = await authenticateUser(credentials);
  return { user, accessToken: "", refreshToken: "" };
}

export async function registerWithTokens(credentials: RegisterCredentials) {
  if (isBackendAuthEnabled()) {
    return backendRegister({
      name: credentials.name.trim(),
      email: credentials.email.trim().toLowerCase(),
      password: credentials.password,
    });
  }

  const user = await registerUser(credentials);
  return { user, accessToken: "", refreshToken: "" };
}
