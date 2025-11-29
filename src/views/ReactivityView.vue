<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { reactive } from 'vue'

import DemoContainer from '@/components/DemoContainer.vue'
import ViewNav from '@/components/ViewNav.vue'
import { refDemoCode, reactiveDemoCode } from '@/snippets/demoCode'

interface ReactiveState {
  count: number
}

const refDemoCount: Ref<number> = ref(0)

const refIncrementDemo = () => {
  refDemoCount.value++
}

const reactiveState: ReactiveState = reactive({ count: 10 })
</script>

<template>
  <main>
    <ViewNav>
      <h1>Reactivity Fundamentals</h1>
    </ViewNav>
    <div>
      <DemoContainer :isDemo="false">
        {{ refDemoCode }}
      </DemoContainer>
      <DemoContainer :isDemo="true">
        <button @click="refIncrementDemo">
          {{ refDemoCount }}
        </button>
      </DemoContainer>
    </div>
    <div>
      <DemoContainer :isDemo="false">
        {{ reactiveDemoCode }}
      </DemoContainer>
      <DemoContainer :isDemo="true">
        <button @click="reactiveState.count++">
          {{ reactiveState.count }}
        </button>
      </DemoContainer>
    </div>
  </main>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
button {
  text-align: center;
  border: 1px;
  border-style: solid;
  background-color: white;
  color: #000019;
  text-decoration: none;
  border-radius: 10px;
  padding: 10px;
  margin: 1vw;
  min-width: 10vw;
}
button:hover {
  color: white;
  background-color: #ff2c8b;
}
</style>
