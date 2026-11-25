<script setup>
import { ref } from 'vue'
import { pokemonIniciales } from './data/pokemon.js'

// Con ref, Vue vuelve a dibujar la lista si añadimos o quitamos registros.
const pokemons = ref([...pokemonIniciales])
</script>

<template>
  <header class="cabecera">
    <div class="contenedor cabecera-interior">
      <span class="marca-icono" aria-hidden="true">✦</span>
      <span class="marca">TxurdiDex</span>
    </div>
  </header>

  <main class="contenedor">
    <h1>Catálogo Pokémon</h1>

    <ul class="catalogo">
      <!-- La clave estable permite a Vue identificar cada tarjeta de la lista. -->
      <li v-for="pokemon in pokemons" :key="pokemon.id" class="tarjeta">
        <div class="ilustracion" :data-tipo="pokemon.tipos[0]">
          <span class="numero">#{{ String(pokemon.id).padStart(3, '0') }}</span>
          <!-- El marcador es decorativo. El nombre está escrito debajo. -->
          <img :src="pokemon.imagen" alt="" width="144" height="144">
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
