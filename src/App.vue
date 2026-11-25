<script setup>
import { computed, ref } from 'vue'
import { pokemonIniciales } from './data/pokemon.js'

// Con ref, Vue vuelve a dibujar la lista si añadimos o quitamos registros.
const pokemons = ref([...pokemonIniciales])

// v-model sincroniza estos dos valores con los controles.
const busqueda = ref('')
const tipoSeleccionado = ref('')
const favoritos = ref([])

// computed deriva opciones y resultados sin modificar el catálogo.
const tiposDisponibles = computed(() => [...new Set(pokemons.value.flatMap(pokemon => pokemon.tipos))].sort())

const pokemonsVisibles = computed(() => {
  const consulta = busqueda.value.trim().toLowerCase()

  return pokemons.value.filter(pokemon => {
    const coincideNombre = pokemon.nombre.toLowerCase().includes(consulta)
    const coincideTipo = tipoSeleccionado.value === '' || pokemon.tipos.includes(tipoSeleccionado.value)
    return coincideNombre && coincideTipo
  })
})

// Los favoritos se guardan por ID. Filtrar una tarjeta no cambia su estado.
function esFavorito(id) {
  return favoritos.value.includes(id)
}

function alternarFavorito(id) {
  if (esFavorito(id)) {
    favoritos.value = favoritos.value.filter(favorito => favorito !== id)
  } else {
    favoritos.value.push(id)
  }
}

function limpiarFiltros() {
  busqueda.value = ''
  tipoSeleccionado.value = ''
}
</script>

<template>
  <header class="cabecera">
    <div class="contenedor cabecera-interior">
      <span class="marca-icono" aria-hidden="true">✦</span>
      <span class="marca">TxurdiDex</span>
      <span class="resumen-favoritos">Favoritos: {{ favoritos.length }}</span>
    </div>
  </header>

  <main class="contenedor">
    <h1>Catálogo Pokémon</h1>

    <div class="filtros">
      <div class="campo">
        <label for="busqueda">Nombre</label>
        <input id="busqueda" v-model="busqueda" type="search" placeholder="Ej. Pikachu">
      </div>
      <div class="campo">
        <label for="tipo">Tipo</label>
        <select id="tipo" v-model="tipoSeleccionado">
          <option value="">Todos los tipos</option>
          <option v-for="tipo in tiposDisponibles" :key="tipo" :value="tipo">{{ tipo }}</option>
        </select>
      </div>
      <button type="button" class="limpiar" @click="limpiarFiltros">Limpiar filtros</button>
    </div>

    <p v-show="busqueda === '' && tipoSeleccionado === ''" class="pista">
      Puedes combinar el nombre y el tipo.
    </p>
    <p class="recuento" aria-live="polite">Resultados: {{ pokemonsVisibles.length }} de {{ pokemons.length }}</p>

    <p v-if="pokemons.length === 0" class="sin-resultados">El catálogo está vacío.</p>
    <p v-else-if="pokemonsVisibles.length === 0" class="sin-resultados">No hay coincidencias.</p>
    <ul v-else class="catalogo">
      <!-- La clave estable permite a Vue identificar cada tarjeta de la lista. -->
      <li v-for="pokemon in pokemonsVisibles" :key="pokemon.id" class="tarjeta">
        <div class="ilustracion" :data-tipo="pokemon.tipos[0]">
          <span class="numero">#{{ String(pokemon.id).padStart(3, '0') }}</span>
          <!-- El marcador es decorativo. El nombre está escrito debajo. -->
          <img :src="pokemon.imagen" alt="" width="144" height="144">
          <button
            type="button"
            class="favorito"
            :class="{ activo: esFavorito(pokemon.id) }"
            :aria-label="'Favorito: ' + pokemon.nombre"
            :aria-pressed="esFavorito(pokemon.id)"
            @click="alternarFavorito(pokemon.id)"
          >
            <span aria-hidden="true">{{ esFavorito(pokemon.id) ? '★' : '☆' }}</span>
          </button>
        </div>
        <div class="ficha">
          <h2>{{ pokemon.nombre }}</h2>
          <ul class="tipos" aria-label="Tipos">
            <li v-for="tipo in pokemon.tipos" :key="tipo" :data-tipo="tipo">{{ tipo }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </main>
</template>
