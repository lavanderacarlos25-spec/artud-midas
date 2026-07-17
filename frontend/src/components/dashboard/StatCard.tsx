import type { StatItem } from "@/config/dashboard";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const iconMap = {
  users: "users",
  building: "building",
  award: "award",
  revenue: "revenue",
} as const;

type StatCardProps = {
  stat: StatItem;
};

export function StatCard({ stat }: StatCardProps) {
  const trendIcon = stat.trend === "down" ? "trending-down" : "trending-up";
  const trendVariant = stat.trend === "down" ? "muted" : "success";

  return (
    <Card className="group transition-colors hover:border-gold/20">
      <CardContent className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex size-10 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20 transition-colors group-hover:bg-gold/15">
            <Icon name={iconMap[stat.icon]} className="size-5 text-gold" />
          </div>
          <Badge variant={trendVariant}>{stat.change}</Badge>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-muted">{stat.label}</p>
          <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {stat.value}
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Icon
            name={trendIcon}
            className={cn(
              "size-3.5",
              stat.trend === "down" ? "text-red-400" : "text-emerald-400",
            )}
          />
          <span>vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatGrid({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
