import { OperationsAiRecommendations } from "@/components/operations/OperationsAiRecommendations";
import { OperationsAlertsList } from "@/components/operations/OperationsAlertsList";
import { OperationsAttentionList } from "@/components/operations/OperationsAttentionList";
import { OperationsCampaignStatus } from "@/components/operations/OperationsCampaignStatus";
import { OperationsDailyPriorities } from "@/components/operations/OperationsDailyPriorities";
import { OperationsInternalObjectives } from "@/components/operations/OperationsInternalObjectives";
import { OperationsNetworkKpis } from "@/components/operations/OperationsNetworkKpis";
import { OperationsTaskQueue } from "@/components/operations/OperationsTaskQueue";
import { OperationsTeamFeed } from "@/components/operations/OperationsTeamFeed";
import { Badge } from "@/components/ui/Badge";
import { artudSurfaces } from "@/surfaces";

/**
 * Internal Operations Center hub for the Artud Midas team.
 * Mounted on the existing Dashboard route (`/`) without changing navigation.
 */
export function OperationsCenter() {
  const surface = artudSurfaces.operations;

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="gold">{surface.name}</Badge>
          <Badge variant="muted">DEMO</Badge>
          <Badge variant="default">Solo equipo interno</Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Centro de Operaciones
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            Panel privado para administrar múltiples empresas desde un único
            lugar. Datos de demostración — sin APIs ni IA real.
          </p>
        </div>
      </section>

      <OperationsNetworkKpis />

      <OperationsDailyPriorities />

      <div className="grid w-full gap-8 xl:grid-cols-2">
        <OperationsAttentionList />
        <OperationsAlertsList />
      </div>

      <div className="grid w-full gap-8 xl:grid-cols-2">
        <OperationsTaskQueue />
        <OperationsTeamFeed />
      </div>

      <OperationsAiRecommendations />

      <div className="grid w-full gap-8 xl:grid-cols-2">
        <OperationsCampaignStatus />
        <OperationsInternalObjectives />
      </div>
    </div>
  );
}
