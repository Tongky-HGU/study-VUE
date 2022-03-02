<template>
  <div>
    <select v-model="city">
      <option :value="city.v" v-for="(city, i) in options" :key="i">
        {{ city.t }}
      </option>
    </select>

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
export default {
  data() {
    return {
      options: [
        {
          v: "02",
          t: "서울",
        },
        {
          v: "21",
          t: "부산",
        },
        {
          v: "064",
          t: "제주",
        },
      ],
      city: "",
      productList: [
        {
          productName: "기계식 키보드1",
          price: 35000,
          deliveryPrice: 3000,
          category: "전자제품",
        },
        {
          productName: "기계식 키보드2",
          price: 35000,
          deliveryPrice: 3000,
          category: "전자제품",
        },
        {
          productName: "기계식 키보드3",
          price: 35000,
          deliveryPrice: 3000,
          category: "전자제품",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
