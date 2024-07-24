<!--
    @created by 刘勇 2024-07-23 10:31:33 星期二
    @Updated by 刘勇 2024-07-23 10:31:33 星期二
    @description 页面描述
-->

<template>
  <div class="demo-page">
    <van-nav-bar
      title="js 数值计算"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="demo-content">
      <h1>流行的JavaScript库可以用来处理高精度计算</h1>
      <p>bignumber.js：这是一个流行的库，用于在JavaScript中进行任意精度的十进制算术运算。</p>
      <p>decimal.js：与bignumber.js类似，但提供了不同的API和特性。</p>
      <p>math.js：一个广泛的数学库，支持大数运算以及其他许多数学功能。</p>
    </div>
  </div>
</template>

<script>
import BigNumber from "bignumber.js";
export default {
  name: "twentyTwo",
  trendsRoute: true,
  data() {
    return {};
  },

  mounted() {
    // 加法：0.2 + 0.1 = 0.3
    const result1 = new BigNumber("0.2").plus(new BigNumber("0.1"));
    console.log("0.2 + 0.1 = ", result1.toString());

    // 减法：0.3 - 0.1 = 0.2
    const result2 = new BigNumber("0.3").minus(new BigNumber("0.1"));
    console.log("0.3 - 0.1 = ", result2.toString());

    // 乘法：0.2 * 0.1 = 0.02
    const result3 = new BigNumber("0.2").multipliedBy(new BigNumber("0.1"));
    console.log("0.2 * 0.1 = ", result3.toString());

    // 除法：0.2 / 0.1 = 2
    const result4 = new BigNumber("0.2").dividedBy(new BigNumber("0.1"));
    console.log("0.2 / 0.1 = ", result4.toString());
  },
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
    padding: 12px;
  }
}
</style>
