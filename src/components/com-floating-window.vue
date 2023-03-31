<!--
    @created by 刘勇 2023-03-09 21:14:24 星期四
    @Updated by 刘勇 2023-03-09 21:14:24 星期四
    @description 悬浮窗
-->

<template>
    <div
        ref="floatingWindow"
        class="com-floating-window"
        :style="{ 
            'width': itemWidth + 'px', 
            'height': itemHeight + 'px', 
            'left': left + 'px', 
            'top': top + 'px',
            'border-radius': borderRadius
        }"
    >
        <slot name="default"></slot>
    </div>
</template>

<script>
export default {
    name: "comFloatingWindowVue",
    props: {
        // 悬浮窗宽度
        itemWidth: {
            type: Number,
            default: 200
        },
        // 悬浮窗高度
        itemHeight: {
            type: Number,
            default: 300
        },
        // 圆角大小
        borderRadius: {
            type: [Number, String],
            default: '4px'
        },
        // 导航栏的高度
        navHeight: {
            type: Number,
            default: 44
        },
        // 悬浮窗与屏幕边框的间距
        gapWidth: {
            type: Number,
            default: 0
        },
        // 距离屏幕顶部的距离 到 屏幕可见高度的 占比
        coefficientHeight: {
            type: Number,
            default: 0.7
        },
        // 是否自动贴边
        whetherWeltIsAllowed: {
            type: Boolean,
            default: true
        },
        // 是否允许移动
        whetherToAllowMovement: {
            type: Boolean,
            default: true
        },
        // 挂载节点
        getContainer: {
            type: String,
            default: 'body'
        }
    },
    data() {
        return {
            clientWidth: 0, // 屏幕可见宽度
            clientHeight: 0, // 屏幕可见高度
            left: 0, // 定位 left
            top: 0, // 定位 top
            getContainerNode: null // 挂载节点
        }
    },
    mounted() {
        // 数据初始化
        this.initData();
        // 悬浮窗拖拽
        if (this.whetherToAllowMovement) this.floatingWindowDrag();
    },
    methods: {
        // 数据初始化
        initData() {
            // 获取挂载节点
            const getContainerNode = document.querySelector(this.getContainer);

            this.getContainerNode = getContainerNode;

            // 获取挂载节点的可见宽度&可见高度
            this.clientWidth = getContainerNode.clientWidth;
            this.clientHeight = getContainerNode.clientHeight;

            // 悬浮窗定位
            this.left = this.clientWidth - this.itemWidth - this.gapWidth;
            this.top = this.clientHeight * this.coefficientHeight;

            // 避免悬浮窗超出屏幕
            const bottom = this.clientHeight - this.itemHeight - this.gapWidth;
            if (this.top >= bottom) this.top = bottom;
        },
        // 悬浮窗拖拽
        floatingWindowDrag() {
            this.$nextTick(() => {
                const floatingWindow = this.$refs.floatingWindow;

                if (window.navigator.userAgent.indexOf('Windows') > -1) {
                    let _that = this;
                    floatingWindow.onmousedown = function(e) {
                        // 禁止冒泡
                        e.stopPropagation();
                        // 组织默认事件
                        e.preventDefault();

                        // 执行父组件自定义事件
                        _that.$emit('touchstart');

                        document.onmousemove = function(e) {
                            // 禁止冒泡
                            e.stopPropagation();
                            _that.touchmoveFunc.call(_that, e);
                        };

                        document.onmouseup = function(e) {
                            document.onmousemove = null;
                            _that.touchendFunc.call(_that, e);
                        };                     
                    }
                } else {
                    floatingWindow.addEventListener("touchstart", e => {
                        // 禁止冒泡
                        e.stopPropagation();
                        // 组织默认事件
                        e.preventDefault();
                        
                        // 只有长按超过500ms才允许拖动，避免点击也会触发拖拽
                        setTimeout(() => {
                            // 执行父组件自定义事件
                            this.$emit('touchstart');
                            floatingWindow.style.transition = 'none';
                        }, 500);
                    });

                    floatingWindow.addEventListener("touchmove", e => {
                        this.touchmoveFunc(e);
                    });

                    floatingWindow.addEventListener("touchend", e => {
                        this.touchendFunc(e);
                    });
                }
            });
        },
        // touchmove
        touchmoveFunc(e) {
            // 禁止冒泡
            e.stopPropagation();
            // 执行父组件自定义事件
            this.$emit('touchmove');

            // PC端 与 移动端 取值不同
            let left = this.left;
            let top = this.top;
            if (window.navigator.userAgent.indexOf('Windows') > -1) {
                if (e.buttons === 1) {
                    left = e.clientX - this.getContainerNode.offsetLeft - this.itemWidth / 2;
                    top = e.clientY - this.getContainerNode.offsetTop - this.itemHeight / 2;
                } else {
                    return;
                }
            } else {
                // 元素只能x轴或者y轴单一方向移动，e.targetTouches记录移动的坐标
                if (e.targetTouches.length === 1) {
                    let touch = e.targetTouches[0];
                    left = touch.clientX - this.getContainerNode.offsetLeft - this.itemWidth / 2;
                    top = touch.clientY - this.getContainerNode.offsetTop - this.itemHeight / 2;
                } else {
                    return;
                }
            }

            // 禁止拖拽超出屏幕可见区域

            // 1、屏幕左侧&右侧
            if (left < 0) {
                // 超出左侧
                this.left = 0;
            } else {
                // 超出右侧
                if (left > this.clientWidth - this.itemWidth) {
                    this.left = this.clientWidth - this.itemWidth;
                } else {
                    // 未超出
                    this.left = left;
                }
            }

            // 2、屏幕顶部&底部
            if (top < 0) {
                // 超出顶部
                this.top = 0;
            } else {
                // 超出底部
                if (top > this.clientHeight - this.itemHeight) {
                    this.top = this.clientHeight - this.itemHeight;
                } else {
                    // 未超出
                    this.top = top;
                }
            }            
        },
        // touchend
        touchendFunc(e) {
            // 禁止冒泡
            e.stopPropagation();
            
            this.$refs.floatingWindow.style.transition = 'all 0.01s';

            // 自动贴边
            if (this.whetherWeltIsAllowed) {
                // 方式一：只要不超出屏幕，拖拽之后自动贴边
                // 悬浮窗距离哪边近就自动贴边哪边
                if (this.left > this.clientWidth / 2) {
                    this.left = this.clientWidth - this.itemWidth - this.gapWidth;
                } else {
                    const right = this.clientWidth - this.left - this.itemWidth;
                    if (this.left >= right) {
                        this.left = this.clientWidth - this.itemWidth - this.gapWidth;
                    } else {
                        this.left = this.gapWidth;
                    }
                }

            } else {
                // 方式二：只要不超出屏幕，拖拽到哪就停哪
                // 悬浮窗拖动超过左侧屏幕处理
                if (this.left <= 0) {
                    this.left = this.gapWidth;
                } else {
                    // 悬浮窗拖动超过右侧屏幕处理
                    if (this.left + this.itemWidth >= this.clientWidth) {
                        this.left = this.clientWidth - this.itemWidth - this.gapWidth;
                    }
                }
            }

            // 悬浮窗拖动覆盖页面导航栏或者超出屏幕顶部处理
            if (this.top <= this.navHeight) {
                this.top = this.navHeight + this.gapWidth;
            } else {
                // 悬浮窗拖动超出屏幕底部处理
                const bottom = this.clientHeight - this.itemHeight - this.gapWidth;
                if (this.top >= bottom) this.top = bottom;
            }

            // 执行父组件自定义事件
            this.$emit('touchend');
        }
    }
}
</script>

<style lang="less" scoped>
.com-floating-window {
    position: relative;
    background-color: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    color: #666666;
    z-index: 99;
    transition: all 0.01s;
    overflow: hidden;
}
</style>