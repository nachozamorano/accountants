<template>
  <Header />
  <nuxt-page />  
  <Footer />
  <ModalAgregarContador :show="store.state.showModal" />
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import ModalAgregarContador from '~/components/ModalAgregarContador.vue'
import { useStore } from 'vuex'

const store = useStore()
</script>