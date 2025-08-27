<template>
  <header class="app-header">
    <div class="header-content">
      <h1>Gestor de Contadores</h1>
      <p class="header-subtitle">Administra tus contadores de forma rápida y sencilla</p>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.app-header {
  padding: 18px 24px;
  background: linear-gradient(180deg, #ffffff, #f5f7fa);
  border-radius: var(--radius-md);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 24px;
}

.header-content h1 {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary);
}

.header-subtitle {
  margin: 0;
  font-size: 0.95rem;
  color: var(--muted);
  font-weight: 500;
}
</style>
