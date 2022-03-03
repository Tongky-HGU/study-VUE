<template>
  <div>
    <ProvideExampleChildChild />
    <RenderTest />
  </div>
</template>

<script>
import ProvideExampleChildChild from "./ProvideExampleChildChild.vue";
import RenderTest from "../components/RenderTest.vue";
export default {
  components: {
    ProvideExampleChildChild,
    RenderTest,
  },
};
</script>

<style lang="scss" scoped></style>
