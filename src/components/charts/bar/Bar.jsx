import React, { Component } from 'react'
import style from '../Main.module.scss'
import ReactEcharts from 'echarts-for-react'
import SpecialBar from './SpecialBar'

export default class Bar extends Component {
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
              shadowStyle: {
                opacity: 0.25,
                shadowColor: '#d9d9d9',
                color: {
                  // 调整选中背景色的宽度
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#D9D9D900', // 0% 处的颜色
                    },
                    {
                      offset: 0.24,
                      color: '#D9D9D900', // 24% 处的颜色
                    },
                    {
                      offset: 0.25,
                      color: '#D9D9D9', // 25% 处的颜色
                    },
                    {
                      offset: 0.75,
                      color: '#D9D9D9', // 75% 处的颜色
                    },
                    {
                      offset: 0.76,
                      color: '#D9D9D900', // 76% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#D9D9D900', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
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
                width: 1,
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
              name: '图例名称',
              data: [360, 280, 320, 260, 90],
              type: 'bar',
              showBackground: true,
              barWidth: 10, //柱图宽度
              backgroundStyle: {
                // 柱状图空白区域背景
                color: 'rgba(255, 255, 255, 0.3)',
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
        title: '堆叠柱状图',
        options: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
              shadowStyle: {
                opacity: 0.25,
                shadowColor: '#d9d9d9',
                color: {
                  // 调整选中背景色的宽度
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#D9D9D900', // 0% 处的颜色
                    },
                    {
                      offset: 0.24,
                      color: '#D9D9D900', // 24% 处的颜色
                    },
                    {
                      offset: 0.25,
                      color: '#D9D9D9', // 25% 处的颜色
                    },
                    {
                      offset: 0.75,
                      color: '#D9D9D9', // 75% 处的颜色
                    },
                    {
                      offset: 0.76,
                      color: '#D9D9D900', // 76% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#D9D9D900', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
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
            itemHeight: 8,
            fontSize: 12,
            itemGap: 12,
            textStyle: {
              color: '#d9d9d9',
              padding: [3, 0, 0, 0],
            },
            data: ['Type1', 'Type2', 'Type3'],
          },
          xAxis: {
            type: 'category',
            boundaryGap: true, // 在折线图中是连接 y 轴的原点，在柱状图中用于让柱状图离坐标原点有所间距
            data: ['A', 'B', 'C', 'D', 'E'],
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
                width: 1,
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
              name: 'Type1',
              data: [298, 245, 290, 260, 355, 195],
              type: 'bar',
              stack: 'allTypes', // 控制是否是堆叠柱状图的关键，让几种数据属于一个 stack （堆）
              barWidth: 10, //柱图宽度
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
              name: 'Type2',
              data: [198, 145, 190, 160, 255, 95],
              type: 'bar',
              stack: 'allTypes', // 控制是否是堆叠柱状图的关键，让几种数据属于一个 stack （堆）
              barWidth: 10, //柱图宽度
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
              name: 'Type3',
              data: [98, 45, 90, 60, 155, 5],
              type: 'bar',
              stack: 'allTypes', // 控制是否是堆叠柱状图的关键，让几种数据属于一个 stack （堆）
              barWidth: 10, //柱图宽度
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
        title: '多维分组柱状图',
        options: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
              shadowStyle: {
                opacity: 0.25,
                shadowColor: '#d9d9d9',
                color: {
                  // 调整选中背景色的宽度
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#D9D9D900', // 0% 处的颜色
                    },
                    {
                      offset: 0.14,
                      color: '#D9D9D900', // 19% 处的颜色
                    },
                    {
                      offset: 0.15,
                      color: '#D9D9D9', // 15% 处的颜色
                    },
                    {
                      offset: 0.85,
                      color: '#D9D9D9', // 85% 处的颜色
                    },
                    {
                      offset: 0.86,
                      color: '#D9D9D900', // 81% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#D9D9D900', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
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
            left: 110,
            top: -6,
            icon: 'roundRect',
            itemWidth: 16, //标示块的大小
            itemHeight: 8,
            fontSize: 12,
            itemGap: 12,
            textStyle: {
              color: '#d9d9d9',
              padding: [3, 0, 0, 0],
            },
            data: ['Type1', 'Type2'],
          },
          xAxis: {
            type: 'category',
            boundaryGap: true, // 在折线图中是连接 y 轴的原点，在柱状图中用于让柱状图离坐标原点有所间距
            data: ['A', 'B', 'C', 'D', 'E'],
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
                width: 1,
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
              name: 'Type1',
              data: [298, 245, 290, 260, 355, 195],
              type: 'bar',
              barWidth: 10, // 柱图宽度
              barGap: '20%', // 柱间距离；默认当前柱条宽度的30%
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
              name: 'Type2',
              data: [198, 145, 190, 160, 255, 95],
              type: 'bar',
              barWidth: 10, //柱图宽度
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
        title: '双轴折线柱状图',
        options: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
              shadowStyle: {
                opacity: 0.25,
                shadowColor: '#d9d9d9',
                color: {
                  // 调整选中背景色的宽度
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#D9D9D900', // 0% 处的颜色
                    },
                    {
                      offset: 0.24,
                      color: '#D9D9D900', // 24% 处的颜色
                    },
                    {
                      offset: 0.25,
                      color: '#D9D9D9', // 25% 处的颜色
                    },
                    {
                      offset: 0.75,
                      color: '#D9D9D9', // 75% 处的颜色
                    },
                    {
                      offset: 0.76,
                      color: '#D9D9D900', // 76% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#D9D9D900', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          },
          grid: {
            //框体位置
            left: '13%',
            right: '15%',
            top: '15%',
            bottom: '35%',
          },
          legend: {
            show: true,
            left: 110,
            top: -6,
            //icon: 'roundRect', // 取消掉固定的样式，使其跟随 echarts 默认自动变化
            itemWidth: 16, // 标示块的大小
            itemHeight: 8,
            fontSize: 12,
            itemGap: 12,
            textStyle: {
              color: '#d9d9d9',
              padding: [3, 0, 0, 0],
            },
            data: ['Type1', 'Type2'],
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
                width: 1,
              },
            },
            axisTick: { show: false }, //是否有 x 轴刻度值的小尾巴
          },
          yAxis: [
            {
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
              axisTick: {
                // 去掉 Y 轴的小尾巴
                show: false,
              },
              axisLine: {
                // 去掉 Y 轴
                show: false,
              },
            },
            {
              type: 'value',
              name: '占比', //y 轴单位量名称
              nameTextStyle: {
                //y 轴单位量样式
                color: '#8e8e8e',
                fontSize: 12,
                padding: [0, 0, 0, 45],
              },
              nameGap: 10, // y 轴单位量的与单位间距
              splitLine: {
                // y 轴的线为虚线及颜色
                show: false,
                // 去掉右边的基准线，防止两边的线刻度不一样导致冲突
              },
              axisLabel: {
                textStyle: {
                  color: '#8e8e8e',
                },
                formatter: '{value}%',
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
          ],
          series: [
            {
              name: 'Type1',
              data: [360, 280, 320, 260, 90],
              type: 'bar',
              showBackground: true,
              barWidth: 10, //柱图宽度
              backgroundStyle: {
                // 柱状图空白区域背景
                color: 'rgba(255, 255, 255, 0.3)',
              },
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: [2, 1], //标记图形的大小
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
            {
              name: 'Type2',
              yAxisIndex: 1,
              data: [50, 68, 92, 29.5, 35],
              type: 'line',
              smooth: false,
              symbol: 'circle', // 移入后的标记点的图形
              // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              symbolSize: 6, //标记图形的大小
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
          ],
        },
      },
      {
        title: '基础条形图',
        options: {
          tooltip: {
            // 关闭悬浮展示数据框
            show: false,
          },
          legend: {
            // 关闭条目标识块
            show: false,
          },
          grid: {
            //框体位置
            left: '16%',
            right: '25%',
            top: '0%',
            bottom: '18%',
          },
          xAxis: {
            type: 'value',
            show: false,
          },
          yAxis: {
            type: 'category',
            inverse: true, // 使原先顺序相反的数据回归正常
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
              show: false,
            },
            axisTick: { show: false }, //是否有 x 轴刻度值的小尾巴
          },
          series: [
            {
              name: '图例名称',
              data: [700, 610, 350, 685, 1000],
              type: 'bar',
              showBackground: true,
              barWidth: 10, //柱图宽度
              backgroundStyle: {
                // 柱状图空白区域背景
                color: '#FFFFFF00',
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
              label: {
                show: true,
                position: 'right',
                formatter: '{c} 人',
                textStyle: {
                  color: '#2ed6e6',
                  fontSize: 12,
                },
              },
            },
          ],
        },
      },
      {
        title: '排名条形图',
        options: {},
      },
      {
        title: '特殊条形图',
        options: {},
        showComponent: <SpecialBar></SpecialBar>,
      },
      {
        title: '待定',
        options: {},
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
              {/* {console.log(!!item.options.series)} */}
              {!!item.options.series ? (
                <ReactEcharts
                  ref="myCharts"
                  style={{ width: '100%', height: '150px' }}
                  className={style.charts}
                  option={item.options}
                  lazyUpdate={true} // 在设置完options 后并不立即更新图表
                ></ReactEcharts>
              ) : (
                // item.showComponent
                ''
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
