import Link from "next/link";

import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import { Icon } from "@/components/ui/icons";
import type { ExecutiveQuickAction } from "@/types/executive-command";

type ExecutiveQuickActionsProps = {
  actions: ExecutiveQuickAction[];
};

export function ExecutiveQuickActions({ actions }: ExecutiveQuickActionsProps) {
  return (
    <IntelligencePanel
      title="Acciones rápidas"
      description="Atajos para dirigir el negocio desde el centro de mando."
      icon="sparkles"
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {actions.map((action) => (
          <Link
            key={action.id}
            href={action.href}
            className="group flex min-h-[104px] flex-col gap-3 rounded-xl border border-border/80 bg-surface/50 p-4 transition-colors hover:border-gold/30 hover:bg-gold/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="flex size-10 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20 transition-colors group-hover:bg-gold/15">
              <Icon name={action.icon} className="size-5 text-gold" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">
                {action.label}
              </p>
              <p className="text-xs leading-relaxed text-muted">
                {action.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </IntelligencePanel>
  );
}
