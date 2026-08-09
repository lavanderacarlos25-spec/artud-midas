import type { Business } from "@/types/business";
import type {
  BusinessActivityItem,
  BusinessGoal,
  BusinessGoalStatus,
  BusinessKpi,
  BusinessModuleProgress,
  BusinessModuleRuntimeStatus,
  BusinessQuickAction,
} from "@/types/business-command";

export const businessGoalStatusLabels: Record<BusinessGoalStatus, string> = {
  en_curso: "En curso",
  cumplido: "Cumplido",
  retrasado: "Retrasado",
};

export const businessModuleRuntimeStatusLabels: Record<
  BusinessModuleRuntimeStatus,
  string
> = {
  activo: "Activo",
  en_configuracion: "En configuración",
  disponible: "Disponible",
};

/**
 * Demo KPIs for the business command center.
 * Ready to replace with live metrics later.
 */
export function getBusinessCommandKpis(_business: Business): BusinessKpi[] {
  return [
    {
      id: "revenue-month",
      label: "Facturación del mes",
      value: "48.250 €",
      change: "+12%",
      trend: "up",
      icon: "revenue",
    },
    {
      id: "active-customers",
      label: "Clientes activos",
      value: "1.284",
      change: "+8%",
      trend: "up",
      icon: "users",
    },
    {
      id: "active-events",
      label: "Eventos activos",
      value: "6",
      change: "+2",
      trend: "up",
      icon: "calendar",
    },
    {
      id: "recurrence",
      label: "Recurrencia",
      value: "73%",
      change: "+3%",
      trend: "up",
      icon: "trending-up",
    },
    {
      id: "satisfaction",
      label: "Satisfacción",
      value: "4.7/5",
      change: "+0.2",
      trend: "up",
      icon: "award",
    },
    {
      id: "growth",
      label: "Crecimiento",
      value: "9.4%",
      change: "-1.1%",
      trend: "down",
      icon: "chart",
    },
  ];
}

export function getBusinessGoals(_business: Business): BusinessGoal[] {
  return [
    {
      id: "goal-weekly",
      label: "Objetivo semanal",
      progress: 68,
      status: "en_curso",
      target: "Ocupación media del 75%",
    },
    {
      id: "goal-monthly",
      label: "Objetivo mensual",
      progress: 100,
      status: "cumplido",
      target: "48.000 € de facturación",
    },
    {
      id: "goal-quarterly",
      label: "Objetivo trimestral",
      progress: 42,
      status: "retrasado",
      target: "2.500 clientes activos",
    },
    {
      id: "goal-yearly",
      label: "Objetivo anual",
      progress: 54,
      status: "en_curso",
      target: "Expansión de fidelización Diamante",
    },
  ];
}

export function getBusinessRecentActivity(
  _business: Business,
): BusinessActivityItem[] {
  return [
    {
      id: "act_vip",
      description: "Nuevo cliente VIP registrado",
      relativeTime: "Hace 2 horas",
      icon: "award",
    },
    {
      id: "act_campaign",
      description: "Campaña Afterwork creada",
      relativeTime: "Hace 5 horas",
      icon: "sparkles",
    },
    {
      id: "act_event",
      description: "Evento Viernes Premium confirmado",
      relativeTime: "Ayer",
      icon: "calendar",
    },
    {
      id: "act_ai",
      description: "IA detectó baja ocupación",
      relativeTime: "Hace 2 días",
      icon: "bell",
    },
    {
      id: "act_goal",
      description: "Objetivo mensual actualizado",
      relativeTime: "Hace 3 días",
      icon: "trending-up",
    },
  ];
}

export function getBusinessQuickActions(
  _business: Business,
): BusinessQuickAction[] {
  return [
    {
      id: "qa_event",
      label: "Crear evento",
      description: "Lanza una noche o reserva especial",
      icon: "calendar",
      actionKey: "create_event",
    },
    {
      id: "qa_campaign",
      label: "Crear campaña",
      description: "Activa promoción o fidelización",
      icon: "sparkles",
      actionKey: "create_campaign",
    },
    {
      id: "qa_customer",
      label: "Registrar cliente",
      description: "Añade un nuevo perfil al local",
      icon: "users",
      actionKey: "register_customer",
    },
    {
      id: "qa_rrpp",
      label: "Añadir RRPP",
      description: "Incorpora un promotor al equipo",
      icon: "plus",
      actionKey: "add_rrpp",
    },
    {
      id: "qa_analytics",
      label: "Ver analítica",
      description: "Consulta el rendimiento del negocio",
      icon: "chart",
      actionKey: "view_analytics",
    },
  ];
}

export function getBusinessModuleProgress(
  _business: Business,
): BusinessModuleProgress[] {
  return [
    { key: "locales", status: "activo", progress: 100 },
    { key: "rrpp", status: "en_configuracion", progress: 40 },
    { key: "empleados", status: "en_configuracion", progress: 55 },
    { key: "clientes", status: "activo", progress: 100 },
    { key: "eventos", status: "disponible", progress: 0 },
    { key: "fidelizacion", status: "disponible", progress: 0 },
    { key: "analitica", status: "disponible", progress: 0 },
  ];
}
