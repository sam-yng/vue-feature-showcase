<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavButton from '../components/NavButton.vue'
import NavContainer from '@/components/NavContainer.vue'
</script>

<template>
  <h1>Welcome!</h1>
  <p>Let's explore some bootleg documentation</p>
  <NavContainer>
    <RouterLink class="router-link" to="/reactivity" customer v-slot="{ navigate, href, isActive }">
      <NavButton :href="href" :active="isActive" @click="navigate"
        >Reactivity Fundamentals</NavButton
      >
    </RouterLink>
    <RouterLink class="router-link" to="/computed" customer v-slot="{ navigate, href, isActive }">
      <NavButton :href="href" :active="isActive" @click="navigate">Computer Properties</NavButton>
    </RouterLink>
    <RouterLink class="router-link" to="/" customer v-slot="{ navigate, href, isActive }">
      <NavButton :href="href" :active="isActive" @click="navigate"
        >Class and Style Bindings</NavButton
      >
    </RouterLink>
  </NavContainer>
</template>

<style scoped>
.router-link {
  text-decoration: none;
}
</style>
