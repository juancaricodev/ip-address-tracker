import React, { createContext, useEffect, useState } from 'react'

import { useGeolocation } from '@hooks/useGeolocation'

export const Context = createContext({})

export const ContextProvider = ({ children }) => {
  const [ip, setIp] = useState('')

  const geolocation = useGeolocation(ip)

  const [position, setPosition] = useState()
  useEffect(() => {
    if (geolocation?.location) {
      const coordinates = [geolocation.location.lat, geolocation.location.lng]
      // {
      //   lat: geolocation.location.lat,
      //   lng: geolocation.location.lng
      // }

      setPosition(coordinates)
    }
  }, [geolocation])

  const handleIp = (ip) => {
    setIp(ip)
  }

  return (
    <Context.Provider value={{ geolocation, handleIp, position }}>
      {children}
    </Context.Provider>
  )
}
