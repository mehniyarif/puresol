<template>
    <textarea v-bind="$attrs" :value="modelValue" @input="changeValue" ></textarea>
</template>

<script>
export default {
    name: "puresol-textbox",
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
