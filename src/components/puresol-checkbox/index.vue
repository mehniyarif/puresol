<template>
    <input type="checkbox" v-bind="$attrs" :checked="modelValue" :value="modelValue" @input="changeValue" />
</template>

<script>
export default {
    name: "puresol-checkbox",
    props:{
        modelValue:[Date,String]
    },
    methods:{
        changeValue(e){
            e.target.checked = e
            this.$emit('update:modelValue',e)
        }
    },
}
</script>

<style scoped>

</style>
