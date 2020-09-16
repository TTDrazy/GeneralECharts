import React, { Component } from "react";
import style from "../Main.module.scss";
import ReactEcharts from "echarts-for-react";

export default class Pie extends Component {
    getOptions = () => {
        return [
            {
                title: "指标占比环形图",
                options: {
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle: {
                                opacity: 0.25,
                                shadowColor: "#d9d9d9",
                                color: {
                                    // 调整选中背景色的宽度
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "#D9D9D900", // 0% 处的颜色
                                        },
                                        {
                                            offset: 0.24,
                                            color: "#D9D9D900", // 24% 处的颜色
                                        },
                                        {
                                            offset: 0.25,
                                            color: "#D9D9D9", // 25% 处的颜色
                                        },
                                        {
                                            offset: 0.75,
                                            color: "#D9D9D9", // 75% 处的颜色
                                        },
                                        {
                                            offset: 0.76,
                                            color: "#D9D9D900", // 76% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "#D9D9D900", // 100% 处的颜色
                                        },
                                    ],
                                    global: false, // 缺省为 false
                                },
                            },
                        },
                    },
                    grid: {
                        //框体位置
                        left: "13%",
                        right: "8%",
                        top: "15%",
                        bottom: "35%",
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: true, // 在折线图中是连接 y 轴的原点，在柱状图中用于让柱状图离坐标原点有所间距
                        data: ["类型A", "类型B", "类型C", "类型D", "类型E"],
                        axisLabel: {
                            // 坐标轴文本标签，详见axis.axisLabel
                            textStyle: {
                                color: "#d9d9d9",
                            },
                            interval: "auto", //设置坐标轴分割间隔
                            margin: 8, // 坐标轴底线与 X 轴文字上间距
                        },
                        axisLine: {
                            //x 轴坐标轴底线
                            show: true,
                            lineStyle: {
                                color: "#8e8e8e",
                                width: 1,
                            },
                        },
                        axisTick: { show: false }, //是否有 x 轴刻度值的小尾巴
                    },
                    yAxis: {
                        type: "value",
                        name: "单位", //y 轴单位量名称
                        nameTextStyle: {
                            //y 轴单位量样式
                            color: "#8e8e8e",
                            fontSize: 12,
                            padding: [0, 30, 0, 0],
                        },
                        nameGap: 10, // y 轴单位量的与单位间距
                        splitLine: {
                            // y 轴的线为虚线及颜色
                            show: true,
                            lineStyle: {
                                type: "dashed",
                                color: [
                                    "rgba(217,217,217,0)",
                                    "rgba(217,217,217,0.6)",
                                    "rgba(217,217,217,0.6)",
                                    "rgba(217,217,217,0.6)",
                                    "rgba(217,217,217,0.6)",
                                ],
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#8e8e8e",
                            },
                        },
                        axisTick: {
                            // 去掉 Y 轴的小尾巴
                            show: false,
                        },
                        axisLine: {
                            // 去掉 Y 轴
                            show: false,
                        },
                    },
                    series: [
                        {
                            name: "图例名称",
                            data: [360, 280, 320, 260, 90],
                            type: "bar",
                            showBackground: true,
                            barWidth: 10, //柱图宽度
                            backgroundStyle: {
                                // 柱状图空白区域背景
                                color: "rgba(255, 255, 255, 0.3)",
                            },
                            symbol: "circle", // 移入后的标记点的图形
                            // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                            symbolSize: 2, //标记图形的大小
                            itemStyle: {
                                normal: {
                                    color: "#2ed6e6",
                                    width: 2,
                                },
                                lineStyle: {
                                    color: "#2ed6e6",
                                    width: 2,
                                },
                            },
                        },
                    ],
                },
            },
            {
                title: "待定",
                options: {},
            },
            {
                title: "待定",
                options: {},
            },
            {
                title: "普通环形图",
                options: {},
            },
            {
                title: "基础饼图",
                options: {},
            },
            {
                title: "待定",
                options: {},
            },
            {
                title: "指标占比饼图",
                options: {},
            },
            {
                title: "待定",
                options: {},
            },
        ];
    };
    render() {
        return (
            <div className={style.content}>
                <div className={style.title}>饼图及环形图（Pie）</div>
                <div className={style.chartsList}>
                    {this.getOptions().map((item, index) => (
                        <div className={style.chartsBox} key={index}>
                            <div className={style.chartsTitle}>
                                {item.title}
                            </div>
                            <ReactEcharts
                                ref="myCharts"
                                style={{ width: "100%", height: "150px" }}
                                className={style.charts}
                                option={item.options}
                                lazyUpdate={true} // 在设置完options 后并不立即更新图表
                            ></ReactEcharts>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
