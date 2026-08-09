import type { ReactNode } from "react";

import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { Business } from "@/types/business";
import type { BusinessExecutiveSnapshot } from "@/types/business-360";

type BusinessExecutiveSummary360Props = {
  business: Business;
  executive: BusinessExecutiveSnapshot;
};

export function BusinessExecutiveSummary360({
  business,
  executive,
}: BusinessExecutiveSummary360Props) {
  const trendIcon =
    executive.trend === "down" ? "trending-down" : "trending-up";
  const trendColor =
    executive.trend === "down" ? "text-red-400" : "text-emerald-400";

  return (
    <section className="w-full overflow-hidden rounded-xl border border-border/80 bg-surface-elevated/90 shadow-sm shadow-black/20">
      <div className="border-b border-border/60 bg-gradient-to-r from-gold/10 via-transparent to-transparent px-6 py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div
              className={cn(
                "flex size-16 shrink-0 items-center justify-center rounded-2xl text-base font-semibold tracking-wide ring-1 ring-gold/20",
                business.logoColor,
              )}
            >
              {business.logoInitials}
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Resumen ejecutivo 360° · DEMO
              </p>
              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {executive.generalStatus}
              </h3>
              <p className="text-sm text-muted">
                {business.name} · {business.city} · {business.type}
              </p>
            </div>
          </div>

          <div className="flex items-end gap-2">
            <p className="text-5xl font-semibold tracking-tight text-foreground">
              {executive.healthIndex}
            </p>
            <div className="space-y-1 pb-1">
              <p className="text-sm text-muted">/100</p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Índice de salud
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4">
        <ExecStat
          label="Tendencia"
          value={
            <span className={cn("inline-flex items-center gap-1.5", trendColor)}>
              <Icon name={trendIcon} className="size-4" />
              {executive.trendLabel}
            </span>
          }
        />
        <ExecStat label="Última actualización" value={executive.lastUpdatedLabel} />
        <ExecStat label="Nivel de riesgo" value={executive.riskLevel} />
        <ExecStat
          label="Estado operativo"
          value={executive.operationalStatusLabel}
        />
      </div>
    </section>
  );
}

function ExecStat({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="space-y-1.5 rounded-xl border border-border/60 bg-surface/40 p-4">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <div className="text-sm font-medium text-foreground">{value}</div>
    </div>
  );
}
