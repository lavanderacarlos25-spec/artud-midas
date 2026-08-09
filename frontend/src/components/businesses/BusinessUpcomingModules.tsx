import { Card, CardContent } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import {
  businessModuleRuntimeStatusLabels,
  getBusinessModuleProgress,
} from "@/config/business-command";
import { upcomingBusinessModules } from "@/config/businesses";
import { cn } from "@/lib/utils";
import type { Business } from "@/types/business";
import type { BusinessModuleRuntimeStatus } from "@/types/business-command";

type BusinessUpcomingModulesProps = {
  business: Business;
};

const statusStyles: Record<
  BusinessModuleRuntimeStatus,
  { badge: string; dot: string; bar: string }
> = {
  activo: {
    badge: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
    dot: "bg-emerald-400",
    bar: "bg-emerald-400",
  },
  en_configuracion: {
    badge: "border-yellow-500/25 bg-yellow-500/10 text-yellow-300",
    dot: "bg-yellow-400",
    bar: "bg-yellow-400",
  },
  disponible: {
    badge: "border-border bg-surface text-muted",
    dot: "bg-stone-400",
    bar: "bg-stone-500",
  },
};

export function BusinessUpcomingModules({
  business,
}: BusinessUpcomingModulesProps) {
  const progressByKey = new Map(
    getBusinessModuleProgress(business).map((item) => [item.key, item]),
  );

  return (
    <section className="w-full space-y-6">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20">
          <Icon name="layout-dashboard" className="size-5 text-gold" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            Estado de los módulos
          </h3>
          <p className="text-sm text-muted">
            Disponibilidad y avance de configuración por área operativa (demo).
          </p>
        </div>
      </div>

      <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {upcomingBusinessModules.map((module) => {
          const runtime = progressByKey.get(module.key) ?? {
            key: module.key,
            status: "disponible" as const,
            progress: 0,
          };
          const style = statusStyles[runtime.status];

          return (
            <Card
              key={module.key}
              className="border-border/80 bg-surface-elevated/90 transition-colors hover:border-gold/25"
            >
              <CardContent className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20">
                    <Icon name={module.icon} className="size-5 text-gold" />
                  </div>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest",
                      style.badge,
                    )}
                  >
                    <span
                      className={cn("size-1.5 rounded-full", style.dot)}
                      aria-hidden="true"
                    />
                    {businessModuleRuntimeStatusLabels[runtime.status]}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <p className="text-sm font-medium text-foreground">
                    {module.label}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    {module.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Progreso</span>
                    <span className="font-medium text-foreground">
                      {runtime.progress}%
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-surface">
                    <div
                      className={cn("h-full rounded-full", style.bar)}
                      style={{ width: `${runtime.progress}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
