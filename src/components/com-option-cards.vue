<!--
    @created by 刘勇 2023-01-18 13:58:46
    @Updated by 刘勇 2023-01-18 13:58:46
    @description 【选项卡】组件
-->

<template>
    <div
        class="com-option-cards"
        :style="{'grid-template-columns': computedStyle()}"
    >
        <!-- 是否存在【全部】选项 -->
        <div
            v-if="allowCheckAll"
            class="com-option-cards__item com-option-cards__item-all"
            :class="{
                'com-option-cards__item-active': checkedAll,
                'com-option-cards__item-disabled': disabledAll,
                'com-option-cards__item-ellipsis': overflowStyle === 'ellipsis',
                'com-option-cards__item-slide': overflowStyle === 'slide',
                'com-option-cards__item-break': overflowStyle === 'break',
                'com-option-cards__item-border': checkedAll && isActiveBorder,
            }"
            :style="{
                width: cardWidth,
                height: cardHeight,
                'line-height': lineHeight
            }"
            @click.stop="clickCheckedAll(checkedAllVal)"
        >
            {{ this.checkedAllText }}
        </div>

        <div 
            class="com-option-cards__item"
            v-for="(item, index) in dataList"
            :key="index"
            :class="{
                'com-option-cards__item-active': activeArr.includes(item[value]),
                'com-option-cards__item-disabled': item.disabled,
                'com-option-cards__item-ellipsis': overflowStyle === 'ellipsis',
                'com-option-cards__item-slide': overflowStyle === 'slide',
                'com-option-cards__item-break': overflowStyle === 'break',
                'com-option-cards__item-border': activeArr.includes(item[value]) && isActiveBorder,
            }"
            :style="{
                width: cardWidth,
                height: cardHeight,
                'line-height': lineHeight
            }"
            @click.stop="clickActive(item)"            
        >
            {{ item[name] }}
        </div>
    </div>
</template>

