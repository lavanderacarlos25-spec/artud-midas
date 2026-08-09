"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { CustomersMetrics } from "@/components/customers/CustomersMetrics";
import { CustomersTable } from "@/components/customers/CustomersTable";
import { CustomersToolbar } from "@/components/customers/CustomersToolbar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import {
  demoCustomers,
  getCustomerMetrics,
  matchesCustomerBusiness,
  matchesCustomerCity,
  matchesCustomerRrpp,
} from "@/config/customers";
import type { Customer, CustomerListFilters } from "@/types/customer";

const initialFilters: CustomerListFilters = {
  search: "",
  status: "todos",
  businessId: "all",
  cityId: "all",
  levelId: "all",
  rrppId: "all",
  frequencyId: "all",
  riskId: "all",
};

export function CustomersManagement() {
  const router = useRouter();
  const [customers, setCustomers] = useState<Customer[]>(demoCustomers);
  const [filters, setFilters] = useState<CustomerListFilters>(initialFilters);

  const query = filters.search.trim().toLowerCase();
  const filteredCustomers = customers.filter((customer) => {
    if (filters.status !== "todos" && customer.status !== filters.status) {
      return false;
    }
    if (!matchesCustomerBusiness(customer, filters.businessId)) return false;
    if (!matchesCustomerCity(customer, filters.cityId)) return false;
    if (filters.levelId !== "all" && customer.level !== filters.levelId) {
      return false;
    }
    if (!matchesCustomerRrpp(customer, filters.rrppId)) return false;
    if (
      filters.frequencyId !== "all" &&
      customer.frequency !== filters.frequencyId
    ) {
      return false;
    }
    if (filters.riskId !== "all" && customer.riskLevel !== filters.riskId) {
      return false;
    }

    if (!query) return true;

    return (
      customer.name.toLowerCase().includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.phone.toLowerCase().includes(query) ||
      customer.businessName.toLowerCase().includes(query) ||
      customer.rrppName.toLowerCase().includes(query) ||
      customer.city.toLowerCase().includes(query)
    );
  });

  const metrics = getCustomerMetrics(customers);

  function handleView(customer: Customer) {
    router.push(`/customers/${customer.id}`);
  }

  function handleEdit(customer: Customer) {
    console.info("Editar cliente (demo):", customer.id);
  }

  function handleDelete(customer: Customer) {
    const confirmed = window.confirm(
      `¿Eliminar a "${customer.name}" de la lista de demostración?`,
    );

    if (!confirmed) {
      return;
    }

    setCustomers((current) =>
      current.filter((item) => item.id !== customer.id),
    );
  }

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <Badge variant="gold">CRM Inteligente</Badge>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Clientes 360°
          </h2>
          <p className="max-w-xl text-sm text-muted sm:text-base">
            Listado profesional con inteligencia CRM: segmentación, riesgo,
            frecuencia y perfil completo del cliente.
          </p>
        </div>
        <Button variant="primary" className="w-full sm:w-auto">
          <Icon name="plus" className="size-4" />
          Nuevo cliente
        </Button>
      </section>

      <CustomersMetrics metrics={metrics} />

      <Card>
        <CardContent className="space-y-5">
          <CustomersToolbar
            filters={filters}
            onFiltersChange={setFilters}
            resultCount={filteredCustomers.length}
          />
        </CardContent>

        <div className="border-t border-border">
          <CustomersTable
            customers={filteredCustomers}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </Card>
    </div>
  );
}
