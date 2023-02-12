<template>
    <div>
        <div class="container" v-bind:class="{
            'active': isActive, 'text-red': hasError}">Class Binding</div>
        <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: true,
            hasError: true,
            activeClass: 'active' ,
            errorClass: 'text-red'
        };
    }
}
</script>
<style scoped>
    .container {
        width: 100%;
        height: 200px;
    }

    .active {
        background-color: skyblue;
        font-weight: bold;
    }

    .text-red {
        color: red;
    }

</style>