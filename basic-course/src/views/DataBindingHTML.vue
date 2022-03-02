<template>
  <div v-html="htmlString"></div>
</template>

<script>
export default {
  data() {
    return {
      htmlString: '<p style="color:red;">this is a red string.</p>',
    };
  },
};
</script>

<style lang="scss" scoped></style>
