export const oauthConfig = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/auth-callback', // Voeg hier je juiste callback-URI toe
  scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
}
