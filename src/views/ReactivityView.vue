<script setup lang="ts">
import CodeContainer from '@/components/CodeContainer.vue'
import ViewNav from '@/components/ViewNav.vue'

import { refDemo, reactiveDemo } from '@/snippets/demo'
</script>

<template>
  <main>
    <ViewNav>
      <h1>Reactivity Fundamentals</h1>
    </ViewNav>
    <CodeContainer>
      {{ refDemo }}
    </CodeContainer>
    <CodeContainer>
      {{ reactiveDemo }}
    </CodeContainer>
  </main>
</template>

<style scoped></style>
