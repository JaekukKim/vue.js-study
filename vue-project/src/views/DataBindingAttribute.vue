<template>
    <div>
        <img v-bind:src="imgSrc"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgSrc: require('../assets/logo.png')
        };
    }
}
</script>