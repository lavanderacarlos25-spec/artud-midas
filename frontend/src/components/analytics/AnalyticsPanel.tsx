"use client";

import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type AnalyticsPanelProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function AnalyticsPanel({
  title,
  description,
  action,
  children,
  className,
}: AnalyticsPanelProps) {
  return (
    <Card
      className={cn(
        "border-border/80 bg-surface-elevated/90 shadow-sm shadow-black/20",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4 p-6 pb-0">
        <div className="space-y-1">
          <h3 className="text-sm font-medium tracking-wide text-foreground">
            {title}
          </h3>
          {description ? (
            <p className="text-xs leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        {action}
      </div>
      <CardContent className="p-6 pt-5">{children}</CardContent>
    </Card>
  );
}

export const analyticsChartColors = {
  gold: "#d4af37",
  goldLight: "#f0c14d",
  muted: "#78716c",
  grid: "#27241f",
  emerald: "#34d399",
  sky: "#38bdf8",
  rose: "#fb7185",
  violet: "#a78bfa",
  text: "#a8a29e",
} as const;
