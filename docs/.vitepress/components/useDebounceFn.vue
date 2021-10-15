<template>
  <p>疯狂点击按钮，最后停下3s才会执行回调</p>
  <a-button @click="onClick">click</a-button>
</template>

<script>
import { useDebounceFn } from '../../../src'
export default {
  setup() {
    const onClick = useDebounceFn(() => {
      alert('click')
    }, 3000)
    return {
      onClick
    }
  }
}
</script>
