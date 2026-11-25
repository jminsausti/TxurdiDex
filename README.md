# TxurdiDex

Aplicación didáctica incremental de Vue 3 para 2.º DAW. En la etapa
`tema-01-catalogo` se muestran cuatro Pokémon con datos locales y tarjetas
adaptables al ancho de pantalla.

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
`src/App.vue` reúne la lógica y la plantilla del catálogo. En una copia de
trabajo, añade registros con IDs distintos y reutiliza los marcadores locales.

ProductoGest y la Pokédex de referencia, atribuida a Laura Folgado Galache,
sirvieron para estudiar la progresión de los apuntes.
