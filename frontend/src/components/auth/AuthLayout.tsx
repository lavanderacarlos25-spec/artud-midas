import Link from "next/link";
import type { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { Card, CardContent } from "@/components/ui/Card";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
};

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <aside className="relative hidden w-1/2 overflow-hidden lg:flex lg:flex-col lg:justify-between">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_#12100e_0%,_#09090b_50%,_#0a0908_100%)]" />
        <div className="relative flex flex-1 flex-col justify-between p-12">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/30">
              <span className="text-lg font-bold text-gold">M</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
              <p className="text-xs uppercase tracking-widest text-muted">Platform</p>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="max-w-md text-4xl font-semibold leading-tight tracking-tight text-foreground">
              Grow your nightlife business with intelligence.
            </h1>
            <p className="max-w-sm text-base leading-relaxed text-muted">
              Loyalty, analytics, community, and business intelligence — unified
              in one premium platform.
            </p>
          </div>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </aside>

      <main className="flex w-full flex-1 items-center justify-center bg-background p-6 sm:p-10">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-gold/15 ring-1 ring-gold/30 lg:hidden">
              <span className="text-lg font-bold text-gold">M</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {title}
            </h2>
            <p className="text-sm text-muted">{subtitle}</p>
          </div>

          <Card className="border-border/80">
            <CardContent className="pt-6">{children}</CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

type AuthFooterLinkProps = {
  text: string;
  linkText: string;
  href: string;
};

export function AuthFooterLink({ text, linkText, href }: AuthFooterLinkProps) {
  return (
    <p className="text-center text-sm text-muted">
      {text}{" "}
      <Link
        href={href}
        className="font-medium text-gold-light transition-colors hover:text-gold"
      >
        {linkText}
      </Link>
    </p>
  );
}
