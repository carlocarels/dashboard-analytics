import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { CssVarsProvider } from '@mui/joy'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CssVarsProvider defaultMode='dark' disableTransitionOnChange>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
)
