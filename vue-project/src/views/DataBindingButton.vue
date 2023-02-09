<template>
    <div>
        <input type="text" v-model="textValue">
        <button type="button" v-bind:disabled="textValue==''">버튼누르셈</button>
        <!-- input태그의 textValue가 공란이면 버튼을 disabled 시킨다. -->
    </div>
</template>

<script>
     export default{
        data(){
            return{
                textValue : "버튼",

            };
        }
     }
</script>