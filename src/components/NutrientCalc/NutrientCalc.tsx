import React, { useState, useRef } from 'react'
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
  Card,
  Grid,
} from 'antd-mobile/2x';
import './NutrientCalc.less'


const prefixCls = 'nutrient-calc';
export default function NutrientCalc(props) {

  const CalcType = {
    FoodToNur: 'FoodToNur',
    NurToFood: 'NurToFood',
  }

  const calcMethod = {
    [CalcType.FoodToNur]: (values) => {
      setNeedFood(values.needCount);
      setOc(values.c * values.needCount / values.groupUnit);
      setOP(values.p * values.needCount / values.groupUnit);
      setOF(values.f * values.needCount / values.groupUnit);
    },
    [CalcType.NurToFood]: (values) => {
      const needWeight = values.groupUnit * values.needCount / values[values.needType];
      setNeedFood(needWeight);
      setOc(needWeight * values.c / values.groupUnit);
      setOP(needWeight * values.p / values.groupUnit);
      setOF(needWeight * values.f / values.groupUnit);
    }
  }

  const onSubmit = (values) => {
    calcMethod[values.calcType](values);
  }

  const resetForm = () => {
    formRef.current?.resetFields();
  }

  const [needFood, setNeedFood] = useState(0);
  const [oC, setOc] = useState(0);
  const [oP, setOP] = useState(0);
  const [oF, setOF] = useState(0);
  const [calcType, setCalcType] = useState(CalcType.NurToFood);
  const formRef = useRef({});
  


  return (
    <div {...props}>
      <Form
        ref={formRef}
        layout='horizontal'
        mode='card'
        onFinish={onSubmit}
        initialValues={{
          groupUnit: 100,
          calcType: CalcType.NurToFood,
        }}
        footer={
          <Grid  columns={2} gap={16}>
            <Grid.Item>
              <Button block type='submit' color='primary' size='large'>
                计算
              </Button>
            </Grid.Item>
            <Grid.Item>
              <Button block color='primary' size='large' onClick={resetForm}>
                重置
              </Button>
            </Grid.Item>
          </Grid>
        }
      >
        <Form.Header>营养表</Form.Header>
        <Form.Item name="foodName" label='食物名称'>
          <Input placeholder='备注该食物名称用' />
        </Form.Item>
        <Form.Item name="groupUnit" label='每x克' rules={[{ required: true }]}>
          <Input type="number" max={1000} placeholder='请输入单位(例如:100g)' />
        </Form.Item>
        <Form.Item name="c" label='含碳水' rules={[{ required: true }]}>
          <Input type="number" max={1000} placeholder='请输入碳水含量' />
        </Form.Item>
        <Form.Item name="p" label='含蛋白质' rules={[{ required: true }]}>
          <Input type="number" max={1000} placeholder='请输入蛋白质含量' />
        </Form.Item>
        <Form.Item name="f" label='含脂肪' rules={[{ required: true }]}>
          <Input type="number" max={1000} placeholder='请输入脂肪含量' />
        </Form.Item>

        <Form.Header>计算类型</Form.Header>
        <Form.Item name="calcType" label='计算类型' layout='vertical' rules={[{ required: true, message: '请选择计算类型' }]}>
          <Radio.Group onChange={(val) => setCalcType(val)}>
            <Space direction='vertical'>
              <Radio value={CalcType.NurToFood}>根据需要营养算吃的量</Radio>
              <Radio value={CalcType.FoodToNur}>根据预计吃的量算营养</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Header>计算信息</Form.Header>
        {CalcType.NurToFood === calcType ? <Form.Item name="needType" label='元素类型' layout='vertical' rules={[{ required: true, message: '请选择元素类型' }]}>
          <Radio.Group>
            <Space direction='vertical'>
              <Radio value={"c"}>碳水</Radio>
              <Radio value={"p"}>蛋白质</Radio>
              <Radio value={"f"}>脂肪</Radio>
            </Space>
          </Radio.Group>
        </Form.Item> : null }
        <Form.Item name="needCount" label='要吃的分量' rules={[{ required: true }]}>
          <Input type="number" max={1000} placeholder='请输入要吃够的分量(g)' />
        </Form.Item>
      </Form>

      <div className={`${prefixCls}-result`}>
        <Card title='计算结果'>
          <div className={`${prefixCls}-row`}>
            需要吃该食物的克数:{needFood}g<br/><br/>
            {needFood}g的食物包含：<br/>
            {oC}g碳水<br/>
            {oP}g蛋白质<br/>
            {oF}g脂肪<br/>
          </div>
        </Card>
      </div>
    </div>
  )
}