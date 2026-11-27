# Estado del proyecto

**Actualización** — 25 de noviembre de 2026  
**Fase actual** — Diseño de fase 2 documentado, pendiente de aprobación docente. Fase 3 pendiente de inicio.

## Integración selectiva del tema 2 · 27 de noviembre de 2026

En `integracion-apuntes`, a partir de `tema-01-inicial`, el catálogo mantiene cuatro Pokémon y añade el buscador por nombre, los recuentos, el aviso sin coincidencias y el botón para limpiar. En `vue-txurdidex`, las prácticas de 2.1 a 2.5 reproducen el mismo `App.vue` en castellano y euskera. La compilación y el recorrido en Brave con acceso externo bloqueado se completaron en ambas copias.

La solución queda pendiente de revisión docente antes de crear `tema-02-fundamentos-v2` y enlazar sus descargas. Las ramas principales y las etiquetas existentes se conservaron.

## Estado de los repositorios

Las ramas activas coinciden con sus referencias locales de seguimiento. La comprobación se hizo con las referencias disponibles en los clones.

| Carpeta | Rama activa | Remoto `origin` | Commit verificado | Estado al cierre |
| --- | --- | --- | --- | --- |
| `Vuejs_Apuntes_es-eu` | `vue-txurdidex-2026-27` | `git@github.com:DAW-Resources-FPTxurdinaga/Vuejs_Apuntes_es-eu.git` | `66a6718b910ee0b1eb8d1c70a330275e542f1bc8` | Limpio |
| `productogest-vue` | `main` | `git@github.com:jminsausti/ProductoGest-Vue.git` | `bd75e52f21811e94d046e911a3bbb1f37a29fb5f` | Limpio |
| `Vuejs_pokedex` | `main` | `git@github.com:jminsausti/Vuejs_pokedex.git` | `f4815356d584ec283fbc92d509e97a4729975e1d` | Limpio |
| `TxurdiDex` | `main` | `git@github.com:jminsausti/TxurdiDex.git` | `a350896d7b6560e2401c1277be4e08a19a9a45a3` | Tres documentos actualizados y tres nuevos sin seguimiento |

La rama original de los apuntes está disponible como `origin/vue-2026-27`. Los cuatro repositorios son clones hermanos según [ENTORNO_TRABAJO.md](ENTORNO_TRABAJO.md).

## Trabajo realizado

- **Fase 0.** Preparación completada y sincronizada en `e5747a4`.
- **Fase 1.** Auditoría completada y recuperada. El commit `a350896`, presente en `main` y `origin/main`, incorporó la [auditoría histórica](AUDITORIA_MIGRACION_TXURDIDEX.md) y el mapa original.
- **Fase 2.** Elaborados [diseño didáctico](DISENO_DIDACTICO_TXURDIDEX.md), [diseño técnico](DISENO_TECNICO_TXURDIDEX.md) y [plan de etapas](PLAN_ETAPAS_TXURDIDEX.md). Actualizados [mapa](MAPA_DIDACTICO_TXURDIDEX.md), [plan de desarrollo](PLAN_DESARROLLO.md) y este registro.

## Decisiones reflejadas en el diseño

- Una aplicación Vue 3 incremental con diez entregas, prácticas autónomas preservadas y la misma numeración ES/EU.
- Cuatro Pokémon locales con kit visual de aula, filtros y favoritos en memoria, componentes, Fetch y Axios sobre el mismo contrato.
- Equipo persistente de hasta seis en JSON Server, con cuatro métodos en la interfaz y PUT en laboratorio. Datos de aula disponibles sin Internet.
- Dos cortes de Router, con transición por estado en el raíz, y dos de Pinia, primero favoritos síncronos y después equipo asíncrono.
- CSS convencional, datos y recursos autorizados, sin autenticación simulada.

## Incidencias y decisiones pendientes

- Validar con el profesor la incorporación de clases dinámicas en 2.5, el cambio del ejemplo HTTP de 2.7, los cortes HTTP de 4.2–4.3, la transición de 4.4 y la adaptación de 6.2–6.4 en ambos idiomas.
- Aprobar kit y permisos, estrategia de catálogo acotado, contrato del equipo, propuesta de alojamiento y alcance de las ampliaciones.
- Verificar versiones candidatas y lockfile, comportamiento de JSON Server, pruebas de aula sin Internet y acceso directo a rutas. Se observaron Node `v24.16.0` y npm `12.2.0`. Las comprobaciones de compatibilidad, construcción y ejecución quedan para las fases autorizadas.

## Comprobaciones y próxima tarea

Se revisaron las rutas locales, la coherencia de las diez etiquetas previstas, los puntos de adaptación y el alcance del diff. La fase 2 ha sido documental y sus cambios quedan locales.

Revisar y aprobar los tres documentos de diseño. Solo después de la aprobación docente podrá iniciarse la fase 3 con `tema-01-catalogo`.
