import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import logo from './assets/pokemon.png'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1><img src={logo} alt="logo" /></h1>
    <App />
  </React.StrictMode>,
)
