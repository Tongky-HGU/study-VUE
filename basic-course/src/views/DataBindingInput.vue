<template>
  <div>
    <input type="text" v-model="valueModel" />
    <input type="number" v-model.number="valueModel2" />
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      v-model="valueModel3"
    ></textarea>
    <br />
    <select name="" id="" v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
    <br />
    <!-- checkbox 는 v-model 이 value가 아닌 checked와 바인딩 된다.-->
    <label
      ><input type="checkbox" name="" id="" v-model="checked" />
      {{ checked }}</label
    >
    <br />
    <label
      ><input type="checkbox" value="서울" v-model="checkedList" /> 서울</label
    >
    <label
      ><input type="checkbox" value="부산" v-model="checkedList" /> 부산</label
    >
    <label
      ><input type="checkbox" value="제주" v-model="checkedList" /> 제주</label
    >
    {{ checkedList }}

    <br />

    <label>
      <input type="radio" v-model="picked" v-bind:value="radio[0]" />서울</label
    >
    <label>
      <input type="radio" v-model="picked" :value="radio[1]" />부산</label
    >
    <label>
      <input type="radio" v-model="picked" :value="radio[2]" />제주</label
    >
    <span>선택한 지역 : {{ picked }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueModel: "South Korea",
      valueModel2: 12,
      valueModel3: "안녕하세요",
      city: "064",
      checked: true,
      checkedList: [],
      radio: ["서울", "부산", "제주"],
      picked: "서울",
    };
  },

  mounted() {
    console.log(this.valueModel2);
  },
};
</script>

<style lang="scss" scoped></style>
