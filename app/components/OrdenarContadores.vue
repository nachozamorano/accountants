<template>
    <div class="orden">
        <label>Ordenar por</label>
        <select v-model="sortBy">
            <option value="name">Nombre</option>
            <option value="value">Valor</option>
        </select>
        <select v-model="sortDir">
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const sortBy = computed({
    get: () => store.state.sortBy,
    set: v => store.commit('setSortBy', v)
})
const sortDir = computed({
    get: () => store.state.sortDir,
    set: v => store.commit('setSortDir', v)
})
</script>