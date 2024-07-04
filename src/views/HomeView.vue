<template>
  <div class="home-view">
    <van-nav-bar title="好好学习，天天向上" />

    <div class="home-view-content">
      <van-grid :column-num="4">
        <van-grid-item
          v-for="(item, index) in dataList"
          :text="item.title"
          :key="index"
          is-link
          icon="comment-o"
          @click.stop="jumpPage(item.name)"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  trendsRoute: true,
  data() {
    return {
      show: false,
      date: "",
      dataList: [
        { title: "选项卡", name: "demoOne" },
        { title: "选择器", name: "demoTwo" },
        { title: "echart折柱混合", name: "demoThree" },
        { title: "悬浮窗", name: "demoFour" },
        { title: "html2canvas", name: "html2Canvas" },
        { title: "JS中对象（Object）的方法", name: "demoFive" },
        { title: "JS拖拽排序1", name: "demoSix" },
        { title: "JS拖拽排序2", name: "demoFifteen" },
        { title: "高德地图", name: "demoSeven" },
        { title: "播放视频：vue-video-player", name: "demoEight" },
        { title: "播放视频：video.js", name: "demoNine" },
        { title: "非封闭式环形进度条", name: "demoTen" },
        { title: "Vue表格实现固定表头和首列1", name: "demoEleven" },
        { title: "Vue表格实现固定表头和首列2", name: "demoTwelve" },
        { title: "在线预览PDF", name: "demoThirteen" },
        { title: "vue-calendar-component日历组件", name: "demoFourteen" },
        { title: "漩涡二维数组", name: "demoSixteen" },
        { title: "语音", name: "demoSeventeen" },
        { title: "使用v-html时防XSS攻击", name: "demoEighteen" },
        { title: "vue2导出Excel表格", name: "demoNineteen" },
        { title: "省市区树节点", name: "demoTwenty" },
        { title: "多个request只打开和关闭一个等待动画", name: "twentyOne" },
      ],
    };
  },
  methods: {
    jumpPage(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style scoped>
.home-view {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.home-view-content {
  flex: 1;
  overflow: auto;
}
</style>
