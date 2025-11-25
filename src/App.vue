<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavButton from './components/NavButton.vue'
</script>

<template>
  <main>
    <h1>Welcome!</h1>
    <p>Let's explore some bootleg documentation</p>
    <RouterLink class="router-link" to="/home" customer v-slot="{ navigate, href, isActive }">
      <NavButton :href="href" :active="isActive" @click="navigate"> Home </NavButton>
    </RouterLink>
  </main>
</template>

<style scoped>
.router-link {
  text-decoration: none;
}

.navigation {
  display: flex;
  flex-direction: row;
}
</style>
