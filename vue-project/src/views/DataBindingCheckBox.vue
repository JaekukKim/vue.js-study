<template>
    <div>
        <label><input type="checkbox" v-model="checked"/>{{ checked }}</label>
        <div>
            <label><input type="checkbox" v-model="checked2" value="서울"/>서울</label>
            <label><input type="checkbox" v-model="checked2" value="경기"/>경기</label>
            <label><input type="checkbox" v-model="checked2" value="인천"/>인천</label>
            <hr/>
            <span>체크한 지역 : {{ checked2 }}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checked: true,
            checked2: []
        };
    }
}
</script>