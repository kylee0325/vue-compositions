<template>
  <input v-model="title" />
  <a-button @click="updateTitle">更新标题</a-button>
</template>

<script>
import { useTitle } from '../../../src'
import { ref } from 'vue'
export default {
  setup() {
    const setTitle = useTitle('title', true)
    const title = ref('title')
    const updateTitle = () => {
      setTitle(title.value)
    }
    return {
      title,
      updateTitle
    }
  }
}
</script>
