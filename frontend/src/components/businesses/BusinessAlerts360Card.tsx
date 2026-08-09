import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import { cn } from "@/lib/utils";
import type { BusinessAlertItem } from "@/types/business-360";

type BusinessAlerts360CardProps = {
  alerts: BusinessAlertItem[];
};

const kindLabels = {
  riesgo: "Riesgo",
  oportunidad: "Oportunidad",
  accion: "Acción recomendada",
} as const;

const kindStyles = {
  riesgo: "border-red-500/20 bg-red-500/5",
  oportunidad: "border-emerald-500/20 bg-emerald-500/5",
  accion: "border-gold/25 bg-gold/5",
} as const;

const priorityStyles = {
  alta: "text-orange-300",
  media: "text-sky-300",
  baja: "text-muted",
} as const;

export function BusinessAlerts360Card({ alerts }: BusinessAlerts360CardProps) {
  return (
    <IntelligencePanel
      title="Alertas"
      description="Riesgos, oportunidades y acciones recomendadas (demo)."
      icon="bell"
    >
      <ul className="space-y-3">
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className={cn(
              "rounded-xl border p-4",
              kindStyles[alert.kind],
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                {kindLabels[alert.kind]}
              </p>
              <div className="flex flex-wrap gap-3 text-xs">
                <span className="text-muted-foreground">
                  Estado · {alert.status}
                </span>
                <span className={priorityStyles[alert.priority]}>
                  Prioridad · {alert.priority}
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm font-medium text-foreground">
              {alert.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {alert.detail}
            </p>
          </li>
        ))}
      </ul>
    </IntelligencePanel>
  );
}
