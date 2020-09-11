import React, { Component } from 'react'
import style from '../Main.module.scss'
import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

export default class Line extends Component {
  getOptions = () => {
    return [
      {
        title: '基础柱状图',
        options: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
              shadowStyle:{
                  color:'#d9d9d9',
                  opacity:0.2,
                 //  width:'auto',
                  shadowOffsetX:5
              }
            },
          },
          grid: {
            //框体位置
            left: '13%',
            right: '8%',
            top: '15%',
            bottom: '35%',
          },
          xAxis: {
            type: 'category',
            boundaryGap: true, // 在折线图中是连接 y 轴的原点，在柱状图中用于让柱状图离坐标原点有所间距
            data: ['类型A', '类型B', '类型C', '类型D', '类型E'],
            axisLabel: {
              // 坐标轴文本标签，详见axis.axisLabel
              textStyle: {
                color: '#d9d9d9',
              },
              interval: 'auto', //设置坐标轴分割间隔
              margin: 8, // 坐标轴底线与 X 轴文字上间距
            },
            axisLine: {
              //x 轴坐标轴底线
              show: true,
              lineStyle: {
                color: '#8e8e8e',
                width: 1.5,
              },
            },
            axisTick: { show: false }, //是否有 x 轴刻度值的小尾巴
          },
          yAxis: {
            type: 'value',
            name: '单位', //y 轴单位量名称
            nameTextStyle: {
              //y 轴单位量样式
              color: '#8e8e8e',
              fontSize: 12,
              padding: [0, 30, 0, 0],
            },
            nameGap: 10, // y 轴单位量的与单位间距
            splitLine: {
              // y 轴的线为虚线及颜色
              show: true,
              lineStyle: {
                type: 'dashed',
                color: [
                  'rgba(217,217,217,0)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                ],
              },
            },
            axisLabel: {
              // y 轴坐标样式
              //   formatter: (value, index) => {
              //     return value
              //   },
              //   interval: (index, value) => {
              //     console.log('index', index)
              //     console.log('value', value)
              //   },
              textStyle: {
                color: '#8e8e8e',
              },
            },
          },
          series: [
            {
              name: '图例名称',
              data: [360, 280, 320, 260, 90],
              type: 'bar',
              showBackground: true,
              barWidth: 10, //柱图宽度
              backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)',
              },
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#2ed6e6',
                  width: 2,
                },
                lineStyle: {
                  color: '#2ed6e6',
                  width: 2,
                },
              },
            },
          ],
        },
      },
      {
        title: '多条线形图',
        options: {
          color: ['#2ed6e6', '#FFBB34', '#2AD49A'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              //坐标轴指示器-基准线
              type: 'line', //是否移入时出现交叉的竖轴
              label: {
                backgroundColor: '#6a7985',
              },
              lineStyle: {
                color: '#2ed6e6',
              },
            },
          },
          grid: {
            //框体位置
            left: '13%',
            right: '8%',
            top: '15%',
            bottom: '35%',
            // containLabel: true,
          },
          legend: {
            show: true,
            left: 70,
            top: -6,
            icon: 'roundRect',
            itemWidth: 16, //标示块的大小
            itemHeight: 4,
            fontSize: 12,
            itemGap: 12,
            textStyle: {
              color: '#d9d9d9',
              padding: [3, 0, 0, 0],
            },
          },
          xAxis: {
            type: 'category',
            boundaryGap: false, // 连接 y 轴的原点
            data: ['8月', '10月', '12月', '2月', '4月', '6月'],
            axisLabel: {
              // 坐标轴文本标签，详见axis.axisLabel
              textStyle: {
                color: '#d9d9d9',
              },
              interval: 'auto', //设置坐标轴分割间隔
              margin: 8, // 坐标轴底线与 X 轴文字上间距
            },
            axisLine: {
              //x 轴坐标轴底线
              show: true,
              lineStyle: {
                color: '#8e8e8e',
                width: 1.5,
              },
            },
            axisTick: { show: false }, //是否有 x 轴刻度值的小尾巴
          },
          yAxis: {
            type: 'value',
            name: '单位', //y 轴单位量名称
            nameTextStyle: {
              //y 轴单位量样式
              color: '#8e8e8e',
              fontSize: 12,
              padding: [0, 30, 0, 0],
            },
            nameGap: 10, // y 轴单位量的与单位间距
            splitLine: {
              // y 轴的线为虚线及颜色
              show: true,
              lineStyle: {
                type: 'dashed',
                color: [
                  'rgba(217,217,217,0)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                ],
              },
            },
            axisLabel: {
              textStyle: {
                color: '#8e8e8e',
              },
            },
          },
          series: [
            {
              name: '类型一',
              data: [298, 245, 290, 260, 355, 195],
              type: 'line',
              smooth: true,
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#2ed6e6',
                  width: 2,
                },
                lineStyle: {
                  width: 2,
                },
              },
            },
            {
              name: '类型二',
              data: [198, 145, 190, 160, 255, 95],
              type: 'line',
              smooth: true,
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#FFBB34',
                  width: 2,
                },
                lineStyle: {
                  width: 2,
                },
              },
            },
            {
              name: '类型三',
              data: [98, 45, 90, 60, 155, 5],
              type: 'line',
              smooth: true,
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#2AD49A',
                  width: 2,
                },
                lineStyle: {
                  width: 2,
                },
              },
            },
          ],
        },
      },
      {
        title: '区域线形图',
        options: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              //坐标轴指示器-基准线
              type: 'line', //是否移入时出现交叉的竖轴
              label: {
                backgroundColor: '#6a7985',
              },
              lineStyle: {
                color: '#2ed6e6',
              },
            },
          },
          grid: {
            //框体位置
            left: '13%',
            right: '8%',
            top: '15%',
            bottom: '35%',
            // containLabel: true,
          },
          legend: {
            show: true,
            left: 140,
            top: -6,
            icon: 'roundRect',
            itemWidth: 16,
            itemHeight: 4,
            fontSize: 12,
            itemGap: 12,
            textStyle: {
              color: '#d9d9d9',
              padding: [3, 0, 0, 0],
            },
            data: ['图例名称'],
          },
          xAxis: {
            type: 'category',
            boundaryGap: false, // 连接 y 轴的原点
            data: ['8月', '10月', '12月', '2月', '4月', '6月'],
            axisLabel: {
              // 坐标轴文本标签，详见axis.axisLabel
              textStyle: {
                color: '#d9d9d9',
              },
              interval: 'auto', //设置坐标轴分割间隔
              margin: 8, // 坐标轴底线与 X 轴文字上间距
            },
            axisLine: {
              //x 轴坐标轴底线
              show: true,
              lineStyle: {
                color: '#8e8e8e',
                width: 1.5,
              },
            },
            axisTick: { show: false }, //是否有 x 轴刻度值的小尾巴
          },
          yAxis: {
            type: 'value',
            name: '单位', //y 轴单位量名称
            nameTextStyle: {
              //y 轴单位量样式
              color: '#8e8e8e',
              fontSize: 12,
              padding: [0, 30, 0, 0],
            },
            nameGap: 10, // y 轴单位量的与单位间距
            splitLine: {
              // y 轴的线为虚线及颜色
              show: true,
              lineStyle: {
                type: 'dashed',
                color: [
                  'rgba(217,217,217,0)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                ],
              },
            },
            axisLabel: {
              textStyle: {
                color: '#8e8e8e',
              },
            },
          },
          series: [
            {
              name: '图例名称',
              data: [298, 245, 290, 260, 355, 195],
              type: 'line',
              smooth: true,
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#2ed6e6',
                  width: 2,
                },
                lineStyle: {
                  color: '#2ed6e6',
                  width: 2,
                },
              },
              areaStyle: {
                //区域背景渐变色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#2ed6e6b2', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#2ed6e600', // 100% 处的颜色
                  },
                  //透明度参照表；
                  // 00%=FF（不透明）    5%=F2    10%=E5    15%=D8    20%=CC    25%=BF    30%=B2    35%=A5    40%=99    45%=8c    50%=7F
                  // 55%=72    60%=66    65%=59    70%=4c    75%=3F    80%=33    85%=21    90%=19    95%=0c    100%=00（全透明）
                ]),
              },
            },
          ],
        },
      },
      {
        title: '多维区域线形图',
        options: {
          color: ['#2ed6e6', '#2AD49A'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              //坐标轴指示器-基准线
              type: 'line', //是否移入时出现交叉的竖轴
              label: {
                backgroundColor: '#6a7985',
              },
              lineStyle: {
                color: '#2ed6e6',
              },
            },
          },
          grid: {
            //框体位置
            left: '13%',
            right: '8%',
            top: '15%',
            bottom: '35%',
            // containLabel: true,
          },
          legend: {
            show: true,
            left: 90,
            top: -6,
            icon: 'roundRect',
            itemWidth: 16,
            itemHeight: 4,
            fontSize: 12,
            itemGap: 12,
            textStyle: {
              color: '#d9d9d9',
              padding: [3, 0, 0, 0],
            },
          },
          xAxis: {
            type: 'category',
            boundaryGap: false, // 连接 y 轴的原点
            data: ['8月', '10月', '12月', '2月', '4月', '6月'],
            axisLabel: {
              // 坐标轴文本标签，详见axis.axisLabel
              textStyle: {
                color: '#d9d9d9',
              },
              interval: 'auto', //设置坐标轴分割间隔
              margin: 8, // 坐标轴底线与 X 轴文字上间距
            },
            axisLine: {
              //x 轴坐标轴底线
              show: true,
              lineStyle: {
                color: '#8e8e8e',
                width: 1.5,
              },
            },
            axisTick: { show: false }, //是否有 x 轴刻度值的小尾巴
          },
          yAxis: {
            type: 'value',
            name: '单位', //y 轴单位量名称
            nameTextStyle: {
              //y 轴单位量样式
              color: '#8e8e8e',
              fontSize: 12,
              padding: [0, 30, 0, 0],
            },
            nameGap: 10, // y 轴单位量的与单位间距
            splitLine: {
              // y 轴的线为虚线及颜色
              show: true,
              lineStyle: {
                type: 'dashed',
                color: [
                  'rgba(217,217,217,0)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                ],
              },
            },
            axisLabel: {
              textStyle: {
                color: '#8e8e8e',
              },
            },
          },
          series: [
            {
              name: '图例名称1',
              data: [298, 245, 290, 260, 355, 195],
              type: 'line',
              smooth: true,
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#2ed6e6',
                  width: 2,
                },
                lineStyle: {
                  width: 2,
                },
              },
              areaStyle: {
                //区域背景渐变色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#2ed6e6b2', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#2ed6e600', // 100% 处的颜色
                  },
                  //透明度参照表；
                  // 00%=FF（不透明）    5%=F2    10%=E5    15%=D8    20%=CC    25%=BF    30%=B2    35%=A5    40%=99    45%=8c    50%=7F
                  // 55%=72    60%=66    65%=59    70%=4c    75%=3F    80%=33    85%=21    90%=19    95%=0c    100%=00（全透明）
                ]),
              },
            },
            {
              name: '图例名称2',
              data: [198, 145, 190, 160, 255, 95],
              type: 'line',
              smooth: true,
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#2AD49A',
                  width: 2,
                },
                lineStyle: {
                  width: 2,
                },
              },
              areaStyle: {
                //区域背景渐变色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#2AD49Ab2', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#2AD49A00', // 100% 处的颜色
                  },
                  //透明度参照表；
                  // 00%=FF（不透明）    5%=F2    10%=E5    15%=D8    20%=CC    25%=BF    30%=B2    35%=A5    40%=99    45%=8c    50%=7F
                  // 55%=72    60%=66    65%=59    70%=4c    75%=3F    80%=33    85%=21    90%=19    95%=0c    100%=00（全透明）
                ]),
              },
            },
          ],
        },
      },
      {
        title: '基础折线图',
        options: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              //坐标轴指示器-基准线
              type: 'line', //是否移入时出现交叉的竖轴
              label: {
                backgroundColor: '#6a7985',
              },
              lineStyle: {
                color: '#2ed6e6',
              },
            },
          },
          grid: {
            //框体位置
            left: '13%',
            right: '8%',
            top: '15%',
            bottom: '35%',
            // containLabel: true,
          },
          legend: {
            show: true,
            left: 140,
            top: -6,
            icon: 'roundRect',
            itemWidth: 16,
            itemHeight: 4,
            fontSize: 12,
            itemGap: 12,
            textStyle: {
              color: '#d9d9d9',
              padding: [3, 0, 0, 0],
            },
            data: ['图例名称'],
          },
          xAxis: {
            type: 'category',
            boundaryGap: false, // 连接 y 轴的原点
            data: ['8月', '10月', '12月', '2月', '4月', '6月'],
            axisLabel: {
              // 坐标轴文本标签，详见axis.axisLabel
              textStyle: {
                color: '#d9d9d9',
              },
              interval: 'auto', //设置坐标轴分割间隔
              margin: 8, // 坐标轴底线与 X 轴文字上间距
            },
            axisLine: {
              //x 轴坐标轴底线
              show: true,
              lineStyle: {
                color: '#8e8e8e',
                width: 1.5,
              },
            },
            axisTick: { show: false }, //是否有 x 轴刻度值的小尾巴
          },
          yAxis: {
            type: 'value',
            name: '单位', //y 轴单位量名称
            nameTextStyle: {
              //y 轴单位量样式
              color: '#8e8e8e',
              fontSize: 12,
              padding: [0, 30, 0, 0],
            },
            nameGap: 10, // y 轴单位量的与单位间距
            splitLine: {
              // y 轴的线为虚线及颜色
              show: true,
              lineStyle: {
                type: 'dashed',
                color: [
                  'rgba(217,217,217,0)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                ],
              },
            },
            axisLabel: {
              // y 轴坐标样式
              //   formatter: (value, index) => {
              //     return value
              //   },
              //   interval: (index, value) => {
              //     console.log('index', index)
              //     console.log('value', value)
              //   },
              textStyle: {
                color: '#8e8e8e',
              },
            },
          },
          series: [
            {
              name: '图例名称',
              data: [298, 245, 290, 260, 355, 195],
              type: 'line',
              smooth: false, // 控制是折线还是曲线
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#2ed6e6',
                  width: 2,
                },
                lineStyle: {
                  color: '#2ed6e6',
                  width: 2,
                },
              },
            },
          ],
        },
      },
      {
        title: '多条折形图',
        options: {
          color: ['#2ed6e6', '#FFBB34', '#2AD49A'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              //坐标轴指示器-基准线
              type: 'line', //是否移入时出现交叉的竖轴
              label: {
                backgroundColor: '#6a7985',
              },
              lineStyle: {
                color: '#2ed6e6',
              },
            },
          },
          grid: {
            //框体位置
            left: '13%',
            right: '8%',
            top: '15%',
            bottom: '35%',
            // containLabel: true,
          },
          legend: {
            show: true,
            left: 70,
            top: -6,
            icon: 'roundRect',
            itemWidth: 16, //标示块的大小
            itemHeight: 4,
            fontSize: 12,
            itemGap: 12,
            textStyle: {
              color: '#d9d9d9',
              padding: [3, 0, 0, 0],
            },
          },
          xAxis: {
            type: 'category',
            boundaryGap: false, // 连接 y 轴的原点
            data: ['8月', '10月', '12月', '2月', '4月', '6月'],
            axisLabel: {
              // 坐标轴文本标签，详见axis.axisLabel
              textStyle: {
                color: '#d9d9d9',
              },
              interval: 'auto', //设置坐标轴分割间隔
              margin: 8, // 坐标轴底线与 X 轴文字上间距
            },
            axisLine: {
              //x 轴坐标轴底线
              show: true,
              lineStyle: {
                color: '#8e8e8e',
                width: 1.5,
              },
            },
            axisTick: { show: false }, //是否有 x 轴刻度值的小尾巴
          },
          yAxis: {
            type: 'value',
            name: '单位', //y 轴单位量名称
            nameTextStyle: {
              //y 轴单位量样式
              color: '#8e8e8e',
              fontSize: 12,
              padding: [0, 30, 0, 0],
            },
            nameGap: 10, // y 轴单位量的与单位间距
            splitLine: {
              // y 轴的线为虚线及颜色
              show: true,
              lineStyle: {
                type: 'dashed',
                color: [
                  'rgba(217,217,217,0)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                ],
              },
            },
            axisLabel: {
              textStyle: {
                color: '#8e8e8e',
              },
            },
          },
          series: [
            {
              name: '类型一',
              data: [298, 245, 290, 260, 355, 195],
              type: 'line',
              smooth: false,
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#2ed6e6',
                  width: 2,
                },
                lineStyle: {
                  width: 2,
                },
              },
            },
            {
              name: '类型二',
              data: [198, 145, 190, 160, 255, 95],
              type: 'line',
              smooth: false,
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#FFBB34',
                  width: 2,
                },
                lineStyle: {
                  width: 2,
                },
              },
            },
            {
              name: '类型三',
              data: [98, 45, 90, 60, 155, 5],
              type: 'line',
              smooth: false,
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#2AD49A',
                  width: 2,
                },
                lineStyle: {
                  width: 2,
                },
              },
            },
          ],
        },
      },
      {
        title: '区域折线图',
        options: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              //坐标轴指示器-基准线
              type: 'line', //是否移入时出现交叉的竖轴
              label: {
                backgroundColor: '#6a7985',
              },
              lineStyle: {
                color: '#2ed6e6',
              },
            },
          },
          grid: {
            //框体位置
            left: '13%',
            right: '8%',
            top: '15%',
            bottom: '35%',
            // containLabel: true,
          },
          legend: {
            show: true,
            left: 140,
            top: -6,
            icon: 'roundRect',
            itemWidth: 16,
            itemHeight: 4,
            fontSize: 12,
            itemGap: 12,
            textStyle: {
              color: '#d9d9d9',
              padding: [3, 0, 0, 0],
            },
            data: ['图例名称'],
          },
          xAxis: {
            type: 'category',
            boundaryGap: false, // 连接 y 轴的原点
            data: ['8月', '10月', '12月', '2月', '4月', '6月'],
            axisLabel: {
              // 坐标轴文本标签，详见axis.axisLabel
              textStyle: {
                color: '#d9d9d9',
              },
              interval: 'auto', //设置坐标轴分割间隔
              margin: 8, // 坐标轴底线与 X 轴文字上间距
            },
            axisLine: {
              //x 轴坐标轴底线
              show: true,
              lineStyle: {
                color: '#8e8e8e',
                width: 1.5,
              },
            },
            axisTick: { show: false }, //是否有 x 轴刻度值的小尾巴
          },
          yAxis: {
            type: 'value',
            name: '单位', //y 轴单位量名称
            nameTextStyle: {
              //y 轴单位量样式
              color: '#8e8e8e',
              fontSize: 12,
              padding: [0, 30, 0, 0],
            },
            nameGap: 10, // y 轴单位量的与单位间距
            splitLine: {
              // y 轴的线为虚线及颜色
              show: true,
              lineStyle: {
                type: 'dashed',
                color: [
                  'rgba(217,217,217,0)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                ],
              },
            },
            axisLabel: {
              textStyle: {
                color: '#8e8e8e',
              },
            },
          },
          series: [
            {
              name: '图例名称',
              data: [298, 245, 290, 260, 355, 195],
              type: 'line',
              smooth: false,
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#2ed6e6',
                  width: 2,
                },
                lineStyle: {
                  color: '#2ed6e6',
                  width: 2,
                },
              },
              areaStyle: {
                //区域背景渐变色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#2ed6e6b2', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#2ed6e600', // 100% 处的颜色
                  },
                  //透明度参照表；
                  // 00%=FF（不透明）    5%=F2    10%=E5    15%=D8    20%=CC    25%=BF    30%=B2    35%=A5    40%=99    45%=8c    50%=7F
                  // 55%=72    60%=66    65%=59    70%=4c    75%=3F    80%=33    85%=21    90%=19    95%=0c    100%=00（全透明）
                ]),
              },
            },
          ],
        },
      },
      {
        title: '多维区域折线图',
        options: {
          color: ['#2ed6e6', '#2AD49A'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              //坐标轴指示器-基准线
              type: 'line', //是否移入时出现交叉的竖轴
              label: {
                backgroundColor: '#6a7985',
              },
              lineStyle: {
                color: '#2ed6e6',
              },
            },
          },
          grid: {
            //框体位置
            left: '13%',
            right: '8%',
            top: '15%',
            bottom: '35%',
            // containLabel: true,
          },
          legend: {
            show: true,
            left: 90,
            top: -6,
            icon: 'roundRect',
            itemWidth: 16,
            itemHeight: 4,
            fontSize: 12,
            itemGap: 12,
            textStyle: {
              color: '#d9d9d9',
              padding: [3, 0, 0, 0],
            },
          },
          xAxis: {
            type: 'category',
            boundaryGap: false, // 连接 y 轴的原点
            data: ['8月', '10月', '12月', '2月', '4月', '6月'],
            axisLabel: {
              // 坐标轴文本标签，详见axis.axisLabel
              textStyle: {
                color: '#d9d9d9',
              },
              interval: 'auto', //设置坐标轴分割间隔
              margin: 8, // 坐标轴底线与 X 轴文字上间距
            },
            axisLine: {
              //x 轴坐标轴底线
              show: true,
              lineStyle: {
                color: '#8e8e8e',
                width: 1.5,
              },
            },
            axisTick: { show: false }, //是否有 x 轴刻度值的小尾巴
          },
          yAxis: {
            type: 'value',
            name: '单位', //y 轴单位量名称
            nameTextStyle: {
              //y 轴单位量样式
              color: '#8e8e8e',
              fontSize: 12,
              padding: [0, 30, 0, 0],
            },
            nameGap: 10, // y 轴单位量的与单位间距
            splitLine: {
              // y 轴的线为虚线及颜色
              show: true,
              lineStyle: {
                type: 'dashed',
                color: [
                  'rgba(217,217,217,0)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                  'rgba(217,217,217,0.6)',
                ],
              },
            },
            axisLabel: {
              textStyle: {
                color: '#8e8e8e',
              },
            },
          },
          series: [
            {
              name: '图例名称1',
              data: [298, 245, 290, 260, 355, 195],
              type: 'line',
              smooth: false, // 是否为曲线还是折线
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#2ed6e6',
                  width: 2,
                },
                lineStyle: {
                  width: 2,
                },
              },
              areaStyle: {
                //区域背景渐变色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#2ed6e6b2', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#2ed6e600', // 100% 处的颜色
                  },
                  //透明度参照表；
                  // 00%=FF（不透明）    5%=F2    10%=E5    15%=D8    20%=CC    25%=BF    30%=B2    35%=A5    40%=99    45%=8c    50%=7F
                  // 55%=72    60%=66    65%=59    70%=4c    75%=3F    80%=33    85%=21    90%=19    95%=0c    100%=00（全透明）
                ]),
              },
            },
            {
              name: '图例名称2',
              data: [198, 145, 190, 160, 255, 95],
              type: 'line',
              smooth: false, // 是否为曲线还是折线
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 2, //标记图形的大小
              itemStyle: {
                normal: {
                  color: '#2AD49A',
                  width: 2,
                },
                lineStyle: {
                  width: 2,
                },
              },
              areaStyle: {
                //区域背景渐变色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#2AD49Ab2', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#2AD49A00', // 100% 处的颜色
                  },
                  //透明度参照表；
                  // 00%=FF（不透明）    5%=F2    10%=E5    15%=D8    20%=CC    25%=BF    30%=B2    35%=A5    40%=99    45%=8c    50%=7F
                  // 55%=72    60%=66    65%=59    70%=4c    75%=3F    80%=33    85%=21    90%=19    95%=0c    100%=00（全透明）
                ]),
              },
            },
          ],
        },
      },
    ]
  }
  render() {
    return (
      <div className={style.content}>
        <div className={style.title}>柱状图及条形图（Bar）</div>
        <div className={style.chartsList}>
          {this.getOptions().map((item, index) => (
            <div className={style.chartsBox} key={index}>
              <div className={style.chartsTitle}>{item.title}</div>
              <ReactEcharts
                ref="myCharts"
                style={{ width: '100%', height: '150px' }}
                className={style.charts}
                option={item.options}
                lazyUpdate={true} // 在设置完options 后并不立即更新图表
              ></ReactEcharts>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
