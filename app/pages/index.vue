<template>
  <div class="app-wrapper">
    <main class="container">
      <section class="controls-row">
        <OrdenarContadores />
        <FiltrarContadores />
        <button class="btn btn-primary" @click="showModal = true" :disabled="count > 19">+ Agregar contador</button>
      </section>
      <ListadorDeContadores />
      <ModalAgregarContador v-model:show="showModal" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import OrdenarContadores from '~/components/OrdenarContadores.vue'
import FiltrarContadores from '~/components/FiltrarContadores.vue'
import ListadorDeContadores from '~/components/ListadorDeContadores.vue'
import ModalAgregarContador from '~/components/ModalAgregarContador.vue'

const store = useStore()
const showModal = computed({
  get: () => store.state.showModal,
  set: v => store.commit('setShowModal', v)
})
const count = computed(() => store.state.counters.length)
</script>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 71vh;
}

main.container {
  flex: 1;
  max-width: 1300px;
  margin: 18px auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.controls-row {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}
</style>
