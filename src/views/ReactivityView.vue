<script setup lang="ts">
import ViewNav from '@/components/ViewNav.vue'
</script>

<template>
  <main>
    <ViewNav>
      <h1>Reactivity Fundamentals</h1>
    </ViewNav>
    <div>
      <pre>
        <code>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
        </code>
     </pre>
    </div>
  </main>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
</style>
