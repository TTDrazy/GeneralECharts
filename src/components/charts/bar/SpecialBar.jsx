import React, { Component } from 'react'
import { Rate } from 'antd'
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons'
import style from './SpecialBar.module.scss'

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
}

export default class SpecialBar extends Component {
  render() {
    return (
      <div className={style.content}>
          123
        <Rate
          defaultValue={2}
          character={({ index }) => {
            return index + 1
          }}
        />
        <br />
        <Rate
          defaultValue={3}
          character={({ index }) => {
            return customIcons[index + 1]
          }}
        />
      </div>
    )
  }
}
