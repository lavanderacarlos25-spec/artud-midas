import { OperationsPanel } from "@/components/operations/OperationsPanel";
import {
  getOperationsDailyPriorities,
  operationsPriorityLabels,
} from "@/config/operations-center";
import { cn } from "@/lib/utils";
import type { OperationsPriorityLevel } from "@/types/operations-center";

const levelStyles: Record<OperationsPriorityLevel, string> = {
  alta: "border-orange-500/25 bg-orange-500/10 text-orange-300",
  media: "border-sky-500/25 bg-sky-500/10 text-sky-300",
  baja: "border-border bg-surface text-muted",
};

export function OperationsDailyPriorities() {
  const priorities = getOperationsDailyPriorities();

  return (
    <OperationsPanel
      title="Prioridades del día"
      description="Foco operativo interno para el equipo Artud Midas (demo)."
      icon="award"
    >
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {priorities.map((item) => (
          <div
            key={item.id}
            className="space-y-3 rounded-xl border border-border/70 bg-surface/50 p-4"
          >
            <span
              className={cn(
                "inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest",
                levelStyles[item.level],
              )}
            >
              {operationsPriorityLabels[item.level]}
            </span>
            <p className="text-sm font-medium leading-snug text-foreground">
              {item.title}
            </p>
            <div className="space-y-0.5 text-xs text-muted-foreground">
              <p>{item.owner}</p>
              <p>{item.dueLabel}</p>
            </div>
          </div>
        ))}
      </div>
    </OperationsPanel>
  );
}
