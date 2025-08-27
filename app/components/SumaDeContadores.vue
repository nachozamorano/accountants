<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const total = computed(() => store.getters.totalSum)
const count = computed(() => store.state.counters.length)
</script>

<template>
  <div class="suma">
    <div class="suma-item">
      <span class="label">Suma Total</span>
      <strong class="value">{{ total }}</strong>
    </div>
    <div class="suma-item">
      <span class="label">Contadores</span>
      <strong class="value">{{ count }}</strong>
    </div>
  </div>
</template>

<style scoped>
.suma {
  display: flex;
  gap: 36px;
  align-items: center;
  background: linear-gradient(180deg, #ffffff, #f9f9fb);
  border-radius: var(--radius-lg);
  box-shadow: 0 6px 18px rgba(16,24,40,0.06);
  padding: 16px 24px;
  font-size: 1rem;
  transition: box-shadow var(--transition-fast);
}

.suma:hover {
  box-shadow: 0 10px 24px rgba(16,24,40,0.12);
}

.suma-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
  align-self: center;
}

.label {
  font-size: 0.9rem;
  color: var(--muted);
  font-weight: 500;
}

@media (max-width: 600px) {
  .suma {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
  .suma-item {
    align-items: flex-start;
  }
  .value {
    align-self: flex-start;
  }
}
</style>
