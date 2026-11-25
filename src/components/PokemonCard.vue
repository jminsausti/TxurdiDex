<script setup>
// Cada instancia recibe sus datos y el estado que calcula App.vue.
defineProps({
  pokemon: { type: Object, required: true },
  favorito: { type: Boolean, required: true }
})

// La tarjeta comunica el ID. El padre decide cómo cambiar el estado.
const emit = defineEmits(['alternar-favorito'])
</script>

<template>
  <li class="tarjeta">
    <div class="ilustracion" :data-tipo="pokemon.tipos[0]">
      <span class="numero">#{{ String(pokemon.id).padStart(3, '0') }}</span>
      <!-- El marcador es decorativo. El nombre está escrito debajo. -->
      <img :src="pokemon.imagen" alt="" width="144" height="144">
      <button
        type="button"
        class="favorito"
        :class="{ activo: favorito }"
        :aria-label="'Favorito: ' + pokemon.nombre"
        :aria-pressed="favorito"
        @click="emit('alternar-favorito', pokemon.id)"
      >
        <span aria-hidden="true">{{ favorito ? '★' : '☆' }}</span>
      </button>
    </div>
    <div class="ficha">
      <h2>{{ pokemon.nombre }}</h2>
      <ul class="tipos" aria-label="Tipos">
        <li v-for="tipo in pokemon.tipos" :key="tipo" :data-tipo="tipo">{{ tipo }}</li>
      </ul>
    </div>
  </li>
</template>
