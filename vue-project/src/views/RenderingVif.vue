<template>
    <div>
        <h1 v-if="type=='A'">강아지</h1>
        <h1 v-else-if="type='B'">고양이</h1>
        <h1 v-else>햄스터</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            type: 'B'
        };
    }
}
</script>