<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

defineProps<{
  href: string
  active: boolean
  isReturn?: boolean
  isNext?: boolean
}>()

const emit = defineEmits(['click'])

const onClick = (e: MouseEvent) => {
  emit('click', e)
}
</script>

<template>
  <a
    :href="href"
    :class="{ active, 'return-next-button': isReturn || isNext, button: !isReturn && !isNext }"
    @click="onClick"
  >
    <FontAwesomeIcon class="icon-left" v-if="isReturn" :icon="faArrowLeft" />
    <slot />
    <FontAwesomeIcon class="icon-right" v-if="isNext" :icon="faArrowRight" />
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
.return-next-button {
  text-align: center;
  text-decoration: none;
  color: white;
}
.return-next-button:hover {
  color: #ff2c8b;
}
.icon-left {
  margin-right: 4px;
  max-width: 1vw;
}
.icon-right {
  margin-left: 4px;
  max-width: 1vw;
}
</style>
