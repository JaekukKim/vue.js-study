<template>
    <div>
        <label><input type="radio" v-bind:value="radioValue1" v-model="picked"/>딸기</label>
        <label><input type="radio" v-bind:value="radioValue2" v-model="picked"/>메론</label>
        <label><input type="radio" v-bind:value="radioValue3" v-model="picked"/>초코</label>
        <label><input type="radio" v-bind:value="radioValue4" v-model="picked"/>바닐라</label>
    </div>
    <span>체크한거 : {{ picked }}</span>
</template>

<script>
    export default{
        data(){
            return{
                /* 이 부분이 모델이 되는것이다. */
                picked : [],
                radioValue1 : '딸기',
                radioValue2 : '메론',
                radioValue3 : '초코',
                radioValue4 : '바닐라'
            }
        }
    }
</script>