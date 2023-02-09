<template>
  <div align="center">
    <h1 v-if="type=='A'">킹댕이</h1>
    <!-- 태그 안의 v-if="조건" 이 참이면 태그 내의 value를 출력한다. -->
    <!-- 비슷한걸로 v-show="조건"이 있다. -->

    <!--  중요함 
      v-if는 조건을 만족하면 그 순간에 html 태그가 생성되는 것이고 아니면 html 블럭은 삭제가된다 (소멸)

      v-show는 조건 만족 여부에 상관없이 해당 속성을 가지고 있는 태그는 "생성"이 된다.
      조건을 만족하면 css의 display를 이용해서 화면에 보이게 만드는 것이며
      조건을 만족하지 못하면 display : none; 이 된다.
     -->

    <h1 v-else-if="type=='B'">족냥이</h1>
    <h1 v-else-if="type=='C'">커햄</h1>
    <h1 v-else>잡동물</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type : 'A'
    };
  },
};
</script>
