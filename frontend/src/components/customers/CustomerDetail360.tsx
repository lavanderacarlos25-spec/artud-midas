"use client";

import Link from "next/link";

import { CustomerActivityPanels } from "@/components/customers/CustomerActivityPanels";
import { CustomerCrmIntelligence } from "@/components/customers/CustomerCrmIntelligence";
import { CustomerExecutiveSummary } from "@/components/customers/CustomerExecutiveSummary";
import { CustomerProfileHero } from "@/components/customers/CustomerProfileHero";
import { CustomerStatusPanel } from "@/components/customers/CustomerStatusPanel";
import { Icon } from "@/components/ui/icons";
import { getCustomerById } from "@/config/customers";
import { getCustomer360Bundle } from "@/config/customer-crm";

type CustomerDetail360Props = {
  customerId: string;
};

export function CustomerDetail360({ customerId }: CustomerDetail360Props) {
  const customer = getCustomerById(customerId);

  if (!customer) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 px-6 py-24 text-center">
        <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/20">
          <Icon name="users" className="size-5 text-gold" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">
            Cliente no encontrado
          </p>
          <p className="text-sm text-muted">
            El identificador no existe en los datos demo.
          </p>
        </div>
        <Link
          href="/customers"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-gold/40 hover:text-gold-light"
        >
          <Icon name="chevron-left" className="size-4" />
          Volver a clientes
        </Link>
      </div>
    );
  }

  const bundle = getCustomer360Bundle(customer);

  return (
    <div className="space-y-6">
      <CustomerProfileHero
        customer={bundle.customer}
        healthLabel={bundle.healthLabel}
      />
      <CustomerExecutiveSummary
        summary={bundle.executiveSummary}
        kpis={bundle.kpis}
        valueTiles={bundle.valueTiles}
      />
      <CustomerStatusPanel
        customer={bundle.customer}
        healthLabel={bundle.healthLabel}
      />
      <CustomerCrmIntelligence intelligence={bundle.intelligence} />
      <CustomerActivityPanels
        timeline={bundle.timeline}
        purchases={bundle.purchases}
        events={bundle.events}
        campaigns={bundle.campaigns}
        rewards={bundle.rewards}
      />
    </div>
  );
}
