<script setup lang="ts">
import NavButton from '@/components/NavButton.vue'
import { useNavigation } from '@/composables/useNavigation'

const { nextRoute } = useNavigation()
</script>

<template>
  <main>
    <RouterLink
      class="router-link"
      to="/"
      customer
      v-slot="{ navigate, href, isActive }"
      v-if="$route.path !== '/'"
    >
      <NavButton isReturn :href="href" :active="isActive" @click="navigate">Back</NavButton>
    </RouterLink>
    <slot />
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

<style scoped>
main {
  display: flex;
  justify-content: center;
}
</style>
