<template>
  <div class="black-bg" v-if="modalOpen==true">
    <!-- 기초중의 기초 : if문 괄호 내부의 로직은 true일 경우에만 실행이다. -->
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="modalOpen=false">모달닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(menuName, i) in menu" :key="i">{{ menuName }}</a>
  </div>

  <h2>현재 있는 제품 : {{ products }}</h2>
  <div v-for="(product, i) in products" :key="i">
    <img src="../../assets/logo.png" class="product-img" />
    <h4 @click="modalOpen = true">{{ product }}</h4>
    <p>10만원</p>
    <button v-on:click="increase(i)">신고하기</button>

    <br />
    <span>신고 수 : {{ report[i] }}</span>
  </div>
</template>

<script>
export default {
  name: "ArrayExam",
  data() {
    /*
        동적인 UI는
        0. 디자인을 해 두고
        1. UI의 현재 상태를 데이터로 저장해둔다.
        2. 데이터에 따라 UI가 어떻게 보일지 작성한다.
    */
    return {
      /* 1.UI의(지금은 모달) 현재 상태를 데이터로 저장해둔다. */
      modalOpen: false,

      menu: ["Home", "Products", "About"],
      products: ["1번제품", "2번제품", "3번제품"],
      report: [0, 0, 0],
    };
  },
  methods: {
    increase(i) {
      this.report[i] += 1;
    },
  },
};
</script>

<style scoped>
/* 모달창 css 시작 */
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
}
.menu {
  background: #e9e9e9;
  padding: 15px;
  border-radius: 5px;
}
/* 모달창끝 */

.menu a {
  color: navy;
  padding: 10px;
}
.product-img {
  width: 50%;
  margin-top: 40px;
}
div > h4{
    cursor: pointer;
}
</style>
