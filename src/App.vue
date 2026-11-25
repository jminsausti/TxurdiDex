<script setup>
import { computed, ref } from 'vue'
import PokemonCard from './components/PokemonCard.vue'
import PokemonSearch from './components/PokemonSearch.vue'
import { pokemonIniciales } from './data/pokemon.js'

// Con ref, Vue vuelve a dibujar la lista si añadimos o quitamos registros.
const pokemons = ref([...pokemonIniciales])

// El padre conserva el estado que comparten la búsqueda y el catálogo.
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

// Los eventos de los controles actualizan el estado del padre.
function actualizarBusqueda(texto) {
  busqueda.value = texto
}

function actualizarTipo(tipo) {
  tipoSeleccionado.value = tipo
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

    <PokemonSearch
      :busqueda="busqueda"
      :tipo-seleccionado="tipoSeleccionado"
      :tipos-disponibles="tiposDisponibles"
      @cambiar-busqueda="actualizarBusqueda"
      @cambiar-tipo="actualizarTipo"
      @limpiar-filtros="limpiarFiltros"
    />

    <p v-show="busqueda === '' && tipoSeleccionado === ''" class="pista">
      Puedes combinar el nombre y el tipo.
    </p>
    <p class="recuento" aria-live="polite">Resultados: {{ pokemonsVisibles.length }} de {{ pokemons.length }}</p>

    <p v-if="pokemons.length === 0" class="sin-resultados">El catálogo está vacío.</p>
    <p v-else-if="pokemonsVisibles.length === 0" class="sin-resultados">No hay coincidencias.</p>
    <ul v-else class="catalogo">
      <!-- La clave estable permite a Vue identificar cada tarjeta de la lista. -->
      <PokemonCard
        v-for="pokemon in pokemonsVisibles"
        :key="pokemon.id"
        :pokemon="pokemon"
        :favorito="esFavorito(pokemon.id)"
        @alternar-favorito="alternarFavorito"
      />
    </ul>
  </main>
</template>