<script>
export default {
    name: "comOptionCards",
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        // 选项数据
        dataList: {
            type: Array,
            required: true,
            default() {
                return [];
            }
        },
        // 双向数据绑定
        checked: {
            type: [Array, String, Number]
        },
        // 自定义选项卡每行展示多少选项
        columns: {
            type: [String, Number],
            default: 2
        },
        // 自定义选项卡宽度
        cardWidth: {
            type: String,
            default: 'auto'
        },
        // 自定义选项卡高度
        cardHeight: {
            type: String,
            default: '32px'
        },
        // 单选模式下是否允许取消选中
        isRadioRemove: {
            type: Boolean,
            default: true
        },
        // 是否是多选模式
        multiple: {
            type: Boolean,
            default: false
        },
        // 是否允许选中全部
        allowCheckAll: {
            type: Boolean,
            default: false
        },
        // 【全选】选项文字描述
        checkedAllText: {
            type: String,
            default: '全部'
        },
        // 选项数据文本属性名称
        name: {
            type: String,
            default: 'text'
        },
        // 选项数据value值属性名称
        value: {
            type: String,
            default: 'value'
        },
        // 多选模式下禁用全选选项
        disabledAll: {
            type: Boolean,
            default: false
        },
        // 自定义选项卡高度
        overflowStyle: {
            type: String,
            default: 'ellipsis'
        },
        // 被选中的选项是否显示边框
        isActiveBorder: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        checkedAllVal() {
            let temp = {};
            temp[this.name] = this.checkedAllText;
            temp[this.value] = '';
            return temp;
        },
        lineHeight() {
            const lineHeight = Number(this.cardHeight.replace('px', '')) - 16;
            return `${lineHeight}px`;
        }
    },
    watch: {
        checked: {
            handler(v) {
                const type = Object.prototype.toString.apply(v);
                if (type === '[object Array]') {
                    this.activeArr = v;
                    this.checkedAll = this.judgeCheckedAll();
                } else if (type === '[object String]' || type === '[object Number]') {
                    this.activeArr = [v];
                } else {
                    this.activeArr = [];
                }
            },
            immediate: true,
            deep: true
        }
    },
    data() {
        return {
            activeArr: [], // 已选中数据
            checkedAll: false, // 是否选中全部
            clickVal: '' // 被点击选中的选项的value值
        };
    },
    methods: {
        // 计算选项卡的grid模式
        computedStyle() {
            return `repeat(${Math.abs(this.columns)}, 1fr)`;
        },
        // 多选模式下，点击-全选或取消全选
        clickCheckedAll(item) {
            if (this.disabledAll) return;
            let flag = this.judgeCheckedAll();
            this.clickVal = item[this.value] || '';
            this.toggleAll(!flag);
        },
        // 全选 / 全部选
        toggleAll(flag = false) {
            const {value, checked, dataList, multiple, allowCheckAll} = this;
            let temp = [];
            if (flag) {
                if (allowCheckAll) {
                    dataList.forEach(item => {
                        if (!item.disabled || checked.includes(item[value])) {
                            temp.push(item[value]);
                        }
                    });
                    this.activeArr = temp;
                } else {
                    if (multiple) {
                        dataList.forEach(item => {
                            if (!item.disabled || checked.includes(item[value])) {
                                temp.push(item[value]);
                            }
                        });
                        this.activeArr = temp;
                    } else {
                        return false;
                    }
                }
            } else {
                dataList.forEach(item => {
                    if (item.disabled && checked.includes(item[value])) {
                        temp.push(item[value]);
                    }
                });
                if (multiple) {
                    this.activeArr = temp;
                } else {
                    temp.length ? (this.activeArr = temp) : (this.activeArr = ['']);
                }
            }
            this.processingData();
        },        
        // 选项卡点击事件
        clickActive(obj) {
            if (obj.disabled) return;
            const {value, activeArr, dataList, multiple, isRadioRemove} = this;
            const idx = activeArr.findIndex(item => item === obj[value]);
            // 如果多选
            if (multiple) {
                idx > -1 ? this.activeArr.splice(idx, 1) : this.activeArr.push(obj[value]);
            } else {
                let temp = [];
                if (isRadioRemove) {
                    // 单选：允许取消选中
                    if (idx > -1) {
                        if (activeArr.length === dataList.length) {
                            temp = this.activeArr.splice(idx, 1);
                        }
                    } else {
                        temp = [obj[value]];
                    }
                } else {
                    // 单选：不允许取消选中
                    temp = [obj[value]];
                }
                this.activeArr = temp;
            }

            this.clickVal = obj[value] || '';
            this.processingData();
        },
        // 向父组件传递数据
        processingData() {
            const {value, activeArr, dataList, multiple, allowCheckAll, clickVal} = this;

            let checkedArr = dataList.filter(item => {
                return activeArr.indexOf(item[value]) > -1;
            });

            let val = [];
            if (allowCheckAll) {
                val = activeArr;
            } else {
                if (multiple) {
                    val = activeArr;
                } else {
                    val = activeArr[0] || '';
                }
            }

            this.$emit('change', val);
            this.$emit('select', val, clickVal, checkedArr)
        },
        // 判断是否全选
        judgeCheckedAll() {
            const {activeArr, dataList, value} = this;
            let disabledLen = 0;
            dataList.forEach(item => {
                if (item.disabled && !activeArr.includes(item[value])) disabledLen++;
            });
            const listLen = dataList.length - disabledLen;
            return activeArr.length === listLen;
        }
    },
};
</script>

<style lang="scss" scoped>
.com-option-cards {
    position: relative;
    display: grid;
    grid-auto-columns: auto;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);

    .com-option-cards__item {
        min-width: 80px;
        font-weight: 400;
        font-size: 12px;
        color: #333333;
        background-color: #f7f7f7;
        padding: 8px;
        border-radius: 4px;
        box-sizing: border-box;
        text-align: center;

        &::-webkit-scrollbar {
            display: none !important;
        }

        &.com-option-cards__item-active {
            font-weight: 500 !important;
            color: #ff7538;
            background-color: #fff1eb !important;
        }

        &.com-option-cards__item-disabled {
            font-weight: 400 !important;
            color: #999999;
        }

        &.com-option-cards__item-ellipsis {
            white-space: nowrap;
            word-break: keep-all;
            overflow: hidden;
            text-overflow: ellipsis;
        }        

        &.com-option-cards__item-slide {
            white-space: nowrap;
            word-break: keep-all;
            overflow: auto;
        }

        &.com-option-cards__item-break {
            font-weight: 400 !important;
            color: #999999;
        }
        
        &.com-option-cards__item-break {
            white-space: normal;
            word-break: break-all;
            text-align: center;
            display: flex;
            align-content: center;
            justify-content: center;
            line-height: unset !important;
            height: auto !important;
        }

        &.com-option-cards__item-border {
            border: 1px solid #ff7538 !important;
        }        
    }
}
</style>