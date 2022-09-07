<template>
    <div class="puresol-canvas-wrapper">
        <section-container v-for="(section, key) in sections" :key="key" v-bind="section">
            <task v-for="(task, key) in section.tasks" :key="key" v-bind="task"></task>
        </section-container>
    </div>
</template>

<script>
import SectionContainer from "./partials/section-container"
import Task from "./partials/task"
export default {
    name: 'Puresol-Canvas',
    components: {
        SectionContainer,
        Task
    },
    data() {
        return {
            sections: [
                {
                    head: "Section 1",
                    topColor: "#2F80ED",
                    backgroundColor: "#F4F6F9",
                    tasks: [
                        {
                            status: "ACTIVE",
                            title: "New Task Item",
                            date: "5 March - Wed",
                            point: 5
                        },
                        {
                            status: "ACTIVE",
                            title: "New Task Item",
                            date: "5 March - Wed",
                            point: 5
                        }
                    ]
                },
                {
                    head: "Section 2",
                    topColor: "#F2684A",
                    backgroundColor: "#F9F6F5",
                    tasks: [
                        {
                            status: "ACTIVE",
                            title: "New Task Item",
                            date: "5 March - Wed",
                            point: 5
                        },
                        {
                            status: "COMPLETED",
                            title: "New Task Item",
                            date: "5 March - Wed",
                            point: 0
                        },
                        {
                            status: "ACTIVE",
                            title: "New Task Item",
                            date: "5 March - Wed",
                            point: 5
                        }
                    ]
                },
                {
                    head: "Section 3",
                    topColor: "#4AF2B6",
                    backgroundColor: "#F4FAF8",
                    tasks: [
                        {
                            status: "ACTIVE",
                            title: "New Task Item",
                            date: "5 March - Wed",
                            point: 5
                        },
                        {
                            status: "COMPLETED",
                            title: "New Task Item",
                            date: "5 March - Wed",
                            point: 0
                        },
                        {
                            status: "ACTIVE",
                            title: "New Task Item",
                            date: "5 March - Wed",
                            point: 5
                        }
                    ]
                }
            ]
        }
    }
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
