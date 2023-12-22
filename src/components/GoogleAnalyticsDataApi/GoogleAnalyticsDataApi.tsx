import { useEffect, useState } from 'react'
import { getGA4AnalyticsData } from '../../utils/getGoogleAnalyticsData'

type GoogleAnalyticsDataApiProps = {
  userData: object
}

export function GoogleAnalyticsDataApi(props: GoogleAnalyticsDataApiProps) {
  const { userData } = props
  const [analyticsData, setAnalyticsData] = useState<any>(null)

  useEffect(() => {
    const propertyId = process.env.REACT_APP_GA4_PROPERTY_ID ?? ''
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN ?? ''

    const fetchData = async () => {
      try {
        const data = await getGA4AnalyticsData(accessToken, propertyId)
        setAnalyticsData(data)
      } catch (error) {
        console.error('Error fetching Google Analytics data:', error)
      }
    }

    console.log('analyticsData', analyticsData)

    fetchData()
  }, [])

  return <>GoogleAnalyticsDataApi HERE!</>
}
