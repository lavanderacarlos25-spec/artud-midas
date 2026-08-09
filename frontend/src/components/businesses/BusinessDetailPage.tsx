"use client";

import { useRouter } from "next/navigation";

import { BusinessDetail } from "@/components/businesses/BusinessDetail";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { useBusiness } from "@/lib/businesses/store";

type BusinessDetailPageProps = {
  businessId: string;
};

export function BusinessDetailPage({ businessId }: BusinessDetailPageProps) {
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
            La ficha solicitada no existe o fue eliminada.
          </p>
        </div>
        <Button variant="primary" onClick={() => router.push("/businesses")}>
          Volver a empresas
        </Button>
      </div>
    );
  }

  return <BusinessDetail business={business} />;
}
