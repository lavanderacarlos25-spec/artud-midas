"use client";

import { useState } from "react";

import { LoyaltyMetrics } from "@/components/loyalty/LoyaltyMetrics";
import { LoyaltyTable } from "@/components/loyalty/LoyaltyTable";
import { LoyaltyToolbar } from "@/components/loyalty/LoyaltyToolbar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Icon } from "@/components/ui/icons";
import { demoLoyaltyMembers, getLoyaltyMetrics } from "@/config/loyalty";
import type { LoyaltyLevelFilter, LoyaltyMember } from "@/types/loyalty";

export function LoyaltyManagement() {
  const [members, setMembers] = useState<LoyaltyMember[]>(demoLoyaltyMembers);
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState<LoyaltyLevelFilter>("todos");

  const query = search.trim().toLowerCase();
  const filteredMembers = members.filter((member) => {
    const matchesLevel =
      levelFilter === "todos" || member.level === levelFilter;

    if (!matchesLevel) {
      return false;
    }

    if (!query) {
      return true;
    }

    return (
      member.name.toLowerCase().includes(query) ||
      member.email.toLowerCase().includes(query) ||
      member.city.toLowerCase().includes(query)
    );
  });

  const metrics = getLoyaltyMetrics(members);

  function handleView(member: LoyaltyMember) {
    console.info("Ver miembro:", member.id);
  }

  function handleEdit(member: LoyaltyMember) {
    console.info("Editar miembro:", member.id);
  }

  function handleAdjustPoints(member: LoyaltyMember) {
    const input = window.prompt(
      `Ajustar puntos de "${member.name}"`,
      String(member.points),
    );

    if (input === null) {
      return;
    }

    const nextPoints = Number(input.replace(/\./g, "").replace(",", "."));

    if (!Number.isFinite(nextPoints) || nextPoints < 0) {
      window.alert("Introduce un número de puntos válido.");
      return;
    }

    setMembers((current) =>
      current.map((item) =>
        item.id === member.id
          ? { ...item, points: Math.round(nextPoints) }
          : item,
      ),
    );
  }

  function handleDelete(member: LoyaltyMember) {
    const confirmed = window.confirm(
      `¿Eliminar a "${member.name}" del programa de fidelización?`,
    );

    if (!confirmed) {
      return;
    }

    setMembers((current) => current.filter((item) => item.id !== member.id));
  }

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <Badge variant="gold">Gestión</Badge>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Fidelización
          </h2>
          <p className="max-w-xl text-sm text-muted sm:text-base">
            Gestiona niveles, puntos y recompensas del programa Artud Midas.
          </p>
        </div>
        <Button variant="primary" className="w-full sm:w-auto">
          <Icon name="plus" className="size-4" />
          Nuevo miembro
        </Button>
      </section>

      <LoyaltyMetrics metrics={metrics} />

      <Card>
        <CardContent className="space-y-5">
          <LoyaltyToolbar
            search={search}
            levelFilter={levelFilter}
            onSearchChange={setSearch}
            onLevelFilterChange={setLevelFilter}
            resultCount={filteredMembers.length}
          />
        </CardContent>

        <div className="border-t border-border">
          <LoyaltyTable
            members={filteredMembers}
            onView={handleView}
            onEdit={handleEdit}
            onAdjustPoints={handleAdjustPoints}
            onDelete={handleDelete}
          />
        </div>
      </Card>
    </div>
  );
}
