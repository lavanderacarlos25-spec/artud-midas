"use client";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

import { UserMenu } from "./UserMenu";
import { useCurrentPageTitle } from "./Sidebar";
import { useSidebar } from "./SidebarProvider";

export function TopNav() {
  const { toggleMobile } = useSidebar();
  const pageTitle = useCurrentPageTitle();

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-4 border-b border-border bg-background/80 px-4 backdrop-blur-md sm:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={toggleMobile}
        aria-label="Open navigation menu"
      >
        <Icon name="menu" />
      </Button>

      <div className="flex min-w-0 flex-1 flex-col">
        <h1 className="truncate text-base font-semibold text-foreground sm:text-lg">
          {pageTitle}
        </h1>
        <p className="hidden text-xs text-muted sm:block">
          Nightlife business intelligence platform
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative hidden md:block">
          <Icon
            name="search"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            placeholder="Search..."
            className="h-9 w-48 rounded-lg border border-border bg-surface-elevated pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold/40 focus:outline-none focus:ring-2 focus:ring-ring lg:w-64"
            aria-label="Search"
          />
        </div>

        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Icon name="bell" />
        </Button>

        <div className="border-l border-border pl-2 sm:pl-3">
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
