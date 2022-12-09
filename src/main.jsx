import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/global.css'
import { RoutesDesktop } from './pages/desktop/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="desktop">
      <RoutesDesktop />
    </div>
  </React.StrictMode>,
)
