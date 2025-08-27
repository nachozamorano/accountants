<template>
  <div class="listador">
    <div class="search-bar">
      <input type="text" v-model="search" placeholder="Buscar contador..." />
    </div>
    <div v-if="!counters.length" class="empty-state">
      <p>No tienes contadores aún.</p>
      <button class="btn btn-primary" @click="openModal">Crear contador</button>
    </div>

    <transition-group name="fade" tag="div" class="listador-inner" v-else>
      <div v-for="c in counters" :key="c.id" class="contador-wrapper">
        <Contador :counter="c" />
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import Contador from '~/components/Contador.vue'

const store = useStore()
const search = ref(store.state.searchQuery)

watch(search, (val) => {
  store.commit('setSearchQuery', val)
})

const counters = computed(() => store.getters.filteredCounters)

function openModal() {
  store.commit('setShowModal', true)
}
</script>

<style scoped>
.search-bar {
  margin-bottom: 16px;
}

.search-bar input {
  width: 100%;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(15, 23, 36, 0.1);
  font-size: 1rem;
  outline: none;
  transition: all 0.2s;
}

.search-bar input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.listador-inner {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contador-wrapper {
  display: block;
}

/* Animación */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.9);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.listador {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.empty-state {
  text-align: center;
  padding: 32px;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}

.empty-state p {
  font-size: 1rem;
}

.empty-state .btn {
  padding: 10px 24px;
}
</style>
