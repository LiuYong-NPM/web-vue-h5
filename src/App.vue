<template>
    <div id="_rootDiv" class="_rootDiv">

        <!-- 缓存页面 -->
        <keep-alive :include="dataList">
            <router-view v-if="$route.meta.keepAlive" :key="key"></router-view>
        </keep-alive>

        <!-- 无需缓存页面 -->
        <router-view v-if="!$route.meta.keepAlive" :key="key"></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            includeList: []
        }
    },
    computed: {
        key() {
            return this.$route.path;
        },
        dataList() {
            return this.$store.getters.keepAlive || [];
        }
    },
    watch: {
        '$route': {
            handler(nVal, oVal) {
                // 从vuex获取缓存页面数据
                let keepAlive = this.$store.getters.keepAlive || [];

                // 特殊处理
                if ((oVal && !oVal.name && oVal.path === '/') || !oVal) {
                    // 【进入】缓存页面之前，【添加】缓存
                    if (nVal.name && nVal.meta.keepAlive) {
                        // 检查缓存页面的name是否已经存储到keepAlive中
                        const index = keepAlive.lastIndexOf(nVal.name);

                        // 【添加】缓存
                        if (index === -1) keepAlive.push(nVal.name);

                        // 缓存页面数据存储到 Vuex
                        this.$store.commit('keepAlive', keepAlive);
                    }
                }

                this.includeList = keepAlive;
            },
            deep: true,
            immediate: true
        }
    }
}
</script>

<style lang="scss">
#_rootDiv {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100% !important;
    width: 100% !important;
    background: #f0f2f4;
    .demo-fixed-icon {
        width: 40px;
        height: 40px;
    }    
}
</style>
