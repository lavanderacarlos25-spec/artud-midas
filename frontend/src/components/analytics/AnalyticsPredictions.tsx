"use client";

import { AnalyticsPanel } from "@/components/analytics/AnalyticsPanel";
import { Badge } from "@/components/ui/Badge";
import type { AnalyticsPredictionItem } from "@/types/analytics";

type AnalyticsPredictionsProps = {
  items: AnalyticsPredictionItem[];
};

export function AnalyticsPredictions({ items }: AnalyticsPredictionsProps) {
  return (
    <AnalyticsPanel
      title="Predicciones IA (Demo)"
      description="Escenarios simulados. Claramente marcados como DEMO."
      action={<Badge variant="muted">IA demo</Badge>}
    >
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="space-y-2 rounded-xl border border-gold/20 bg-gold/5 p-4"
          >
            <p className="text-sm font-medium text-foreground">{item.title}</p>
            <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {item.confidenceLabel}
            </p>
          </li>
        ))}
      </ul>
    </AnalyticsPanel>
  );
}
