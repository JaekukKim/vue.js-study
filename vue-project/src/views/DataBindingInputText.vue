<template>
    <div>
        <input type="text" v-model="valueModel" readonly/>
        <br/>
        <input type="text" name="valueModel2" value="hello" readonly/>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                valueModel : 'Good Morning!'
            };
        }
    }
</script>