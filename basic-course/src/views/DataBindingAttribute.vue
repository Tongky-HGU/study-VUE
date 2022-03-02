<template>
  <div>
    <img :src="url" alt="logo" />
    <input type="text" v-model="textValue" />
    <button :disabled="textValue === ''">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://kr.vuejs.org/images/logo.png",
      textValue: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
