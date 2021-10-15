<template>
  <p>{{ state }}</p>
  <a-button @click="toggle()">toggle</a-button>
  <a-button type="primary" @click="setTrue">True</a-button>
  <a-button @click="setFalse">False</a-button>
</template>

<script>
import { useBoolean } from '../../../src'

export default {
  setup() {
    const res = useBoolean()
    return {
      ...res
    }
  }
}
</script>
