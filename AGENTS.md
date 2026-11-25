# Instrucciones para trabajar en TxurdiDex

TxurdiDex es la aplicación incremental de Vue 3 para el módulo Desarrollo Web en Entorno Cliente de 2.º de DAW. Sustituirá a ProductoGest como hilo práctico de los apuntes bilingües de Vue.js.

## Inicio y cierre de sesión

- Al iniciar una sesión, lee este archivo, [ESTADO_PROYECTO.md](ESTADO_PROYECTO.md), [PLAN_DESARROLLO.md](PLAN_DESARROLLO.md) y [ENTORNO_TRABAJO.md](ENTORNO_TRABAJO.md). Comprueba la rama, el estado Git y el alcance autorizado antes de editar.
- Al finalizar cada fase, actualiza `ESTADO_PROYECTO.md` con la fecha, la fase, el estado de los repositorios, las tareas realizadas, las decisiones adoptadas y pendientes, las incidencias, las comprobaciones y la siguiente tarea concreta.

## Repositorios

| Carpeta respecto a TxurdiDex | Repositorio en GitHub | Rama | Uso |
| --- | --- | --- | --- |
| `.` | `jminsausti/TxurdiDex` | `main` | Aplicación y documentación de control |
| `../Vuejs_Apuntes_es-eu` | `DAW-Resources-FPTxurdinaga/Vuejs_Apuntes_es-eu` | `vue-txurdidex-2026-27` | Apuntes que se editarán en la fase de adaptación |
| `../productogest-vue` | `jminsausti/ProductoGest-Vue` | `main` | Referencia de solo lectura |
| `../Vuejs_pokedex` | `jminsausti/Vuejs_pokedex` | `main` | Referencia de solo lectura |

Mantén intacta la rama original `vue-2026-27` de los apuntes. Consulta los dos proyectos de referencia sin editar sus archivos ni cambiar sus ramas, commits o etiquetas. Respeta los cambios locales ajenos y los límites de la fase activa.

## Criterios didácticos y de programación

- Prioriza el aprendizaje de Vue sobre la complejidad funcional. Alinea cada incremento con la secuencia real de los apuntes y con los conocimientos previos del alumnado.
- Usa Vue 3 con Composition API y `<script setup>` en los componentes. Sigue las convenciones del código existente y usa nombres descriptivos para componentes, funciones y estado.
- Escribe comentarios didácticos que expliquen qué concepto se practica y por qué se aplica en ese punto. Introduce abstracciones, dependencias y tecnologías cuando el temario las requiera.
- Mantén separadas la teoría y las prácticas. Conserva los ejercicios independientes que sigan siendo válidos.
- Mantén equivalentes en castellano y euskera los enunciados, pasos, ejemplos y resultados esperados de la documentación del alumnado. Actualiza ambas versiones en la misma fase y comprueba su correspondencia.
- Excluye el uso de un fichero de usuarios y contraseñas en el frontend como ejemplo de autenticación segura.

## Validación y control de versiones

- Revisa el alcance con `git status` y `git diff`. Para una fase documental, comprueba los requisitos, las rutas relativas y los enlaces entre documentos.
- Cuando exista la aplicación, ejecuta las comprobaciones disponibles del proyecto y recorre la práctica desde su punto de partida. Valida los flujos y los estados que correspondan a la etapa, incluidas carga y error cuando se introduzcan.
- En los apuntes, comprueba la navegación, los enlaces a las versiones, la equivalencia ES/EU y que la práctica solo exija conceptos ya introducidos.
- Registra los resultados y las comprobaciones pendientes en `ESTADO_PROYECTO.md`.
- Usa commits descriptivos y etiqueta en Git los incrementos didácticos validados para que puedan reproducirse. La planificación de temas y etiquetas se concretará tras la auditoría.
- Revisa la rama, el remoto y los cambios antes de guardar o publicar versiones. Mantén `node_modules` fuera del control de versiones. Realiza commits, etiquetas, subidas y despliegues cuando estén autorizados para la fase.
