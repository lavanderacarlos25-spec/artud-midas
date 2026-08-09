"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { BusinessesTable } from "@/components/businesses/BusinessesTable";
import { BusinessesToolbar } from "@/components/businesses/BusinessesToolbar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { deleteBusiness, useBusinesses } from "@/lib/businesses/store";
import type { Business, BusinessStatus } from "@/types/business";

type StatusFilter = BusinessStatus | "todas";

export function BusinessesManagement() {
  const router = useRouter();
  const businesses = useBusinesses();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("todas");

  const query = search.trim().toLowerCase();
  const filteredBusinesses = businesses.filter((business) => {
    const matchesStatus =
      statusFilter === "todas" || business.status === statusFilter;

    if (!matchesStatus) {
      return false;
    }

    if (!query) {
      return true;
    }

    return (
      business.name.toLowerCase().includes(query) ||
      business.city.toLowerCase().includes(query) ||
      business.type.toLowerCase().includes(query)
    );
  });

  function handleDelete(business: Business) {
    const confirmed = window.confirm(
      `¿Eliminar "${business.name}" de la lista de empresas?`,
    );

    if (!confirmed) {
      return;
    }

    deleteBusiness(business.id);
  }

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <Badge variant="gold">Gestión</Badge>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Empresas
          </h2>
          <p className="max-w-xl text-sm text-muted sm:text-base">
            Gestiona todos los locales registrados en Artud Midas.
          </p>
        </div>
        <Button
          variant="primary"
          className="w-full sm:w-auto"
          onClick={() => router.push("/businesses/nueva")}
        >
          <Icon name="plus" className="size-4" />
          Nueva empresa
        </Button>
      </section>

      <Card>
        <CardContent className="space-y-5">
          <BusinessesToolbar
            search={search}
            statusFilter={statusFilter}
            onSearchChange={setSearch}
            onStatusFilterChange={setStatusFilter}
            resultCount={filteredBusinesses.length}
          />
        </CardContent>

        <div className="border-t border-border">
          <BusinessesTable
            businesses={filteredBusinesses}
            onDelete={handleDelete}
          />
        </div>
      </Card>
    </div>
  );
}
