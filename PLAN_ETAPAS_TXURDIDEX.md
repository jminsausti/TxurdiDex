# Plan de etapas de TxurdiDex

**Fase 2 · Borrador para aprobación docente**

La secuencia corresponde al [diseño didáctico](DISENO_DIDACTICO_TXURDIDEX.md) y adopta los contratos del [diseño técnico](DISENO_TECNICO_TXURDIDEX.md). Las diez etiquetas son nombres previstos. Cada una representará un árbol completo, funcional e instalable de forma independiente. Los cambios descritos son futuros.

## Validación y distribución comunes

1. Obtener una copia limpia de la etiqueta en una carpeta propia y comprobar Node/npm según el README. Ejecutar `npm ci`, `npm run dev` y `npm run build`. Revisar el resultado con `npm run preview` y comprobar que el lockfile queda intacto. Repetir al actualizar herramientas o elegir una versión nueva de dependencia.
2. Desde la etapa de equipo, preparar `db.json` a partir de `db.seed.json` y ejecutar `npm run equipo` en otra terminal. Confirmar que no requiere instalaciones globales, descargas en el arranque ni estado de otra etiqueta.
3. Comprobar las pruebas específicas y una regresión de interacciones anteriores. Probar con teclado y un ancho móvil representativo. Desde Fetch, recorrer el modo de aula con la red externa bloqueada y desde el equipo con loopback disponible.
4. Verificar equivalencia de enunciado, práctica y resultado en ES/EU. La guía de cada práctica apunta al código inicial y a la solución validada, con la misma etiqueta o ZIP inmutable en ambos idiomas. El primer kit incluye datos, CSS, estructura inicial y recursos con permisos. Los cortes posteriores parten de la etiqueta anterior y el alumnado recibe instrucciones para trabajar sobre su copia.
5. Confirmar que un ZIP descargado contiene el lockfile, los recursos y la guía de arranque, y que el README identifica comandos, versión, modo de aula y restauración de datos cuando correspondan. Las etiquetas y descargas se crearán y compartirán en las fases autorizadas.

## 1. `tema-01-catalogo`

- **Punto de partida y cambios.** Repositorio documental y kit inicial. Añadir esqueleto Vite y catálogo local.
- **Objetivo y conceptos.** Montar una vista desde datos. Vite, Vue 3, SFC, `<script setup>`, interpolación, atributos y listas con clave.
- **Dependencias.** Vue 3, Vite y plugin oficial Vue. Base común de Node/npm validada.
- **Ficheros.** `index.html`, `vite.config.js`, `src/main.js`, `src/App.vue`, `src/data/pokemon.js`, `src/assets/`, `package.json`, `package-lock.json`, `.nvmrc` y `README.md`.
- **Resultado y aceptación.** Cuatro tarjetas con nombre, imagen local o marcador, número y tipos. Diseñadas para móvil y escritorio. Arranque sin red externa tras instalar dependencias.
- **Pruebas.** Contar tarjetas e IDs, bloquear Internet, comprobar que CSS e imágenes cargan, añadir dos registros en una copia y verificar que el DOM los representa.

## 2. `tema-02-fundamentos`

- **Punto de partida y cambios.** `tema-01-catalogo`. Añadir texto, estados, filtros AND por nombre/tipo, limpieza, favoritos y contadores en el orden 2.1–2.10.
- **Objetivo y conceptos.** Entender estado fuente y derivado. `ref`, `computed`, `v-model`, directivas, eventos y clases dinámicas. En ejemplos autónomos, ciclo de vida, `reactive` y `watch`.
- **Dependencias.** Base de la etapa 01.
- **Ficheros.** `src/App.vue`, estilos y textos de la etapa, `src/data/pokemon.js` si se amplían los datos y `README.md`.
- **Resultado y aceptación.** Los filtros se combinan. Limpiar restaura la lista y conserva favoritos. Contadores exactos y estado visible sin coincidencias. Favoritos sobreviven a los filtros y se reinician al recargar.
- **Pruebas.** Probar consulta con espacios y mayúsculas, un Pokémon de dos tipos, intersección vacía, limpieza, alternar favorito filtrado y recargar. Conservar el ejercicio de películas por separado.

## 3. `tema-03-componentes`

