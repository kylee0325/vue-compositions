import { defineAsyncComponent } from "vue";

const UseBoolean = defineAsyncComponent(() => import("./useBoolean.vue"));

export default function registerComponent(app) {
  app.component("UseBoolean", UseBoolean);
}
