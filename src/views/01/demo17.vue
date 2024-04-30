<!--
    @created by 刘勇 2023-10-08 23:10:00 星期天
    @Updated by 刘勇 2023-10-08 23:10:00 星期天
    @description 页面描述
-->

<template>
  <div class="demo-page">
    <van-nav-bar
      title="语音"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="file-input">
      <input type="file" id="voiceFile" />
    </div>
    <div class="voice-play">
      <textarea id="voiceInput" placeholder="请输入文字" rows="20" cols="50"> </textarea>
    </div>

    <div class="btn-area">
      <button class="btn" @click="speak">开始播放</button>
      <button class="btn" @click="cancel">取消播放</button>
      <button class="btn" @click="paused">暂停播放</button>
      <button class="btn" @click="restart">重新播放</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "demoSeventeen",
  trendsRoute: true,
  data() {
    return {
      speechVoice: null,
      voiceFile: null,
      voiceInput: null,
    };
  },
  created() {},
  mounted() {
    /**
     * @created by 刘勇 2023-10-19 22:21:44
     * @Updated by 刘勇 2023-10-19 22:21:44
     * @description WEB API: SpeechSynthesisUtterance
     */
    const _that = this;
    _that.voiceFile = document.querySelector("#voiceFile");
    _that.voiceInput = document.querySelector("#voiceInput");

    _that.voiceFile.addEventListener("change", function (event) {
      console.log("event>>>", event);
      const files = event.target.files;
      let file = files[0]; // 获取选择的文件
      let reader = new FileReader(); // 创建新的 FileReader 实例

      reader.onload = function (evt) {
        console.log("evt>>>", evt);
        var fileContent = evt.target.result; // 获取文件内容
        _that.voiceInput.value = fileContent; // 在页面上显示文件内容
      };

      reader.readAsText(file); // 以文本格式读取文件内容
    });
  },
  methods: {
    speak() {
      if (!window.speechSynthesis.speaking) {
        const voiceVal = this.voiceInput.value;
        this.speechVoice = new SpeechSynthesisUtterance(voiceVal);
        window.speechSynthesis.speak(this.speechVoice);
      }
    },
    cancel() {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
    },
    paused() {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
      }
    },
    restart() {
      if (this.speechVoice && window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else {
        this.speak();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-page {
  .voice-play,
  .btn-area {
    margin: 100px auto;
    text-align: center;
  }

  .btn-area {
    display: -webkit-flex;
    display: flex;
    justify-content: space-evenly;
  }  
}
</style>
