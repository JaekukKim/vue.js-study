<template>
    <!-- {{ }} : 문자열 데이터 바인딩 -->
    <h1>Hello, {{ title }}</h1>
</template>

<script>
export default {
    data() {
        return {
            title: 'Vue.js'
        };
    }
}
</script>