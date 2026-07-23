import { OperationsPanel } from "@/components/operations/OperationsPanel";
import {
  getOperationsInternalAlerts,
  operationsAlertSeverityLabels,
} from "@/config/operations-center";
import { cn } from "@/lib/utils";
import type { OperationsAlertSeverity } from "@/types/operations-center";

const severityDot: Record<OperationsAlertSeverity, string> = {
  critica: "bg-red-400",
  alta: "bg-orange-400",
  media: "bg-yellow-400",
  info: "bg-stone-400",
};

export function OperationsAlertsList() {
  const alerts = getOperationsInternalAlerts();

  return (
    <OperationsPanel
      title="Alertas internas"
      description="Señales operativas de la red Artud Midas (demo)."
      icon="bell"
    >
      <ul className="space-y-3">
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className="flex gap-3 rounded-xl border border-border/70 bg-surface/50 p-4"
          >
            <span
              className={cn(
                "mt-1.5 size-2.5 shrink-0 rounded-full",
                severityDot[alert.severity],
              )}
              aria-hidden="true"
            />
            <div className="min-w-0 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-medium text-foreground">
                  {alert.title}
                </p>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {operationsAlertSeverityLabels[alert.severity]}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {alert.detail}
              </p>
              <p className="text-xs text-muted-foreground">
                {alert.relativeTime}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </OperationsPanel>
  );
}
