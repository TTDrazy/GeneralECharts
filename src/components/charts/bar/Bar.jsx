import React, { Component } from 'react'
import style from '../Main.module.scss'
import ReactEcharts from 'echarts-for-react'

// const barChartsOptions =

export default class Bar extends Component {
  componentDidMount() {
    // this.refs.myCharts.resize()
    this.render()
  }
  getOptions = () => {
    return [
      {
        title: '基础线形图',
        options: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // type: 'cross', //是否移入时出现交叉的竖轴
              label: {
                backgroundColor: '#6a7985',
              },
            },
          },
          grid: {
            //框体位置
            left: '15%',
            right: '8%',
            top: '15%',
            bottom: '35%',
            // containLabel: true,
          },
          legend: {
            show: true,
            left: 115,
            top: -6,
            icon: 'roundRect',
            itemWidth: 16,
            itemHeight: 5,
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
            },
          ],
        },
      },
      {
        title: '多条线形图',
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true,
            },
          ],
        },
      },
      {
        title: '区域线形图',
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true,
            },
          ],
        },
      },
      {
        title: '多维区域线形图',
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true,
            },
          ],
        },
      },
      {
        title: '基础线形图',
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true,
            },
          ],
        },
      },
      {
        title: '多条线形图',
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true,
            },
          ],
        },
      },
      {
        title: '区域线形图',
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true,
            },
          ],
        },
      },
      {
        title: '多维区域线形图',
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true,
            },
          ],
        },
      },
    ]
  }
  render() {
    return (
      <div className={style.content}>
        <div className={style.title}>折线图及曲线图（Line）</div>
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
