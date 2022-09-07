export default {
    data() {
        return {
            sections: [
                {
                    head: "Section 1",
                    topColor: "#2F80ED",
                    backgroundColor: "#F4F6F9",
                    tasks: [
                        {
                            status: "PENDING",
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
                },
                {
                    head: "Section 2",
                    topColor: "#F2684A",
                    backgroundColor: "#F9F6F5",
                    tasks: [
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
