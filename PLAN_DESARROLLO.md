# Plan de desarrollo de TxurdiDex

| Fase | Trabajo | Resultado y estado |
| --- | --- | --- |
| 0. Preparación del entorno | Verificar carpetas, ramas, remotos, commits y cambios locales. Crear los documentos de control. | Completada. Base versionada en `e5747a4`. |
| 1. Auditoría de los proyectos | Inventariar apuntes ES/EU, ProductoGest y Pokédex, requisitos previos y prácticas. | Completada. [Auditoría histórica](AUDITORIA_MIGRACION_TXURDIDEX.md) versionada en `a350896`. |
| 2. Diseño didáctico y funcional | Concretar alcance, progresión, objetivos y requisitos, arquitectura, aceptación y etiquetas. | Documentación elaborada. Pendiente de aprobación docente. |
| 3. Desarrollo incremental de TxurdiDex | Implementar, documentar y validar los diez incrementos con Vue 3, Composition API y `<script setup>`. Etiquetarlos cuando corresponda. | Pendiente de aprobación de la fase 2. Versiones independientes y reproducibles. |
| 4. Adaptación de los apuntes ES/EU | Sustituir prácticas de ProductoGest en `vue-txurdidex-2026-27`. Mantener numeración, teoría separada y ejercicios autónomos. | Prácticas equivalentes y vinculadas con puntos de partida y versiones. |
| 5. Validación técnica y didáctica | Reproducir prácticas desde etiquetas, comprobar aplicación, paridad ES/EU, navegación y descargas. | Validación de aula y del sitio generado con incidencias registradas. |
| 6. Publicación | Publicar versiones y apuntes una vez validados y autorizados. Verificar enlaces publicados. | Materiales accesibles y estado final registrado. |

## Diseño y secuencia

El [mapa](MAPA_DIDACTICO_TXURDIDEX.md) vincula apuntes e incrementos. El [diseño didáctico](DISENO_DIDACTICO_TXURDIDEX.md) indica qué se enseña y entrega por apartado. El [diseño técnico](DISENO_TECNICO_TXURDIDEX.md) fija los contratos propuestos y el [plan de etapas](PLAN_ETAPAS_TXURDIDEX.md) define los diez cortes con sus pruebas.

El catálogo local evoluciona a filtros y favoritos, componentes, dos cortes comparables de HTTP y un corte de equipo persistente. A continuación llegan dos cortes de Router y dos de Pinia. JSON Server permanece en las etapas que usan el equipo. El tema 7 conserva sus prácticas autónomas.

La fase 3 comienza tras la revisión y aprobación del profesor. Su primer incremento será el catálogo local con el kit inicial de recursos autorizados.
