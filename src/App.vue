<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavButton from './components/NavButton.vue'
</script>

<template>
  <main class="view">
    <RouterLink
      class="router-link"
      to="/"
      customer
      v-slot="{ navigate, href, isActive }"
      v-if="$route.path !== '/'"
    >
      <NavButton isReturn :href="href" :active="isActive" @click="navigate">Back</NavButton>
    </RouterLink>
    <RouterView />
  </main>
</template>

<style scoped>
.view {
  padding: 4vw;
}
</style>
