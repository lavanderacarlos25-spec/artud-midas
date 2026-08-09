# Portal Empresarial (`portal`)

Superficie **activa** (Sprint 5, Bloque 1). Audiencia: `business_owner` exclusivamente.

## Debe mostrar

- Evolución del negocio, KPIs, objetivos, ROI
- Resultados y acciones realizadas por Artud Midas
- Informes y mensajes con el equipo

## No debe mostrar

- Herramientas internas de operaciones / automatizaciones / gestión de red

## Código actual

- Route group: `app/(portal)`
- Ruta: `/portal`
- UI: `components/executive/ExecutiveCommandCenter` (reutilizado, sin cambios de contenido)
- Sin shell propio todavía (pass-through layout) — pendiente de bloque posterior
- Sin segmentación por rol todavía (middleware) — pendiente de bloque posterior

Ver `frontend/ARCHITECTURE.md`.
