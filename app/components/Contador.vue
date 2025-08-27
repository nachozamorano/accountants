<template>
  <div class="contador-card-visual">
    <div class="info">
      <span class="name">{{ counter.name }}</span>
    </div>
    <div class="counter-circle">
      <span class="value">{{ counter.value }}</span>
    </div>
    <div class="actions">
      <button class="icon-btn" @click="increment" title="Sumar" :disabled="counter.value >= 20">+</button>
      <button class="icon-btn" @click="decrement" title="Restar" :disabled="counter.value <= 0">-</button>
      <button class="icon-btn btn-danger" @click="remove" title="Eliminar">🗑️</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps<{ counter: { id: string; name: string; value: number } }>()
const store = useStore()


function increment() { store.commit('incrementCounter', props.counter.id) }
function decrement() { store.commit('decrementCounter', props.counter.id) }
function remove() { store.commit('removeCounter', props.counter.id) }
</script>

<style scoped>
.contador-card-visual {
  display: grid;
  grid-template-columns: 1fr 80px auto;
  align-items: center;
  padding: 16px 20px;
  border-radius: var(--radius-lg);
  background: linear-gradient(145deg, #ffffff, #f0f4ff);
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  border: 1px solid rgba(15,23,36,0.06);
  margin-bottom: 14px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contador-card-visual:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(37,99,235,0.12);
}

.info {
  justify-self: start;
}

.name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
}

.counter-circle {
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-100, #dbeafe);
  color: var(--primary);
  font-weight: 700;
  font-size: 1.2rem;
  border: 2px solid rgba(37,99,235,0.3);
  transition: background 0.2s ease;
}

.actions {
  display: flex;
  gap: 10px;
  justify-self: end;
}

/* Botones */
.icon-btn {
  padding: 8px 14px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  background: var(--surface);
  border: 1px solid rgba(15,23,36,0.1);
  color: var(--text);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
}

.icon-btn:hover {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 6px 18px rgba(37,99,235,0.12);
  transform: translateY(-1px);
}

.icon-btn:disabled {
  background: #f3f4f6;
  color: #9ca3af;
  cursor: not-allowed;
  box-shadow: none;
}

.icon-btn.btn-danger {
  width: 42px;
  height: 42px;
  padding: 0;
  border-radius: 50%;
  background: linear-gradient(180deg, var(--danger), #c53030);
  color: #fff;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(239,68,68,0.15);
}

.icon-btn.btn-danger:hover {
  filter: brightness(1.15);
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(239,68,68,0.2);
}

.icon-btn.btn-danger:active {
  transform: scale(0.95);
  box-shadow: 0 6px 12px rgba(239,68,68,0.15);
}

.icon-btn.btn-danger:disabled {
  background: linear-gradient(180deg, #fca5a5, #f87171);
  cursor: not-allowed;
  opacity: 0.65;
}
</style>
