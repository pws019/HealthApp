import React, { RefObject } from 'react'
import {
  Card
} from 'antd-mobile/2x';
import './ResultPanel.less'
import * as hotCalc from './hotCalc';

const prefixCls = 'result-panel';
export default function ResultPanel(props) {

  if (!props.data) {
    return (
      <div className={`${prefixCls}`}>
        <Card title='计算结果'>
          等待表单数据提交
        </Card>
      </div>
    )
  }
  const { weight, height, age, sex, playRatio, lackEnergy, dateType } = props.data;
  const baseMetabolism = Number(hotCalc.getBaseMetabolism({
    weight, height, age, sex
  }).toFixed(2));

  const dayConsume = hotCalc.getDayEnergyConsum(baseMetabolism, playRatio)
  const dayEat = hotCalc.getEatEnergy(dayConsume, lackEnergy);
  const eatValue = hotCalc.getReulst(dayEat, dateType)
  const dateTypeText = ({
    'A': '无碳日',
    'B': '低碳日',
    'C': '中碳日',
    'D': '高碳日',
  })[dateType]
  return (
    <div className={`${prefixCls}`}>
      <Card title='计算结果'>
        <div className={`${prefixCls}-row`}>
          基础代谢热量(大卡): {baseMetabolism} <br/>
          运动系数:{playRatio}
        </div>
        <div className={`${prefixCls}-row`}>
          日消耗热量(大卡): {dayConsume.toFixed(2)}
        </div>
        <div className={`${prefixCls}-row`}>
          热量缺口: {lackEnergy * 100}% <br/>
          日需摄入热量: {dayEat.toFixed(2)}  (日消耗-制造的热量缺口)
        </div>
        <br/>
        <div className={`${prefixCls}-row`}>
          营养占比，已选择{dateTypeText} <br/>
          碳水：{eatValue[0]}大卡,约为{(eatValue[0]/4).toFixed(2)}克<br/>
          蛋白质：{eatValue[1]}大卡,约为{(eatValue[1]/4).toFixed(2)}克<br/>
          脂肪:{eatValue[2]}大卡,约为{(eatValue[2]/9).toFixed(2)}克<br/>
          <br/>
        </div>
      </Card>
    </div>
  )
}