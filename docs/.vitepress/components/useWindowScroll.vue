<template>
  <p>x: {{ x }}</p>
  <p>y: {{ y }}</p>
</template>

<script>
import { useWindowScroll } from '../../../src'
export default {
  setup() {
    return useWindowScroll()
  }
}
</script>
