<template>
  <h1 align="center">제품목록</h1>
  <div align="center">
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>제품가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <!-- 헤드컬럼 말고 아랫부분에 출력되는건 for문을 사용하여 출력해주자 -->
        <tr key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          product_name: "30인치 모니터",
          price: 250000,
          category: "컴퓨터/모니터",
          delivery_price: "2500"
        },
        {
          product_name: "1060본체",
          price: 400000,
          category: "컴퓨터/모니터",
          delivery_price: "4000"
        },
        {
          product_name: "로지텍마우스",
          price: 60000,
          category: "마우스",
          delivery_price: "2500"
        },
        {
          product_name: "레오폴드 에버그린",
          price: 200000,
          category: "키보드",
          delivery_price: "2500"
        }
      ],
    };
  },
};
</script>
<style scoped>

</style>