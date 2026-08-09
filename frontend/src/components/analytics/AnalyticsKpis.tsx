"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { AnalyticsKpi } from "@/types/analytics";

type AnalyticsKpisProps = {
  kpis: AnalyticsKpi[];
};

export function AnalyticsKpis({ kpis }: AnalyticsKpisProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Indicadores
        </p>
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          KPIs del periodo
        </h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {kpis.map((kpi) => {
          const trendIcon =
            kpi.trend === "down" ? "trending-down" : "trending-up";
          const trendColor =
            kpi.trend === "down"
              ? "text-red-400"
              : kpi.trend === "flat"
                ? "text-muted"
                : "text-emerald-400";

          return (
            <Card
              key={kpi.id}
              className="border-border/80 bg-surface-elevated/90 transition-colors hover:border-gold/25"
            >
              <CardContent className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs text-muted">{kpi.label}</p>
                  <div
                    className={cn(
                      "inline-flex items-center gap-1 text-xs font-medium",
                      trendColor,
                    )}
                  >
                    {kpi.trend !== "flat" ? (
                      <Icon name={trendIcon} className="size-3.5" />
                    ) : (
                      <span className="text-muted">=</span>
                    )}
                    {kpi.change}
                  </div>
                </div>
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  {kpi.value}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
