import { createRoot } from 'react-dom/client'
import { App } from './components/app'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <div>
    <h1>HELLO WORLD</h1>
    <App />
  </div>
)
