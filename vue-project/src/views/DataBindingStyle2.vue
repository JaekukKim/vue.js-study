<template>
  <div>
    <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 바인딩</div>
    <!-- v-bind:style 를 배열로 선언해주었다. -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseStyle : 'background-color : green; width:100%; height:200px',
      addStyle : 'font-size : 22px; font-weight : bold; align : center; color : white;'
      /* 이런식으로 배열로 선언한 내부의 변수값에 스타일 관련 속성을 넣어서 추가해줄 수 있다. 겹치면 안돼겠죠?? */
    };
  },
};
</script>