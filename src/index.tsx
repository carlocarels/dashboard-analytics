import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { CssVarsProvider } from '@mui/joy'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { oAuthConfig } from './utils/oauth-config'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <GoogleOAuthProvider clientId={oAuthConfig.clientId}>
    <React.StrictMode>
      <CssVarsProvider defaultMode='dark' disableTransitionOnChange>
        <App />
      </CssVarsProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
)
