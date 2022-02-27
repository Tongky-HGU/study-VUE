<template>
  <div>
    {{ num }}
    <button @click="count">Count</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    count() {
      this.num += 1;
    },
  },
};
</script>

<style lang="scss" scoped></style>
