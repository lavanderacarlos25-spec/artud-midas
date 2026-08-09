"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { Badge } from "@/components/ui/Badge";
import {
  getExecutiveCommandBundle,
  getFirstName,
  getGreetingPeriod,
} from "@/config/executive-command";

import { ExecutiveActivity } from "./ExecutiveActivity";
import { ExecutiveAiRecommendations } from "./ExecutiveAiRecommendations";
import { ExecutiveAlerts } from "./ExecutiveAlerts";
import { ExecutiveGoals } from "./ExecutiveGoals";
import { ExecutiveKpiGrid } from "./ExecutiveKpiGrid";
import { ExecutiveMidasScore } from "./ExecutiveMidasScore";
import { ExecutiveQuickActions } from "./ExecutiveQuickActions";
import { ExecutiveUpcomingEvents } from "./ExecutiveUpcomingEvents";

export function ExecutiveCommandCenter() {
  const { user } = useAuth();
  const data = getExecutiveCommandBundle();
  const greeting = getGreetingPeriod();
  const firstName = getFirstName(user?.name);

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="gold">Centro de Mando Ejecutivo</Badge>
          <Badge variant="muted">DEMO</Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {greeting}, {firstName}.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Aquí tienes el estado de tu negocio.
          </p>
        </div>
      </section>

      <ExecutiveMidasScore score={data.midasScore} />

      <ExecutiveKpiGrid kpis={data.kpis} />

      <div className="grid w-full gap-8 xl:grid-cols-2">
        <ExecutiveAlerts alerts={data.alerts} />
        <ExecutiveAiRecommendations recommendations={data.recommendations} />
      </div>

      <ExecutiveGoals goals={data.goals} />

      <div className="grid w-full gap-8 xl:grid-cols-2">
        <ExecutiveActivity activity={data.activity} />
        <ExecutiveUpcomingEvents events={data.upcomingEvents} />
      </div>

      <ExecutiveQuickActions actions={data.quickActions} />
    </div>
  );
}
