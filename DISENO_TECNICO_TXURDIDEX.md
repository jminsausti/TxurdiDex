# Diseño técnico de TxurdiDex

**Fase 2 · Borrador para aprobación docente**

## Arquitectura y estructura acumulativa

Una aplicación Vue 3 en JavaScript con Composition API y `<script setup>`. La plantilla consume datos normalizados y estado reactivo. Se extraen componentes, módulos de HTTP, vistas y stores cuando el temario los introduce. Quedan fuera la autenticación, los frameworks CSS y las bibliotecas de componentes.

| Etapas | Ficheros y carpetas que se incorporan o cambian de responsabilidad | Estado y dependencias |
| --- | --- | --- |
| 01–02 | `index.html`, `vite.config.js`, `src/main.js`, `src/App.vue`, `src/data/pokemon.js`, `src/assets/` con CSS e imágenes autorizadas o marcadores, `package.json`, `package-lock.json`, `.nvmrc` | Datos locales, filtros y favoritos en el raíz según la etapa. Vue, Vite y plugin oficial de Vue |
| 03 | `src/components/PokemonCard.vue`, `PokemonSearch.vue` | Presentación y eventos por props/emits. El padre conserva datos, mutaciones y filtrado |
| 04 Fetch | `src/api/catalogo.js`, `src/api/normalizarPokemon.js`, `src/data/pokemon.js` como datos de aula enriquecidos | `App.vue` coordina el estado HTTP. Fetch nativo |
| 04 Axios | Se reemplaza el transporte en `src/api/catalogo.js` | Axios se añade al manifiesto y lockfile. Mismo normalizador, fixture y UI |
| 04 equipo HTTP | `src/api/equipo.js`, `src/components/PokemonTeam.vue`, `db.seed.json`. `db.json` de trabajo se genera localmente y se ignora en Git | `App.vue` posee el estado de equipo y las operaciones. JSON Server, dependencia de desarrollo exacta, se mantiene en 05 y 06 |
| 05 Router | `src/router/index.js`, `src/views/CatalogoView.vue`, `PokemonDetalleView.vue`, `EquipoView.vue`, `NotFoundView.vue` | Vue Router. `App.vue` conserva catálogo, filtros, favoritos, modo de aula y equipo. Las vistas activas reciben datos y emiten cambios mediante el slot de `RouterView` |
| 05 completo | Cambia `PokemonDetalleView.vue` y documentación | `router.push` sobre la misma tabla de rutas. Mismas dependencias |
| 06 favoritos | `src/stores/favoritos.js` y registro en `src/main.js` | Pinia. IDs de favoritos en memoria. Componentes leen state/getters mediante `storeToRefs` y llaman acciones síncronas |
| 06 Pinia | `src/stores/equipo.js`, adaptación de vistas y cabecera | El store posee todo el equipo, carga, estado de escritura y errores. Axios sigue encapsulado en `src/api/equipo.js` |

### Vite y entorno de aula

Configuración mínima del plugin de Vue y scripts `dev`, `build` y `preview`. Usar importaciones de imágenes y CSS desde `src/assets/` para que Vite resuelva las rutas. En 04 equipo HTTP, añadir `npm run equipo` para arrancar el binario instalado de JSON Server en loopback, puerto 3000, en una segunda terminal. Se propone una URL local por defecto y una variable pública `VITE_EQUIPO_API_URL` si hubiera que cambiar el puerto. Verificar CORS desde Vite y preview. Los datos del equipo son de práctica y cada alumno trabaja con su propio fichero.

