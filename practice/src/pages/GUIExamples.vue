<template>
  <div>
    <h1>GUI Examples</h1>
    <h2>Counter</h2>
    <CounterButton></CounterButton>
    <h2>Temperature Converter</h2>
    <TemperatureConverter></TemperatureConverter>
  </div>
</template>

<script>
import CounterButton from "../components/CounterButton.vue";
import TemperatureConverter from "../components/TemperatureConverter.vue";

export default {
  components: {
    CounterButton,
    TemperatureConverter,
  },
};
</script>

<style lang="scss" scoped></style>
