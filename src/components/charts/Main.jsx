import React, { Component } from 'react'
import style from './Main.module.scss'

export default class Main extends Component {
  render() {
    return (
      <div className={style.contentBox}>
        <div className={style.title}>{this.props.title}</div>
        <div className={style.chartsList}>
          <div className={style.chartsBox}>
            <div className={style.chartsTitle}></div>
          </div>
        </div>
      </div>
    )
  }
}
