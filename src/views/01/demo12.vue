<!--
    @created by 刘勇 2023-05-25 20:21:25 星期四
    @Updated by 刘勇 2023-05-25 20:21:25 星期四
    @description Vue表格实现固定表头和首列2
-->

<template>
  <div class="demo-page">
    <van-nav-bar
      title="Vue表格2"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />    
    <common-table />
  </div>
</template>

<script>
import commonTable from "@/components/com-table.vue";
export default {
  name: "demoTwelve",
  trendsRoute: true,
  components: {
    commonTable,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
