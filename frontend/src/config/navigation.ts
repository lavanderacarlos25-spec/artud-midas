import type { IconName } from "@/components/ui/icons";

/**
 * Navigation for the Artud Midas Operations Center (internal surface).
 *
 * Portal Empresarial and App Cliente Final will use separate nav configs later.
 * See `frontend/ARCHITECTURE.md` (Sprint 4 — three-surface model).
 */
export type NavItem = {
  label: string;
  href: string;
  icon: IconName;
};

export const mainNavItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: "layout-dashboard" },
  { label: "Clientes", href: "/customers", icon: "users" },
  { label: "Empresas", href: "/businesses", icon: "building" },
  { label: "Fidelización", href: "/loyalty", icon: "award" },
  { label: "Analytics", href: "/analytics", icon: "chart" },
  { label: "AI Assistant", href: "/ai-assistant", icon: "sparkles" },
];

export const secondaryNavItems: NavItem[] = [
  { label: "Settings", href: "/settings", icon: "settings" },
];

export const allNavItems = [...mainNavItems, ...secondaryNavItems];
