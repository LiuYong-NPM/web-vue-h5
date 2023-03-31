<template>
    <div class="demo1">
        <van-nav-bar title="选项卡" left-text="返回" left-arrow @click-left="onClickLeft" />

        <h3>选项卡：单选</h3>
        <com-option-cards v-model="cardVal1" :card-height="'28px'" :data-list="cardList1" @select="onSelect"/>

        <br/>

        <h3>选项卡：多选</h3>
        <com-option-cards v-model="cardVal2" :data-list="cardList1" @select="onSelect" :multiple="true"/>        

        <br/>

        <h3>选项卡：多选（全选+禁止选择项+默认未选中）</h3>
        <com-option-cards v-model="cardVal3" :allowCheckAll="true" :data-list="cardList2" @select="onSelect" :multiple="true"/>

        <br/>

        <h3>选项卡：多选（全选+禁止选择项+默认选中）</h3>
        <com-option-cards v-model="cardVal4" :allowCheckAll="true" :data-list="cardList2" @select="onSelect" :multiple="true"/>        
    </div>
</template>
  
<script>
// import { toThousands1, toBinary2, binaryToDecimalism } from '@/utils/utils';
import comOptionCards from '@/components/com-option-cards.vue';
export default {
    name: "demoOne",
    trendsRoute: true,
    keepAlive: true,
    components: {
        comOptionCards
    },
    data() {
        return {
            cardList1: [
                {text: '选项一', value: '1'},
                {text: '选项二', value: '2'},
                {text: '选项三', value: '3'},
                {text: '选项四', value: '4'},
                {text: '选项五', value: '5'},
                {text: '选项六', value: '6'}
            ],
            cardList2: [
                {text: '选项一', value: '1'},
                {text: '选项二', value: '2'},
                {text: '选项三', value: '3'},
                {text: '选项四', value: '4'},
                {text: '选项五', value: '5'},
                {text: '选项六', value: '6', disabled: true}
            ],            
            cardVal1: '',
            cardVal2: [],
            cardVal3: [],
            cardVal4: ['6']
        };
    },
    created() {
        // console.log('toThousands1(100000)>>>>', toThousands1(100000));
        // console.log('JS十进制转二进制toBinary2(0)>>>>', toBinary2(0, 3, '0'));
        // console.log('JS十进制转二进制toBinary2(2)>>>>', toBinary2(2, 3, '0'));
        // console.log('JS十进制转二进制toBinary2(4)>>>>', toBinary2(4, 3, '0'));
        // console.log('JS十进制转二进制toBinary2(6)>>>>', toBinary2(6, 3, '0'));
        // console.log('JS十进制转二进制toBinary2(8)>>>>', toBinary2(8, 3, '0'));
        // console.log('JS十进制转二进制toBinary2(14)>>>>', toBinary2(14, 3, '0'));
        // console.log('JS十进制转二进制toBinary2(16)>>>>', toBinary2(16, 3, '0'));
        // console.log('JS十进制转二进制toBinary2(32)>>>>', toBinary2(32, 3, '0'));
        // console.log('JS十进制转二进制toBinary2(128)>>>>', toBinary2(128, 3, '0'));
        // console.log('JS十进制转二进制toBinary2(256)>>>>', toBinary2(256, 3, '0'));
        // console.log('JS十进制转二进制toBinary2(250)>>>>', toBinary2(250, 3, '0'));
        // console.log('JS十进制转二进制toBinary2(130)>>>>', toBinary2(130, 3, '0'));
        // console.log('JS二进制转十进制binaryToDecimalism("10101101")>>>>', binaryToDecimalism("10101101"));
        // this.queryInstace();
    },
    methods: {
        queryInstace() {
            this.$http.get('https://www.runoob.com/try/ajax/json_demo.json').then(
                response => {
                    console.log('response>>>>>', response);
                }
            ).catch(
                error => {
                    console.log('error>>>>>>', error);
                }
            );
        },
        onSelect(val, clickVal, checkedArr) {
            console.log('val>>>', JSON.stringify(val));
            console.log('clickVal>>>', JSON.stringify(clickVal));
            console.log('checkedArr>>>', JSON.stringify(checkedArr));
        }
    }
}
</script>
  
<style lang="less" scoped>
.demo1 {
    position: relative;
    height: 100%;
    overflow: auto;
}
</style>