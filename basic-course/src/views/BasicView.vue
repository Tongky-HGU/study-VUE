<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-model="title" />
  </div>
</template>

<script>
export default {
  name: "BasicView",
  components: {},
  data() {
    return { title: "Hello world2" };
  },
  setup() {},
  created() {
    //! 생성되는 순간
  },
  mounted() {
    //! dom에 그려진 이후
  },
  unmounted() {
    //! dom에서 사라진 이후
  },
  method: {},
};
</script>

<style scoped></style>
