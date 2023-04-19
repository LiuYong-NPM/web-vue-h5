<!-- 
    @created by 刘勇 2023-04-04 10:00:21
    @Updated by 刘勇 2023-04-04 10:00:21
    @description element-ui table表格
-->


<template>
    <div class="demo-seven">
        <van-nav-bar title="测试" left-text="返回" left-arrow @click-left="onClickLeft" />

        <div id="container"></div>
    </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
    name: "demoSeven",
    trendsRoute: true,
    data() {
        return {

        };
    },
    mounted() {
        this.$nextTick(() => {
            this.map && this.map.destroy();
            AMapLoader.load({
                key: "49c4d37cb24673287c3830e2b2efb306", // 申请好的Web端开发者Key，首次调用 load 时必填
                version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                plugins: ['AMap.Scale', 'AMap.Geolocation', 'AMap.MapType', 'AMap.PlaceSearch'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            }).then((AMap) => {
                this.map = new AMap.Map("container", {  //设置地图容器id
                    viewMode: "3D",    //是否为3D地图模式
                    zoom: 11,           //初始化地图级别
                    center: [116.50, 31.77], //初始化地图中心点位置
                });
            }).catch(e => {
                console.log(e);
            })
        });
    }
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