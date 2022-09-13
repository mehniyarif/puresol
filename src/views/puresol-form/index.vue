<template>
    <form>
        <div :key="key" v-for="(customField, key) in customFields">
            <component :is="`puresol-${customField.input_type}`" :value="customField.default_value" v-bind="customField"></component>
        </div>
    </form>
</template>
<script>
import {puresolFormStore} from "@/views/puresol-form/PuresolFormStore";
import {mapActions, mapState} from "pinia";

export default {
    data() {
        return {}
    },
    created() {
        this.fetchCustomFields()
    },
    computed: {
        ...mapState(puresolFormStore, {
            customFields: 'customFields'
        }),
    },
    methods: {
        ...mapActions(puresolFormStore, ['fetchCustomFields'])
    }
}
</script>
