<template>
  <modal-layout>
    <template v-slot:header>
      <h1>팝업 타이틀</h1>
    </template>
    <template v-slot:main>
      <p>팝업 컨텐츠1</p>
      <p>팝업 컨텐츠2</p>
    </template>
    <template v-slot:footer>
      <button>닫기</button>
    </template>
  </modal-layout>
</template>

<script>
import SlotModalLayout from "../components/SlotModalLayout.vue";
export default {
  components: {
    "modal-layout": SlotModalLayout,
  },
};
</script>

<style lang="scss" scoped></style>
