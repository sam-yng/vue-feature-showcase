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
  <a class="button" :href="href" :class="{ active }" @click="onClick">
    <slot />
  </a>
</template>

<style scoped>
.button {
  text-align: center;
  border: 1px;
  border-color: 000019;
  border-style: solid;
  background-color: white;
  color: #000019;
  text-decoration: none;
  border-radius: 10px;
}
.button:hover {
  color: white;
  background-color: #000019;
}
</style>
