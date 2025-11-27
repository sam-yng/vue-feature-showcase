<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 1vw;
  padding-top: 3vh;
}
</style>
