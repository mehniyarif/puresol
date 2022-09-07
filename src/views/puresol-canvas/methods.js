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
        },
        arrayMove(arr, oldIndex, newIndex) {
            if (newIndex >= arr.length) {
                let k = newIndex - arr.length + 1;
                while (k--) {
                    arr.push(undefined);
                }
            }
            arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
            return arr; // for testing
        }
    }
}
