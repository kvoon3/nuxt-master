import type { ShallowRef } from 'vue'

export function useScrollArea(container: ShallowRef<HTMLElement | null>) {
  const isAtBottom = shallowRef(true)

  const checkPosition = () => {
    if (!container.value)
      return

    const { scrollHeight, clientHeight, scrollTop } = container.value

    isAtBottom.value = scrollHeight - clientHeight <= scrollTop + 30
  }

  const scrollToBottom = async (options?: {
    smooth?: boolean
  }) => {
    const {
      smooth = true,
    } = options || {}

    if (!container.value)
      return

    await nextTick()

    const { scrollHeight, clientHeight } = container.value

    if (!smooth) {
      container.value.scrollTop = scrollHeight - clientHeight
      return
    }

    // TODO: use bezier curve
    const timer = setInterval(() => {
      if (!container.value)
        return

      container.value.onwheel = () => clearInterval(timer)

      container.value.scrollTop += 100

      if (container.value.scrollTop > scrollHeight - clientHeight)
        clearInterval(timer)
    }, 30)
  }

  watch(container, (el) => {
    if (!el)
      return

    el.addEventListener('scroll', () => {
      checkPosition()
    })
  }, {
    immediate: true,
  })

  onUpdated(() => {
    checkPosition()
  })

  return {
    isAtBottom,
    scrollToBottom,
  }
}
