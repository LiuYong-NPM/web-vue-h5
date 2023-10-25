<!--
    @created by 刘勇 2023-10-08 23:10:00 星期天
    @Updated by 刘勇 2023-10-08 23:10:00 星期天
    @description 页面描述
-->

<template>
  <div class="demo-page">
    <van-nav-bar
      title="发音"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <input id="voiceInput" type="text" />
    <button id="voiceBtn">发音</button>
  </div>
</template>

<script>
export default {
  name: "demoSeventeen",
  trendsRoute: true,
  data() {
    return {};
  },
  created() {},
  mounted() {
    /**
     * @created by 刘勇 2023-10-19 22:21:44
     * @Updated by 刘勇 2023-10-19 22:21:44
     * @description WEB API: SpeechSynthesisUtterance
     */
    let voiceInput = document.querySelector("#voiceInput");
    let voiceBtn = document.querySelector("#voiceBtn");
    voiceBtn.onclick = function () {
      const voiceVal = voiceInput.value;
      const speechVoice = new SpeechSynthesisUtterance(voiceVal);
      window.speechSynthesis.speak(speechVoice);
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.demo17 {
  position: relative;
}
</style>
