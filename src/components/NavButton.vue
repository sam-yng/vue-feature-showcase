<script setup lang="ts">
defineProps<{
  href: string
  active: boolean
  isReturn?: boolean
}>()

const emit = defineEmits(['click'])

const onClick = (e: MouseEvent) => {
  emit('click', e)
}
</script>

<template>
  <a
    :href="href"
    :class="{ active, 'return-button': isReturn, button: !isReturn }"
    @click="onClick"
  >
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
  padding: 15px;
}
.button:hover {
  color: white;
  background-color: #000019;
}
.return-button {
  text-align: center;
  text-decoration: none;
}
.return-button:hover {
  color: green;
}
</style>
