import { LayoutDefault } from '../Layout/LayoutDefault'
import React, { useEffect, useState } from 'react'
import { getGA4AnalyticsData } from '../../utils/getGoogleAnalyticsData'
import { Button, Typography } from '@mui/joy'
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { GoogleAnalyticsDataApi } from '../GoogleAnalyticsDataApi/GoogleAnalyticsDataApi'

export default function App() {
  const [analyticsData, setAnalyticsData] = useState<any>(null)
  const [userData, setUserData] = useState<any>(null)
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setUserData(tokenResponse)
      setLoggedIn(true)
    },
    onError: (error) => {
      console.error('error: ', error)
      setLoggedIn(false)
    },
  })

  const handleLogout = () => {
    googleLogout()
    window.location.reload()
  }

  console.log('userData', userData)

  return (
    <LayoutDefault>
      {loggedIn ? (
        <>
          <Typography component='h1'>Welcome!</Typography>
          <GoogleAnalyticsDataApi userData={userData} />
          <Button onClick={handleLogout}>Log out</Button>
        </>
      ) : (
        <>
          <Button onClick={() => handleLogin()}>Login</Button>
        </>
      )}
    </LayoutDefault>
  )
}
