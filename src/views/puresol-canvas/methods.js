export default {
    methods: {
        addTask(sectionKey){
            console.log("add task",sectionKey)
        },
        deleteSection(sectionKey){
            this.sections.splice(sectionKey, 1)
        }
    }
}
