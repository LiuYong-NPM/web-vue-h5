<!--
    @created by 刘勇 2023-10-08 23:10:00 星期天
    @Updated by 刘勇 2023-10-08 23:10:00 星期天
    @description 使用v-html时防XSS攻击
-->

<template>
  <div class="demo-page">
    <van-nav-bar
      title="使用v-html时防XSS攻击"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <input type="text" v-model="keyWord" />
    <div v-dompurify-html="keyWordHeightLight('<script>alert(/xss/)</script>', keyWord)"></div>
  </div>
</template>

<script>
export default {
  name: "demoEighteen",
  trendsRoute: true,
  data() {
    return {
      keyWord: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 关键字高亮
    keyWordHeightLight(value, keyWord, color = "#ff7538") {
      if (!value) return "";
      if (value.indexOf(keyWord) > -1) {
        return value.replace(
          new RegExp(`${keyWord}`, "igm"),
          `<font color='${color}'>${keyWord}</font>`
        );
      } else {
        return value;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-page {
}
</style>
