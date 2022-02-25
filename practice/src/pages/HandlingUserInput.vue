<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="reverseMessage">reverse message</button>
    <button @click="message += '?!'">add '?!'</button>
    <a href="https://vuejs.org" @click.prevent="notify"
      >a link with preventDefault()</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return { message: "Hello world!" };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
    notify() {
      alert("navigation is prevented");
    },
  },
};
</script>

<style lang="scss" scoped>
button,
a {
  display: block;
  margin-bottom: 1em;
}
</style>
