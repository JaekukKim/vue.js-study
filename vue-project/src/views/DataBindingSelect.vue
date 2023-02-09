<template>
    <div>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="031">경기</option>
            <option value="032">인천</option>
            <option value="051">붔싼</option>
        </select>
        <input id="num" type="text" value=""/>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                city : '051'
            };
        }
    }
</script>