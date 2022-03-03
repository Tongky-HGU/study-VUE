<template>
  <div>
    <page-title class="page-title" :title="title" />
    <ChildComponent
      :likes="likes"
      :isOk="isOk"
      :commentIds="commentIds"
      :author="author"
      ref="child_component"
      @send-message="receiveMsg"
    />
    <button @click="callChildFunc">부모가 자식 메서드 호출하는 버튼</button>
    <br />
    {{ msg }}
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import ChildComponent from "../components/ChildComponent.vue";

export default {
  data() {
    return {
      title: "부모가 전송한 동적인 데이터",
      likes: 23,
      isOk: true,
      commentIds: [1, 2, 3, 4],
      author: {
        name: "유재석",
        age: 23,
      },
    };
  },
  components: {
    "page-title": PageTitle,
    ChildComponent,
  },

  methods: {
    callChildFunc() {
      this.$refs.child_component.$refs.child_btn.click(); //! 자식 이벤트 발생 시키기
      this.$refs.child_component.childFunc(); //! 자식 메서드 호출하기
      this.$refs.child_component.msg = "부모가 바꿔줌"; //! 자식의 데이터 변경하기
    },
    receiveMsg(msg) {
      alert(msg);
    },
  },

  computed: {
    msg() {
      return this.$refs.child_component?.msg || "자식이랑 동기화할 부모데이터"; // todo 왜 렌더링이 다시 안일어나는가?
    },
  },
};
</script>

<style scoped>
.page-title {
  color: green;
}
</style>
