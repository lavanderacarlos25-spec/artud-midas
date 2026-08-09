import type { AuthUser, UserRole } from "@/types/auth";

export function hasRole(user: AuthUser, role: UserRole): boolean {
  return user.role === role;
}

export function hasAnyRole(user: AuthUser, roles: UserRole[]): boolean {
  return roles.includes(user.role);
}

export function isAdmin(user: AuthUser): boolean {
  return user.role === "admin";
}

/**
 * Operations Center (`/`) — equipo interno Artud Midas.
 * Ver ARCHITECTURE.md §4.4 (Roles -> superficies).
 */
export function canAccessOperations(user: AuthUser): boolean {
  return hasAnyRole(user, ["admin", "staff"]);
}

/**
 * Executive Command Center (`/portal`) — propietario del negocio.
 * Ver ARCHITECTURE.md §4.4 (Roles -> superficies).
 */
export function canAccessPortal(user: AuthUser): boolean {
  return hasRole(user, "business_owner");
}

/** Superficie que le corresponde al rol, para redirects de gating. */
export function getSurfaceHomeForRole(user: AuthUser): "/" | "/portal" {
  return canAccessPortal(user) ? "/portal" : "/";
}
