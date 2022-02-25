<template>
  <div>
    <p :title="message">test bound title</p>
    <p :class="{ red: isRed }" @click="toggleRed">
      test change class attribute
    </p>
    <p :style="{ color }" @click="toggleColor">test change style attribute</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello?😎",
      isRed: true,
      color: "red",
    };
  },
  methods: {
    toggleRed() {
      this.isRed = !this.isRed;
    },
    toggleColor() {
      this.color = this.color === "red" ? "green" : "red";
    },
  },
};
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
</style>
