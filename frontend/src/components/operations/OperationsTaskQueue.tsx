import { OperationsPanel } from "@/components/operations/OperationsPanel";
import {
  getOperationsTaskQueue,
  operationsTaskStatusLabels,
} from "@/config/operations-center";
import { cn } from "@/lib/utils";
import type { OperationsTaskStatus } from "@/types/operations-center";

const statusStyles: Record<OperationsTaskStatus, string> = {
  pendiente: "border-border bg-surface text-muted",
  en_curso: "border-sky-500/25 bg-sky-500/10 text-sky-300",
  bloqueada: "border-orange-500/25 bg-orange-500/10 text-orange-300",
};

export function OperationsTaskQueue() {
  const tasks = getOperationsTaskQueue();

  return (
    <OperationsPanel
      title="Cola de tareas"
      description="Trabajo asignado al equipo interno por empresa (demo)."
      icon="sliders"
    >
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="rounded-xl border border-border/70 bg-surface/50 p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <p className="text-sm font-medium text-foreground">{task.title}</p>
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest",
                  statusStyles[task.status],
                )}
              >
                {operationsTaskStatusLabels[task.status]}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted">{task.businessName}</p>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span>{task.assignee}</span>
              <span>{task.dueLabel}</span>
            </div>
          </li>
        ))}
      </ul>
    </OperationsPanel>
  );
}
