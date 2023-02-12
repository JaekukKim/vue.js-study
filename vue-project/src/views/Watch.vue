<template>
    <div>
        <h1>나의 이름은</h1>
        <h1>이름 : {{ full_name }}</h1>
        <h1>성 : {{ last_name }} == 이름 : {{ first_name }}</h1>
        <button type="button" @click="changeName">닉변</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            first_name: '뽀삐',
            last_name: '고',
            full_name: ''
        };
    },
    watch: {
        first_name() {
            this.full_name = this.first_name + '' + this.last_name;
        },
        last_name() {
            this.full_name = this.first_name + ':' + this.last_name;
        }
    },
    methods: {
        changeName() {
            this.first_name = '삐뽀';
        }
    }
}
</script>