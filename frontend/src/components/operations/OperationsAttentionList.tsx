import { OperationsPanel } from "@/components/operations/OperationsPanel";
import {
  getOperationsAttentionBusinesses,
  operationsAlertSeverityLabels,
} from "@/config/operations-center";
import { cn } from "@/lib/utils";
import type { OperationsAlertSeverity } from "@/types/operations-center";

const severityStyles: Record<OperationsAlertSeverity, string> = {
  critica: "border-red-500/25 bg-red-500/10 text-red-400",
  alta: "border-orange-500/25 bg-orange-500/10 text-orange-300",
  media: "border-yellow-500/25 bg-yellow-500/10 text-yellow-300",
  info: "border-border bg-surface text-muted",
};

export function OperationsAttentionList() {
  const items = getOperationsAttentionBusinesses();

  return (
    <OperationsPanel
      title="Empresas que necesitan atención"
      description="Cola multi-empresa para el equipo interno (demo)."
      icon="building"
    >
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="rounded-xl border border-border/70 bg-surface/50 p-4 transition-colors hover:border-gold/20"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">
                  {item.businessName}
                </p>
                <p className="text-xs text-muted">{item.city}</p>
              </div>
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest",
                  severityStyles[item.severity],
                )}
              >
                {operationsAlertSeverityLabels[item.severity]}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.reason}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              {item.openTasks} tareas abiertas
            </p>
          </li>
        ))}
      </ul>
    </OperationsPanel>
  );
}
