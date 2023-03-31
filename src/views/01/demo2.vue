<template>
    <div class="demo2">
        <van-nav-bar title="选择器" left-text="返回" left-arrow @click-left="onClickLeft" />

        <van-button type="primary" @click.stop="showPicker=true">打开选择器</van-button>
        <com-option-picker v-model="showPicker"/>
    </div>
</template>
  
<script>
import comOptionPicker from '@/components/com-option-picker.vue';
export default {
    name: "demoTwo",
    trendsRoute: true,
    components: {
        comOptionPicker
    },
    data() {
        return {
            showPicker: false,
        };
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        }
    }
};
</script>
  
<style lang="sass" scoped>

</style>
  