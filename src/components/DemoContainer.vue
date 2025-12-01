<script setup lang="ts">
const props = defineProps<{ isDemo: boolean }>()
</script>

<template>
  <div class="demo-container">
    <pre v-if="!props.isDemo">
      <code>
				<slot />
			</code>
    </pre>
    <div class="demo-contents" v-else>
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
  border: 1px;
  border-style: solid;
  padding-left: 2rem;
  padding-right: 2rem;
}
code {
  color: white;
}
.demo-contents {
  margin: auto;
}
/* .demo-container:hover {
  color: #ff2c8b;
}
.demo-container:hover code {
  color: #ff2c8b;
} */
</style>
