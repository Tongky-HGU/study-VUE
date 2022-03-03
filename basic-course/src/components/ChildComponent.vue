<template>
  <div>
    likes: {{ likes }} isOk: {{ isOk }} {{ author }}
    <br />
    <button @click="childFunc" ref="child_btn">자식에 있는 클릭</button>

    <br />
    <h1>{{ msg }}</h1>

    <br />
    <button @click="sendFromChild">자식이 보내는 버튼</button>

    <br />
    <button @click="changeData">자식 컴포넌트 데이터 변경</button>
  </div>
</template>

<script>
export default {
  props: {
    likes: {
      type: Number,
      default: 0,
    },
    isOk: {
      type: Boolean,
      default: false,
    },
    commentIds: {
      type: Array,
    },
    author: {
      type: Object,
    },
  },
  methods: {
    childFunc() {
      alert("자식 메서드");
    },
    sendFromChild() {
      this.$emit("send-message", this.sendMsg);
    },
    changeData() {
      this.msg = "자식 컴포넌트에서 변경시킨 데이터";
    },
  },

  data() {
    return {
      msg: "자식에 있던 메세지",
      sendMsg: "자식이 보내는 메세지",
    };
  },

  mounted() {
    console.log(this.commentIds);
  },
};
</script>

<style lang="scss" scoped></style>
