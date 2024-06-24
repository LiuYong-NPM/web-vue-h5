<template>
    <div class="demo1">
        <van-nav-bar title="截屏操作" left-text="返回" fixed left-arrow @click-left="onClickLeft" />
        
        <div class="demo-content">
            <div class="table" ref="table">
                <div class="row">
                    <div class="cell">测试1</div>
                    <div class="cell">测试2</div>
                    <div class="cell">测试3</div>
                    <div class="cell">测试4</div>
                    <div class="cell">测试5</div>
                    <div class="cell">测试6</div>
                    <div class="cell">测试7</div>
                </div>
                <div class="row" v-for="(item, index) in dataList" :key="index">
                    <div class="cell">{{index}}：{{item.text1}}</div>
                    <div class="cell">{{index}}：{{item.text2}}</div>
                    <div class="cell">{{index}}：{{item.text3}}</div>
                    <div class="cell">{{index}}：{{item.text4}}</div>
                    <div class="cell">{{index}}：{{item.text5}}</div>
                    <div class="cell">{{index}}：{{item.text6}}</div>
                    <div class="cell">{{index}}：{{item.text7}}</div>
                </div>
            </div>
        </div>

        <div class="main" id="main1"></div>

        <div class="demo-content">
            <div class="table" ref="table">
                <div class="row">
                    <div class="cell">测试1</div>
                    <div class="cell">测试2</div>
                    <div class="cell">测试3</div>
                    <div class="cell">测试4</div>
                    <div class="cell">测试5</div>
                    <div class="cell">测试6</div>
                    <div class="cell">测试7</div>
                </div>
                <div class="row" v-for="(item, index) in dataList" :key="index">
                    <div class="cell">{{index}}：{{item.text1}}</div>
                    <div class="cell">{{index}}：{{item.text2}}</div>
                    <div class="cell">{{index}}：{{item.text3}}</div>
                    <div class="cell">{{index}}：{{item.text4}}</div>
                    <div class="cell">{{index}}：{{item.text5}}</div>
                    <div class="cell">{{index}}：{{item.text6}}</div>
                    <div class="cell">{{index}}：{{item.text7}}</div>
                </div>
            </div>
        </div>
        
        <div class="main" id="main2"></div>

        <van-collapse v-model="activeNames">
            <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
            <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
            <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
        </van-collapse>        
        
        <van-button type="primary" @click="canvasImage">屏幕截图</van-button>
    </div>
</template>
  
<script>
import html2canvas from 'html2canvas';
import * as echarts from 'echarts';
export default {
    name: "html2Canvas",
    trendsRoute: true,
    data() {
        return {
            dataList: [
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'},
                {text1: '111', text2: '222', text3: '333', text4: '444', text5: '555', text6: '666', text7: '777'}

            ],
            imgSrc: '',
            activeNames: ['1'],
        };
    },
    methods: {
        onClickLeft() {
            this.$router.back();
        },
        canvasImage() {
            document.querySelector('.demo1').style.height = 'auto';
            document.querySelector('.demo1').style.overflow = 'visible';
            document.querySelectorAll('.demo-content')[0].style.overflow = 'visible';
            document.querySelectorAll('.demo-content')[1].style.overflow = 'visible';
            document.querySelector('.van-nav-bar').classList.remove('van-nav-bar--fixed');

            html2canvas(document.querySelector(".demo1")).then(canvas => {
                // console.log('canvas>>>>>', canvas);
                // console.log('canvas>>>>>', canvas.toDataURL("image/png"));
                this.downloadIamge(canvas.toDataURL("image/png"), 'JS插件截屏');

                document.querySelector('.demo1').style.height = '100%';
                document.querySelector('.demo1').style.overflow = 'auto';
                document.querySelectorAll('.demo-content')[0].style.overflow = 'auto';
                document.querySelectorAll('.demo-content')[1].style.overflow = 'auto';
                document.querySelector('.van-nav-bar').classList.add('van-nav-bar--fixed');
            });

        },
        // imgSrc 为图片链接路径
        downloadIamge(imgSrc, fileName) {
            // 必须同源才能下载
            var alink = document.createElement("a");
            alink.href = imgSrc;
            // fileName保存提示中用作预先填写的文件名
            alink.download = fileName;
            alink.click();
        },
        initEchart1() {
            var chartDom = document.getElementById('main1');
            var myChart = echarts.init(chartDom);
            var option;

            var data = [
            {
                name: 'Grandpa',
                children: [
                {
                    name: 'Uncle Leo',
                    value: 15,
                    children: [
                    {
                        name: 'Cousin Jack',
                        value: 2
                    },
                    {
                        name: 'Cousin Mary',
                        value: 5,
                        children: [
                        {
                            name: 'Jackson',
                            value: 2
                        }
                        ]
                    },
                    {
                        name: 'Cousin Ben',
                        value: 4
                    }
                    ]
                },
                {
                    name: 'Aunt Jane',
                    children: [
                    {
                        name: 'Cousin Kate',
                        value: 4
                    }
                    ]
                },
                {
                    name: 'Father',
                    value: 10,
                    children: [
                    {
                        name: 'Me',
                        value: 5,
                        itemStyle: {
                        color: 'red'
                        }
                    },
                    {
                        name: 'Brother Peter',
                        value: 1
                    }
                    ]
                }
                ]
            },
            {
                name: 'Mike',
                children: [
                {
                    name: 'Uncle Dan',
                    children: [
                    {
                        name: 'Cousin Lucy',
                        value: 3
                    },
                    {
                        name: 'Cousin Luck',
                        value: 4,
                        children: [
                        {
                            name: 'Nephew',
                            value: 2
                        }
                        ]
                    }
                    ]
                }
                ]
            },
            {
                name: 'Nancy',
                children: [
                {
                    name: 'Uncle Nike',
                    children: [
                    {
                        name: 'Cousin Betty',
                        value: 1
                    },
                    {
                        name: 'Cousin Jenny',
                        value: 2
                    }
                    ]
                }
                ]
            }
            ];
            option = {
            visualMap: {
                type: 'continuous',
                min: 0,
                max: 10,
                inRange: {
                color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
                }
            },
            series: {
                type: 'sunburst',
                data: data,
                radius: [0, '90%'],
                label: {
                rotate: 'radial'
                }
            }
            };

            option && myChart.setOption(option);
        },
        initEchart2() {
            var chartDom = document.getElementById('main2');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                }
            },
            legend: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            series: [
                {
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [320, 302, 301, 334, 390, 330, 320]
                },
                {
                name: 'Mail Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                name: 'Affiliate Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                name: 'Video Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [150, 212, 201, 154, 190, 330, 410]
                },
                {
                name: 'Search Engine',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
                }
            ]
            };

            option && myChart.setOption(option);
        }
    },
    mounted() {
        this.initEchart1();
        this.initEchart2();
    }
};
</script>
  
<style lang="less" scoped>
.demo1 {
    position: relative;
    height: 100%;
    overflow: auto;
    
    ::v-deep .van-nav-bar {
        width: 375px;
    }

    .demo-content {
        width: 100%;
        overflow: auto;
        margin-top: 44px;

        .table {
            display: table;
            width: 700px;

            .row {
                display: table-row;

                .cell {
                    display: table-cell;
                    width: 100px;
                }
            }
        }
    }

    .main {
        width: 100%;
        height: 350px;
    }
}
</style>