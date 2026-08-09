import { BusinessSectionCard } from "@/components/businesses/BusinessSectionCard";
import { Icon } from "@/components/ui/icons";
import { getBusinessQuickActions } from "@/config/business-command";
import type { Business } from "@/types/business";
import type { BusinessQuickAction } from "@/types/business-command";

type BusinessQuickActionsProps = {
  business: Business;
  onAction?: (action: BusinessQuickAction) => void;
};

export function BusinessQuickActions({
  business,
  onAction,
}: BusinessQuickActionsProps) {
  const actions = getBusinessQuickActions(business);

  return (
    <BusinessSectionCard
      className="w-full"
      title="Acciones rápidas"
      description="Accesos prioritarios del centro de mando. Estructura lista para conectar."
      icon="sparkles"
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
        {actions.map((action) => (
          <button
            key={action.id}
            type="button"
            onClick={() => onAction?.(action)}
            className="group flex min-h-[88px] items-start gap-4 rounded-xl border border-border/80 bg-surface/50 p-4 text-left transition-colors hover:border-gold/30 hover:bg-gold/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20 transition-colors group-hover:bg-gold/15">
              <Icon name={action.icon} className="size-5 text-gold" />
            </div>
            <div className="min-w-0 space-y-1">
              <p className="text-sm font-medium text-foreground">
                {action.label}
              </p>
              <p className="text-xs leading-relaxed text-muted">
                {action.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </BusinessSectionCard>
  );
}
