# TxurdiDex

Aplicación didáctica incremental de Vue 3 para 2.º DAW. Esta versión inicial muestra cuatro Pokémon con datos locales y tarjetas
adaptables al ancho de pantalla.

## Ejecutar en local

Usa Node 22.18.0 o posterior de la rama 22, o Node 24.12.0 o posterior de la rama 24.
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

`src/App.vue` reúne los datos, la plantilla y el CSS. `public/marcadores/`
contiene los símbolos originales de TxurdiDex para los cuatro tipos. Puedes
reutilizarlos al añadir registros con IDs distintos.

ProductoGest y la Pokédex de referencia, atribuida a Laura Folgado Galache,
sirvieron para estudiar la progresión de los apuntes.
