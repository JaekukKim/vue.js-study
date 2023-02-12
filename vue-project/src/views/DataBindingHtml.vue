<template>
    <div>
        <div>{{ htmlString }}</div>
        <div v-html="htmlString"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            htmlString: '<p style="color: blue;">이것은 빨간색 글자입니다.</p>' 
        };
    }
}
</script>