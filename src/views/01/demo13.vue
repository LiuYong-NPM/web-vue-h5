<!--
    @created by 刘勇 2023-05-25 20:21:25 星期四
    @Updated by 刘勇 2023-05-25 20:21:25 星期四
    @description Vue表格实现固定表头和首列2
-->

<template>
  <div class="demo-page">
    <van-nav-bar
      title="在线预览PDF"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="demo-page-div">
      <!-- '#toolbar=0'：iframe隐藏头部的toolbar -->
      <iframe width="100%" height="100%" :src="pdfUrl + '#toolbar=0'"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "demoThirteen",
  trendsRoute: true,
  components: {},
  data() {
    return {
      pdfUrl:
        "https://qxb-img-osscache.qixin.com/limited_consumption/b901e1e31abd1f64527254ac6a35303c.pdf",
    };
  }
};
</script>

<style lang="scss" scoped>
.demo-page {
  display: flex;
  flex-direction: column;

  .demo-page-div {
    flex: 1;
    overflow: auto;
  }
}
</style>
