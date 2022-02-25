<template>
  <div>
    <h2>Text input</h2>
    <input v-model="text" @keydown.enter="print(text)" /> {{ text }}

    <h2>Checkbox</h2>
    <input type="checkbox" name="check" id="check" v-model="checked" />
    checked {{ checked }}

    <h2>Multi checkboxes</h2>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedName" /> Jack
    <input type="checkbox" id="john" value="John" v-model="checkedName" /> John
    <input type="checkbox" id="Steve" value="Steve" v-model="checkedName" />
    Steve
    <p>checked name: {{ checkedName }}</p>

    <h2>Radio</h2>
    <input type="radio" id="one" value="One" v-model="picked" /> one
    <input type="radio" id="two" value="Two" v-model="picked" /> two
    <p>picked: {{ picked }}</p>

    <h2>Select</h2>
    <select v-model="selected">
      <option value="" disabled>please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <p>selected {{ selected }}</p>

    <h2>Multi selected</h2>
    <select v-model="multiSelected" multiple style="width: 100px">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <p>multi selected {{ multiSelected }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "edit me",
      checked: false,
      checkedName: ["Jack"],
      picked: "One",
      selected: "",
      multiSelected: ["A"],
    };
  },
  methods: {
    print(text) {
      console.log(text);
    },
  },
};
</script>

<style lang="scss" scoped></style>
