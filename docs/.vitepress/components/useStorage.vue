<template>
  <div>
    <p>将数据持久化到 localStorage 中</p>
    <p>localStorage中的值： {{ localStorageState }}</p>
    <p>刷新页面能拿到存在 localStorage 中的状态</p>
    <input v-model="value" />
    <a-button @click="updateLocalStorage(value)">update</a-button>
    <a-button @click="updateLocalStorage()">remove</a-button>
  </div>
  <div>
    <p>将数据持久化到 sessionStorage 中</p>
    <p>sessionStorage中的值： {{ sessionStorageState }}</p>
    <p>刷新页面能拿到存在 sessionStorage 中的状态</p>
    <input v-model="val" />
    <a-button @click="updateSessionStorage(val)">update</a-button>
    <a-button @click="updateSessionStorage()">remove</a-button>
  </div>
</template>

<script>
import { useStorage } from '../../../src'
import { ref } from 'vue'
export default {
  setup() {
    const [localStorageState, updateLocalStorage] = useStorage('a', 'localStorage')
    const [sessionStorageState, updateSessionStorage] = useStorage('b', 'sessionStorage', sessionStorage)
    const value = ref(localStorageState.value)
    const val = ref(sessionStorageState.value)
    return {
      localStorageState,
      sessionStorageState,
      value,
      val,
      updateLocalStorage,
      updateSessionStorage
    }
  }
}
</script>
