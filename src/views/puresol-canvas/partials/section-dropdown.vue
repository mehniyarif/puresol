<template>
<div class="dropdown-container" @mouseleave="mouseLeave" @mouseenter="mouseEnter" v-click-outside="closeDropdown">
    <puresol-icon @click="dropdownToggle" name="three" class="icon" width="16" height="16"></puresol-icon>
    <div class="dropdown" v-show="showDropdown">
        <button @click="clickButton($event,'addTask')">
            <puresol-icon name="plus-circle" height="18" width="18"></puresol-icon>
            Add Task
        </button>
        <button @click="clickButton($event,'deleteSection')">
            <puresol-icon name="trash" height="18" width="18"></puresol-icon>
            Delete Section
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: "section-dropdown",
    inject: ["addTask", "deleteSection", "sectionKey"],
    components: {},

    data(){
      return{
          showDropdown: false,
          over:false
      }
    },
    methods:{
        mouseLeave(){
            this.over = false
            setTimeout(()=>{
                if(this.over) return
                this.showDropdown = false
            },2000)
        },
        mouseEnter(){
            this.over = true
        },
        dropdownToggle(){
            this.showDropdown =! this.showDropdown
        },
        closeDropdown(){
            this.showDropdown= false
        },
        clickButton(e,methodName){
            e.target.disabled = true
            e.target.style.opacity = ".4"
            setTimeout(()=>{
                e.target.disabled = false
                e.target.style.opacity = "1"
            },3000)
            this.closeDropdown()
            this[methodName](this.sectionKey)
        }
    }
}
</script>

<style lang="scss" scoped>
.dropdown-container{
  position: relative;

    .dropdown{
      background-color: #fff;
      height: max-content;
      width: max-content;
      position: absolute;
      right: 0;
      top: 20px;
      box-shadow: 0 10px 20px rgba(0,0,0,.1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      border-radius: 5px;
      button{
        padding: .5em 1em;
        width: 100%;
        background-color: #fbfbfb;
        display: flex;
        gap: 15px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: .9em;
        justify-content: flex-start;
        border: none;
        &:nth-last-child(1){
          border-top: 1px solid rgba(0,0,0,.1);
        }
        &:hover{
          background-color: #efefef;
        }
      }
    }

}
</style>
