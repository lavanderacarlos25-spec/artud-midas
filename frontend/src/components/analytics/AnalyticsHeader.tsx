"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  analyticsPeriodLabels,
  analyticsPeriodOptions,
} from "@/config/analytics";
import { cn } from "@/lib/utils";
import type { AnalyticsPeriod } from "@/types/analytics";

type AnalyticsHeaderProps = {
  period: AnalyticsPeriod;
  onPeriodChange: (period: AnalyticsPeriod) => void;
};

export function AnalyticsHeader({
  period,
  onPeriodChange,
}: AnalyticsHeaderProps) {
  return (
    <section className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="gold">Business Intelligence</Badge>
          <Badge variant="muted">DEMO</Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Analytics
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Centro de inteligencia empresarial. Resumen ejecutivo del
            rendimiento del negocio.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {analyticsPeriodOptions.map((option) => {
          const active = period === option;
          return (
            <Button
              key={option}
              type="button"
              size="sm"
              variant={active ? "primary" : "outline"}
              className={cn(
                !active && "text-muted hover:text-foreground",
                active && "shadow-none",
              )}
              onClick={() => onPeriodChange(option)}
              aria-pressed={active}
            >
              {analyticsPeriodLabels[option]}
            </Button>
          );
        })}
      </div>
    </section>
  );
}
