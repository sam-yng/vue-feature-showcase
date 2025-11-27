<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import NavButton from './components/NavButton.vue'
import { routes } from './router'

const route = useRoute()

// Derive route order from router configuration
const routeOrder = routes.map((r) => r.path)

// Compute the next route
const nextRoute = computed(() => {
  const currentIndex = routeOrder.indexOf(route.path)
  if (currentIndex === -1 || currentIndex === routeOrder.length - 1) {
    return routeOrder[1] // No next route if current route not found or is last
  }
  return routeOrder[currentIndex + 1]
})
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
    <RouterView class="content" />
    <RouterLink
      class="router-link"
      :to="nextRoute!"
      customer
      v-slot="{ navigate, href, isActive }"
      v-if="$route.path !== '/'"
    >
      <NavButton isNext :href="href" :active="isActive" @click="navigate">Next</NavButton>
    </RouterLink>
  </main>
</template>

<style>
.view {
  padding: 4vw;
  display: flex;
}
.router-link {
  text-decoration: none;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
