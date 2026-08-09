"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  AnalyticsPanel,
  analyticsChartColors,
} from "@/components/analytics/AnalyticsPanel";
import type { AnalyticsChartsBundle } from "@/types/analytics";

type AnalyticsChartsProps = {
  charts: AnalyticsChartsBundle;
};

const tooltipStyle = {
  backgroundColor: "#12100e",
  border: "1px solid #27241f",
  borderRadius: 8,
  color: "#fafaf9",
  fontSize: 12,
};

const pieColors = [
  analyticsChartColors.gold,
  analyticsChartColors.sky,
  analyticsChartColors.emerald,
  analyticsChartColors.violet,
  analyticsChartColors.rose,
];

export function AnalyticsCharts({ charts }: AnalyticsChartsProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Visualización
        </p>
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          Gráficos
        </h3>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <AnalyticsPanel
          title="Facturación mensual"
          description="Evolución de ingresos (demo)."
        >
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={charts.monthlyRevenue}>
                <CartesianGrid
                  stroke={analyticsChartColors.grid}
                  strokeDasharray="3 3"
                />
                <XAxis
                  dataKey="label"
                  stroke={analyticsChartColors.muted}
                  tick={{ fill: analyticsChartColors.text, fontSize: 12 }}
                />
                <YAxis
                  stroke={analyticsChartColors.muted}
                  tick={{ fill: analyticsChartColors.text, fontSize: 12 }}
                />
                <Tooltip contentStyle={tooltipStyle} />
                <Area
                  type="monotone"
                  dataKey="value"
                  name="Facturación"
                  stroke={analyticsChartColors.gold}
                  fill={analyticsChartColors.gold}
                  fillOpacity={0.18}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </AnalyticsPanel>

        <AnalyticsPanel
          title="Clientes nuevos"
          description="Altas mensuales (demo)."
        >
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={charts.newCustomers}>
                <CartesianGrid
                  stroke={analyticsChartColors.grid}
                  strokeDasharray="3 3"
                />
                <XAxis
                  dataKey="label"
                  stroke={analyticsChartColors.muted}
                  tick={{ fill: analyticsChartColors.text, fontSize: 12 }}
                />
                <YAxis
                  stroke={analyticsChartColors.muted}
                  tick={{ fill: analyticsChartColors.text, fontSize: 12 }}
                />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar
                  dataKey="value"
                  name="Nuevos"
                  fill={analyticsChartColors.sky}
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </AnalyticsPanel>

        <AnalyticsPanel
          title="Clientes recurrentes"
          description="Porcentaje de recurrencia (demo)."
        >
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={charts.recurringCustomers}>
                <CartesianGrid
                  stroke={analyticsChartColors.grid}
                  strokeDasharray="3 3"
                />
                <XAxis
                  dataKey="label"
                  stroke={analyticsChartColors.muted}
                  tick={{ fill: analyticsChartColors.text, fontSize: 12 }}
                />
                <YAxis
                  stroke={analyticsChartColors.muted}
                  tick={{ fill: analyticsChartColors.text, fontSize: 12 }}
                />
                <Tooltip contentStyle={tooltipStyle} />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Recurrencia %"
                  stroke={analyticsChartColors.emerald}
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: analyticsChartColors.emerald }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </AnalyticsPanel>

        <AnalyticsPanel
          title="Ocupación semanal"
          description="Media por día de la semana (demo)."
        >
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={charts.weeklyOccupancy}>
                <CartesianGrid
                  stroke={analyticsChartColors.grid}
                  strokeDasharray="3 3"
                />
                <XAxis
                  dataKey="label"
                  stroke={analyticsChartColors.muted}
                  tick={{ fill: analyticsChartColors.text, fontSize: 12 }}
                />
                <YAxis
                  stroke={analyticsChartColors.muted}
                  tick={{ fill: analyticsChartColors.text, fontSize: 12 }}
                />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar
                  dataKey="value"
                  name="Ocupación %"
                  fill={analyticsChartColors.goldLight}
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </AnalyticsPanel>

        <AnalyticsPanel
          title="Ingresos por evento"
          description="Top eventos del periodo (demo)."
        >
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={charts.revenueByEvent} layout="vertical">
                <CartesianGrid
                  stroke={analyticsChartColors.grid}
                  strokeDasharray="3 3"
                />
                <XAxis
                  type="number"
                  stroke={analyticsChartColors.muted}
                  tick={{ fill: analyticsChartColors.text, fontSize: 12 }}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={110}
                  stroke={analyticsChartColors.muted}
                  tick={{ fill: analyticsChartColors.text, fontSize: 11 }}
                />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar
                  dataKey="value"
                  name="Ingresos"
                  fill={analyticsChartColors.violet}
                  radius={[0, 6, 6, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </AnalyticsPanel>

        <AnalyticsPanel
          title="Ventas por canal"
          description="Distribución de origen (demo)."
        >
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={charts.salesByChannel}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={3}
                >
                  {charts.salesByChannel.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={pieColors[index % pieColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </AnalyticsPanel>

        <AnalyticsPanel
          title="Conversión campañas"
          description="Ratio de conversión por campaña (demo)."
        >
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={charts.campaignConversion}>
                <CartesianGrid
                  stroke={analyticsChartColors.grid}
                  strokeDasharray="3 3"
                />
                <XAxis
                  dataKey="name"
                  stroke={analyticsChartColors.muted}
                  tick={{ fill: analyticsChartColors.text, fontSize: 10 }}
                  interval={0}
                  angle={-18}
                  textAnchor="end"
                  height={60}
                />
                <YAxis
                  stroke={analyticsChartColors.muted}
                  tick={{ fill: analyticsChartColors.text, fontSize: 12 }}
                />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar
                  dataKey="value"
                  name="Conversión %"
                  fill={analyticsChartColors.rose}
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </AnalyticsPanel>

        <AnalyticsPanel
          title="Distribución clientes VIP"
          description="Niveles de fidelización (demo)."
        >
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={charts.vipDistribution}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                >
                  {charts.vipDistribution.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={pieColors[index % pieColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </AnalyticsPanel>
      </div>
    </section>
  );
}
