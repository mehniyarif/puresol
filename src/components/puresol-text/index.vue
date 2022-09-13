<template>
    <input type="text" v-bind="$attrs" :value="modelValue" @input="changeValue" />
</template>

<script>
export default {
    name: "puresol-text",
    props:{
        modelValue:[Date,String]
    },
    methods:{
        changeValue(e){
            this.$emit('update:modelValue',e)
        }
    },
}
</script>

<style scoped>

</style>
