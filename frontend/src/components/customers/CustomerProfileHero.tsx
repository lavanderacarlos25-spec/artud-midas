import Link from "next/link";

import { CustomerLevelBadge } from "@/components/customers/CustomerLevelBadge";
import { CustomerStatusBadge } from "@/components/customers/CustomerStatusBadge";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import {
  customerFrequencyLabels,
  customerRiskLabels,
} from "@/config/customer-crm";
import type { Customer, CustomerRiskLevel } from "@/types/customer";

const riskStyles: Record<CustomerRiskLevel, string> = {
  bajo: "border-emerald-500/25 bg-emerald-500/10 text-emerald-400",
  medio: "border-orange-500/25 bg-orange-500/10 text-orange-300",
  alto: "border-red-500/25 bg-red-500/10 text-red-400",
};

type CustomerProfileHeroProps = {
  customer: Customer;
  healthLabel: string;
};

export function CustomerProfileHero({
  customer,
  healthLabel,
}: CustomerProfileHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface-elevated/90">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.14),transparent_55%),linear-gradient(135deg,rgba(10,10,10,0.2),transparent)]"
        aria-hidden="true"
      />
      <div className="relative space-y-6 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="gold">Perfil 360°</Badge>
              <CustomerStatusBadge status={customer.status} />
              <CustomerLevelBadge level={customer.level} />
            </div>
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "flex size-16 items-center justify-center rounded-2xl text-lg font-semibold tracking-wide ring-1 ring-gold/20",
                  customer.avatarColor,
                )}
              >
                {customer.avatarInitials}
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {customer.name}
                </h1>
                <p className="text-sm text-muted">
                  {customer.businessName} · {customer.city}
                </p>
                <p className="text-xs text-muted-foreground">
                  RRPP {customer.rrppName} · {customer.email}
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/customers"
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-border px-3 text-xs font-medium text-foreground transition-colors hover:border-gold/40 hover:text-gold-light"
          >
            <Icon name="chevron-left" className="size-4" />
            Volver al listado
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="inline-flex rounded-full border border-border/80 bg-surface/60 px-3 py-1 text-xs text-muted">
            Frecuencia {customerFrequencyLabels[customer.frequency]}
          </span>
          <span
            className={cn(
              "inline-flex rounded-full border px-3 py-1 text-xs font-medium",
              riskStyles[customer.riskLevel],
            )}
          >
            Riesgo {customerRiskLabels[customer.riskLevel]}
          </span>
          <span className="inline-flex rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-light">
            {healthLabel}
          </span>
          <span className="inline-flex rounded-full border border-border/80 bg-surface/60 px-3 py-1 text-xs text-muted">
            Alta {customer.registeredAt}
          </span>
        </div>
      </div>
    </section>
  );
}
