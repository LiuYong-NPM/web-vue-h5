<template>
  <div class="home-view">
    <van-nav-bar title="好好学习，天天向上" />

    <div class="home-view-content">
      <van-cell
        v-for="(item, index) in dataList"
        :key="index"
        is-link
        :title="item.title"
        @click.stop="jumpPage(item.name)"
      />
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
        { title: "组件示例：选项卡", name: "demoOne" },
        { title: "组件示例：选择器", name: "demoTwo" },
        { title: "组件示例：echart折柱混合", name: "demoThree" },
        { title: "组件示例：悬浮窗", name: "demoFour" },
        { title: "html2canvas", name: "html2Canvas" },
        { title: "JS中对象（Object）的方法", name: "demoFive" },
        { title: "JS拖拽排序", name: "demoSix" },
        { title: "高德地图", name: "demoSeven" },
        { title: "播放视频：vue-video-player", name: "demoEight" },
        { title: "播放视频：video.js", name: "demoNine" },
        { title: "非封闭式环形进度条", name: "demoTen" },
        { title: "Vue表格实现固定表头和首列1", name: "demoEleven" },
        { title: "Vue表格实现固定表头和首列2", name: "demoTwelve" },
        { title: "在线预览PDF", name: "demoThirteen" },
        { title: "vue-calendar-component日历组件", name: "demoFourteen" },
        { title: "拖拽排序", name: "demoFifteen" },
        { title: "漩涡二维数组", name: "demoSixteen" },
        { title: "在线预览文件", name: "demoSeventeen" },
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
