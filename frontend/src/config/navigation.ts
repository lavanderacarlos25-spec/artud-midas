import type { IconName } from "@/components/ui/icons";

export type NavItem = {
  label: string;
  href: string;
  icon: IconName;
};

export const mainNavItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: "layout-dashboard" },
  { label: "Customers", href: "/customers", icon: "users" },
  { label: "Businesses", href: "/businesses", icon: "building" },
  { label: "Loyalty", href: "/loyalty", icon: "award" },
  { label: "Analytics", href: "/analytics", icon: "chart" },
  { label: "AI Assistant", href: "/ai-assistant", icon: "sparkles" },
];

export const secondaryNavItems: NavItem[] = [
  { label: "Settings", href: "/settings", icon: "settings" },
];

export const allNavItems = [...mainNavItems, ...secondaryNavItems];
