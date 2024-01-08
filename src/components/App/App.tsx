import { Button } from '@mui/joy'
import {
  TokenResponse,
  googleLogout,
  useGoogleLogin,
} from '@react-oauth/google'
import { Suspense, useEffect, useState } from 'react'
import { LayoutDefault } from '../Layout/LayoutDefault'
import { GoogleAnalyticsDataApi } from '../GoogleAnalyticsDataApi/GoogleAnalyticsDataApi'

export type UserProfile = {
  access_token: string
  id: string
  name: string
  family_name: string
  given_name: string
  email: string
  verified_email: boolean
  picture: string
  locale: string
}

export default function App() {
  const [accessToken, setAccessToken] = useState<string>(
    localStorage.getItem('accessToken') || ''
  )
  const [profile, setProfile] = useState<UserProfile | null>(
    JSON.parse(localStorage.getItem('userProfile') || 'null')
  )

  const login = useGoogleLogin({
    onSuccess: (codeResponse: TokenResponse) => {
      const { access_token } = codeResponse
      setAccessToken(access_token)
      localStorage.setItem('accessToken', access_token)
    },
    onError: (error) => console.log('Login Failed:', error),
  })

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (accessToken) {
        try {
          const response = await fetch(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json',
              },
            }
          )

          if (!response.ok) {
            throw new Error(
              `Failed to fetch user profile: ${response.status} ${response.statusText}`
            )
          }

          const data: UserProfile = await response.json()
          setProfile(data)
          localStorage.setItem('userProfile', JSON.stringify(data))
        } catch (error) {
          console.error(error)
        }
      }
    }

    fetchUserProfile()
  }, [accessToken])

  const logOut = () => {
    googleLogout()
    setProfile(null)
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userProfile')
  }

  return (
    <LayoutDefault>
      <div>
        <h2>React Google Login</h2>
        <br />
        <br />
        {profile ? (
          <div>
            <img src={profile.picture} alt='user' />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <Button onClick={logOut}>Log out</Button>
          </div>
        ) : (
          <Button onClick={() => login()}>Sign In </Button>
        )}
      </div>
    </LayoutDefault>
  )
}
