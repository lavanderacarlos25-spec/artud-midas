import type { ReactNode } from "react";

import { CustomerLevelBadge } from "@/components/customers/CustomerLevelBadge";
import { CustomerStatusBadge } from "@/components/customers/CustomerStatusBadge";
import { IntelligencePanel } from "@/components/intelligence/IntelligencePanel";
import {
  customerFrequencyLabels,
  customerRiskLabels,
} from "@/config/customer-crm";
import type { Customer } from "@/types/customer";

type CustomerStatusPanelProps = {
  customer: Customer;
  healthLabel: string;
};

export function CustomerStatusPanel({
  customer,
  healthLabel,
}: CustomerStatusPanelProps) {
  return (
    <IntelligencePanel
      title="Estado del cliente"
      description="Salud operativa y señales CRM actuales."
      icon="sliders"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatusCell label="Estado">
          <CustomerStatusBadge status={customer.status} />
        </StatusCell>
        <StatusCell label="Nivel VIP">
          <CustomerLevelBadge level={customer.level} />
        </StatusCell>
        <StatusCell label="Frecuencia">
          <p className="text-sm font-medium text-foreground">
            {customerFrequencyLabels[customer.frequency]}
          </p>
        </StatusCell>
        <StatusCell label="Riesgo">
          <p className="text-sm font-medium text-foreground">
            {customerRiskLabels[customer.riskLevel]} · {healthLabel}
          </p>
        </StatusCell>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <StatusCell label="Última visita">
          <p className="text-sm text-muted">{customer.lastVisit}</p>
        </StatusCell>
        <StatusCell label="Empresa">
          <p className="text-sm text-muted">{customer.businessName}</p>
        </StatusCell>
        <StatusCell label="RRPP asignado">
          <p className="text-sm text-muted">{customer.rrppName}</p>
        </StatusCell>
      </div>
    </IntelligencePanel>
  );
}

function StatusCell({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border/70 bg-surface/50 p-3.5">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      {children}
    </div>
  );
}
