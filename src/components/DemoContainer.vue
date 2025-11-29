<script setup lang="ts">
const demoVisible = defineModel<boolean>('demoVisible', { default: false })

const toggleVisibility = () => {
  demoVisible.value = !demoVisible.value
}
</script>

<template>
  <div class="demo-container" @click="toggleVisibility">
    <pre v-if="!demoVisible">
      <code>
				<slot />
			</code>
    </pre>
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  border-radius: 8px;
  padding-inline: 1rem;
  overflow-x: auto;
  margin: 1rem;
  overflow-x: auto;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  border: 1px;
  border-style: solid;
}
code {
  color: white;
}
.demo-container:hover {
  color: #ff2c8b;
}
.demo-container:hover code {
  color: #ff2c8b;
}
</style>
