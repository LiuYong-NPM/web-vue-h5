<!--
    @created by 刘勇 2024-06-24 21:19:40 星期一
    @Updated by 刘勇 2024-06-24 21:19:40 星期一
    @description 多个request只打开和关闭一个等待动画
-->

<template>
  <div class="demo-page">
    <van-nav-bar
      title="多个request只打开和关闭一个等待动画"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="demo-content"></div>
  </div>
</template>

<script>
export default {
  name: "twentyOne",
  trendsRoute: true,
  data() {
    return {};
  },
  created() {
    this.$request({
      url: "https://bit.ly/2mTM3nY",
      method: "get",
      responseType: "stream",
      params: {},
    }).then(
      (result) => {
        console.log("result>>>>", result);
      },
      (error) => {
        console.log("error>>>>", error);
      }
    );
  },
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
