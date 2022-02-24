const app = new Vue({
  el: "#app",
  data: {
    message: "Hello vue!",
    seen: true,
    todos: [{ text: "a" }, { text: "b" }, { text: "c" }],
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
