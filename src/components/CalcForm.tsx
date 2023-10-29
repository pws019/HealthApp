import React, { RefObject } from 'react'
import {
  Form,
  Input,
  Radio,
  Space,
  Button,
  Dialog,
  TextArea,
  DatePicker,
  Selector,
  Slider,
  Stepper,
  Switch,
} from 'antd-mobile';

const prefixCls = 'calc-form';
export default function CalcForm(props) {
  return (
    <div className={`${prefixCls}`}>
      <Form layout='horizontal' mode='card'>
        <Form.Header>基本信息</Form.Header>
        <Form.Item label='身高'>
          <Input type="number" max={300} placeholder='请输入身高' />
        </Form.Item>
        <Form.Item label='体重(kg)'>
          <Input type="number" max={300} placeholder='请输入体重' />
        </Form.Item>
        <Form.Item label='年龄'>
          <Input placeholder='请输入年龄' />
        </Form.Item>
        <Form.Item label='性别' layout='horizontal'>
          {/* <Selector
            columns={2}
            options={[
              { label: '男', value: 'male' },
              { label: '女', value: 'female' },
            ]}
          /> */}
          <Radio.Group>
            <Space>
              <Radio value='male'>男</Radio>
              <Radio value='female'>女</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Header>运动信息</Form.Header>
        <Form.Item label='运动系数' layout='vertical'>
          <Radio.Group>
            <Space direction='vertical'>
              <Radio value={1.0}>什么都不干，宅在家</Radio>
              <Radio value={1.2}>正常学习工作，没有额外工作</Radio>
              <Radio value={1.4}>学习工作外适量运动，如每周轻度有氧1-3次</Radio>
              <Radio value={1.6}>每周力量训练5次以上，如举铁</Radio>
              <Radio value={1.8}>体力活职业，每天需要大量有氧加力量1-2次</Radio>
              <Radio value={2.0}>运动员搞强度训练</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Header>预期信息</Form.Header>
        <Form.Item name="lackEnergy" layout='vertical' label='热量缺口'>
          <Radio.Group>
            <Space direction='vertical'>
              <Radio value={0.1}>10%</Radio>
              <Radio value={0.15}>15%</Radio>
              <Radio value={0.2}>20%</Radio>
              <Radio value={0.25}>25%</Radio>
              <Radio value={0.3}>30%</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  )
}