- **Punto de partida y cambios.** `tema-02-fundamentos`. Extraer primero la presentación de tarjeta y después conectar sus eventos y los del buscador con selector integrado.
- **Objetivo y conceptos.** Reutilizar SFC y comunicar padre/hijo. Props, emits y responsabilidades.
- **Dependencias.** Base de la etapa 01.
- **Ficheros.** Añadir `src/components/PokemonCard.vue` y `PokemonSearch.vue`. Modificar `src/App.vue` y `README.md`.
- **Resultado y aceptación.** Los hijos presentan, reciben props y emiten cambios. `App.vue` sigue siendo dueño del estado y del filtro.
- **Pruebas.** Repetir casos de 02. Inspeccionar flujo de props/eventos, comprobar que varias tarjetas reutilizan el mismo SFC y que no se mutan props.

## 4. `tema-04-fetch`

- **Punto de partida y cambios.** `tema-03-componentes`. Sustituir la fuente por PokeAPI y ofrecer modo de aula local con el mismo contrato.
- **Objetivo y conceptos.** Pasar a GET asíncrono, leer JSON, comprobar `response.ok`, normalizar y distinguir carga, error, vacío y reintento.
- **Dependencias.** Base de la etapa 01 y Fetch del navegador.
- **Ficheros.** Añadir `src/api/catalogo.js` y `src/api/normalizarPokemon.js`. Modificar `src/data/pokemon.js`, `src/App.vue`, estilos de estados y `README.md`.
- **Resultado y aceptación.** La selección de cuatro funciona en red o con fixture. Hasta cuatro GET de datos por carga, cero al filtrar y cero externos en modo de aula. Se conservan favoritos y filtros.
- **Pruebas.** Contar peticiones, simular fallo HTTP y de red, verificar reintento, cargar fixture vacío de prueba, comprobar imagen ausente y cambiar de origen durante una solicitud.

## 5. `tema-04-axios`

- **Punto de partida y cambios.** `tema-04-fetch`. Cambiar el transporte por Axios y mantener la normalización y la interfaz.
- **Objetivo y conceptos.** Comparar respuesta y error de los clientes. Configuración de URL base, GET, `data` y timeout. Rick and Morty se conserva como ejercicio independiente.
- **Dependencias.** Base de la etapa 01 y Axios.
- **Ficheros.** Modificar `src/api/catalogo.js`, `package.json`, `package-lock.json` y `README.md`. Ajustar en `src/App.vue` los mensajes si procede.
- **Resultado y aceptación.** El adaptador entrega el mismo contrato y respeta la selección, los estados y el modo de aula. La interfaz explica el timeout y permite reintentar.
- **Pruebas.** Comparar el objeto normalizado de cada cliente para respuestas equivalentes. Simular HTTP fallido, red desconectada, timeout y reintento correcto.

## 6. `tema-04-equipo-http`

- **Punto de partida y cambios.** `tema-04-axios`. Añadir panel de equipo en la misma pantalla y cliente Axios para la API local.
- **Objetivo y conceptos.** Distinguir consulta pública de escritura local. GET, POST, PATCH y DELETE en interfaz, PUT en laboratorio, IDs y validaciones.
- **Dependencias.** Base, Axios y JSON Server con versión exacta validada. Mantenerlos en las siguientes etapas.
- **Ficheros.** Añadir `src/api/equipo.js`, `src/components/PokemonTeam.vue` y `db.seed.json`. Actualizar `src/App.vue`, `PokemonCard.vue`, CSS, `README.md`, `.gitignore`, manifiesto y lockfile. `db.json` se prepara localmente.
- **Resultado y aceptación.** Seis posiciones, altas únicas por `pokemonId`, mote editable y borrado por ID local. El catálogo sigue operativo si la API local falla. La base conserva los cambios al recargar.
- **Pruebas.** Alta y edición con red externa bloqueada. Rechazar duplicado y un séptimo miembro distinto con una base desechable de seis. Impedir doble envío, comprobar baja y recuperar un puesto. Detener y reanudar el servidor, reconciliar tras fallo ambiguo, verificar asignación de ID. Con base desechable, comprobar PUT frente a PATCH y restaurar semilla.

## 7. `tema-05-router`

