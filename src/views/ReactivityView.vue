<script setup lang="ts">
import ViewNav from '@/components/ViewNav.vue'

const codeBlockRef = `
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const count: Ref<number> = ref(0)

  function increment() {
    count.value++
  }

  <button @click="increment">
    {{ count }}
  </button>`

const codeBlockReactive = `
  import { reactive } from 'vue'

  interface State {
    count: number
  }

  const state: State = reactive({ count: 0 })

  <button @click="state.count++">
    {{ state.count }}
  </button>
`
</script>

<template>
  <main>
    <ViewNav>
      <h1>Reactivity Fundamentals</h1>
    </ViewNav>
    <div>
      <pre class="code-container">
        <code>
          {{ codeBlockRef }}
        </code>
     </pre>
    </div>
    <div>
      <pre class="code-container">
        <code>
          {{ codeBlockReactive }}
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
.code-container {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1rem;
  overflow-x: auto;
}
code {
  font-size: 0.9rem;
  color: #000019;
}
span {
  display: flex;
}
</style>
