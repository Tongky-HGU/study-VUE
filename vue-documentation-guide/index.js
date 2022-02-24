const app = new Vue({
  el: "#app",
  data: {
    message: "Hello vue!",
    seen: true,
    todos: [{ text: "a" }, { text: "b" }, { text: "c" }],
  },
});

app.message = "i have changed data";
app.seen = false;
app.todos.push({ text: "d" });
