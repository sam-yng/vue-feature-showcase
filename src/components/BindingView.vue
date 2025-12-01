<script setup lang="ts">
import { bindArrayDemoCode, bindCompDemoCode, bindObjectDemoCode } from '@/snippets/demoCode'
import DemoContainer from './DemoContainer.vue'
import ViewNav from './ViewNav.vue'
</script>

<template>
  <main>
    <ViewNav>
      <h1>Class and Style Bindings</h1>
    </ViewNav>
    <div>
      <DemoContainer :isDemo="false">
        {{ bindObjectDemoCode }}
      </DemoContainer>
    </div>
    <div>
      <DemoContainer :isDemo="false">
        {{ bindArrayDemoCode }}
      </DemoContainer>
    </div>
    <div>
      <DemoContainer :isDemo="false">
        {{ bindCompDemoCode }}
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
