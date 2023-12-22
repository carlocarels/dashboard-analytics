import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { CssVarsProvider } from '@mui/joy'
import { GoogleOAuthProvider } from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CssVarsProvider defaultMode='dark' disableTransitionOnChange>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID ?? ''}>
        <App />
      </GoogleOAuthProvider>
    </CssVarsProvider>
  </React.StrictMode>
)
