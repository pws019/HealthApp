import { useState } from 'react'
import CalcForm from './components/CalcForm/CalcForm';
import ResultPanel from './components/ResultPanel/ResultPanel'
import './App.less'

function App() {
  const [formData, setFormData] = useState(null)

  return (
    <>
      <div className="container">
        <h1 className="header">碳循环计算器</h1>
        <CalcForm onSubmit={setFormData}/>
        <ResultPanel data={formData}/>
      </div>
    </>
  )
}

export default App
