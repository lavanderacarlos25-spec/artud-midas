import { BusinessSectionCard } from "@/components/businesses/BusinessSectionCard";
import { Icon, type IconName } from "@/components/ui/icons";
import { businessStrategyItems } from "@/config/businesses";
import type { Business, BusinessStrategyItem } from "@/types/business";

type BusinessStrategySectionProps = {
  business: Business;
};

const strategyIcons: Record<BusinessStrategyItem["key"], IconName> = {
  monthlyGoal: "revenue",
  idealAudience: "users",
  strengths: "award",
  weaknesses: "chart",
  opportunities: "sparkles",
  risks: "bell",
};

export function BusinessStrategySection({
  business,
}: BusinessStrategySectionProps) {
  return (
    <section className="w-full space-y-6">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20">
          <Icon name="sparkles" className="size-5 text-gold" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            6. Estrategia
          </h3>
          <p className="text-sm text-muted">
            Lectura estratégica de la empresa con datos de demostración.
          </p>
        </div>
      </div>

      <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {businessStrategyItems.map((item) => (
          <BusinessSectionCard
            key={item.key}
            title={item.label}
            icon={strategyIcons[item.key]}
          >
            <p className="text-sm leading-relaxed text-muted">
              {business[item.key]}
            </p>
          </BusinessSectionCard>
        ))}
      </div>
    </section>
  );
}
