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

export function canAccessDashboard(user: AuthUser): boolean {
  return hasAnyRole(user, ["admin", "staff", "business_owner"]);
}
