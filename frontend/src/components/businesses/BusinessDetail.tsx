"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Business360QuickActions } from "@/components/businesses/Business360QuickActions";
import { Business360Timeline } from "@/components/businesses/Business360Timeline";
import { BusinessActivityTimeline } from "@/components/businesses/BusinessActivityTimeline";
import { BusinessAlerts360Card } from "@/components/businesses/BusinessAlerts360Card";
import { BusinessCommandKpis } from "@/components/businesses/BusinessCommandKpis";
import { BusinessExecutiveSummary360 } from "@/components/businesses/BusinessExecutiveSummary360";
import {
  BusinessFieldGrid,
  BusinessFieldItem,
} from "@/components/businesses/BusinessFieldGrid";
import { BusinessGoalsSection } from "@/components/businesses/BusinessGoalsSection";
import { BusinessHealthCard } from "@/components/businesses/BusinessHealthCard";
import { BusinessIntelligenceCenter } from "@/components/businesses/BusinessIntelligenceCenter";
import { BusinessQuickActions } from "@/components/businesses/BusinessQuickActions";
import { BusinessScoreCard } from "@/components/businesses/BusinessScoreCard";
import { BusinessSectionCard } from "@/components/businesses/BusinessSectionCard";
import { BusinessStatusBadge } from "@/components/businesses/BusinessStatusBadge";
import { BusinessStrategySection } from "@/components/businesses/BusinessStrategySection";
import { BusinessUpcomingModules } from "@/components/businesses/BusinessUpcomingModules";
import { DomainMetricsCard } from "@/components/intelligence/DomainMetricsCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { getBusiness360Bundle } from "@/config/business-360";
import { deleteBusiness } from "@/lib/businesses/store";
import { cn } from "@/lib/utils";
import type { Business } from "@/types/business";

type BusinessDetailProps = {
  business: Business;
};

