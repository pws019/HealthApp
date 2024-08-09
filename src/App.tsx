import { useState } from 'react'
import { Divider } from 'antd-mobile'
import CalcForm from './components/CalcForm/CalcForm';
import ResultPanel from './components/ResultPanel/ResultPanel'
import NutrientCalcContainer from './components/NutrientCalcContainer/NutrientCalcContainer'
import './App.less'

function App() {
  const [formData, setFormData] = useState(null)

  return (
    <>
      <div className="container">
        <h1 className="header">碳循环计算器</h1>
        <div className="nav">
          <a href="#nutrient-calc">营养元素计算</a>
        </div>
        <CalcForm onSubmit={setFormData}/>
        <ResultPanel data={formData}/>
        <Divider style={{
            color: '#1677ff',
            borderColor: '#1677ff',
            borderStyle: 'dashed',
          }}>营养元素计算</Divider>
          <div id="nutrient-calc"></div>
        <NutrientCalcContainer />
      </div>
    </>
  )
}

export default App
