import { defineAsyncComponent } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const UseBoolean = defineAsyncComponent(() => import('./useBoolean.vue'))

export default function registerComponent(app) {
  app.use(Antd)
  app.component('UseBoolean', UseBoolean)
}
