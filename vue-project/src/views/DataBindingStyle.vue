<template>
  <div>
    <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
    <!-- v-bind:style은 ="변수명" 식으로 선언해주어 변수 안에 스타일을 적용시켜 객체의 형태로 만들어낼 수 있다. -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* styleObject에 color이랑 fontSize를 넣으면 styleObject가 객체화가 되어 style요소 내의 속성값이 된다. */
      styleObject : {
        color : 'blue',
        fontSize : '28px'
      }
    };
  },
};
</script>