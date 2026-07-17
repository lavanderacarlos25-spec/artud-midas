"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useAuth } from "@/components/auth/AuthProvider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { getUserInitials } from "@/lib/auth/client";
import { cn } from "@/lib/utils";
import { ROLE_LABELS } from "@/types/auth";

export function UserMenu() {
  const { user, isLoading, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isLoading) {
    return (
      <div className="size-9 animate-pulse rounded-full bg-surface-elevated" />
    );
  }

  if (!user) {
    return null;
  }

  const initials = getUserInitials(user.name);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex items-center gap-2 rounded-lg border border-transparent p-1 transition-colors",
          "hover:border-border hover:bg-surface-elevated",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          open && "border-border bg-surface-elevated",
        )}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <div className="flex size-9 items-center justify-center rounded-full bg-gold/15 text-sm font-semibold text-gold ring-1 ring-gold/25">
          {initials}
        </div>
        <div className="hidden flex-col items-start lg:flex">
          <span className="text-sm font-medium leading-none">{user.name}</span>
          <span className="text-xs text-muted">{ROLE_LABELS[user.role]}</span>
        </div>
        <Icon
          name="chevron-down"
          className={cn(
            "hidden size-4 text-muted transition-transform lg:block",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-border bg-surface-elevated p-2 shadow-xl shadow-black/40"
        >
          <div className="border-b border-border px-3 pb-3 pt-1">
            <p className="truncate text-sm font-medium text-foreground">
              {user.name}
            </p>
            <p className="truncate text-xs text-muted">{user.email}</p>
            <Badge variant="gold" className="mt-2">
              {ROLE_LABELS[user.role]}
            </Badge>
          </div>

          <div className="py-1">
            <Link
              href="/settings"
              role="menuitem"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              <Icon name="settings" className="size-4" />
              Settings
            </Link>
          </div>

          <div className="border-t border-border pt-1">
            <Button
              variant="ghost"
              role="menuitem"
              className="w-full justify-start gap-2 px-3 text-red-400 hover:bg-red-500/10 hover:text-red-300"
              onClick={() => {
                setOpen(false);
                void logout();
              }}
            >
              <Icon name="log-out" className="size-4" />
              Sign out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
