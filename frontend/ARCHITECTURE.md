# Artud Midas — Architecture

**Sprint 4 · Arquitectura general**  
Documento de referencia para la evolución del frontend sin romper la aplicación actual.

---

## 1. Objetivo

Artud Midas no es un único dashboard. Es una plataforma con **tres superficies (mundos)** completamente separadas por audiencia, propósito y experiencia:

| Superficie | Audiencia | Propósito |
|---|---|---|
| **Centro de Operaciones** | Equipo interno Artud Midas | Gestión, inteligencia, automatización y control de la red |
| **Portal Empresarial** | Propietario / operador del local | Confianza, resultados, ROI y comunicación con Artud |
| **App Cliente Final** | Visitantes de los locales | Perfil, engagement, recompensas y comunidad |

Todo lo construido hasta ahora pertenece al **Centro de Operaciones**.

---

## 2. Análisis de la arquitectura actual

### 2.1 Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Auth por cookies JWT (`middleware` + `lib/auth`)
- Datos demo en `config/` + stores locales (`lib/businesses/store`)

### 2.2 Estructura actual (resumen)

```
frontend/src/
├── app/
│   ├── (auth)/           # login, register, forgot-password
│   ├── (dashboard)/      # panel autenticado actual
│   └── api/auth/         # endpoints de sesión
├── components/
│   ├── auth/
│   ├── layout/           # DashboardShell, Sidebar, TopNav
│   ├── ui/               # design system compartido
│   ├── dashboard/
│   ├── businesses/       # ficha + centro de mando (Sprint 2–3)
│   ├── customers/
│   └── loyalty/
├── config/               # navegación, demos, site
├── lib/                  # auth, utils, stores
└── types/
```

### 2.3 Qué implica hoy

- Un solo shell de dashboard (`(dashboard)` + `DashboardShell`).
- Una sola navegación (`config/navigation.ts`).
- Roles existentes (`admin`, `staff`, `business_owner`) aún **no** segmentan superficies distintas.
- La ficha de empresa ya actúa como **Centro de Mando** interno (KPIs, salud, IA demo, objetivos, módulos).

### 2.4 Limitación a resolver

Si se mezclan herramientas internas, portal del dueño y app del cliente en las mismas rutas/componentes, el producto se vuelve confuso y difícil de escalar. Sprint 4 fija la **separación conceptual** antes de seguir construyendo features.

---

## 3. Modelo de tres superficies

### 3.1 Centro de Operaciones Artud Midas (`operations`)

**Quién:** admin / staff Artud Midas.

**Qué debe vivir aquí:**

- Empresas (CRUD + ficha inteligente / centro de mando)
- Clientes
- Fidelización / RRPP / Empleados (futuro)
- Eventos, Campañas
- IA, Analítica, Automatizaciones
- Informes internos

**URL actual (sin cambios en este sprint):**

- `/`, `/businesses`, `/customers`, `/loyalty`, `/analytics`, `/ai-assistant`, `/settings`

**URL objetivo (migración futura, no implementar ahora):**

- Prefijo opcional `/ops` o mantener rutas actuales como “home” del equipo interno.

### 3.2 Portal Empresarial (`portal`)

**Quién:** `business_owner` (y roles de negocio equivalentes).

**Qué debe mostrar (solo resultados y confianza):**

- Evolución del negocio
- KPIs y objetivos del local
- ROI y resultados obtenidos
- Acciones realizadas por Artud Midas
- Informes
- Mensajes con el equipo

**Qué NO debe mostrar:**

- Herramientas internas de operaciones
- Configuración profunda de módulos Artud
- Automatizaciones / IA operativa interna

**URL objetivo (futuro):**

- `/portal` o subdominio `portal.artudmidas...`

### 3.3 App Cliente Final (`consumer`)

**Quién:** cliente final del local (rol futuro `customer` / guest).

**Módulos previstos:**

- Perfil, QR, Eventos, Ranking
- Rasca y gana, Recompensas, Comunidad, Notificaciones

**URL objetivo (futuro):**

- `/app` o PWA / subdominio `app.artudmidas...`

---

## 4. Organización propuesta (evolución sin romper)

Principio: **mantener rutas y navegación actuales**; introducir carpetas y contratos nuevos de forma aditiva.

### 4.1 Capas recomendadas

```
src/
├── app/
│   ├── (auth)/                 # compartido (login puede ramificar por superficie más adelante)
│   ├── (dashboard)/            # HOY = Operations (sin renombrar aún)
│   ├── (portal)/               # FUTURO — Portal Empresarial
│   └── (consumer)/             # FUTURO — App Cliente
├── surfaces/                   # contratos y docs por superficie (Sprint 4)
│   ├── index.ts
│   ├── operations/
│   ├── portal/
│   └── consumer/
├── components/
│   ├── ui/                     # design system compartido
│   ├── layout/                 # shells: hoy DashboardShell; mañana PortalShell / ConsumerShell
│   ├── businesses/             # dominio operaciones (actual)
│   ├── customers/
│   ├── loyalty/
│   ├── portal/                 # FUTURO — UI solo portal
│   └── consumer/               # FUTURO — UI solo consumer
├── config/
│   ├── navigation.ts           # HOY ops nav (no cambiar en Sprint 4)
│   ├── portal-navigation.ts    # FUTURO
│   └── consumer-navigation.ts  # FUTURO
├── lib/                        # auth, stores, clients — compartido con reglas por superficie
└── types/
```

