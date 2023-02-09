<template>
  <div>
    <h1>Hello, {{ title }}</h1>
    <!-- {{  }} 는 데이터 바인딩용 기호이다. -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "title : 제목입니다",
    };
  },
};
</script>
