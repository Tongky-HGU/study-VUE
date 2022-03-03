<template>
  <div>
    parentData: {{ myMsg }}
    <ProvideExampleChild />
    <button @click="changeData">데이터바꾸기</button>
  </div>
</template>

<script>
import { computed } from "vue";
import ProvideExampleChild from "./ProvideExampleChild.vue";

export default {
  components: {
    ProvideExampleChild,
  },
  data() {
    return {
      myMsg: "hello",
    };
  },
  provide() {
    return {
      msg: computed(() => this.myMsg),
    };
  },

  methods: {
    changeData() {
      this.myMsg = "hi";
    },
  },
};
</script>

<style lang="scss" scoped></style>
