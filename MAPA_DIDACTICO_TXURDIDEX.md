# Mapa didáctico de TxurdiDex

**Fase 2 · Borrador para aprobación docente**

El [diseño didáctico por apartado](DISENO_DIDACTICO_TXURDIDEX.md) desarrolla este mapa. El [diseño técnico](DISENO_TECNICO_TXURDIDEX.md) recoge los contratos y el [plan de etapas](PLAN_ETAPAS_TXURDIDEX.md) describe qué validar en cada entrega. La [auditoría de fase 1](AUDITORIA_MIGRACION_TXURDIDEX.md) conserva las fuentes, la clasificación y las propuestas originales.

| Apartado | Conceptos y material que se conserva | Incremento | Dependencia nueva | Etiqueta prevista |
| --- | --- | --- | --- | --- |
| 0.1 | Contador vanilla y Vue, estado y DOM declarativo | Presentar el hilo del curso | Vue por CDN en la demo existente | — |
| 1.1–1.2 | Vite, SFC, montaje y build | Cuatro Pokémon locales. Kit de datos, recursos y CSS | Vue 3, Vite y plugin Vue | `tema-01-catalogo` |
| 2.0–2.10 | Reactividad, directivas, formularios, eventos y demos de ciclo de vida y efectos | Búsqueda, tipo, filtros combinados, limpieza, favoritos, clases y contadores | — | `tema-02-fundamentos` |
| 2.11 | Catálogo de películas | Ejercicio autónomo | Según ejercicio | — |
| 3.1–3.3 | Creación de SFC, saludo, props y emits | Extraer tarjeta y buscador con selector integrado. El padre conserva estado y filtro | — | `tema-03-componentes` |
| 4.1–4.2 | Asincronía, REST, JSONPlaceholder y métodos | Cambiar a PokeAPI con GET acotado, estados y modo aula | Fetch nativo | `tema-04-fetch` |
| 4.3, comparación | Ejemplos de Axios y Rick and Morty | Sustituir transporte, conservar contrato y añadir timeout | Axios | `tema-04-axios` |
| 4.3, equipo | Práctica de API local | Equipo de seis con GET, POST, PATCH y DELETE. PUT en laboratorio | JSON Server | `tema-04-equipo-http` |
| 4.4 | Directorio, búsqueda Pokémon por nombre/ID, Rick and Morty y meteorología | Ejercicios autónomos | Según ejercicio | — |
| 5.1–5.3 | SitioDemo, rutas básicas y avanzadas | Aplicación teórica independiente | Vue Router en SitioDemo | — |
| 5.4, primer corte | Parámetros y navegación declarativa | Catálogo, detalle, equipo y 404 | Vue Router en TxurdiDex | `tema-05-router` |
| 5.4, segundo corte | Navegación programática | Avanzar a otro Pokémon desde el detalle | — | `tema-05-completo` |
| 6.1–6.3 | Contador compartido, getters, acciones y `storeToRefs` | `pinia-demo` independiente | Pinia en la demo | — |
| 6.4, primer corte | Estado compartido síncrono | Favoritos de catálogo, detalle y cabecera | Pinia en TxurdiDex | `tema-06-favoritos` |
| 6.4, segundo corte | Estado compartido con acciones asíncronas | Equipo único en Pinia con persistencia vía Axios y JSON Server | — | `tema-06-pinia` |
| 7.1–7.2 | Tareas, agenda y secuencia de personajes con HTTP → Router → Pinia | Prácticas autónomas | Según ejercicio | — |

## Revisión y correspondencia ES/EU

Mantener números y estructura. Ambos idiomas enlazarán a las mismas etiquetas y compartirán puntos de partida, objetivos, pasos, ampliaciones y resultados esperados. Antes de adaptar, revisar los pares de 6.2–6.4 y los ajustes de 2.5, 2.7 y 4.2–4.4 descritos en el diseño didáctico. El desglose ES/EU y las rutas de cada apartado se conservan en la auditoría. [Índice ES](../Vuejs_Apuntes_es-eu/docs/es/index.md) · [Índice EU](../Vuejs_Apuntes_es-eu/docs/eu/index.md)

Quedan pendientes la aprobación docente del diseño, la elección de recursos autorizados y la validación del entorno del aula.
