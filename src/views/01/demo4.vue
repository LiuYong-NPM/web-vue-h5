<template>
    <div class="demo4">
        <van-nav-bar title="悬浮窗" left-text="返回" fixed left-arrow @click-left="onClickLeft" />

        <com-floating-window
            class="float-window"
            :item-width="200"
            :item-height="200"
            border-radius="4px"
            :whether-welt-is-allowed="false"
            background-color="red"
        >
            <com-floating-window
                :item-width="50"
                :item-height="50"
                border-radius="4px"
                :whether-welt-is-allowed="false"
                get-container=".float-window"
                :z-index="999"
                position="absolute"
                background-color="green"
            >
            </com-floating-window>
        </com-floating-window>
    </div>
</template>
  
<script>
import comFloatingWindow from '@/components/com-floating-window.vue';
export default {
    name: "demoFour",
    trendsRoute: true,
    components: {
        comFloatingWindow
    }
}
</script>
  
<style lang="less" scoped>
.demo4 {
    position: relative;
    .demo-fixed-icon {
        width: 40px;
        height: 40px;
    }
}
</style>