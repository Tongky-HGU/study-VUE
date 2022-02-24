const app = new Vue({
  el: "#app",
  data: {
    message: "Hello vue!",
    seen: true,
  },
});

app.message = "i have changed data";
app.seen = false;
