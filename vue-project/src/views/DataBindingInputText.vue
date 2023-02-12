<template>
    <div>
        <input type="text" v-model="valueModel"/>
        <input type="text" name="valueModel2" value="hello"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            valueModel: "Good Morning"
        };
    }
}
</script>