**Candidato de aula** — Node 24 LTS, con Node `24.16.0` y npm `12.2.0` como primera combinación de prueba, observada en este ordenador. Node 24 es compatible sobre el papel con los rangos de los dos proyectos de referencia, con Vite 8 y con el rango declarado por npm 12.2.0. La distribución oficial de Node 24.16.0 incorpora npm 11.13.0, así que se debe comprobar también npm y documentar cómo se obtiene la versión elegida. La serie 22 sigue siendo una alternativa si el aula la exige. Con npm 12.2.0 se estudiaría desde 22.22.2, que también satisface el mínimo 22.18.0 de ProductoGest. La elección final dependerá de la prueba en los equipos del aula. [Node.js 24.16.0](https://nodejs.org/en/download/archive/v24.16.0) · [Manifiesto de npm 12.2.0](https://raw.githubusercontent.com/npm/cli/v12.2.0/package.json) · [Vite 8](https://es.vite.dev/blog/anunciando-vite8)

Probar en un equipo de aula representativo la compatibilidad real de Node, npm, Vite y su plugin, Axios, JSON Server, Vue Router y Pinia. Tomar Vue 3 con Vite 8, Vue Router 4 y Pinia 3 como familias candidatas y verificar sus versiones compatibles antes de fijar el manifiesto. Fijar el parche de Node validado en `.nvmrc`, registrar las versiones comprobadas en el README y conservar el lockfile en cada etapa. En un clon limpio, comprobar `npm ci`, arranque y build, además del script de equipo desde que exista. En esta fase solo se observaron las versiones locales.

### Rutas y estado en la transición a Router

| Ruta | Nombre | Comportamiento |
| --- | --- | --- |
| `/` | `catalogo` | El catálogo es la portada. Una página de inicio separada queda fuera del recorrido base |
| `/pokemon/:id` | `pokemon-detalle` | ID entero positivo. Mostrar número, imagen, tipos, altura, peso y estadísticas disponibles. En formas alternativas identificar el número como ID de PokeAPI |
| `/equipo` | `equipo` | Seis posiciones y operaciones del tema HTTP |
| `/:pathMatch(.*)*` | `no-encontrada` | 404 de navegación con enlace al catálogo |

Mantener filtros y favoritos al ir al detalle y volver. El raíz conserva el equipo hasta el segundo corte de Pinia y pasa datos y callbacks a las vistas pertinentes. El detalle puede alternar favoritos y, cuando haya un Pokémon válido cargado, solicitar su alta en el equipo. En 05 completo, «Ver siguiente» navega con `router.push` al siguiente ID de la selección original del catálogo, en el orden de los datos. Mantiene `RouterLink` para el resto de la navegación. Se omite el botón si el ID queda fuera de la selección o no tiene siguiente.

Para detalle, observar el parámetro con ejecución inicial. Leer datos conocidos primero y consultar un ID nuevo en modo remoto. Al cambiar el parámetro o el origen de datos, invalidar la petición anterior con un identificador de solicitud. Solo la vigente puede actualizar datos, error o indicador de carga. Al desmontar la vista, invalidar la solicitud activa. Dejar la cancelación de red como ampliación. Probar también que una URL sin recurso y una ruta inexistente presentan mensajes distintos.

Usar `createWebHistory(import.meta.env.BASE_URL)` y configurar la `base` de Vite para el destino. La propuesta de alojamiento requiere reescritura a `index.html` para rutas de la SPA, manteniendo el servicio normal de recursos. Si el alojamiento disponible carece de reescritura, someter a aprobación URLs con hash. Probar ruta directa, recarga y recursos bajo subruta antes de autorizar distribución. [Vite y rutas base](https://vite.dev/guide/build.html) · [Modos de historial de Vue Router](https://router.vuejs.org/guide/essentials/history-mode.html)

## Pokémon y catálogo público

### Modelo de vista

| Campo | Tipo | Origen y validación |
| --- | --- | --- |
| `id` | entero positivo | `id` de PokeAPI y clave de tarjeta/ruta/favorito. Coherente con el solicitado y único en catálogo |
| `nombre` | cadena no vacía | `name`. Mostrar nombre visible a partir de este dato |
| `tipos` | lista de IDs de tipo | `types[].type.name`; ordenar por posición y traducir la etiqueta en UI/documentación. Si faltan, lista vacía y estilo neutro |
| `imagenUrl` | cadena o `null` | Activo local autorizado, URL de imagen aprobada o `null`. El componente resuelve el marcador o error de carga |
| `alturaM`, `pesoKg` | número o `null` | Convertir decímetros y hectogramos a metros y kilogramos. Mostrar «Sin datos» si faltan |
| `estadisticas` | lista de `{ clave, valor }` | `stats[].stat.name` y `base_stat`. Omitir entradas inválidas. Mostrar valor numérico y barra con una escala común explícita, sin ocultar valores fuera de rango |

01–03 solo usan los campos necesarios para las tarjetas. El fixture de aula incorpora los campos de detalle al preparar HTTP. El normalizador exige identidad y nombre válidos y tolera campos opcionales ausentes. Para las imágenes remotas aprobadas, elegir arte oficial si está disponible y luego sprite aprobado. Si ambos faltan, la descarga falla o el uso no está autorizado, usar un marcador local sin repetir la misma carga fallida. Los favoritos son una lista de IDs, independiente del catálogo y del equipo. El filtrado por nombre opera sobre la colección cargada, con espacios exteriores recortados y sin distinguir mayúsculas. El tipo coincide con cualquiera de los tipos del Pokémon.

### Consumo, alternativas y modo de aula

- **Elegido para el recorrido base.** Mantener cuatro IDs conocidos (1, 4, 7 y 25) en orden estable. Pedir `GET /api/v2/pokemon/{id}/` para cada ID desde `https://pokeapi.co`. Cada respuesta trae nombre, tipos e imagen potencial. Modelar primero un GET y luego un bucle secuencial con `await` para ampliar a cuatro. El límite es cuatro intentos de datos por carga o reintento, sin GET de listado. Las descargas de imágenes, si se habilitan, son independientes. Filtrar, limpiar y marcar favoritos jamás dispara peticiones. En 05 reutilizar datos del catálogo o de un detalle ya consultado en memoria, separados por origen. Si no hay entrada para el ID, pedir el detalle bajo demanda. [PokéAPI v2](https://pokeapi.co/v2)
- **Alternativas valoradas.** Un único GET del listado trae referencias con nombre y URL. Para mantener tipos necesita un dataset local auxiliar o más consultas, y mezclar fuentes añade sincronización. Consultar por tipo daría listas grandes y acoplaría el filtro a la red. Mantener selección fija simplifica el contrato. Paralelismo acotado, paginación y búsqueda global quedan como ampliaciones separadas.
- **Fetch y Axios.** `cargarCatalogo` entrega la misma lista normalizada con ambos clientes. Fetch revisa `response.ok` y luego interpreta JSON. Axios lee `data`, diferencia respuesta HTTP y fallo de red, configura base y propone timeout de 5 s por petición. Evitar encabezados de cuerpo en GET. Mantener las operaciones de equipo en un cliente distinto con su propia URL base. Validar timeout y tiempos de aula antes de fijarlos. [Configuración de Axios](https://axios.rest/pages/advanced/request-config)
- **Aula sin Internet.** Selector accesible de origen «PokeAPI» o «Datos de aula», un solo valor vigente en el raíz. El arranque de aula puede elegir local antes de hacer la primera petición mediante la opción inicial propuesta `VITE_CATALOGO_ORIGEN=aula`, documentada en el README de etapa. El fixture incluye los mismos IDs, tipos, datos adecuados al detalle y recursos locales. En aula se hacen cero peticiones a PokeAPI y cero descargas de imágenes externas. Un ID fuera de la colección muestra «No disponible en los datos de aula». JSON Server sigue funcionando por loopback. La instalación previa de dependencias requiere acceso al registro o caché preparada. Comprobar el modo de aula con red externa bloqueada y loopback disponible.

### Estados y recuperaciones

- **Catálogo.** Distinguir carga inicial, carga correcta con datos, colección vacía, filtro sin coincidencias y error. Quitar de la vista datos de otro origen al cambiarlo. Una carga inicial parcial se considera fallida y se ofrece reintento manual o modo aula. Al reintentar el mismo origen con datos confirmados del catálogo, conservarlos con un aviso si falla. Desactivar el botón de carga mientras exista una solicitud vigente. Los resultados obsoletos se descartan al cambiar el origen.
- **Detalle.** Mostrar carga con el ID actual, validar el parámetro antes del GET y separar 404, red, timeout y dato inválido. Mantener el marcador local y los mensajes de campos ausentes. No mostrar el dato del ID anterior al cambiar de URL.
- **Equipo.** Distinguir carga inicial, lista vacía y error. Mantener catálogo y detalle disponibles si se detiene JSON Server. Durante una escritura, bloquear el resto de escrituras, conservar los datos y el borrador de edición hasta confirmación y mostrar el fallo junto a la operación. Si el resultado es incierto, volver a consultar antes de repetir una escritura. Evitar que una lectura anterior a una mutación reponga estado obsoleto. En 06 esta coordinación pertenece al store.

## Equipo y API local

Colección `equipo` en JSON Server. Candidato `1.0.0-beta.15`, fijado sin rango después de comprobar sus operaciones y CLI. La documentación v1 declara IDs de cadena generados por el servidor. El modelo propuesto distingue `id` local, cadena opaca, de `pokemonId`, entero de la API pública. Guardar `nombre` como copia legible aunque falle PokeAPI, y `mote` como cadena opcional representada por `""` cuando se borra. Como propuesta para el formulario, recortar espacios y limitar el mote a 24 caracteres. El puesto visual deriva del orden de la colección devuelta y no se guarda. [JSON Server v1.0.0-beta.15](https://github.com/typicode/json-server/tree/v1.0.0-beta.15)

| Operación | Ruta | Petición y efecto esperado en el cliente |
| --- | --- | --- |
| GET | `/equipo` | Leer colección y pintar seis posiciones, completando con huecos. Usar también para reconciliar resultados inciertos |
| POST | `/equipo` | Enviar `pokemonId`, `nombre` y `mote`, omitiendo `id`. Incorporar el registro confirmado con su ID local |
| PATCH | `/equipo/:id` | Enviar solo `{ mote }`. Actualizar con la respuesta confirmada y comprobar que los demás campos se conservan |
| DELETE | `/equipo/:id` | Tras éxito HTTP, retirar el registro por ID local sin depender del cuerpo de respuesta |
| PUT, laboratorio | `/equipo/:id` | Usar una base desechable. Leer el registro, sustituir sus campos editables, omitir deliberadamente un campo para observar el reemplazo, consultar de nuevo y contrastar con PATCH. Restaurar la semilla |

La interfaz comprueba el límite de seis y la unicidad por `pokemonId` sobre una lista confirmada y bloquea altas duplicadas mientras hay una escritura en curso. La baja libera un lugar. Para probar el límite con un catálogo de cuatro, preparar en una copia desechable seis integrantes válidos cuyos IDs de Pokémon no incluyan al candidato al alta. El laboratorio verifica asignación y tipo de ID, semántica de PUT/PATCH, cuerpos, códigos y persistencia con la versión elegida. Restaurar la práctica desde `db.seed.json` con el servidor detenido y sobre un fichero de trabajo que se pueda descartar. Un servidor real tendría que imponer las mismas reglas de forma atómica y validar IDs, permisos y datos de todas las peticiones. JSON Server es un simulador local para una sesión de aula, con datos de práctica. Si una lectura revela datos incoherentes por edición externa, indicar el problema y evitar altas hasta reconciliar la base.

## Identidad visual y recursos

- **01.** Cabecera TxurdiDex con nombre visible, fondo claro y contraste alto. Cuadrícula adaptable de una columna en móvil y más en pantallas anchas. Tarjetas con espacio fijo cuadrado para imágenes, nombre, número Pokédex y etiquetas de tipo con texto y color. Clases fijas en las tarjetas iniciales y selectores CSS por atributo de tipo. El alumnado enlaza el atributo con el mismo binding que usa para la imagen. El kit incluye maqueta HTML, CSS convencional, datos, imágenes autorizadas o marcadores propios, tipografía del sistema y textos base. El alumnado enlaza datos y repite la tarjeta.
- **02–04.** Entregar estilos, marcado base y textos para buscador, selector, favoritos y estados. Enlazar la clase de favorito después de explicar `:class`. Botón con etiqueta accesible y `aria-pressed`, estado visible también sin color, foco visible, controles de tamaño cómodo y mensajes de carga/error identificables. El alumnado desarrolla filtros, eventos, estados HTTP y formularios; el kit aporta la estructura responsiva de los seis puestos.
- **05–06.** Entregar HTML/CSS para navegación, detalle y barras de estadísticas con etiquetas y números legibles. El alumnado enlaza parámetros, datos, anchos de barras, equipo y contadores. El detalle mantiene una representación textual con contraste y navegación por teclado. Evitar animaciones requeridas para comprender el estado.
- **Procedencia.** Preparar un registro por recurso con autor, origen, permiso o licencia, alcance y atribución. Conservar la mención a Laura Folgado Galache como autora atribuida en la Pokédex de referencia y distinguir esa mención de los permisos necesarios. Los marcadores propios y el CSS original permiten una primera entrega mientras se resuelven permisos. Someter a revisión también las URLs externas de imágenes, los datos distribuidos y el uso de marca. La consulta de PokeAPI y la licencia del software de la API carecen por sí solas de autorización sobre el arte.

## Validación y riesgos

| Riesgo | Prueba o decisión antes de aceptar la etapa |
| --- | --- |
| Incompatibilidad de Node, npm, lockfile o dependencias | Clon limpio representativo, verificar versiones y ejecutar `npm ci`, desarrollo y build sin cambios de lockfile. Validar cada corte |
| Dependencia de PokeAPI o imágenes | Contar GET, probar HTTP fallido, timeout, dato inválido y marcador. Verificar recorrido completo sin Internet con recurso local |
| Desfase de respuestas o estado duplicado | Forzar respuesta anterior lenta, cambiar ID/origen, volver al catálogo y comprobar que el estado vigente manda. En 06 verificar una fuente por colección |
| Escritura ambigua o discrepancias de JSON Server | Probar GET/POST/PATCH/DELETE, PUT de laboratorio, persistencia, ID de cadena y fallo con servidor detenido. Verificar recarga y segunda lectura tras una mutación |
| Acceso directo y despliegue en subruta | Probar ruta directa y recarga en preview y, cuando esté autorizado, en el alojamiento elegido |
| Divergencia ES/EU o derechos inciertos | Comparar pasos, ejercicios y resultados por par. Entregar solo ficheros con procedencia resuelta |
| Sobrecarga conceptual | Recorrer cada práctica desde la etiqueta anterior y confirmar que sus dependencias y conceptos ya se han presentado |

## Decisiones pendientes

Aprobar la selección fija de cuatro y la política de fixture e imágenes. Confirmar recursos, atribución y permisos del kit. Validar el par Node/npm y las versiones concretas con un clon de aula. Confirmar JSON Server beta, forma del ID y semántica de PUT, límite de mote y restauración. Confirmar el modo de historial según alojamiento y el alcance de las ampliaciones de paginación, vista de favoritos y `localStorage`. Los criterios por entrega se concretan en el [plan de etapas](PLAN_ETAPAS_TXURDIDEX.md).
