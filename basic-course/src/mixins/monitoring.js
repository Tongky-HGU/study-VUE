export default {
  //! mixin의 life cycle이 먼저 실행됨
  mounted() {
    // 데이터베이스 시간 저장
    console.log("mounted");
  },
  unmounted() {
    // 데이터베이스 시간 저장
    console.log("unmounted");
  },
};
