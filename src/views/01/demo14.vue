<!--
    @created by 刘勇 2023-08-24 21:09:17 星期四
    @Updated by 刘勇 2023-08-24 21:09:17 星期四
    @description 页面描述
-->

<template>
  <div class="demo-page">
    <Calendar
      ref="Calendar"
      :markDateMore="arr"
      :markDate="arr2"
      @isToday="clickToday"
      agoDayHide="1530115221"
      @choseDay="clickDay"
      @changeMonth="changeDate"
    ></Calendar>
    <br />
    <div
      class="choseMonth-style"
      style="background-color: #398ade"
      @click="ChoseMonthChock"
    >
      点击跳到2023-08-24
    </div>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component";
export default {
  name: "demoFourteen",
  trendsRoute: true,
  components: {
    Calendar,
  },
  data() {
    return {
      arr2: [],
      arr: [
        {
          date: "2022/01/1",
          className: "mark1",
        },
        {
          date: "2022/01/13",
          className: "mark2",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    clickDay(data) {
      console.log("选中了", data); //选中某天
      this.$toast("选中了" + data);
    },
    clickToday(data) {
      console.log("跳到了本月今天", data); //跳到了本月
    },
    changeDate(data) {
      this.$toast("切换到的月份为" + data);
      console.log("左右点击切换月份", data); //左右点击切换月份
    },
    ChoseMonthChock() {
        // 切换到指定日期
      this.$refs.Calendar.ChoseMonth("2023-08-24"); // 2023-08-24

    //   切换到月份
    //   this.$refs.Calendar.ChoseMonth("2023-06", false); // 2023-06
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-page {
  position: relative;
}

/* 重写css部分 start */
/deep/ .wh_content_item {
  color: black;
}

/deep/ .wh_top_changge li {
  color: black;
}

/deep/ .wh_jiantou1 {
  border-top: 2px solid #030303;
  border-left: 2px solid #030303;
}

/deep/ .wh_jiantou2 {
  border-top: 2px solid #030303;
  border-right: 2px solid #030303;
}

/deep/ .wh_jiantou1 {
  background-color: white;
}

/deep/ .wh_content_all {
  background-color: #ffffff;
}

/deep/ .wh_content_item .wh_isToday {
  background-color: #2b85e4;
}

/deep/ .wh_content_item .wh_chose_day {
  background-color: #9acafc;
}

/* 重写css部分 end */

h3 {
  text-align: center;
  width: 90%;
  margin: auto;
}

.choseMonth-style {
  margin: auto;
  width: 220px;
  height: 44px;
  line-height: 44px;
  /*background: #0fc37c;*/
  color: #fff;
  font-size: 17px;
  text-align: center;
  margin-top: 20px;
}

.wh_container >>> .mark1 {
  background-color: orange;
}

.wh_container >>> .mark2 {
  background-color: blue;
}

.wh_content_item > .wh_isMark {
  background: orange;
}
</style>
