<template>
  <div>
    <input type="text" v-model.number="num1" />
    <input type="text" v-model.number="num2" />
    <span>{{ result }}</span>
  </div>
</template>

<script>
import { plusCalculator } from "../compositions/common";

export default {
  setup() {
    let { num1, num2, result } = plusCalculator();

    return { num1, num2, result };
  },
};
</script>

<style lang="scss" scoped></style>
