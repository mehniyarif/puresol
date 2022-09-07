<template>
    <div class="puresol-canvas-wrapper drop-zone"
         @drop="onDropSection($event, 1)"
         @dragenter.prevent
         @dragover.prevent="onDragOverSection"
         @dragleave.prevent="onDragLeaveSection">

        <section-container class="drag-el section-container"
                           :add-task="addTask"
                           :delete-section="deleteSection"
                           :section-key="key"
                           v-for="(section, key) in sections"
                           :key="key" v-bind="section"
                           :draggable="true"
                           :dragKey="key"
                           @dragend="endDragSection($event, section)"
                           @dragstart="startDragSection($event, section)">

            <task v-for="(task, key) in section.tasks" :key="key" v-bind="task" :draggable="true"></task>
        </section-container>
    </div>
</template>

<script>
import SectionContainer from "./partials/section-container"
import Task from "./partials/task"
import Data from "@/views/puresol-canvas/data";
import Methods from "@/views/puresol-canvas/methods";
import SectionDragDrop from "@/views/puresol-canvas/section-drag-drop";
import TaskDragDrop from "@/views/puresol-canvas/task-drag-drop";

export default {
    name: 'Puresol-Canvas',
    mixins: [Data, Methods, SectionDragDrop, TaskDragDrop],
    provide() {
        return {
            addTask: this.addTask,
            deleteSection: this.deleteSection,
            changeSectionTitle: this.changeSectionTitle
        }
    },
    components: {
        SectionContainer,
        Task
    },
    created() {
        this.getStorage()
    }

}
</script>
<style lang="scss" scoped>
.puresol-canvas-wrapper {
  width: auto;
  display: flex;
  gap: 50px;
  padding-inline: 5%;
}
</style>
