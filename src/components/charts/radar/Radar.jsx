import React, { Component } from 'react'
import style from '../Main.module.scss'
import ReactEcharts from 'echarts-for-react'

export default class Radar extends Component {
  getOptions = () => {
    return [
      {
        title: '基础雷达图',
        options: {
          grid: {
            containLabel: true, //鼠标是否可以移动到tooltip区域内
          },
          radar: {
            // shape: 'circle',
            indicator: [
              { name: '安全隐患', max: 3000 },
              { name: '环境环保', max: 3000 },
              { name: '维修养护', max: 3000 },
              { name: '矛盾纠纷', max: 3000 },
              { name: '社区治理', max: 3000 },
              { name: '社区治安', max: 3000 },
            ],
            center: ['50%', '45%'], // 雷达图中心坐标
            radius: '70%', // 图的大小
            startAngle: 0, // 图偏转角度，将图转向为横向
            name: {
              formatter: function (value, indicator,data) {
                const values = value.substring(0, value.indexOf('\n'))
                return '{cyan|' + indicator.name + ': ' + data + '}'
              },
              // formatter: '{b}:{c}',
              rich: {
                cyan: {
                  color: '#2ed6e6',
                  fontSize: 12,
                },
              },
              textStyle: {
                color: '#d9d9d9',
                fontSize: 12,
              },
            },
            nameGap: 10, //描述名称和图形之间的间距
            splitLine: {
              // 雷达图层级不规则外框样式
              lineStyle: {
                color: 'rgba(255,255,255,0.2)',
                opacity: 1,
                width: 1,
                type: 'dashed',
              },
            },
            splitArea: {
              // 雷达图层级不规则内容背景样式
              show: false,
            },
            axisLine: {
              //各条轴线的辅助线
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.2)',
                type: 'solid',
              },
            },
          },
          // symbolSize: 2, // 可计算特性参数，空数据拖拽提示图形大小
          series: [
            {
              type: 'radar',
              // areaStyle: {normal: {}},
              data: [
                {
                  value: [2709, 2111, 2100, 2132, 1209, 2132],
                  name: '分析图',
                },
              ],
              itemStyle: {
                normal: {
                  borderColor: '#2ed6e6',
                  borderWidth: 2,
                },
              },
              symbolSize: 3, // 拐点的大小
              lineStyle: {
                normal: {
                  borderColor: '#2ed6e6',
                  borderWidth: 2,
                },
              },
              areaStyle: {
                normal: {
                  color: '#2ed6e6cc',
                },
              },
            },
          ],
        },
      },
      {
        title: '自定义雷达图',
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
        title: '待定',
      },
      {
        title: '待定',
      },
    ]
  }
  render() {
    return (
      <div className={style.content}>
        <div className={style.title}>雷达图（Radar）</div>
        <div className={style.chartsList}>
          {this.getOptions().map((item, index) => (
            <div className={style.chartsBox} key={index}>
              <div className={style.chartsTitle}>{item.title}</div>
              <ReactEcharts
                ref="myCharts"
                style={{ width: '100%', height: '180px' }}
                className={style.charts}
                option={item.options || {}}
                lazyUpdate={true} // 在设置完options 后并不立即更新图表
              ></ReactEcharts>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
