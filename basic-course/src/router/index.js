import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(
        /* webpackChunkName: "contact", webpackPrefetch:true */ "../views/ContactView.vue"
      ),
  },
  {
    path: "/basic",
    name: "basic",
    component: () =>
      import(
        /* webpackChunkName: "basic", webpackPrefetch:true */ "../views/BasicView.vue"
      ),
  },
  {
    path: "/htmlString",
    name: "htmlString",
    component: () =>
      import(
        /* webpackChunkName: "htmlString", webpackPrefetch:true */ "../views/DataBindingHTML.vue"
      ),
  },

  {
    path: "/InputExample",
    name: "InputExample",
    component: () =>
      import(
        /* webpackChunkName: "InputExample" */ "../views/InputExample.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
