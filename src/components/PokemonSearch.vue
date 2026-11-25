<script setup>
// App.vue conserva los valores de los dos controles y las opciones del selector.
defineProps({
  busqueda: { type: String, required: true },
  tipoSeleccionado: { type: String, required: true },
  tiposDisponibles: { type: Array, required: true }
})

const emit = defineEmits(['cambiar-busqueda', 'cambiar-tipo', 'limpiar-filtros'])

function cambiarBusqueda(evento) {
  // Como v-model, esperamos a que termine la composición de texto.
  if (evento.isComposing) return
  emit('cambiar-busqueda', evento.target.value)
}

function cambiarTipo(evento) {
  emit('cambiar-tipo', evento.target.value)
}
</script>

<template>
  <div class="filtros">
    <div class="campo">
      <label for="busqueda">Nombre</label>
      <input
        id="busqueda"
        :value="busqueda"
        type="search"
        placeholder="Ej. Pikachu"
        @input="cambiarBusqueda"
        @compositionend="cambiarBusqueda"
      >
    </div>
    <div class="campo">
      <label for="tipo">Tipo</label>
      <select id="tipo" :value="tipoSeleccionado" @change="cambiarTipo">
        <option value="">Todos los tipos</option>
        <option v-for="tipo in tiposDisponibles" :key="tipo" :value="tipo">{{ tipo }}</option>
      </select>
    </div>
    <button type="button" class="limpiar" @click="emit('limpiar-filtros')">Limpiar filtros</button>
  </div>
</template>
