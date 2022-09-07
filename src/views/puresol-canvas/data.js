export default {
    data() {
        return {
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
                            status: "PENDING",
                            title: "Add task feature",
                            date: "5 March - Wed",
                            point: 5
                        },
                        {
                            status: "ACTIVE",
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
                            status: "ACTIVE",
                            title: "Change section title feature",
                            date: "5 March - Wed",
                            point: 5
                        },
                        {
                            status: "ON HOLD",
                            title: "Canvas data saved in local storage as base64",
                            date: "5 March - Wed",
                            point: 0
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
                            status: "ACTIVE",
                            title: "New Task Item",
                            date: "5 March - Wed",
                            point: 5
                        },
                        {
                            status: "COMPLETED",
                            title: "New Task Item",
                            date: "5 March - Wed",
                            point: 0
                        },
                        {
                            status: "CONFIRMED",
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
