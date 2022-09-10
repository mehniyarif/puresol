export default {
    methods: {
        sectionMove(oldIndex, newIndex){
            if (newIndex >= this.sections.length) {
                let k = newIndex - this.sections.length + 1;
                while (k--) {
                    this.sections.push(undefined);
                }
            }
            this.sections.splice(newIndex, 0, this.sections.splice(oldIndex, 1)[0]);
            this.canvasKey +=1
            this.setStorage()
        },
        sameSectionTaskMove(oldIndex, newIndex, sectionIndex){
            if (newIndex >= this.sections[sectionIndex].tasks.length) {
                let k = newIndex - this.sections[sectionIndex].tasks.length + 1;
                while (k--) {
                    this.sections[sectionIndex].tasks.push(undefined);
                }
            }
            this.sections[sectionIndex].tasks.splice(newIndex, 0, this.sections[sectionIndex].tasks.splice(oldIndex, 1)[0]);
        },
        differentSectionTaskMove(oldIndex, newIndex, oldParentIndex, newParentIndex){
            let task = this.sections[oldParentIndex].tasks[oldIndex]
            this.sections[newParentIndex].tasks.splice(newIndex, 0, task);
            this.sections[oldParentIndex].tasks.splice(oldIndex, 1);
        },
        arrayMove(oldIndex, newIndex, oldParentIndex, newParentIndex) {
            if(oldParentIndex === newParentIndex){
                 this.sameSectionTaskMove(oldIndex, newIndex, oldParentIndex)
            }
            else if(oldParentIndex || newParentIndex){
                 this.differentSectionTaskMove(oldIndex, newIndex, oldParentIndex, newParentIndex,)
            }
            this.canvasKey +=1
            this.setStorage()
        },
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
            placeholderSection.setAttribute("draggable", this.sectionDragDropEvent)
            placeholderSection.textContent = "Drop Here"
            placeholderSection.addEventListener("dragover",(evt)=>{evt.preventDefault(); this.onDragOver(evt) })
            placeholderSection.addEventListener("dragenter",(evt)=>{evt.preventDefault()})
            placeholderSection.addEventListener("dragend", this.endDragSection)
            placeholderSection.addEventListener("dragstart", this.startDragSection)
            placeholderSection.addEventListener("drop", this.onDrop)
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
            let isTask = evt.target.closest(".task-wrapper")
            if(isTask) return // bu kontrol en üstte olacak

            this.taskDragDropEvent = false
            this.sectionDraggableElement = evt.target.closest(".section-container")
            this.sectionDraggableElement.style.visibility = "hidden"

            this.sectionDraggableElement.style.left = `${evt.x - 2000}px`
            this.sectionDraggableElement.style.top = `${evt.y - 2000}px`
        },
        onDragOverSection(evt){

            this.sectionDraggableElement.style.visibility = "hidden"
            this.sectionDraggableElement.style.position = "absolute"

            this.sectionDraggableElement.style.left = `${evt.x - 2000}px`
            this.sectionDraggableElement.style.top = `${evt.y - 2000}px`

            let currentSection = evt.target.closest(".section-container")

            if(currentSection instanceof HTMLElement){


                document.getElementById("section-container-placeholder-id")?.remove()

                let screen = currentSection.getBoundingClientRect()
                let medianLine = Math.ceil(screen.width * .5) + screen.x

                this.insertPlaceholderSection(currentSection,evt.x >= medianLine ? "after" : "before")

                this.sectionOverElement = currentSection
            }
        },
        onDropSection (evt) {

            let currentSectionPlaceholder = evt.target.closest(".section-container-placeholder")
            if(!currentSectionPlaceholder) return

            let newKey = 0
            if ( "getAttribute" in currentSectionPlaceholder.nextElementSibling && currentSectionPlaceholder.nextElementSibling.getAttribute("id")?.startsWith("section-")){
                newKey = currentSectionPlaceholder.nextElementSibling.getAttribute("sectionDragKey")
            }else{
                newKey = this.sections.length -1
            }

            this.sectionMove(this.sectionDraggableElement.getAttribute("sectionDragKey"), newKey)

            currentSectionPlaceholder?.remove()
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
            this.canvasKey += 1


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
                placeholderTask.setAttribute("draggable", "" )
                placeholderTask.textContent = "Drop Here"
                placeholderTask.addEventListener("dragend", this.endDragTask)
                placeholderTask.addEventListener("dragstart", this.startDragTask)
                placeholderTask.addEventListener("dragleave", (evt)=>{evt.target.remove()})


                if(!isNaN(currentTask)){ // eğer currentTask yoksa gelen section key'idir
                    let currentSection = document.getElementById(`section-${currentTask}`)
                    if(currentSection.querySelectorAll(".task-wrapper-placeholder").length) return
                    currentSection.appendChild(placeholderTask)
                    return
                }

                if(!currentTask.parentNode.querySelectorAll(".task-wrapper-placeholder").length){
                    if(position === "before"){
                        currentTask.parentNode.insertBefore(placeholderTask, currentTask)
                        return
                    }
                    currentTask.parentNode.insertBefore(placeholderTask, currentTask.nextSibling)
                }

        },
        startDragTask(evt){
            this.sectionDragDropEvent = false

            evt.dataTransfer.effectAllowed = "move";

            this.taskDraggableElement = evt.target.closest(".task-wrapper")
        },
        onDragOverTask(evt){

            let currentSection = evt.target.closest(".section-container")
            let currentSectionKey = currentSection.getAttribute("sectionDragKey")

            let noTaskPlaceholder = currentSection.querySelector(".no-task")
            if(noTaskPlaceholder){
                noTaskPlaceholder.style.display = "none"
            }

            if(!this.sections[currentSectionKey].tasks.length){
                this.insertPlaceholderTask(currentSectionKey)
            }

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
            let sectionDragKey = 0
            let taskDragKey = 0
            let currentTaskPlaceholder = document.getElementById("task-wrapper-placeholder-id")
            let currentSection = evt.target.closest(".section-container")
            let currentTask = currentSection.querySelector(".task-wrapper")


            sectionDragKey = currentSection.getAttribute("sectionDragKey")

            switch (this.sections[sectionDragKey].tasks?.length){
                case 1:
                    taskDragKey = 1
                    break;
                default:
                    try{
                        taskDragKey = currentTaskPlaceholder.nextSibling.getAttribute("taskDragKey")
                    }
                    catch {
                        taskDragKey = this.sections[sectionDragKey].tasks?.length
                    }
                    break;
            }



            currentTaskPlaceholder?.remove()

            this.arrayMove(this.taskDraggableElement.getAttribute("taskDragKey"), taskDragKey, this.taskDraggableElement.getAttribute("sectionDragKey"), sectionDragKey)

        },
        onDragLeaveTask(evt){

            let currentTask = evt.target.closest(".task-wrapper")
            let currentSection = evt.target.closest(".section-container")

            if(!currentTask instanceof HTMLElement){

            if(this.taskOverElement){

                document.getElementById("task-wrapper-placeholder-id")?.remove()
            }
            }

            let noTaskPlaceholder = currentSection?.querySelector(".no-task")
            if(noTaskPlaceholder){
                noTaskPlaceholder.style.display = "inherit"
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
