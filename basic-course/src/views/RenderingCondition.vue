<template>
  <div>
    <h1 v-if="type === 'A'">A</h1>
    <h1 v-else-if="type === 'B'">B</h1>
    <h1 v-else-if="type === 'C'">C</h1>
    <h1 v-else>other</h1>
    <!-- v if는 조건이 만족하면 html이 아예 없어짐-->
    <!-- 이와 반면에 vshow는 display none을 시킴-->
    <h1 v-show="bRender">v-show</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "A",
      bRender: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
