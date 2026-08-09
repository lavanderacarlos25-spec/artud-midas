"use client";

import { Button } from "@/components/ui/Button";
import type {
  AnalyticsFilterOption,
  AnalyticsFiltersState,
} from "@/types/analytics";

type AnalyticsFiltersProps = {
  filters: AnalyticsFiltersState;
  businesses: AnalyticsFilterOption[];
  cities: AnalyticsFilterOption[];
  businessTypes: AnalyticsFilterOption[];
  onChange: (next: AnalyticsFiltersState) => void;
};

const selectClassName =
  "h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm text-foreground focus:border-gold/40 focus:outline-none focus:ring-2 focus:ring-ring";

export function AnalyticsFilters({
  filters,
  businesses,
  cities,
  businessTypes,
  onChange,
}: AnalyticsFiltersProps) {
  return (
    <section className="rounded-xl border border-border/80 bg-surface-elevated/90 p-5 shadow-sm shadow-black/20">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Filtros
          </p>
          <p className="text-sm text-muted">
            Ajusta la vista por empresa, ciudad y tipo (demo).
          </p>
        </div>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={() =>
            onChange({
              ...filters,
              businessId: "all",
              cityId: "all",
              businessTypeId: "all",
            })
          }
        >
          Limpiar
        </Button>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <label className="space-y-1.5 text-xs text-muted">
          <span>Empresa</span>
          <select
            className={selectClassName}
            value={filters.businessId}
            onChange={(event) =>
              onChange({ ...filters, businessId: event.target.value })
            }
          >
            {businesses.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1.5 text-xs text-muted">
          <span>Ciudad</span>
          <select
            className={selectClassName}
            value={filters.cityId}
            onChange={(event) =>
              onChange({ ...filters, cityId: event.target.value })
            }
          >
            {cities.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1.5 text-xs text-muted">
          <span>Tipo de negocio</span>
          <select
            className={selectClassName}
            value={filters.businessTypeId}
            onChange={(event) =>
              onChange({ ...filters, businessTypeId: event.target.value })
            }
          >
            {businessTypes.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}
