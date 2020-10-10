import React, { Component } from 'react'
import style from '../Main.module.scss'
import ReactEcharts from 'echarts-for-react'
import personImg from '../../../assets/imgs/person.png'
import 'echarts-liquidfill'

let TransparentSrc =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
let TransparentImg = new Image()
TransparentImg.src = TransparentSrc

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
              startAngle: 90, //起始角度
              // selectedMode: 'single', // 是否拥有选中弹出效果
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
        title: '轮播饼图',
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
          series: [
            {
              type: 'pie',
              radius: ['55%', '65%'],
              center: ['50%', '35%'],
              startAngle: 90, //起始角度
              avoidLabelOverlap: false,
              hoverOffset: 2,
              label: {
                normal: {
                  show: false,
                  position: 'center',
                },
                emphasis: {
                  show: true,
                  formatter: function (param) {
                    return (
                      param.percent.toFixed(0) +
                      '{val|%}\n{type|' +
                      param.name +
                      '}'
                    )
                  },
                  textStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                    rich: {
                      val: {
                        fontSize: 12,
                        color: '#fff',
                      },
                      type: {
                        fontSize: 12,
                        color: '#D9D9D9',
                      },
                    },
                  },
                },
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
        title: '带说明多维饼图',
        options: {
          tooltip: {
            // 是否移入显示提示框信息
            show: false,
          },
          grid: {
            //框体位置
            left: '13%',
            right: '8%',
            top: '10%',
            bottom: '0%',
          },
          legend: {
            show: false, // 不显示颜色对应标示块
          },
          graphic: {
            // 图片
            elements: [
              {
                type: 'image',
                style: {
                  image: personImg,
                  width: 24,
                  height: 24,
                },
                left: 'center',
                top: '30%',
              },
            ],
          },
          title: {
            text: '类型占比',
            left: 'center',
            top: '44%',
            textStyle: {
              fontSize: 14,
              color: '#d9d9d9',
            },
          },
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
          series: [
            {
              type: 'pie',
              radius: ['55%', '65%'],
              center: ['50%', '45%'],
              startAngle: 180, //起始角度
              // selectedMode: 'single', // 是否拥有选中弹出效果
              hoverOffset: 2, // 选中时块的偏移大小
              itemStyle: {
                borderColor: 'rgba(0, 0, 0, 0.6)',
                // borderColor: {
                //   image:TransparentImg,
                //   repeat: 'repeat'
                // },
                borderWidth: 2,
              },
              labelLine: {
                // 指示线的样式
                normal: {
                  length: 20, // 指示线长度
                  lineStyle: {
                    color: 'rgba(255,255,255,0.5)',
                  },
                },
              },
              label: {
                // 指示名称的样式
                formatter: '{text|{d}%}\n{hr|}\n{text|{b}}',
                rich: {
                  text: {
                    color: '#d9d9d9',
                    fontSize: 12,
                    lineHeight: 18,
                    align: 'left',
                    padding: [6, 15, 10, 0],
                  },
                  hr: {
                    borderColor: 'rgba(255,255,255,0.5)',
                    width: '100%',
                    borderWidth: 1,
                    height: 0,
                  },
                },
              },
              data: [
                {
                  value: 250,
                  name: '类型一',
                  itemStyle: {
                    normal: {
                      color: '#2ed6e6',
                      width: 2,
                    },
                  },
                },
                {
                  value: 250,
                  name: '类型二',
                  itemStyle: {
                    normal: {
                      color: '#A667EA',
                      width: 2,
                    },
                  },
                },
                {
                  value: 500,
                  name: '类型三',
                  itemStyle: {
                    normal: {
                      color: '#2AD49A',
                      width: 2,
                    },
                  },
                },
              ],
            },
            {
              name: '外边框',
              type: 'pie',
              radius: ['70%', '72%'],
              center: ['50%', '45%'],
              hoverAnimation: false,
              label: {
                show: false,
              },
              data: [
                {
                  value: 1,
                  itemStyle: {
                    normal: {
                      color: 'rgba(255,255,255,0.5)',
                    },
                  },
                },
              ],
            },
          ],
        },
      },
      {
        title: '普通环形图',
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
              radius: ['55%', '65%'],
              center: ['50%', '35%'],
              startAngle: 180, //起始角度
              // selectedMode: 'single', // 是否拥有选中弹出效果
              hoverOffset: 2, // 选中时块的偏移大小
              itemStyle: {
                borderColor: 'rgba(0, 0, 0, 0.6)',
                // borderColor: {
                //   image:TransparentImg,
                //   repeat: 'repeat'
                // },
                borderWidth: 2,
              },
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
                  value: 250,
                  name: '类型一',
                  itemStyle: {
                    normal: {
                      color: '#2ed6e6',
                      width: 2,
                    },
                  },
                },
                {
                  value: 250,
                  name: '类型二',
                  itemStyle: {
                    normal: {
                      color: '#A667EA',
                      width: 2,
                    },
                  },
                },
                {
                  value: 500,
                  name: '类型三',
                  itemStyle: {
                    normal: {
                      color: '#2AD49A',
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
              // selectedMode: 'single', // 是否拥有选中弹出效果
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
        title: '进度图',
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
          series: [
            {
              type: 'liquidFill', // 水球图
              radius: '52%',
              center: ['50%', '35%'],
              data: [0.5, 0.5, 0.5],
              backgroundStyle: {
                borderWidth: 0,
                color: 'rgba(255,255,255,0.01)',
              },
              itemStyle: {
                color: '#2ED6E6',
              },
              label: {
                normal: {
                  formatter: '50{unit|%}\n{text|xx占比}',
                  textStyle: {
                    fontSize: 20,
                    color: '#fff',
                    rich: {
                      unit: {
                        fontSize: 12,
                      },
                      text: {
                        fontSize: 12,
                        lineHeight: 20,
                      },
                    },
                  },
                },
              },
              outline: {
                show: false,
              },
            },
            {
              type: 'pie',
              radius: ['58%', '65%'],
              center: ['50%', '35%'],
              startAngle: 90, //起始角度
              // selectedMode: 'single', // 是否拥有选中弹出效果
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
                  value: 100,
                  name: '类型一',
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
        title: '指标占比饼图',
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
          series: [
            {
              type: 'pie',
              radius: '65%',
              center: ['50%', '35%'],
              startAngle: 90, //起始角度
              // selectedMode: 'single', // 是否拥有选中弹出效果
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
    ]
  }
  onChartMouseMove(params, echarts) {
    // 确保只获取同心圆环的内圈环
    if (params.seriesIndex === 0) {
      let currentName
      if (!!params.name) {
        currentName = params.name
      } else {
        currentName = '类型'
      }
      // console.log(currentName,echarts)
      // return currentName
    }
  }
  dynamicPieChart(params, myChart) {
    let timer = null
    function clearCurrent() {
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0,
      })
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 1,
      })
    }
    function rotation() {
      let i = 1
      timer = setInterval(() => {
        clearCurrent()
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: i % 2,
        })
        i++
      }, 2000)
    }
    // 轮播饼图
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 0,
    })
    rotation()
    myChart.on('mouseover', (e) => {
      if (e.dataIndex === 1) {
        clearInterval(timer)
        timer = null
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: 0,
        })
      }
      if (e.dataIndex === 0) {
        clearInterval(timer)
        timer = null
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: 1,
        })
      }
    })
    myChart.on('mouseout', (e) => {
      clearInterval(timer)
      timer = null
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0,
      })
      rotation()
    })
  }
  render() {
    let onMouseChangeEvent = {
      mousemove: this.onChartMouseMove.bind(this),
    }
    let onMouseOver = {
      mouseover: this.dynamicPieChart.bind(this),
    }
    return (
      <div className={style.content}>
        <div className={style.title}>饼图及环形图（Pie）</div>
        <div className={style.chartsList}>
          {this.getOptions().map((item, index) => (
            <div className={style.chartsBox} key={index}>
              <div className={style.chartsTitle}>{item.title}</div>
              <ReactEcharts
                ref={`pieCharts${index}`}
                style={{ width: '100%', height: '165px' }}
                className={style.charts}
                option={item.options}
                lazyUpdate={true} // 在设置完options 后并不立即更新图表
                onEvents={
                  item.title === '带说明多维饼图'
                    ? onMouseChangeEvent
                    : item.title === '轮播饼图'
                    ? onMouseOver
                    : ''
                }
              ></ReactEcharts>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
