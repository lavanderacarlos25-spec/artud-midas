"use client";

import { AnalyticsPanel } from "@/components/analytics/AnalyticsPanel";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { AnalyticsComparisonItem } from "@/types/analytics";

type AnalyticsComparisonsProps = {
  items: AnalyticsComparisonItem[];
};

export function AnalyticsComparisons({ items }: AnalyticsComparisonsProps) {
  return (
    <AnalyticsPanel
      title="Comparativas"
      description="Semana, mes y trimestre anteriores (demo)."
    >
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const isUp = item.direction === "up";
          const isDown = item.direction === "down";
          const tone = isUp
            ? "text-emerald-400"
            : isDown
              ? "text-red-400"
              : "text-muted";
          const symbol = isUp ? "↑" : isDown ? "↓" : "=";
          const absChange = Math.abs(item.changePercent).toFixed(1);

          return (
            <div
              key={item.id}
              className="space-y-3 rounded-xl border border-border/70 bg-surface/50 p-4"
            >
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <div className="flex items-end justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-foreground">
                    {item.current}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Antes · {item.previous}
                  </p>
                </div>
                <div
                  className={cn(
                    "inline-flex items-center gap-1 text-sm font-semibold",
                    tone,
                  )}
                >
                  {item.direction !== "flat" ? (
                    <Icon
                      name={isUp ? "trending-up" : "trending-down"}
                      className="size-3.5"
                    />
                  ) : null}
                  <span>
                    {symbol} {absChange}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AnalyticsPanel>
  );
}
