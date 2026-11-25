# Estado del proyecto

**Actualización** — 25 de noviembre de 2026  
**Fase actual** — Tema 3 implementado y validado localmente. Pendiente de revisión docente antes de etiquetar y publicar.

La preparación, la [auditoría](AUDITORIA_MIGRACION_TXURDIDEX.md) y el [diseño](DISENO_DIDACTICO_TXURDIDEX.md) quedaron registrados respectivamente en `e5747a4`, `a350896` y `2f6e647`. El [plan de desarrollo](PLAN_DESARROLLO.md) recoge el trabajo coordinado de aplicación y apuntes, tema por tema.

## Trabajo realizado

| Entrega | Commit | Resultado |
| --- | --- | --- |
| `tema-01-catalogo` | `a35b515` | Cuatro Pokémon locales, tarjetas adaptables, números, tipos y marcadores originales |
| `tema-02-fundamentos` | `5c4f65d` | Ocho Pokémon, filtros de nombre y tipo combinables, favoritos en memoria, clases dinámicas, contadores, limpieza y mensajes condicionales |
| Apuntes ES/EU | `f243d1e` | Portada y temas 0–2. Pasos, código de las etapas, material inicial, capturas reales y resultados esperados. Se conserva el ejercicio de películas (2.11) |
| Tema 3 · Componentes | Cambios locales | `PokemonCard.vue` presenta un Pokémon y emite su ID al pulsar la estrella. `PokemonSearch.vue` presenta los filtros y emite los cambios y la limpieza. `App.vue` conserva el estado y el cálculo de resultados |
| Apuntes ES/EU · 3.1–3.3 | Cambios locales | Diagramas de arquitectura y comunicación, ejemplos independientes, extracción gradual de tarjetas y buscador, comprobaciones y captura intermedia. Los pasos parten de `tema-02-fundamentos` |

## Estado Git

| Repositorio | Rama activa | Referencia al cierre |
| --- | --- | --- |
| TxurdiDex | `main` | Base local `32b4d6e`. Implementación y documentación del tema 3 en el área de trabajo. Etiquetas 01 y 02 conservadas |
| Apuntes | `vue-txurdidex-2026-27` | Base local `a590f09`. Cambios locales en las seis páginas del tema 3 y en su captura. Tema original cotejado con `origin/vue-2026-27` en `66a6718` |
| ProductoGest | `main` | `bd75e52`, limpio |
| Pokédex | `main` | `f481535`, limpio |

## Comprobaciones

- Node `24.16.0` y npm `12.2.0`. `npm ci` con caché local y `npm run build` pasaron en ambas etapas y al extraer los tres ZIP de los apuntes en carpetas limpias. Las dos etapas comparten manifiesto y lockfile. Dependencias directas limitadas a Vue, Vite y el plugin de Vue.
- Ambas compilaciones se probaron en Brave con ancho móvil y bloqueo de solicitudes externas. Se verificaron las tarjetas, imágenes, números y tipos. En la etapa 02 pasaron filtros combinados, búsqueda normalizada, tipo secundario, ausencia de coincidencias, limpieza, favoritos al ocultar y mostrar tarjetas, contadores y reinicio al recargar.
- `mkdocs build --strict` pasó. Se cotejaron las 32 páginas ES/EU, enlaces y rutas locales, las capturas y el contenido de cada ZIP respecto a su etiqueta.
- Los cuatro enlaces públicos de GitHub responden sin autenticación. Las dos descargas son ZIP válidos y contienen todos los archivos de sus copias anteriores con el mismo contenido. Se retiraron los duplicados y se comprobó que el sitio generado conserva el material inicial y muestra los mismos enlaces en ES/EU. `mkdocs build --strict` pasó tras el cambio. Queda por comprobar el entorno en otros equipos del aula.
- Tema 3. `npm ci --offline` y `npm run build` pasaron con las dependencias existentes. Se siguieron los pasos de cada idioma en sendas copias limpias de `tema-02-fundamentos`. Las comprobaciones intermedias pasaron y ambos árboles `src/` coincidieron byte a byte con la implementación.
- En Brave se probaron el desarrollo y la compilación de producción con bloqueo de peticiones externas. Se verificaron las ocho fichas, búsqueda normalizada, tipo secundario, filtros combinados, catálogo vacío, ausencia de coincidencias, limpieza, favoritos y recarga. Los controles se apilaron a 390 px y el aspecto inicial coincidió con el de la etiqueta de partida a 390 y 960 px. Los hijos leen props y comunican cambios mediante eventos, con las mutaciones en el padre.
- Los ejemplos SFC, de props y de eventos se ejecutaron en ambos idiomas. Se comprobó la equivalencia de los fragmentos de práctica, los recursos y los enlaces ES/EU. `mkdocs build --strict` pasó con el tema 3.

## Migración pendiente y siguiente tarea

Conservar los contenidos de los temas 4–7 hasta abordar sus incrementos. Siguen pendientes las referencias a ProductoGest en 4.1, 4.3–4.4, 5.1–5.4, 6.1–6.4 y 7.2, en ambos idiomas, además de los títulos de navegación de 5.4 y 6.4 y los materiales históricos del repositorio de apuntes.

Revisar en el aula el tema 3. Una vez aprobados la aplicación y los apuntes, crear y publicar `tema-03-componentes` con autorización y comprobar los enlaces de código fuente y descarga previstos. Esta sesión deja los cambios locales, sin commits, etiqueta nueva, push ni despliegue.
