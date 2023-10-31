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
} from 'antd-mobile/2x';

const prefixCls = 'calc-form';
export default function CalcForm(props) {

  const onSubmit = (values) => {
    props.onSubmit(values);
  }

  return (
    <div className={`${prefixCls}`}>
      <Form
        initialValues={{
          weight: 78,
          age: 29,
          height: 170,
          sex: 'male',
          playRatio: 1.0,
          lackEnergy: 0.2,
          dateType: 'A'
        }}
        layout='horizontal' 
        mode='card'
        onFinish={onSubmit}
        footer={
          <Button block type='submit' color='primary' size='large'>
            计算
          </Button>
        }
      >
        <Form.Header>基本信息</Form.Header>
        <Form.Item name="height" label='身高(cm)' rules={[{ required: true }]}>
          <Input type="number" max={300} placeholder='请输入身高(cm)' />
        </Form.Item>
        <Form.Item name="weight" label='体重(kg)' rules={[{ required: true }]}>
          <Input type="number" max={300} placeholder='请输入体重' />
        </Form.Item>
        <Form.Item name="age" label='年龄' rules={[{ required: true }]}>
          <Input type="number" max={100} placeholder='请输入年龄' />
        </Form.Item>
        <Form.Item name="sex" label='性别' layout='horizontal' rules={[{ required: true }]}>
          <Radio.Group>
            <Space>
              <Radio value='male'>男</Radio>
              <Radio value='female'>女</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Header>运动信息</Form.Header>
        <Form.Item name="playRatio" label='运动系数' layout='vertical' rules={[{ required: true, message: '请选择运动系数' }]}>
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
        <Form.Item name="lackEnergy" layout='vertical' label='热量缺口' rules={[{ required: true, message: '请选择预期信息'  }]}>
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

        <Form.Header>日期类型</Form.Header>
        <Form.Item name="dateType" label='无低中高碳' layout='vertical' rules={[{ required: true, message: '请选择日期类型'  }]}>
          <Radio.Group>
            <Space direction='vertical'>
              <Radio value="A">无碳日</Radio>
              <Radio value="B">低碳日</Radio>
              <Radio value="C">中碳日</Radio>
              <Radio value="D">高碳日</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  )
}