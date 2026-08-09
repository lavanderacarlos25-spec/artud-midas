"use client";

import { AnalyticsPanel } from "@/components/analytics/AnalyticsPanel";
import { cn } from "@/lib/utils";
import type { AnalyticsTrendItem } from "@/types/analytics";

type AnalyticsTrendsProps = {
  items: AnalyticsTrendItem[];
};

const toneStyles = {
  positive: "border-emerald-500/20 bg-emerald-500/5",
  warning: "border-yellow-500/20 bg-yellow-500/5",
  neutral: "border-border/70 bg-surface/50",
} as const;

export function AnalyticsTrends({ items }: AnalyticsTrendsProps) {
  return (
    <AnalyticsPanel
      title="Tendencias"
      description="Patrones observados en el periodo (demo)."
    >
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className={cn("rounded-xl border p-4", toneStyles[item.tone])}
          >
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </AnalyticsPanel>
  );
}
