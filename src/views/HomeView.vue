<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavButton from '../components/NavButton.vue'
</script>

<template>
  <main>
    <h1>Welcome!</h1>
    <p>Let's explore some bootleg documentation</p>
    <div>
      <RouterLink
        class="router-link"
        to="/reactivity"
        customer
        v-slot="{ navigate, href, isActive }"
      >
        <NavButton :href="href" :active="isActive" @click="navigate"
          >Reactivity Fundamentals</NavButton
        >
      </RouterLink>
      <RouterLink class="router-link" to="/computed" customer v-slot="{ navigate, href, isActive }">
        <NavButton :href="href" :active="isActive" @click="navigate">Computer Properties</NavButton>
      </RouterLink>
      <RouterLink class="router-link" to="/bindings" customer v-slot="{ navigate, href, isActive }">
        <NavButton :href="href" :active="isActive" @click="navigate"
          >Class and Style Bindings</NavButton
        >
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
div {
  padding-top: 4vh;
}
main {
  text-align: center;
}
</style>
