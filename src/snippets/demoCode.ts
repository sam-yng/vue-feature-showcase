export const refDemoCode = `
<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const count: Ref<number> = ref(0)

  function increment() {
    count.value++
  }
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>`

export const reactiveDemoCode = `
<script setup lang="ts">
  import { reactive } from 'vue'

  interface State {
    count: number
  }

  const state: State = reactive({ count: 10 })
</script>

<template>
  <button @click="state.count++">
    {{ state.count }}
  </button>
</template>`

export const computedDemoCode = `
<script setup>
  import { reactive, computed } from 'vue'

  const author = reactive({
    name: 'John Doe',
    books: [
      'Vue 2 - Advanced Guide',
      'Vue 3 - Basic Guide',
      'Vue 4 - The Mystery'
    ]
  })

  const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
  })
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>`

export const prevComputedDemoCode = `
import { ref, computed } from 'vue'

const count = ref(2)

const alwaysSmall = computed((previous) => {
  if (count.value <= 3) {
    return count.value
  }

  return previous
})`

export const bindObjectDemoCode = `
<script setup lang="ts">
  const isActive = ref(true)
  const error = ref(null)

  const classObject = reactive({
    active: true,
    'text-danger': false
  })

  // alternative with computed property
  const classObject = computed(() => ({
    active: isActive.value && !error.value,
    'text-danger': error.value && error.value.type === 'fatal'
  }))
</script>

<template>
  <div :class="classObject"></div>
</template>`

export const bindArrayDemoCode = `
<script setup lang="ts">
  const activeClass = ref('active')
  const errorClass = ref('text-danger')
</script>

<template>
  <div :class="[activeClass, errorClass]"></div>

  //conditionally
  <div :class="[{ [activeClass]: isActive }, errorClass]"></div>
</template>`

export const bindCompDemoCode = `
<p :class="$attrs.class">Hi!</p>
<span>This is a child component</span>

<MyComponent class="baz" />`
