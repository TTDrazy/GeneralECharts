import React, { Component } from 'react'
import style from '../Main.module.scss'
import ReactEcharts from 'echarts-for-react'

export default class Pie extends Component {
  getOptions = () => {
    return [
      {
        title: '指标占比环形图',
        options: {
          tooltip: {
            trigger: 'axis',
          },
          grid: {
            //框体位置
            left: '13%',
            right: '8%',
            top: '0%',
            bottom: '0%',
          },
          title: {
            text: '78{unit|%}\n{text|xx占比}',
            left: 'center',
            top: '24%',
            textStyle: {
              fontSize: 20,
              color: '#FFF',
              rich: {
                unit: {
                  fontSize: 14,
                },
                text: {
                  fontSize: 14,
                  color: '#D9D9D9',
                },
              },
            },
          },
          series: [
            {
              type: 'pie',
              radius: ['55%', '65%'],
              center: ['50%', '35%'],
              startAngle: 0, //起始角度
              selectedMode: 'single',
              avoidLabelOverlap: false,
              hoverOffset: 2,
              label: {
                // 指示名称的样式
                show: false,
              },
              labelLine: {
                // 禁止显示指示线
                show: false,
              },
              data: [
                {
                  value: 22,
                  name: '类型一',
                  itemStyle: {
                    normal: {
                      color: 'rgba(255,255,255,0.3)',
                    },
                  },
                },
                {
                  value: 78,
                  name: '类型二',
                  itemStyle: {
                    normal: {
                      color: '#2ED6E6',
                    },
                  },
                },
              ],
            },
          ],
        },
      },
      {
        title: '待定',
        options: {},
      },
      {
        title: '待定',
        options: {},
      },
      {
        title: '普通环形图',
        options: {},
      },
      {
        title: '基础饼图',
        options: {
          tooltip: {
            trigger: 'axis',
          },
          grid: {
            //框体位置
            left: '13%',
            right: '8%',
            top: '0%',
            bottom: '0%',
          },
          legend: {
            show: true,
            left: 'center',
            bottom: 15,
            icon: 'roundRect',
            itemWidth: 16,
            itemHeight: 8,
            fontSize: 12,
            itemGap: 20,
            textStyle: {
              color: '#d9d9d9',
              padding: [3, 0, 0, 0],
            },
          },
          series: [
            {
              type: 'pie',
              radius: '65%',
              center: ['50%', '35%'],
              selectedMode: 'single',
              hoverOffset: 2,
              labelLine: {
                // 指示线的样式
                normal: {
                  length: 6, // 指示线长度
                  lineStyle: {
                    color: 'rgba(255,255,255,0.5)',
                  },
                },
              },
              label: {
                // 指示名称的样式
                normal: {
                  color: 'rgba(255,255,255,0.7)',
                },
              },
              data: [
                {
                  value: 350,
                  name: '类型一',
                  itemStyle: {
                    normal: {
                      color: '#2ed6e6',
                      width: 2,
                    },
                  },
                },
                {
                  value: 300,
                  name: '类型二',
                  itemStyle: {
                    normal: {
                      color: '#2AD49A',
                      width: 2,
                    },
                  },
                },
                {
                  value: 300,
                  name: '类型三',
                  itemStyle: {
                    normal: {
                      color: '#FFBB33',
                      width: 2,
                    },
                  },
                },
              ],
            },
          ],
        },
      },
      {
        title: '待定',
        options: {},
      },
      {
        title: '指标占比饼图',
        options: {},
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
        <div className={style.title}>饼图及环形图（Pie）</div>
        <div className={style.chartsList}>
          {this.getOptions().map((item, index) => (
            <div className={style.chartsBox} key={index}>
              <div className={style.chartsTitle}>{item.title}</div>
              <ReactEcharts
                ref="pieCharts"
                style={{ width: '100%', height: '165px' }}
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
