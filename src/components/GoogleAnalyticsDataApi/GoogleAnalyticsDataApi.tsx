import { useEffect, useState } from 'react'
import { getGoogleAnalyticsData } from '../../utils/getGoogleAnalyticsData'
import { UserProfile } from '../App/App'
import { oAuthConfig } from '../../utils/oauth-config'
import { Box } from '@mui/joy'

type GoogleAnalyticsDataApiProps = {
  token: UserProfile['access_token']
}

export const GoogleAnalyticsDataApi = (props: GoogleAnalyticsDataApiProps) => {
  const { token } = props
  const [analyticsData, setAnalyticsData] = useState<any>(null)

  useEffect(() => {
    const propertyId = oAuthConfig.propertyId

    if (!propertyId) return

    const fetchData = async () => {
      try {
        const data = await getGoogleAnalyticsData(propertyId, token)
        setAnalyticsData(data)
        console.log('trying...')
      } catch (error) {
        console.error('Error fetching Google Analytics data:', error)
      }
    }

    if (analyticsData) {
      console.log('analyticsData', analyticsData)
    }

    if (!analyticsData) {
      fetchData()
    }
  }, [analyticsData, token])

  return <Box>GoogleAnalyticsDataApi HERE!</Box>
}
