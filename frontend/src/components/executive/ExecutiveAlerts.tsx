import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import {
  executiveAlertToneLabels,
} from "@/config/executive-command";
import { cn } from "@/lib/utils";
import type {
  ExecutiveAlert,
  ExecutiveAlertTone,
} from "@/types/executive-command";

type ExecutiveAlertsProps = {
  alerts: ExecutiveAlert[];
};

const toneStyles: Record<
  ExecutiveAlertTone,
  { card: string; dot: string }
> = {
  rojo: {
    card: "border-red-500/25 bg-red-500/5",
    dot: "bg-red-400",
  },
  amarillo: {
    card: "border-yellow-500/25 bg-yellow-500/5",
    dot: "bg-yellow-400",
  },
  verde: {
    card: "border-emerald-500/25 bg-emerald-500/5",
    dot: "bg-emerald-400",
  },
};

export function ExecutiveAlerts({ alerts }: ExecutiveAlertsProps) {
  return (
    <IntelligencePanel
      title="Alertas"
      description="Prioridades del negocio en rojo, amarillo y verde."
      icon="bell"
    >
      <ul className="space-y-3">
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className={cn(
              "rounded-xl border p-4",
              toneStyles[alert.tone].card,
            )}
          >
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  "mt-1.5 size-2.5 shrink-0 rounded-full",
                  toneStyles[alert.tone].dot,
                )}
                aria-hidden
              />
              <div className="min-w-0 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium text-foreground">
                    {alert.title}
                  </p>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {executiveAlertToneLabels[alert.tone]}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {alert.detail}
                </p>
                <p className="text-xs text-muted-foreground">
                  {alert.priorityLabel}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </IntelligencePanel>
  );
}
