# Plan de desarrollo de TxurdiDex

| Fase | Trabajo | Resultado y estado |
| --- | --- | --- |
| 0. Preparación del entorno | Verificar carpetas, ramas, remotos, commits y cambios locales. Crear los documentos de control. | Completada. Base versionada en `e5747a4`. |
| 1. Auditoría de los proyectos | Inventariar apuntes ES/EU, ProductoGest y Pokédex, requisitos previos y prácticas. | Completada. [Auditoría histórica](AUDITORIA_MIGRACION_TXURDIDEX.md) versionada en `a350896`. |
| 2. Diseño didáctico y funcional | Concretar alcance, progresión, objetivos y requisitos, arquitectura, aceptación y etiquetas. | Documentación elaborada y aplicada a los temas iniciales. |
| 3. Desarrollo incremental de TxurdiDex | Implementar y validar cada incremento con Vue 3, Composition API y `<script setup>`, en coordinación con la adaptación de ese tema. | Temas 1 y 2 implementados, etiquetados y disponibles en GitHub. Tema 3 pendiente. |
| 4. Adaptación de los apuntes ES/EU | Adaptar cada tema en `vue-txurdidex-2026-27` con el código real de su incremento. Mantener numeración, teoría separada y ejercicios autónomos. | Portada y temas 0–2 adaptados en ES/EU. Temas 3–7 pendientes. |
| 5. Validación técnica y didáctica | Reproducir prácticas desde etiquetas, comprobar aplicación, paridad ES/EU, navegación y descargas. | Validación de aula y del sitio generado con incidencias registradas. |
| 6. Publicación | Publicar versiones y apuntes una vez validados y autorizados. Verificar enlaces publicados. | Materiales accesibles y estado final registrado. |

## Trabajo coordinado por tema

Las fases 3 y 4 avanzan juntas. La etiqueta de la etapa anterior sirve de punto de partida para cada práctica. El tema 1 conserva su material inicial, que precede a la primera etapa etiquetada.

1. Implementar el incremento y validarlo desde una copia limpia. Guardar cada etapa validada en un commit de TxurdiDex y crear una etiqueta Git sobre ese commit cuando esté autorizado.
2. Adaptar el tema en castellano y euskera, con los mismos pasos, enlaces y resultados esperados. Enlazar directamente al código fuente y al ZIP de la etiqueta en GitHub mediante `/tree/<etiqueta>` y `/archive/refs/tags/<etiqueta>.zip`. Los enlaces de una etapa concreta apuntan siempre a su etiqueta. MkDocs conserva los enlaces y el material didáctico sin duplicar los ZIP de las soluciones.
3. Comprobar que los enlaces de cada etiqueta funcionan sin autenticación y que el ZIP se puede descargar y extraer. Verificar la equivalencia ES/EU y ejecutar `mkdocs build --strict`. Guardar los cambios de los apuntes en un commit independiente cuando esté autorizado.

## Diseño y secuencia

El [mapa](MAPA_DIDACTICO_TXURDIDEX.md) vincula apuntes e incrementos. El [diseño didáctico](DISENO_DIDACTICO_TXURDIDEX.md) indica qué se enseña y entrega por apartado. El [diseño técnico](DISENO_TECNICO_TXURDIDEX.md) fija los contratos propuestos y el [plan de etapas](PLAN_ETAPAS_TXURDIDEX.md) define los diez cortes con sus pruebas.

El catálogo local evoluciona a filtros y favoritos, componentes, dos cortes comparables de HTTP y un corte de equipo persistente. A continuación llegan dos cortes de Router y dos de Pinia. JSON Server permanece en las etapas que usan el equipo. El tema 7 conserva sus prácticas autónomas.

El próximo incremento será el tema 3, con la extracción de componentes y la adaptación simultánea de sus apuntes cuando se autorice. La publicación requiere revisión docente.