### 4.2 Reglas de dependencia

1. **`components/ui` y `lib/utils`** son compartidos.
2. **Dominios de Operaciones** no importan UI de Portal ni Consumer.
3. **Portal** no importa pantallas de gestión interna (tablas CRUD de red, automatizaciones, etc.).
4. **Consumer** no importa shells ni módulos de operaciones/portal.
5. Si hay lógica compartida (p. ej. formato de moneda, tipos de negocio), vive en `lib/` o `types/`, no en pantallas de otra superficie.

### 4.3 Rutas — plan de migración (futuro)

| Fase | Acción | Riesgo |
|---|---|---|
| **Ahora (Sprint 4)** | Documentar + `surfaces/` | Nulo |
| **Siguiente** | Crear `(portal)` y `(consumer)` vacíos con layouts propios | Bajo |
| **Después** | Extraer shells (`PortalShell`, `ConsumerShell`) | Medio |
| **Más adelante** | Auth por superficie / rol → redirect | Medio |
| **Opcional** | Prefijo `/ops` para operaciones | Alto (requiere redirects) |

**Importante:** en Sprint 4 **no** se renombra `(dashboard)` ni se cambia `navigation.ts`.

### 4.4 Roles → superficies (objetivo)

| Rol actual / futuro | Superficie por defecto |
|---|---|
| `admin`, `staff` | Operations |
| `business_owner` | Portal |
| `customer` (futuro) | Consumer |

Hoy todos los roles autenticados entran al mismo dashboard. Eso se corregirá cuando existan las otras superficies.

---

## 5. Principios del sistema

1. **Separación por audiencia** antes que por feature.
2. **Aditivo, no destructivo:** nuevas carpetas y contratos; cero regresiones.
3. **Un shell por superficie.**
4. **Design system único** (`ui/`), experiencias distintas.
5. **Demo-first → API-ready:** `config/*` y stores locales hoy; mismos contratos mañana con backend.
6. **La ficha de empresa (Operations)** es inteligencia operativa interna; el **Portal** es la narrativa de resultados para el dueño. No son la misma pantalla.
7. **PWA / móvil** priorizará Consumer; Operations puede permanecer desktop-first.

---

## 6. Mapa de lo ya construido → Operations

| Módulo actual | Superficie | Notas |
|---|---|---|
| Dashboard home | Operations | Overview interno |
| Empresas + ficha / centro de mando | Operations | Sprint 1–3 |
| Clientes | Operations | |
| Fidelización | Operations | |
| Analytics / AI Assistant (placeholders) | Operations | |
| Settings | Operations (compartible más adelante) | |
| Auth | Compartido | |

---

## 7. Cómo debe evolucionar el proyecto

### Corto plazo

1. Mantener desarrollo de features **solo en Operations**.
2. Usar `src/surfaces/` como fuente de verdad conceptual.
3. Al crear features nuevas, etiquetar mentalmente: ¿ops, portal o consumer?

### Medio plazo

1. Scaffold `(portal)` y `(consumer)` con layouts mínimos.
2. Nav configs separadas.
3. Redirect post-login según rol.

### Largo plazo

1. Posibles subdominios / apps desplegadas por superficie.
2. APIs y permisos alineados con superficie.
3. Design tokens compartidos; motion y densidad UI adaptados a cada mundo.

---

## 8. Checklist para nuevos PRs

- [ ] ¿A qué superficie pertenece este cambio?
- [ ] ¿Importa código de otra superficie? (evitar)
- [ ] ¿Rompe rutas o nav actuales? (prohibido sin plan de migración)
- [ ] ¿Los datos demo quedan en `config/` con funciones `getX(business)` listas para API?
- [ ] ¿TypeScript y lint pasan?

---

## 9. Referencias en código (Sprint 4)

- Contratos de superficie: `src/surfaces/index.ts`
- Notas por superficie: `src/surfaces/operations|portal|consumer/README.md`
- Nav actual (Operations): `src/config/navigation.ts`

## 10. Sprint 5 — Centro de Operaciones (hub)

El hub interno del equipo Artud Midas se monta en la ruta existente `/`
(`app/(dashboard)/page.tsx`) mediante `components/operations/OperationsCenter`.

- No se añadieron rutas nuevas.
- No se modificó `config/navigation.ts`.
- Empresas / Clientes / Portal no se tocaron.
- Todo el contenido del hub es **DEMO** (`config/operations-center.ts`).

Bloques del hub: KPIs de red, prioridades del día, empresas que necesitan
atención, alertas internas, cola de tareas, actividad del equipo,
recomendaciones IA (simuladas), estado de campañas y objetivos internos.

## 11. Sprint 6 — Business Intelligence 360°

La ficha de empresa (`BusinessDetail`) se amplía a un panel ejecutivo 360°
sin tocar CRUD, Dashboard/Ops hub, navegación ni autenticación.

- Tipos: `types/business-360.ts`
- Demo: `config/business-360.ts` → `getBusiness360Bundle(business)`
- Primitivas reutilizables: `components/intelligence/*`
  (`IntelligencePanel`, `MetricTiles`, `ScoreGauge`, `QuickActionRow`,
  `IntelligenceTimeline`, `DomainMetricsCard`)
- Bloques nuevos en ficha: resumen ejecutivo 360, Business Score, Clientes,
  Eventos, Campañas, RRPP, Fidelización, Ventas, Alertas, Quick Actions,
  Timeline 360

Todas las secciones previas de la ficha se mantienen.
