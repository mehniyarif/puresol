<template>
    <div class="puresol-canvas-wrapper">
        <section-container :add-task="addTask" :delete-section="deleteSection" :section-key="key" v-for="(section, key) in sections" :key="key" v-bind="section">
            <task v-for="(task, key) in section.tasks" :key="key" v-bind="task"></task>
        </section-container>
    </div>
</template>

<script>
import SectionContainer from "./partials/section-container"
import Task from "./partials/task"
import Data from "@/views/puresol-canvas/data";
import Methods from "@/views/puresol-canvas/methods";
export default {
    name: 'Puresol-Canvas',
    mixins: [Data, Methods],
    provide(){
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

}
</script>
<style lang="scss" scoped>
.puresol-canvas-wrapper{
  width: auto;
  display: flex;
  gap: 50px;
  padding-inline: 5%;
}
</style>
