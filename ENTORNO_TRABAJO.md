# Entorno de trabajo

## Preparar un segundo ordenador

Necesitas Git, VS Code y acceso en GitHub a los cuatro repositorios. Los comandos usan SSH, igual que los remotos del entorno verificado. Configura una clave SSH en GitHub con acceso a los repositorios antes de clonar.

Desde la carpeta que elijas para tus proyectos, crea una carpeta común con cuatro clones hermanos.

```bash
mkdir -p Vue_2026-27
cd Vue_2026-27

git clone --branch vue-txurdidex-2026-27 git@github.com:DAW-Resources-FPTxurdinaga/Vuejs_Apuntes_es-eu.git Vuejs_Apuntes_es-eu
git clone --branch main git@github.com:jminsausti/ProductoGest-Vue.git productogest-vue
git clone --branch main git@github.com:jminsausti/Vuejs_pokedex.git Vuejs_pokedex
git clone --branch main git@github.com:jminsausti/TxurdiDex.git TxurdiDex

code .
```

Si el comando `code` no está disponible, usa **Archivo → Abrir carpeta** en VS Code y selecciona la carpeta común `Vue_2026-27`. Ejecuta Git en el repositorio correspondiente mediante `git -C carpeta` desde esa raíz o abre una terminal dentro del repositorio.

Las ramas de trabajo son `main` en TxurdiDex y `vue-txurdidex-2026-27` en los apuntes. Conserva `vue-2026-27` intacta. Los clones de ProductoGest y Pokédex se consultan en `main` como referencias de solo lectura. Los commits de partida están registrados en [ESTADO_PROYECTO.md](ESTADO_PROYECTO.md). Si una referencia remota ha avanzado, puedes inspeccionar el commit registrado con `git -C carpeta show COMMIT`.

## Antes de trabajar

1. Lee la documentación de control y comprueba la fase, la rama activa y los cambios locales. Si hay trabajo pendiente o una rama distinta de la prevista, revísalo antes de integrar cambios.
2. En los repositorios editables, cuando la fase permita sincronizar, actualiza desde GitHub con avance rápido únicamente. Así una divergencia requiere revisión explícita. Los comandos siguientes se ejecutan desde la carpeta común y cada actualización se usa cuando corresponda a la fase.

```bash
git -C TxurdiDex status --short --branch
git -C TxurdiDex pull --ff-only origin main

git -C Vuejs_Apuntes_es-eu status --short --branch
git -C Vuejs_Apuntes_es-eu pull --ff-only origin vue-txurdidex-2026-27
```

Si Git rechaza el avance rápido, revisa los cambios locales y remotos antes de resolver la divergencia. Durante la fase 0 basta con las comprobaciones locales de Git.

## Dependencias de Node.js

Cuando una fase requiera ejecutar una aplicación, abre una terminal en la carpeta que contiene su `package.json`. Consulta la versión de Node.js indicada por el proyecto, por ejemplo en `.nvmrc` o en `engines` dentro de `package.json`. Con nvm y un archivo `.nvmrc`, puedes seleccionar la versión con `nvm install` y `nvm use`.

Con un `package-lock.json` existente, usa `npm ci` para instalar las versiones registradas. Si un proyecto editable usa npm y todavía carece de fichero de bloqueo, usa `npm install` cuando la fase autorice crearlo. En un clon de referencia, utiliza el fichero de bloqueo para evitar modificar los manifiestos. Mantén `node_modules/` ignorado por Git y versiona el fichero de bloqueo de la aplicación cuando corresponda.

## Al finalizar

1. Revisa `git status --short --branch` y `git diff` en cada repositorio editado. Abre también los archivos nuevos, que aún no aparecen en el diff ordinario.
2. Ejecuta las validaciones de la fase. Al cerrar una fase, actualiza `TxurdiDex/ESTADO_PROYECTO.md` con los resultados y la próxima tarea.
3. Si está autorizado guardar los cambios en Git, selecciona los archivos con `git add -- ruta/al/archivo`, revisa `git diff --cached` y crea un commit descriptivo en el repositorio correspondiente. Crea etiquetas para los incrementos validados según el plan aprobado.
4. Cuando esté autorizada la subida, comprueba `git remote -v` y la rama activa. Usa `git push origin main` dentro de TxurdiDex o `git push origin vue-txurdidex-2026-27` dentro de los apuntes. Para publicar una etiqueta autorizada, usa `git push origin NOMBRE_ETIQUETA`.

## Retomar el trabajo con Codex

Abre la carpeta común y pide a Codex que lea `TxurdiDex/AGENTS.md`, `TxurdiDex/ESTADO_PROYECTO.md`, `TxurdiDex/PLAN_DESARROLLO.md` y `TxurdiDex/ENTORNO_TRABAJO.md`. Indica la tarea de la sesión. Codex debe comprobar el estado Git local y partir de la próxima tarea registrada dentro del alcance autorizado. Los documentos creados en la fase 0 estarán disponibles mediante el clon en otro equipo cuando se incorporen a Git y se suban a GitHub.
