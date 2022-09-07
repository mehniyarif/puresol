export default {
    methods: {
        onDropSection (evt) {
            let currentElement = evt.target.closest(".section-container")
            if(currentElement.getAttribute("class").search("drop-zone") > -1)
                return
            if(currentElement.draggable)
                this.secondDragItem = currentElement
            this.arrayMove(
                this.sections,
                this.firstDragItem.getAttribute("dragKey"),
                this.secondDragItem.getAttribute("dragKey")
            )
        },
        startDragSection(evt){
            console.log(evt.target)
            if(evt.target.getAttribute("class").search("task-wrapper") > -1) return

            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'

            let currentElement = evt.target.closest(".puresol-canvas-wrapper")
            this.firstDragItem = currentElement
        },
        endDragSection(evt){
            if(!this.secondDragItem) return

        },
        onDragOverSection(evt){
            let currentElement = evt.target.closest(".puresol-canvas-wrapper")
            if(currentElement.getAttribute("class").search("drop-zone") > -1)
                return

            currentElement.style.opacity = ".8"
            currentElement.style.border = "2px dashed #ccc"
        },
        onDragLeaveSection(evt){
            let currentElement = evt.target.closest(".puresol-canvas-wrapper")
            if(currentElement.getAttribute("class").search("drop-zone") > -1)
                return
            if(currentElement.draggable)
                currentElement.style.backgroundColor = "red"
            currentElement.style.opacity = "1"
            currentElement.style.border = "none"
        }
    }
}
