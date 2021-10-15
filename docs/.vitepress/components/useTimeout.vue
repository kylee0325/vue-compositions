<template>
  <p>Ready: {{ ready }}</p>
  <a-button @click="stop">stop</a-button>
  <a-button @click="start">restart</a-button>
</template>

<script>
import { useTimeout } from '../../../src'
export default {
  setup() {
    const { ready, start, stop } = useTimeout(3000)
    return {
      ready,
      start,
      stop
    }
  }
}
</script>
