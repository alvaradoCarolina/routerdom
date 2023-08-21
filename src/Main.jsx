import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CasaProvider } from './components/context/CasaProvider'

ReactDOM.render(
  <React.StrictMode>
    <CasaProvider>
      <App />
    </CasaProvider>
  </React.StrictMode>,
  document.getElementById('root')
)