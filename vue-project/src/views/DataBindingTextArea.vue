<template>
    <div>
        <textarea v-model="message"></textarea>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: "textarea는 여러 줄을 입력할 수가 있습니다."
        };
    }
}
</script>