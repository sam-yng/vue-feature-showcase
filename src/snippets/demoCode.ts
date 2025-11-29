export const refDemoCode = `
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const count: Ref<number> = ref(0)

  function increment() {
    count.value++
  }

  <button @click="increment">
    {{ count }}
  </button>`

export const reactiveDemoCode = `
  import { reactive } from 'vue'

  interface State {
    count: number
  }

  const state: State = reactive({ count: 10 })

  <button @click="state.count++">
    {{ state.count }}
  </button>
`
