import { BusinessSectionCard } from "@/components/businesses/BusinessSectionCard";
import { getBusinessIntelligenceInsights } from "@/config/business-intelligence";
import { cn } from "@/lib/utils";
import type { Business } from "@/types/business";
import type { BusinessIntelligenceSeverity } from "@/types/business-intelligence";

type BusinessIntelligenceCenterProps = {
  business: Business;
};

const severityStyles: Record<
  BusinessIntelligenceSeverity,
  { label: string; className: string; dot: string }
> = {
  warning: {
    label: "Alerta",
    className: "border-orange-500/20 bg-orange-500/5",
    dot: "bg-orange-400",
  },
  action: {
    label: "Acción",
    className: "border-gold/25 bg-gold/5",
    dot: "bg-gold",
  },
  positive: {
    label: "Positivo",
    className: "border-emerald-500/20 bg-emerald-500/5",
    dot: "bg-emerald-400",
  },
  opportunity: {
    label: "Oportunidad",
    className: "border-sky-500/20 bg-sky-500/5",
    dot: "bg-sky-400",
  },
};

export function BusinessIntelligenceCenter({
  business,
}: BusinessIntelligenceCenterProps) {
  const insights = getBusinessIntelligenceInsights(business);

  return (
    <BusinessSectionCard
      className="w-full"
      title="Centro de Inteligencia"
      description="Recomendaciones estratégicas simuladas generadas por IA."
      icon="sparkles"
    >
      <ul className="space-y-3">
        {insights.map((insight) => {
          const style = severityStyles[insight.severity];

          return (
            <li
              key={insight.id}
              className={cn(
                "flex gap-4 rounded-xl border p-4 transition-colors hover:border-gold/25",
                style.className,
              )}
            >
              <span
                className={cn("mt-1.5 size-2.5 shrink-0 rounded-full", style.dot)}
                aria-hidden="true"
              />
              <div className="min-w-0 space-y-1.5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {style.label}
                </p>
                <p className="text-sm leading-relaxed text-foreground">
                  {insight.message}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </BusinessSectionCard>
  );
}
