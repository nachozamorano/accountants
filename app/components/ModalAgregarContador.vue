<template>
    <div v-if="show" class="modal-backdrop" @click.self="close">
        <div class="modal-card">
            <h3>Agregar contador</h3>
            <input v-model="name" placeholder="Nombre" @keyup.enter="confirm" :maxlength="lengthName" />
            <div class="row-actions">
                <button class="btn btn-primary" @click="confirm" :disabled="!name.trim() || name.length > lengthName">Agregar</button>
                <button class="btn btn-ghost" @click="close">Cancelar</button>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'

const props = defineProps<{ show: boolean }>()
const store = useStore()
const name = ref('')
const lengthName = ref(20)

function close() { store.commit('setShowModal', false) }
function confirm() {
    const t = name.value?.trim()
    if (!t) return
    store.commit('addCounter', t)
    store.commit('setShowModal', false)
    name.value = ''
}
</script>


<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2000;
  padding: 16px;
}

.modal-card {
  background: var(--surface);
  padding: 24px 20px;
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 360px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.modal-card h3 {
  margin: 0;
  font-size: 1.25rem;
  color: var(--text);
  font-weight: 600;
  text-align: center;
}

.modal-card input {
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(15,23,36,0.1);
  font-size: 1rem;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.modal-card input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 4px 12px rgba(37,99,235,0.1);
}

.modal-card input:invalid {
  border-color: var(--danger);
}

.row-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 8px;
}

.row-actions .btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  filter: grayscale(50%);
}
</style>