# TxurdiDex

Aplicación didáctica incremental de Vue 3 para 2.º DAW. La etapa
`tema-01-catalogo` muestra cuatro Pokémon con datos locales. La etapa
`tema-02-fundamentos` añade cuatro más, búsqueda por nombre, filtro por tipo y
favoritos en memoria. La búsqueda y el tipo se combinan. Limpiar filtros
conserva los favoritos, que se reinician al recargar la página.

La etapa de componentes separa la tarjeta y los controles de búsqueda
en dos componentes reutilizables. El catálogo sigue funcionando con los
mismos datos y controles.

## Ejecutar en local

Usa la versión de Node indicada en `.nvmrc` (24.16.0, comprobada con npm 12.2.0).
Desde esta carpeta:

```bash
npm ci
npm run dev
```

Abre la URL que imprime Vite. Tras instalar las dependencias, el catálogo
funciona sin acceso a Internet. Para compilar y revisar el resultado:

```bash
npm run build
npm run preview
```

## Material para la práctica

`src/data/pokemon.js` contiene los registros. `src/assets/` incluye el CSS y
marcadores de tipo originales de TxurdiDex, creados para la práctica. Son
símbolos geométricos de los tipos, sin ilustraciones de Pokémon de terceros.

- `src/App.vue` conserva el catálogo, los resultados, los filtros y los favoritos.
- `src/components/PokemonCard.vue` recibe un Pokémon y su estado de favorito.
  Al pulsar la estrella, envía el ID de ese Pokémon al padre.
- `src/components/PokemonSearch.vue` recibe los valores y las opciones de
  filtrado. Comunica los cambios de nombre y tipo y la acción de limpiar.

ProductoGest y la Pokédex de referencia, atribuida a Laura Folgado Galache,
sirvieron para estudiar la progresión de los apuntes.
