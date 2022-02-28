<template>
  <div>
    <h1>GUI Examples</h1>
    <h2>Counter</h2>
    <CounterButton></CounterButton>
    <h2>Temperature Converter</h2>
    <TemperatureConverter></TemperatureConverter>
    <h2>Simple Timer</h2>
    <SimpleTimer></SimpleTimer>
  </div>
</template>

<script>
import CounterButton from "../components/CounterButton.vue";
import TemperatureConverter from "../components/TemperatureConverter.vue";
import SimpleTimer from "../components/SimpleTimer.vue";

export default {
  components: {
    CounterButton,
    TemperatureConverter,
    SimpleTimer,
  },
};
</script>

<style lang="scss" scoped></style>
