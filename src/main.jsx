import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/global.css'
import { RoutesDesktop } from './pages/desktop/Routes'
import { RoutesSmartphone } from './pages/smartphone/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="desktop">
      <RoutesDesktop />
    </div>
    <div id="smartphone">
      <RoutesSmartphone />
    </div>
  </React.StrictMode>,
)