- **Punto de partida y cambios.** `tema-04-equipo-http`. Convertir catálogo, detalle, equipo y 404 en vistas. Mantener estado en el raíz.
- **Objetivo y conceptos.** Crear rutas nombradas, enlaces y vista dinámica por ID. `RouterView`, `RouterLink`, parámetro reactivo y respuesta vigente.
- **Dependencias.** Base, Axios, JSON Server y Vue Router.
- **Ficheros.** Añadir `src/router/index.js` y las cuatro vistas descritas en el diseño técnico. Modificar `src/App.vue`, `src/main.js`, `PokemonCard.vue`, adaptador de catálogo, CSS, Vite, manifiesto, lockfile y `README.md`.
- **Resultado y aceptación.** Navegación declarativa, detalle con imagen, tipos, unidades y barras, equipo editable y 404. Volver al catálogo conserva filtros y favoritos. Detalle reutiliza datos cargados o consulta bajo demanda.
- **Pruebas.** Abrir URL directa, recargar, usar atrás/adelante y comprobar recursos en subruta. Probar ID inválido, ID inexistente, ruta desconocida, caché, detalle en aula y cambio rápido de ID con respuesta anterior lenta. Confirmar CRUD, filtros y favoritos después de navegar.

## 8. `tema-05-completo`

- **Punto de partida y cambios.** `tema-05-router`. Añadir «Ver siguiente» desde el detalle cuando haya siguiente ID en la selección.
- **Objetivo y conceptos.** Elegir navegación programática frente a declarativa según la interacción. `useRouter`, `router.push` e historial.
- **Dependencias.** Las mismas que en `tema-05-router`.
- **Ficheros.** Modificar `src/views/PokemonDetalleView.vue` y `README.md`; incorporar estilo de foco si hace falta.
- **Resultado y aceptación.** El botón funciona por teclado, actualiza parámetro y conserva la navegación existente. Se omite al final de la selección o fuera de ella.
- **Pruebas.** Avanzar varios IDs, volver mediante historial, comprobar caso final y fuera de selección. Repetir la prueba de respuesta obsoleta y visitar equipo.

## 9. `tema-06-favoritos`

- **Punto de partida y cambios.** `tema-05-completo`. Migrar solo favoritos a Pinia y quitar su estado y mutaciones del raíz.
- **Objetivo y conceptos.** Resolver estado compartido con state, getters, acciones síncronas y `storeToRefs`. El store de favoritos carece de peticiones.
- **Dependencias.** Base, Axios, JSON Server, Vue Router y Pinia.
- **Ficheros.** Añadir `src/stores/favoritos.js`. Modificar `src/main.js`, `src/App.vue`, catálogo y detalle, manifiesto, lockfile y `README.md`.
- **Resultado y aceptación.** Catálogo, detalle y cabecera leen los mismos favoritos. Recargar reinicia favoritos. Vista propia de favoritos y `localStorage` quedan como ampliaciones.
- **Pruebas.** Alternar el mismo ID desde ambas vistas, comprobar recuento y ausencia de duplicados, recargar y verificar que el equipo y su API siguen operativos.

## 10. `tema-06-pinia`

- **Punto de partida y cambios.** `tema-06-favoritos`. Mover al store el equipo, reglas de escritura, estados y llamadas al cliente existente.
- **Objetivo y conceptos.** Compartir estado persistente y gestionar acciones asíncronas con Axios y JSON Server.
- **Dependencias.** Las mismas que en `tema-06-favoritos`, incluido JSON Server.
- **Ficheros.** Añadir `src/stores/equipo.js`. Modificar `src/App.vue`, catálogo, detalle y equipo, y `README.md`. Mantener el cliente, la semilla y el script de servidor.
- **Resultado y aceptación.** Una única fuente reactiva del equipo. Cabecera, detalle y vista de equipo reflejan operaciones confirmadas. Lo persistido se recupera del servidor; los favoritos siguen siendo independientes.
- **Pruebas.** Alta desde catálogo y detalle, edición y baja desde equipo, límites y duplicados, cambio de vista y recarga. Probar error de carga y escritura, doble envío y reconciliación, con y sin acceso externo. Comprobar que una respuesta antigua no modifica un estado más reciente.
