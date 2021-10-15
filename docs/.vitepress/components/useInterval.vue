<template>
  <p>{{ count }}</p>
  <a-button @click="clear">stop</a-button>
  <a-button @click="start">restart</a-button>
</template>

<script>
import { useInterval } from '../../../src'
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const [clear, start] = useInterval(() => {
      count.value++
    }, 1000)
    return {
      count,
      clear,
      start
    }
  }
}
</script>
