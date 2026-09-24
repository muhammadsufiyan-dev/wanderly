import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Bootstrap CSS + JS bundle (includes Popper for dropdowns/navbar toggler)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './index.css'

const redirectParams = new URLSearchParams(window.location.search)
const redirectPath = redirectParams.get('p')
if (redirectPath) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  redirectParams.delete('p')
  const remainingQuery = redirectParams.toString()
  window.history.replaceState({}, '', `${base}${redirectPath}${remainingQuery ? `?${remainingQuery}` : ''}`)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
