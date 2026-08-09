"use client";

import { useState } from "react";

import { AnalyticsCharts } from "@/components/analytics/AnalyticsCharts";
import { AnalyticsComparisons } from "@/components/analytics/AnalyticsComparisons";
import { AnalyticsExport } from "@/components/analytics/AnalyticsExport";
import { AnalyticsFilters } from "@/components/analytics/AnalyticsFilters";
import { AnalyticsHeader } from "@/components/analytics/AnalyticsHeader";
import { AnalyticsKpis } from "@/components/analytics/AnalyticsKpis";
import { AnalyticsPerformance } from "@/components/analytics/AnalyticsPerformance";
import { AnalyticsPredictions } from "@/components/analytics/AnalyticsPredictions";
import { AnalyticsTrends } from "@/components/analytics/AnalyticsTrends";
import {
  defaultAnalyticsFilters,
  getAnalyticsDemoBundle,
} from "@/config/analytics";
import type { AnalyticsFiltersState } from "@/types/analytics";

export function AnalyticsPageView() {
  const [filters, setFilters] = useState<AnalyticsFiltersState>(
    defaultAnalyticsFilters,
  );
  const data = getAnalyticsDemoBundle(filters);

  function handleExportPdf() {
    window.alert(
      "Exportar PDF estará disponible cuando se conecte el backend de informes.",
    );
  }

  function handleExportExcel() {
    window.alert(
      "Exportar Excel estará disponible cuando se conecte el backend de informes.",
    );
  }

  return (
    <div className="space-y-12">
      <AnalyticsHeader
        period={filters.period}
        onPeriodChange={(period) => setFilters((current) => ({ ...current, period }))}
      />

      <AnalyticsFilters
        filters={filters}
        businesses={data.businesses}
        cities={data.cities}
        businessTypes={data.businessTypes}
        onChange={setFilters}
      />

      <AnalyticsKpis kpis={data.kpis} />

      <AnalyticsCharts charts={data.charts} />

      <AnalyticsPerformance items={data.performance} />

      <AnalyticsComparisons items={data.comparisons} />

      <div className="grid w-full gap-8 xl:grid-cols-2">
        <AnalyticsTrends items={data.trends} />
        <AnalyticsPredictions items={data.predictions} />
      </div>

      <AnalyticsExport
        onExportPdf={handleExportPdf}
        onExportExcel={handleExportExcel}
      />
    </div>
  );
}
