import { OperationsPanel } from "@/components/operations/OperationsPanel";
import {
  getOperationsInternalObjectives,
  operationsObjectiveStatusLabels,
} from "@/config/operations-center";
import { cn } from "@/lib/utils";
import type { OperationsObjectiveStatus } from "@/types/operations-center";

const statusStyles: Record<OperationsObjectiveStatus, string> = {
  en_curso: "border-sky-500/25 bg-sky-500/10 text-sky-300",
  cumplido: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
  en_riesgo: "border-orange-500/25 bg-orange-500/10 text-orange-300",
};

const barStyles: Record<OperationsObjectiveStatus, string> = {
  en_curso: "bg-sky-400",
  cumplido: "bg-emerald-400",
  en_riesgo: "bg-orange-400",
};

export function OperationsInternalObjectives() {
  const objectives = getOperationsInternalObjectives();

  return (
    <OperationsPanel
      title="Objetivos internos"
      description="Metas del equipo Artud Midas sobre la red (demo)."
      icon="trending-up"
    >
      <div className="space-y-4">
        {objectives.map((objective) => (
          <div
            key={objective.id}
            className="space-y-3 rounded-xl border border-border/70 bg-surface/50 p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">
                  {objective.label}
                </p>
                <p className="text-xs text-muted">{objective.target}</p>
              </div>
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest",
                  statusStyles[objective.status],
                )}
              >
                {operationsObjectiveStatusLabels[objective.status]}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Progreso</span>
                <span className="font-medium text-foreground">
                  {objective.progress}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-surface">
                <div
                  className={cn("h-full rounded-full", barStyles[objective.status])}
                  style={{ width: `${objective.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </OperationsPanel>
  );
}
