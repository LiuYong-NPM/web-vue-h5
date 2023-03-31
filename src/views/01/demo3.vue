<template>
    <div class="demo3">
        <van-nav-bar title="前端案例3" left-text="返回" fixed left-arrow @click-left="onClickLeft" />

        <div class="demo-echart" ref="echartRef"></div>
    </div>
</template>

<script>
export default {
    name: "demoThree",
    trendsRoute: true,
    data() {
        return {
            data1: [85.69, 236.91, 393.16, 544.38, -700.63, 854.68, 1005.51, -1161.36, 1312.19, 1468.04, 150.83],
            data2: [0, 151.22, 156.26, 151.22, 156.26, 154.05, 150.83, 155.85, 150.83, 155.85, -1317.22],

            // data1: [-47.06, -89.26, -132.86, -176.43, -218.62, -262.22, -304.41, -72.23, -42.19],
            // data2: [0, -42.20, -43.60, -43.57, -42.19, -43.60, -42.19, 232.17, 30.05],            

            min1: 0,
            max1: 250,
            interval1: 50,
            
            min2: 0,
            max2: 250,
            interval2: 50
        };
    },
    methods: {
        initEchart() {
            const container = this.$refs.echartRef;
            const myEchart = this.$echarts.init(container);
            myEchart && myEchart.clear();

            this.computedNumber();

            let option = {
                grid: {
                    x: 40,
                    x2: 40,
                    y2: 20
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: params => {
                        const str1 = `${params[0].seriesName}：${params[0].value}`;
                        const str2 = `${params[1].seriesName}：${params[1].value}`;
                        return `${params[0].axisValue}<br/>${str1}<br/>${str2}`;
                    }
                },
                legend: {
                    data: [
                        {
                            name: '存量'
                        },
                        {
                            name: '增量',
                            icon: 'rect'
                        }                        
                    ]
                },
                xAxis: [
                    {
                        type: 'category',
                        scale: true,
                        data: ['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月'],
                        axisTick: {
                            show: false,
                            alignWidthLabel: true
                        },
                        axisLabel: {
                            interval: 0,
                            fontSize: 10,
                            fontWeight: 400,
                            color: '#999999',
                            margin: 10
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#EEEEEE'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '存量',
                        position: 'left',
                        min: this.min1,
                        max: this.max1,
                        interval: this.interval1,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#eeeeee'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            fontSize: 10,
                            fontWeight: 400,
                            color: 'rgba(0,0,0,0.45)'
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed',
                                color: '#979797'
                            }
                        },
                        nameTextStyle: {
                            fontSize: 10,
                            fontWeight: 400,
                            color: 'rgba(0,0,0,0.45)',
                            algin: 'right'
                        },
                        nameGap: 8
                    },
                    {
                        type: 'value',
                        name: '增量',
                        position: 'right',
                        min: this.min2,
                        max: this.max2,
                        interval: this.interval2,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#eeeeee'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            fontSize: 10,
                            fontWeight: 400,
                            color: 'rgba(0,0,0,0.45)'
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed',
                                color: '#979797'
                            }
                        },
                        nameTextStyle: {
                            fontSize: 10,
                            fontWeight: 400,
                            color: 'rgba(0,0,0,0.45)',
                            algin: 'right'
                        },
                        nameGap: 8
                    }
                ],
                series: [
                    {
                        name: '存量',
                        type: 'line',
                        yAxisIndex: 0,
                        symbol: 'none',
                        clip: true,
                        data: this.data1
                    },                 
                    {
                        name: '增量',
                        type: 'bar',
                        yAxisIndex: 1,
                        data: this.data2
                    }
                ]
            };

            option && myEchart.setOption(option);
        },
        computedNumber() {
            const {data1, data2} = this;

            this.min1  = 0;
            this.min2  = 0;

            this.max1  = Math.ceil(Math.max(...data1.map(item => Math.abs(item))) / 5) * 5;
            this.max2  = Math.ceil(Math.max(...data2.map(item => Math.abs(item))) / 5) * 5;

            this.interval1 = this.max1 / 5;
            this.interval2 = this.max2 / 5;

            const min11  = Math.floor(Math.min(...data1) / 5) * 5;
            const min21  = Math.floor(Math.min(...data2) / 5) * 5;
            if (min11 < 0 || min21 < 0) {
                this.min1  = -this.max1;
                this.min2  = -this.max2;
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initEchart();            
        });
    }
};
</script>

<style lang="less" scoped>
.demo3 {
    padding-top: 44px;
    .demo-echart {
        width: 100%;
        height: 500px;
    }
}

</style>
