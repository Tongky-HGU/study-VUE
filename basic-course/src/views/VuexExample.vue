<template>
  <div>
    <h1>cart count {{ cartCount }}</h1>
    <h1>cart count {{ productACount }}</h1>

    <h1>count: {{ count }}</h1>

    <button @click="increment">increment</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    cartCount() {
      return this.$store.getters.cartCount;
    },
    productACount() {
      return this.$store.getters.cartProductACount;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style lang="scss" scoped></style>
