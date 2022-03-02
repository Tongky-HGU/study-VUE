<template>
  <div>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <input type="text" v-model="unused" />
    <h1>Hello, {{ lastName }} {{ firstName }}</h1>
    <h1>Hello, {{ getFullName() }}</h1>
    <h1>Hello, {{ fullName }}</h1>
    <h1>Hello, {{ testName }}</h1>

    <input type="text" v-model.number="x1" />
    <input type="text" v-model.number="x2" />
    <input type="text" v-model.number="y1" />

    <h1></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "jaeseok",
      lastName: "yu",
      unused: "",
      x1: 0,
      x2: 0,
      y1: 0,
    };
  },
  computed: {
    //! 만드는 연산이 딱 한번만 일어남
    //! recoil의 selector처럼 바인딩된 값의 변화만 감지
    fullName() {
      console.log("computed");
      return this.lastName + this.firstName;
    },
    testName() {
      console.log("computed2");
      return this.firstName;
    },
  },
  watch: {
    x1() {
      console.log("watch1");
      this.y1 = this.x1 + this.x2;
    },
    x2() {
      console.log("watch2");
      this.y1 = this.x1 + this.x2;
    },
  },
  methods: {
    //! 동일한 연산 반복
    getFullName() {
      console.log("methods");
      return this.lastName + this.firstName;
    },
  },
};
</script>

<style lang="scss" scoped></style>
