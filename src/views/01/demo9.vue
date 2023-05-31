<!-- 
    @created by 刘勇 2023-05-06 10:18:08
    @Updated by 刘勇 2023-05-06 10:18:08
    @description 播放视频：video.js
-->

<template>
  <div class="demo-page demo-nine">
    <van-nav-bar
      title="播放视频"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <video
      ref="video"
      id="my-video"
      class="video-js vjs-default-skin vjs-big-play-centered"
      controls
      preload="auto"
      poster="@/assets/images/logo.png"
      x5-video-player-type="h5"
      data-setup="{}"
    >
      <source
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        type="video/mp4"
      />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
  </div>
</template>

<script>
export default {
  name: "demoNine",
  trendsRoute: true,
  data() {
    return {};
  },
  mounted() {
    // eslint-disable-next-line no-undef, no-unused-vars
    var player = videojs("my-video", {
      muted: true,
      playbackRates: [0.7, 1.0, 1.5, 2.0],
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.video-js {
  width: 100%;
  height: 210px;
}
</style>
