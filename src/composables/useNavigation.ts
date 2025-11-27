import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { routes } from '@/router'

export function useNavigation() {
  const route = useRoute()

  const routeOrder = routes.map((r) => r.path)

  const nextRoute = computed(() => {
    const currentIndex = routeOrder.indexOf(route.path)
    if (currentIndex === -1 || currentIndex === routeOrder.length - 1) {
      return routeOrder[1]
    }
    return routeOrder[currentIndex + 1]
  })

  return {
    nextRoute,
  }
}
