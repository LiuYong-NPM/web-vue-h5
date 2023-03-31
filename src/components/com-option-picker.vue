<!--
    @created by 刘勇 2023-01-29 09:36:37 星期天
    @Updated by 刘勇 2023-01-29 09:36:37 星期天
    @description 选项-选择器
-->

<template>
    <van-popup
        v-model="isShow"
        round
        position="bottom"
        close-on-popstate
        safe-area-inset-bottom
        get-container="body"
        :style="{
            height: '35vh'
        }"
        @close="onClose"
    >
        <van-picker
            title="选择器"
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="onCancel"
        />
    </van-popup>
</template>

<script>
export default {
    name: "com-option-picker",
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        checked: {
            handler(nVal) {
                if (nVal) this.isShow = true;
            },
            immediate: true
        }  
    },
    data() {
        return {
            isShow: false, // 是否显示-底部弹窗 
            columns: ['选项1', '选项2', '选项3', '选项4', '选项5', '选项6', '选项7', '选项8']
        };
    },
    methods: {
        // 关闭筛选器弹窗
        onClose() {
            this.$emit('change', false);
        },
        // 确认按钮
        onConfirm(value, index) {
            this.isShow = false;
            this.$emit('change', false);            
            this.$toast(`当前值：${value}, 当前索引：${index}`);
        },
        // 取消按钮
        onCancel() {
            this.isShow = false;
            this.$emit('change', false);
        }
    },
};
</script>