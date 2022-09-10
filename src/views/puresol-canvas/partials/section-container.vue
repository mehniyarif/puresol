<template>
<div class="section-container" :style="styles">
    <section-header v-bind="$props" :draggable="false"></section-header>
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
  cursor: auto;
  min-width: 350px;
  width: 350px;
  max-width: 350px;
  height: max-content;
  border-radius: 5px;
}

.section-container-placeholder{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 30px;
  margin-top: 10px;
  gap: 10px;
  min-width: 350px;
  height: 50vh;
  border-radius: 5px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 300;
  color: rgba(0,0,0,.5);
  background: transparent;
  box-shadow: 0 0 2px rgba(118, 96, 126, 0.15);
  border: 2px dashed rgba(118, 96, 126, 0.15);
}
</style>
