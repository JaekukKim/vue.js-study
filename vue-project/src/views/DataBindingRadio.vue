<template>
    <div>
        <label><input type="radio" v-bind:value="radioValue1" v-model="picked"/>서울</label>
        <label><input type="radio" v-bind:value="radioValue2" v-model="picked"/>인천</label>
        <label><input type="radio" v-bind:value="radioValue3" v-model="picked"/>수원</label>
        <hr/>
        <span>선택한 지역: {{ picked }}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            picked: '',
            radioValue1: '서울',
            radioValue2: '인천',
            radioValue3: '수원'
        };
    }
}
</script>