# Mapa didáctico de TxurdiDex

Propuesta de la fase 1 para revisión del profesor. El [informe de auditoría](AUDITORIA_MIGRACION_TXURDIDEX.md) contiene las fuentes ES/EU, la clasificación por apartado y los criterios de validación.

| Tema | Conceptos y material que se conserva | Incremento propuesto | Dependencia nueva | Etiqueta candidata |
| --- | --- | --- | --- | --- |
| 0 · De JavaScript a Vue | Contador en JavaScript vanilla y Vue; estado y DOM declarativo | Presentar el hilo del curso | Vue por CDN en el ejemplo actual | — |
| 1 · Conceptos básicos | Vite, SFC, `script setup`, montaje y build | Cuatro Pokémon locales, datos y CSS de partida | Vue y Vite | `tema-01-catalogo` |
| 2 · Fundamentos | Directivas, formularios, ciclo de vida y reactividad. Películas como ejercicio autónomo | Buscar por nombre, limpiar y mostrar estado vacío; tipo y clase dinámica como ampliación | — | `tema-02-fundamentos` |
| 3 · Componentes | Ejemplos de saludo, props y eventos | Extraer tarjeta y buscador. El padre conserva el filtro | — | `tema-03-componentes` |
| 4.1–4.2 · HTTP con Fetch | Asincronía, REST, métodos y JSONPlaceholder | GET de PokeAPI acotado y fixture de aula. Carga, error, vacío y reintento | Fetch nativo | `tema-04-fetch` |
| 4.3–4.4 · Axios y práctica HTTP | Rick and Morty y los cuatro ejercicios de APIs públicas, incluido Pokémon por nombre/ID | Comparar Axios con Fetch. Si se aprueba, equipo local con GET, POST y DELETE en la interfaz y PUT/PATCH en un laboratorio | Axios; JSON Server si se aprueba el equipo persistente | `tema-04-axios`, `tema-04-equipo-http` opcional |
| 5 · Vue Router | SitioDemo para rutas básicas y avanzadas | Catálogo y detalle con URL por ID; vista de equipo si ya existe. 404 y navegación programática según el tiempo | Vue Router | `tema-05-router` |
| 6 · Pinia | Contador compartido, getters, acciones y `storeToRefs` | Equipo y contador compartidos entre vistas. Favoritos como alternativa o ampliación | Pinia | `tema-06-pinia` |
| 7 · Ejercicios | Lista de tareas, agenda y secuencia de personajes con HTTP → Router → Pinia | Prácticas autónomas del alumnado | Según ejercicio | — |

## Decisiones para la revisión

- **Escrituras en el tema 4.** Elegir entre equipo parcial, CRUD completo y laboratorio independiente. La variante parcial permite verificar persistencia sin adelantar Router ni Pinia.
- **Estado compartido en el tema 6.** Elegir equipo o favoritos y definir la persistencia. El uso de un fichero de usuarios y contraseñas queda excluido.
- **Material inicial.** Aprobar datos, CSS y recursos gráficos. La referencia atribuye el proyecto a Laura Folgado Galache. La reutilización publicable queda sujeta a permisos.
- **Aula y publicación.** Probar Node, lockfile, fixture sin red y acceso directo a rutas. Confirmar etiquetas, descargas, y ejercicios equivalentes en 6.2–6.4 en castellano y euskera.
