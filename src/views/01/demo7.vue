<!-- 
    @created by 刘勇 2023-04-04 10:00:21
    @Updated by 刘勇 2023-04-04 10:00:21
    @description element-ui table表格
-->

<template>
  <div class="demo-seven">
    <van-nav-bar
      title="高德地图"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <div id="container"></div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "demoSeven",
  trendsRoute: true,
  data() {
    return {};
  },

  mounted() {
    // 获取定位
    this.getLocation();
  },

  methods: {
    // 获取定位
    getLocation() {
      // 初始化地图中心点位置：[经度, 纬度]
      let center = [116.5, 31.77];

      const _that = this;

      if ("geolocation" in navigator) {
        /**
         * getCurrentPosition(success, error, options) 函数获取用户当前定位位置。
         *
         * function success(position) {
         *      doSomething(position.coords.latitude, position.coords.longitude);
         * }
         *
         * function error() {
         *      alert("Sorry, no position available.");
         * }
         *
         * const options = {
         *      enableHighAccuracy: true,
         *      maximumAge: 30000,
         *      timeout: 27000
         * }
         *
         * 这会异步地请求获取用户位置，并查询定位硬件来获取最新信息。
         * 当定位被确定后，定义的回调函数就会被执行。
         * 你可以选择性地提供第二个回调函数，当有错误时会被执行。
         * 第三个参数也是可选的，你可以通过该对象参数设定最长可接受的定位返回时间、等待请求的时间和是否获取高精度定位。
         */
        navigator.geolocation.getCurrentPosition(
          // 成回调
          function (position) {
            // console.log("position>>>>>>", position);
            // 经度
            console.log("经度longitude>>>" + position.coords.longitude);

            // 纬度
            console.log("纬度latitude>>>" + position.coords.latitude);
            
            // 中心点位置
            center = [position.coords.longitude, position.coords.latitude];

            // 地图初始化
            _that.initMap(center);
          },

          // 错误回调
          function (error) {
            console.log("Error occurred. Error code: " + error.code);
            // error.code 可以是：
            //   1: 权限被拒绝
            //   2: 位置信息是未知的
            //   3: 请求位置信息失败

            // 地图初始化
            _that.initMap(center);
          },

          // 配置
          {
            enableHighAccuracy: true, // 是否获取高精度定位
            maximumAge: 3000, // 最长可接受的定位返回时间
            timeout: 2000, // 等待请求的时间
          }
        );
      } else {
        // 地图初始化
        _that.initMap(center);
      }
    },

    // 地图初始化
    initMap(center = [116.5, 31.77]) {
      this.$nextTick(() => {
        this.map && this.map.destroy();
        AMapLoader.load({
          key: "49c4d37cb24673287c3830e2b2efb306", // 申请好的Web端开发者Key，首次调用 load 时必填
          version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
          plugins: [
            "AMap.Scale",
            "AMap.Geolocation",
            "AMap.MapType",
            "AMap.PlaceSearch",
          ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        })
          .then((AMap) => {
            this.map = new AMap.Map("container", {
              //设置地图容器id
              viewMode: "3D", //是否为3D地图模式
              zoom: 11, //初始化地图级别
              center: center, //初始化地图中心点位置
            });
          })
          .catch((e) => {
            console.log(e);
          });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.demo-seven {
  position: relative;
  height: 100%;
  overflow: hidden;

  #container {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 800px;
  }
}
</style>
