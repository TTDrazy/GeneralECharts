import React, { Component } from 'react'
import style from './ChartsView.module.scss'
// import Main from '../components/charts/Main'
import Bar from '../components/charts/bar/Bar'
import Radar from '../components/charts/radar/Radar'
import Line from '../components/charts/line/Line'
import Pie from '../components/charts/pie/Pie'

const generalColorList = [
  {
    colorValue: '#2ED6E6',
    colorName: '青蓝',
  },
  {
    colorValue: '#FFBB33',
    colorName: '明黄',
  },
  {
    colorValue: '#2AD49A',
    colorName: '嫩绿',
  },
  {
    colorValue: '#FF5577',
    colorName: '莓红',
  },
  {
    colorValue: '#A667EA',
    colorName: '罗兰紫',
  },
  {
    colorValue: '#D9D9D9',
    colorName: '中灰',
  },
  {
    colorValue: '#2B96FF',
    colorName: '普蓝',
  },
]
export default class ChartsView extends Component {
  render() {
    return (
      <div className={style.main}>
        <div className={style.generalColorBox}>
          <div className={style.generalColorContent}>
            <div className={style.title}>图表通用颜色</div>
            <div className={style.colorList}>
              {generalColorList.map((item, index) => (
                <div className={style.colorBox} key={index}>
                  <div
                    className={style.colorShow}
                    style={{ background: item.colorValue }}
                  ></div>
                  <div className={style.colorValue}>{item.colorValue}</div>
                  <div className={style.colorName}>{item.colorName}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.contentBox}>
          <Pie></Pie>
          <Line></Line>
          <Bar></Bar>
          <Radar></Radar>
        </div>
      </div>
    )
  }
}
