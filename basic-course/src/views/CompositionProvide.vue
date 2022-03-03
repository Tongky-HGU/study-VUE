<template>
  <div>
    <CompositionInject />
  </div>
</template>

<script>
import { provide } from "vue";
import CompositionInject from "./CompositionInject.vue";
export default {
  components: { CompositionInject },
  setup() {
    provide("title", "provide로 전달된 타이틀");
  },
};
</script>

<style lang="scss" scoped></style>
