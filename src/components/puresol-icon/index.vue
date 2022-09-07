<template>
    <component class="puresol-icon" :is="name" v-bind="$attrs"></component>
</template>

<script>
import BookmarkStar from "@/components/puresol-icon/icons/bookmark-star";
import BookmarkStarFill from "@/components/puresol-icon/icons/bookmark-star-fill";
import PlusCircleFill from "@/components/puresol-icon/icons/plus-circle-fill";
import PlusCircle from "@/components/puresol-icon/icons/plus-circle";
import Three from "@/components/puresol-icon/icons/three";
import ThreeDots from "@/components/puresol-icon/icons/three-dots";
import Trash from "@/components/puresol-icon/icons/trash";
import TrashFill from "@/components/puresol-icon/icons/trash-fill";

export default {
    name: "puresol-icon",
    props:{
        name: String
    },
    components:{
        BookmarkStar,BookmarkStarFill,PlusCircleFill,PlusCircle,Three,ThreeDots,Trash,TrashFill
    }
}
</script>

<style lang="scss" scoped>
.puresol-icon{
  cursor: pointer;
}
</style>
