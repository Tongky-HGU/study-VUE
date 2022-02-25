<template>
  <div>
    <button @click="show = !show">Toggle List</button>
    <button @click="list.push(list.length + 1)">Push Number</button>
    <button @click="list.pop()">Pop Number</button>
    <button @click="list.reverse()">Reverse Number</button>

    <ul v-if="show && list.length">
      <li v-for="item of list" :key="item">{{ item }}</li>
    </ul>
    <p v-else-if="list.length">list is not empty, but hidden</p>
    <p v-else>list is empty</p>
  </div>
</template>

<script>
export default {
  data() {
    return { show: true, list: [1, 2, 3] };
  },
};
</script>

<style lang="scss" scoped></style>
