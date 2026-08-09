"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { BusinessForm } from "@/components/businesses/BusinessForm";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { createBusiness } from "@/lib/businesses/store";
import type { BusinessInput } from "@/types/business";

export function BusinessCreatePage() {
  const router = useRouter();

  function handleSubmit(values: BusinessInput) {
    const created = createBusiness(values);
    router.push(`/businesses/${created.id}`);
  }

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <Link
          href="/businesses"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <Icon name="chevron-left" className="size-4" />
          Volver a empresas
        </Link>
        <div className="space-y-2">
          <Badge variant="gold">Alta</Badge>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Crear empresa
          </h2>
          <p className="max-w-xl text-sm text-muted sm:text-base">
            Registra un nuevo local en la red de Artud Midas.
          </p>
        </div>
      </section>

      <Card className="max-w-3xl">
        <CardContent>
          <BusinessForm
            submitLabel="Crear empresa"
            onSubmit={handleSubmit}
            onCancel={() => router.push("/businesses")}
          />
        </CardContent>
      </Card>
    </div>
  );
}
