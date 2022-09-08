<template>
    <div class="task-wrapper">
        <div class="task-left">
            <div class="status" :style="{backgroundColor: findStatusColor(status)}">{{ status.toUpperCase() }}</div>
            <div class="title">{{ title }}</div>
            <div class="date">{{ date }}</div>
        </div>
        <div class="task-right">
            <puresol-icon name="three-dots" height="15" width="10"></puresol-icon>
            <div class="point">
                <span>{{ point }}</span>
                <puresol-icon name="bookmark-star-fill" height="15" width="10"></puresol-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "task",
    components: {},
    data() {
        return {
            statuses: [
                {name: "CONFIRMED", color: "#9B73AA"},
                {name: "ON HOLD", color: "#BEBEBE"},
                {name: "CANCELED", color: "#EB5757"},
                {name: "PENDING", color: "#D1B627"},
                {name: "COMPLETED", color: "#27AE60"},
                {name: "ACTIVE", color: "#556783"}]
        }
    },
    props: {
        status: String,
        title: String,
        date: String,
        point: [Number, String]
    },
    methods:{
        findStatusColor(status){
            let currentStatus = this.statuses.find(v => v.name === status.toUpperCase())
            if(currentStatus){
                return currentStatus.color
            }
            return "#BEBEBE"
        }
    }
}
</script>

<style lang="scss" scoped>

.task-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 0 15px 10px 15px;
  gap: 68px;

  width: 320px;
  min-height: 116px;
  transition-delay: 50ms;
  padding: 10px;
  background: #FBFBFB;
  box-shadow: 0 0 2px rgba(118, 96, 126, 0.15);
  border-radius: 2px;

  .task-left {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    .status {
      width: max-content;
      font-family: 'IBM Plex Sans', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      height: 14px;
      line-height: 0%;
      padding: 7px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #FFFDFF;
      background: #556783;
      border-radius: 2px;
    }

    .title {
      font-family: 'IBM Plex Sans Devanagari', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
    }

    .date {
      height: 18px;
      font-family: 'IBM Plex Sans Devanagari', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;

      color: #828282;
    }
  }

  .task-right {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    flex-grow: 0;

    .point {
      display: flex;
      span {
        font-family: 'IBM Plex Sans Devanagari', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        margin-right: 5px;

        color: #828282;
      }
    }
  }
}
</style>
