export const refDemo = `
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const count: Ref<number> = ref(0)

  function increment() {
    count.value++
  }

  <button @click="increment">
    {{ count }}
  </button>`

export const reactiveDemo = `
  import { reactive } from 'vue'

  interface State {
    count: number
  }

  const state: State = reactive({ count: 0 })

  <button @click="state.count++">
    {{ state.count }}
  </button>
`
