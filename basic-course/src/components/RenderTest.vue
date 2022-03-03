<template>
  <div>렌더링되면 console.log에 render 찍힘</div>
</template>

<script>
export default {
  mounted() {
    console.log("render");
  },
};
</script>

<style lang="scss" scoped></style>
