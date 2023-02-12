<template>
    <div>
        <h1>성 : <input  typr="text" v-model="last_name" style="font-size:1.3em;"/></h1>
        <h1>이름 : <input  typr="text" v-model="first_name" style="font-size:1.3em;"/></h1>
        <hr/>
        <h1>입력 결과</h1>
        <h1>이름 : {{ first_name + " " + last_name }}</h1>
        <h1>이름 : {{ full_name }}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            first_name: '',
            last_name: ''
        };
    },
    computed: {
        full_name() {
            return this.first_name + '-' + this.last_name;
        }
    }
}
</script>