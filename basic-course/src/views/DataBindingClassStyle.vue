<template>
  <div>
    <div class="container" :class="{ active: isActive, 'text-red': isRed }">
      Class Binding
    </div>
    <div class="container" :class="[class1, class2]">Class Binding</div>
    <div :style="styleObject">인라인스타일</div>
    <div :style="[inline1, inline2]">인라인스타일</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      isRed: true,
      class1: "active",
      class2: "text-red",
      styleObject: {
        backgroundColor: "yellow",
        color: "red",
        fontWeight: "bold",
      },
      inline1: "backgroundColor:yellow",
      inline2: "color:red;fontWeight:bold",
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 200px;
}

.active {
  background-color: yellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
