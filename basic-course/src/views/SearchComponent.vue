<template>
  <div>
    <div>
      <select v-model="selectedCity">
        <option v-for="(city, i) in cityList" :key="i" :value="city.code">
          {{ city.name }}
        </option>
      </select>
      <input type="text" v-model="userName" @keyup.enter="searchUserList" />
      <button @click="searchUserList">조회</button>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>직업</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, i) in userList" :key="i">
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [
        { name: "서울", code: "02" },
        { name: "부산", code: "06" },
        { name: "제주", code: "032" },
      ],
      selectedCity: "",
      userName: "",
      userList: [],
    };
  },
  methods: {
    searchUserList() {
      const params = {
        selectedCity: this.selectedCity,
        userName: this.userName,
      };

      this.userList = this.getUserList(params);
    },
    getUserList(params) {
      console.log(params);

      let list = [
        { name: "유재석", age: 50, job: "연예인" },
        { name: "하하", age: 40, job: "연예인" },
        { name: "양세찬", age: 37, job: "연예인" },
      ];
      return list;
    },
  },
};
</script>

<style lang="scss" scoped></style>
