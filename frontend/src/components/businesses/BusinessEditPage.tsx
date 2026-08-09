"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { BusinessForm } from "@/components/businesses/BusinessForm";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { updateBusiness, useBusiness } from "@/lib/businesses/store";
import type { BusinessInput } from "@/types/business";

type BusinessEditPageProps = {
  businessId: string;
};

export function BusinessEditPage({ businessId }: BusinessEditPageProps) {
  const router = useRouter();
  const business = useBusiness(businessId);

  if (!business) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <div className="flex size-12 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/20">
          <Icon name="building" className="size-5 text-gold" />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-foreground">
            Empresa no encontrada
          </h2>
          <p className="text-sm text-muted">
            La empresa que intentas editar no existe o fue eliminada.
          </p>
        </div>
        <Button variant="primary" onClick={() => router.push("/businesses")}>
          Volver a empresas
        </Button>
      </div>
    );
  }

  function handleSubmit(values: BusinessInput) {
    updateBusiness(businessId, values);
    router.push(`/businesses/${businessId}`);
  }

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <Link
          href={`/businesses/${business.id}`}
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <Icon name="chevron-left" className="size-4" />
          Volver a la ficha
        </Link>
        <div className="space-y-2">
          <Badge variant="gold">Edición</Badge>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Editar empresa
          </h2>
          <p className="max-w-xl text-sm text-muted sm:text-base">
            Actualiza los datos de {business.name}.
          </p>
        </div>
      </section>

      <Card className="max-w-3xl">
        <CardContent>
          <BusinessForm
            initialValues={business}
            submitLabel="Guardar cambios"
            onSubmit={handleSubmit}
            onCancel={() => router.push(`/businesses/${business.id}`)}
          />
        </CardContent>
      </Card>
    </div>
  );
}
