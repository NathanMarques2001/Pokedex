import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomeDesk } from './pages/desktop/Home'
import { HomeSmart } from './pages/smartphone/Home'
import './style/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="desktop">
      <HomeDesk />
    </div>
    <div id="smartphone">
      <HomeSmart />
    </div>
  </React.StrictMode>,
)
