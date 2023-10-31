import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import initViewport from './util/viewportAdapter';
import 'antd-mobile/2x/es/global/global.css'

initViewport();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
