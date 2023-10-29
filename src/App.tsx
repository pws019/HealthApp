import { useState } from 'react'
import CalcForm from './components/CalcForm';
import './App.less'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1 className="header">碳循环计算器</h1>
        <CalcForm />
      </div>
    </>
  )
}

export default App
