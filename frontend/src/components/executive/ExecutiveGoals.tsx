import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import { executiveGoalHorizonLabels } from "@/config/executive-command";
import { cn } from "@/lib/utils";
import type { ExecutiveGoal } from "@/types/executive-command";

type ExecutiveGoalsProps = {
  goals: ExecutiveGoal[];
};

export function ExecutiveGoals({ goals }: ExecutiveGoalsProps) {
  return (
    <IntelligencePanel
      title="Objetivos"
      description="Seguimiento semanal, mensual, trimestral y anual."
      icon="trending-up"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {goals.map((goal) => {
          const done = goal.progress >= 100;
          return (
            <div
              key={goal.id}
              className="space-y-4 rounded-xl border border-border/70 bg-surface/50 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {executiveGoalHorizonLabels[goal.horizon]}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {goal.label}
                  </p>
                  <p className="text-xs text-muted">{goal.target}</p>
                </div>
                <span
                  className={cn(
                    "text-sm font-semibold",
                    done ? "text-emerald-400" : "text-foreground",
                  )}
                >
                  {goal.progress}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-surface">
                <div
                  className={cn(
                    "h-full rounded-full",
                    done ? "bg-emerald-400" : "bg-gold",
                  )}
                  style={{ width: `${Math.min(goal.progress, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </IntelligencePanel>
  );
}
