import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import i18nPlugin from "./plugins/i18n";
import store from "./store";

const i18nStrings = {
  en: {
    hi: "hello",
    save: "save",
  },
  ko: {
    hi: "안녕하세요",
    save: "저장",
  },
};

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18nPlugin, i18nStrings);
app.mixin(mixins);
app.directive("check-render", {
  mounted(el) {
    console.log("render", el);
  },
});
app.mount("#app");
