<template>
    <div>
        <select v-model="selectedValue" @change="changeSelect()">
            <option value="휴대폰">휴대폰</option>
            <option value="컴퓨터">컴퓨터</option>
            <option value="MP3">MP3</option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectedValue: ''
        };
    },
    methods: {
        changeSelect() {
            alert("내가 선택한 것은 " + this.selectedValue)
        }
    }
}
</script>