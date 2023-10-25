<!--
    @created by 刘勇 2023-09-15 13:22:33 星期五
    @Updated by 刘勇 2023-09-15 13:22:33 星期五
    @description 页面描述
-->

<template>
  <div class="demo-page">
    <van-nav-bar
      title="漩涡二维数组"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <h1>[</h1>
    <h1 v-for="(item, index) in arr2" :key="index">{{ item }}</h1>
    <h1>]</h1>

    <button @click="onClick">全屏 / 取消全屏</button>
  </div>
</template>

<script>
import { toggleFullScreen } from "@/utils/utils";
export default {
  name: "demoSixteen",
  trendsRoute: true,
  data() {
    return {
      arr2: [], // 漩涡二维数组
    };
  },
  created() {
    this.arr2 = this.vortex(3, 4);
    console.log("漩涡二维数组(3, 4)>>>", this.arr2);
  },
  methods: {
    /**
     * 漩涡二维数组
     *
     *  1   2   3   4
     *  10  11  12  5
     *  9   8   7   6
     *
     * @param {Number} n 列数
     * @param {Number} m 行数
     */
    vortex(n, m) {
      const nums = new Array(n).fill(0).map(() => new Array(m).fill(0));
      let i = 0;
      let j = 0;
      let stepI = 0;
      let stepJ = 1;
      let count = 1;
      function hasBlock() {
        return !nums[i] || nums[i][j] !== 0;
      }
      const num = 1;
      while (num === 1) {
        nums[i][j] = count++;
        // 改变 i 和 j
        i += stepI;
        j += stepJ;

        // 有阻碍，转弯
        if (hasBlock()) {
          i -= stepI;
          j -= stepJ;

          if (stepI === 0) {
            stepI = stepJ;
            stepJ = 0;
          } else {
            stepJ = -stepI;
            stepI = 0;
          }

          i += stepI;
          j += stepJ;

          if (hasBlock()) {
            break;
          }
        }
      }
      return nums;
    },
    onClick() {
      toggleFullScreen(document.documentElement);
    },
  },
};
</script>
