import Link from "next/link";

import type { QuickAction } from "@/config/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";

const iconMap = {
  users: "users",
  award: "award",
  chart: "chart",
  sparkles: "sparkles",
} as const;

type QuickActionsProps = {
  actions: QuickAction[];
};

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          {actions.map((action) => (
            <Link
              key={action.id}
              href={action.href}
              className="group flex items-start gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-gold/30 hover:bg-gold/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20 transition-colors group-hover:bg-gold/15">
                <Icon
                  name={iconMap[action.icon]}
                  className="size-4 text-gold"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {action.label}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted">
                  {action.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
