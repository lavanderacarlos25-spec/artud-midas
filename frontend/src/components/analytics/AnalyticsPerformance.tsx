"use client";

import { AnalyticsPanel } from "@/components/analytics/AnalyticsPanel";
import type { AnalyticsPerformanceItem } from "@/types/analytics";

type AnalyticsPerformanceProps = {
  items: AnalyticsPerformanceItem[];
};

export function AnalyticsPerformance({ items }: AnalyticsPerformanceProps) {
  return (
    <AnalyticsPanel
      title="Rendimiento"
      description="Momentos y activos destacados del periodo (demo)."
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-border/70 bg-surface/50 p-4"
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-2 text-sm font-medium leading-snug text-foreground">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </AnalyticsPanel>
  );
}
