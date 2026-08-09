"use client";

import { AnalyticsPanel } from "@/components/analytics/AnalyticsPanel";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

type AnalyticsExportProps = {
  onExportPdf?: () => void;
  onExportExcel?: () => void;
};

export function AnalyticsExport({
  onExportPdf,
  onExportExcel,
}: AnalyticsExportProps) {
  return (
    <AnalyticsPanel
      title="Exportación"
      description="Interfaz lista. Sin backend en esta versión."
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          type="button"
          variant="outline"
          className="w-full sm:w-auto"
          onClick={onExportPdf}
        >
          <Icon name="chart" className="size-4" />
          Exportar PDF
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full sm:w-auto"
          onClick={onExportExcel}
        >
          <Icon name="revenue" className="size-4" />
          Exportar Excel
        </Button>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Los botones están preparados para conectar generación de informes más
        adelante.
      </p>
    </AnalyticsPanel>
  );
}
