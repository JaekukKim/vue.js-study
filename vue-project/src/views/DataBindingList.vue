<template>
  <div>
    <h1 align="center">제품목록</h1>
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
        <tr :key="i" v-for="(product, i) in productList">
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
  data () {
    return {
      productList: [
        { product_name: '30인치 모니터', price: 250000, category: '컴퓨터/모니터', delivery_price: 5000 },
        { product_name: '17인치 노트북', price: 1570000, category: '컴퓨터/노트북', delivery_price: 5000 },
        { product_name: '기계식 키보드', price: 130000, category: '컴퓨터/키보드', delivery_price: 5000 },
        { product_name: '무선   마우스', price: 35000, category: '컴퓨터/마우스', delivery_price: 5000 },
        { product_name: '유선   마우스', price: 12500, category: '컴퓨터/마우스', delivery_price: 5000 }
      ]
    }
  }
}
</script>
<style scoped>
    table{
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
    width: 100%;
    }
    td,th {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 10px;
    }
</style>