import { ref, readonly, DeepReadonly, Ref } from 'vue-demi'
import { tryOnUnmounted } from './util'

export interface ITimeoutResult {
  ready: DeepReadonly<Ref<boolean>>
  start: () => void
  stop: () => void
}

export function useTimeout(delay = 1000, immediate = true): ITimeoutResult {
  const ready = ref(false)
  let timer: any
  const stop = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }
  const initTimeout = () => {
    ready.value = false
    stop()
    timer = window.setTimeout(() => {
      ready.value = true
      timer = null
    }, delay)
  }
  immediate && initTimeout()

  tryOnUnmounted(() => {
    stop()
  })

  return {
    ready: readonly(ready),
    start: () => initTimeout(),
    stop
  }
}
