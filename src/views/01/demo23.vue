<!--
    @created by 刘勇 2024-09-11 16:50:52 星期三
    @Updated by 刘勇 2024-09-11 16:50:52 星期三
    @description 页面描述
-->

<template>
  <div class="demo-page">
    <van-nav-bar
      title="vue分段进度条"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="demo-content">
      <TickProgress :precent="85"></TickProgress>
      <!-- <TickProgress :precent="62" :tick-num="5"></TickProgress>
      <TickProgress
        :precent="62"
        active-color="rgb(252, 198, 44)"
      ></TickProgress> -->
    </div>
  </div>
</template>

<script>
import TickProgress from "@/components/com-tick-progress.vue";
export default {
  name: "twentyThree",
  trendsRoute: true,
  components: {
    TickProgress,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.demo-page {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  .demo-content {
    flex: 1;
    overflow: auto;
  }
}
</style>
