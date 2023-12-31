export const getGoogleAnalyticsData = async (
  propertyId: string,
  accessToken: string
): Promise<any> => {
  const apiVersion = 'v1beta'
  const endpoint = `https://analyticsdata.googleapis.com/${apiVersion}/properties/${propertyId}:runRealtimeReport`

  const requestBody = {
    dimensions: [{ name: 'country' }],
    metrics: [{ name: 'activeUsers' }],
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch GA4 data: ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching GA4 data:', error)
    throw error
  }
}
