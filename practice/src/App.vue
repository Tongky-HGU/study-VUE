<template>
  <div>
    <a href="/">home</a> |
    <a v-for="page in pages" :key="page" :href="`/${page}`"> {{ page }} | </a>
    <component :is="currentView" />
  </div>
</template>

<script>
import HelloWorld from "./pages/HelloWorld.vue";
import HandlingUserInput from "./pages/HandlingUserInput.vue";
import AttributeBindings from "./pages/AttributeBindings.vue";
import ConditionalsAndLoops from "./pages/ConditionalsAndLoops.vue";
import FormBindings from "./pages/FormBindings.vue";
import SimpleComponent from "./pages/SimpleComponent.vue";
import FetchingData from "./pages/FetchingData.vue";
import GridWithSortAndFilter from "./pages/GridWithSortAndFilter.vue";

import NotFound from "./pages/NotFound.vue";

const routes = {
  "/": HelloWorld,
  "/1": HandlingUserInput,
  "/2": AttributeBindings,
  "/3": ConditionalsAndLoops,
  "/4": FormBindings,
  "/5": SimpleComponent,
  "/6": FetchingData,
  "/7": GridWithSortAndFilter,
};

export default {
  data() {
    return {
      pages: new Array(7).fill(0).map((_, idx) => idx + 1),
      currentPath: window.location.pathname,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
