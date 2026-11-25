# Plan de desarrollo de TxurdiDex

La planificación detallada de los temas, su correspondencia con los incrementos y los nombres y puntos de corte de las etiquetas Git quedan pendientes de la auditoría.

| Fase | Trabajo | Resultado esperado |
| --- | --- | --- |
| 0. Preparación del entorno | Verificar carpetas, ramas, remotos, commits y cambios locales. Crear los cuatro documentos de control. | Punto de partida registrado y guía para retomar el trabajo. |
| 1. Auditoría de los proyectos | Inventariar la secuencia real de los apuntes ES/EU, las prácticas de ProductoGest y los patrones de la Pokédex. Identificar requisitos previos, ejercicios que siguen siendo válidos y candidatos a adaptación. | Inventario con referencias concretas y propuestas para el diseño. |
| 2. Diseño didáctico y funcional | Validar el alcance y organizar cada incremento según el temario. Definir objetivos, requisitos previos, criterios de aceptación y etiquetas. | Mapa de temas, prácticas, funcionalidades y versiones. |
| 3. Desarrollo incremental de TxurdiDex | Implementar y validar cada incremento con Vue 3, Composition API y `<script setup>`. Documentar el código y etiquetar los hitos validados. | Versiones reproducibles de la aplicación para el alumnado. |
| 4. Adaptación de los apuntes ES/EU | Sustituir las prácticas de ProductoGest por las de TxurdiDex en `vue-txurdidex-2026-27`. Mantener la teoría separada y conservar los ejercicios independientes válidos. | Prácticas equivalentes en castellano y euskera, enlazadas con sus versiones. |
| 5. Validación técnica y didáctica | Reproducir las prácticas desde las etiquetas y verificar aplicación, documentación, enlaces, paridad lingüística y progresión de conceptos. | Resultados registrados e incidencias resueltas o documentadas. |
| 6. Publicación | Publicar las versiones y los apuntes una vez validados y autorizados. Verificar los enlaces publicados. | Materiales accesibles y estado final registrado. |

## Funcionalidades candidatas

La auditoría determinará qué funcionalidades se incorporan y en qué orden. La propuesta inicial incluye catálogo de Pokémon, búsqueda y filtros, componentes reutilizables, PokeAPI con Fetch y Axios, estados de carga y error, navegación y detalle con Vue Router, favoritos, gestión de un equipo, operaciones CRUD con JSON Server y estado global con Pinia.
