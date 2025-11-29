<script setup lang="ts">
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const props = defineProps<{
  href: string
  active: boolean
  isReturn?: boolean
  isNext?: boolean
}>()

const emit = defineEmits(['click'])

const isNavAction = computed(() => props.isReturn || props.isNext)

const onClick = (e: MouseEvent) => {
  emit('click', e)
}
</script>

<template>
  <a
    :href="href"
    :class="{ active, 'linear-nav-button': isNavAction, 'nav-button': !isNavAction }"
    @click="onClick"
  >
    <FontAwesomeIcon class="icon-left" v-if="isReturn" :icon="faArrowLeft" />
    <slot />
    <FontAwesomeIcon class="icon-right" v-if="isNext" :icon="faArrowRight" />
  </a>
</template>

<style scoped>
.nav-button {
  text-align: center;
  border: 1px;
  border-style: solid;
  background-color: #000019;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  padding: 15px;
  margin: 1vw;
}
.nav-button:hover {
  background-color: white;
  color: #000019;
}
.linear-nav-button {
  text-align: center;
  text-decoration: none;
  color: white;
}
.linear-nav-button:hover {
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
