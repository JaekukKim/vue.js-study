<template>
  <!-- 클래스를 넘겨줄때는 v-bind:class="{}"로 묶어준다. -->
  <div>
    <div
      class="container"
      v-bind:class="{
        active: isActive,
        'text-red': hasError,
      }"
    >
      <div class="container" v-bind:class="[activeClass, errorClass]">
        Class Binding2
      </div>
      Class Binding
    </div>
  </div>
  <!-- 배열을 사용하는 경우 특정 조건에 따른 클래스의 바인딩 처리를 true/false로 할 수 없다. -->
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      activeClass : true,
      errorClass : false
    };
  },
};
</script>
<style scoped>
.container {
  width: auto 100%;
  height: 200px;
}
.active {
  background-color: bisque;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
