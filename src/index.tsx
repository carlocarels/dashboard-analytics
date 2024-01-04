import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { CssVarsProvider } from '@mui/joy'
import { GoogleOAuthProvider } from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <GoogleOAuthProvider clientId='956548017074-qme62qg7ral0chbvvjh2ft8k5enphot0.apps.googleusercontent.com'>
    <React.StrictMode>
      <CssVarsProvider defaultMode='dark' disableTransitionOnChange>
        <App />
      </CssVarsProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
)
