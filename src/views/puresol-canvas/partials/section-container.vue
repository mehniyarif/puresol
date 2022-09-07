<template>
<div class="section-container" :style="styles">
    <section-header v-bind="$props"></section-header>
    <slot></slot>
</div>
</template>

<script>
import SectionHeader from "./section-header"
export default {
    name: "section-container",
    props:{
        head: String,
        topColor: String,
        backgroundColor: String,
        sectionKey: Number
    },
    provide(){
      return {
          sectionKey: this.sectionKey
      }
    },
    components:{
        SectionHeader
    },
    data(){
      return {
          tasks: null
      }
    },
    created() {
        this.tasks = this.$children;
    },
    computed:{
        styles(){
            return {
                "--puresol-section-background-color": this.backgroundColor
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.section-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 30px;
  margin-top: 10px;
  gap: 10px;
  background-color: var(--puresol-section-background-color);

  width: 350px;
  height: max-content;
  border-radius: 5px;
}
</style>
