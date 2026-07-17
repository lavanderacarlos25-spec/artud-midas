import type { ActivityItem } from "@/config/dashboard";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const typeStyles: Record<ActivityItem["type"], string> = {
  customer: "bg-blue-500/10 text-blue-400",
  loyalty: "bg-gold/10 text-gold-light",
  business: "bg-violet-500/10 text-violet-400",
  system: "bg-surface text-muted",
};

const typeLabels: Record<ActivityItem["type"], string> = {
  customer: "Customer",
  loyalty: "Loyalty",
  business: "Business",
  system: "System",
};

type RecentActivityProps = {
  items: ActivityItem[];
};

export function RecentActivity({ items }: RecentActivityProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-border">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div className="mt-1.5 size-2 shrink-0 rounded-full bg-gold/80" />
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                  <Badge
                    variant="default"
                    className={cn("border-0", typeStyles[item.type])}
                  >
                    {typeLabels[item.type]}
                  </Badge>
                </div>
                <p className="text-sm text-muted">{item.description}</p>
                <p className="text-xs text-muted-foreground">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
