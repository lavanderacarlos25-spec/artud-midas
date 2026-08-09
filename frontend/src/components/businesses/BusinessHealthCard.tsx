import { BusinessSectionCard } from "@/components/businesses/BusinessSectionCard";
import {
  businessHealthLevelLabels,
  getBusinessHealthSnapshot,
} from "@/config/business-intelligence";
import { cn } from "@/lib/utils";
import type { Business } from "@/types/business";
import type {
  BusinessHealthIndicatorTone,
  BusinessHealthLevel,
} from "@/types/business-intelligence";

type BusinessHealthCardProps = {
  business: Business;
};

const levelStyles: Record<
  BusinessHealthLevel,
  { dot: string; badge: string }
> = {
  excelente: {
    dot: "bg-emerald-400",
    badge: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
  },
  bueno: {
    dot: "bg-yellow-400",
    badge: "border-yellow-500/25 bg-yellow-500/10 text-yellow-300",
  },
  mejorable: {
    dot: "bg-orange-400",
    badge: "border-orange-500/25 bg-orange-500/10 text-orange-300",
  },
  riesgo: {
    dot: "bg-red-400",
    badge: "border-red-500/25 bg-red-500/10 text-red-400",
  },
};

const toneStyles: Record<BusinessHealthIndicatorTone, string> = {
  positive: "text-emerald-400",
  neutral: "text-foreground",
  warning: "text-orange-300",
  negative: "text-red-400",
};

export function BusinessHealthCard({ business }: BusinessHealthCardProps) {
  const health = getBusinessHealthSnapshot(business);
  const levelStyle = levelStyles[health.level];
  const progress = Math.min(
    100,
    Math.round((health.score / health.maxScore) * 100),
  );

  return (
    <BusinessSectionCard
      className="w-full"
      title="Estado de Salud Empresarial"
      description="Lectura integral del rendimiento operativo (datos demo)."
      icon="trending-up"
    >
      <div className="space-y-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-end gap-3">
            <p className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {health.score}
            </p>
            <div className="space-y-1 pb-1.5">
              <p className="text-sm text-muted">/{health.maxScore}</p>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Puntuación general
              </p>
            </div>
          </div>

          <div
            className={cn(
              "inline-flex items-center gap-2 self-start rounded-full border px-3 py-1.5 text-sm font-medium",
              levelStyle.badge,
            )}
          >
            <span
              className={cn("size-2.5 rounded-full", levelStyle.dot)}
              aria-hidden="true"
            />
            {businessHealthLevelLabels[health.level]}
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-2 overflow-hidden rounded-full bg-surface">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold-muted to-gold"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Índice de salud calculado con señales de negocio simuladas.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {health.indicators.map((indicator) => (
            <div
              key={indicator.id}
              className="rounded-xl border border-border/70 bg-surface/60 p-4 transition-colors hover:border-gold/20"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                {indicator.label}
              </p>
              <p
                className={cn(
                  "mt-2 text-lg font-semibold tracking-tight",
                  toneStyles[indicator.tone],
                )}
              >
                {indicator.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BusinessSectionCard>
  );
}
