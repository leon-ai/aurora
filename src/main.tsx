import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

const rootElement = document.getElementById('root')
if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  console.error('Error: Root element not found!')
}
