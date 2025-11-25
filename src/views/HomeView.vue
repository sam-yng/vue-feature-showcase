<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavButton from '../components/NavButton.vue'
</script>

<template>
  <main>
    <h1>Welcome!</h1>
    <p>Let's explore some bootleg documentation</p>
    <section class="nav-row">
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
    </section>
    <section class="nav-row">
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
    </section>
  </main>
</template>

<style scoped>
.router-link {
  text-decoration: none;
}
.nav-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
