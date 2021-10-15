<template>
  <a-button @click="setHash('api')">set hash to api</a-button>
</template>

<script>
import { useHash } from '../../../src'
export default {
  setup() {
    return useHash()
  }
}
</script>
