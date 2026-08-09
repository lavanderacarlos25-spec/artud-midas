import { BusinessSectionCard } from "@/components/businesses/BusinessSectionCard";
import {
  businessGoalStatusLabels,
  getBusinessGoals,
} from "@/config/business-command";
import { cn } from "@/lib/utils";
import type { Business } from "@/types/business";
import type { BusinessGoalStatus } from "@/types/business-command";

type BusinessGoalsSectionProps = {
  business: Business;
};

const statusStyles: Record<BusinessGoalStatus, string> = {
  en_curso: "border-sky-500/25 bg-sky-500/10 text-sky-300",
  cumplido: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
  retrasado: "border-orange-500/25 bg-orange-500/10 text-orange-300",
};

const barStyles: Record<BusinessGoalStatus, string> = {
  en_curso: "bg-sky-400",
  cumplido: "bg-emerald-400",
  retrasado: "bg-orange-400",
};

export function BusinessGoalsSection({ business }: BusinessGoalsSectionProps) {
  const goals = getBusinessGoals(business);

  return (
    <BusinessSectionCard
      className="w-full"
      title="Objetivos Empresariales"
      description="Seguimiento de metas semanales, mensuales, trimestrales y anuales (demo)."
      icon="trending-up"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="space-y-4 rounded-xl border border-border/70 bg-surface/50 p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">
                  {goal.label}
                </p>
                <p className="text-xs text-muted">{goal.target}</p>
              </div>
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest",
                  statusStyles[goal.status],
                )}
              >
                {businessGoalStatusLabels[goal.status]}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Progreso</span>
                <span className="font-medium text-foreground">
                  {goal.progress}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-surface">
                <div
                  className={cn(
                    "h-full rounded-full transition-all",
                    barStyles[goal.status],
                  )}
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </BusinessSectionCard>
  );
}
