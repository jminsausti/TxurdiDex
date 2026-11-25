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
- Antes de adaptar un tema, compara cada apartado ES/EU con su versión en la rama original `vue-2026-27`. Selecciona y mejora las explicaciones, ejemplos y ejercicios que ayuden a aprender el concepto.
- Presenta primero qué problema resuelve el concepto, su sintaxis y su funcionamiento. Parte del JavaScript que ya conoce el alumnado y compara con JavaScript vanilla cuando aclare la diferencia. Incluye ejemplos independientes y ejecutables como SFC, con comentarios didácticos, y anticipa los errores habituales. Propón una práctica autónoma cuando aporte valor.
- Aplica el concepto a TxurdiDex después de explicarlo. Usa el catálogo como práctica progresiva y conserva los ejercicios independientes. Ajusta la profundidad al nivel y evita incorporar funciones a la aplicación solo para ilustrar un concepto.
- Mantén el estilo de Material for MkDocs y emplea tablas, diagramas y admoniciones cuando ayuden a entender o consultar el contenido. Consulta la documentación oficial de Vue y conserva la numeración, los enlaces y la equivalencia ES/EU.
- Mantén equivalentes en castellano y euskera los enunciados, pasos, ejemplos y resultados esperados de la documentación del alumnado. Actualiza ambas versiones en la misma fase y comprueba su correspondencia.
- Excluye el uso de un fichero de usuarios y contraseñas en el frontend como ejemplo de autenticación segura.

## Prácticas incrementales

- Parte de la etiqueta anterior y construye cada incremento sobre el resultado del apartado previo. Explica qué se quiere conseguir, qué necesidad de la aplicación resuelve y qué concepto de Vue ya explicado se va a aplicar. Mantén los ejemplos independientes cuando el concepto carezca de una aplicación natural en TxurdiDex.
- Indica el fichero, el punto de inserción con un fragmento reconocible y el código que se añade, sustituye o elimina. Explica qué hace ese código en la aplicación y cómo se aprovechará el resultado en los apartados siguientes.
- Después de cada cambio significativo, indica qué acción probar y qué resultado observable esperar antes de continuar. Cuando sirvan para observar el estado, usa interpolaciones, mensajes, contadores, consola o datos temporales. Explica cuándo y por qué se retiran o se restauran. Incluye capturas reales de estados intermedios cuando ayuden a reconocer el resultado, con texto alternativo equivalente en ES/EU.
- Incluye en los apuntes todos los fragmentos y recursos de partida que requiere la práctica. Reserva los enlaces a la solución etiquetada para contrastar el resultado. Recorre las instrucciones ES/EU desde copias limpias, comprueba los estados intermedios y verifica que la aplicación final reproduce el funcionamiento de la etiqueta de destino.

## Validación y control de versiones

- Revisa el alcance con `git status` y `git diff`. Para una fase documental, comprueba los requisitos, las rutas relativas y los enlaces entre documentos.
- Cuando exista la aplicación, ejecuta las comprobaciones disponibles del proyecto y recorre la práctica desde su punto de partida. Valida los flujos y los estados que correspondan a la etapa, incluidas carga y error cuando se introduzcan.
- En los apuntes, comprueba la navegación, los enlaces a las versiones, la equivalencia ES/EU y que la práctica solo exija conceptos ya introducidos.
- Registra los resultados y las comprobaciones pendientes en `ESTADO_PROYECTO.md`.
- Guarda cada etapa validada en un commit descriptivo de TxurdiDex y crea su etiqueta Git sobre ese commit cuando la fase lo autorice.
- Usa la etiqueta de la etapa anterior como punto de partida de la siguiente práctica. Conserva el material inicial del tema 1, que precede a la primera etiqueta.
- Enlaza desde los apuntes ES/EU directamente al código fuente y al ZIP de GitHub de la etiqueta correspondiente. Usa siempre la etiqueta para representar una etapa concreta. Evita enlazar a `main` o guardar copias ZIP de las soluciones en MkDocs.
- Revisa la rama, el remoto y los cambios antes de guardar o publicar versiones. Mantén `node_modules` fuera del control de versiones. Realiza commits, etiquetas, subidas y despliegues cuando estén autorizados para la fase.
