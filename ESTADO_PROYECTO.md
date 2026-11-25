# Estado del proyecto

**Actualización** — 25 de noviembre de 2026  
**Fase actual** — Primeros incrementos y adaptación ES/EU completados en local. Próximo tema pendiente de inicio.

La preparación, la [auditoría](AUDITORIA_MIGRACION_TXURDIDEX.md) y el [diseño](DISENO_DIDACTICO_TXURDIDEX.md) quedaron registrados respectivamente en `e5747a4`, `a350896` y `2f6e647`. El [plan de desarrollo](PLAN_DESARROLLO.md) recoge el trabajo coordinado de aplicación y apuntes, tema por tema.

## Trabajo realizado

| Entrega | Commit | Resultado |
| --- | --- | --- |
| `tema-01-catalogo` | `a35b515` | Cuatro Pokémon locales, tarjetas adaptables, números, tipos y marcadores originales |
| `tema-02-fundamentos` | `5c4f65d` | Ocho Pokémon, filtros de nombre y tipo combinables, favoritos en memoria, clases dinámicas, contadores, limpieza y mensajes condicionales |
| Apuntes ES/EU | `f243d1e` | Portada y temas 0–2. Pasos, código de las etapas, material inicial, ZIP locales, capturas reales y resultados esperados. Se conserva el ejercicio de películas (2.11) |

## Estado Git

| Repositorio | Rama activa | Referencia al cierre |
| --- | --- | --- |
| TxurdiDex | `main` | Commits de las dos etapas y de control en local. Las etiquetas apuntan a sus respectivos commits |
| Apuntes | `vue-txurdidex-2026-27` | `f243d1e` local. `origin/vue-2026-27` sigue en `66a6718` |
| ProductoGest | `main` | `bd75e52`, limpio |
| Pokédex | `main` | `f481535`, limpio |

## Comprobaciones

- Node `24.16.0` y npm `12.2.0`. `npm ci` con caché local y `npm run build` pasaron en ambas etapas y al extraer los tres ZIP de los apuntes en carpetas limpias. Las dos etapas comparten manifiesto y lockfile. Dependencias directas limitadas a Vue, Vite y el plugin de Vue.
- Ambas compilaciones se probaron en Brave con ancho móvil y bloqueo de solicitudes externas. Se verificaron las tarjetas, imágenes, números y tipos. En la etapa 02 pasaron filtros combinados, búsqueda normalizada, tipo secundario, ausencia de coincidencias, limpieza, favoritos al ocultar y mostrar tarjetas, contadores y reinicio al recargar.
- `mkdocs build --strict` pasó. Se cotejaron las 32 páginas ES/EU, enlaces y rutas locales, las capturas y el contenido de cada ZIP respecto a su etiqueta.
- Queda por comprobar el entorno en otros equipos del aula y los enlaces públicos de GitHub una vez autorizada la publicación. Para clase ya están los ZIP locales en los apuntes.

## Migración pendiente y siguiente tarea

Conservar los contenidos de los temas 3–7 hasta abordar sus incrementos. Siguen pendientes las referencias a ProductoGest en 3.1–3.3, 4.1, 4.3–4.4, 5.1–5.4, 6.1–6.4 y 7.2, en ambos idiomas, además de los títulos de navegación de 5.4 y 6.4 y los materiales históricos del repositorio de apuntes.

Tras la revisión docente, implementar `tema-03-componentes` desde la etapa 02 y adaptar el tema 3 ES/EU con ese código. No se han publicado las ramas ni las etiquetas.
