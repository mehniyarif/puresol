export default {
    data() {
        return {
            taskDraggableElement:null,
            sectionDraggableElement:null,
            taskOverElement:null,
            sectionOverElement:null,
            replaceDragItem:null,
            sectionDragDropEvent:true,
            taskDragDropEvent:true,
            canvasKey:0,
            sectionColors: [
                "#4AF2B6",
                "#FF7F3F",
                "#FBDF07",
                "#89CFFD",
                "#2F80ED",
                "#F2684A",
                "#F94892"
            ],
            sections: [
                {
                    head: "Section 1",
                    topColor: "#2F80ED",
                    backgroundColor: "#F4F6F9",
                    tasks: [
                        {
                            status: "COMPLETED",
                            title: "Add task feature",
                            date: "5 March - Wed",
                            point: 5
                        },
                        {
                            status: "PENDING",
                            title: "New Task Item",
                            date: "5 March - Wed",
                            point: 5
                        },
                        {
                            status: "COMPLETED",
                            title: "Delete section feature",
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
                            status: "COMPLETED",
                            title: "Change section title feature",
                            date: "5 March - Wed",
                            point: 5
                        },
                        {
                            status: "COMPLETED",
                            title: "Canvas data saved in local storage as base64",
                            date: "5 March - Wed",
                            point: 0
                        },
                        {
                            status: "COMPLETED",
                            title: "Section drag and drop feature",
                            date: "5 March - Wed",
                            point: 5
                        },
                        {
                            status: "ACTIVE",
                            title: "New Task Item",
                            date: "5 March - Wed",
                            point: 5
                        },
                        {
                            status: "ON HOLD",
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
                            status: "COMPLETED",
                            title: "Same Section Task Drag Drop",
                            date: "5 March - Wed",
                            point: 5
                        },
                        {
                            status: "COMPLETED",
                            title: "Different Section Task Drag Drop",
                            date: "5 March - Wed",
                            point: 0
                        },
                        {
                            status: "CONFIRMED",
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
                }
            ]
        }
    }
}
