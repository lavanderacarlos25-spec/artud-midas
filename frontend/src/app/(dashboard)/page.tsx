import {
  dashboardStats,
  quickActions,
  recentActivity,
} from "@/config/dashboard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { StatGrid } from "@/components/dashboard/StatCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <Badge variant="gold">Overview</Badge>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Welcome back
          </h2>
          <p className="max-w-xl text-sm text-muted sm:text-base">
            Monitor loyalty performance, track customer growth, and manage your
            nightlife network from one place.
          </p>
        </div>
        <Button variant="primary" className="w-full sm:w-auto">
          <Icon name="plus" className="size-4" />
          New Campaign
        </Button>
      </section>

      <StatGrid stats={dashboardStats} />

      <section className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <RecentActivity items={recentActivity} />
        </div>
        <div className="lg:col-span-2">
          <QuickActions actions={quickActions} />
        </div>
      </section>
    </div>
  );
}
