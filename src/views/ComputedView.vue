<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue'
import ViewNav from '@/components/ViewNav.vue'
import { computedDemoCode, prevComputedDemoCode } from '@/snippets/demoCode'

import { reactive, computed } from 'vue'

const authorDemo = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
})

const publishedBooksMessageDemo = computed(() => {
  return authorDemo.books.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <main>
    <ViewNav>
      <h1>Computed Properties</h1>
    </ViewNav>
    <div>
      <DemoContainer :isDemo="false">
        {{ computedDemoCode }}
      </DemoContainer>
      <DemoContainer :isDemo="true">
        <p>Has published books:</p>
        <span>{{ publishedBooksMessageDemo }}</span>
      </DemoContainer>
    </div>
    <div>
      <DemoContainer :isDemo="false">
        {{ prevComputedDemoCode }}
      </DemoContainer>
    </div>
  </main>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
</style>
