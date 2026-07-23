import { OperationsPanel } from "@/components/operations/OperationsPanel";
import {
  getOperationsCampaigns,
  operationsCampaignStatusLabels,
} from "@/config/operations-center";
import { cn } from "@/lib/utils";
import type { OperationsCampaignStatus } from "@/types/operations-center";

const statusStyles: Record<OperationsCampaignStatus, string> = {
  activa: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
  programada: "border-sky-500/25 bg-sky-500/10 text-sky-300",
  pausada: "border-orange-500/25 bg-orange-500/10 text-orange-300",
  finalizada: "border-border bg-surface text-muted",
};

export function OperationsCampaignStatus() {
  const campaigns = getOperationsCampaigns();

  return (
    <OperationsPanel
      title="Estado de campañas"
      description="Visión multi-empresa de campañas gestionadas por Ops (demo)."
      icon="sparkles"
    >
      <ul className="space-y-3">
        {campaigns.map((campaign) => (
          <li
            key={campaign.id}
            className="rounded-xl border border-border/70 bg-surface/50 p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">
                  {campaign.name}
                </p>
                <p className="text-xs text-muted">{campaign.businessName}</p>
              </div>
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest",
                  statusStyles[campaign.status],
                )}
              >
                {operationsCampaignStatusLabels[campaign.status]}
              </span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {campaign.performanceLabel}
            </p>
          </li>
        ))}
      </ul>
    </OperationsPanel>
  );
}
