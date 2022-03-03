<template>
  <div>
    <button @click="getProductList">조회</button>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>제품가격</th>
          <th>배송비</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in productList" :key="i">
          <th>{{ product.productName }}</th>
          <th>{{ product.price }}</th>
          <th>{{ product.deliveryPrice }}</th>
          <th>{{ product.category }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      productList: [],
    };
  },
  methods: {
    async getProductList() {
      this.productList = await this.api(
        "https://8028e156-2a4c-42b7-8f96-73b4c98024ec.mock.pstmn.io/product-list",
        "get",
        {}
      );
      console.log(this.productList);
    },
    async api(url, method, data) {
      return (
        await axios({
          method,
          url,
          data,
        }).catch((e) => console.log(e))
      ).data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
