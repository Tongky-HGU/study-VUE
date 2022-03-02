<template>
  <div>
    이름
    <input type="text" v-model="name" />
    나이
    <input type="text" v-model.number="age" />
    직업
    <input type="text" v-model="job" />
    <button @click="saveUserInfo">저장</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      job: "",
    };
  },
  methods: {
    saveUserInfo() {
      if (this.name === "") return alert("사용자이름을 입력하세요");
      if (this.age === "" || this.age === 0)
        return alert("사용자이름을 입력하세요");

      const params = {
        name: this.name,
        age: this.age,
        job: this.job,
      };

      const res = this.saveData(params);

      if (res) return alert("사용자 정보가 저장되었습니다.");
    },

    saveData(params) {
      console.log(params);
      return true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
