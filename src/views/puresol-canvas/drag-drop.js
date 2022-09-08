export default {
    methods: {
        onDrop(evt){
            if(this.sectionDragDropEvent){
                this.onDropSection(evt)
            }else if(this.taskDragDropEvent){
                this.onDropTask(evt)
            }
        },
        onDragOver(evt){
            if(this.sectionDragDropEvent){
                this.onDragOverSection(evt)
            }else if(this.taskDragDropEvent){
                this.onDragOverTask(evt)
            }
        },
        onDragLeave(evt){
            if(this.sectionDragDropEvent){
                this.onDragLeaveSection(evt)
            }else if(this.taskDragDropEvent){
                this.onDragLeaveTask(evt)
            }
        },

        // ONLY SECTION METHODS
        // ONLY SECTION METHODS
        // ONLY SECTION METHODS

        startDragSection(evt){
            console.log("section start")

            let isTask = evt.target.closest(".task-wrapper")
            if(isTask) return // bu kontrol en üstte olacak

            this.taskDragDropEvent = false

            evt.dataTransfer.effectAllowed = "move";
            this.sectionDraggableElement = evt.target.closest(".section-container")
            // if(evt.target.getAttribute("class").search("task-wrapper") > -1) return
            //
            // evt.dataTransfer.dropEffect = 'move'
            // evt.dataTransfer.effectAllowed = 'move'
            //
            // let currentElement = evt.target.closest(".puresol-canvas-wrapper")
            // this.firstDragItem = currentElement
        },
        onDragOverSection(evt){
            evt.dataTransfer.dropEffect = "move";


            let currentSection = evt.target.closest(".section-container")

            if(currentSection instanceof HTMLElement){

                if(this.sectionOverElement && this.sectionOverElement !== currentSection && this.beforeSectionStyles){
                    let beforeElementId = this.sectionOverElement.getAttribute("id")
                    this.sectionOverElement.style.backgroundColor = this.beforeSectionStyles[beforeElementId].backgroundColor
                }

                currentSection.style.backgroundColor = "red"

                this.sectionOverElement = currentSection
            }

            // let currentElement = evt.target.closest(".puresol-canvas-wrapper")
            // if(currentElement.getAttribute("class").search("drop-zone") > -1)
            //     return
            //
            // currentElement.style.opacity = ".8"
            // currentElement.style.border = "2px dashed #ccc"
        },
        onDropSection (evt) {
            let currentSection = evt.target.closest(".section-container")

            if(currentSection instanceof HTMLElement){
                if(this.sectionOverElement){
                    let currentElementId = this.sectionOverElement.getAttribute("id")
                    currentSection.style.backgroundColor = this.beforeSectionStyles[currentElementId].backgroundColor
                }
            }
            // let currentElement = evt.target.closest(".section-container")
            // if(currentElement.getAttribute("class").search("drop-zone") > -1)
            //     return
            // if(currentElement.draggable)
            //     this.secondDragItem = currentElement
            // this.arrayMove(
            //     this.sections,
            //     this.firstDragItem.getAttribute("dragKey"),
            //     this.secondDragItem.getAttribute("dragKey")
            // )
        },
        onDragLeaveSection(evt){

            if(this.sectionOverElement){
                let beforeElementId = this.sectionOverElement.getAttribute("id")
                this.sectionOverElement.style.backgroundColor = this.beforeSectionStyles[beforeElementId].backgroundColor
            }
            // let currentElement = evt.target.closest(".puresol-canvas-wrapper")
            // if(currentElement.getAttribute("class").search("drop-zone") > -1)
            //     return
            // if(currentElement.draggable)
            //     currentElement.style.backgroundColor = "red"
            // currentElement.style.opacity = "1"
            // currentElement.style.border = "none"
        },
        endDragSection(evt){
            this.sectionDraggableElement = null
            this.taskDragDropEvent = true

            // if(!this.secondDragItem) return


        },

        // ONLY SECTION METHODS END
        // ONLY SECTION METHODS END
        // ONLY SECTION METHODS END




        // ONLY TASK METHODS
        // ONLY TASK METHODS
        // ONLY TASK METHODS
        insertPlaceholderTask(currentTask){
            let placeholderTask = document.createElement("div")
            placeholderTask.setAttribute("class", "task-wrapper-placeholder")
            placeholderTask.setAttribute("id", "task-wrapper-placeholder-id")
            placeholderTask.textContent = "Drop Here"
            placeholderTask.addEventListener("dragend", this.endDragTask)
            placeholderTask.addEventListener("dragstart", this.startDragTask)
            placeholderTask.addEventListener("dragleave", (evt)=>{evt.target.remove()})
            if(!currentTask.parentNode.querySelectorAll(".task-wrapper-placeholder").length){
                currentTask.parentNode.insertBefore(placeholderTask, currentTask)
            }

        },
        startDragTask(evt){
            console.log("task start")
            this.sectionDragDropEvent = false

            evt.dataTransfer.effectAllowed = "move";

            this.taskDraggableElement = evt.target.closest(".task-wrapper")
        },
        onDragOverTask(evt){
            evt.dataTransfer.dropEffect = "move";

            let currentTask = evt.target.closest(".task-wrapper")

            if(currentTask instanceof HTMLElement){

                document.getElementById("task-wrapper-placeholder-id")?.remove()

                // currentTask.style.backgroundColor = "red"
                this.insertPlaceholderTask(currentTask)

                this.taskOverElement = currentTask
            }
        },
        onDropTask(evt) {
            document.getElementById("task-wrapper-placeholder-id")?.remove()
            let currentTask = evt.target.closest(".task-wrapper")


            // if(currentTask instanceof HTMLElement){
            //     if(this.taskOverElement){
            //         let currentElementId = this.taskOverElement.getAttribute("id")
            //         currentTask.style.backgroundColor = this.beforeTaskStyles[currentElementId].backgroundColor
            //     }
            // }
        },
        onDragLeaveTask(evt){

            let currentTask = evt.target.closest(".task-wrapper")

            if(!currentTask instanceof HTMLElement){
            if(this.taskOverElement){

                document.getElementById("task-wrapper-placeholder-id")?.remove()

                // let beforeElementId = this.taskOverElement.getAttribute("id")
                // this.taskOverElement.style.backgroundColor = this.beforeTaskStyles[beforeElementId].backgroundColor
            }
            }
        },
        endDragTask(evt){
            this.taskDraggableElement = null
            this.sectionDragDropEvent = true
        }
        // ONLY TASK METHODS END
        // ONLY TASK METHODS END
        // ONLY TASK METHODS END
    }
}
