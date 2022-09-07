<template>
<div class="section-header" :style="styles">
    <div class="top"></div>
    <input type="text" @input="changeSectionTitle($event, sectionKey)" :value="head" class="title"/>
    <section-dropdown></section-dropdown>
</div>
</template>

<script>
import SectionDropdown from "./section-dropdown"
export default {
    name: "section-header",
    inject: ["sectionKey", "changeSectionTitle"],
    components: {
        SectionDropdown
    },
    props:{
        head: String,
        topColor: String,
        backgroundColor: String,
    },
    computed:{
        styles(){
            return {
                "--puresol-section-top-color": this.topColor
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Devanagari:wght@400&display=swap');
.section-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 104px;

  position: relative;
  width: 100%;
  height: max-content;
  padding: 20px 15px;
  background: #F4F6F9;

  .top{
    width: 100%;
    height: 10px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 5px 5px 0 0;
    background: linear-gradient(90.05deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), var(--puresol-section-top-color);
  }

  .title {
    height: 31px;
    width: 75%;
    font-family: 'IBM Plex Sans Devanagari', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 31px;
    letter-spacing: -0.02em;
    color: #000000;
    border: none;
    outline: none;
    background-color: transparent;
    &:focus{
      border-bottom: 1px solid rgba(0,0,0,.1);
    }
  }

}
</style>
