<!-- 
    @created by 刘勇 2023-05-06 10:18:08
    @Updated by 刘勇 2023-05-06 10:18:08
    @description 播放视频：vue-video-player
-->

<template>
  <div class="demo-page demo-eight">
    <van-nav-bar
      title="播放视频：vue-video-player"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      @play="onPlayerPlay"
      @playing="onPlayerPlaying"
      @timeupdate="onPlayerTimeupdate"
    />
  </div>
</template>

<script>
export default {
  name: "demoEight",
  trendsRoute: true,
  data() {
    return {
      playerOptions: {
        // 播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        // 如果true,浏览器准备好时开始回放
        autoplay: false,
        // 默认情况下将会消除任何音频
        muted: true,
        // 导致视频一结束就重新开始
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: "auto",
        // 语言
        language: "zh-CN",
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: "16:9",
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器
        fluid: true,
        // url地址
        sources: [
          {
            type: "video/mp4",
            src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
            // src: "http://12.99.64.144/cbanker/sit/smartWeb/introduction/video/许巍-曾经的你(2015此时此刻演唱会Live).mp4"
          },
        ],
        // 封面地址
        poster: require("@/assets/images/logo.png"),
        // 宽度
        width: document.documentElement.clientWidth,
        // 允许覆盖Video.js无法播放媒体源时显示的默认信息
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        // controls: true,
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: true,
          fullscreenToggle: true, // 全屏按钮
        },
      },
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    onPlayerPlay() {
      // console.log('this.$refs.videoPlayer.player>>>>', this.$refs.videoPlayer.player);
    },
    onPlayerPlaying(player) {
      if (!player.isFullscreen()) {
        // 开启全屏
        this.$refs.videoPlayer.player.requestFullscreen();
        this.$refs.videoPlayer.player.isFullscreen(true);

        // 退出全屏
        // this.$refs.videoPlayer.player.exitFullscreen();
        // this.$refs.videoPlayer.player.isFullscreen(false);
      }
    },
    onPlayerTimeupdate(player) {
      // 退出全屏暂停播放视频
      if (!player.isFullscreen_) {
        this.$refs.videoPlayer.player.pause(); // 暂停
        // this.$refs.videoPlayer.player.play(); // 播放
      }
    },
  },
};
</script>

<style lang="less" scoped>
.demo-eight {
  position: relative;
  height: 100%;
  overflow: hidden;
}

::v-deep .video-js {
  .vjs-big-play-button {
    width: 100px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);

    .vjs-icon-placeholder:before {
      content: "\f101";
      top: 10%;
    }
  }

  &.vjs-has-started {
    &.vjs-user-inactive {
      &.vjs-paused {
        .vjs-control-bar {
          opacity: 0;
        }
      }
    }
  }
}
</style>
