<template>
  <div>
    <p>Boolean 切换</p>
    <p>{{ state }}</p>
    <a-button @click="toggle()">toggle</a-button>
    <a-button @click="setDefault">setDefault</a-button>
    <a-button @click="setRight">setRight</a-button>
  </div>
  <div>
    <p>任意两值直接切换</p>
    <p>{{ stringState }}</p>
    <a-button @click="toggleString()">toggle</a-button>
    <a-button @click="toggleString('a')">toggle a</a-button>
    <a-button @click="toggleString('b')">toggle b</a-button>
    <a-button @click="setLeft">setDefault</a-button>
    <a-button @click="setAnother">setRight</a-button>
  </div>
</template>

<script>
import { useToggle } from '../../../src'
export default {
  setup() {
    const { state, toggle, setDefault, setRight } = useToggle()
    const { state: stringState, toggle: toggleString, setDefault: setLeft, setRight: setAnother } = useToggle('a', 'b')
    return {
      state,
      toggle,
      setDefault,
      setRight,
      stringState,
      toggleString,
      setLeft,
      setAnother
    }
  }
}
</script>
