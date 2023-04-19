<!-- 
    @created by 刘勇 2023-04-14 17:18:08
    @Updated by 刘勇 2023-04-14 17:18:08
    @description 调起键盘
-->

<template>
    <div class="demo-eight">
        <van-nav-bar title="调起键盘" left-text="返回" left-arrow @click-left="onClickLeft" />

        <van-field v-model="value" label="调起键盘" placeholder="请输入" autofocus @focus="onFocus"/>
        <div class="demo-test">测试测试测试测试测试</div>
    </div>
</template>

<script>
export default {
    name: "demoEight",
    trendsRoute: true,
    data() {
        return {
            value: ''
        };
    },
    mounted() {
        // this.$nextTick(() => {
        // });
    },
    methods: {
        onFocus(e) {
            console.log('e>>>', e);
            console.log('focus>>>', document.activeElement.focus());
        }
    }
};
</script>

<style lang="less" scoped>
.demo-eight {
    position: relative;
    height: 100%;
    overflow: hidden;

}
</style>