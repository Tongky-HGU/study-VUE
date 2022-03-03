import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";

const app = createApp(App);

app.use(router);
app.mixin(mixins);
app.directive("check-render", {
  mounted(el) {
    console.log("render", el);
  },
});
app.mount("#app");
