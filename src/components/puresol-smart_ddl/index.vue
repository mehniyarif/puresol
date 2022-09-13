<template>
    <select v-bind="$attrs" :value="modelValue" @change="changeValue" ></select>
</template>

<script>
export default {
    name: "puresol-smart-dll",
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
