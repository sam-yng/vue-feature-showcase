<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavButton from './components/NavButton.vue'
import { useNavigation } from './composables/useNavigation'

const { nextRoute } = useNavigation()
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
