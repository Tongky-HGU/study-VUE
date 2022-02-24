Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{todo.text}}</li>",
});

const app = new Vue({
  el: "#app",
  data: {
    message: "Hello vue!",
    seen: true,
    todos: [{ text: "a" }, { text: "b" }, { text: "c" }],
    groceryList: [
      { id: 0, text: "component0" },
      { id: 1, text: "component1" },
      { id: 2, text: "component2" },
    ],
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

app.message = "i have changed data";
app.seen = false;
app.todos.push({ text: "d" });
