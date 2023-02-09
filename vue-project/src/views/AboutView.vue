<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>about 누르면 넘어오는 페이지.</div>
  </div>
</template> -->

<template>
  <div class="about">
    <h1>About 누르면 나오는 페이지입니다.</h1>
    <h2>이 템플릿은 snippet으로 만들어 졌습니다.</h2>
  </div>
</template>
<script>
export default {
  name: 'ssiBalVuejs',
  /* component의 이름 지을때 기본값은 2개 이상의 단어를 조합하여 지어줘야 한다. 안그러면 에러뜸. */
  components: {}, 
  data() { 
    return {
      sampleData: ''
    };
  },
  beforeCreate() {}, 
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {}
}
</script>