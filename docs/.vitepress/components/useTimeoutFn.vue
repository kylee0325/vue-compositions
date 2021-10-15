<template>
  <p>Is callback executed?: {{ executed }}</p>
  <a-button @click="start">restart</a-button>
  <a-button @click="stop">stop</a-button>
</template>
<script>
import { ref } from 'vue'
import { useTimeoutFn } from '../../../src'
export default {
  setup() {
    const executed = ref(false)
    const { start, stop } = useTimeoutFn(() => {
      executed.value = true
    })
    return {
      executed,
      start: () => {
        executed.value = false
        start()
      },
      stop
    }
  }
}
</script>
