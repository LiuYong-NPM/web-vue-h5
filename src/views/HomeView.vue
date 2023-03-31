<template>
    <div class="home-view">
        <van-nav-bar title="前端案例" fixed />

        <van-cell v-for="(item, index) in dataList" :key="index" is-link :title="item.title" @click.stop="jumpPage(item.name)" />
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    trendsRoute: true,
    data() {
        return {
            show: false,
            date: '',
            dataList: [
                { title: '组件示例：选项卡', name: 'demoOne' },
                { title: '组件示例：选择器', name: 'demoTwo' },
                { title: '组件示例：echart折柱混合', name: 'demoThree' },
                { title: '组件示例：悬浮窗', name: 'demoFour' },
                { title: 'html2canvas', name: 'html2Canvas' },
                { title: 'JavaScript中对象（Object）的方法', name: 'demoFive' },
            ]
        }
    },
    methods: {
        formatDate(date) {
            return `${date.getMonth() + 1}/${date.getDate()}`;
        },
        onConfirm(date) {
            this.show = false;
            this.date = this.formatDate(date);
        },
        jumpPage(name) {
            this.$router.push({ name });
        }
    }
}
</script>

<style scoped>
.home-view {
    padding-top: 44px;
}
</style>
