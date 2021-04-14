import { useState, useEffect } from 'react'

export const useIpPosition = (geolocation) => {
  const [position, setPosition] = useState()
  useEffect(() => {
    if (geolocation?.location) {
      const coordinates = [
        geolocation.location.lat,
        geolocation.location.lng
      ]

      setPosition(coordinates)
    }
  }, [geolocation])

  return position
}
