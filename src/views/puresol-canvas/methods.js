global.Buffer = global.Buffer || require("buffer").Buffer;
export default {
    methods: {
        addTask(sectionKey) {
            this.sections[sectionKey].tasks.push(
                {
                    status: "PENDING",
                    title: "New Task Item",
                    date: this.getPrettyDate(),
                    point: 0
                }
            )
            this.setStorage()
        },
        addSection(){
            this.sections.unshift(
                {
                    head: `Section ${this.sections.length + 1}`,
                    topColor: this.sectionColors[this.sections.length > 7 ? this.sections.length % 7 : this.sections.length - 1],
                    backgroundColor: "#F4F6F9",
                    tasks: []
                },
            )
            this.setStorage()
        },
        deleteSection(sectionKey) {
            this.sections.splice(sectionKey, 1)
            this.setStorage()
        },
        changeSectionTitle(e, sectionKey) {
            this.sections[sectionKey].head = e.target.value
            this.setStorage()
        },
        getStorage() {
            let sections = localStorage.getItem(`sections`)
            if (sections) {
                this.sections = JSON.parse(atob(sections))
            }
        },
        setStorage() {
            let objJsonStr = JSON.stringify(this.sections);
            let base64Value = Buffer.from(objJsonStr).toString("base64");
            localStorage.setItem(`sections`, base64Value)
        },
        getPrettyDate() {

            let monthNames = ["January", "February", "March", "April",
                "May", "June", "July", "August",
                "September", "October", "November", "December"];

            let weekDays = ["Sun", "Mon", "Tue", "Wed",
                "Thu", "Fri", "Sat"];

            let date = new Date()
            let day = date.getDate();

            let monthIndex = date.getMonth();
            let monthName = monthNames[monthIndex];

            let weekDay = date.getDay();

            return `${day} ${monthName} - ${weekDays[weekDay]}`;
        }
    }
}
