# Estado del proyecto

**Actualización** — 25 de noviembre de 2026  
**Fase actual** — Fases 0 y 1 completadas. Fase 2 pendiente de inicio.

## Fases completadas

- **Fase 0 · Preparación del entorno.** Los cuatro documentos de control se incorporaron en `e5747a4`, commit presente en `main` y en la referencia local `origin/main` del clon de GitHub.
- **Fase 1 · Auditoría de los proyectos.** Completada en el primer ordenador. Se recuperaron y leyeron íntegramente la [auditoría de migración](AUDITORIA_MIGRACION_TXURDIDEX.md) y el [mapa didáctico](MAPA_DIDACTICO_TXURDIDEX.md). Ambos archivos están disponibles en este ordenador y pendientes de incorporar a Git.

## Estado de los repositorios

Los cuatro clones son carpetas hermanas. Cada rama activa coincide con su referencia local de seguimiento, sin commits por delante ni por detrás. La comprobación se hizo con las referencias disponibles en los clones.

| Carpeta | Rama activa | Remoto `origin` | Commit verificado | Estado al cierre |
| --- | --- | --- | --- | --- |
| `Vuejs_Apuntes_es-eu` | `vue-txurdidex-2026-27` | `git@github.com:DAW-Resources-FPTxurdinaga/Vuejs_Apuntes_es-eu.git` | `66a6718b910ee0b1eb8d1c70a330275e542f1bc8` | Limpio |
| `productogest-vue` | `main` | `git@github.com:jminsausti/ProductoGest-Vue.git` | `bd75e52f21811e94d046e911a3bbb1f37a29fb5f` | Limpio |
| `Vuejs_pokedex` | `main` | `git@github.com:jminsausti/Vuejs_pokedex.git` | `f4815356d584ec283fbc92d509e97a4729975e1d` | Limpio |
| `TxurdiDex` | `main` | `git@github.com:jminsausti/TxurdiDex.git` | `e5747a4532847c113f46183015789c83e105870d` | Estado actualizado y dos documentos recuperados sin seguimiento |

La rama original de los apuntes está disponible en este clon como `origin/vue-2026-27`.

## Decisiones adoptadas

- Desarrollar TxurdiDex con Vue 3, Composition API y `<script setup>`, siguiendo la secuencia de los apuntes.
- Usar ProductoGest y la Pokédex como referencias de solo lectura. Reservar la adaptación de los apuntes para `vue-txurdidex-2026-27`.
- Mantener la teoría separada de las prácticas, conservar los ejercicios independientes válidos y actualizar la documentación del alumnado en castellano y euskera.
- Identificar con etiquetas Git los incrementos didácticos validados. Excluir el uso de un fichero de usuarios y contraseñas en el frontend como ejemplo de autenticación segura.

## Decisiones de diseño pendientes

- Aprobar la secuencia propuesta y distinguir los objetivos obligatorios de las ampliaciones, como el filtro por tipo, las clases dinámicas y los favoritos.
- Decidir el alcance de las escrituras HTTP en el tema 4. La auditoría propone equipo parcial con JSON Server, CRUD completo o laboratorio independiente. Si se incorpora el equipo, concretar métodos, campos, duplicados y restauración de datos.
- Elegir equipo o favoritos como práctica de Pinia en 6.4 y decidir qué estado debe persistir tras recargar.
- Aprobar el kit inicial de datos, CSS e imágenes, y confirmar la procedencia, la atribución y los permisos de reutilización.
- Fijar objetivos, requisitos previos, criterios de aceptación, etiquetas y descargas por incremento. Decidir el destino de los materiales históricos y cuándo armonizar los ejercicios ES/EU de 6.2–6.4.
- Definir la versión de Node para el aula, la verificación del lockfile, el uso de datos locales sin red y las pruebas de acceso directo a las rutas publicadas.

## Comprobaciones e incidencias

- Se leyeron [AGENTS.md](AGENTS.md), [PLAN_DESARROLLO.md](PLAN_DESARROLLO.md), [ENTORNO_TRABAJO.md](ENTORNO_TRABAJO.md) y el resto de la documentación de TxurdiDex. Los commits de los cuatro clones coinciden con las revisiones citadas en la auditoría recuperada.
- La guía de entorno permite elegir la carpeta común en cada equipo. Sus comandos y enlaces locales usan rutas relativas y los remotos SSH requieren acceso a GitHub desde cada ordenador.
- Los dos documentos recuperados y esta actualización quedan pendientes de incorporación a Git cuando se autorice. Las pruebas de aula y de publicación quedan pendientes para sus fases.

## Próxima tarea

Iniciar la fase 2, diseño didáctico y funcional, con la revisión docente del alcance HTTP, el caso de estado compartido y la estrategia de materiales y permisos. A partir de esas decisiones, concretar el mapa de prácticas, funcionalidades y versiones descrito en el plan de desarrollo.
