# Centro de Operaciones (`operations`)

Superficie **activa**. Audiencia: equipo interno Artud Midas.

## Sprint 5

Hub demo montado en la ruta existente `/` (Dashboard), sin cambiar la navegación.

- UI: `components/operations/*`
- Datos demo: `config/operations-center.ts`
- Tipos: `types/operations-center.ts`

## Alcance

- Empresas (incl. ficha / centro de mando)
- Clientes, Fidelización
- Hub Ops: prioridades, alertas, cola, actividad, campañas, objetivos, IA demo
- Futuro: RRPP, Eventos, Automatizaciones, Informes internos

## Código actual

- Rutas: `app/(dashboard)/**`
- Nav: `config/navigation.ts` (sin cambios en Sprint 5)
- UI de dominio: `components/businesses`, `customers`, `loyalty`, `operations`

## Regla

No mezclar aquí pantallas del Portal Empresarial ni de la App Cliente Final.

Ver `frontend/ARCHITECTURE.md`.
