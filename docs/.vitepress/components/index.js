import { defineAsyncComponent } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './index.css'

const UseBoolean = defineAsyncComponent(() => import('./useBoolean.vue'))
const UseDebounce = defineAsyncComponent(() => import('./useDebounce.vue'))
const UseDebounceFn = defineAsyncComponent(() => import('./useDebounceFn.vue'))
const UseEvent = defineAsyncComponent(() => import('./useEvent.vue'))
const UseEventRef = defineAsyncComponent(() => import('./useEventRef.vue'))
const UseHash = defineAsyncComponent(() => import('./useHash.vue'))
const UseHistory = defineAsyncComponent(() => import('./useHistory.vue'))
const UseInterval = defineAsyncComponent(() => import('./useInterval.vue'))
const UseLifecycles = defineAsyncComponent(() => import('./useLifecycles.vue'))
const UseLocalStorage = defineAsyncComponent(() => import('./useLocalStorage.vue'))
const UseResize = defineAsyncComponent(() => import('./useResize.vue'))
const UseScroll = defineAsyncComponent(() => import('./useScroll.vue'))
const UseScrollRef = defineAsyncComponent(() => import('./useScrollRef.vue'))
const UseSessionStorage = defineAsyncComponent(() => import('./useSessionStorage.vue'))
const UseStorage = defineAsyncComponent(() => import('./useStorage.vue'))
const UseTimeout = defineAsyncComponent(() => import('./useTimeout.vue'))
const UseTimeoutFn = defineAsyncComponent(() => import('./useTimeoutFn.vue'))
const UseTitle = defineAsyncComponent(() => import('./useTitle.vue'))
const UseToggle = defineAsyncComponent(() => import('./useToggle.vue'))
const UseWindowScroll = defineAsyncComponent(() => import('./useWindowScroll.vue'))

export default function registerComponent(app) {
  app.use(Antd)
  app.component('UseBoolean', UseBoolean)
  app.component('UseDebounce', UseDebounce)
  app.component('UseDebounceFn', UseDebounceFn)
  app.component('UseEvent', UseEvent)
  app.component('UseEventRef', UseEventRef)
  app.component('UseHash', UseHash)
  app.component('UseHistory', UseHistory)
  app.component('UseInterval', UseInterval)
  app.component('UseLifecycles', UseLifecycles)
  app.component('UseLocalStorage', UseLocalStorage)
  app.component('UseResize', UseResize)
  app.component('UseScroll', UseScroll)
  app.component('UseScrollRef', UseScrollRef)
  app.component('UseSessionStorage', UseSessionStorage)
  app.component('UseStorage', UseStorage)
  app.component('UseTimeout', UseTimeout)
  app.component('UseTimeoutFn', UseTimeoutFn)
  app.component('UseTitle', UseTitle)
  app.component('UseToggle', UseToggle)
  app.component('UseWindowScroll', UseWindowScroll)
}
