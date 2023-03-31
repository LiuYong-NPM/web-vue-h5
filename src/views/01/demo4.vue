<template>
    <div class="demo4">
        <van-nav-bar title="悬浮窗" left-text="返回" fixed left-arrow @click-left="onClickLeft" />

        <com-floating-window
            class="float-window"
            :item-width="200"
            :item-height="200"
            border-radius="4px"
            :whether-welt-is-allowed="false"
        >
            <com-floating-window
                :item-width="50"
                :item-height="50"
                border-radius="4px"
                :whether-welt-is-allowed="false"
                get-container=".float-window"
            >
                1111111111111
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
    },
    data() {
        return {
            
        }
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