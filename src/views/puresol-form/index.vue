<template>
    <div>
        {{ customFields }}
    </div>
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
