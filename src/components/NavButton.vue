<script setup lang="ts">
defineProps<{
  href: string
  active: boolean
}>()

const emit = defineEmits(['click'])

const onClick = (e: MouseEvent) => {
  emit('click', e)
}
</script>

<template>
  <a class="tab" :href="href" :class="{ active }" @click="onClick">
    <slot />
  </a>
</template>

<style scoped>
.tab {
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px;
  border-color: 000019;
  border-style: solid;
  background-color: white;
  color: #000019;
  text-decoration: none;
}
</style>
