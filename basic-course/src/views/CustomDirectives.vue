<template>
  <div>
    <input type="text" v-focus v-check-render />
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
