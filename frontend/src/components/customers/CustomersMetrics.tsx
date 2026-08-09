import { Card, CardContent } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import type { CustomerMetric } from "@/types/customer";

type CustomersMetricsProps = {
  metrics: CustomerMetric[];
};

export function CustomersMetrics({ metrics }: CustomersMetricsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <Card
          key={metric.id}
          className="group transition-colors hover:border-gold/20"
        >
          <CardContent className="space-y-4">
            <div className="flex size-10 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20 transition-colors group-hover:bg-gold/15">
              <Icon name={metric.icon} className="size-5 text-gold" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted">{metric.label}</p>
              <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {metric.value}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
