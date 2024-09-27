<template>
  <div class="container">
    <div class="progress-container" :style="styleObj">
      <div class="progress" :style="{ width: precent + '%' }"></div>
      <div class="progress-bg"></div>
      <div class="progress-tick-container">
        <div
          class="progress-tick"
          v-for="(item, index) in new Array(tickNum - 1)"
          :key="'tick' + index"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 进度条占值百分比
    precent: {
      type: Number,
      // default: 0
      default: 30,
    },
    height: {
      type: Number,
      default: 5,
    },
    // 间距
    spacing: {
      type: String,
      default: "4px",
    },
    // 进度条整体背景色
    wholeBgColor: {
      type: String,
      default: "#D8D8D8",
    },
    // 进度条有效值颜色
    activeColor: {
      type: String,
      default: "#ff7538",
    },
    // 分段数量，默认5段
    tickNum: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      styleObj: {},
    };
  },
  mounted() {
    this.styleObj = {
      height: this.height + "px",
      "--spacing": this.spacing,
      "--whole-bg-color": this.wholeBgColor,
      "--active-color": this.activeColor,
    };
  },
};
</script>

<style lang="scss" scoped>
div.container {
  width: 100%;
}
.progress-container {
  $progress-spacing: var(--spacing, 4px);
  $progress-whole-bg-color: var(--whole-bg-color, #03091d);
  $progress-bg-color: var(--whole-bg-color, #0a1c45);
  $progress-active-color: var(--active-color, #1f8df2);
  width: 100%;
  background-color: $progress-whole-bg-color;
  position: relative;
  .progress {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 100%;
    height: 100%;
    background-color: $progress-active-color;
    z-index: 9;
  }
  .progress-bg {
    background-color: $progress-bg-color;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .progress-tick-container {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-evenly;
    .progress-tick {
      width: $progress-spacing;
      height: 100%;
      background-color: #ffffff;
      z-index: 99;
    }
  }
}
</style>
