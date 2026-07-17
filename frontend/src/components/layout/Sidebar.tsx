"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNavItems, secondaryNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

import { useSidebar } from "./SidebarProvider";

function NavLink({
  href,
  label,
  icon,
  collapsed,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: Parameters<typeof Icon>[0]["name"];
  collapsed: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      title={collapsed ? label : undefined}
      className={cn(
        "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isActive
          ? "bg-gold/10 text-gold-light"
          : "text-muted hover:bg-surface-elevated hover:text-foreground",
        collapsed && "justify-center px-2",
      )}
    >
      <Icon
        name={icon}
        className={cn(
          "size-5",
          isActive ? "text-gold" : "text-muted group-hover:text-foreground",
        )}
      />
      {!collapsed && <span className="truncate">{label}</span>}
      {isActive && !collapsed && (
        <span className="ml-auto size-1.5 rounded-full bg-gold" />
      )}
    </Link>
  );
}

export function Sidebar() {
  const { collapsed, mobileOpen, toggleCollapsed, setMobileOpen } =
    useSidebar();

  const closeMobile = () => setMobileOpen(false);

  const sidebarContent = (
    <div className="flex h-full flex-col">
      <div
        className={cn(
          "flex h-16 items-center border-b border-border px-4",
          collapsed ? "justify-center" : "justify-between",
        )}
      >
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2.5" onClick={closeMobile}>
            <div className="flex size-8 items-center justify-center rounded-lg bg-gold/15 ring-1 ring-gold/30">
              <span className="text-sm font-bold text-gold">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-none text-foreground">
                {siteConfig.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted">
                Platform
              </span>
            </div>
          </Link>
        )}

        {collapsed && (
          <Link
            href="/"
            className="flex size-8 items-center justify-center rounded-lg bg-gold/15 ring-1 ring-gold/30"
            onClick={closeMobile}
          >
            <span className="text-sm font-bold text-gold">M</span>
          </Link>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleCollapsed}
          className={cn("hidden lg:inline-flex", collapsed && "mt-0")}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Icon name={collapsed ? "chevron-right" : "chevron-left"} />
        </Button>
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
        <div className="space-y-1">
          {!collapsed && (
            <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Main
            </p>
          )}
          {mainNavItems.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              collapsed={collapsed}
              onNavigate={closeMobile}
            />
          ))}
        </div>

        <div className="mt-auto space-y-1 border-t border-border pt-3">
          {!collapsed && (
            <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              System
            </p>
          )}
          {secondaryNavItems.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              collapsed={collapsed}
              onNavigate={closeMobile}
            />
          ))}
        </div>
      </nav>

      {!collapsed && (
        <div className="border-t border-border p-4">
          <div className="rounded-lg bg-gold/5 p-3 ring-1 ring-gold/15">
            <p className="text-xs font-medium text-gold-light">Pro Plan</p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted">
              Unlock advanced analytics and AI insights.
            </p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeMobile}
          aria-label="Close sidebar"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-surface transition-all duration-300 lg:static lg:z-auto",
          collapsed ? "w-[var(--sidebar-collapsed-width)]" : "w-[var(--sidebar-width)]",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
        aria-label="Main navigation"
      >
        {sidebarContent}
      </aside>
    </>
  );
}

export function useCurrentPageTitle(): string {
  const pathname = usePathname();
  const item = [...mainNavItems, ...secondaryNavItems].find((nav) =>
    nav.href === "/" ? pathname === "/" : pathname.startsWith(nav.href),
  );
  return item?.label ?? "Dashboard";
}
