import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import { QuickActionRow } from "@/components/intelligence/QuickActionRow";
import type { Business360QuickAction } from "@/types/business-360";

type Business360QuickActionsProps = {
  actions: Business360QuickAction[];
};

export function Business360QuickActions({
  actions,
}: Business360QuickActionsProps) {
  return (
    <IntelligencePanel
      title="Quick Actions"
      description="Accesos visuales preparados para conectar flujos reales."
      icon="sparkles"
    >
      <QuickActionRow actions={actions} />
    </IntelligencePanel>
  );
}
