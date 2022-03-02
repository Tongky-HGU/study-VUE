<template>
  <div>
    <button @click="increaseCounter">add 1</button>
    <p>Count is {{ count }}</p>
    <button @click="one(), two()">alert</button>
    <br />

    <select v-model="city" @change="changeSelect">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>
    <br />
    <input type="text" v-model="textValue" @keydown.enter="showValue" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      city: "",
      textValue: "",
    };
  },
  methods: {
    increaseCounter() {
      this.count += 1;
    },
    one() {
      alert("one");
    },
    two() {
      alert("two");
    },
    changeSelect() {
      alert(this.city);
    },
    showValue() {
      //tab, delete, esc, space, up,down,left,right
      alert(this.textValue);
    },
  },
};
</script>

<style lang="scss" scoped></style>
