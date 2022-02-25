<template>
  <ol>
    <TodoItem
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"
    ></TodoItem>
  </ol>
</template>

<script>
import TodoItem from "../components/TodoItems.vue";

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: "할일 1" },
        { id: 1, text: "할일 2" },
        { id: 2, text: "할일 3" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
