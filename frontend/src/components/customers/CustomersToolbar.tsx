"use client";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import {
  customerBusinessFilterOptions,
  customerCityFilterOptions,
  customerFilterLabels,
  customerFrequencyFilterOptions,
  customerLevelFilterOptions,
  customerRiskFilterOptions,
  customerRrppFilterOptions,
  customerStatusFilters,
} from "@/config/customers";
import { cn } from "@/lib/utils";
import type { CustomerFilter, CustomerListFilters } from "@/types/customer";

type CustomersToolbarProps = {
  filters: CustomerListFilters;
  onFiltersChange: (next: CustomerListFilters) => void;
  resultCount: number;
};

function SelectFilter({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { id: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex min-w-[9.5rem] flex-1 flex-col gap-1.5 sm:max-w-[12rem]">
      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-10 w-full appearance-none rounded-lg border border-border bg-surface py-2 pl-3 pr-9 text-sm text-foreground focus:border-gold/40 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        <Icon
          name="chevron-down"
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted"
        />
      </div>
    </label>
  );
}

export function CustomersToolbar({
  filters,
  onFiltersChange,
  resultCount,
}: CustomersToolbarProps) {
  function patch(partial: Partial<CustomerListFilters>) {
    onFiltersChange({ ...filters, ...partial });
  }

  function resetFilters() {
    onFiltersChange({
      search: "",
      status: "todos",
      businessId: "all",
      cityId: "all",
      levelId: "all",
      rrppId: "all",
      frequencyId: "all",
      riskId: "all",
    });
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-md">
          <Icon
            name="search"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={filters.search}
            onChange={(event) => patch({ search: event.target.value })}
            placeholder="Buscar por nombre, email, teléfono, empresa o RRPP..."
            className="h-10 w-full rounded-lg border border-border bg-surface pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold/40 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Buscar clientes"
          />
        </div>

        <div className="flex items-center gap-3">
          <p className="text-xs text-muted-foreground sm:text-sm">
            {resultCount}{" "}
            {resultCount === 1 ? "cliente encontrado" : "clientes encontrados"}
          </p>
          <Button type="button" variant="ghost" size="sm" onClick={resetFilters}>
            Limpiar
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Estado
        </span>
        {customerStatusFilters.map((filter) => {
          const isActive = filters.status === filter;

          return (
            <Button
              key={filter}
              type="button"
              size="sm"
              variant={isActive ? "primary" : "outline"}
              className={cn(
                !isActive && "text-muted hover:text-foreground",
                isActive && "shadow-none",
              )}
              onClick={() => patch({ status: filter as CustomerFilter })}
              aria-pressed={isActive}
            >
              {customerFilterLabels[filter]}
            </Button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3">
        <SelectFilter
          label="Empresa"
          value={filters.businessId}
          options={customerBusinessFilterOptions}
          onChange={(businessId) => patch({ businessId })}
        />
        <SelectFilter
          label="Ciudad"
          value={filters.cityId}
          options={customerCityFilterOptions}
          onChange={(cityId) => patch({ cityId })}
        />
        <SelectFilter
          label="Nivel VIP"
          value={filters.levelId}
          options={customerLevelFilterOptions}
          onChange={(levelId) => patch({ levelId })}
        />
        <SelectFilter
          label="RRPP"
          value={filters.rrppId}
          options={customerRrppFilterOptions}
          onChange={(rrppId) => patch({ rrppId })}
        />
        <SelectFilter
          label="Frecuencia"
          value={filters.frequencyId}
          options={customerFrequencyFilterOptions}
          onChange={(frequencyId) => patch({ frequencyId })}
        />
        <SelectFilter
          label="Riesgo"
          value={filters.riskId}
          options={customerRiskFilterOptions}
          onChange={(riskId) => patch({ riskId })}
        />
      </div>
    </div>
  );
}
