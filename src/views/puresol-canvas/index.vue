<template>
    <div class="puresol-canvas-wrapper" :key="canvasKey">

        <section-container class="section-container"
                           @drop="onDrop"
                           @dragenter.prevent
                           @dragover.prevent="onDragOver"
                           @dragleave.prevent="onDragLeave"

                           :add-task="addTask"
                           :delete-section="deleteSection"
                           :section-key="sectionKey"
                           v-for="(section, sectionKey) in sections"
                           :id="`section-${sectionKey}`"
                           :key="sectionKey" v-bind="section"
                           :draggable="sectionDragDropEvent"
                           :sectionDragKey="sectionKey"
                           @dragend="endDragSection($event, section)"
                           @dragstart="startDragSection($event, section)">
            <task v-for="(task, taskKey) in section.tasks"
                  :key="taskKey" v-bind="task"
                  :id="`section-${sectionKey}-task-${taskKey}`"
                  :draggable="taskDragDropEvent"
                  @dragend="endDragTask($event, task)"
                  :sectionDragKey="sectionKey"
                  :taskDragKey="taskKey"
                  @dragstart="startDragTask($event, task)"
            ></task>
        </section-container>
        <div class="add-section-button" @click="addSection">
            <puresol-icon name="plus-circle-fill" height="100%" width="100%"></puresol-icon>
        </div>
    </div>
</template>

<script>
import SectionContainer from "./partials/section-container"
import Task from "./partials/task"
import Data from "@/views/puresol-canvas/data";
import Methods from "@/views/puresol-canvas/methods";
import DragDrop from "@/views/puresol-canvas/drag-drop";

export default {
    name: 'Puresol-Canvas',
    mixins: [Data, Methods, DragDrop],
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
    },
    mounted() {
        this.setBeforeStyles()
    }

}
</script>
<style lang="scss">
body{
  scrollbar-width: thin;
  scrollbar-height: thin;
  scrollbar-color: #ccc;

  &::-webkit-scrollbar {
    width: 10px;
    height: 14px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 7px;
    height: 14px;
  }
}
.puresol-canvas-wrapper {
  width: 100vw;
  display: flex;
  height: 90vh;
  overflow: scroll;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 50px;
  padding-inline: 5%;
  position: relative;
  scrollbar-width: thin;
  scrollbar-height: thin;
  scrollbar-color: #ccc;

  &::-webkit-scrollbar {
    width: 10px;
    height: 14px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 7px;
    height: 14px;
  }
}
.add-section-button{
  position: fixed;
  width: 70px;
  height: 70px;
  right: 48px;
  bottom: 40px;
  z-index: 5;

  background: #fff;
  border-radius: 70px;
}

</style>