function formatCreatedAt(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function BusinessDetail({ business }: BusinessDetailProps) {
  const router = useRouter();
  const bi360 = getBusiness360Bundle(business);

  function handleDelete() {
    const confirmed = window.confirm(
      `¿Eliminar "${business.name}"? Esta acción no se puede deshacer en la demo.`,
    );

    if (!confirmed) {
      return;
    }

    deleteBusiness(business.id);
    router.push("/businesses");
  }

  return (
    <div className="space-y-12">
      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/businesses"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <Icon name="chevron-left" className="size-4" />
            Volver a empresas
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="gold">Business Intelligence 360°</Badge>
            <Badge variant="muted">Datos demo</Badge>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-red-400 hover:bg-red-500/10 hover:text-red-300"
              onClick={handleDelete}
            >
              <Icon name="trash" className="size-3.5" />
              Eliminar
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {business.name}
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {business.description}
          </p>
        </div>
      </section>

      <BusinessExecutiveSummary360
        business={business}
        executive={bi360.executive}
      />

      <BusinessScoreCard score={bi360.score} />

      <div className="grid w-full gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <DomainMetricsCard
          title="Clientes"
          description="Base de clientes del local (demo)."
          icon="users"
          metrics={bi360.customers}
          columns={2}
        />
        <DomainMetricsCard
          title="Eventos"
          description="Programación y ocupación (demo)."
          icon="calendar"
          metrics={bi360.events}
          columns={2}
        />
        <DomainMetricsCard
          title="Campañas"
          description="Rendimiento de marketing (demo)."
          icon="sparkles"
          metrics={bi360.campaigns}
          columns={2}
        />
        <DomainMetricsCard
          title="RRPP"
          description="Captación por relaciones públicas (demo)."
          icon="users"
          metrics={bi360.rrpp}
          columns={2}
        />
        <DomainMetricsCard
          title="Fidelización"
          description="Programa de lealtad del local (demo)."
          icon="award"
          metrics={bi360.loyalty}
          columns={2}
        />
        <DomainMetricsCard
          title="Ventas"
          description="Indicadores comerciales estimados (demo)."
          icon="revenue"
          metrics={bi360.sales}
          columns={2}
        />
      </div>

      <BusinessAlerts360Card alerts={bi360.alerts} />

      <Business360QuickActions actions={bi360.quickActions} />

      <Business360Timeline items={bi360.timeline} />

      <BusinessCommandKpis business={business} />

      <BusinessSectionCard
        className="w-full"
        title="1. Resumen ejecutivo"
        description="Visión rápida del estado y tipología del local."
        icon="layout-dashboard"
        action={
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={() => router.push(`/businesses/${business.id}/editar`)}
          >
            <Icon name="pencil" className="size-3.5" />
            Editar
          </Button>
        }
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div
            className={cn(
              "flex size-20 shrink-0 items-center justify-center rounded-2xl text-lg font-semibold tracking-wide ring-1 ring-gold/15",
              business.logoColor,
            )}
            aria-label="Logo placeholder"
          >
            {business.logoInitials}
          </div>
          <BusinessFieldGrid columns={3} className="flex-1 gap-x-8 gap-y-6">
            <BusinessFieldItem
              label="Nombre comercial"
              value={business.name}
            />
            <BusinessFieldItem
              label="Estado"
              value={<BusinessStatusBadge status={business.status} />}
            />
            <BusinessFieldItem
              label="Tipo de negocio"
              value={business.type}
            />
            <BusinessFieldItem label="Ciudad" value={business.city} />
            <BusinessFieldItem
              label="Fecha de alta"
              value={formatCreatedAt(business.createdAt)}
            />
          </BusinessFieldGrid>
        </div>
      </BusinessSectionCard>

      <BusinessHealthCard business={business} />

      <BusinessIntelligenceCenter business={business} />

      <BusinessGoalsSection business={business} />

      <div className="grid w-full gap-8 xl:grid-cols-2">
        <BusinessQuickActions business={business} />
        <BusinessActivityTimeline business={business} />
      </div>

      <div className="grid w-full gap-8 lg:grid-cols-2">
        <BusinessSectionCard
          title="2. Identidad"
          description="Datos legales y de marca (demo)."
          icon="award"
        >
          <BusinessFieldGrid className="gap-x-6 gap-y-5">
            <BusinessFieldItem
              label="Nombre comercial"
              value={business.name}
            />
            <BusinessFieldItem
              label="Razón social"
              value={business.legalName}
            />
            <BusinessFieldItem label="CIF/NIF" value={business.taxId} />
            <BusinessFieldItem label="Marca" value={business.brand} />
            <BusinessFieldItem
              label="Año de apertura"
              value={String(business.openingYear)}
            />
          </BusinessFieldGrid>
        </BusinessSectionCard>

        <BusinessSectionCard
          title="3. Información del negocio"
          description="Capacidad operativa y operativa diaria (demo)."
          icon="building"
        >
          <BusinessFieldGrid className="gap-x-6 gap-y-5">
            <BusinessFieldItem
              label="Aforo"
              value={`${business.capacity.toLocaleString("es-ES")} personas`}
            />
            <BusinessFieldItem
              label="Ticket medio"
              value={formatCurrency(business.averageTicket)}
            />
            <BusinessFieldItem
              label="Horarios"
              value={business.openingHours}
            />
            <BusinessFieldItem
              label="Días de apertura"
              value={business.openingDays}
            />
            <BusinessFieldItem
              label="Terraza"
              value={business.hasTerrace ? "Sí" : "No"}
            />
            <BusinessFieldItem
              label="Número de empleados"
              value={business.employeeCount.toLocaleString("es-ES")}
            />
          </BusinessFieldGrid>
        </BusinessSectionCard>

        <BusinessSectionCard
          title="4. Contacto"
          description="Punto de contacto principal (demo)."
          icon="users"
        >
          <BusinessFieldGrid className="gap-x-6 gap-y-5">
            <BusinessFieldItem
              label="Responsable"
              value={business.manager}
            />
            <BusinessFieldItem label="Teléfono" value={business.phone} />
            <BusinessFieldItem label="Email" value={business.email} />
            <BusinessFieldItem
              label="Página web"
              value={
                <a
                  href={business.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold-light transition-colors hover:text-gold"
                >
                  {business.website}
                </a>
              }
            />
          </BusinessFieldGrid>
        </BusinessSectionCard>

        <BusinessSectionCard
          title="5. Ubicación"
          description="Dirección completa del establecimiento (demo)."
          icon="map-pin"
        >
          <BusinessFieldGrid className="gap-x-6 gap-y-5">
            <BusinessFieldItem
              label="Dirección"
              value={business.address}
              className="sm:col-span-2"
            />
            <BusinessFieldItem label="Ciudad" value={business.city} />
            <BusinessFieldItem label="Provincia" value={business.province} />
            <BusinessFieldItem label="País" value={business.country} />
          </BusinessFieldGrid>
        </BusinessSectionCard>
      </div>

      <BusinessStrategySection business={business} />

      <BusinessUpcomingModules business={business} />
    </div>
  );
}
