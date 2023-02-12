<template>
    <div>
        <input typr="text" v-model="textValue"/>
        <button type="button" v-bind:disabled="textValue==''">버튼을 눌러주세요</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textValue: '버튼'
        }
    }
}
</script>