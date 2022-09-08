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
        insertPlaceholderSection(currentSection, position="before"){
            let placeholderSection = document.createElement("div")
            placeholderSection.setAttribute("class", "section-container-placeholder")
            placeholderSection.setAttribute("id", "section-container-placeholder-id")
            placeholderSection.textContent = "Drop Here"
            placeholderSection.addEventListener("dragend", this.endDragSection)
            placeholderSection.addEventListener("dragstart", this.startDragSection)
            placeholderSection.addEventListener("dragleave", (evt)=>{evt.target.remove()})
            if(!currentSection.parentNode.querySelectorAll(".section-container-placeholder").length){
                if(position === "before"){
                    currentSection.parentNode.insertBefore(placeholderSection, currentSection)
                    return
                }
                currentSection.parentNode.insertBefore(placeholderSection, currentSection.nextSibling)
            }

        },

        startDragSection(evt){
            console.log("section start")

            let isTask = evt.target.closest(".task-wrapper")
            if(isTask) return // bu kontrol en üstte olacak

            this.taskDragDropEvent = false

            evt.dataTransfer.effectAllowed = "move";
            this.sectionDraggableElement = evt.target.closest(".section-container")
        },
        onDragOverSection(evt){
            evt.dataTransfer.dropEffect = "move";

            let currentSection = evt.target.closest(".section-container")

            if(currentSection instanceof HTMLElement){


                document.getElementById("section-container-placeholder-id")?.remove()

                let screen = currentSection.getBoundingClientRect()
                // currentSection.style.backgroundColor = "red"
                let medianLine = Math.ceil(screen.width * .6) + screen.x

                this.insertPlaceholderSection(currentSection,evt.clientX >= medianLine ? "after" : "before")

                this.sectionOverElement = currentSection
            }
        },
        onDropSection (evt) {

            document.getElementById("section-container-placeholder-id")?.remove()
            // let currentSection = evt.target.closest(".section-container")
            //
            // if(currentSection instanceof HTMLElement){
            //     if(this.sectionOverElement){
            //         let currentElementId = this.sectionOverElement.getAttribute("id")
            //         currentSection.style.backgroundColor = this.beforeSectionStyles[currentElementId].backgroundColor
            //     }
            // }
        },
        onDragLeaveSection(evt){
            let currentSection = evt.target.closest(".task-wrapper")

            if(!currentSection instanceof HTMLElement){
                if(this.sectionOverElement){
                    document.getElementById("section-container-placeholder-id")?.remove()
                }
            }
        },
        endDragSection(evt){
            this.sectionDraggableElement = null
            this.taskDragDropEvent = true



        },

        // ONLY SECTION METHODS END
        // ONLY SECTION METHODS END
        // ONLY SECTION METHODS END




        // ONLY TASK METHODS
        // ONLY TASK METHODS
        // ONLY TASK METHODS
        insertPlaceholderTask(currentTask, position="before"){
                let placeholderTask = document.createElement("div")
                placeholderTask.setAttribute("class", "task-wrapper-placeholder")
                placeholderTask.setAttribute("id", "task-wrapper-placeholder-id")
                placeholderTask.textContent = "Drop Here"
                placeholderTask.addEventListener("dragend", this.endDragTask)
                placeholderTask.addEventListener("dragstart", this.startDragTask)
                placeholderTask.addEventListener("dragleave", (evt)=>{evt.target.remove()})
                if(!currentTask.parentNode.querySelectorAll(".task-wrapper-placeholder").length){
                    if(position === "before"){
                        currentTask.parentNode.insertBefore(placeholderTask, currentTask)
                        return
                    }
                    currentTask.parentNode.insertBefore(placeholderTask, currentTask.nextSibling)
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

                let screen = currentTask.getBoundingClientRect()
                // currentTask.style.backgroundColor = "red"
                let medianLine = Math.ceil(screen.height * .75) + screen.y

                this.insertPlaceholderTask(currentTask,evt.clientY >= medianLine ? "after" : "before")

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
