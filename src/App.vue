<script setup>
import { ref, computed } from 'vue'

const titulo = ref('TxurdiDex')
const pokemons = ref([
  { id: 1, nombre: 'Bulbasaur', tipo: 'Planta', imagen: './marcadores/planta.png' },
  { id: 4, nombre: 'Charmander', tipo: 'Fuego', imagen: './marcadores/fuego.png' },
  { id: 7, nombre: 'Squirtle', tipo: 'Agua', imagen: './marcadores/agua.png' },
  { id: 25, nombre: 'Pikachu', tipo: 'Eléctrico', imagen: './marcadores/electrico.png' }
])

const busqueda = ref('')

const pokemonsFiltrados = computed(() => {
  const texto = busqueda.value.trim().toLowerCase()
  return pokemons.value.filter(pokemon =>
    pokemon.nombre.toLowerCase().includes(texto)
  )
})

function limpiarBusqueda() {
  busqueda.value = ''
}
</script>

<template>
  <header><h1>{{ titulo }}</h1></header>
  <main>
    <h2>Catálogo Pokémon</h2>
    <p>Pokémon en el catálogo: {{ pokemons.length }}</p>
    <div class="buscador">
      <label for="buscar">Buscar Pokémon</label>
      <input id="buscar" v-model="busqueda" type="search" placeholder="Ej.: Pika">
      <button type="button" @click="limpiarBusqueda" :disabled="!busqueda">
        Limpiar búsqueda
      </button>
    </div>
    <p>Pokémon encontrados: {{ pokemonsFiltrados.length }}</p>
    <p v-if="pokemonsFiltrados.length === 0" role="status">No se han encontrado Pokémon.</p>
    <ul v-else>
      <li v-for="pokemon in pokemonsFiltrados" :key="pokemon.id" :data-tipo="pokemon.tipo" :title="pokemon.tipo">
        <div class="ilustracion">
          <span>#{{ pokemon.id }}</span>
          <img :src="pokemon.imagen" alt="" width="128" height="128">
        </div>
        <div class="ficha">
          <h3>{{ pokemon.nombre }}</h3>
          <p>{{ pokemon.tipo }}</p>
        </div>
      </li>
    </ul>
  </main>
</template>

<style scoped>
:global(html body) { display: block; place-items: normal; margin: 0; background: #f3f6fa; color: #12243a; font: 1rem/1.5 system-ui, sans-serif; }
:global(body #app) { display: block; max-width: none; margin: 0; padding: 0; }
header { padding: 1rem; background: #13283f; color: white; }
h1, h2, h3 { font-weight: 750; }
h1 { font-size: 2rem; }
h1, main { max-width: 72rem; margin: auto; }
main { padding: 2rem 1rem; }
h2 { margin: 0 0 1.25rem; font-size: clamp(2rem, 5vw, 3rem); }
ul { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 13rem), 1fr)); gap: 1rem; margin: 0; padding: 0; list-style: none; }
li { overflow: hidden; border: 1px solid #dbe4ed; border-radius: 1rem; background: white; box-shadow: 0 4px 12px #13283f12; }
.ilustracion { position: relative; display: grid; place-items: center; padding: 1.25rem; background: var(--tono, #e6ecf3); }
.ilustracion span { position: absolute; top: .75rem; left: .75rem; font-weight: bold; }
.ficha { padding: 1rem; }
h3 { margin: 0 0 .5rem; }
.ficha p { display: inline-block; margin: 0; padding: .25rem .65rem; border-radius: 1rem; background: var(--tono, #e6ecf3); }
[data-tipo="Planta"] { --tono: #d6edce; }
[data-tipo="Fuego"] { --tono: #ffe3d3; }
[data-tipo="Agua"] { --tono: #d5eafb; }
[data-tipo="Eléctrico"] { --tono: #fff0b4; }
.buscador { display: flex; flex-wrap: wrap; align-items: center; gap: .75rem; margin-block: 1rem; }
.buscador input { box-sizing: border-box; width: min(100%, 19rem); border: 1px solid #64748b; border-radius: .5rem; padding: .5rem .75rem; font: inherit; }
.buscador button { border: 1px solid #13283f; border-radius: .5rem; padding: .5rem .75rem; background: #13283f; color: white; font: inherit; cursor: pointer; }
.buscador button:disabled { opacity: .65; cursor: not-allowed; }
</style>
