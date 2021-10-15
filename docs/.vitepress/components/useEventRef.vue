<template>
  <button ref="target">click</button>
</template>

<script>
import { useEventRef } from '../../../src'
export default {
  setup() {
    const [target] = useEventRef(
      'click',
      () => {
        alert('click')
      },
      true
    )
    return {
      target
    }
  }
}
</script>
