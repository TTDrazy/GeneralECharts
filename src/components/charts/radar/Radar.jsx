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
              { name: '安全隐患: 2709', max: 3000 },
              { name: '环境环保: 2111', max: 3000 },
              { name: '维修养护: 2100', max: 3000 },
              { name: '矛盾纠纷: 2132', max: 3000 },
              { name: '社区治理: 1209', max: 3000 },
              { name: '社区治安: 2132', max: 3000 },
            ],
            center: ['50%', '45%'], // 雷达图中心坐标
            radius: '70%', // 图的大小
            startAngle: 0, // 图偏转角度，将图转向为横向
            name: {
              rich: {
                specialColor: {
                  color: '#d9d9d9',
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
            splitNumber: 5, // 雷达图圈数设置
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
              symbolSize: 0, // 拐点的大小
              lineStyle: {
                normal: {
                  color: '#2ed6e6',
                  width: 2,
                },
              },
              areaStyle: {
                normal: {
                  color: '#2ed6e6',
                  opciaty: 0.2, // 一定要用此属性来控制内容区域的透明度，不可以直接用色卡去控制，否则移入直接内容会变为透明！！！
                },
              },
            },
          ],
        },
      },
      {
        title: '自定义雷达图',
        options: {
          grid: {
            containLabel: true, //鼠标是否可以移动到tooltip区域内
          },
          radar: {
            shape: 'circle',
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
              rich: {
                specialColor: {
                  color: '#d9d9d9',
                  fontSize: 12,
                },
              },
              textStyle: {
                color: '#2ed6e6',
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
              areaStyle: {
                color: '#232223',
              },
            },
            splitNumber: 5, // 雷达图圈数设置
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
              symbolSize: 0, // 拐点的大小
              lineStyle: {
                normal: {
                  color: '#2ed6e6',
                  width: 2,
                },
              },
              areaStyle: {
                normal: {
                  color: '#2ed6e6',
                  opciaty: 0.2, // 一定要用此属性来控制内容区域的透明度，不可以直接用色卡去控制，否则移入直接内容会变为透明！！！
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
