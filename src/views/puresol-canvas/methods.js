export default {
    methods: {
        addTask(sectionKey){
            this.sections[sectionKey].tasks.push(
                {
                    status: "PENDING",
                    title: "New Task Item",
                    date: this.getPrettyDate(),
                    point: 0
                }
            )
        },
        deleteSection(sectionKey){
            this.sections.splice(sectionKey, 1)
        },
        getPrettyDate(){

            let monthNames =["January","February","March","April",
                "May","June","July","August",
                "September", "October","November","December"];

            let weekDays =["Sun","Mon","Tue","Wed",
                "Thu","Fri","Sat"];

            let date = new Date()
            let day = date.getDate();

            let monthIndex = date.getMonth();
            let monthName = monthNames[monthIndex];

            let weekDay = date.getDay();

            return `${day} ${monthName} - ${weekDays[weekDay]}`;
        }
    }
}
