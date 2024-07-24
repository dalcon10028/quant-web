import { markRaw, ref, watch, type Component } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '../ui/layouts/default-layout.vue'

interface UseLayout {
  layout: Component
}

export function useLayout(): UseLayout {
  const route = useRoute()
  const layout = ref<Component>()

  watch(
    () => route.meta?.layout as string | undefined,
    async (metaLayout) => {
      try {
        const component = metaLayout && (await import(`../ui/layouts/${metaLayout}-layout.vue`))
        layout.value = markRaw<Component>(component?.default || DefaultLayout)
      } catch (e) {
        console.warn(`Layout not found: ${metaLayout}`)
        console.log(e)
        layout.value = markRaw<Component>(DefaultLayout)
      }
    },
    { immediate: true }
  )

  return {
    layout
  }
}
