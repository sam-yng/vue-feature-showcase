<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import DemoContainer from '@/components/DemoContainer.vue'
import ViewNav from '@/components/ViewNav.vue'
import { refDemoCode, reactiveDemoCode } from '@/snippets/demoCode'

const refDemoVisible: Ref<boolean> = ref(false)
const reactiveDemoVisible: Ref<boolean> = ref(false)

const refDemoCount: Ref<number> = ref(0)

const refIncrementDemo = () => {
  refDemoCount.value++
}
</script>

<template>
  <main>
    <ViewNav>
      <h1>Reactivity Fundamentals</h1>
    </ViewNav>
    <DemoContainer v-model:demo-visible="refDemoVisible">
      <template v-if="!refDemoVisible">
        {{ refDemoCode }}
      </template>
      <template v-else>
        <button @click="refIncrementDemo">
          {{ refDemoCount }}
        </button>
      </template>
    </DemoContainer>
    <DemoContainer v-model:demo-visible="reactiveDemoVisible">
      <template v-if="!reactiveDemoVisible">
        {{ reactiveDemoCode }}
      </template>
      <template v-else>
        <h1>hello</h1>
      </template>
    </DemoContainer>
  </main>
</template>

<style scoped></style>
