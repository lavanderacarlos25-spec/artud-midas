import { Card, CardContent } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { getOperationsNetworkKpis } from "@/config/operations-center";
import { cn } from "@/lib/utils";

export function OperationsNetworkKpis() {
  const kpis = getOperationsNetworkKpis();

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi) => {
        const trendIcon =
          kpi.trend === "down" ? "trending-down" : "trending-up";
        const trendColor =
          kpi.trend === "down" ? "text-red-400" : "text-emerald-400";

        return (
          <Card
            key={kpi.id}
            className="border-border/80 bg-surface-elevated/90 transition-colors hover:border-gold/25"
          >
            <CardContent className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20">
                  <Icon name={kpi.icon} className="size-5 text-gold" />
                </div>
                <div
                  className={cn(
                    "inline-flex items-center gap-1 text-xs font-medium",
                    trendColor,
                  )}
                >
                  <Icon name={trendIcon} className="size-3.5" />
                  {kpi.change}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted">{kpi.label}</p>
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  {kpi.value}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
