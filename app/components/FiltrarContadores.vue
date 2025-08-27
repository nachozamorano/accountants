<template>
  <div class="filtro">
    <label>Filtro</label>
    <select v-model="filterType">
      <option value="none">Sin filtro</option>
      <option value="greater">Mayor que</option>
      <option value="less">Menor que</option>
    </select>
    <input v-if="filterType !== 'none'" type="number" v-model.number="filterValue" />
    <button class="btn btn-danger" @click="clear">Borrar filtros</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const filterType = computed({
  get: () => store.state.filterType,
  set: v => store.commit('setFilterType', v)
})

const filterValue = computed({
  get: () => store.state.filterValue,
  set: v => store.commit('setFilterValue', v)
})

function clear() {
  store.commit('clearFilters')
}
</script>